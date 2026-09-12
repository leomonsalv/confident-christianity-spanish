import React, { useState } from 'react';
import { 
  X, 
  Bookmark, 
  BookOpen, 
  Search, 
  Layers, 
  Compass, 
  FileText, 
  CheckCircle2, 
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { MODULES_DATA, GUIDE_METADATA } from '../data/guideContent';
import { UserRole } from '../types';

interface SidebarTOCProps {
  isOpen: boolean;
  onClose: () => void;
  activeId: string;
  onSelectSection: (id: string) => void;
  bookmarkedModules: number[];
  role?: UserRole;
}

export const SidebarTOC: React.FC<SidebarTOCProps> = ({
  isOpen,
  onClose,
  activeId,
  onSelectSection,
  bookmarkedModules,
  role = 'facilitador',
}) => {
  const isStudent = role === 'estudiante';
  const [filterQuery, setFilterQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | 'bookmarks'>('all');

  if (!isOpen) return null;

  const filteredModules = MODULES_DATA.filter(m => 
    m.title.toLowerCase().includes(filterQuery.toLowerCase()) ||
    m.number.toString() === filterQuery.trim() ||
    m.objective.toLowerCase().includes(filterQuery.toLowerCase())
  );

  const displayedModules = activeTab === 'bookmarks'
    ? filteredModules.filter(m => bookmarkedModules.includes(m.number))
    : filteredModules;

  const handleItemClick = (id: string) => {
    onSelectSection(id);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="relative w-full max-w-sm bg-white dark:bg-slate-900 h-full shadow-2xl flex flex-col z-10 border-r border-slate-200 dark:border-slate-800 transition-transform">
        {/* Header */}
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-sky-600 flex items-center justify-center text-white font-bold text-sm">
              CC
            </div>
            <div>
              <h2 className="font-bold text-slate-900 dark:text-white text-sm">
                Tabla de Contenido
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {isStudent ? '20 Módulos de Estudio' : `${GUIDE_METADATA.title} · 32 Páginas`}
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter and Tab Bar */}
        <div className="p-3 border-b border-slate-200 dark:border-slate-800 space-y-2">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
            <input 
              type="text" 
              placeholder="Filtrar por título, número o tema..."
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>

          <div className="flex rounded-lg bg-slate-100 dark:bg-slate-800 p-0.5 text-xs font-medium">
            <button
              onClick={() => setActiveTab('all')}
              className={`flex-1 py-1 rounded-md transition-all ${
                activeTab === 'all'
                  ? 'bg-white dark:bg-slate-700 text-sky-600 dark:text-sky-300 shadow-sm'
                  : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              Todos los Módulos (20)
            </button>
            <button
              onClick={() => setActiveTab('bookmarks')}
              className={`flex-1 py-1 rounded-md flex items-center justify-center gap-1 transition-all ${
                activeTab === 'bookmarks'
                  ? 'bg-white dark:bg-slate-700 text-sky-600 dark:text-sky-300 shadow-sm'
                  : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              <Bookmark className="w-3 h-3" />
              Guardados ({bookmarkedModules.length})
            </button>
          </div>
        </div>

        {/* Scrollable list */}
        <div className="flex-1 overflow-y-auto p-3 space-y-4">
          {!isStudent && activeTab === 'all' && !filterQuery && (
            <div className="space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-2">
                Introducción & Guía
              </span>

              <button
                onClick={() => handleItemClick('portada')}
                className={`w-full text-left px-3 py-2 rounded-xl text-xs flex items-center justify-between transition-colors ${
                  activeId === 'portada'
                    ? 'bg-sky-50 text-sky-700 dark:bg-sky-950/60 dark:text-sky-300 font-semibold'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-sky-500" />
                  <span>Portada · Portada Oficial</span>
                </div>
                <span className="text-[10px] text-slate-400">Pág. 1</span>
              </button>

              <button
                onClick={() => handleItemClick('acerca')}
                className={`w-full text-left px-3 py-2 rounded-xl text-xs flex items-center justify-between transition-colors ${
                  activeId === 'acerca'
                    ? 'bg-sky-50 text-sky-700 dark:bg-sky-950/60 dark:text-sky-300 font-semibold'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <div className="flex items-center gap-2">
                  <FileText className="w-3.5 h-3.5 text-sky-500" />
                  <span>Acerca de esta guía</span>
                </div>
                <span className="text-[10px] text-slate-400">Pág. 2</span>
              </button>

              <button
                onClick={() => handleItemClick('parte-a')}
                className={`w-full text-left px-3 py-2 rounded-xl text-xs flex items-center justify-between transition-colors ${
                  activeId === 'parte-a'
                    ? 'bg-sky-50 text-sky-700 dark:bg-sky-950/60 dark:text-sky-300 font-semibold'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5 text-sky-500" />
                  <span>Parte A · El papel del facilitador</span>
                </div>
                <span className="text-[10px] text-slate-400">Pág. 4–5</span>
              </button>

              <button
                onClick={() => handleItemClick('parte-b')}
                className={`w-full text-left px-3 py-2 rounded-xl text-xs flex items-center justify-between transition-colors ${
                  activeId === 'parte-b'
                    ? 'bg-sky-50 text-sky-700 dark:bg-sky-950/60 dark:text-sky-300 font-semibold'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Compass className="w-3.5 h-3.5 text-sky-500" />
                  <span>Parte B · Conducir la sesión (60')</span>
                </div>
                <span className="text-[10px] text-slate-400">Pág. 6</span>
              </button>

              <button
                onClick={() => handleItemClick('parte-c-intro')}
                className={`w-full text-left px-3 py-2 rounded-xl text-xs flex items-center justify-between transition-colors ${
                  activeId === 'parte-c-intro'
                    ? 'bg-sky-50 text-sky-700 dark:bg-sky-950/60 dark:text-sky-300 font-semibold'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <div className="flex items-center gap-2">
                  <BookOpen className="w-3.5 h-3.5 text-sky-500" />
                  <span>Parte C · Estructura de los 20 módulos</span>
                </div>
                <span className="text-[10px] text-slate-400">Pág. 7</span>
              </button>
            </div>
          )}

          {/* Modules List */}
          <div className="space-y-1">
            <div className="flex items-center justify-between px-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                {activeTab === 'bookmarks' ? 'Módulos Guardados' : 'Módulos 1 a 20'}
              </span>
              <span className="text-[10px] text-slate-400">
                {displayedModules.length} módulos
              </span>
            </div>

            {displayedModules.length === 0 ? (
              <div className="p-4 text-center text-xs text-slate-400 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                {activeTab === 'bookmarks' 
                  ? 'No has guardado ningún módulo todavía. Haz clic en el icono de marcador en cualquier módulo para guardarlo aquí.' 
                  : 'No se encontraron módulos con ese criterio.'}
              </div>
            ) : (
              displayedModules.map((m) => {
                const isCurrent = activeId === `modulo-${m.number}`;
                const isSaved = bookmarkedModules.includes(m.number);
                const isDifficult = m.number >= 13;

                return (
                  <button
                    key={m.id}
                    onClick={() => handleItemClick(`modulo-${m.number}`)}
                    className={`w-full text-left px-3 py-2.5 rounded-xl text-xs flex items-start justify-between gap-2 transition-all ${
                      isCurrent
                        ? 'bg-sky-500 text-white font-medium shadow-sm'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    <div className="flex items-start gap-2.5 min-w-0">
                      <span className={`w-5 h-5 rounded flex items-center justify-center text-[10px] font-bold shrink-0 ${
                        isCurrent 
                          ? 'bg-white/20 text-white' 
                          : isDifficult 
                            ? 'bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300' 
                            : 'bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300'
                      }`}>
                        {m.number}
                      </span>
                      <div className="min-w-0">
                        <div className="truncate font-medium">
                          {m.title}
                        </div>
                        <div className={`text-[10px] truncate ${isCurrent ? 'text-white/80' : 'text-slate-400'}`}>
                          {m.workbookChapter || 'Charla & Diapositivas'}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 shrink-0">
                      {isSaved && (
                        <Bookmark className={`w-3 h-3 fill-current ${isCurrent ? 'text-white' : 'text-amber-500'}`} />
                      )}
                      <span className={`text-[10px] ${isCurrent ? 'text-white/70' : 'text-slate-400'}`}>
                        P.{m.pageNumber}
                      </span>
                    </div>
                  </button>
                );
              })
            )}
          </div>

          {/* Reference D */}
          {!isStudent && activeTab === 'all' && !filterQuery && (
            <div className="space-y-1 pt-2 border-t border-slate-200 dark:border-slate-800">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-2">
                Parte D · Referencias
              </span>

              <button
                onClick={() => handleItemClick('parte-d-1')}
                className={`w-full text-left px-3 py-2 rounded-xl text-xs flex items-center justify-between transition-colors ${
                  activeId === 'parte-d-1'
                    ? 'bg-sky-50 text-sky-700 dark:bg-sky-950/60 dark:text-sky-300 font-semibold'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <span>D.1 Dar la vuelta a las preguntas</span>
                <span className="text-[10px] text-slate-400">Pág. 28</span>
              </button>

              <button
                onClick={() => handleItemClick('parte-d-2')}
                className={`w-full text-left px-3 py-2 rounded-xl text-xs flex items-center justify-between transition-colors ${
                  activeId === 'parte-d-2'
                    ? 'bg-sky-50 text-sky-700 dark:bg-sky-950/60 dark:text-sky-300 font-semibold'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <span>D.2 Directo a la yugular</span>
                <span className="text-[10px] text-slate-400">Pág. 30</span>
              </button>

              <button
                onClick={() => handleItemClick('parte-d-3')}
                className={`w-full text-left px-3 py-2 rounded-xl text-xs flex items-center justify-between transition-colors ${
                  activeId === 'parte-d-3'
                    ? 'bg-sky-50 text-sky-700 dark:bg-sky-950/60 dark:text-sky-300 font-semibold'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <span>D.3 La escala de Engel (-10 a +3)</span>
                <span className="text-[10px] text-slate-400">Pág. 30</span>
              </button>

              <button
                onClick={() => handleItemClick('parte-d-4')}
                className={`w-full text-left px-3 py-2 rounded-xl text-xs flex items-center justify-between transition-colors ${
                  activeId === 'parte-d-4'
                    ? 'bg-sky-50 text-sky-700 dark:bg-sky-950/60 dark:text-sky-300 font-semibold'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <span>D.4 El esquema de John Chapman</span>
                <span className="text-[10px] text-slate-400">Pág. 31</span>
              </button>

              <button
                onClick={() => handleItemClick('parte-d-5')}
                className={`w-full text-left px-3 py-2 rounded-xl text-xs flex items-center justify-between transition-colors ${
                  activeId === 'parte-d-5'
                    ? 'bg-sky-50 text-sky-700 dark:bg-sky-950/60 dark:text-sky-300 font-semibold'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <span>D.5 Notas editoriales</span>
                <span className="text-[10px] text-slate-400">Pág. 32</span>
              </button>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="p-3 bg-slate-50 dark:bg-slate-800/40 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-500 text-center">
          CMF 2005 · Edición española corregida 2026
        </div>
      </div>
    </div>
  );
};
