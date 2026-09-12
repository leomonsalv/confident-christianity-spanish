import React, { useState, useEffect } from 'react';
import { 
  X, 
  MessageSquare, 
  RefreshCw,
  Filter,
  Quote
} from 'lucide-react';
import { 
  fetchAllSuggestions, 
  SuggestionRecord
} from '../lib/supabase';

interface SuggestionsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SuggestionsDrawer: React.FC<SuggestionsDrawerProps> = ({ isOpen, onClose }) => {
  const [suggestions, setSuggestions] = useState<SuggestionRecord[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filterModule, setFilterModule] = useState<string>('all');

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
                Sugerencias y Aportes
              </h3>
              <p className="text-xs text-slate-500">
                Retroalimentación editorial de facilitadores
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

        {/* Action / Count bar */}
        <div className="p-3 bg-slate-50 dark:bg-slate-850 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
              {filtered.length} {filtered.length === 1 ? 'sugerencia registrada' : 'sugerencias registradas'}
            </span>
          </div>
        </div>

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
                  <span className="text-[10px] text-slate-400">
                    {new Date(s.created_at || Date.now()).toLocaleDateString()}
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
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
