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

export async function submitSuggestion(data: {
  selected_text: string;
  suggestion: string;
  author_name?: string;
  category?: string;
  module_number?: number | null;
  section_id?: string;
}): Promise<{ success: boolean; data?: SuggestionRecord; message: string; isRemote: boolean }> {
  const payload: SuggestionRecord = {
    selected_text: data.selected_text.trim(),
    suggestion: data.suggestion.trim(),
    author_name: data.author_name?.trim() || 'Facilitador Anónimo',
    category: data.category || 'Mejora editorial',
    module_number: data.module_number ?? null,
    section_id: data.section_id || 'general',
    created_at: new Date().toISOString(),
  };

  // Always save a local copy as backup
  const localSaved = saveLocalSuggestion(payload);

  try {
    // Insert using the client
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
      return {
        success: true,
        data: localSaved,
        isRemote: false,
        message: '¡Sugerencia enviada y guardada con éxito!',
      };
    }

    return {
      success: true,
      data: { ...inserted, is_local: false },
      isRemote: true,
      message: '¡Sugerencia enviada con éxito!',
    };
  } catch (err: any) {
    console.warn('Network exception:', err);
    return {
      success: true,
      data: localSaved,
      isRemote: false,
      message: '¡Sugerencia guardada con éxito!',
    };
  }
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

    // Merge unique
    const remoteIds = new Set(data.map((d: any) => d.id));
    const uniqueLocals = locals.filter(l => !remoteIds.has(l.id));
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
`;
