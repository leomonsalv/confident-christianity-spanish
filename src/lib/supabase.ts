import { createClient } from '@supabase/supabase-js';

export const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || 'https://ysthfjncuskypvxybpol.supabase.co';
export const SUPABASE_PUBLISHABLE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || 'sb_publishable_4yfr68Pg-XBPMKcY04rXcA_T_NmBnx3';
export const SUPABASE_PROJECT_ID = 'ysthfjncuskypvxybpol';

// Safe client using Publishable key
export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  }
});

export interface SuggestionRecord {
  id?: string;
  selected_text: string;
  suggestion: string;
  author_name?: string;
  category?: string;
  module_number?: number | null;
  section_id?: string;
  created_at?: string;
  is_local?: boolean;
}

const LOCAL_STORAGE_KEY = 'cc_saved_suggestions';

export function getLocalSuggestions(): SuggestionRecord[] {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error('Error reading local suggestions', e);
    return [];
  }
}

export function saveLocalSuggestion(item: SuggestionRecord): SuggestionRecord {
  const all = getLocalSuggestions();
  const newItem: SuggestionRecord = {
    ...item,
    id: item.id || `local-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
    created_at: item.created_at || new Date().toISOString(),
    is_local: true,
  };
  all.unshift(newItem);
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(all));
  return newItem;
}

// Anti-duplicate lock: keeps track of in-flight and recent submissions (within 5 seconds)
const inFlightRequests = new Map<string, Promise<{ success: boolean; data?: SuggestionRecord; message: string; isRemote: boolean }>>();
const recentSubmissions = new Map<string, { timestamp: number; result: { success: boolean; data?: SuggestionRecord; message: string; isRemote: boolean } }>();

export function updateLocalSuggestionWithRemote(localId: string, remoteRecord: SuggestionRecord) {
  try {
    const all = getLocalSuggestions();
    const index = all.findIndex(item => item.id === localId);
    if (index !== -1) {
      all[index] = { ...remoteRecord, is_local: false };
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(all));
    }
  } catch (e) {
    console.error('Error updating local suggestion', e);
  }
}

export async function submitSuggestion(data: {
  selected_text: string;
  suggestion: string;
  author_name?: string;
  category?: string;
  module_number?: number | null;
  section_id?: string;
}): Promise<{ success: boolean; data?: SuggestionRecord; message: string; isRemote: boolean }> {
  const cleanSelected = data.selected_text.trim();
  const cleanSuggestion = data.suggestion.trim();
  const cleanAuthor = data.author_name?.trim() || 'Facilitador Anónimo';
  const dedupKey = `${cleanSelected}:::${cleanSuggestion}:::${cleanAuthor}`;

  // 1. Prevent in-flight duplicate requests (e.g. simultaneous double-click)
  if (inFlightRequests.has(dedupKey)) {
    return inFlightRequests.get(dedupKey)!;
  }

  // 2. Prevent rapid repeat submissions of the exact same content within 5 seconds
  const recent = recentSubmissions.get(dedupKey);
  if (recent && (Date.now() - recent.timestamp < 5000)) {
    return recent.result;
  }

  const executionPromise = (async () => {
    const payload: SuggestionRecord = {
      selected_text: cleanSelected,
      suggestion: cleanSuggestion,
      author_name: cleanAuthor,
      category: data.category || 'Mejora editorial',
      module_number: data.module_number ?? null,
      section_id: data.section_id || 'general',
      created_at: new Date().toISOString(),
    };

    // Save temporary local copy for offline resilience
    const localSaved = saveLocalSuggestion(payload);

    try {
      // Insert using the Supabase client
      const { data: inserted, error } = await supabase
        .from('suggestions')
        .insert([
          {
            selected_text: payload.selected_text,
            suggestion: payload.suggestion,
            author_name: payload.author_name,
            category: payload.category,
            module_number: payload.module_number,
            section_id: payload.section_id,
          }
        ])
        .select()
        .single();

      if (error) {
        console.warn('Remote sync note:', error.message);
        const res = {
          success: true,
          data: localSaved,
          isRemote: false,
          message: '¡Sugerencia guardada localmente!',
        };
        recentSubmissions.set(dedupKey, { timestamp: Date.now(), result: res });
        return res;
      }

      // Update local storage record with the remote Supabase UUID so it is not orphaned
      if (localSaved.id && inserted) {
        updateLocalSuggestionWithRemote(localSaved.id, inserted);
      }

      const res = {
        success: true,
        data: { ...inserted, is_local: false },
        isRemote: true,
        message: '¡Sugerencia enviada con éxito!',
      };
      recentSubmissions.set(dedupKey, { timestamp: Date.now(), result: res });
      return res;
    } catch (err: any) {
      console.warn('Network exception:', err);
      const res = {
        success: true,
        data: localSaved,
        isRemote: false,
        message: '¡Sugerencia guardada localmente!',
      };
      recentSubmissions.set(dedupKey, { timestamp: Date.now(), result: res });
      return res;
    } finally {
      inFlightRequests.delete(dedupKey);
    }
  })();

  inFlightRequests.set(dedupKey, executionPromise);
  return executionPromise;
}

export async function fetchAllSuggestions(): Promise<SuggestionRecord[]> {
  const locals = getLocalSuggestions();
  try {
    const { data, error } = await supabase
      .from('suggestions')
      .select('*')
      .order('created_at', { ascending: false });

    if (error || !data) {
      return locals;
    }

    // Merge unique: eliminate local items that already exist in remote data (by ID or matching text)
    const remoteIds = new Set(data.map((d: any) => d.id));
    const uniqueLocals = locals.filter(l => {
      if (remoteIds.has(l.id)) return false;
      const isAlreadyRemote = data.some(d => 
        d.selected_text.trim() === l.selected_text?.trim() && 
        d.suggestion.trim() === l.suggestion?.trim()
      );
      return !isAlreadyRemote;
    });

    return [...data, ...uniqueLocals];
  } catch (e) {
    return locals;
  }
}

export const SUPABASE_SETUP_SQL = `CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS public.suggestions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  selected_text TEXT NOT NULL,
  suggestion TEXT NOT NULL,
  author_name TEXT DEFAULT 'Facilitador Anónimo',
  category TEXT DEFAULT 'Mejora editorial',
  module_number INTEGER,
  section_id TEXT DEFAULT 'general',
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_suggestions_module_number ON public.suggestions(module_number);
CREATE INDEX IF NOT EXISTS idx_suggestions_created_at ON public.suggestions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_suggestions_category ON public.suggestions(category);

ALTER TABLE public.suggestions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Permitir lectura publica de sugerencias" ON public.suggestions;
DROP POLICY IF EXISTS "Permitir insercion publica de sugerencias" ON public.suggestions;

CREATE POLICY "Permitir lectura publica de sugerencias"
  ON public.suggestions FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Permitir insercion publica de sugerencias"
  ON public.suggestions FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Indice unico opcional para blindar inserciones identicas simultaneas a nivel de PostgreSQL
CREATE UNIQUE INDEX IF NOT EXISTS idx_suggestions_dedup
  ON public.suggestions (md5(TRIM(selected_text)), md5(TRIM(suggestion)), COALESCE(TRIM(author_name), ''));
`;
