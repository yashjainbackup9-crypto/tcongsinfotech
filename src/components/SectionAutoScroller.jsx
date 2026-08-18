import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronUp, Compass, Sparkles } from 'lucide-react';

const SECTIONS = [
  { id: 'hero', name: 'Overview' },
  { id: 'clients', name: 'Partners' },
  { id: 'services', name: 'Services' },
  { id: 'tech-stack', name: 'Tech Matrix' },
  { id: 'process', name: 'Framework' },
  { id: 'case-studies', name: 'Case Studies' },
  { id: 'estimator', name: 'Estimator' },
  { id: 'faq', name: 'FAQ' },
  { id: 'contact', name: 'Contact' }
];

export const SectionAutoScroller = () => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

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
  };

  const handleNextSection = () => {
    const nextIndex = (currentSectionIndex + 1) % SECTIONS.length;
    scrollToSection(nextIndex);
  };

  const handlePrevSection = () => {
    const prevIndex = currentSectionIndex === 0 ? SECTIONS.length - 1 : currentSectionIndex - 1;
    scrollToSection(prevIndex);
  };

  // Sync with scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const section = SECTIONS[i];
        if (section.id === 'hero' && scrollPosition < 400) {
          setCurrentSectionIndex(0);
          break;
        }
        const el = document.getElementById(section.id);
        if (el && el.offsetTop <= scrollPosition) {
          setCurrentSectionIndex(i);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed bottom-6 left-6 z-40">
      <div className="glass-panel p-2 sm:p-2.5 rounded-full border border-black/10 dark:border-white/15 shadow-2xl backdrop-blur-xl flex items-center gap-2 transition-all">
        
        {/* Active Section Dot & Label */}
        <div className="flex items-center gap-2 pl-2 pr-1 text-xs font-semibold text-[var(--text-main)]">
          <span className="w-2 h-2 rounded-full bg-[#E51A4B] animate-pulse"></span>
          <span className="text-[11px] sm:text-xs font-bold">
            {SECTIONS[currentSectionIndex]?.name}
          </span>
          <span className="text-[10px] text-[var(--text-muted)] font-mono">
            ({currentSectionIndex + 1}/{SECTIONS.length})
          </span>
        </div>

        {/* Up/Down Step Buttons */}
        <div className="flex items-center gap-1 border-l border-black/10 dark:border-white/10 pl-1.5">
          <button
            onClick={handlePrevSection}
            className="p-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors focus-visible:ring-2 focus-visible:ring-[#E51A4B] focus-visible:outline-none"
            title="Previous Section"
            aria-label="Previous Section"
          >
            <ChevronUp className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={handleNextSection}
            className="p-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors focus-visible:ring-2 focus-visible:ring-[#E51A4B] focus-visible:outline-none"
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
