import React, { useState } from 'react';
import { Gauge, Zap, CheckCircle2, XCircle, ShieldCheck, Flame, ArrowRight, Sparkles } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const PerformanceBenchmark = ({ onOpenConsultation }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isComparing, setIsComparing] = useState(false);

  const metrics = [
    {
      metric: "Google Lighthouse Speed Score",
      legacy: "42 / 100 (Red Flags)",
      tcongs: "99 / 100 (Near Instant)",
      impact: "+140% Conversion Lift"
    },
    {
      metric: "First Contentful Paint (FCP)",
      legacy: "3.8 Seconds (High Bounce)",
      tcongs: "0.4 Seconds (Instantaneous)",
      impact: "70% Lower Bounce Rate"
    },
    {
      metric: "Code Architecture",
      legacy: "Bloated Monolithic CMS",
      tcongs: "Modern Vite/React + Clean APIs",
      impact: "Zero Technical Debt"
    },
    {
      metric: "SEO & Search Discovery",
      legacy: "Basic Keyword Meta Tags",
      tcongs: "Generative Engine Optimization (GEO)",
      impact: "Ranked in AI Answers"
    },
    {
      metric: "Global CDN & Uptime",
      legacy: "Single Shared Server",
      tcongs: "Edge Cloud Microservices",
      impact: "99.99% High Availability"
    }
  ];

  return (
    <section id="benchmark" className="py-16 sm:py-24 border-t border-black/5 dark:border-white/[0.06] bg-black/[0.02] dark:bg-[#07070A] relative overflow-hidden text-left">
      
      {/* Ambient lighting */}
      <div className="ambient-glow w-[380px] sm:w-[500px] h-[380px] sm:h-[500px] bg-[#E2EC07]/10 -right-20 top-1/4 animate-pulse-glow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E2EC07]/10 border border-[#E2EC07]/20 text-[#E51A4B] dark:text-[#E2EC07] text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-3 sm:mb-4">
              <Gauge className="w-3.5 h-3.5" />
              <span>Engineering Benchmark</span>
            </div>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-main)] tracking-tight">
              Legacy Agencies vs. <span className="accent-gradient-text">Tcongs Engineering.</span>
            </h2>
            <p className="text-[var(--text-muted)] text-xs sm:text-sm md:text-base mt-3 sm:mt-4 leading-relaxed">
              Compare our high-velocity software engineering and performance benchmarks against conventional agency standards.
            </p>
          </div>
        </ScrollReveal>

        {/* Visual Benchmark Scoreboard Card */}
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            
            {/* Legacy Agency Standard */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-red-500/20 bg-red-500/[0.02] text-left relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold font-mono uppercase tracking-widest text-red-500">
                  Conventional Agency
                </span>
                <div className="w-8 h-8 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center">
                  <XCircle className="w-5 h-5" />
                </div>
              </div>

              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl sm:text-5xl font-black text-red-500">42</span>
                <span className="text-xs text-[var(--text-muted)] font-mono">/ 100 Avg Lighthouse</span>
              </div>

              <ul className="space-y-2.5 text-xs text-[var(--text-muted)]">
                <li className="flex items-center gap-2">
                  <XCircle className="w-3.5 h-3.5 text-red-500 shrink-0" />
                  <span>3.5s+ First Contentful Paint delay</span>
                </li>
                <li className="flex items-center gap-2">
                  <XCircle className="w-3.5 h-3.5 text-red-500 shrink-0" />
                  <span>Bloated theme files & unminified scripts</span>
                </li>
                <li className="flex items-center gap-2">
                  <XCircle className="w-3.5 h-3.5 text-red-500 shrink-0" />
                  <span>Vulnerable to traffic surges & outages</span>
                </li>
              </ul>
            </div>

            {/* Tcongs Infotech Standard */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-emerald-500/40 bg-emerald-500/[0.03] text-left relative overflow-hidden shadow-xl shadow-emerald-500/5 group">
              <div className="absolute top-0 right-0 px-3 py-1 bg-gradient-to-r from-[#E51A4B] to-[#E2EC07] text-black font-extrabold text-[10px] uppercase tracking-wider rounded-bl-xl">
                Top 1% Engineering
              </div>

              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold font-mono uppercase tracking-widest text-emerald-500 dark:text-emerald-400">
                  Tcongs High-Velocity
                </span>
                <div className="w-8 h-8 rounded-full bg-emerald-500/15 text-emerald-500 dark:text-emerald-400 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
              </div>

              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl sm:text-5xl font-black text-emerald-500 dark:text-emerald-400">99</span>
                <span className="text-xs text-[var(--text-muted)] font-mono">/ 100 Certified Score</span>
              </div>

              <ul className="space-y-2.5 text-xs text-[var(--text-main)]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400 shrink-0" />
                  <span>0.4s Instant First Contentful Paint</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400 shrink-0" />
                  <span>Clean React 19 + Tailwind v4 Modular Code</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400 shrink-0" />
                  <span>Global Edge CDN with 99.99% Uptime SLA</span>
                </li>
              </ul>
            </div>

          </div>
        </ScrollReveal>

        {/* Detailed Metrics Table */}
        <ScrollReveal animation="fade-up" delay={150}>
          <div className="glass-panel rounded-3xl border border-black/10 dark:border-white/10 overflow-hidden shadow-2xl">
            <div className="p-4 sm:p-6 bg-black/[0.03] dark:bg-white/[0.03] border-b border-black/10 dark:border-white/10 flex items-center justify-between">
              <div className="text-xs sm:text-sm font-bold text-[var(--text-main)]">
                Comprehensive Technical Comparison Matrix
              </div>
              <span className="text-[10px] font-mono text-[#E51A4B] dark:text-[#E2EC07] font-semibold uppercase">
                Audited via Lighthouse & GTmetrix
              </span>
            </div>

            <div className="divide-y divide-black/5 dark:divide-white/5">
              {metrics.map((m, idx) => (
                <div key={idx} className="p-4 sm:p-5 grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-center hover:bg-black/[0.01] dark:hover:bg-white/[0.02] transition-colors">
                  <div className="md:col-span-4 font-bold text-xs sm:text-sm text-[var(--text-main)]">
                    {m.metric}
                  </div>
                  
                  <div className="md:col-span-3 text-xs text-red-500/80 line-through">
                    {m.legacy}
                  </div>

                  <div className="md:col-span-3 text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>{m.tcongs}</span>
                  </div>

                  <div className="md:col-span-2 text-right">
                    <span className="text-[10px] font-mono font-bold px-2 py-1 rounded bg-[#E51A4B]/10 text-[#E51A4B] dark:text-[#E2EC07] border border-[#E51A4B]/20 inline-block">
                      {m.impact}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 sm:p-6 bg-black/[0.02] dark:bg-white/[0.02] border-t border-black/10 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-[var(--text-muted)] text-center sm:text-left">
                Want this level of speed and precision for your next digital product?
              </div>
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#E51A4B] hover:bg-[#D01540] text-white text-xs font-bold shadow-md hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <span>Audit My Architecture Free</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
