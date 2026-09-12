import React, { useState, useEffect, useRef } from 'react';
import { 
  MessageSquarePlus, 
  Send, 
  X, 
  CheckCircle2, 
  CloudUpload, 
  Sparkles, 
  Quote,
  AlertCircle
} from 'lucide-react';
import { submitSuggestion } from '../lib/supabase';

interface SelectionState {
  text: string;
  x: number;
  y: number;
  placement: 'top' | 'bottom';
  sectionId?: string;
  moduleNumber?: number | null;
}

interface TextSelectionPopoverProps {
  onSuggestionAdded?: () => void;
}

export const TextSelectionPopover: React.FC<TextSelectionPopoverProps> = ({ onSuggestionAdded }) => {
  const [selectionState, setSelectionState] = useState<SelectionState | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [suggestionText, setSuggestionText] = useState('');
  const [authorName, setAuthorName] = useState(() => localStorage.getItem('cc_author_name') || '');
  const [category, setCategory] = useState('Mejora editorial');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ text: string; isRemote: boolean } | null>(null);

  const formRef = useRef<HTMLDivElement>(null);
  const isSubmittingRef = useRef<boolean>(false);

  useEffect(() => {
    const handleMouseUp = () => {
      // If user is currently typing in our form, don't clear
      if (formRef.current && formRef.current.contains(document.activeElement)) {
        return;
      }

      const sel = window.getSelection();
      if (!sel || sel.isCollapsed) {
        if (!isFormOpen) {
          setSelectionState(null);
        }
        return;
      }

      const text = sel.toString().trim();
      if (text.length < 3) {
        if (!isFormOpen) setSelectionState(null);
        return;
      }

      try {
        const range = sel.getRangeAt(0);
        const rect = range.getBoundingClientRect();

        // Find surrounding module or section
        let el: HTMLElement | null = range.startContainer.parentElement;
        let foundSectionId = 'general';
        let foundModuleNumber: number | null = null;

        while (el && el !== document.body) {
          if (el.id?.startsWith('modulo-')) {
            foundSectionId = el.id;
            foundModuleNumber = parseInt(el.id.replace('modulo-', ''));
            break;
          }
          if (el.id?.startsWith('parte-')) {
            foundSectionId = el.id;
            break;
          }
          el = el.parentElement;
        }

        const NAVBAR_HEIGHT = 70;
        const FORM_HEIGHT = 330;
        // If selection is near the top of the viewport, display downwards instead of upwards
        const isNearTop = (rect.top - NAVBAR_HEIGHT) < FORM_HEIGHT;
        const placement: 'top' | 'bottom' = isNearTop ? 'bottom' : 'top';
        const targetY = isNearTop ? (rect.bottom + 10) : Math.max(10, rect.top - 10);

        // Clamp x to avoid horizontal clipping
        const halfWidth = window.innerWidth < 640 ? 170 : 195;
        const clampedX = Math.max(halfWidth + 12, Math.min(window.innerWidth - (halfWidth + 12), rect.left + rect.width / 2));

        setSelectionState({
          text,
          x: clampedX,
          y: targetY,
          placement,
          sectionId: foundSectionId,
          moduleNumber: foundModuleNumber,
        });
      } catch (e) {
        console.warn('Range error', e);
      }
    };

    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchend', handleMouseUp);

    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchend', handleMouseUp);
    };
  }, [isFormOpen]);

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const handleClose = () => {
    isSubmittingRef.current = false;
    setIsSubmitting(false);
    setIsFormOpen(false);
    setSelectionState(null);
    setSuggestionText('');
    setStatusMessage(null);
    window.getSelection()?.removeAllRanges();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Guard against simultaneous double-click or enter key presses
    if (isSubmittingRef.current) return;
    if (!suggestionText.trim() || !selectionState) return;

    isSubmittingRef.current = true;
    setIsSubmitting(true);

    try {
      if (authorName.trim()) {
        localStorage.setItem('cc_author_name', authorName.trim());
      }

      const res = await submitSuggestion({
        selected_text: selectionState.text,
        suggestion: suggestionText,
        author_name: authorName,
        category,
        module_number: selectionState.moduleNumber,
        section_id: selectionState.sectionId,
      });

      setIsSubmitting(false);
      setStatusMessage({ text: res.message, isRemote: res.isRemote });

      if (onSuggestionAdded) {
        onSuggestionAdded();
      }

      setTimeout(() => {
        handleClose();
      }, 2200);
    } catch (error) {
      console.error('Error submitting suggestion:', error);
      setIsSubmitting(false);
      isSubmittingRef.current = false;
    }
  };

  if (!selectionState) return null;

  return (
    <div 
      ref={formRef}
      style={{
        position: 'fixed',
        left: `${selectionState.x}px`,
        top: `${selectionState.y}px`,
        transform: selectionState.placement === 'bottom' ? 'translate(-50%, 0)' : 'translate(-50%, -100%)',
      }}
      className="z-50 select-none animate-in fade-in zoom-in-95 duration-150"
    >
      {!isFormOpen ? (
        /* Sleek Floating Trigger Button */
        <button
          onClick={handleOpenForm}
          className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-2xl hover:scale-105 active:scale-95 transition-all text-xs font-bold border border-slate-700 dark:border-slate-300 ring-4 ring-sky-500/20"
        >
          <MessageSquarePlus className="w-4 h-4 text-sky-400 dark:text-sky-600" />
          <span>Añadir Sugerencia</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
        </button>
      ) : (
        /* Full Suggestion Form Popover */
        <div className="w-[340px] sm:w-[380px] max-w-[calc(100vw-24px)] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 p-4 space-y-3 text-left">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-sky-600 dark:text-sky-400" />
              <span className="font-bold text-xs text-slate-900 dark:text-white">
                Sugerencia sobre el texto
              </span>
              {selectionState.moduleNumber && (
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-sky-100 dark:bg-sky-950 text-sky-800 dark:text-sky-300 font-semibold">
                  Módulo {selectionState.moduleNumber}
                </span>
              )}
            </div>
            <button
              onClick={handleClose}
              className="p-1 rounded-md text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Selected Text Preview */}
          <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800/80 text-[11px] text-slate-600 dark:text-slate-300 italic max-h-20 overflow-y-auto leading-relaxed flex items-start gap-1.5">
            <Quote className="w-3 h-3 text-slate-400 shrink-0 mt-0.5" />
            <span className="line-clamp-3">«{selectionState.text}»</span>
          </div>

          {/* Success Status */}
          {statusMessage ? (
            <div className={`p-4 rounded-xl text-xs flex flex-col items-center gap-2 text-center ${
              statusMessage.isRemote 
                ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 border border-emerald-200' 
                : 'bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-200 border border-amber-200'
            }`}>
              <CheckCircle2 className="w-6 h-6 text-emerald-500 animate-bounce" />
              <p className="font-semibold">{statusMessage.text}</p>
              <span className="text-[10px] opacity-75">
                Aporte registrado correctamente
              </span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              {/* Category Pills */}
              <div className="flex flex-wrap gap-1">
                {[
                  'Mejora editorial', 
                  'Duda de facilitación', 
                  'Pregunta adicional', 
                  'Corrección de errata'
                ].map((cat) => (
                  <button
                    type="button"
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`px-2 py-0.5 rounded-md text-[10px] font-semibold transition-all ${
                      category === cat
                        ? 'bg-sky-600 text-white shadow-sm'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Suggestion Textarea */}
              <div>
                <textarea
                  required
                  autoFocus
                  value={suggestionText}
                  onChange={(e) => setSuggestionText(e.target.value)}
                  placeholder="Escribe tu propuesta, sugerencia o ajuste..."
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-850 text-slate-900 dark:text-white text-xs placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 min-h-[70px]"
                />
              </div>

              {/* Author input */}
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  placeholder="Tu nombre o cohorte (opcional)"
                  className="flex-1 px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-850 text-slate-800 dark:text-slate-200 text-xs placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-500"
                />

                <button
                  type="submit"
                  disabled={isSubmitting || !suggestionText.trim()}
                  className="px-3 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 disabled:opacity-50 text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-md shadow-sky-600/20"
                >
                  <Send className="w-3 h-3" />
                  <span>{isSubmitting ? 'Guardando...' : 'Enviar'}</span>
                </button>
              </div>

              {/* Discreet footer label */}
              <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1">
                <span className="flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-sky-500" />
                  <span>Retroalimentación editorial</span>
                </span>
                <span>Equipo de facilitadores</span>
              </div>
            </form>
          )}
        </div>
      )}
    </div>
  );
};
