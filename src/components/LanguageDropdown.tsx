import React, { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { useI18n } from '../i18n/i18nContext';
import { SUPPORTED_LANGUAGES, Language } from '../i18n/types';

export const LanguageDropdown: React.FC = () => {
  const { language, setLanguage, t } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentOption = SUPPORTED_LANGUAGES.find((opt) => opt.code === language) || SUPPORTED_LANGUAGES[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleSelect = (code: Language) => {
    setLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label={t('lang.label', 'Idioma')}
        title={t('lang.label', 'Cambiar idioma / Switch language')}
        className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-150 border ${
          isOpen
            ? 'bg-sky-50 dark:bg-sky-950/70 border-sky-300 dark:border-sky-700 text-sky-700 dark:text-sky-300 ring-2 ring-sky-500/20'
            : 'bg-slate-50 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700/80 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700/80 hover:border-slate-300 dark:hover:border-slate-600'
        }`}
      >
        <span className="text-sm leading-none" role="img" aria-label={currentOption.label}>
          {currentOption.flag}
        </span>
        <span className="uppercase tracking-wider font-bold text-[11px]">
          {currentOption.code}
        </span>
        <ChevronDown
          className={`w-3 h-3 text-slate-400 dark:text-slate-400 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-sky-500 dark:text-sky-400' : ''
          }`}
        />
      </button>

      {/* Popover Menu */}
      {isOpen && (
        <div
          role="menu"
          aria-orientation="vertical"
          className="absolute right-0 mt-2 w-52 origin-top-right rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-xl shadow-slate-900/10 dark:shadow-black/40 p-1.5 z-50 focus:outline-none backdrop-blur-lg animate-in fade-in zoom-in-95 duration-100"
        >
          {/* Header */}
          <div className="px-3 py-2 border-b border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 flex items-center gap-1.5">
              <Globe className="w-3 h-3 text-sky-500" />
              {t('lang.label', 'Idioma')}
            </span>
            <span className="text-[10px] font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-1.5 py-0.5 rounded-md border border-emerald-200/60 dark:border-emerald-800/60">
              {language.toUpperCase()}
            </span>
          </div>

          {/* Options */}
          <div className="py-1 space-y-0.5">
            {SUPPORTED_LANGUAGES.map((opt) => {
              const isSelected = opt.code === language;
              return (
                <button
                  key={opt.code}
                  role="menuitem"
                  onClick={() => handleSelect(opt.code)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-colors ${
                    isSelected
                      ? 'bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 font-semibold'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/80 font-medium'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-base leading-none" role="img" aria-label={opt.label}>
                      {opt.flag}
                    </span>
                    <div className="flex flex-col text-left">
                      <span className="text-xs leading-tight">{opt.nativeLabel}</span>
                      <span className="text-[10px] text-slate-500 dark:text-slate-400 font-normal">
                        {opt.label}
                      </span>
                    </div>
                  </div>
                  {isSelected && (
                    <div className="w-5 h-5 rounded-full bg-sky-500 text-white flex items-center justify-center">
                      <Check className="w-3 h-3 stroke-[2.5]" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
