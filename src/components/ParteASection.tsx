import React, { useState } from 'react';
import { 
  Users, 
  CheckCircle, 
  ShieldAlert, 
  Calendar, 
  HeartHandshake, 
  Wifi, 
  Quote, 
  AlertOctagon,
  Bell,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { PARTE_A } from '../data/guideContent';

export const ParteASection: React.FC = () => {
  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  const toggleCheck = (idx: number) => {
    setCheckedItems(prev => 
      prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
    );
  };

  return (
    <section id="parte-a" className="pt-12 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-10">
      {/* Chapter header */}
      <div className="space-y-2 border-b border-slate-200 dark:border-slate-800 pb-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
          <span className="w-2 h-2 rounded-full bg-sky-500" />
          <span>Páginas 4–5 · Fundamentos</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {PARTE_A.title}
        </h2>
        <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400">
          {PARTE_A.subtitle}
        </p>
      </div>

      {/* A.1 Qué se espera de usted */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300 flex items-center justify-center text-xs font-bold">
              A.1
            </span>
            <span>Qué se espera de usted</span>
          </h3>
          <span className="text-xs text-slate-400">
            {checkedItems.length} de {PARTE_A.a1.requirements.length} verificados
          </span>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
          {PARTE_A.a1.description} Haz clic para autoevaluar tu preparación:
        </p>

        <div className="space-y-2.5">
          {PARTE_A.a1.requirements.map((req, idx) => {
            const isChecked = checkedItems.includes(idx);
            return (
              <div
                key={req.title}
                onClick={() => toggleCheck(idx)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-3.5 ${
                  isChecked
                    ? 'bg-emerald-50/60 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-800'
                    : 'bg-white dark:bg-slate-800/70 border-slate-200 dark:border-slate-800 hover:border-sky-300'
                }`}
              >
                <div className={`mt-0.5 w-5 h-5 rounded-md flex items-center justify-center shrink-0 transition-colors ${
                  isChecked 
                    ? 'bg-emerald-500 text-white' 
                    : 'border-2 border-slate-300 dark:border-slate-600 text-transparent'
                }`}>
                  <CheckCircle className="w-3.5 h-3.5" />
                </div>
                <div className="space-y-0.5">
                  <h4 className={`text-sm font-bold ${isChecked ? 'text-emerald-900 dark:text-emerald-300 line-through opacity-80' : 'text-slate-900 dark:text-white'}`}>
                    {req.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {req.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* A.2 Qué no necesita ser (The Golden Rule) */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <span className="w-7 h-7 rounded-lg bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300 flex items-center justify-center text-xs font-bold">
            A.2
          </span>
          <span>Qué no necesita ser</span>
        </h3>
        
        <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          {PARTE_A.a2.content}
        </p>

        {/* Golden rule callout box */}
        <div className="p-6 rounded-3xl bg-gradient-to-br from-sky-500 to-blue-600 text-white shadow-xl space-y-3 relative overflow-hidden">
          <Quote className="w-16 h-16 text-white/10 absolute -top-2 -right-2 pointer-events-none" />
          <div className="flex items-center gap-2 text-sky-200 text-xs font-bold tracking-wider uppercase">
            <Sparkles className="w-4 h-4" />
            <span>Respuesta oficial ante preguntas difíciles</span>
          </div>
          <blockquote className="text-base sm:text-lg font-bold leading-snug">
            {PARTE_A.a2.goldenRule.quote}
          </blockquote>
          <p className="text-xs sm:text-sm text-sky-100">
            {PARTE_A.a2.goldenRule.explanation}
          </p>
        </div>
      </div>

      {/* A.3 Las tres cosas que salen mal */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <span className="w-7 h-7 rounded-lg bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300 flex items-center justify-center text-xs font-bold">
            A.3
          </span>
          <span>Las tres cosas que salen mal</span>
        </h3>

        <div className="grid sm:grid-cols-3 gap-4">
          {PARTE_A.a3.pitfalls.map((pitfall) => (
            <div 
              key={pitfall.number}
              className="p-5 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2.5 relative"
            >
              <div className="w-8 h-8 rounded-full bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-400 flex items-center justify-center font-black text-sm">
                {pitfall.number}
              </div>
              <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                {pitfall.title}
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {pitfall.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* A.4 La mitad del trabajo que ocurre fuera de la sesión */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 flex items-center justify-center text-xs font-bold">
            A.4
          </span>
          <span>La mitad del trabajo fuera de la sesión</span>
        </h3>

        <div className="grid sm:grid-cols-2 gap-4">
          {PARTE_A.a4.pastoralDuties.map((duty) => (
            <div 
              key={duty.timing}
              className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-850/60 border border-slate-200 dark:border-slate-800 space-y-2 reader-panel"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                  {duty.timing}
                </span>
                <Bell className="w-3.5 h-3.5 text-slate-400" />
              </div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                {duty.action}
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {duty.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
