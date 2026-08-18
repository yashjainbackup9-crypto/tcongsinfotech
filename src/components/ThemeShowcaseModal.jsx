import React, { useState, useEffect, useRef } from 'react';
import { Sun, Moon, Sparkles, X, Play, RotateCcw, CheckCircle2, ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import confetti from 'canvas-confetti';

export const ThemeShowcaseModal = () => {
  const { theme, setTheme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [demoState, setDemoState] = useState('idle'); // 'idle' | 'to-dark' | 'to-light' | 'completed'
  const [statusMessage, setStatusMessage] = useState('Initializing Dual-Theme Showcase...');
  const sequenceTimeoutRef = useRef(null);

  // Trigger popup after 1.5s on first visit
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
      startThemeDemo();
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const startThemeDemo = () => {
    setDemoState('to-dark');
    setStatusMessage('1/2: Transforming to Obsidian Dark Mode... 🌑');
    
    // Step 1: Set Light first, then transition to Dark after 1s
    setTheme('light');

    sequenceTimeoutRef.current = setTimeout(() => {
      setTheme('dark');
      setStatusMessage('2/2: Returning to Crisp Enterprise Light Mode... ☀️');
      setDemoState('to-light');

      sequenceTimeoutRef.current = setTimeout(() => {
        setTheme('light');
        setDemoState('completed');
        setStatusMessage('✨ Showcase Complete! Try toggling manually below.');

        // Mini confetti celebration
        try {
          confetti({
            particleCount: 50,
            spread: 60,
            origin: { y: 0.7 }
          });
        } catch (e) {}

      }, 1800);

    }, 1600);
  };

  const handleManualToggle = () => {
    if (sequenceTimeoutRef.current) clearTimeout(sequenceTimeoutRef.current);
    setDemoState('manual');
    toggleTheme();
  };

  const handleReplay = () => {
    if (sequenceTimeoutRef.current) clearTimeout(sequenceTimeoutRef.current);
    startThemeDemo();
  };

  const handleClose = () => {
    if (sequenceTimeoutRef.current) clearTimeout(sequenceTimeoutRef.current);
    setIsOpen(false);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => {
          setIsOpen(true);
          startThemeDemo();
        }}
        className="fixed bottom-20 left-6 z-40 px-3.5 py-2 rounded-full glass-panel border border-[#E51A4B]/40 hover:border-[#E51A4B] text-[var(--text-main)] shadow-xl flex items-center gap-2 text-xs font-semibold hover:scale-105 active:scale-95 transition-all duration-200"
        title="Experience Theme Magic"
      >
        <Sparkles className="w-3.5 h-3.5 text-[#E51A4B]" />
        <span className="hidden sm:inline">Theme Showcase</span>
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-300">
      <div className="glass-panel p-6 sm:p-8 rounded-3xl max-w-md w-full border border-black/20 dark:border-white/20 shadow-2xl relative text-left bg-gradient-to-b from-white dark:from-[#161622] to-slate-50 dark:to-[#0C0C12] animate-in zoom-in-95 duration-300">
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors focus-visible:ring-2 focus-visible:ring-[#E51A4B] focus-visible:outline-none"
          aria-label="Close Showcase Modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E51A4B]/15 text-[#E51A4B] text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5 animate-pulse" />
          <span>Interactive Theme Showcase</span>
        </div>

        <h3 className="text-xl sm:text-2xl font-extrabold text-[var(--text-main)] mb-2">
          Experience Both Realities.
        </h3>

        <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed mb-5">
          Watch our dual-mode design system adapt fluidly from <strong>Obsidian Dark</strong> to <strong>Clean Enterprise Light</strong> with zero friction.
        </p>

        {/* Live Sequence Status Box */}
        <div className="p-4 rounded-2xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 mb-6 flex flex-col gap-2.5">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-[var(--text-main)] flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#E51A4B] animate-ping"></span>
              Live Transition Status:
            </span>
            <span className="font-mono text-[11px] font-bold text-[#E51A4B] dark:text-[#E2EC07] uppercase">
              Mode: {theme}
            </span>
          </div>

          <div className="p-2.5 rounded-xl bg-white dark:bg-[#1C1C28] border border-black/5 dark:border-white/10 text-xs font-medium text-[var(--text-main)] flex items-center gap-2">
            {theme === 'dark' ? (
              <Moon className="w-4 h-4 text-[#E2EC07] shrink-0" />
            ) : (
              <Sun className="w-4 h-4 text-amber-500 shrink-0" />
            )}
            <span className="line-clamp-1">{statusMessage}</span>
          </div>
        </div>

        {/* Manual Interactive Switch */}
        <div className="mb-6">
          <label className="block text-[11px] font-bold text-[var(--text-muted)] uppercase tracking-wider mb-2.5">
            Manual Theme Switcher
          </label>
          <div 
            onClick={handleManualToggle}
            className="w-full p-2.5 rounded-2xl bg-black/[0.04] dark:bg-white/[0.06] border border-black/10 dark:border-white/10 flex items-center justify-between cursor-pointer hover:border-[#E51A4B]/40 transition-all group"
          >
            <div className="flex items-center gap-3 pl-2">
              <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all ${
                theme === 'dark' ? 'bg-[#E2EC07]/20 text-[#E2EC07]' : 'bg-amber-500/20 text-amber-600'
              }`}>
                {theme === 'dark' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
              </div>
              <div className="text-xs text-left">
                <div className="font-bold text-[var(--text-main)]">
                  {theme === 'dark' ? 'Obsidian Dark' : 'Enterprise Light'}
                </div>
                <div className="text-[10px] text-[var(--text-muted)]">
                  Click to switch instantly
                </div>
              </div>
            </div>

            {/* Switch Toggle Knob */}
            <div className="w-12 h-6 rounded-full bg-black/10 dark:bg-white/20 p-0.5 relative transition-colors">
              <div className={`w-5 h-5 rounded-full bg-[#E51A4B] text-white shadow-md transform transition-transform duration-200 flex items-center justify-center text-[9px] ${
                theme === 'dark' ? 'translate-x-6' : 'translate-x-0'
              }`}>
                {theme === 'dark' ? '🌙' : '☀️'}
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 pt-2">
          <button
            onClick={handleReplay}
            className="flex-1 py-3 px-4 rounded-xl bg-black/[0.04] dark:bg-white/[0.06] hover:bg-black/[0.08] dark:hover:bg-white/[0.1] border border-black/10 dark:border-white/10 text-xs font-bold text-[var(--text-main)] flex items-center justify-center gap-2 transition-all active:scale-95 focus-visible:ring-2 focus-visible:ring-[#E51A4B] focus-visible:outline-none"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Replay Auto-Toggle</span>
          </button>

          <button
            onClick={handleClose}
            className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-[#E51A4B] to-[#D01540] text-white text-xs font-bold shadow-lg shadow-[#E51A4B]/30 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-1.5 focus-visible:ring-2 focus-visible:ring-[#E51A4B] focus-visible:outline-none"
          >
            <span>Explore Site</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
