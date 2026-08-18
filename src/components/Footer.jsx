import React, { useState } from 'react';
import { 
  PhoneCall, 
  Mail, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  Trophy, 
  Users, 
  Cpu, 
  Lock, 
  ArrowRight, 
  Heart, 
  Check, 
  Sparkles,
  ExternalLink,
  Globe
} from 'lucide-react';
import { SERVICES } from '../data/content';

const FOOTER_COLUMNS = {
  "Company": [
    { text: "About Tcongs", href: "#hero" },
    { text: "Engineering Team", href: "#tech-stack" },
    { text: "Delivery Framework", href: "#process" },
    { text: "Client Case Studies", href: "#case-studies" },
    { text: "Performance Benchmark", href: "#benchmark" },
    { text: "Contact & Inquiries", href: "#contact" }
  ],
  "Specialized Solutions": [
    { text: "Custom Web & Mobile Apps", href: "#services" },
    { text: "Enterprise SaaS Architecture", href: "#services" },
    { text: "Shopify Plus & Marketplaces", href: "#services" },
    { text: "UI/UX & Design Systems", href: "#services" },
    { text: "Generative Engine Optimization", href: "#services" },
    { text: "AI & Workflow Automation", href: "#services" }
  ],
  "Platform Ecosystems": [
    { text: "Amazon Seller & SP-API", href: "#clients" },
    { text: "Flipkart Commerce Hub", href: "#clients" },
    { text: "React 19 & Next.js Stack", href: "#tech-stack" },
    { text: "Flutter Cross-Platform", href: "#tech-stack" },
    { text: "Node.js & Python Engines", href: "#tech-stack" },
    { text: "Edge Cloud Infrastructure", href: "#tech-stack" }
  ],
  "Client Resources": [
    { text: "Project Cost Estimator", href: "#estimator" },
    { text: "Frequently Asked Questions", href: "#faqs" },
    { text: "Book 30-Min Architecture Call", href: "#contact" },
    { text: "Privacy Policy & GDPR", href: "#" },
    { text: "Terms of Engagement", href: "#" },
    { text: "Security & OWASP Standards", href: "#benchmark" }
  ]
};

