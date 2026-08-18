import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Search, 
  Sparkles, 
  ArrowRight, 
  Terminal, 
  Zap, 
  Sun, 
  Moon, 
  PhoneCall, 
  Calculator, 
  Briefcase, 
  BookOpen, 
  Layers, 
  X,
  ExternalLink
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { SERVICES, CASE_STUDIES_DETAILED, INSIGHTS_DETAILED } from '../data/content';

export const CommandPalette = ({ onOpenConsultation }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { theme, toggleTheme } = useTheme();
  const inputRef = useRef(null);
  const navigate = useNavigate();

  // Listen for Cmd+K or Ctrl+K globally
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

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  const staticActions = [
    { id: 'home', title: 'Home Overview', category: 'Pages', path: '/', icon: 'Sparkles', desc: 'Main digital engineering hub' },
    { id: 'about', title: 'About Tcongs', category: 'Pages', path: '/about', icon: 'Terminal', desc: 'Our origin, philosophy & engineering squad' },
    { id: 'services-all', title: 'Services Catalog', category: 'Pages', path: '/services', icon: 'Layers', desc: 'Explore all 6 core engineering divisions' },
    { id: 'case-studies-all', title: 'Case Studies Portfolio', category: 'Pages', path: '/case-studies', icon: 'Zap', desc: 'Client transformations & verified ROI' },
    { id: 'pricing', title: 'Sprint Estimator & Pricing', category: 'Pages', path: '/pricing', icon: 'Calculator', desc: 'Calculate project budget & timeline' },
    { id: 'careers', title: 'Careers & Open Roles', category: 'Pages', path: '/careers', icon: 'Briefcase', desc: 'Join our high-velocity engineering squad' },
    { id: 'insights', title: 'Engineering Insights', category: 'Pages', path: '/insights', icon: 'BookOpen', desc: 'Technical playbooks & deep dives' },
    { id: 'contact', title: 'Contact & Discovery Lab', category: 'Pages', path: '/contact', icon: 'PhoneCall', desc: 'Direct Mumbai dispatch & inquiries' },
    {
      id: 'theme',
      title: theme === 'dark' ? 'Switch to Clean Light Mode' : 'Switch to Obsidian Dark Mode',
      category: 'Actions',
      action: () => toggleTheme(),
      icon: theme === 'dark' ? 'Sun' : 'Moon',
      desc: 'Toggle visual theme'
    },
    {
      id: 'consultation',
      title: 'Schedule 30-Min Architecture Call',
      category: 'Actions',
      action: () => onOpenConsultation(),
      icon: 'PhoneCall',
      desc: 'Direct strategy session with lead architect'
    }
  ];

  // Dynamic Service Pages
  const serviceActions = SERVICES.map(s => ({
    id: `svc-${s.slug}`,
    title: s.title,
    category: 'Services',
    path: `/services/${s.slug}`,
    icon: 'Layers',
    desc: `${s.category} • ${s.metrics}`
  }));

  // Dynamic Case Studies
  const caseStudyActions = Object.values(CASE_STUDIES_DETAILED).map(cs => ({
    id: `cs-${cs.slug}`,
    title: cs.title,
    category: 'Case Studies',
    path: `/case-studies/${cs.slug}`,
    icon: 'Zap',
    desc: `${cs.client} • ${cs.duration}`
  }));

  // Dynamic Insights
  const insightActions = INSIGHTS_DETAILED.map(art => ({
    id: `art-${art.slug}`,
    title: art.title,
    category: 'Insights',
    path: `/insights/${art.slug}`,
    icon: 'BookOpen',
    desc: `${art.category} • ${art.readTime}`
  }));

  const allItems = [...staticActions, ...serviceActions, ...caseStudyActions, ...insightActions];

  const filteredItems = query.trim() === ''
    ? staticActions
    : allItems.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase()) ||
        (item.desc && item.desc.toLowerCase().includes(query.toLowerCase()))
      );

  const handleSelect = (item) => {
    setIsOpen(false);
    if (item.action) {
      item.action();
    } else if (item.path) {
      navigate(item.path);
    }
  };

  const handleKeyDownList = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev + 1) % filteredItems.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev - 1 + filteredItems.length) % filteredItems.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        handleSelect(filteredItems[selectedIndex]);
      }
    }
  };

  return (
    <>
      {/* Trigger Button in Navbar */}
      <button
        onClick={() => setIsOpen(true)}
        className="hidden xl:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/[0.04] dark:bg-white/[0.05] border border-black/10 dark:border-white/10 text-xs text-[var(--text-muted)] hover:text-[var(--text-main)] hover:border-[#E51A4B]/40 transition-all cursor-pointer"
        title="Open Spotlight Search (Cmd + K)"
      >
        <Search className="w-3.5 h-3.5" />
        <span>Quick Search</span>
        <kbd className="px-1.5 py-0.5 text-[10px] font-mono rounded bg-black/5 dark:bg-white/10 text-[var(--text-muted)]">
          ⌘K
        </kbd>
      </button>

      {/* Modal Backdrop & Spotlight Launcher */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
          <div 
            className="w-full max-w-xl glass-panel rounded-3xl border border-black/10 dark:border-white/15 overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200 text-left bg-[var(--bg-card)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Input Bar */}
            <div className="p-4 border-b border-black/10 dark:border-white/10 flex items-center gap-3">
              <Search className="w-5 h-5 text-[#E51A4B] shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                onKeyDown={handleKeyDownList}
                placeholder="Type a command, service, case study, or page..."
                className="w-full bg-transparent text-sm text-[var(--text-main)] placeholder-[var(--text-muted)] focus:outline-none"
              />
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-main)]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Results List */}
            <div className="max-h-80 overflow-y-auto p-2 divide-y divide-black/5 dark:divide-white/5 scrollbar-thin">
              {filteredItems.length === 0 ? (
                <div className="p-6 text-center text-xs text-[var(--text-muted)]">
                  No matching commands or pages found for "<strong className="text-[var(--text-main)]">{query}</strong>"
                </div>
              ) : (
                filteredItems.map((item, idx) => (
                  <div
                    key={item.id}
                    onClick={() => handleSelect(item)}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={`p-3 rounded-2xl flex items-center justify-between cursor-pointer transition-all ${
                      selectedIndex === idx
                        ? 'bg-[#E51A4B] text-white shadow-md'
                        : 'hover:bg-black/5 dark:hover:bg-white/5 text-[var(--text-main)]'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                        selectedIndex === idx
                          ? 'bg-white/20 text-white'
                          : 'bg-black/[0.04] dark:bg-white/[0.06] text-[#E51A4B]'
                      }`}>
                        {item.icon === 'Sun' ? <Sun className="w-4 h-4" /> :
                         item.icon === 'Moon' ? <Moon className="w-4 h-4" /> :
                         item.icon === 'Calculator' ? <Calculator className="w-4 h-4" /> :
                         item.icon === 'PhoneCall' ? <PhoneCall className="w-4 h-4" /> :
                         item.icon === 'Briefcase' ? <Briefcase className="w-4 h-4" /> :
                         item.icon === 'BookOpen' ? <BookOpen className="w-4 h-4" /> :
                         item.icon === 'Layers' ? <Layers className="w-4 h-4" /> :
                         <Sparkles className="w-4 h-4" />}
                      </div>

                      <div className="min-w-0">
                        <div className="text-xs sm:text-sm font-bold truncate">
                          {item.title}
                        </div>
                        {item.desc && (
                          <div className={`text-[10px] truncate ${
                            selectedIndex === idx ? 'text-white/80' : 'text-[var(--text-muted)]'
                          }`}>
                            {item.desc}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0 ml-2">
                      <span className={`text-[9px] font-mono px-2 py-0.5 rounded-full ${
                        selectedIndex === idx
                          ? 'bg-white/20 text-white'
                          : 'bg-black/5 dark:bg-white/5 text-[var(--text-muted)]'
                      }`}>
                        {item.category}
                      </span>
                      <ArrowRight className={`w-3.5 h-3.5 ${
                        selectedIndex === idx ? 'text-white' : 'text-[var(--text-muted)] opacity-50'
                      }`} />
                    </div>

                  </div>
                ))
              )}
            </div>

            {/* Footer Shortcuts Help */}
            <div className="p-3 bg-black/[0.02] dark:bg-white/[0.02] border-t border-black/10 dark:border-white/10 flex items-center justify-between text-[10px] text-[var(--text-muted)] font-mono">
              <div className="flex items-center gap-2">
                <span>Navigate: <kbd>↑</kbd> <kbd>↓</kbd></span>
                <span>Select: <kbd>↵</kbd></span>
                <span>Close: <kbd>Esc</kbd></span>
              </div>
              <span className="text-[#E51A4B] font-bold">Tcongs Spotlight</span>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
