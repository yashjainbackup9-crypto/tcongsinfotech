import React, { useState, useEffect, useRef } from 'react';
import { Sun, Moon, Sparkles, X, ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const ThemeShowcaseModal = () => {
  const { theme, setTheme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const sequenceTimeoutRef = useRef(null);

  // Trigger popup after 1.5s on initial visit
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
      runThemePreview();
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const runThemePreview = () => {
    // Start in light mode
    setTheme('light');

    // Smoothly transition entire site to Dark Mode
    sequenceTimeoutRef.current = setTimeout(() => {
      setTheme('dark');

      // Return to Light Mode after showcasing dark aesthetics
      sequenceTimeoutRef.current = setTimeout(() => {
        setTheme('light');
      }, 2000);

    }, 1600);
  };

  const handleManualToggle = () => {
    if (sequenceTimeoutRef.current) clearTimeout(sequenceTimeoutRef.current);
    toggleTheme();
  };

  const handleClose = () => {
    if (sequenceTimeoutRef.current) clearTimeout(sequenceTimeoutRef.current);
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-300">
      <div className="glass-panel p-6 sm:p-8 rounded-3xl max-w-sm w-full border border-black/15 dark:border-white/20 shadow-2xl relative text-left bg-gradient-to-b from-white dark:from-[#161622] to-slate-50 dark:to-[#0C0C12] animate-in zoom-in-95 duration-300">
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors focus-visible:ring-2 focus-visible:ring-[#E51A4B] focus-visible:outline-none"
          aria-label="Close Preview"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Minimal Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E51A4B]/15 text-[#E51A4B] text-[11px] font-bold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Obsidian Dark Mode</span>
        </div>

        <h3 className="text-xl sm:text-2xl font-extrabold text-[var(--text-main)] mb-2">
          Engineered in Dark Mode.
        </h3>

        <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed mb-6">
          Optimized for deep focus, reduced eye strain, and high visual clarity.
        </p>

        {/* Minimalist Manual Switcher */}
        <div className="mb-6">
          <div 
            onClick={handleManualToggle}
            className="w-full p-3 rounded-2xl bg-black/[0.04] dark:bg-white/[0.06] border border-black/10 dark:border-white/10 flex items-center justify-between cursor-pointer hover:border-[#E51A4B]/40 transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                theme === 'dark' ? 'bg-[#E2EC07]/20 text-[#E2EC07]' : 'bg-amber-500/20 text-amber-600'
              }`}>
                {theme === 'dark' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
              </div>
              <div className="text-xs text-left">
                <div className="font-bold text-[var(--text-main)]">
                  {theme === 'dark' ? 'Obsidian Dark' : 'Enterprise Light'}
                </div>
                <div className="text-[11px] text-[var(--text-muted)]">
                  Tap to toggle theme
                </div>
              </div>
            </div>

            {/* Switch Toggle */}
            <div className="w-12 h-6 rounded-full bg-black/10 dark:bg-white/20 p-0.5 relative transition-colors">
              <div className={`w-5 h-5 rounded-full bg-[#E51A4B] text-white shadow-md transform transition-transform duration-200 flex items-center justify-center text-[9px] ${
                theme === 'dark' ? 'translate-x-6' : 'translate-x-0'
              }`}>
                {theme === 'dark' ? '🌙' : '☀️'}
              </div>
            </div>
          </div>
        </div>

        {/* Dismiss / Continue Button */}
        <button
          onClick={handleClose}
          className="w-full py-3 px-4 rounded-xl bg-[#E51A4B] hover:bg-[#D01540] text-white text-xs font-bold shadow-lg shadow-[#E51A4B]/30 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-[#E51A4B] focus-visible:outline-none"
        >
          <span>Continue to Website</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

      </div>
    </div>
  );
};
