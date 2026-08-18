import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Menu, 
  X, 
  ChevronRight, 
  ArrowRight,
  PhoneCall,
  Sun,
  Moon,
  Mail
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const Navbar = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Tech Stack", href: "#tech-stack" },
    { name: "Process", href: "#process" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "Cost Estimator", href: "#estimator" },
    { name: "FAQs", href: "#faqs" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[var(--nav-bg)] backdrop-blur-xl border-b border-black/10 dark:border-white/10 py-2.5 sm:py-3 shadow-xl' 
          : 'bg-transparent py-3 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo with Official Extracted SVG Asset */}
          <a 
            href="#" 
            className="flex items-center gap-2.5 sm:gap-3 group focus-visible:ring-2 focus-visible:ring-[#E51A4B] focus-visible:outline-none rounded-lg p-1"
          >
            <div className="h-9 sm:h-10 flex items-center">
              <img 
                src="/assets/frontend-assets/images/svgs/logo.svg" 
                alt="Tcongs Infotech Logo" 
                className="h-8 sm:h-9 w-auto object-contain brightness-105 group-hover:scale-105 transition-transform duration-200"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fallback = e.currentTarget.nextElementSibling;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              {/* Fallback Badge if image load fails */}
              <div className="hidden items-center gap-2">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-[#E51A4B] to-[#FF4D79] flex items-center justify-center shadow-lg shadow-[#E51A4B]/20">
                  <span className="font-extrabold text-white text-lg sm:text-xl tracking-tighter">T</span>
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-bold text-base sm:text-lg tracking-tight text-[var(--text-main)] flex items-center gap-1">
                    tcongs <span className="text-[#E51A4B] font-light">infotech</span>
                  </span>
                  <span className="text-[9px] sm:text-[10px] tracking-widest uppercase text-[var(--text-subtle)] font-medium">Digital Agency</span>
                </div>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-black/[0.03] dark:bg-white/[0.03] p-1.5 rounded-full border border-black/5 dark:border-white/[0.08] backdrop-blur-md">
            {navLinks.slice(0, 6).map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-xs xl:text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-black/[0.05] dark:hover:bg-white/[0.08] rounded-full transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#E51A4B] focus-visible:outline-none"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs + Theme Toggle */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-black/[0.04] dark:bg-white/[0.05] border border-black/10 dark:border-white/10 text-[var(--text-muted)] hover:text-[var(--text-main)] hover:scale-110 active:scale-95 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#E51A4B] focus-visible:outline-none"
              aria-label="Toggle Theme"
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-[#E2EC07]" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-medium cursor-default">
              <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-ping"></span>
              <span>Available for Q3/Q4</span>
            </div>

            <button
              onClick={onOpenConsultation}
              className="relative group overflow-hidden px-5 py-2.5 rounded-full bg-gradient-to-r from-[#E51A4B] to-[#D01540] text-white text-sm font-semibold shadow-lg shadow-[#E51A4B]/25 hover:shadow-[#E51A4B]/40 hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-[#E51A4B] focus-visible:outline-none"
            >
              <span>Book Call</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>

          {/* Mobile Right Icons */}
          <div className="lg:hidden flex items-center gap-1.5 sm:gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-black/[0.05] dark:bg-white/[0.05] border border-black/10 dark:border-white/10 text-[var(--text-main)] active:scale-90 transition-transform focus-visible:ring-2 focus-visible:ring-[#E51A4B] focus-visible:outline-none"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-[#E2EC07]" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={onOpenConsultation}
              className="px-3 py-2 rounded-xl bg-[#E51A4B] text-white text-xs font-semibold flex items-center gap-1.5 shadow-md shadow-[#E51A4B]/30 active:scale-95 transition-transform focus-visible:ring-2 focus-visible:ring-[#E51A4B] focus-visible:outline-none"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span className="hidden xs:inline text-[11px]">Book Call</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-black/[0.05] dark:bg-white/[0.05] border border-black/10 dark:border-white/10 text-[var(--text-main)] active:scale-90 transition-transform focus-visible:ring-2 focus-visible:ring-[#E51A4B] focus-visible:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[58px] sm:top-[68px] bottom-0 bg-[var(--bg-page)]/98 backdrop-blur-2xl border-b border-black/10 dark:border-white/10 px-5 py-6 shadow-2xl flex flex-col justify-between overflow-y-auto animate-in slide-in-from-top-4 duration-250 z-50">
          <div className="flex flex-col gap-1 text-left">
            <div className="pb-3 mb-2 border-b border-black/5 dark:border-white/5 flex items-center justify-between text-xs text-[var(--text-muted)]">
              <span className="font-semibold uppercase tracking-wider">Navigation Menu</span>
              <span className="text-emerald-500 font-medium flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Q3/Q4 Openings
              </span>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-base font-semibold text-[var(--text-main)] hover:text-[#E51A4B] py-3 border-b border-black/5 dark:border-white/[0.05] active:bg-black/5 dark:active:bg-white/5 px-2 rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-[#E51A4B]"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 opacity-50" />
              </a>
            ))}
          </div>

          {/* Drawer Footer Actions */}
          <div className="pt-6 mt-4 border-t border-black/10 dark:border-white/10 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3.5 rounded-xl bg-[#E51A4B] text-white font-bold text-sm text-center shadow-lg shadow-[#E51A4B]/30 flex items-center justify-center gap-2 active:scale-98 focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>Schedule 30-Min Consultation 🚀</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <div className="flex items-center justify-center gap-4 text-xs text-[var(--text-muted)] pt-1">
              <a href="mailto:info@tcongsinfotech.com" className="flex items-center gap-1 hover:text-[#E51A4B]">
                <Mail className="w-3.5 h-3.5" /> info@tcongsinfotech.com
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
