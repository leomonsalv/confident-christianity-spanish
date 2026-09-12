import React, { useState } from 'react';
import { 
  BookOpen, 
  Quote, 
  Copy, 
  Check, 
  AlertTriangle, 
  HelpCircle, 
  CheckCircle2, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { VisualData } from '../data/guideContent';

interface DrPeterPresentationProps {
  content: string;
  visualData?: VisualData | null;
  moduleNumber: number;
}

export const DrPeterPresentation: React.FC<DrPeterPresentationProps> = ({
  content,
  visualData,
  moduleNumber,
}) => {
  const [copied, setCopied] = useState(false);

  // Copy raw content
  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Pre-clean content: remove artificial mid-sentence linebreaks while preserving intentional paragraphs
  const cleanAndSegmentContent = (raw: string) => {
    // Remove raw OCR table artifacts if present in text
    let cleaned = raw
      .replace(/COSMOVISIÓN[\s\S]*?30\s*%/g, '')
      .replace(/4-6\s*%\s*\n\s*Por iniciativa propia[\s\S]*?75-85\s*%\s*\n\s*Influencia de amigos y familiares/g, '')
      .replace(/IDENTIFICAR\s*\n\s*CONFRONTAR\s*\n\s*INVITAR[\s\S]*?sentido de destino/g, '')
      .replace(/1\.\s*La deidad de Cristo[\s\S]*?Ef 2:8/g, '')
      .replace(/3\s*•\s*Jesucristo[\s\S]*?la naturaleza de la verdad y la\s*moral/g, '');

    // Split by double newlines or single newlines
    const rawParagraphs = cleaned.split(/\n\s*\n/);
    const result: string[] = [];

    rawParagraphs.forEach(para => {
      const trimmed = para.trim();
      if (!trimmed) return;

      // If the paragraph contains bullet points with • or numbers, preserve them cleanly
      if (trimmed.includes('•') || /^\d+\./m.test(trimmed)) {
        result.push(trimmed);
      } else {
        // Smooth out single linebreaks that were broken mid-sentence
        const smoothed = trimmed.replace(/([^\n.?!:;»])\n([^\n•\d])/g, '$1 $2');
        result.push(smoothed);
      }
    });

    return result;
  };

  const paragraphs = cleanAndSegmentContent(content);

  // Render an individual paragraph according to its semantics
  const renderBlock = (block: string, index: number) => {
    const trimmed = block.trim();

    // 1. Facilitator Alert / Conductor Warning (starts with 'A ' or '▲' or 'Dos notas de conducción')
    if (trimmed.startsWith('A ') || trimmed.startsWith('▲') || /^(Dos notas de conducción|Nota de conducción|Alerta:)/i.test(trimmed)) {
      const cleanAlertText = trimmed.replace(/^(A\s+|▲\s*)/, '');
      return (
        <div 
          key={index}
          className="p-4 sm:p-5 rounded-2xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-300/80 dark:border-amber-700/60 shadow-sm space-y-1.5 transition-all"
        >
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-900 dark:text-amber-300">
            <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
            <span>Nota Clave de Conducción para la Sesión</span>
          </div>
          <p className="text-xs sm:text-sm text-amber-950 dark:text-amber-100 leading-relaxed">
            {cleanAlertText}
          </p>
        </div>
      );
    }

    // 2. Pure Blockquote (e.g. «Nuestra tarea es sembrar la semilla...»)
    if (trimmed.startsWith('«') && trimmed.endsWith('»')) {
      return (
        <div 
          key={index}
          className="relative p-5 sm:p-6 rounded-2xl bg-sky-50/70 dark:bg-sky-950/30 border-l-4 border-sky-600 dark:border-sky-400 my-4 shadow-sm"
        >
          <Quote className="w-6 h-6 text-sky-600/30 dark:text-sky-400/30 absolute top-4 right-4 pointer-events-none" />
          <blockquote className="text-sm sm:text-base italic font-semibold text-slate-900 dark:text-sky-100 leading-relaxed pl-1 pr-6">
            {trimmed}
          </blockquote>
        </div>
      );
    }

    // 3. Bullet list with '•'
    if (trimmed.includes('•')) {
      // Split header from bullet items
      const parts = trimmed.split(/(?=•)/);
      let header = '';
      let bulletItems: string[] = [];

      if (parts[0] && !parts[0].trim().startsWith('•')) {
        header = parts[0].trim();
        bulletItems = parts.slice(1).map(p => p.replace(/^•\s*/, '').trim()).filter(Boolean);
      } else {
        bulletItems = trimmed.split('•').map(p => p.trim()).filter(Boolean);
      }

      return (
        <div key={index} className="space-y-2.5 my-2">
          {header && (
            <p className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-relaxed">
              {header}
            </p>
          )}
          <div className="grid gap-2">
            {bulletItems.map((item, bIdx) => (
              <div 
                key={bIdx}
                className="flex items-start gap-3 p-3 sm:p-3.5 rounded-xl bg-white dark:bg-slate-850 border border-slate-200/80 dark:border-slate-800 shadow-sm text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed"
              >
                <span className="w-5 h-5 rounded-lg bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300 font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5 border border-sky-200/60 dark:border-sky-800/60">
                  {bIdx + 1}
                </span>
                <span className="flex-1">{item}</span>
              </div>
            ))}
          </div>
        </div>
      );
    }

    // 4. Numbered list items (e.g. "1. ... 2. ...")
    if (/^\d+\.\s/m.test(trimmed) && trimmed.split(/\n/).length > 1) {
      const lines = trimmed.split(/\n/).map(l => l.trim()).filter(Boolean);
      return (
        <div key={index} className="space-y-2 my-2">
          {lines.map((line, lIdx) => (
            <div 
              key={lIdx}
              className="flex items-start gap-3 p-3 sm:p-3.5 rounded-xl bg-white dark:bg-slate-850 border border-slate-200/80 dark:border-slate-800 shadow-sm text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed"
            >
              <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300 font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                {lIdx + 1}
              </span>
              <span className="flex-1">{line.replace(/^\d+\.\s*/, '')}</span>
            </div>
          ))}
        </div>
      );
    }

    // 5. Standard paragraph with highlight on leading concepts (e.g. "La imagen central es la del iceberg:")
    const leadingConceptMatch = trimmed.match(/^([^:]{3,50}:)([\s\S]*)$/);
    if (leadingConceptMatch && !trimmed.includes('http')) {
      const [, lead, rest] = leadingConceptMatch;
      return (
        <p key={index} className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
          <strong className="font-bold text-slate-900 dark:text-white block sm:inline mr-1 text-sky-950 dark:text-sky-100">
            {lead}
          </strong>
          <span>{rest}</span>
        </p>
      );
    }

    // Default natural paragraph
    return (
      <p key={index} className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
        {trimmed}
      </p>
    );
  };

  return (
    <div className="space-y-6 pt-2">
      {/* Section Header with Quick Copy */}
      <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-sky-600 dark:text-sky-400" />
          <span>Lo que el Dr. Peter presenta</span>
        </h3>

        <button
          onClick={handleCopy}
          title="Copiar contenido de la exposición"
          className="flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-sky-50 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors shadow-sm"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-500" />
              <span className="text-emerald-600 dark:text-emerald-400">¡Copiado!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Copiar resumen</span>
            </>
          )}
        </button>
      </div>

      {/* Styled Presentation Content */}
      <div className="space-y-4">
        {paragraphs.map((p, idx) => renderBlock(p, idx))}
      </div>

      {/* Embedded Visual Data: Modern Table */}
      {visualData?.type === 'table' && (
        <div className="my-6 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md bg-white dark:bg-slate-900">
          <div className="p-3.5 bg-gradient-to-r from-sky-50 to-indigo-50 dark:from-sky-950/60 dark:to-indigo-950/40 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <span className="font-bold text-xs sm:text-sm text-sky-900 dark:text-sky-200 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-sky-600 dark:text-sky-400" />
              {visualData.title}
            </span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-sky-100 dark:bg-sky-900 text-sky-800 dark:text-sky-300">
              Datos clave
            </span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-50 dark:bg-slate-800/80 text-slate-500 dark:text-slate-400 uppercase text-[10px] tracking-wider border-b border-slate-200 dark:border-slate-800">
                <tr>
                  {visualData.headers.map((h, i) => (
                    <th key={i} className="p-3.5 font-bold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80">
                {visualData.rows.map((row, rIdx) => (
                  <tr 
                    key={rIdx} 
                    className="hover:bg-slate-50/80 dark:hover:bg-slate-800/50 transition-colors"
                  >
                    {row.map((cell, cIdx) => (
                      <td 
                        key={cIdx} 
                        className={`p-3.5 ${
                          cIdx > 0 
                            ? 'font-mono font-semibold text-sky-700 dark:text-sky-300' 
                            : 'font-medium text-slate-800 dark:text-slate-200'
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Embedded Visual Data: 3-Cards */}
      {visualData?.type === 'cards3' && (
        <div className="grid sm:grid-cols-3 gap-3 my-6">
          {visualData.cards.map((c, cIdx) => (
            <div 
              key={cIdx} 
              className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-white to-slate-50 dark:from-slate-850 dark:to-slate-900 border border-slate-200 dark:border-slate-700/80 shadow-sm space-y-2 hover:border-sky-300 dark:hover:border-sky-600 transition-all"
            >
              <div className="w-7 h-7 rounded-xl bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300 font-black text-xs flex items-center justify-center">
                {cIdx + 1}
              </div>
              <div className="font-bold text-sm text-slate-900 dark:text-white leading-snug">
                {c.title}
              </div>
              <div className="inline-block text-xs font-mono font-bold text-sky-600 dark:text-sky-400 px-2 py-0.5 rounded bg-sky-50 dark:bg-sky-950 border border-sky-100 dark:border-sky-900">
                {c.ref}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
