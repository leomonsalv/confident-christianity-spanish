import React, { useState, useEffect } from 'react';
import { 
  X, 
  MessageSquare, 
  Database, 
  CheckCircle, 
  Copy, 
  Check, 
  Code, 
  RefreshCw,
  ExternalLink,
  Filter,
  Quote
} from 'lucide-react';
import { 
  fetchAllSuggestions, 
  SuggestionRecord, 
  SUPABASE_PROJECT_ID, 
  SUPABASE_SETUP_SQL 
} from '../lib/supabase';

interface SuggestionsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SuggestionsDrawer: React.FC<SuggestionsDrawerProps> = ({ isOpen, onClose }) => {
  const [suggestions, setSuggestions] = useState<SuggestionRecord[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filterModule, setFilterModule] = useState<string>('all');
  const [copiedSql, setCopiedSql] = useState(false);
  const [showSqlModal, setShowSqlModal] = useState(false);

  const loadData = async () => {
    setIsLoading(true);
    const list = await fetchAllSuggestions();
    setSuggestions(list);
    setIsLoading(false);
  };

  useEffect(() => {
    if (isOpen) {
      loadData();
    }
  }, [isOpen]);

  const handleCopySql = () => {
    navigator.clipboard.writeText(SUPABASE_SETUP_SQL);
    setCopiedSql(true);
    setTimeout(() => setCopiedSql(false), 2000);
  };

  const filtered = suggestions.filter(s => {
    if (filterModule === 'all') return true;
    return s.module_number?.toString() === filterModule;
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative w-full max-w-lg bg-white dark:bg-slate-900 h-full shadow-2xl z-10 flex flex-col border-l border-slate-200 dark:border-slate-800">
        {/* Header */}
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                Sugerencias de la Comunidad
              </h3>
              <p className="text-xs text-slate-500">
                Conectado a Supabase ({SUPABASE_PROJECT_ID})
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={loadData}
              title="Refrescar sugerencias"
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
            >
              <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
            </button>
            <button 
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Action bar / Supabase SQL helper */}
        <div className="p-3 bg-slate-50 dark:bg-slate-850 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
              {filtered.length} sugerencias
            </span>
          </div>

          <button
            onClick={() => setShowSqlModal(true)}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-sky-600 text-white text-xs font-semibold hover:bg-sky-500 transition-colors shadow-sm"
          >
            <Code className="w-3.5 h-3.5" />
            <span>Ver SQL de Supabase</span>
          </button>
        </div>

        {/* SQL Schema Modal / Alert */}
        {showSqlModal && (
          <div className="p-4 bg-slate-900 text-slate-100 border-b border-slate-800 space-y-2 text-xs">
            <div className="flex items-center justify-between">
              <span className="font-bold text-sky-400">Esquema SQL para Supabase</span>
              <button onClick={() => setShowSqlModal(false)} className="text-slate-400 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-[11px] text-slate-400">
              Copia y pega este código en el SQL Editor de tu consola Supabase para crear la tabla <code className="text-sky-300">suggestions</code>:
            </p>
            <pre className="p-2.5 rounded-lg bg-slate-950 font-mono text-[10px] text-slate-300 overflow-x-auto max-h-32 border border-slate-800">
              {SUPABASE_SETUP_SQL}
            </pre>
            <div className="flex justify-end pt-1">
              <button
                onClick={handleCopySql}
                className="flex items-center gap-1 px-2.5 py-1 rounded bg-sky-500 text-white text-[11px] font-bold"
              >
                {copiedSql ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                <span>{copiedSql ? '¡Copiado!' : 'Copiar SQL'}</span>
              </button>
            </div>
          </div>
        )}

        {/* Filter bar */}
        <div className="p-3 border-b border-slate-200 dark:border-slate-800 flex items-center gap-2">
          <Filter className="w-3.5 h-3.5 text-slate-400" />
          <select
            value={filterModule}
            onChange={(e) => setFilterModule(e.target.value)}
            className="w-full text-xs p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200"
          >
            <option value="all">Todos los módulos y secciones</option>
            {Array.from({ length: 20 }, (_, i) => i + 1).map(n => (
              <option key={n} value={n.toString()}>Módulo {n}</option>
            ))}
          </select>
        </div>

        {/* Suggestion list */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {filtered.length === 0 ? (
            <div className="p-8 text-center text-xs text-slate-400 space-y-2">
              <Quote className="w-8 h-8 mx-auto text-slate-300 dark:text-slate-700" />
              <p className="font-semibold text-slate-600 dark:text-slate-300">No hay sugerencias en esta vista.</p>
              <p>Subraya cualquier texto en el documento y haz clic en "Añadir Sugerencia" para enviar la primera.</p>
            </div>
          ) : (
            filtered.map((s, idx) => (
              <div 
                key={s.id || idx}
                className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700/80 space-y-2 text-xs"
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold px-2 py-0.5 rounded bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300 text-[10px]">
                      {s.category || 'Sugerencia'}
                    </span>
                    {s.module_number && (
                      <span className="text-[10px] text-slate-500 font-semibold">
                        Módulo {s.module_number}
                      </span>
                    )}
                  </div>
                  <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                    s.is_local 
                      ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300' 
                      : 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                  }`}>
                    {s.is_local ? 'Local' : 'Supabase Cloud'}
                  </span>
                </div>

                {/* Quoted selected text */}
                <div className="p-2 rounded-lg bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-700/60 text-slate-600 dark:text-slate-300 italic text-[11px] leading-relaxed">
                  «{s.selected_text}»
                </div>

                {/* Suggestion body */}
                <p className="font-medium text-slate-800 dark:text-slate-100 leading-relaxed">
                  {s.suggestion}
                </p>

                {/* Footer info */}
                <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1 border-t border-slate-200/60 dark:border-slate-700/60">
                  <span>Por: <strong>{s.author_name || 'Anónimo'}</strong></span>
                  <span>{new Date(s.created_at || Date.now()).toLocaleDateString()}</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
