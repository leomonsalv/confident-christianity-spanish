import React, { useState, useEffect, useRef } from 'react';
import { Search, X, BookOpen, HelpCircle, ArrowRight, CornerDownLeft } from 'lucide-react';
import { MODULES_DATA, PARTE_D, PARTE_A, PARTE_B } from '../data/guideContent';

interface SearchResult {
  id: string;
  type: 'module' | 'objection' | 'question' | 'reference' | 'guide';
  title: string;
  snippet: string;
  badge: string;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectResult: (id: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectResult,
}) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
      setResults([]);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else onSelectResult(''); // open
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onSelectResult]);

  useEffect(() => {
    const q = query.trim().toLowerCase();
    if (!q || q.length < 2) {
      setResults([]);
      return;
    }

    const found: SearchResult[] = [];

    // Search in modules
    MODULES_DATA.forEach((m) => {
      // Title or objective match
      if (m.title.toLowerCase().includes(q) || m.objective.toLowerCase().includes(q)) {
        found.push({
          id: `modulo-${m.number}`,
          type: 'module',
          title: `Módulo ${m.number}: ${m.title}`,
          snippet: m.objective,
          badge: `Módulo ${m.number}`
        });
      }

      // Content match
      if (m.whatDrPeterPresents.toLowerCase().includes(q)) {
        const idx = m.whatDrPeterPresents.toLowerCase().indexOf(q);
        const start = Math.max(0, idx - 40);
        const snippet = '...' + m.whatDrPeterPresents.substring(start, start + 120) + '...';
        found.push({
          id: `modulo-${m.number}`,
          type: 'module',
          title: `Módulo ${m.number} · Presentación`,
          snippet: snippet,
          badge: `Módulo ${m.number}`
        });
      }

      // Objections match
      m.commonObjections.forEach((obj) => {
        if (obj.objection.toLowerCase().includes(q) || obj.response.toLowerCase().includes(q)) {
          found.push({
            id: `modulo-${m.number}`,
            type: 'objection',
            title: `Objeción: ${obj.objection}`,
            snippet: obj.response,
            badge: `Módulo ${m.number} · Objeción`
          });
        }
      });

      // Questions match
      m.discussionQuestions.forEach((dq) => {
        if (dq.toLowerCase().includes(q)) {
          found.push({
            id: `modulo-${m.number}`,
            type: 'question',
            title: `Pregunta de discusión`,
            snippet: dq,
            badge: `Módulo ${m.number}`
          });
        }
      });
    });

    // Search in Parte D Reference
    PARTE_D.d1.turns.forEach((t) => {
      if (t.question.toLowerCase().includes(q) || t.script.toLowerCase().includes(q)) {
        found.push({
          id: 'parte-d-1',
          type: 'reference',
          title: `Vuelta D.1: ${t.question}`,
          snippet: t.script,
          badge: `Referencia D.1`
        });
      }
    });

    PARTE_D.d4.headings.forEach((h) => {
      if (h.tag.toLowerCase().includes(q) || h.content.toLowerCase().includes(q)) {
        found.push({
          id: 'parte-d-4',
          type: 'reference',
          title: `Esquema de Chapman: ${h.tag}`,
          snippet: h.content,
          badge: `Referencia D.4`
        });
      }
    });

    // Search in Parte A and B
    if (PARTE_A.a2.goldenRule.quote.toLowerCase().includes(q) || 'investigar'.includes(q) || 'apologetica'.includes(q)) {
      found.push({
        id: 'parte-a',
        type: 'guide',
        title: 'Regla de oro del facilitador (A.2)',
        snippet: PARTE_A.a2.goldenRule.quote,
        badge: 'Parte A'
      });
    }

    if (q.includes('tiempo') || q.includes('cronometro') || q.includes('sesion') || q.includes('sala') || q.includes('resumen')) {
      found.push({
        id: 'parte-b',
        type: 'guide',
        title: 'Sesión estándar de una hora (60 minutos)',
        snippet: PARTE_B.corePrinciple,
        badge: 'Parte B'
      });
    }

    setResults(found.slice(0, 15));
  }, [query]);

  if (!isOpen) return null;

  const handleSelect = (id: string) => {
    onSelectResult(id);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-16 sm:pt-24">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800 z-10 flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Buscar por conceptos, objeciones, citas, módulos (ej: cosmovisión, Chapman, salas)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm sm:text-base text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none"
          />
          {query && (
            <button 
              onClick={() => setQuery('')}
              className="p-1 rounded text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-flex items-center text-[10px] bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-2 py-0.5 rounded text-slate-500">
            ESC
          </kbd>
        </div>

        {/* Results Container */}
        <div className="flex-1 overflow-y-auto p-2 space-y-1">
          {query.trim().length >= 2 && results.length === 0 && (
            <div className="p-8 text-center text-slate-400 text-sm">
              No se encontraron coincidencias para "{query}".
            </div>
          )}

          {query.trim().length < 2 && (
            <div className="p-8 text-center text-xs text-slate-400 space-y-2">
              <p>Escribe al menos 2 letras para buscar en los 20 módulos y herramientas.</p>
              <div className="flex flex-wrap gap-1.5 justify-center pt-2">
                {['Cosmovisión', 'Escala de Engel', 'Salas simultáneas', 'Chapman', 'Resurrección', 'Sufrimiento', 'Yugular'].map(tag => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs hover:bg-sky-100 hover:text-sky-800 transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}

          {results.map((res, index) => (
            <button
              key={`${res.id}-${index}`}
              onClick={() => handleSelect(res.id)}
              className="w-full text-left p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-colors flex items-start justify-between gap-3 group border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
            >
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300">
                    {res.badge}
                  </span>
                  <span className="text-xs font-semibold text-slate-900 dark:text-white truncate">
                    {res.title}
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                  {res.snippet}
                </p>
              </div>

              <div className="p-1 rounded-lg text-slate-400 group-hover:text-sky-500 transition-colors self-center">
                <ArrowRight className="w-4 h-4" />
              </div>
            </button>
          ))}
        </div>

        {/* Footer */}
        <div className="p-3 bg-slate-50 dark:bg-slate-800/40 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-500 flex items-center justify-between">
          <span>Navega con enter y escape</span>
          <span>{results.length} coincidencias</span>
        </div>
      </div>
    </div>
  );
};
