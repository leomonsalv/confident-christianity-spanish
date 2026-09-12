import React from 'react';
import { 
  Clock, 
  Play, 
  MessageSquare, 
  Users, 
  CheckCircle2, 
  AlertCircle, 
  Building2, 
  Sparkles,
  Timer
} from 'lucide-react';
import { PARTE_B } from '../data/guideContent';

interface ParteBSectionProps {
  onOpenTimer: () => void;
}

export const ParteBSection: React.FC<ParteBSectionProps> = ({ onOpenTimer }) => {
  return (
    <section id="parte-b" className="pt-12 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-10">
      {/* Chapter Header */}
      <div className="space-y-2 border-b border-slate-200 dark:border-slate-800 pb-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
          <span className="w-2 h-2 rounded-full bg-sky-500" />
          <span>Página 6 · Conducción Práctica</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {PARTE_B.title}
        </h2>
        <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400">
          {PARTE_B.subtitle}
        </p>
      </div>

      {/* Core Principle Callout */}
      <div className="p-6 rounded-3xl bg-sky-500 text-white shadow-xl space-y-3 relative overflow-hidden">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-200">
            Principio Maestro
          </span>
          <span className="px-2.5 py-1 rounded-full text-xs font-extrabold bg-white text-sky-700 shadow-sm">
            10 de 60 minutos
          </span>
        </div>
        <p className="text-base sm:text-lg font-bold leading-snug">
          {PARTE_B.corePrinciple}
        </p>
      </div>

      {/* Schedule Table / Lectura Continua timeline cards */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Clock className="w-5 h-5 text-sky-600 dark:text-sky-400" />
            <span>B.1 La sesión estándar de una hora (en línea)</span>
          </h3>
          <button
            onClick={onOpenTimer}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold transition-all shadow-sm"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Iniciar Cronómetro</span>
          </button>
        </div>

        <div className="grid gap-3">
          {PARTE_B.schedule.map((item, idx) => (
            <div 
              key={item.block}
              className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 reader-panel"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-sky-50 dark:bg-sky-950 text-sky-700 dark:text-sky-300 flex flex-col items-center justify-center shrink-0 border border-sky-100 dark:border-sky-900">
                  <span className="text-[10px] font-bold text-sky-500 uppercase">Min</span>
                  <span className="text-sm font-black font-mono leading-none">{item.time}</span>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200">
                      Paso {idx + 1}
                    </span>
                    <h4 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                      {item.block}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                    {item.action}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Practical tips */}
      <div className="p-6 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/80 space-y-3">
        <h4 className="text-sm font-bold text-amber-900 dark:text-amber-300 flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400" />
          <span>Detalles prácticos que cuestan tiempo cuando no se conocen</span>
        </h4>
        <ul className="space-y-2 text-xs sm:text-sm text-amber-800 dark:text-amber-200/90 list-disc list-inside">
          {PARTE_B.practicalTips.map((tip, idx) => (
            <li key={idx} className="leading-relaxed">
              {tip}
            </li>
          ))}
        </ul>
      </div>

      {/* B.2 En presencial */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Building2 className="w-5 h-5 text-sky-600 dark:text-sky-400" />
          <span>{PARTE_B.inPersonChanges.title}</span>
        </h3>

        <div className="grid sm:grid-cols-2 gap-3">
          {PARTE_B.inPersonChanges.points.map((pt, idx) => {
            const isLast = idx === PARTE_B.inPersonChanges.points.length - 1;
            return (
              <div
                key={idx}
                className={`p-4 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed ${
                  isLast ? 'sm:col-span-2 bg-gradient-to-r from-sky-50 to-indigo-50 dark:from-sky-950/40 dark:to-indigo-950/40 border-sky-200 dark:border-sky-800 font-medium' : ''
                }`}
              >
                {pt}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
