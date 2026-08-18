import React from 'react';
import { ArrowUpRight, TrendingUp, Sparkles, Star, Quote } from 'lucide-react';
import { CASE_STUDIES, TESTIMONIALS } from '../data/content';
import { ScrollReveal } from './ScrollReveal';

export const CaseStudies = ({ onOpenConsultation }) => {
  return (
    <section id="case-studies" className="py-16 sm:py-24 border-t border-black/5 dark:border-white/[0.06] bg-black/[0.01] dark:bg-[#0C0C10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="text-left max-w-2xl mb-10 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E51A4B]/10 dark:bg-[#E2EC07]/10 border border-[#E51A4B]/20 dark:border-[#E2EC07]/20 text-[#E51A4B] dark:text-[#E2EC07] text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-3 sm:mb-4">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Proven Track Record</span>
            </div>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-main)] tracking-tight">
              Real Metrics, <span className="accent-gradient-text">Real Growth.</span>
            </h2>
            <p className="text-[var(--text-muted)] text-xs sm:text-sm md:text-base mt-3 sm:mt-4 leading-relaxed">
              Explore how we partnered with global brands to engineer scalable digital systems, accelerate marketplace revenues, and achieve measurable ROI.
            </p>
          </div>
        </ScrollReveal>

        {/* Case Studies Grid with Staggered Scroll Animation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-14 sm:mb-20">
          {CASE_STUDIES.map((study, idx) => (
            <ScrollReveal
              key={idx}
              animation="fade-up"
              delay={idx * 120}
              duration={650}
            >
              <div className="glass-panel glass-panel-hover p-6 sm:p-8 rounded-2xl sm:rounded-3xl text-left flex flex-col justify-between border border-black/5 dark:border-white/[0.08] group h-full">
                <div>
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <span className="text-[10px] sm:text-[11px] font-bold tracking-widest uppercase text-[#E51A4B] bg-[#E51A4B]/10 px-3 py-1 rounded-full border border-[#E51A4B]/20">
                      {study.category}
                    </span>
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--text-subtle)] group-hover:text-[#E51A4B] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>

                  <div className="text-2xl sm:text-3xl font-extrabold text-[var(--text-main)] mb-1">
                    {study.metric}
                  </div>
                  <div className="text-xs font-mono text-[#E51A4B] dark:text-[#E2EC07] font-semibold mb-3 sm:mb-4">
                    {study.subMetric}
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[var(--text-main)] mb-1.5 sm:mb-2 group-hover:text-[#E51A4B] transition-colors">
                    {study.title}
                  </h3>
                  <div className="text-[11px] sm:text-xs text-[var(--text-muted)] font-medium mb-3 sm:mb-4">
                    Client: {study.client}
                  </div>

                  <p className="text-[var(--text-muted)] text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6">
                    {study.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3.5 sm:pt-4 border-t border-black/10 dark:border-white/10">
                  {study.tags.map((t, i) => (
                    <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/[0.03] dark:bg-white/[0.04] text-[var(--text-muted)] border border-black/5 dark:border-white/5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Client Testimonials Carousel / Grid */}
        <div className="pt-10 sm:pt-12 border-t border-black/10 dark:border-white/[0.08]">
          <ScrollReveal animation="fade-up" duration={700}>
            <div className="text-center max-w-xl mx-auto mb-8 sm:mb-12">
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-main)]">What Founders & Product Leaders Say</h3>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-1.5 sm:mt-2">Trusted across 4 continents by engineering and commerce executives</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {TESTIMONIALS.map((t, i) => (
              <ScrollReveal
                key={i}
                animation="fade-up"
                delay={i * 100}
                duration={600}
              >
                <div className="glass-panel p-6 sm:p-8 rounded-2xl sm:rounded-3xl text-left border border-black/5 dark:border-white/[0.06] flex flex-col justify-between hover:scale-[1.01] transition-transform h-full">
                  <div>
                    <div className="flex items-center gap-1 text-amber-400 mb-3 sm:mb-4">
                      {[...Array(5)].map((_, starIdx) => (
                        <Star key={starIdx} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-[var(--text-main)] text-xs sm:text-sm italic leading-relaxed mb-5 sm:mb-6">
                      "{t.quote}"
                    </p>
                  </div>

                  <div className="pt-3.5 sm:pt-4 border-t border-black/10 dark:border-white/10 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-[var(--text-main)] text-xs sm:text-sm">{t.author}</div>
                      <div className="text-[11px] sm:text-xs text-[var(--text-muted)]">{t.role}</div>
                    </div>
                    <div className="text-[10px] sm:text-xs font-semibold text-[var(--text-muted)] bg-black/[0.03] dark:bg-white/[0.05] px-2 sm:px-2.5 py-1 rounded-full">
                      {t.location}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
