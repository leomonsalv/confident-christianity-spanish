import React from 'react';
import { BookOpen, Compass, Sparkles, ChevronDown, ArrowDown, Clock } from 'lucide-react';
import { GUIDE_METADATA } from '../data/guideContent';

interface CoverHeroProps {
  onStartReading: () => void;
  onJumpToModules: () => void;
  onOpenTimer: () => void;
}

export const CoverHero: React.FC<CoverHeroProps> = ({
  onStartReading,
  onJumpToModules,
  onOpenTimer,
}) => {
  return (
    <section id="portada" className="relative pt-6 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center space-y-8">
      {/* Top badges */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
          <Sparkles className="w-3.5 h-3.5" />
          {GUIDE_METADATA.fellowship}
        </span>
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
          {GUIDE_METADATA.organization}
        </span>
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
          {GUIDE_METADATA.edition}
        </span>
      </div>

      {/* Ribbon Title */}
      <div className="relative inline-block mx-auto max-w-xl">
        <div className="guide-ribbon px-8 py-5 text-white shadow-xl rounded-l-2xl">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-sans">
            Guía del Facilitador
          </h1>
        </div>
        <p className="mt-4 text-base sm:text-xl font-semibold text-sky-700 dark:text-sky-400">
          Cristianismo con Confianza
        </p>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
          Los 20 módulos, módulo a módulo
        </p>
      </div>

      {/* Cover artwork container (Lectura Continua hero frame) */}
      <div className="relative max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 ring-1 ring-slate-200 dark:ring-slate-700 group">
        <img 
          src={GUIDE_METADATA.coverImage} 
          alt="Portada Guía del Facilitador"
          className="w-full h-auto object-cover transform group-hover:scale-102 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-6 text-white text-xs font-medium">
          Ilustración de portada oficial ICMDA · CMF
        </div>
      </div>

      {/* Metadata credits */}
      <div className="max-w-md mx-auto space-y-1 text-xs text-slate-500 dark:text-slate-400">
        <p className="font-semibold text-slate-700 dark:text-slate-300">
          {GUIDE_METADATA.workbookComplement}
        </p>
        <p>{GUIDE_METADATA.terminologyBase}</p>
        <p className="text-[11px] text-slate-400">32 páginas · Lectura continua vertical</p>
      </div>

      {/* Call to action buttons */}
      <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
        <button
          onClick={onStartReading}
          className="px-6 py-3 rounded-2xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm shadow-lg shadow-sky-600/25 flex items-center gap-2 transition-all hover:scale-105"
        >
          <BookOpen className="w-4 h-4" />
          <span>Comenzar Lectura</span>
        </button>

        <button
          onClick={onJumpToModules}
          className="px-5 py-3 rounded-2xl bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 font-semibold text-sm transition-all shadow-sm flex items-center gap-2"
        >
          <Compass className="w-4 h-4 text-sky-500" />
          <span>Ver los 20 Módulos</span>
        </button>

        <button
          onClick={onOpenTimer}
          className="px-5 py-3 rounded-2xl bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 text-slate-700 dark:text-slate-300 text-sm font-semibold transition-all flex items-center gap-2"
        >
          <Clock className="w-4 h-4 text-sky-600 dark:text-sky-400" />
          <span>Cronómetro 60'</span>
        </button>
      </div>

      {/* Scroll down prompt */}
      <div className="pt-4 flex flex-col items-center gap-1 text-slate-400 animate-bounce cursor-pointer" onClick={onStartReading}>
        <span className="text-[11px] font-medium tracking-wide">Desliza hacia abajo para leer</span>
        <ArrowDown className="w-4 h-4" />
      </div>
    </section>
  );
};
