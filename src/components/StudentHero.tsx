import React from 'react';
import { 
  GraduationCap, 
  Sparkles, 
  BookOpen, 
  ArrowDown, 
  Headphones, 
  Search,
  CheckCircle,
  LayoutGrid
} from 'lucide-react';
import { GUIDE_METADATA } from '../data/guideContent';

interface StudentHeroProps {
  onStartReading: () => void;
  onOpenSearch?: () => void;
  onOpenTOC: () => void;
  onToggleAudio: () => void;
  isAudioPlaying: boolean;
  onSwitchToFacilitator: () => void;
}

export const StudentHero: React.FC<StudentHeroProps> = ({
  onStartReading,
  onOpenSearch,
  onOpenTOC,
  onToggleAudio,
  isAudioPlaying,
  onSwitchToFacilitator,
}) => {
  return (
    <section id="portada-estudiante" className="relative pt-6 pb-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center space-y-8">
      {/* Top badges */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
          <GraduationCap className="w-3.5 h-3.5" />
          Vista de Estudiante
        </span>
        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
          <Sparkles className="w-3 h-3 text-emerald-500" />
          {GUIDE_METADATA.fellowship}
        </span>
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300">
          20 Módulos de Aprendizaje
        </span>
      </div>

      {/* Main Title */}
      <div className="space-y-3 max-w-2xl mx-auto">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Cristianismo con Confianza
        </h1>
        <p className="text-lg sm:text-xl font-semibold text-emerald-600 dark:text-emerald-400">
          Módulos de Estudio & Reflexión
        </p>
        <p id="tour-sample-text" className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl mx-auto">
          Accede directamente a los 20 módulos con las presentaciones temáticas y esquemas visuales del <strong>Dr. Peter Saunders</strong>, junto a las preguntas clave para tu estudio y discusión.
        </p>
      </div>

      {/* Quick Action Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
        <button
          onClick={onStartReading}
          className="px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-600/25 flex items-center gap-2 transition-all hover:scale-105"
        >
          <BookOpen className="w-4 h-4" />
          <span>Comenzar con el Módulo 1</span>
        </button>

        <button
          onClick={onOpenTOC}
          className="px-5 py-3 rounded-2xl bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 font-semibold text-sm transition-all shadow-sm flex items-center gap-2"
        >
          <LayoutGrid className="w-4 h-4 text-emerald-500" />
          <span>Índice de Módulos</span>
        </button>

        <button
          onClick={onToggleAudio}
          className={`px-5 py-3 rounded-2xl text-sm font-semibold transition-all flex items-center gap-2 ${
            isAudioPlaying
              ? 'bg-emerald-500 text-white animate-pulse'
              : 'bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300'
          }`}
        >
          <Headphones className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          <span>{isAudioPlaying ? 'Pausar Audio' : 'Escuchar Resumen'}</span>
        </button>
      </div>

      {/* Role switch helper badge */}
      <div className="pt-2">
        <button
          onClick={onSwitchToFacilitator}
          className="inline-flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors underline decoration-dotted"
        >
          <span>¿Eres facilitador o líder de grupo? Haz clic aquí para ver la guía completa</span>
        </button>
      </div>

      {/* Scroll indicator */}
      <div 
        className="pt-2 flex flex-col items-center gap-1 text-slate-400 dark:text-slate-500 animate-bounce cursor-pointer" 
        onClick={onStartReading}
      >
        <span className="text-[11px] font-medium tracking-wide">Desliza para ver los módulos</span>
        <ArrowDown className="w-4 h-4" />
      </div>
    </section>
  );
};
