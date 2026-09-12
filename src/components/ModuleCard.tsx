import React, { useState } from 'react';
import { 
  Bookmark, 
  Copy, 
  Check, 
  Volume2, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  AlertTriangle, 
  Share2, 
  MessageCircle, 
  HelpCircle, 
  BookOpen, 
  FileEdit,
  ExternalLink
} from 'lucide-react';
import { ModuleItem } from '../data/guideContent';
import { PARTE_D } from '../data/guideContent';
import { DrPeterPresentation } from './DrPeterPresentation';
import { UserRole } from '../types';

interface ModuleCardProps {
  module: ModuleItem;
  isBookmarked: boolean;
  onToggleBookmark: (num: number) => void;
  onPlayAudio: (module: ModuleItem) => void;
  notes: string;
  onSaveNotes: (num: number, text: string) => void;
  onJumpToVuelta?: (turnId: number) => void;
  role?: UserRole;
}

export const ModuleCard: React.FC<ModuleCardProps> = ({
  module,
  isBookmarked,
  onToggleBookmark,
  onPlayAudio,
  notes,
  onSaveNotes,
  onJumpToVuelta,
  role = 'facilitador',
}) => {
  const isStudent = role === 'estudiante';
  const [copiedQuestions, setCopiedQuestions] = useState(false);
  const [copiedObjectionIdx, setCopiedObjectionIdx] = useState<number | null>(null);
  const [isNotesOpen, setIsNotesOpen] = useState(false);
  const [localNote, setLocalNote] = useState(notes);
  const [showVuelta, setShowVuelta] = useState(false);

  // Find corresponding Vuelta from Parte D.1
  const correspondingTurn = PARTE_D.d1.turns.find(t => t.moduleRef === module.number);

  const handleCopyQuestions = () => {
    const text = `*Preguntas de Discusión · Módulo ${module.number}: ${module.title}*\n\n` +
      module.discussionQuestions.map((q, idx) => `${idx + 1}. ${q}`).join('\n\n');
    navigator.clipboard.writeText(text);
    setCopiedQuestions(true);
    setTimeout(() => setCopiedQuestions(false), 2000);
  };

  const handleCopyObjection = (idx: number, obj: string, resp: string) => {
    const text = `*Objeción:* ${obj}\n*Respuesta de facilitación:* ${resp}`;
    navigator.clipboard.writeText(text);
    setCopiedObjectionIdx(idx);
    setTimeout(() => setCopiedObjectionIdx(null), 2000);
  };

  const handleSaveNote = () => {
    onSaveNotes(module.number, localNote);
  };

  const isDifficultTrack = module.number >= 13;

  return (
    <article 
      id={`modulo-${module.number}`}
      className="pt-10 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8 scroll-mt-20 border-b border-slate-200/80 dark:border-slate-800/80 last:border-0"
    >
      {/* Module Header Bar */}
      <div className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className={`px-3 py-1 rounded-xl text-xs font-bold uppercase tracking-wider ${
              isDifficultTrack 
                ? 'bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300' 
                : 'bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300'
            }`}>
              Módulo {module.number}
            </span>
            <span className="text-xs text-slate-400">
              Página {module.pageNumber}
            </span>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => onPlayAudio(module)}
              title="Escuchar audio resumen"
              className="p-2 rounded-xl text-slate-500 hover:text-sky-600 dark:text-slate-400 dark:hover:text-sky-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <Volume2 className="w-4 h-4" />
            </button>

            <button
              onClick={() => onToggleBookmark(module.number)}
              title={isBookmarked ? 'Quitar marcador' : 'Guardar módulo'}
              className={`p-2 rounded-xl transition-colors ${
                isBookmarked 
                  ? 'text-amber-500 bg-amber-50 dark:bg-amber-950/40' 
                  : 'text-slate-500 hover:text-amber-500 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
            </button>

            {!isStudent && (
              <button
                onClick={() => setIsNotesOpen(!isNotesOpen)}
                title="Mis notas de facilitador"
                className={`p-2 rounded-xl transition-colors ${
                  notes.trim() 
                    ? 'text-sky-600 bg-sky-50 dark:bg-sky-950/40' 
                    : 'text-slate-500 hover:text-sky-600 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <FileEdit className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Title & Workbook Chapter */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {module.title}
          </h2>
          <p className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">
            {module.workbookChapter ? `Cuaderno: ${module.workbookChapter}` : 'Cuaderno: sin capítulo propio'}
          </p>
        </div>
      </div>

      {/* Facilitator Private Notes Area (Expandable) */}
      {!isStudent && isNotesOpen && (
        <div className="p-4 rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/60 space-y-2.5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-amber-900 dark:text-amber-300 flex items-center gap-1.5">
              <FileEdit className="w-3.5 h-3.5" />
              <span>Notas privadas de preparación (se guardan localmente)</span>
            </span>
            <button
              onClick={() => setIsNotesOpen(false)}
              className="text-xs text-slate-400 hover:text-slate-600"
            >
              Cerrar
            </button>
          </div>
          <textarea
            value={localNote}
            onChange={(e) => setLocalNote(e.target.value)}
            onBlur={handleSaveNote}
            placeholder="Escribe tus reflexiones, preguntas de tu cohorte o ideas para romper el hielo..."
            className="w-full p-3 text-xs sm:text-sm rounded-xl border border-amber-200 dark:border-amber-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 min-h-[80px]"
          />
          <div className="flex justify-end">
            <button
              onClick={handleSaveNote}
              className="px-3 py-1 rounded-lg bg-amber-600 text-white text-xs font-semibold hover:bg-amber-500 transition-colors"
            >
              Guardar Nota
            </button>
          </div>
        </div>
      )}

      {/* Objetivo Callout Box */}
      <div className="p-5 rounded-2xl bg-sky-50/90 dark:bg-sky-950/40 border-l-4 border-sky-600 dark:border-sky-500 shadow-sm space-y-1">
        <span className="text-[11px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-300">
          Objetivo
        </span>
        <p className="text-sm sm:text-base font-semibold text-slate-900 dark:text-sky-100 leading-relaxed">
          {module.objective}
        </p>
      </div>

      {/* Lo que el Dr. Peter presenta - Enhanced Rich Presentation */}
      <DrPeterPresentation 
        content={module.whatDrPeterPresents}
        visualData={module.visualData}
        moduleNumber={module.number}
      />

      {/* Driver Alert / Terminology Note if present */}
      {!isStudent && module.driverAlert && (
        <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/90 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-700 text-xs sm:text-sm text-amber-950 dark:text-amber-100 space-y-1.5 shadow-sm">
          <div className="flex items-center gap-2 font-bold text-amber-900 dark:text-amber-300 text-xs uppercase tracking-wider">
            <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
            <span>Alerta de Conducción / Nota Clave</span>
          </div>
          <p className="leading-relaxed">
            {module.driverAlert}
          </p>
        </div>
      )}

      {/* Lo que no se puede recortar (Signature plum/magenta alert box) */}
      {!isStudent && (
        <div className="p-5 sm:p-6 rounded-2xl bg-pink-50/70 dark:bg-pink-950/30 border-l-4 border-pink-700 dark:border-pink-500 space-y-1.5">
          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-pink-800 dark:text-pink-300">
            <AlertTriangle className="w-4 h-4 text-pink-700 dark:text-pink-400" />
            <span>Lo que no se puede recortar</span>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-pink-100 leading-relaxed">
            {module.cannotCut}
          </p>
        </div>
      )}

      {/* Preguntas de Discusión */}
      {module.discussionQuestions.length > 0 && (
        <div className="p-5 sm:p-6 rounded-3xl bg-slate-50 dark:bg-slate-850/60 border border-slate-200 dark:border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-sky-600 dark:text-sky-400" />
              <span>Preguntas de discusión</span>
            </h4>

            <button
              onClick={handleCopyQuestions}
              className="flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 transition-colors shadow-sm"
            >
              {copiedQuestions ? (
                <>
                  <Check className="w-3 h-3 text-emerald-500" />
                  <span className="text-emerald-600 dark:text-emerald-400">¡Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  <span>Copiar para WhatsApp/Zoom</span>
                </>
              )}
            </button>
          </div>

          <ul className="space-y-2.5">
            {module.discussionQuestions.map((q, qIdx) => (
              <li key={qIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                <span className="w-5 h-5 rounded-full bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                  {qIdx + 1}
                </span>
                <span className="leading-relaxed">{q}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Objeciones comunes */}
      {!isStudent && module.commonObjections.length > 0 && (
        <div className="space-y-3">
          <h4 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-sky-600 dark:text-sky-400" />
            <span>Objeciones comunes en la sala</span>
          </h4>

          <div className="grid gap-3">
            {module.commonObjections.map((obj, oIdx) => (
              <div 
                key={oIdx}
                className="p-4 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="font-semibold italic text-xs sm:text-sm text-sky-900 dark:text-sky-300">
                    {obj.objection}
                  </div>
                  <button
                    onClick={() => handleCopyObjection(oIdx, obj.objection, obj.response)}
                    title="Copiar guion"
                    className="p-1 rounded text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 shrink-0"
                  >
                    {copiedObjectionIdx === oIdx ? (
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pl-3 border-l-2 border-slate-300 dark:border-slate-700">
                  {obj.response}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Vuelta D.1 (If available for modules 13-20) */}
      {!isStudent && correspondingTurn && (
        <div className="p-5 rounded-2xl bg-purple-50/70 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800/60 space-y-2.5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-purple-900 dark:text-purple-300 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
              <span>Vuelta a Jesús correspondiente (Parte D.1 · Ítem {correspondingTurn.id})</span>
            </span>
            <button
              onClick={() => setShowVuelta(!showVuelta)}
              className="text-xs text-purple-700 dark:text-purple-300 font-semibold hover:underline flex items-center gap-1"
            >
              {showVuelta ? 'Ocultar' : 'Ver guion de la Vuelta'}
              {showVuelta ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>

          {showVuelta && (
            <div className="space-y-2 pt-2 border-t border-purple-200 dark:border-purple-800 text-xs sm:text-sm text-purple-950 dark:text-purple-100">
              <p className="italic leading-relaxed">
                {correspondingTurn.script}
              </p>
              <div className="font-mono text-xs font-bold text-purple-700 dark:text-purple-300">
                Referencias: {correspondingTurn.references}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Footer Reference */}
      <div className="p-3 bg-slate-50 dark:bg-slate-800/40 rounded-xl text-xs text-slate-500 dark:text-slate-400 flex flex-wrap items-center justify-between gap-2 border border-slate-200/50 dark:border-slate-800/50">
        <div>
          <strong>Cuaderno de trabajo:</strong> {module.workbookRef || 'Ver capítulo afín'}
        </div>
        {!isStudent && module.vueltaRef && (
          <div className="text-sky-600 dark:text-sky-400 font-semibold">
            {module.vueltaRef}
          </div>
        )}
      </div>
    </article>
  );
};
