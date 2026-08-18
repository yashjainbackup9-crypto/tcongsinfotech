import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Command, 
  Sun, 
  Moon, 
  PhoneCall, 
  Calculator, 
  FileText, 
  Briefcase, 
  Layers, 
  Terminal, 
  HelpCircle, 
  Mail, 
  ArrowRight,
  X,
  Compass
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const CommandPalette = ({ onOpenConsultation, onSetCurrency }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const { theme, toggleTheme } = useTheme();

  // Keyboard shortcut listener: Cmd+K or Ctrl+K or /
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const actions = [
    {
      id: 'services',
      title: 'Explore Specialized Services',
      category: 'Navigation',
      icon: Layers,
      handler: () => {
        const el = document.getElementById('services');
        if (window.lenis) window.lenis.scrollTo(el, { offset: -80, duration: 1.2 });
        else el?.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    },
    {
      id: 'tech-stack',
      title: 'View Engineering Tech Stack Matrix',
      category: 'Navigation',
      icon: Terminal,
      handler: () => {
        const el = document.getElementById('tech-stack');
        if (window.lenis) window.lenis.scrollTo(el, { offset: -80, duration: 1.2 });
        else el?.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    },
    {
      id: 'process',
      title: 'Inspect 6-Phase Delivery Framework',
      category: 'Navigation',
      icon: Compass,
      handler: () => {
        const el = document.getElementById('process');
        if (window.lenis) window.lenis.scrollTo(el, { offset: -80, duration: 1.2 });
        else el?.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    },
    {
      id: 'case-studies',
      title: 'Read Client Case Studies & Metrics',
      category: 'Navigation',
      icon: Briefcase,
      handler: () => {
        const el = document.getElementById('case-studies');
        if (window.lenis) window.lenis.scrollTo(el, { offset: -80, duration: 1.2 });
        else el?.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    },
    {
      id: 'estimator',
      title: 'Calculate Project Cost & Scope',
      category: 'Tools',
      icon: Calculator,
      handler: () => {
        const el = document.getElementById('estimator');
        if (window.lenis) window.lenis.scrollTo(el, { offset: -80, duration: 1.2 });
        else el?.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    },
    {
      id: 'theme',
      title: `Toggle Theme (Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode)`,
      category: 'Preferences',
      icon: theme === 'dark' ? Sun : Moon,
      handler: () => {
        toggleTheme();
        setIsOpen(false);
      }
    },
    {
      id: 'consultation',
      title: 'Schedule 30-Minute Architecture Call',
      category: 'Actions',
      icon: PhoneCall,
      handler: () => {
        setIsOpen(false);
        onOpenConsultation();
      }
    },
    {
      id: 'contact',
      title: 'Send Direct Inquiry via Nodemailer',
      category: 'Actions',
      icon: Mail,
      handler: () => {
        const el = document.getElementById('contact');
        if (window.lenis) window.lenis.scrollTo(el, { offset: -80, duration: 1.2 });
        else el?.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    },
    {
      id: 'faq',
      title: 'Browse Frequently Asked Questions',
      category: 'Help',
      icon: HelpCircle,
      handler: () => {
        const el = document.getElementById('faqs');
        if (window.lenis) window.lenis.scrollTo(el, { offset: -80, duration: 1.2 });
        else el?.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    }
  ];

  const filteredActions = query
    ? actions.filter(
        (a) =>
          a.title.toLowerCase().includes(query.toLowerCase()) ||
          a.category.toLowerCase().includes(query.toLowerCase())
      )
    : actions;

  return (
    <>
      {/* Floating Spotlight Launcher Pill in Navbar / Top */}
      <button
        onClick={() => setIsOpen(true)}
        className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/[0.04] dark:bg-white/[0.05] border border-black/10 dark:border-white/10 text-[var(--text-muted)] hover:text-[var(--text-main)] hover:border-[#E51A4B]/40 text-xs transition-all shadow-sm"
        title="Open Command Palette (Cmd + K)"
      >
        <Search className="w-3.5 h-3.5" />
        <span className="font-medium">Quick Search</span>
        <kbd className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-black/10 dark:bg-white/10 border border-black/10 dark:border-white/10 text-[var(--text-subtle)]">
          ⌘K
        </kbd>
      </button>

      {/* Modal Backdrop & Palette */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
          <div className="glass-panel w-full max-w-xl rounded-3xl border border-black/20 dark:border-white/20 shadow-2xl overflow-hidden text-left bg-gradient-to-b from-white dark:from-[#161622] to-slate-50 dark:to-[#0C0C12] animate-in zoom-in-95 duration-200">
            
            {/* Search Input Bar */}
            <div className="flex items-center gap-3 p-4 sm:p-5 border-b border-black/10 dark:border-white/10">
              <Search className="w-5 h-5 text-[#E51A4B] shrink-0" />
              <input
                type="text"
                autoFocus
                placeholder="Type a command, search section, or tool (e.g. 'theme', 'pricing', 'tech')..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-transparent text-sm sm:text-base text-[var(--text-main)] placeholder-[var(--text-subtle)] focus:outline-none"
              />
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full bg-black/5 dark:bg-white/10 text-[var(--text-muted)] hover:text-[var(--text-main)]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Results List */}
            <div className="max-h-[360px] overflow-y-auto p-3 space-y-1 scrollbar-none">
              {filteredActions.length === 0 ? (
                <div className="p-8 text-center text-xs text-[var(--text-muted)]">
                  No commands found matching "{query}". Try searching for 'services', 'pricing', or 'call'.
                </div>
              ) : (
                filteredActions.map((action) => {
                  const Icon = action.icon;
                  return (
                    <button
                      key={action.id}
                      onClick={action.handler}
                      className="w-full p-3 rounded-2xl flex items-center justify-between text-left hover:bg-[#E51A4B]/10 hover:border-[#E51A4B]/30 border border-transparent transition-all group cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-xl bg-black/5 dark:bg-white/5 group-hover:bg-[#E51A4B] group-hover:text-white text-[var(--text-muted)] flex items-center justify-center transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs sm:text-sm font-semibold text-[var(--text-main)] group-hover:text-[#E51A4B] transition-colors">
                            {action.title}
                          </div>
                          <div className="text-[10px] text-[var(--text-muted)]">
                            {action.category}
                          </div>
                        </div>
                      </div>

                      <ArrowRight className="w-4 h-4 text-[var(--text-subtle)] group-hover:text-[#E51A4B] group-hover:translate-x-1 transition-transform" />
                    </button>
                  );
                })
              )}
            </div>

            {/* Palette Footer */}
            <div className="p-3 bg-black/[0.02] dark:bg-white/[0.02] border-t border-black/5 dark:border-white/5 flex items-center justify-between text-[11px] text-[var(--text-muted)] px-4">
              <div className="flex items-center gap-3">
                <span>Navigation: <kbd className="px-1 py-0.5 rounded bg-black/5 dark:bg-white/10 font-mono text-[9px]">↑↓</kbd></span>
                <span>Select: <kbd className="px-1 py-0.5 rounded bg-black/5 dark:bg-white/10 font-mono text-[9px]">Enter</kbd></span>
                <span>Close: <kbd className="px-1 py-0.5 rounded bg-black/5 dark:bg-white/10 font-mono text-[9px]">ESC</kbd></span>
              </div>
              <span className="font-mono text-[10px] text-[#E51A4B]">Tcongs OS v2.4</span>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
