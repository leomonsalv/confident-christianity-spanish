import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
  Play, 
  Pause, 
  RotateCcw, 
  SkipForward, 
  Clock, 
  AlertCircle, 
  Volume2, 
  VolumeX,
  Users,
  Video,
  MessagesSquare,
  MessageCircle,
  Repeat,
  CheckCircle2
} from 'lucide-react';
import { PARTE_B } from '../data/guideContent';

interface SessionTimerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SessionTimerModal: React.FC<SessionTimerModalProps> = ({ isOpen, onClose }) => {
  const [currentBlockIndex, setCurrentBlockIndex] = useState(0);
  const [secondsRemaining, setSecondsRemaining] = useState(PARTE_B.schedule[0].minutes * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const timerRef = useRef<number | null>(null);

  const currentBlock = PARTE_B.schedule[currentBlockIndex];
  const totalSecondsInBlock = currentBlock.minutes * 60;
  const progressPercent = ((totalSecondsInBlock - secondsRemaining) / totalSecondsInBlock) * 100;

  // Sound chime helper using Web Audio API
  const playChime = () => {
    if (!soundEnabled) return;
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, audioCtx.currentTime); // D5
      osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.3); // A5
      gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.8);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.8);
    } catch (e) {
      console.warn('Audio not supported:', e);
    }
  };

  useEffect(() => {
    if (isRunning) {
      timerRef.current = window.setInterval(() => {
        setSecondsRemaining((prev) => {
          if (prev <= 1) {
            playChime();
            // Advance to next block if available
            if (currentBlockIndex < PARTE_B.schedule.length - 1) {
              setCurrentBlockIndex((idx) => idx + 1);
              return PARTE_B.schedule[currentBlockIndex + 1].minutes * 60;
            } else {
              setIsRunning(false);
              return 0;
            }
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isRunning, currentBlockIndex, soundEnabled]);

  const selectBlock = (index: number) => {
    setCurrentBlockIndex(index);
    setSecondsRemaining(PARTE_B.schedule[index].minutes * 60);
    setIsRunning(false);
  };

  const resetCurrentBlock = () => {
    setSecondsRemaining(currentBlock.minutes * 60);
    setIsRunning(false);
  };

  const skipToNext = () => {
    if (currentBlockIndex < PARTE_B.schedule.length - 1) {
      selectBlock(currentBlockIndex + 1);
    }
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative w-full max-w-xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800 z-10 p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-400">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white text-base">
                Cronómetro de la Sesión (60 Minutos)
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Estructura oficial del curso · Usted habla 10 de los 60 minutos
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-1">
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              title={soundEnabled ? 'Sonido activado' : 'Sonido desactivado'}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
            >
              {soundEnabled ? <Volume2 className="w-5 h-5 text-sky-500" /> : <VolumeX className="w-5 h-5" />}
            </button>
            <button 
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Big Timer Display */}
        <div className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-6 text-center space-y-4 border border-slate-100 dark:border-slate-800">
          <div className="flex items-center justify-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-sky-500 text-white">
              Bloque {currentBlockIndex + 1} de {PARTE_B.schedule.length}: {currentBlock.time}
            </span>
          </div>

          <div className="text-5xl sm:text-6xl font-black tracking-tight text-slate-900 dark:text-white font-mono">
            {formatTime(secondsRemaining)}
          </div>

          {/* Progress bar */}
          <div className="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
            <div 
              className="bg-sky-500 h-full transition-all duration-300 ease-linear rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          <div className="space-y-1">
            <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100">
              {currentBlock.block}
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
              {currentBlock.action}
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-3 pt-2">
            <button
              onClick={resetCurrentBlock}
              title="Reiniciar este bloque"
              className="p-3 rounded-2xl bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-all shadow-sm"
            >
              <RotateCcw className="w-5 h-5" />
            </button>

            <button
              onClick={() => setIsRunning(!isRunning)}
              className={`px-6 py-3 rounded-2xl font-bold flex items-center gap-2 text-white shadow-lg transition-all ${
                isRunning
                  ? 'bg-amber-500 hover:bg-amber-600 shadow-amber-500/25'
                  : 'bg-sky-600 hover:bg-sky-700 shadow-sky-600/25'
              }`}
            >
              {isRunning ? (
                <>
                  <Pause className="w-5 h-5 fill-current" />
                  <span>Pausar</span>
                </>
              ) : (
                <>
                  <Play className="w-5 h-5 fill-current" />
                  <span>Iniciar Bloque</span>
                </>
              )}
            </button>

            <button
              onClick={skipToNext}
              disabled={currentBlockIndex >= PARTE_B.schedule.length - 1}
              title="Siguiente bloque"
              className="p-3 rounded-2xl bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-all shadow-sm disabled:opacity-40"
            >
              <SkipForward className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Blocks Steps Timeline */}
        <div className="space-y-1.5">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
            Secuencia de la Sesión
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {PARTE_B.schedule.map((item, idx) => (
              <button
                key={item.block}
                onClick={() => selectBlock(idx)}
                className={`p-2.5 rounded-xl text-left border text-xs transition-all ${
                  idx === currentBlockIndex
                    ? 'border-sky-500 bg-sky-50 dark:bg-sky-950/60 dark:text-sky-300 font-bold ring-2 ring-sky-500/20'
                    : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 text-slate-600 dark:text-slate-400'
                }`}
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="font-mono text-[10px] opacity-75">{item.time}</span>
                  {idx < currentBlockIndex && <CheckCircle2 className="w-3 h-3 text-emerald-500" />}
                </div>
                <div className="truncate font-medium text-slate-900 dark:text-white">
                  {item.block}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Practical tips reminder */}
        <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-xs text-amber-800 dark:text-amber-300 flex items-start gap-2">
          <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
          <span>
            <strong>Recordatorio:</strong> Las salas simultáneas tardan ~1 minuto en cerrarse tras la orden. Ciérrelas con antelación y mande un mensaje a la mitad.
          </span>
        </div>
      </div>
    </div>
  );
};
