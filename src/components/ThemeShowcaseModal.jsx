import React, { useState, useEffect, useRef } from 'react';
import { Sun, Moon, Sparkles, X, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const ThemeShowcaseModal = () => {
  const { theme, setTheme, toggleTheme, triggerThemeToggleHighlight } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const autoCloseTimerRef = useRef(null);
  const progressIntervalRef = useRef(null);

  const SHOWCASE_DURATION = 3200; // 3.2s feature showcase

  // Trigger popup after 1.2s on initial visit
  useEffect(() => {
    const hasSeenShowcase = sessionStorage.getItem('tcongs_theme_showcase_shown');
    if (hasSeenShowcase) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
      sessionStorage.setItem('tcongs_theme_showcase_shown', 'true');
      startFeatureDisplaySequence();
    }, 1200);

    return () => {
      clearTimeout(timer);
      if (autoCloseTimerRef.current) clearTimeout(autoCloseTimerRef.current);
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, []);

  const startFeatureDisplaySequence = () => {
    // Switch to dark mode for live preview
    setTheme('dark');
    setProgress(0);

    const startTime = Date.now();
    progressIntervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, (elapsed / SHOWCASE_DURATION) * 100);
      setProgress(pct);
    }, 40);

    autoCloseTimerRef.current = setTimeout(() => {
      handleAutoCloseAndHighlight();
    }, SHOWCASE_DURATION);
  };

  const handleAutoCloseAndHighlight = () => {
    if (autoCloseTimerRef.current) clearTimeout(autoCloseTimerRef.current);
    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    setIsOpen(false);
    // Right after closing modal, highlight the toggle element on the header!
    triggerThemeToggleHighlight();
  };

  const handleManualToggle = () => {
    toggleTheme();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-300">
      <div className="glass-panel p-6 sm:p-8 rounded-3xl max-w-sm w-full border border-[#E51A4B]/30 shadow-2xl relative text-left bg-gradient-to-b from-[#13131A] to-[#0A0A0E] text-white animate-in zoom-in-95 duration-300 overflow-hidden">
        
        {/* Top Auto-Progress Bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-white/10">
          <div 
            className="h-full bg-gradient-to-r from-[#E51A4B] to-[#E2EC07] transition-all duration-75 ease-linear"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Close Button */}
        <button
          onClick={handleAutoCloseAndHighlight}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-[#E51A4B] focus-visible:outline-none"
          aria-label="Close Preview"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Feature Display Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E51A4B]/20 text-[#E51A4B] dark:text-[#E2EC07] border border-[#E51A4B]/30 text-[10px] font-bold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Feature Showcase</span>
        </div>

        <h3 className="text-xl sm:text-2xl font-black text-white mb-2 leading-tight">
          Obsidian Dark Mode Active.
        </h3>

        <p className="text-xs text-slate-300 leading-relaxed mb-5">
          Engineered with high visual contrast and 60fps animations. Switch anytime using the header toggle!
        </p>

        {/* Live Switcher Card */}
        <div className="mb-6">
          <div 
            onClick={handleManualToggle}
            className="w-full p-3 rounded-2xl bg-white/[0.06] border border-white/10 flex items-center justify-between cursor-pointer hover:border-[#E51A4B]/50 transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                theme === 'dark' ? 'bg-[#E2EC07]/20 text-[#E2EC07]' : 'bg-amber-500/20 text-amber-400'
              }`}>
                {theme === 'dark' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
              </div>
              <div className="text-xs text-left">
                <div className="font-bold text-white">
                  {theme === 'dark' ? 'Obsidian Dark Theme' : 'Clean Light Theme'}
                </div>
                <div className="text-[10px] text-slate-400">
                  Click to test theme switch
                </div>
              </div>
            </div>

            {/* Switch Toggle */}
            <div className="w-12 h-6 rounded-full bg-white/20 p-0.5 relative transition-colors">
              <div className={`w-5 h-5 rounded-full bg-[#E51A4B] text-white shadow-md transform transition-transform duration-200 flex items-center justify-center text-[9px] ${
                theme === 'dark' ? 'translate-x-6' : 'translate-x-0'
              }`}>
                {theme === 'dark' ? '🌙' : '☀️'}
              </div>
            </div>
          </div>
        </div>

        {/* Auto Close Button */}
        <button
          onClick={handleAutoCloseAndHighlight}
          className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#E51A4B] to-[#D01540] text-white text-xs font-bold shadow-lg shadow-[#E51A4B]/30 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
        >
          <span>Got it! (Closing in {Math.max(1, Math.ceil((SHOWCASE_DURATION - (progress / 100 * SHOWCASE_DURATION)) / 1000))}s)</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

      </div>
    </div>
  );
};
