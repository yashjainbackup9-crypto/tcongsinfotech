import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, ChevronDown, ChevronUp, Compass, Sparkles } from 'lucide-react';

const SECTIONS = [
  { id: 'hero', name: 'Overview' },
  { id: 'clients', name: 'Partners' },
  { id: 'services', name: 'Services' },
  { id: 'tech-stack', name: 'Tech Matrix' },
  { id: 'process', name: 'Framework' },
  { id: 'case-studies', name: 'Case Studies' },
  { id: 'cost-estimator', name: 'Estimator' },
  { id: 'faq', name: 'FAQ' },
  { id: 'contact', name: 'Contact' }
];

export const SectionAutoScroller = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [isMinimized, setIsMinimized] = useState(false);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef(null);
  const progressIntervalRef = useRef(null);
  const isUserScrollingRef = useRef(false);

  // Section Duration: 7 seconds per section
  const SECTION_DURATION = 7000;

  const scrollToSection = (index) => {
    const section = SECTIONS[index];
    if (!section) return;

    if (section.id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(section.id);
      if (el) {
        const navHeight = 80;
        const targetY = el.getBoundingClientRect().top + window.pageYOffset - navHeight;
        window.scrollTo({ top: targetY, behavior: 'smooth' });
      }
    }
    setCurrentSectionIndex(index);
    setProgress(0);
  };

  const handleNextSection = () => {
    const nextIndex = (currentSectionIndex + 1) % SECTIONS.length;
    scrollToSection(nextIndex);
  };

  const handlePrevSection = () => {
    const prevIndex = currentSectionIndex === 0 ? SECTIONS.length - 1 : currentSectionIndex - 1;
    scrollToSection(prevIndex);
  };

  // Automated Progression Loop
  useEffect(() => {
    if (isPlaying) {
      const startTime = Date.now();
      
      progressIntervalRef.current = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const pct = Math.min(100, (elapsed / SECTION_DURATION) * 100);
        setProgress(pct);
      }, 100);

      timerRef.current = setTimeout(() => {
        handleNextSection();
      }, SECTION_DURATION);
    } else {
      setProgress(0);
      if (timerRef.current) clearTimeout(timerRef.current);
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, [isPlaying, currentSectionIndex]);

  // Pause on manual user scroll
  useEffect(() => {
    let scrollTimeout;
    const handleScroll = () => {
      if (!isUserScrollingRef.current) {
        // Detect user manual interaction
      }
    };

    window.addEventListener('wheel', handleScroll, { passive: true });
    window.addEventListener('touchmove', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('touchmove', handleScroll);
    };
  }, []);

  return (
    <div className="fixed bottom-6 left-6 z-40">
      <div className="glass-panel p-2 sm:p-2.5 rounded-full border border-black/10 dark:border-white/15 shadow-2xl backdrop-blur-xl flex items-center gap-2 transition-all">
        
        {/* Play/Pause Toggle */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className={`p-2 sm:p-2.5 rounded-full transition-all flex items-center justify-center ${
            isPlaying 
              ? 'bg-[#E51A4B] text-white shadow-md shadow-[#E51A4B]/30' 
              : 'bg-black/[0.05] dark:bg-white/[0.08] text-[var(--text-main)] hover:bg-[#E51A4B] hover:text-white'
          }`}
          title={isPlaying ? "Pause Auto-Scroll Tour" : "Start Auto-Scroll Tour"}
          aria-label={isPlaying ? "Pause Auto-Scroll" : "Start Auto-Scroll"}
        >
          {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 translate-x-0.5" />}
        </button>

        {/* Section Label & Progress */}
        <div className="flex items-center gap-2 px-2 text-xs font-semibold text-[var(--text-main)]">
          <span className="hidden sm:inline text-[11px] font-mono text-[#E51A4B] dark:text-[#E2EC07] uppercase">
            {isPlaying ? 'Auto Tour' : 'Sections'}:
          </span>
          <span className="text-[11px] sm:text-xs">
            {SECTIONS[currentSectionIndex]?.name}
          </span>
          <span className="text-[10px] text-[var(--text-muted)] font-mono">
            ({currentSectionIndex + 1}/{SECTIONS.length})
          </span>
        </div>

        {/* Up/Down Step Buttons */}
        <div className="flex items-center gap-1 border-l border-black/10 dark:border-white/10 pl-2">
          <button
            onClick={handlePrevSection}
            className="p-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors"
            title="Previous Section"
            aria-label="Previous Section"
          >
            <ChevronUp className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={handleNextSection}
            className="p-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors"
            title="Next Section"
            aria-label="Next Section"
          >
            <ChevronDown className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
