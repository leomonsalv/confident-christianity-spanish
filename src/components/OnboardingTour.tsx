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
import { useI18n } from '../i18n/i18nContext';

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
  const { t } = useI18n();
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
      badge: t('tour.step1Badge', 'Paso 1 de 3 · Interacción'),
      title: t('tour.step1Title', 'Resalta texto para dar feedback o sugerencias'),
      description: t('tour.step1Desc', 'Selecciona cualquier palabra o frase en este párrafo. Verás aparecer un botón flotante para proponer correcciones editoriales, dudas o notas.'),
      actionLabel: t('tour.step1Action', 'Probar selección de texto ahora'),
      preferredPlacement: 'bottom',
    },
    {
      targetId: 'tour-cards-mode',
      badge: t('tour.step2Badge', 'Paso 2 de 3 · Vistas'),
      title: t('tour.step2Title', 'Cambia a "Tarjetas Rápidas"'),
      description: t('tour.step2Desc', 'En la barra superior puedes alternar entre lectura continua, navegación por módulo o esta cuadrícula ejecutiva de tarjetas rápidas.'),
      actionLabel: t('tour.step2Action', 'Cambiar a vista de Tarjetas Rápidas'),
      preferredPlacement: 'bottom',
    },
    {
      targetId: 'tour-audio-button',
      badge: t('tour.step3Badge', 'Paso 3 de 3 · Accesibilidad'),
      title: t('tour.step3Title', 'Voice-Over: escucha la narración en voz alta'),
      description: t('tour.step3Desc', 'Pulsa el botón de auriculares para que tu navegador lea en voz alta el contenido temático y los puntos clave automáticamente.'),
      actionLabel: t('tour.step3Action', 'Activar voice-over / narración'),
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

  // Recalculate target position on step change, resize or scroll
  useEffect(() => {
    if (!isOpen) return;

    // Scroll target into view if needed
    const targetEl = document.getElementById(currentConfig?.targetId || '');
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    const timeout = setTimeout(updatePosition, 300);
    window.addEventListener('resize', updatePosition);
    window.addEventListener('scroll', updatePosition, { passive: true });

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('scroll', updatePosition);
    };
  }, [isOpen, currentStep, currentConfig]);

  if (!isOpen || !currentConfig) return null;

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(prev => prev + 1);
    } else {
      handleComplete();
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleComplete = () => {
    localStorage.setItem('cc_onboarding_completed', 'true');
    onClose();
  };

  const handleHandsOnAction = () => {
    if (currentStep === 1) {
      // Programmatically simulate a text selection inside #tour-sample-text
      const sampleEl = document.getElementById('tour-sample-text');
      if (sampleEl) {
        const range = document.createRange();
        range.selectNodeContents(sampleEl);
        const sel = window.getSelection();
        if (sel) {
          sel.removeAllRanges();
          sel.addRange(range);
          document.dispatchEvent(new MouseEvent('mouseup', { bubbles: true }));
        }
      }
      setDidSimulateText(true);
    } else if (currentStep === 2) {
      if (onSelectReaderMode) {
        onSelectReaderMode('cards');
      }
      setDidTryCards(true);
    } else if (currentStep === 3) {
      if (onToggleAudio) {
        onToggleAudio();
      }
      setDidTryAudio(true);
    }
  };

  // Target spotlight cutout calculation
  const cutoutPadding = 8;
  const cutout = targetRect ? {
    top: Math.max(0, targetRect.top - cutoutPadding),
    left: Math.max(0, targetRect.left - cutoutPadding),
    width: targetRect.width + cutoutPadding * 2,
    height: targetRect.height + cutoutPadding * 2,
    borderRadius: 16,
  } : null;

  // Arrow offset relative to centered tooltip
  const arrowOffset = targetRect ? (targetRect.left + targetRect.width / 2) - tooltipPos.left : 0;
  const clampedArrowOffset = Math.max(-140, Math.min(140, arrowOffset));

  return (
    <div className="fixed inset-0 z-50 pointer-events-auto">
      {/* Dimmed backdrop with smooth SVG cutout for spotlight target */}
      <svg className="fixed inset-0 w-full h-full pointer-events-none transition-all duration-300">
        <defs>
          <mask id="tour-spotlight-mask">
            {/* White covers everywhere (fully dimmed) */}
            <rect x="0" y="0" width="100%" height="100%" fill="white" />
            {/* Black rectangle cuts out the spotlight hole */}
            {cutout && (
              <rect
                x={cutout.left}
                y={cutout.top}
                width={cutout.width}
                height={cutout.height}
                rx={cutout.borderRadius}
                ry={cutout.borderRadius}
                fill="black"
              />
            )}
          </mask>
        </defs>
        {/* Semi-transparent dark overlay utilizing the cutout mask */}
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="rgba(15, 23, 42, 0.72)"
          mask="url(#tour-spotlight-mask)"
        />
      </svg>

      {/* Target pulse spotlight ring */}
      {cutout && (
        <div
          className="fixed pointer-events-none border-2 border-sky-400 dark:border-sky-300 shadow-[0_0_24px_rgba(56,189,248,0.5)] transition-all duration-300 ease-out animate-pulse"
          style={{
            top: cutout.top,
            left: cutout.left,
            width: cutout.width,
            height: cutout.height,
            borderRadius: cutout.borderRadius,
          }}
        />
      )}

      {/* Floating Guided Tooltip Card */}
      <div
        className="fixed z-50 flex flex-col items-center transition-all duration-300 ease-out"
        style={{
          top: tooltipPos.placement === 'top' ? undefined : tooltipPos.top,
          bottom: tooltipPos.placement === 'top' ? window.innerHeight - tooltipPos.top : undefined,
          left: tooltipPos.left,
          transform: 'translateX(-50%)',
          width: Math.min(360, window.innerWidth - 32),
        }}
      >
        {/* Top Caret / Arrow Pointing to Target if placement is bottom */}
        {tooltipPos.placement === 'bottom' ? (
          <div 
            className="w-0 h-0 border-x-8 border-x-transparent border-b-8 border-b-white dark:border-b-slate-900 mx-auto transition-all"
            style={{ transform: `translateX(${clampedArrowOffset}px)` }}
          />
        ) : null}

        <div className="w-full bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200/90 dark:border-slate-800 p-5 space-y-4 text-slate-900 dark:text-white backdrop-blur-xl animate-in zoom-in-95 duration-200">
          {/* Header */}
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300">
              <Sparkles className="w-3 h-3 text-sky-500" />
              {currentConfig.badge}
            </span>

            <button
              onClick={handleComplete}
              title={t('module.close', 'Saltar tour')}
              aria-label={t('module.close', 'Saltar tour')}
              className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="space-y-1.5">
            <h4 className="text-base font-extrabold text-slate-900 dark:text-white leading-tight">
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
                      <span>{t('tour.step1Done', '¡Texto resaltado! Observa el popover')}</span>
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
                      <span>{t('tour.step2Done', '¡Cambiado a Tarjetas Rápidas!')}</span>
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
                      <span>{t('tour.step3Done', '¡Reproduciendo audio lector!')}</span>
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
                  {t('parteD.prev', 'Anterior')}
                </button>
              )}

              <button
                type="button"
                onClick={handleNext}
                className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 transition-all flex items-center gap-1 shadow-sm"
              >
                <span>{currentStep === 3 ? t('tour.finish', '¡Listo!') : t('parteD.next', 'Siguiente')}</span>
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
