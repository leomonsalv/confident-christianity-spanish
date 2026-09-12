import React, { useState, useEffect, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { SidebarTOC } from './components/SidebarTOC';
import { ReaderSettingsModal } from './components/ReaderSettingsModal';
import { SearchModal } from './components/SearchModal';
import { SessionTimerModal } from './components/SessionTimerModal';
import { AudioNarrationBar } from './components/AudioNarrationBar';
import { TextSelectionPopover } from './components/TextSelectionPopover';
import { SuggestionsDrawer } from './components/SuggestionsDrawer';
import { CoverHero } from './components/CoverHero';
import { AboutSection } from './components/AboutSection';
import { ParteASection } from './components/ParteASection';
import { ParteBSection } from './components/ParteBSection';
import { ParteCSection } from './components/ParteCSection';
import { ModuleCard } from './components/ModuleCard';
import { ParteDSection } from './components/ParteDSection';
import { MODULES_DATA, ModuleItem } from './data/guideContent';
import { ReaderSettings, ThemeMode } from './types';
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowUp, 
  Sparkles, 
  Bookmark, 
  BookOpen, 
  Clock, 
  RotateCw,
  Search,
  LayoutGrid,
  ScrollText
} from 'lucide-react';

export const App: React.FC = () => {
  // Reader Settings State
  const [settings, setSettings] = useState<ReaderSettings>(() => {
    const saved = localStorage.getItem('cc_reader_settings');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    return {
      theme: 'light',
      font: 'sans',
      fontSize: 'base',
      readerMode: 'continuous',
      autoScroll: false,
      autoScrollSpeed: 2,
    };
  });

  // Bookmarks & Notes in localStorage
  const [bookmarkedModules, setBookmarkedModules] = useState<number[]>(() => {
    const saved = localStorage.getItem('cc_bookmarks');
    return saved ? JSON.parse(saved) : [1, 2, 6, 13];
  });

  const [facilitatorNotes, setFacilitatorNotes] = useState<Record<number, string>>(() => {
    const saved = localStorage.getItem('cc_notes');
    return saved ? JSON.parse(saved) : {};
  });

  // Navigation & Modals State
  const [activeId, setActiveId] = useState<string>('portada');
  const [progress, setProgress] = useState<number>(0);
  const [isTOCOpen, setIsTOCOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);
  const [isTimerOpen, setIsTimerOpen] = useState<boolean>(false);
  const [isSuggestionsOpen, setIsSuggestionsOpen] = useState<boolean>(false);

  // Chapter-by-chapter / Card mode state
  const [selectedModuleIdx, setSelectedModuleIdx] = useState<number>(0);

  // Audio Speech Synthesis State
  const [audioModule, setAudioModule] = useState<ModuleItem | null>(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(false);
  const speechUtteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Save settings
  useEffect(() => {
    localStorage.setItem('cc_reader_settings', JSON.stringify(settings));
    // Apply theme class to document
    document.documentElement.classList.remove('dark', 'theme-sepia');
    if (settings.theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else if (settings.theme === 'sepia') {
      document.documentElement.classList.add('theme-sepia');
    }
  }, [settings]);

  // Save bookmarks
  useEffect(() => {
    localStorage.setItem('cc_bookmarks', JSON.stringify(bookmarkedModules));
  }, [bookmarkedModules]);

  // Save notes
  const handleSaveNotes = (moduleNum: number, text: string) => {
    const updated = { ...facilitatorNotes, [moduleNum]: text };
    setFacilitatorNotes(updated);
    localStorage.setItem('cc_notes', JSON.stringify(updated));
  };

  const handleToggleBookmark = (moduleNum: number) => {
    setBookmarkedModules(prev =>
      prev.includes(moduleNum) ? prev.filter(n => n !== moduleNum) : [...prev, moduleNum]
    );
  };

  // Scroll progress listener
  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      setProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-scroll loop
  useEffect(() => {
    if (!settings.autoScroll || settings.readerMode !== 'continuous') return;

    const interval = setInterval(() => {
      window.scrollBy({ top: settings.autoScrollSpeed, behavior: 'smooth' });
    }, 50);

    return () => clearInterval(interval);
  }, [settings.autoScroll, settings.autoScrollSpeed, settings.readerMode]);

  // Jump to section with smooth scroll
  const handleSelectSection = (id: string) => {
    if (id.startsWith('modulo-')) {
      const num = parseInt(id.replace('modulo-', ''));
      setSelectedModuleIdx(num - 1);
    }
    setActiveId(id);

    if (settings.readerMode === 'continuous') {
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  // Audio text-to-speech helper
  const handlePlayAudio = (module: ModuleItem) => {
    if (!('speechSynthesis' in window)) {
      alert('Tu navegador no soporta lectura de audio.');
      return;
    }

    if (audioModule?.number === module.number && isAudioPlaying) {
      window.speechSynthesis.pause();
      setIsAudioPlaying(false);
      return;
    }

    if (audioModule?.number === module.number && !isAudioPlaying) {
      window.speechSynthesis.resume();
      setIsAudioPlaying(true);
      return;
    }

    window.speechSynthesis.cancel();
    setAudioModule(module);

    const textToRead = `Módulo ${module.number}: ${module.title}. Objetivo: ${module.objective}. Lo que el Doctor Peter presenta: ${module.whatDrPeterPresents}. Lo que no se puede recortar: ${module.cannotCut}`;
    const utterance = new SpeechSynthesisUtterance(textToRead);
    utterance.lang = 'es-ES';
    utterance.rate = 1.0;

    utterance.onend = () => {
      setIsAudioPlaying(false);
    };

    utterance.onerror = () => {
      setIsAudioPlaying(false);
    };

    speechUtteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
    setIsAudioPlaying(true);
  };

  const handleStopAudio = () => {
    window.speechSynthesis.cancel();
    setIsAudioPlaying(false);
    setAudioModule(null);
  };

  const handleNextAudio = () => {
    if (!audioModule) return;
    const nextIdx = (audioModule.number % 20);
    handlePlayAudio(MODULES_DATA[nextIdx]);
  };

  const handlePrevAudio = () => {
    if (!audioModule) return;
    const prevIdx = (audioModule.number - 2 + 20) % 20;
    handlePlayAudio(MODULES_DATA[prevIdx]);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Dynamic classes for fonts and size
  const fontClass = settings.font === 'serif' ? 'font-reader-serif' : 'font-reader-sans';
  const sizeClass = `font-size-${settings.fontSize}`;

  return (
    <div className={`min-h-screen ${fontClass} ${sizeClass} transition-colors duration-200`}>
      {/* Top sticky navbar */}
      <Navbar
        progress={progress}
        settings={settings}
        onUpdateSettings={(s) => setSettings(prev => ({ ...prev, ...s }))}
        onOpenTOC={() => setIsTOCOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenSettings={() => setIsSettingsOpen(true)}
        onOpenTimer={() => setIsTimerOpen(true)}
        onOpenSuggestions={() => setIsSuggestionsOpen(true)}
        onToggleAudio={() => audioModule ? handlePlayAudio(audioModule) : handlePlayAudio(MODULES_DATA[0])}
        isAudioPlaying={isAudioPlaying}
      />

      {/* Main Content Area */}
      <main className="w-full">
        {settings.readerMode === 'continuous' ? (
          /* Lectura Continua Vertical */
          <div className="space-y-4">
            <CoverHero
              onStartReading={() => handleSelectSection('acerca')}
              onJumpToModules={() => handleSelectSection('parte-c-intro')}
              onOpenTimer={() => setIsTimerOpen(true)}
        onOpenSuggestions={() => setIsSuggestionsOpen(true)}
            />

            <AboutSection />
            <ParteASection />
            <ParteBSection onOpenTimer={() => setIsTimerOpen(true)}
        onOpenSuggestions={() => setIsSuggestionsOpen(true)} />
            <ParteCSection />

            {/* Modules 1 to 20 */}
            <div className="space-y-2">
              {MODULES_DATA.map((mod) => (
                <ModuleCard
                  key={mod.id}
                  module={mod}
                  isBookmarked={bookmarkedModules.includes(mod.number)}
                  onToggleBookmark={handleToggleBookmark}
                  onPlayAudio={handlePlayAudio}
                  notes={facilitatorNotes[mod.number] || ''}
                  onSaveNotes={handleSaveNotes}
                />
              ))}
            </div>

            <ParteDSection />
          </div>
        ) : settings.readerMode === 'chapter' ? (
          /* Episode / Module-by-Module Mode */
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-8">
            {/* Episode Navigation Bar */}
            <div className="flex items-center justify-between p-4 bg-white dark:bg-slate-850 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
              <button
                onClick={() => setSelectedModuleIdx(prev => Math.max(0, prev - 1))}
                disabled={selectedModuleIdx === 0}
                className="flex items-center gap-1 text-xs font-semibold px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-750 text-slate-700 dark:text-slate-200 disabled:opacity-40 hover:bg-slate-200"
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Anterior</span>
              </button>

              <div className="text-center">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                  Episodio {selectedModuleIdx + 1} de 20
                </span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white truncate max-w-xs sm:max-w-md">
                  {MODULES_DATA[selectedModuleIdx].title}
                </h3>
              </div>

              <button
                onClick={() => setSelectedModuleIdx(prev => Math.min(19, prev + 1))}
                disabled={selectedModuleIdx === 19}
                className="flex items-center gap-1 text-xs font-semibold px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-750 text-slate-700 dark:text-slate-200 disabled:opacity-40 hover:bg-slate-200"
              >
                <span className="hidden sm:inline">Siguiente</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Active Module Card */}
            <ModuleCard
              module={MODULES_DATA[selectedModuleIdx]}
              isBookmarked={bookmarkedModules.includes(MODULES_DATA[selectedModuleIdx].number)}
              onToggleBookmark={handleToggleBookmark}
              onPlayAudio={handlePlayAudio}
              notes={facilitatorNotes[MODULES_DATA[selectedModuleIdx].number] || ''}
              onSaveNotes={handleSaveNotes}
            />

            {/* Bottom Episode Switcher Grid */}
            <div className="p-6 bg-slate-50 dark:bg-slate-850/60 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-3">
              <div className="flex justify-between items-center text-xs font-bold text-slate-500 uppercase tracking-wider">
                <span>Ir al Módulo</span>
                <span>20 Módulos</span>
              </div>
              <div className="grid grid-cols-4 sm:grid-cols-10 gap-2">
                {MODULES_DATA.map((m, idx) => (
                  <button
                    key={m.id}
                    onClick={() => setSelectedModuleIdx(idx)}
                    className={`py-2 rounded-xl text-xs font-bold font-mono transition-all ${
                      idx === selectedModuleIdx
                        ? 'bg-sky-600 text-white shadow-md shadow-sky-600/25'
                        : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-sky-50'
                    }`}
                  >
                    {m.number}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Facilitator Cards Quick Grid Mode */
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                <LayoutGrid className="w-4 h-4" />
                <span>Vista Rápida para Facilitadores en Sesión</span>
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
                Cuadrícula de los 20 Módulos
              </h2>
              <p className="text-sm text-slate-500">
                Resumen ejecutivo con el Objetivo y "Lo que no se puede recortar" de cada módulo para consulta inmediata durante reuniones.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {MODULES_DATA.map((mod) => (
                <div
                  key={mod.id}
                  className="p-5 rounded-3xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3 flex flex-col justify-between hover:shadow-md transition-shadow"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-xl text-xs font-bold bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300">
                        Módulo {mod.number}
                      </span>
                      <span className="text-xs text-slate-400">
                        P.{mod.pageNumber}
                      </span>
                    </div>

                    <h3 className="font-bold text-base text-slate-900 dark:text-white line-clamp-1">
                      {mod.title}
                    </h3>

                    <div className="p-3 rounded-xl bg-sky-50/70 dark:bg-sky-950/30 border-l-2 border-sky-600 text-xs text-slate-700 dark:text-sky-200">
                      <strong>Objetivo:</strong> {mod.objective}
                    </div>

                    <div className="p-3 rounded-xl bg-pink-50/70 dark:bg-pink-950/30 border-l-2 border-pink-600 text-xs text-slate-700 dark:text-pink-200">
                      <strong>No recortar:</strong> {mod.cannotCut}
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedModuleIdx(mod.number - 1);
                      setSettings(prev => ({ ...prev, readerMode: 'chapter' }));
                    }}
                    className="w-full mt-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-750 hover:bg-sky-600 hover:text-white text-slate-700 dark:text-slate-200 text-xs font-semibold transition-all text-center"
                  >
                    Ver módulo completo →
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Floating Back to Top Button */}
      {progress > 10 && (
        <button
          onClick={scrollToTop}
          title="Volver al inicio"
          className="fixed bottom-6 right-6 z-30 p-3 rounded-2xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 shadow-xl border border-slate-200 dark:border-slate-700 hover:bg-sky-50 dark:hover:bg-slate-700 transition-all hover:scale-110"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Audio Narration Bar */}
      {audioModule && (
        <AudioNarrationBar
          currentModule={audioModule}
          isPlaying={isAudioPlaying}
          onTogglePlay={() => handlePlayAudio(audioModule)}
          onClose={handleStopAudio}
          onNextModule={handleNextAudio}
          onPrevModule={handlePrevAudio}
        />
      )}

      {/* Drawers & Modals */}
      <SidebarTOC
        isOpen={isTOCOpen}
        onClose={() => setIsTOCOpen(false)}
        activeId={activeId}
        onSelectSection={handleSelectSection}
        bookmarkedModules={bookmarkedModules}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectResult={handleSelectSection}
      />

      <ReaderSettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        settings={settings}
        onUpdateSettings={(s) => setSettings(prev => ({ ...prev, ...s }))}
      />

      <SessionTimerModal
        isOpen={isTimerOpen}
        onClose={() => setIsTimerOpen(false)}
      />

      {/* Text Selection Suggestion Popover */}
      <TextSelectionPopover onSuggestionAdded={() => {}} />

      {/* Community Suggestions Drawer */}
      <SuggestionsDrawer
        isOpen={isSuggestionsOpen}
        onClose={() => setIsSuggestionsOpen(false)}
      />
    </div>
  );
};

export default App;
