import React from 'react';
import { 
  Menu, 
  Settings2, 
  Clock, 
  Headphones, 
  BookOpen, 
  ScrollText, 
  LayoutGrid,
  Sun,
  Moon,
  Coffee,
  MessageSquarePlus,
  GraduationCap,
  Users
} from 'lucide-react';
import { ReaderSettings, ThemeMode, ReaderMode, UserRole } from '../types';

interface NavbarProps {
  progress: number;
  settings: ReaderSettings;
  onUpdateSettings: (newSettings: Partial<ReaderSettings>) => void;
  onOpenTOC: () => void;
  onOpenSearch?: () => void;
  onOpenSettings: () => void;
  onOpenTimer: () => void;
  onToggleAudio: () => void;
  isAudioPlaying: boolean;
  onOpenSuggestions: () => void;
  role?: UserRole;
  onOpenRoleModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  progress,
  settings,
  onUpdateSettings,
  onOpenTOC,
  onOpenSettings,
  onOpenTimer,
  onToggleAudio,
  isAudioPlaying,
  onOpenSuggestions,
  role = 'facilitador',
}) => {
  const toggleTheme = () => {
    const themeCycle: ThemeMode[] = ['light', 'sepia', 'dark'];
    const nextIndex = (themeCycle.indexOf(settings.theme) + 1) % themeCycle.length;
    onUpdateSettings({ theme: themeCycle[nextIndex] });
  };

  const cycleReaderMode = () => {
    const modes: ReaderMode[] = ['continuous', 'chapter', 'cards'];
    const nextIndex = (modes.indexOf(settings.readerMode) + 1) % modes.length;
    onUpdateSettings({ readerMode: modes[nextIndex] });
  };

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-white/90 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3">
        {/* Left: Menu & Brand */}
        <div className="flex items-center gap-3 min-w-0">
          <button
            onClick={onOpenTOC}
            aria-label="Abrir tabla de contenido"
            className="p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500"
          >
            <Menu className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-2 truncate">
            <span className="hidden sm:inline-flex items-center justify-center px-2 py-0.5 rounded text-xs font-semibold bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300">
              CMF · ICMDA
            </span>
            <div className="truncate cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <h1 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white truncate">
                Cristianismo con Confianza
              </h1>
              <p className="hidden md:block text-xs text-slate-500 dark:text-slate-400 truncate">
                {role === 'estudiante' ? '20 Módulos de Estudio & Reflexión' : 'Guía del Facilitador · Los 20 módulos'}
              </p>
            </div>
          </div>
        </div>

        {/* Center: Reader Mode Quick Switcher */}
        <div id="tour-reader-modes" className="hidden lg:flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl text-xs font-medium">
          <button
            onClick={() => onUpdateSettings({ readerMode: 'continuous' })}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
              settings.readerMode === 'continuous'
                ? 'bg-white dark:bg-slate-700 text-sky-600 dark:text-sky-400 shadow-sm font-semibold'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <ScrollText className="w-3.5 h-3.5" />
            <span>Lectura Continua</span>
          </button>

          <button
            onClick={() => onUpdateSettings({ readerMode: 'chapter' })}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
              settings.readerMode === 'chapter'
                ? 'bg-white dark:bg-slate-700 text-sky-600 dark:text-sky-400 shadow-sm font-semibold'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Por Módulo</span>
          </button>

          <button
            id="tour-cards-mode"
            onClick={() => onUpdateSettings({ readerMode: 'cards' })}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
              settings.readerMode === 'cards'
                ? 'bg-white dark:bg-slate-700 text-sky-600 dark:text-sky-400 shadow-sm font-semibold'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>Tarjetas Rápidas</span>
          </button>
        </div>

        {/* Right Actions - Simplified & Uncluttered Utility Toolbar */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Community Suggestions Drawer Button */}
          <button
            onClick={onOpenSuggestions}
            title="Ver sugerencias y comentarios"
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-semibold bg-emerald-50 text-emerald-700 hover:bg-emerald-100 dark:bg-emerald-950/60 dark:text-emerald-300 dark:hover:bg-emerald-900/60 transition-colors border border-emerald-200/80 dark:border-emerald-800/80"
          >
            <MessageSquarePlus className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span className="hidden sm:inline">Sugerencias</span>
          </button>

          {/* Session Timer Quick Access (only for Facilitators) */}
          {role !== 'estudiante' && (
            <button
              onClick={onOpenTimer}
              title="Cronómetro interactivo de sesión (60 min)"
              className="flex items-center gap-1 p-2 sm:px-2.5 sm:py-1.5 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <Clock className="w-4 h-4 text-sky-600 dark:text-sky-400" />
              <span className="hidden md:inline">60'</span>
            </button>
          )}

          {/* Audio narration */}
          <button
            id="tour-audio-button"
            onClick={onToggleAudio}
            title={isAudioPlaying ? 'Pausar audio lector' : 'Escuchar resumen (Audio)'}
            className={`p-2 rounded-xl transition-colors ${
              isAudioPlaying 
                ? 'bg-emerald-500 text-white animate-pulse' 
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <Headphones className="w-4 h-4" />
          </button>

          {/* Subtle separator */}
          <div className="h-4 w-px bg-slate-200 dark:bg-slate-700 mx-0.5" />

          {/* Theme switcher */}
          <button
            onClick={toggleTheme}
            title={`Tema actual: ${settings.theme}`}
            className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {settings.theme === 'light' && <Sun className="w-4 h-4 text-amber-500" />}
            {settings.theme === 'sepia' && <Coffee className="w-4 h-4 text-amber-700" />}
            {settings.theme === 'dark' && <Moon className="w-4 h-4 text-sky-400" />}
          </button>

          {/* Reader settings */}
          <button
            onClick={onOpenSettings}
            title="Ajustes de lectura y tipografía"
            className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <Settings2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Reading Progress Bar (Estilo continuo) */}
      <div className="w-full bg-slate-100 dark:bg-slate-800 h-1 overflow-hidden">
        <div 
          className="bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 h-full transition-all duration-150 ease-out"
          style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
        />
      </div>
    </header>
  );
};
