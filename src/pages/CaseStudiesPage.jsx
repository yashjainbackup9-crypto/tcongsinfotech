import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Trophy, 
  ArrowRight, 
  TrendingUp, 
  CheckCircle2, 
  Clock, 
  ExternalLink,
  Flame,
  Search,
  Sparkles
} from 'lucide-react';
import { CASE_STUDIES_DETAILED } from '../data/content';
import { ScrollReveal } from '../components/ScrollReveal';

export const CaseStudiesPage = ({ onOpenConsultation }) => {
  const [filter, setFilter] = useState('ALL');

  const industries = ['ALL', 'Fintech & Global Payments', 'HealthTech & Telehealth', 'E-Commerce & Retail', 'Enterprise AI & SaaS'];

  const caseStudiesList = Object.values(CASE_STUDIES_DETAILED);

  const filteredCaseStudies = filter === 'ALL'
    ? caseStudiesList
    : caseStudiesList.filter(cs => cs.industry === filter);

  return (
    <div className="pt-24 sm:pt-28 pb-16 min-h-screen bg-[var(--bg-page)] text-[var(--text-main)] transition-colors duration-400 font-sans text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[var(--text-muted)] mb-8">
          <Link to="/" className="hover:text-[#E51A4B] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[var(--text-main)] font-semibold">Case Studies &amp; Transformations</span>
        </div>

        {/* Header */}
        <ScrollReveal animation="fade-up">
          <div className="max-w-4xl mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E51A4B]/10 border border-[#E51A4B]/20 text-[#E51A4B] dark:text-[#E2EC07] text-xs font-semibold uppercase tracking-wider mb-4">
              <Trophy className="w-3.5 h-3.5" />
              <span>Proven Client Transformations</span>
            </div>
            
            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[var(--text-main)] leading-[1.1]">
              Real Revenue Numbers. <br />
              <span className="accent-gradient-text">Zero Theoretical Fluff.</span>
            </h1>
            
            <p className="text-sm sm:text-base text-[var(--text-muted)] mt-4 leading-relaxed max-w-3xl">
              Explore how we transformed payment gateways, telemedicine networks, e-commerce storefronts, and AI automation engines for funded startups and global enterprises.
            </p>
          </div>
        </ScrollReveal>

        {/* Industry Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none border-b border-black/10 dark:border-white/10">
          {industries.map((ind) => (
            <button
              key={ind}
              onClick={() => setFilter(ind)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                filter === ind
                  ? 'bg-[#E51A4B] text-white shadow-md shadow-[#E51A4B]/30'
                  : 'bg-black/[0.04] dark:bg-white/[0.05] text-[var(--text-muted)] hover:text-[var(--text-main)]'
              }`}
            >
              {ind}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {filteredCaseStudies.map((cs) => (
            <div
              key={cs.id}
              className="glass-panel p-6 sm:p-8 rounded-3xl border border-black/10 dark:border-white/10 flex flex-col justify-between hover:border-[#E51A4B]/40 hover:-translate-y-1 transition-all duration-300 group shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#E51A4B]/10 text-[#E51A4B] dark:text-[#E2EC07] border border-[#E51A4B]/20">
                    {cs.industry}
                  </span>
                  <span className="text-xs font-mono text-[var(--text-muted)]">{cs.duration}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-main)] group-hover:text-[#E51A4B] transition-colors leading-snug">
                  {cs.title}
                </h3>

                <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-2 leading-relaxed">
                  {cs.summary}
                </p>

                {/* Metrics Breakdown Grid */}
                <div className="grid grid-cols-2 gap-3 mt-6 pt-4 border-t border-black/5 dark:border-white/5">
                  {cs.metrics.slice(0, 2).map((m, idx) => (
                    <div key={idx} className="p-3 rounded-2xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/5 dark:border-white/5">
                      <div className="text-lg sm:text-xl font-black font-mono text-[#E51A4B] dark:text-[#E2EC07]">
                        {m.value}
                      </div>
                      <div className="text-[11px] text-[var(--text-muted)] font-medium mt-0.5">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Technologies Deployed */}
                <div className="flex flex-wrap gap-1.5 mt-5">
                  {cs.techUsed.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-black/[0.03] dark:bg-white/[0.04] text-[var(--text-muted)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-6 mt-6 border-t border-black/10 dark:border-white/10 flex items-center justify-between">
                <Link
                  to={`/case-studies/${cs.slug}`}
                  className="text-xs font-bold text-[#E51A4B] hover:text-[#D01540] flex items-center gap-1.5 group-hover:translate-x-1 transition-all"
                >
                  <span>Read Full Technical Architecture</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <span className="text-[10px] font-mono text-[var(--text-muted)]">
                  Client: {cs.client}
                </span>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-black/10 dark:border-white/10 text-center">
          <h3 className="text-2xl sm:text-3xl font-black text-[var(--text-main)]">
            Want Your Case Study Featured Next?
          </h3>
          <p className="text-xs sm:text-sm text-[var(--text-muted)] max-w-xl mx-auto mt-2 mb-6">
            Let's build a software engine that drives measurable conversions, lowers latency, and scales with your business goals.
          </p>
          <button
            onClick={() => onOpenConsultation()}
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#E51A4B] to-[#D01540] text-white font-bold text-xs sm:text-sm shadow-xl shadow-[#E51A4B]/30 hover:scale-105 active:scale-95 transition-all"
          >
            <span>Start Your Project Sprint 🚀</span>
          </button>
        </div>

      </div>
    </div>
  );
};
