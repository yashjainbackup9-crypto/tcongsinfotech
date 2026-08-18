import React, { useState } from 'react';
import { Code2, Server, Cloud, Cpu, Terminal, Search, CheckCircle2 } from 'lucide-react';
import { TECH_STACK } from '../data/content';
import { ScrollReveal } from './ScrollReveal';

export const TechMatrix = () => {
  const [selectedCategory, setSelectedCategory] = useState("Frontend & Mobile");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = Object.keys(TECH_STACK);

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Frontend & Mobile": return <Code2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />;
      case "Backend & Database": return <Server className="w-3.5 h-3.5 sm:w-4 sm:h-4" />;
      case "Cloud & DevOps": return <Cloud className="w-3.5 h-3.5 sm:w-4 sm:h-4" />;
      case "E-Commerce & Tools": return <Cpu className="w-3.5 h-3.5 sm:w-4 sm:h-4" />;
      default: return <Terminal className="w-3.5 h-3.5 sm:w-4 sm:h-4" />;
    }
  };

  const currentItems = TECH_STACK[selectedCategory] || [];
  const filteredItems = currentItems.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="tech-stack" className="py-16 sm:py-24 border-t border-black/5 dark:border-white/[0.06] bg-black/[0.01] dark:bg-[#0A0A0D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with ScrollReveal */}
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/[0.04] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 text-[var(--text-muted)] text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-3 sm:mb-4">
              <Terminal className="w-3.5 h-3.5 text-[#E51A4B] dark:text-[#E2EC07]" />
              <span>Modern Engineering Matrix</span>
            </div>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-main)] tracking-tight">
              Engineered with <span className="accent-gradient-text">World-Class Tech.</span>
            </h2>
            <p className="text-[var(--text-muted)] text-xs sm:text-sm md:text-base mt-3 sm:mt-4 leading-relaxed">
              We use production-proven frameworks, hyper-scalable cloud native architectures, and battle-tested databases to ensure zero bottlenecks.
            </p>
          </div>
        </ScrollReveal>

        {/* Category Selector Tabs & Search */}
        <ScrollReveal animation="fade-up" delay={100}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 mb-8 sm:mb-10">
            
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setSearchQuery("");
                  }}
                  className={`flex items-center gap-1.5 sm:gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap shrink-0 ${
                    selectedCategory === cat
                      ? 'bg-[#E51A4B] text-white shadow-lg shadow-[#E51A4B]/20 font-bold scale-105'
                      : 'bg-black/[0.03] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 text-[var(--text-muted)] hover:bg-black/[0.06] dark:hover:bg-white/[0.08] hover:text-[var(--text-main)]'
                  }`}
                >
                  {getCategoryIcon(cat)}
                  <span>{cat}</span>
                </button>
              ))}
            </div>

            {/* Search Box */}
            <div className="relative w-full md:w-64">
              <Search className="w-4 h-4 text-[var(--text-subtle)] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder={`Search ${selectedCategory}...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 sm:py-2.5 rounded-full bg-black/[0.03] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 text-xs text-[var(--text-main)] placeholder-[var(--text-subtle)] focus:outline-none focus:border-[#E51A4B] transition-colors"
              />
            </div>

          </div>
        </ScrollReveal>

        {/* Tech Cards Grid with Staggered Scroll Animation */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {filteredItems.map((tech, idx) => (
            <ScrollReveal
              key={idx}
              animation="fade-up"
              delay={(idx % 8) * 60}
              duration={500}
            >
              <div className="glass-panel glass-panel-hover p-3.5 sm:p-5 rounded-xl sm:rounded-2xl text-left border border-black/5 dark:border-white/[0.06] flex items-center justify-between group h-full">
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
            </ScrollReveal>
          ))}
        </div>

        {/* Stack Assurance Footnote */}
        <ScrollReveal animation="fade-up" delay={200}>
          <div className="mt-8 sm:mt-12 p-4 sm:p-6 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-xs text-[var(--text-muted)]">
            <div className="flex items-center gap-2 sm:gap-3">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 dark:text-emerald-400 shrink-0" />
              <span>All code is strictly version-controlled, statically analyzed, and tested for OWASP security standards.</span>
            </div>
            <span className="font-mono text-[var(--text-main)] font-semibold text-[11px] sm:text-xs shrink-0">Strict Coding Standards</span>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
