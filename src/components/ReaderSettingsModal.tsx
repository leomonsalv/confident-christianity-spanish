import React from 'react';
import { X, Sun, Moon, Coffee, Type, Sliders, Play, Square } from 'lucide-react';
import { ReaderSettings, ThemeMode, FontFamily, FontSize, ReaderMode } from '../types';

interface ReaderSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  settings: ReaderSettings;
  onUpdateSettings: (newSettings: Partial<ReaderSettings>) => void;
}

export const ReaderSettingsModal: React.FC<ReaderSettingsModalProps> = ({
  isOpen,
  onClose,
  settings,
  onUpdateSettings,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative w-full max-w-md bg-white dark:bg-slate-900 rounded-2xl shadow-2xl p-6 border border-slate-200 dark:border-slate-800 z-10 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
          <div className="flex items-center gap-2">
            <Sliders className="w-5 h-5 text-sky-600 dark:text-sky-400" />
            <h3 className="font-bold text-slate-900 dark:text-white text-base">
              Ajustes de Lectura
            </h3>
          </div>
          <button 
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Themes */}
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Tema Visual
          </label>
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => onUpdateSettings({ theme: 'light' })}
              className={`p-3 rounded-xl border flex flex-col items-center gap-2 transition-all ${
                settings.theme === 'light'
                  ? 'border-sky-500 bg-sky-50 text-sky-800 font-semibold ring-2 ring-sky-500/20'
                  : 'border-slate-200 hover:bg-slate-50 text-slate-700'
              }`}
            >
              <Sun className="w-5 h-5 text-amber-500" />
              <span className="text-xs">Blanco</span>
            </button>

            <button
              onClick={() => onUpdateSettings({ theme: 'sepia' })}
              className={`p-3 rounded-xl border flex flex-col items-center gap-2 transition-all ${
                settings.theme === 'sepia'
                  ? 'border-amber-500 bg-amber-50/80 text-amber-900 font-semibold ring-2 ring-amber-500/20'
                  : 'border-[#e5dcc5] bg-[#fbf7ee] text-[#4a3f35] hover:bg-[#f5eedb]'
              }`}
            >
              <Coffee className="w-5 h-5 text-amber-700" />
              <span className="text-xs">Sepia</span>
            </button>

            <button
              onClick={() => onUpdateSettings({ theme: 'dark' })}
              className={`p-3 rounded-xl border flex flex-col items-center gap-2 transition-all ${
                settings.theme === 'dark'
                  ? 'border-sky-400 bg-slate-800 text-white font-semibold ring-2 ring-sky-400/20'
                  : 'border-slate-700 bg-slate-900 text-slate-300 hover:bg-slate-800'
              }`}
            >
              <Moon className="w-5 h-5 text-sky-400" />
              <span className="text-xs">Oscuro</span>
            </button>
          </div>
        </div>

        {/* Font Family */}
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Tipografía
          </label>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => onUpdateSettings({ font: 'sans' })}
              className={`p-3 rounded-xl border flex items-center justify-center gap-2 transition-all ${
                settings.font === 'sans'
                  ? 'border-sky-500 bg-sky-50 text-sky-800 dark:bg-sky-950/60 dark:text-sky-300 font-semibold'
                  : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
              }`}
            >
              <span className="font-sans font-medium text-sm">Moderna (Sans)</span>
            </button>

            <button
              onClick={() => onUpdateSettings({ font: 'serif' })}
              className={`p-3 rounded-xl border flex items-center justify-center gap-2 transition-all ${
                settings.font === 'serif'
                  ? 'border-sky-500 bg-sky-50 text-sky-800 dark:bg-sky-950/60 dark:text-sky-300 font-semibold'
                  : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
              }`}
            >
              <span className="font-serif font-medium text-sm">Editorial (Serif)</span>
            </button>
          </div>
        </div>

        {/* Font Size */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Tamaño de Texto
            </label>
            <span className="text-xs text-slate-400">
              {settings.fontSize.toUpperCase()}
            </span>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {(['sm', 'base', 'lg', 'xl'] as FontSize[]).map((size) => (
              <button
                key={size}
                onClick={() => onUpdateSettings({ fontSize: size })}
                className={`py-2 rounded-xl border text-xs font-medium transition-all ${
                  settings.fontSize === size
                    ? 'border-sky-500 bg-sky-500 text-white font-bold'
                    : 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                {size === 'sm' && 'Pequeño'}
                {size === 'base' && 'Normal'}
                {size === 'lg' && 'Grande'}
                {size === 'xl' && 'Muy Grande'}
              </button>
            ))}
          </div>
        </div>

        {/* Auto scroll */}
        <div className="space-y-3 pt-2 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                Desplazamiento Automático Continuo
              </div>
              <p className="text-xs text-slate-500">
                Lectura continua manos libres
              </p>
            </div>
            <button
              onClick={() => onUpdateSettings({ autoScroll: !settings.autoScroll })}
              className={`p-2 rounded-xl flex items-center gap-1.5 text-xs font-semibold transition-all ${
                settings.autoScroll
                  ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/20'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              {settings.autoScroll ? (
                <>
                  <Square className="w-3.5 h-3.5" />
                  <span>Pausar</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Iniciar</span>
                </>
              )}
            </button>
          </div>

          {settings.autoScroll && (
            <div className="space-y-1">
              <div className="flex justify-between text-xs text-slate-500">
                <span>Velocidad: {settings.autoScrollSpeed}x</span>
                <span>{settings.autoScrollSpeed === 1 ? 'Lenta' : settings.autoScrollSpeed === 5 ? 'Rápida' : 'Moderada'}</span>
              </div>
              <input
                type="range"
                min="1"
                max="5"
                step="1"
                value={settings.autoScrollSpeed}
                onChange={(e) => onUpdateSettings({ autoScrollSpeed: parseInt(e.target.value) })}
                className="w-full accent-sky-500"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
