import React, { useState, useEffect } from 'react';
import { Play, Pause, Square, SkipForward, SkipBack, Volume2, X, Sparkles } from 'lucide-react';
import { ModuleItem } from '../data/guideContent';

interface AudioNarrationBarProps {
  currentModule: ModuleItem;
  isPlaying: boolean;
  onTogglePlay: () => void;
  onClose: () => void;
  onNextModule: () => void;
  onPrevModule: () => void;
}

export const AudioNarrationBar: React.FC<AudioNarrationBarProps> = ({
  currentModule,
  isPlaying,
  onTogglePlay,
  onClose,
  onNextModule,
  onPrevModule,
}) => {
  const [speechProgress, setSpeechProgress] = useState(0);

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-11/12 max-w-xl bg-slate-900/95 text-white backdrop-blur-md rounded-2xl shadow-2xl p-3 sm:p-4 border border-slate-700 flex items-center justify-between gap-3 animate-in fade-in slide-in-from-bottom-5">
      <div className="flex items-center gap-3 min-w-0">
        <div className="w-10 h-10 rounded-xl bg-sky-500 flex items-center justify-center text-white shrink-0 shadow-lg shadow-sky-500/30">
          <Volume2 className="w-5 h-5 animate-pulse" />
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-sky-950 text-sky-300 border border-sky-800">
              Audio Lector
            </span>
            <span className="text-xs text-slate-400 truncate">
              Módulo {currentModule.number}
            </span>
          </div>
          <h4 className="text-sm font-bold truncate text-slate-100">
            {currentModule.title}
          </h4>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-2 shrink-0">
        <button
          onClick={onPrevModule}
          title="Módulo anterior"
          className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <SkipBack className="w-4 h-4" />
        </button>

        <button
          onClick={onTogglePlay}
          title={isPlaying ? 'Pausar' : 'Reproducir'}
          className="p-2.5 rounded-xl bg-sky-500 text-white hover:bg-sky-400 transition-colors shadow-md shadow-sky-500/25"
        >
          {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
        </button>

        <button
          onClick={onNextModule}
          title="Siguiente módulo"
          className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <SkipForward className="w-4 h-4" />
        </button>

        <div className="w-px h-6 bg-slate-700 mx-1" />

        <button
          onClick={onClose}
          title="Cerrar audio"
          className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
