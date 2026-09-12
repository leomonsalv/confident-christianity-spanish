import React, { useState, useEffect, useRef } from 'react';
import { 
  Sparkles, 
  MessageSquarePlus, 
  LayoutGrid, 
  Headphones, 
  ArrowRight, 
  ArrowLeft, 
  X, 
  Volume2, 
  MousePointer2, 
  CheckCircle2, 
  Check,
  Play
} from 'lucide-react';
import { ReaderMode } from '../types';

interface OnboardingTourProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectReaderMode?: (mode: ReaderMode) => void;
  onToggleAudio?: () => void;
}

interface StepConfig {
  targetId: string;
  badge: string;
  title: string;
  description: string;
  actionLabel?: string;
  preferredPlacement: 'bottom' | 'top';
}

export const OnboardingTour: React.FC<OnboardingTourProps> = ({
  isOpen,
  onClose,
  onSelectReaderMode,
  onToggleAudio,
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [targetRect, setTargetRect] = useState<DOMRect | null>(null);
  const [tooltipPos, setTooltipPos] = useState<{ top: number; left: number; placement: 'top' | 'bottom' }>({
    top: 100,
    left: 100,
    placement: 'bottom',
  });
  const [didSimulateText, setDidSimulateText] = useState(false);
  const [didTryCards, setDidTryCards] = useState(false);
  const [didTryAudio, setDidTryAudio] = useState(false);

  const steps: StepConfig[] = [
    {
      targetId: 'tour-sample-text',
      badge: 'Paso 1 de 3 · Interacción',
      title: 'Resalta texto para dar feedback o sugerencias',
      description: 'Selecciona cualquier palabra o frase en este párrafo. Verás aparecer un botón flotante para proponer correcciones editoriales, dudas o notas.',
      actionLabel: 'Probar selección de texto ahora',
      preferredPlacement: 'bottom',
    },
    {
      targetId: 'tour-cards-mode',
      badge: 'Paso 2 de 3 · Vistas',
      title: 'Cambia a "Tarjetas Rápidas"',
      description: 'En la barra superior puedes alternar entre lectura continua, navegación por módulo o esta cuadrícula ejecutiva de tarjetas rápidas.',
      actionLabel: 'Cambiar a vista de Tarjetas Rápidas',
      preferredPlacement: 'bottom',
    },
    {
      targetId: 'tour-audio-button',
      badge: 'Paso 3 de 3 · Accesibilidad',
      title: 'Voice-Over: escucha la narración en voz alta',
      description: 'Pulsa el botón de auriculares para que tu navegador lea en voz alta el contenido temático y los puntos clave automáticamente.',
      actionLabel: 'Activar voice-over / narración',
      preferredPlacement: 'bottom',
    },
  ];

  const currentConfig = steps[currentStep - 1];

  // Measure and position tooltip relative to target element
  const updatePosition = () => {
    if (!isOpen || !currentConfig) return;

    let targetEl = document.getElementById(currentConfig.targetId);
    // Fallback for step 2 if cards mode button is hidden on small screen
    if (!targetEl && currentStep === 2) {
      targetEl = document.getElementById('tour-reader-modes');
    }

    if (!targetEl) {
      // Fallback center position
      setTargetRect(null);
      setTooltipPos({
        top: window.innerHeight / 2 - 120,
        left: window.innerWidth / 2,
        placement: 'bottom',
      });
      return;
    }

    const rect = targetEl.getBoundingClientRect();
    setTargetRect(rect);

    const tooltipWidth = Math.min(360, window.innerWidth - 32);
    const tooltipHeight = 220; // Estimated height of the floating tooltip card

    // Clamp X so tooltip doesn't bleed off screen edges
    const centerX = rect.left + rect.width / 2;
    const clampedLeft = Math.max(
      tooltipWidth / 2 + 16,
      Math.min(window.innerWidth - tooltipWidth / 2 - 16, centerX)
    );

    // Determine vertical placement (below or above)
    let placement: 'top' | 'bottom' = currentConfig.preferredPlacement;
    let top = 0;

    if (placement === 'bottom') {
      if (rect.bottom + tooltipHeight + 20 > window.innerHeight && rect.top > tooltipHeight + 20) {
        placement = 'top';
        top = rect.top - 12;
      } else {
        top = rect.bottom + 12;
      }
    } else {
      if (rect.top - tooltipHeight - 20 < 0) {
        placement = 'bottom';
        top = rect.bottom + 12;
      } else {
        top = rect.top - 12;
      }
    }

    setTooltipPos({ top, left: clampedLeft, placement });
  };

  // Reset step on open
  useEffect(() => {
    if (isOpen) {
      setCurrentStep(1);
      setDidSimulateText(false);
      setDidTryCards(false);
      setDidTryAudio(false);
    }
  }, [isOpen]);

  // Scroll target into view and measure position when step changes
  useEffect(() => {
    if (!isOpen) return;

    const targetEl = document.getElementById(currentConfig.targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    // Call updatePosition immediately and on intervals to capture smooth scroll
    updatePosition();
    const t1 = setTimeout(updatePosition, 50);
    const t2 = setTimeout(updatePosition, 200);
    const t3 = setTimeout(updatePosition, 450);

    window.addEventListener('resize', updatePosition);
    window.addEventListener('scroll', updatePosition);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('scroll', updatePosition);
    };
  }, [isOpen, currentStep]);

  if (!isOpen) return null;

  // Hands-on action handlers
  const handleHandsOnAction = () => {
    if (currentStep === 1) {
      const el = document.getElementById('tour-sample-text');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        const range = document.createRange();
        range.selectNodeContents(el);
        const sel = window.getSelection();
        if (sel) {
          sel.removeAllRanges();
          sel.addRange(range);
          document.dispatchEvent(new MouseEvent('mouseup', { bubbles: true }));
        }
        setDidSimulateText(true);
      }
    } else if (currentStep === 2) {
      if (onSelectReaderMode) {
        onSelectReaderMode('cards');
        setDidTryCards(true);
      }
    } else if (currentStep === 3) {
      if (onToggleAudio) {
        onToggleAudio();
        setDidTryAudio(true);
      }
    }
  };

  const handleNext = () => {
    // Clear any text selection when leaving step 1
    if (currentStep === 1) {
      window.getSelection()?.removeAllRanges();
    }

    if (currentStep < 3) {
      setCurrentStep(prev => prev + 1);
    } else {
      handleComplete();
    }
  };

  const handlePrev = () => {
    if (currentStep === 1) {
      window.getSelection()?.removeAllRanges();
    }
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleComplete = () => {
    window.getSelection()?.removeAllRanges();
    localStorage.setItem('cc_onboarding_completed', 'true');
    onClose();
  };

  // Arrow offset calculation to point directly at target center
  const arrowOffset = targetRect ? targetRect.left + targetRect.width / 2 - tooltipPos.left : 0;
  const clampedArrowOffset = Math.max(-140, Math.min(140, arrowOffset));

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      {/* Base backdrop */}
      <div 
        className="fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-[1px] transition-opacity duration-300 pointer-events-auto"
        onClick={handleComplete}
      />

      {/* Appcues Spotlight Cutout Ring on Target Element */}
      {targetRect && (
        <div 
          className="fixed pointer-events-auto transition-all duration-300 ease-out z-40 rounded-2xl ring-4 ring-sky-400 shadow-[0_0_0_9999px_rgba(15,23,42,0.68),0_0_30px_rgba(14,165,233,0.5)]"
          style={{
            top: `${Math.max(0, targetRect.top - 6)}px`,
            left: `${Math.max(0, targetRect.left - 6)}px`,
            width: `${targetRect.width + 12}px`,
            height: `${targetRect.height + 12}px`,
          }}
        />
      )}

      {/* Floating Appcues Tooltip Card */}
      <div 
        className="pointer-events-auto fixed z-50 transition-all duration-300 ease-out"
        style={{
          top: `${tooltipPos.top}px`,
          left: `${tooltipPos.left}px`,
          transform: tooltipPos.placement === 'top' ? 'translate(-50%, -100%)' : 'translate(-50%, 0)',
          width: `${Math.min(360, window.innerWidth - 32)}px`,
        }}
      >
        {/* Caret / Arrow Pointing to Target */}
        {tooltipPos.placement === 'bottom' ? (
          <div 
            className="w-0 h-0 border-x-8 border-x-transparent border-b-8 border-b-white dark:border-b-slate-900 mx-auto transition-all"
            style={{ transform: `translateX(${clampedArrowOffset}px)` }}
          />
        ) : null}

        {/* Tooltip Box */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200/90 dark:border-slate-800 p-5 space-y-3.5 text-left relative overflow-hidden ring-1 ring-black/5">
          {/* Top Accent Gradient Bar */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-sky-500 via-indigo-500 to-emerald-500" />

          {/* Header Badge & Close */}
          <div className="flex items-center justify-between pt-1">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300">
              <Sparkles className="w-3 h-3 text-sky-600 dark:text-sky-400" />
              <span>{currentConfig.badge}</span>
            </span>

            <button
              onClick={handleComplete}
              title="Saltar tour"
              className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Title & Description */}
          <div className="space-y-1.5">
            <h4 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white leading-snug">
              {currentConfig.title}
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              {currentConfig.description}
            </p>
          </div>

          {/* Hands-on Interactive Action Button */}
          {currentConfig.actionLabel && (
            <div className="pt-1">
              <button
                type="button"
                onClick={handleHandsOnAction}
                className={`w-full py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-sm ${
                  (currentStep === 1 && didSimulateText) ||
                  (currentStep === 2 && didTryCards) ||
                  (currentStep === 3 && didTryAudio)
                    ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800'
                    : 'bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 text-white shadow-sky-500/20 hover:scale-102 active:scale-98'
                }`}
              >
                {currentStep === 1 ? (
                  didSimulateText ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span>¡Texto resaltado! Observa el popover</span>
                    </>
                  ) : (
                    <>
                      <MousePointer2 className="w-3.5 h-3.5 animate-bounce" />
                      <span>{currentConfig.actionLabel}</span>
                    </>
                  )
                ) : currentStep === 2 ? (
                  didTryCards ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span>¡Cambiado a Tarjetas Rápidas!</span>
                    </>
                  ) : (
                    <>
                      <LayoutGrid className="w-3.5 h-3.5" />
                      <span>{currentConfig.actionLabel}</span>
                    </>
                  )
                ) : (
                  didTryAudio ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span>¡Reproduciendo audio lector!</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>{currentConfig.actionLabel}</span>
                    </>
                  )
                )}
              </button>
            </div>
          )}

          {/* Footer Controls: Dots & Navigation */}
          <div className="pt-2 flex items-center justify-between border-t border-slate-100 dark:border-slate-800">
            {/* Step Dots */}
            <div className="flex items-center gap-1.5">
              {[1, 2, 3].map((step) => (
                <div
                  key={step}
                  className={`h-1.5 rounded-full transition-all ${
                    step === currentStep
                      ? 'w-5 bg-sky-600 dark:bg-sky-400'
                      : 'w-1.5 bg-slate-300 dark:bg-slate-700'
                  }`}
                />
              ))}
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-1.5">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={handlePrev}
                  className="px-2.5 py-1.5 rounded-lg text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  Anterior
                </button>
              )}

              <button
                type="button"
                onClick={handleNext}
                className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 transition-all flex items-center gap-1 shadow-sm"
              >
                <span>{currentStep === 3 ? '¡Listo!' : 'Siguiente'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Caret / Arrow Pointing to Target if placement is top */}
        {tooltipPos.placement === 'top' ? (
          <div 
            className="w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-white dark:border-t-slate-900 mx-auto transition-all"
            style={{ transform: `translateX(${clampedArrowOffset}px)` }}
          />
        ) : null}
      </div>
    </div>
  );
};
