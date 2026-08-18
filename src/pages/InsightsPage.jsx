import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Terminal, 
  Clock, 
  ArrowRight, 
  Flame, 
  BookOpen, 
  Tag 
} from 'lucide-react';
import { INSIGHTS_DETAILED } from '../data/content';
import { ScrollReveal } from '../components/ScrollReveal';

export const InsightsPage = () => {
  return (
    <div className="pt-24 sm:pt-28 pb-16 min-h-screen bg-[var(--bg-page)] text-[var(--text-main)] transition-colors duration-400 font-sans text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[var(--text-muted)] mb-8">
          <Link to="/" className="hover:text-[#E51A4B] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[var(--text-main)] font-semibold">Engineering Insights</span>
        </div>

        {/* Header */}
        <ScrollReveal animation="fade-up">
          <div className="max-w-4xl mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E51A4B]/10 border border-[#E51A4B]/20 text-[#E51A4B] dark:text-[#E2EC07] text-xs font-semibold uppercase tracking-wider mb-4">
              <Terminal className="w-3.5 h-3.5" />
              <span>Technical Thought Leadership</span>
            </div>
            
            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[var(--text-main)] leading-[1.1]">
              Architectural Deep Dives &amp; <br />
              <span className="accent-gradient-text">Engineering Playbooks.</span>
            </h1>
            
            <p className="text-sm sm:text-base text-[var(--text-muted)] mt-4 leading-relaxed max-w-3xl">
              Real learnings from shipping 180+ web platforms, distributed microservices, and AI automations. No AI-generated fluff; just raw engineering benchmarks.
            </p>
          </div>
        </ScrollReveal>

        {/* Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {INSIGHTS_DETAILED.map((art) => (
            <div
              key={art.slug}
              className="glass-panel p-6 sm:p-8 rounded-3xl border border-black/10 dark:border-white/10 flex flex-col justify-between hover:border-[#E51A4B]/40 hover:-translate-y-1 transition-all duration-300 group shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#E51A4B]/10 text-[#E51A4B] dark:text-[#E2EC07] border border-[#E51A4B]/20">
                    {art.category}
                  </span>
                  <span className="text-xs text-[var(--text-muted)] font-mono flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {art.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[var(--text-main)] group-hover:text-[#E51A4B] transition-colors leading-snug">
                  {art.title}
                </h3>

                <p className="text-xs text-[var(--text-muted)] mt-2 leading-relaxed">
                  {art.excerpt}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {art.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/[0.03] dark:bg-white/[0.04] text-[var(--text-muted)]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-black/10 dark:border-white/10 flex items-center justify-between">
                <div className="text-[11px] text-[var(--text-muted)] font-mono">
                  {art.date}
                </div>

                <Link
                  to={`/insights/${art.slug}`}
                  className="text-xs font-bold text-[#E51A4B] hover:text-[#D01540] flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
