import React, { createContext, useContext, useState, useEffect, useMemo, ReactNode } from 'react';
import { Language } from './types';
import { UI_TRANSLATIONS } from './translations/ui';
import {
  GUIDE_METADATA,
  ABOUT_SECTION,
  PARTE_A,
  PARTE_B,
  PARTE_C_INTRO,
  MODULES_DATA,
  PARTE_D,
  ModuleItem,
} from '../data/guideContent';
import {
  GUIDE_METADATA_EN,
  ABOUT_SECTION_EN,
  PARTE_A_EN,
  PARTE_B_EN,
  PARTE_C_INTRO_EN,
  MODULES_DATA_EN,
  PARTE_D_EN,
} from './translations/guideContentEn';

export interface GuideDataset {
  GUIDE_METADATA: typeof GUIDE_METADATA;
  ABOUT_SECTION: typeof ABOUT_SECTION;
  PARTE_A: typeof PARTE_A;
  PARTE_B: typeof PARTE_B;
  PARTE_C_INTRO: typeof PARTE_C_INTRO;
  MODULES_DATA: ModuleItem[];
  PARTE_D: typeof PARTE_D;
}

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, fallback?: string) => string;
  guideData: GuideDataset;
}

const I18nContext = createContext<I18nContextType | null>(null);

function detectInitialLanguage(): Language {
  try {
    const saved = localStorage.getItem('cc_language');
    if (saved === 'es' || saved === 'en') {
      return saved;
    }
  } catch (e) {
    // ignore localStorage errors
  }

  // Detect browser language
  if (typeof navigator !== 'undefined' && navigator.language) {
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('en')) {
      return 'en';
    }
  }

  return 'es';
}

export const I18nProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(detectInitialLanguage);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('cc_language', lang);
    } catch (e) {
      // ignore
    }
  };

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
      document.title = language === 'en'
        ? 'Confident Christianity · Facilitator & Student Guide'
        : 'Cristianismo con Confianza · Guía del Facilitador';
    }
  }, [language]);

  const t = useMemo(() => {
    return (key: string, fallback?: string): string => {
      const activeDict = UI_TRANSLATIONS[language] as Record<string, string> | undefined;
      if (activeDict && activeDict[key]) {
        return activeDict[key];
      }
      const fallbackDict = UI_TRANSLATIONS.es as Record<string, string>;
      if (fallbackDict[key]) {
        return fallbackDict[key];
      }
      return fallback || key;
    };
  }, [language]);

  const guideData: GuideDataset = useMemo(() => {
    if (language === 'en') {
      return {
        GUIDE_METADATA: GUIDE_METADATA_EN as unknown as typeof GUIDE_METADATA,
        ABOUT_SECTION: ABOUT_SECTION_EN,
        PARTE_A: PARTE_A_EN,
        PARTE_B: PARTE_B_EN as unknown as typeof PARTE_B,
        PARTE_C_INTRO: PARTE_C_INTRO_EN,
        MODULES_DATA: MODULES_DATA_EN,
        PARTE_D: PARTE_D_EN as unknown as typeof PARTE_D,
      };
    }
    return {
      GUIDE_METADATA,
      ABOUT_SECTION,
      PARTE_A,
      PARTE_B,
      PARTE_C_INTRO,
      MODULES_DATA,
      PARTE_D,
    };
  }, [language]);

  return (
    <I18nContext.Provider value={{ language, setLanguage, t, guideData }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = (): I18nContextType => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
};
