import React, { useState } from 'react';
import { 
  Sparkles, 
  RotateCw, 
  Target, 
  TrendingUp, 
  BookMarked, 
  FileText, 
  ChevronRight, 
  Quote, 
  AlertCircle,
  Copy,
  Check
} from 'lucide-react';
import { PARTE_D } from '../data/guideContent';

export const ParteDSection: React.FC = () => {
  const [selectedEngelStep, setSelectedEngelStep] = useState(0); // 0 corresponds to -10
  const [copiedTurnId, setCopiedTurnId] = useState<number | null>(null);
  const [activeQuestionStep, setActiveQuestionStep] = useState<number>(0);

  const handleCopyScript = (id: number, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedTurnId(id);
    setTimeout(() => setCopiedTurnId(null), 2000);
  };

  const currentEngel = PARTE_D.d3.steps[selectedEngelStep];

  return (
    <section id="parte-d" className="pt-16 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-16">
      {/* Main Section Header */}
      <div className="space-y-2 border-b border-slate-200 dark:border-slate-800 pb-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
          <span className="w-2 h-2 rounded-full bg-sky-500" />
          <span>Páginas 28–32 · Herramientas Clave</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {PARTE_D.title}
        </h2>
        <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400">
          {PARTE_D.subtitle}
        </p>
      </div>

      {/* D.1 Dar la vuelta a las preguntas */}
      <div id="parte-d-1" className="space-y-6 scroll-mt-20">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <RotateCw className="w-6 h-6 text-sky-600 dark:text-sky-400" />
            <span>{PARTE_D.d1.title}</span>
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {PARTE_D.d1.intro}
          </p>
        </div>

        {/* Mechanism Callout */}
        <div className="p-4 rounded-2xl bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800 text-xs sm:text-sm text-sky-900 dark:text-sky-200 font-semibold flex items-start gap-2.5">
          <Sparkles className="w-5 h-5 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
          <span>{PARTE_D.d1.keyMechanism}</span>
        </div>

        {/* 7 Turns Cards */}
        <div className="grid gap-4">
          {PARTE_D.d1.turns.map((t) => (
            <div 
              key={t.id}
              className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3 reader-panel"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-xl bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300 font-bold text-xs flex items-center justify-center shrink-0">
                    {t.id}
                  </span>
                  <h4 className="font-bold text-base text-slate-900 dark:text-white">
                    {t.question}
                  </h4>
                </div>

                <button
                  onClick={() => handleCopyScript(t.id, t.script)}
                  title="Copiar guion palabra por palabra"
                  className="flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-sky-100 dark:hover:bg-sky-900 transition-colors shrink-0"
                >
                  {copiedTurnId === t.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-600">¡Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar</span>
                    </>
                  )}
                </button>
              </div>

              <blockquote className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic pl-4 border-l-2 border-purple-400 dark:border-purple-600">
                {t.script}
              </blockquote>

              <div className="flex items-center justify-between text-xs pt-1">
                <span className="font-mono text-purple-700 dark:text-purple-400 font-bold">
                  {t.references}
                </span>
                <span className="text-slate-400">
                  Módulo afín: #{t.moduleRef}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* D.2 Directo a la yugular */}
      <div id="parte-d-2" className="space-y-6 scroll-mt-20">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Target className="w-6 h-6 text-rose-600 dark:text-rose-400" />
            <span>{PARTE_D.d2.title}</span>
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {PARTE_D.d2.description}
          </p>
        </div>

        {/* Step-by-step Interactive Flow */}
        <div className="p-6 rounded-3xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Pregunta {activeQuestionStep + 1} de {PARTE_D.d2.questions.length}
            </span>
            <div className="flex gap-1">
              <button
                onClick={() => setActiveQuestionStep(Math.max(0, activeQuestionStep - 1))}
                disabled={activeQuestionStep === 0}
                className="px-2 py-1 rounded text-xs bg-slate-100 dark:bg-slate-700 disabled:opacity-40"
              >
                Anterior
              </button>
              <button
                onClick={() => setActiveQuestionStep(Math.min(PARTE_D.d2.questions.length - 1, activeQuestionStep + 1))}
                disabled={activeQuestionStep === PARTE_D.d2.questions.length - 1}
                className="px-2 py-1 rounded text-xs bg-sky-600 text-white disabled:opacity-40 font-semibold"
              >
                Siguiente
              </button>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-base sm:text-lg font-bold text-slate-900 dark:text-white">
            {PARTE_D.d2.questions[activeQuestionStep]}
          </div>

          <div className="grid grid-cols-5 sm:grid-cols-10 gap-1 pt-2">
            {PARTE_D.d2.questions.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveQuestionStep(idx)}
                className={`py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                  idx === activeQuestionStep
                    ? 'bg-rose-600 text-white'
                    : 'bg-slate-100 dark:bg-slate-700/60 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
                }`}
              >
                {idx + 1}
              </button>
            ))}
          </div>

          <p className="text-xs text-slate-500 italic">
            {PARTE_D.d2.note}
          </p>
        </div>
      </div>

      {/* D.3 La escala de Engel */}
      <div id="parte-d-3" className="space-y-6 scroll-mt-20">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            <span>{PARTE_D.d3.title}</span>
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {PARTE_D.d3.description}
          </p>
        </div>

        {/* Interactive Engel Slider */}
        <div className="p-6 rounded-3xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-700/60 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Puntaje en la Escala
              </span>
              <div className="text-3xl font-black font-mono text-emerald-600 dark:text-emerald-400">
                {currentEngel.score}
              </div>
            </div>
            <div className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-100">
              {currentEngel.label}
            </div>
          </div>

          <div className="space-y-2">
            <input
              type="range"
              min="0"
              max={PARTE_D.d3.steps.length - 1}
              value={selectedEngelStep}
              onChange={(e) => setSelectedEngelStep(parseInt(e.target.value))}
              className="w-full accent-emerald-500 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] font-mono text-slate-400">
              <span>-10 (Ignorancia)</span>
              <span className="font-bold text-emerald-600">0 (Regeneración)</span>
              <span>+3 (Multiplicación)</span>
            </div>
          </div>

          {/* Pastoral encouragement box */}
          <div className="p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/80 space-y-2">
            <Quote className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <p className="text-xs sm:text-sm text-emerald-900 dark:text-emerald-200 leading-relaxed italic">
              {PARTE_D.d3.quote}
            </p>
            <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 block pt-1">
              {PARTE_D.d3.pastoralUse}
            </span>
          </div>
        </div>
      </div>

      {/* D.4 El esquema del evangelio (John Chapman) */}
      <div id="parte-d-4" className="space-y-6 scroll-mt-20">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <BookMarked className="w-6 h-6 text-sky-600 dark:text-sky-400" />
            <span>{PARTE_D.d4.title} · {PARTE_D.d4.author}</span>
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {PARTE_D.d4.description} {PARTE_D.d4.usageNote}
          </p>
        </div>

        <div className="grid gap-3">
          {PARTE_D.d4.headings.map((h, idx) => (
            <div 
              key={idx}
              className="p-5 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2 reader-panel"
            >
              <div className="flex items-center justify-between">
                <span className={`px-2.5 py-1 rounded-lg text-white text-xs font-bold ${h.color}`}>
                  {h.tag}
                </span>
                <span className="font-mono text-xs text-sky-600 dark:text-sky-400 font-semibold">
                  {h.verses}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {h.content}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* D.5 Notas para el equipo editorial */}
      <div id="parte-d-5" className="p-6 rounded-3xl bg-slate-100 dark:bg-slate-850/60 border border-slate-200 dark:border-slate-800 space-y-4 scroll-mt-20">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <FileText className="w-5 h-5 text-slate-500" />
          <span>{PARTE_D.d5.title}</span>
        </h3>

        <div className="space-y-3 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
          {PARTE_D.d5.items.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <span className="font-bold text-slate-800 dark:text-slate-200">{item.title}:</span>
              {item.text && <p>{item.text}</p>}
              {item.subpoints && (
                <ul className="list-disc list-inside space-y-1 pl-2">
                  {item.subpoints.map((sp, sIdx) => (
                    <li key={sIdx}>{sp}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="pt-3 border-t border-slate-200 dark:border-slate-700 text-[11px] text-slate-400 text-center">
          {PARTE_D.d5.colophon}
        </div>
      </div>
    </section>
  );
};
