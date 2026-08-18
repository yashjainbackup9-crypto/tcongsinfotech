import React, { useState } from 'react';
import { Code2, Server, Cloud, Cpu, Terminal, Search, CheckCircle2, Sparkles, Layers } from 'lucide-react';
import { TECH_STACK } from '../data/content';
import { ScrollReveal } from './ScrollReveal';

export const TechMatrix = () => {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  const categoryLabels = {
    ALL: "ALL",
    FRONTEND: "FRONTEND",
    MOBILE: "MOBILE",
    BACKEND: "BACKEND",
    DEVOPS: "DEVOPS",
    AI_AUTOMATION: "AI_AUTOMATION"
  };

  const categories = Object.keys(TECH_STACK);

  // Flatten tech items for continuous multi-row carousels
  const row1Items = [
    ...(TECH_STACK.FRONTEND || []),
    ...(TECH_STACK.MOBILE || [])
  ];

  const row2Items = [
    ...(TECH_STACK.BACKEND || []),
    ...(TECH_STACK.DEVOPS || []),
    ...(TECH_STACK.AI_AUTOMATION || [])
  ];

  const allItems = TECH_STACK.ALL || [...row1Items, ...row2Items];

  const filteredItems = selectedCategory === "ALL" 
    ? allItems.filter(i => i.name.toLowerCase().includes(searchQuery.toLowerCase()) || (i.category && i.category.toLowerCase().includes(searchQuery.toLowerCase())))
    : (TECH_STACK[selectedCategory] || []).filter(i => i.name.toLowerCase().includes(searchQuery.toLowerCase()) || (i.category && i.category.toLowerCase().includes(searchQuery.toLowerCase())));

  return (
    <section id="tech-stack" className="py-16 sm:py-24 border-t border-black/5 dark:border-white/[0.06] bg-black/[0.01] dark:bg-[#0A0A0D] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with ScrollReveal */}
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/[0.04] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 text-[var(--text-muted)] text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-3 sm:mb-4">
              <Terminal className="w-3.5 h-3.5 text-[#E51A4B] dark:text-[#E2EC07]" />
              <span>Continuous Auto-Scrolling Tech Matrix</span>
            </div>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-main)] tracking-tight">
              Engineered with <span className="accent-gradient-text">World-Class Tech.</span>
            </h2>
            <p className="text-[var(--text-muted)] text-xs sm:text-sm md:text-base mt-3 sm:mt-4 leading-relaxed">
              We leverage modern frameworks, cloud architectures, and battle-tested databases for maximum uptime and infinite scalability.
            </p>
          </div>
        </ScrollReveal>

        {/* Category Selector Tabs & Search */}
        <ScrollReveal animation="fade-up" delay={100}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 mb-8">
            
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setSearchQuery("");
                  }}
                  className={`flex items-center gap-1.5 sm:gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all whitespace-nowrap shrink-0 focus-visible:ring-2 focus-visible:ring-[#E51A4B] focus-visible:outline-none cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#E51A4B] text-white shadow-lg shadow-[#E51A4B]/20 font-bold scale-105'
                      : 'bg-black/[0.03] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 text-[var(--text-muted)] hover:bg-black/[0.06] dark:hover:bg-white/[0.08] hover:text-[var(--text-main)]'
                  }`}
                >
                  <span>{categoryLabels[cat] || cat}</span>
                </button>
              ))}
            </div>

            {/* Search Box */}
            <div className="relative w-full md:w-64">
              <Search className="w-4 h-4 text-[var(--text-subtle)] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search any technology..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 sm:py-2.5 rounded-full bg-black/[0.03] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 text-xs text-[var(--text-main)] placeholder-[var(--text-subtle)] focus:outline-none focus:border-[#E51A4B] transition-colors"
              />
            </div>

          </div>
        </ScrollReveal>

      </div>

      {/* CONTINUOUS AUTO-SCROLLING CAROUSELS (SLOWS DOWN ON HOVER) */}
      {selectedCategory === "ALL" && !searchQuery ? (
        <div className="space-y-4 py-2 relative marquee-group">
          
          {/* Row 1: Auto-scrolling Leftwards */}
          <div className="relative flex overflow-x-hidden group py-1">
            <div className="animate-scroll-left gap-4">
              {[...row1Items, ...row1Items, ...row1Items].map((tech, idx) => (
                <div
                  key={idx}
                  className="glass-panel p-4 sm:p-5 rounded-2xl text-left border border-black/5 dark:border-white/[0.06] flex items-center justify-between gap-4 w-[220px] sm:w-[260px] shrink-0 hover:border-[#E51A4B]/40 hover:-translate-y-1 hover:scale-105 transition-all duration-200 shadow-md cursor-default"
                >
                  <div>
                    <div className="font-bold text-[var(--text-main)] text-sm sm:text-base line-clamp-1">
                      {tech.name}
                    </div>
                    <div className="text-[10px] sm:text-xs text-[var(--text-muted)] mt-0.5">
                      {tech.category}
                    </div>
                  </div>

                  <span className="text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#E51A4B]/10 dark:bg-[#E2EC07]/10 text-[#E51A4B] dark:text-[#E2EC07] border border-[#E51A4B]/20 dark:border-[#E2EC07]/20 font-bold shrink-0">
                    {tech.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Auto-scrolling Rightwards */}
          <div className="relative flex overflow-x-hidden group py-1">
            <div className="animate-scroll-right gap-4">
              {[...row2Items, ...row2Items, ...row2Items].map((tech, idx) => (
                <div
                  key={idx}
                  className="glass-panel p-4 sm:p-5 rounded-2xl text-left border border-black/5 dark:border-white/[0.06] flex items-center justify-between gap-4 w-[220px] sm:w-[260px] shrink-0 hover:border-[#E2EC07]/40 hover:-translate-y-1 hover:scale-105 transition-all duration-200 shadow-md cursor-default"
                >
                  <div>
                    <div className="font-bold text-[var(--text-main)] text-sm sm:text-base line-clamp-1">
                      {tech.name}
                    </div>
                    <div className="text-[10px] sm:text-xs text-[var(--text-muted)] mt-0.5">
                      {tech.category}
                    </div>
                  </div>

                  <span className="text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 font-bold shrink-0">
                    {tech.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      ) : (
        /* Filtered Grid for search / specific category */
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {filteredItems.map((tech, idx) => (
              <div
                key={idx}
                className="glass-panel glass-panel-hover p-4 sm:p-5 rounded-2xl text-left border border-black/5 dark:border-white/[0.06] flex items-center justify-between group cursor-default"
              >
                <div>
                  <div className="font-bold text-[var(--text-main)] text-xs sm:text-base group-hover:text-[#E51A4B] transition-colors line-clamp-1">
                    {tech.name}
                  </div>
                  <div className="text-[10px] sm:text-xs text-[var(--text-muted)] mt-0.5">
                    {tech.category}
                  </div>
                </div>

                <div className="flex flex-col items-end shrink-0 pl-2">
                  <span className="text-[9px] sm:text-[10px] font-mono px-1.5 sm:px-2 py-0.5 rounded-md bg-[#E51A4B]/10 dark:bg-[#E2EC07]/10 text-[#E51A4B] dark:text-[#E2EC07] border border-[#E51A4B]/20 dark:border-[#E2EC07]/20 font-bold">
                    {tech.level}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Stack Assurance Footnote */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <ScrollReveal animation="fade-up" delay={150}>
          <div className="p-4 sm:p-6 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-xs text-[var(--text-muted)]">
            <div className="flex items-center gap-2 sm:gap-3">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 dark:text-emerald-400 shrink-0" />
              <span>All code is strictly version-controlled, statically analyzed, and tested for OWASP security standards.</span>
            </div>
            <span className="font-mono text-[var(--text-main)] font-semibold text-[11px] sm:text-xs shrink-0">Continuous Delivery Ready</span>
          </div>
        </ScrollReveal>
      </div>

    </section>
  );
};
