import React from 'react';
import { Info, BookMarked, HelpCircle, FileCheck, AlertTriangle } from 'lucide-react';
import { ABOUT_SECTION } from '../data/guideContent';

export const AboutSection: React.FC = () => {
  return (
    <section id="acerca" className="pt-12 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8">
      {/* Header bar */}
      <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
        <span className="text-xs font-bold tracking-wider uppercase text-slate-400">
          Página 2 · Introducción
        </span>
        <span className="text-xs font-semibold px-2 py-0.5 rounded bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300">
          Acerca de esta guía
        </span>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {ABOUT_SECTION.title}
        </h2>
        
        {/* Intro callout panel */}
        <div className="p-5 sm:p-6 rounded-2xl bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800/80 text-sky-900 dark:text-sky-100 leading-relaxed text-sm sm:text-base font-medium">
          {ABOUT_SECTION.intro}
        </div>
      </div>

      {/* Grid of 5 key principles */}
      <div className="grid sm:grid-cols-2 gap-4">
        {ABOUT_SECTION.items.map((item, idx) => {
          const isFullWidth = idx === ABOUT_SECTION.items.length - 1;
          return (
            <div 
              key={item.heading}
              className={`p-5 rounded-2xl bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2 reader-panel ${
                isFullWidth ? 'sm:col-span-2 bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-850' : ''
              }`}
            >
              <div className="flex items-center gap-2 text-sky-600 dark:text-sky-400 font-bold text-sm sm:text-base">
                {idx === 0 && <FileCheck className="w-4 h-4" />}
                {idx === 1 && <BookMarked className="w-4 h-4" />}
                {idx === 2 && <Info className="w-4 h-4" />}
                {idx === 3 && <HelpCircle className="w-4 h-4" />}
                {idx === 4 && <AlertTriangle className="w-4 h-4 text-amber-500" />}
                <span>{item.heading}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {item.content}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