export const Footer = ({ onOpenConsultation }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
    }
  };

  const handleLinkClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.replace('#', '');
      if (targetId === '' || targetId === 'hero') {
        if (window.lenis) {
          window.lenis.scrollTo(0, { duration: 1.2 });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      } else {
        const el = document.getElementById(targetId);
        if (el) {
          if (window.lenis) {
            window.lenis.scrollTo(el, { offset: -80, duration: 1.2 });
          } else {
            const navHeight = 80;
            const targetY = el.getBoundingClientRect().top + window.pageYOffset - navHeight;
            window.scrollTo({ top: targetY, behavior: 'smooth' });
          }
        }
      }
    }
  };

  return (
    <footer className="bg-white dark:bg-[#060608] border-t border-black/10 dark:border-white/[0.08] text-[var(--text-muted)] text-xs relative overflow-hidden text-left transition-colors duration-400 font-sans">
      
      {/* 1. TOP MAIN COLUMNS AREA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Col 1: Brand & Contact Direct Info (Span 4) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              {/* Brand Logo */}
              <a href="#" onClick={(e) => handleLinkClick(e, '#')} className="flex items-center gap-3 mb-4 group">
                <img 
                  src="/assets/frontend-assets/images/svgs/logo.svg" 
                  alt="Tcongs Infotech Logo" 
                  className="h-9 sm:h-10 w-auto object-contain brightness-105 group-hover:scale-105 transition-transform"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.nextElementSibling;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <div className="hidden items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#E51A4B] to-[#FF4D79] flex items-center justify-center text-white font-black text-xl shadow-lg shadow-[#E51A4B]/20">
                    T
                  </div>
                  <span className="font-bold text-lg tracking-tight text-[var(--text-main)]">
                    tcongs <span className="text-[#E51A4B] font-light">infotech</span>
                  </span>
                </div>
              </a>

              <div className="mb-2">
                <span className="text-xs font-bold text-[#E51A4B] uppercase tracking-wider">
                  Full-Spectrum Digital Engineering Agency
                </span>
              </div>

              <p className="text-[var(--text-muted)] text-xs sm:text-sm leading-relaxed mb-6">
                We empower forward-thinking enterprises, funded startups, and e-commerce brands with high-velocity web & mobile applications, scalable cloud architecture, and data-driven growth optimization.
              </p>

              {/* Direct Info List */}
              <ul className="space-y-3 pt-2 text-xs border-t border-black/5 dark:border-white/5">
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-black/[0.04] dark:bg-white/[0.06] border border-black/10 dark:border-white/10 text-[#E51A4B] flex items-center justify-center shrink-0 shadow-sm">
                    <PhoneCall className="w-4 h-4" />
                  </div>
                  <a href="tel:+919876543210" className="font-semibold text-[var(--text-main)] hover:text-[#E51A4B] transition-colors">
                    +91 (022) 8920-4100 • 24/7 Global Dispatch
                  </a>
                </li>
                
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-black/[0.04] dark:bg-white/[0.06] border border-black/10 dark:border-white/10 text-[#E51A4B] flex items-center justify-center shrink-0 shadow-sm">
                    <Mail className="w-4 h-4" />
                  </div>
                  <a href="mailto:info@tcongsinfotech.com" className="font-semibold text-[var(--text-main)] hover:text-[#E51A4B] transition-colors">
                    info@tcongsinfotech.com
                  </a>
                </li>

                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-black/[0.04] dark:bg-white/[0.06] border border-black/10 dark:border-white/10 text-emerald-500 flex items-center justify-center shrink-0 shadow-sm">
                    <Clock className="w-4 h-4" />
                  </div>
                  <span className="text-[var(--text-muted)]">
                    Engineering Shifts: <strong className="text-[var(--text-main)]">Mon – Sat (24-Hour Coverage)</strong>
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-black/[0.04] dark:bg-white/[0.06] border border-black/10 dark:border-white/10 text-[#E51A4B] flex items-center justify-center shrink-0 shadow-sm">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="text-[var(--text-muted)]">
                    Mumbai HQ, Maharashtra, India • Serving USA, UAE & Global
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Col 2-5: 4 Navigation Columns (Span 2 each = 8 cols) */}
          {Object.entries(FOOTER_COLUMNS).map(([title, links]) => (
            <div key={title} className="lg:col-span-2">
              <h4 className="font-bold text-[var(--text-main)] text-xs uppercase tracking-wider mb-4 pb-1 border-b border-black/5 dark:border-white/5">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="text-[var(--text-muted)] hover:text-[#E51A4B] hover:translate-x-1 transition-all inline-block text-xs"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </div>

      {/* 2. STATS & REASSURANCE BAR (Inspired by Joy footer-stats-bar) */}
      <div className="border-y border-black/10 dark:border-white/[0.08] bg-black/[0.02] dark:bg-[#0A0A0E] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
            
            <div className="flex items-center gap-3 p-3 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5">
              <div className="w-10 h-10 rounded-xl bg-[#E51A4B]/10 text-[#E51A4B] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-left">
                <strong className="block text-xs font-bold text-[var(--text-main)]">Trusted by 100+ Brands</strong>
                <span className="text-[11px] text-[var(--text-muted)]">Across 4 Continents</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                <Trophy className="w-5 h-5" />
              </div>
              <div className="text-left">
                <strong className="block text-xs font-bold text-[var(--text-main)]">99.99% Uptime SLA</strong>
                <span className="text-[11px] text-[var(--text-muted)]">Edge Cloud Architecture</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5">
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-500 flex items-center justify-center shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div className="text-left">
                <strong className="block text-xs font-bold text-[var(--text-main)]">50+ Senior Engineers</strong>
                <span className="text-[11px] text-[var(--text-muted)]">Full-Stack Specialists</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5">
              <div className="w-10 h-10 rounded-xl bg-[#E2EC07]/15 text-[#E51A4B] dark:text-[#E2EC07] flex items-center justify-center shrink-0">
                <Cpu className="w-5 h-5" />
              </div>
              <div className="text-left">
                <strong className="block text-xs font-bold text-[var(--text-main)]">High-Velocity Sprints</strong>
                <span className="text-[11px] text-[var(--text-muted)]">Bi-Weekly Live Demos</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 col-span-2 md:col-span-1">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center shrink-0">
                <Lock className="w-5 h-5" />
              </div>
              <div className="text-left">
                <strong className="block text-xs font-bold text-[var(--text-main)]">100% IP Ownership</strong>
                <span className="text-[11px] text-[var(--text-muted)]">Full Source Code Handover</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 3. HIGH-CONVERSION CONSULTATION CTA BANNER (Inspired by Joy footer-cta-section) */}
      <div className="py-8 bg-black/[0.01] dark:bg-[#07070A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-black/10 dark:border-white/10 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
            
            {/* Dual Query Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-auto">
              
              <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/5 dark:border-white/5 text-left">
                <div className="w-10 h-10 rounded-xl bg-[#E51A4B]/10 text-[#E51A4B] flex items-center justify-center shrink-0">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-xs sm:text-sm font-bold text-[var(--text-main)]">Have Technical Questions?</h5>
                  <p className="text-[11px] text-[var(--text-muted)]">Speak directly with our engineering lead today.</p>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/5 dark:border-white/5 text-left">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-xs sm:text-sm font-bold text-[var(--text-main)]">Need a Custom Architecture Proposal?</h5>
                  <p className="text-[11px] text-[var(--text-muted)]">Get a scope proposal within 24 hours.</p>
                </div>
              </div>

            </div>

            {/* CTA Button */}
            <div className="w-full lg:w-auto shrink-0">
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#E51A4B] to-[#D01540] text-white font-bold text-xs sm:text-sm shadow-xl shadow-[#E51A4B]/30 hover:shadow-[#E51A4B]/50 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <span>Book a Free Architecture Consultation 🚀</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* 4. BOTTOM COPYRIGHT, SECURITY & SOCIAL BAR (Inspired by Joy footer-bottom-two) */}
      <div className="border-t border-black/10 dark:border-white/[0.08] py-6 bg-white dark:bg-[#050507]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            
            {/* Security Badge */}
            <div className="flex items-center gap-2.5 text-xs text-[var(--text-main)]">
              <Lock className="w-4 h-4 text-[#E51A4B]" />
              <div className="text-[11px]">
                <strong>SSL 256-Bit Encrypted &amp; OWASP Compliant</strong>
                <span className="block text-[10px] text-[var(--text-muted)]">Strict NDAs &amp; Confidentiality Retained</span>
              </div>
            </div>

            {/* Copyright & Maker Note */}
            <div className="text-[11px] text-[var(--text-muted)]">
              <p>
                &copy; {new Date().getFullYear()} Tcongs Infotech. All Rights Reserved. Mumbai Office: Serving clients worldwide across USA, Canada, UAE &amp; India.
              </p>
              <p className="mt-0.5">
                Engineered with <span className="text-[#E51A4B]">&#9829;</span> by <a href="https://www.thewebvale.com" target="_blank" rel="noopener noreferrer" className="font-bold text-[var(--text-main)] hover:text-[#E51A4B]">Thewebvale</a>
              </p>
            </div>

            {/* Social Icons & Status */}
            <div className="flex items-center gap-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-black/[0.04] dark:bg-white/[0.06] hover:bg-[#E51A4B] hover:text-white flex items-center justify-center text-[var(--text-muted)] transition-all font-bold text-xs"
                aria-label="LinkedIn"
              >
                in
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-black/[0.04] dark:bg-white/[0.06] hover:bg-[#E51A4B] hover:text-white flex items-center justify-center text-[var(--text-muted)] transition-all font-bold text-xs"
                aria-label="Twitter"
              >
                𝕏
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-black/[0.04] dark:bg-white/[0.06] hover:bg-[#E51A4B] hover:text-white flex items-center justify-center text-[var(--text-muted)] transition-all font-bold text-xs"
                aria-label="GitHub"
              >
                gh
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-black/[0.04] dark:bg-white/[0.06] hover:bg-[#E51A4B] hover:text-white flex items-center justify-center text-[var(--text-muted)] transition-all font-bold text-xs"
                aria-label="Instagram"
              >
                ig
              </a>
            </div>

          </div>
        </div>
      </div>

    </footer>
  );
};
