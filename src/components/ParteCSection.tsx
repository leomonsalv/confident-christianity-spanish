import React from 'react';
import { BookOpen, Layers, HelpCircle, AlertCircle, Sparkles } from 'lucide-react';
import { PARTE_C_INTRO } from '../data/guideContent';

export const ParteCSection: React.FC = () => {
  return (
    <section id="parte-c-intro" className="pt-12 pb-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8">
      {/* Chapter header */}
      <div className="space-y-2 border-b border-slate-200 dark:border-slate-800 pb-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
          <span className="w-2 h-2 rounded-full bg-sky-500" />
          <span>Página 7 · Panorama General</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {PARTE_C_INTRO.title}
        </h2>
        <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed">
          {PARTE_C_INTRO.description}
        </p>
      </div>

      {/* Two Tracks: 1-12 and 13-20 */}
      <div className="grid sm:grid-cols-2 gap-4">
        {PARTE_C_INTRO.tracks.map((track) => (
          <div 
            key={track.name}
            className="p-6 rounded-3xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3 reader-panel"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300">
                {track.badge}
              </span>
              <BookOpen className="w-4 h-4 text-slate-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              {track.name}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {track.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Anatomy of a Module */}
      <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-850/60 border border-slate-200 dark:border-slate-800 space-y-4">
        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Layers className="w-5 h-5 text-sky-600 dark:text-sky-400" />
          <span>Cómo leer un módulo en esta guía</span>
        </h3>

        <div className="grid sm:grid-cols-2 gap-3">
          {PARTE_C_INTRO.readingGuide.map((g) => (
            <div 
              key={g.field}
              className="p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 space-y-1"
            >
              <span className="text-xs font-bold text-sky-700 dark:text-sky-400 block">
                {g.field}
              </span>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {g.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Footnote on nomenclature */}
        <div className="p-4 rounded-xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/80 text-xs text-amber-900 dark:text-amber-200 space-y-1">
          <div className="font-bold flex items-center gap-1.5">
            <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            <span>Nota de nomenclatura & Alertas de conducción</span>
          </div>
          <p className="leading-relaxed">
            {PARTE_C_INTRO.notes}
          </p>
        </div>
      </div>
    </section>
  );
};
