import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  TrendingUp, 
  Quote, 
  Layers, 
  ExternalLink,
  Sparkles,
  Trophy
} from 'lucide-react';
import { CASE_STUDIES_DETAILED, SERVICES_DETAILED } from '../data/content';
import { ScrollReveal } from '../components/ScrollReveal';

export const CaseStudyDetailPage = ({ onOpenConsultation }) => {
  const { caseSlug } = useParams();
  const navigate = useNavigate();

  const caseStudy = CASE_STUDIES_DETAILED[caseSlug] || CASE_STUDIES_DETAILED['payflow-fintech'];

  if (!caseStudy) {
    return (
      <div className="pt-32 pb-20 text-center min-h-screen">
        <h2 className="text-2xl font-bold">Case Study Not Found</h2>
        <Link to="/case-studies" className="text-[#E51A4B] mt-4 inline-block">Back to Case Studies</Link>
      </div>
    );
  }

  return (
    <div className="pt-24 sm:pt-28 pb-16 min-h-screen bg-[var(--bg-page)] text-[var(--text-main)] transition-colors duration-400 font-sans text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs text-[var(--text-muted)] mb-8 flex-wrap">
          <Link to="/" className="hover:text-[#E51A4B] transition-colors">Home</Link>
          <span>/</span>
          <Link to="/case-studies" className="hover:text-[#E51A4B] transition-colors">Case Studies</Link>
          <span>/</span>
          <span className="text-[var(--text-main)] font-semibold">{caseStudy.client}</span>
        </div>

        {/* Hero Section */}
        <ScrollReveal animation="fade-up">
          <div className="max-w-4xl mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E51A4B]/10 border border-[#E51A4B]/20 text-[#E51A4B] dark:text-[#E2EC07] text-xs font-semibold uppercase tracking-wider mb-4">
              <Trophy className="w-3.5 h-3.5" />
              <span>{caseStudy.industry}</span>
            </div>

            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[var(--text-main)] leading-[1.1]">
              {caseStudy.title}
            </h1>
            
            <p className="text-lg sm:text-xl font-bold text-[#E51A4B] dark:text-[#E2EC07] mt-3">
              {caseStudy.headline}
            </p>

            <p className="text-sm sm:text-base md:text-lg text-[var(--text-muted)] mt-4 leading-relaxed max-w-3xl">
              {caseStudy.summary}
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-8">
              <button
                onClick={() => onOpenConsultation({ project: `Similar to ${caseStudy.title}`, budget: '$10,000 - $25,000' })}
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#E51A4B] to-[#D01540] text-white text-xs sm:text-sm font-bold shadow-xl shadow-[#E51A4B]/30 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
              >
                <span>Build Similar Architecture 🚀</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-xs text-[var(--text-muted)] font-mono">
                Sprint Duration: <strong>{caseStudy.duration}</strong>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 4 Impact Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-20">
          {caseStudy.metrics.map((m, idx) => (
            <div key={idx} className="glass-panel p-6 rounded-3xl border border-black/10 dark:border-white/10 text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#E51A4B] dark:text-[#E2EC07] font-mono tracking-tight">
                {m.value}
              </div>
              <div className="text-xs font-semibold text-[var(--text-main)] mt-1">
                {m.label}
              </div>
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mt-2 inline-block border border-emerald-500/20">
                {m.change}
              </span>
            </div>
          ))}
        </div>

        {/* The Challenge & The Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-20 items-start">
          
          {/* Challenge */}
          <div className="lg:col-span-6">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-red-500/20 bg-red-500/[0.02]">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-red-500">
                The Bottleneck Challenge
              </span>
              <h3 className="text-xl font-bold text-[var(--text-main)] mt-2 mb-4">
                What Was Failing Before Tcongs Stepped In
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                {caseStudy.challenge}
              </p>
            </div>
          </div>

          {/* Solution */}
          <div className="lg:col-span-6">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-emerald-500/30 bg-emerald-500/[0.02]">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-500 dark:text-emerald-400">
                Tcongs Engineering Solution
              </span>
              <h3 className="text-xl font-bold text-[var(--text-main)] mt-2 mb-4">
                How We Re-Architected the System
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                {caseStudy.solution}
              </p>
            </div>
          </div>

        </div>

        {/* Tech Stack & Client Quote */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-20 items-center">
          
          {/* Tech Stack */}
          <div className="lg:col-span-5">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-black/10 dark:border-white/10">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E51A4B] dark:text-[#E2EC07]">
                Production Technology Stack
              </span>
              <h4 className="text-lg font-bold text-[var(--text-main)] mt-1 mb-4">
                Technologies Deployed
              </h4>

              <div className="flex flex-wrap gap-2">
                {caseStudy.techUsed.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-xl bg-black/[0.04] dark:bg-white/[0.06] border border-black/10 dark:border-white/10 text-xs font-bold text-[var(--text-main)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Testimonial Quote */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-[#E51A4B]/20 relative bg-[#E51A4B]/[0.02]">
              <Quote className="w-8 h-8 text-[#E51A4B] opacity-30 mb-2" />
              <p className="text-sm sm:text-base text-[var(--text-main)] font-medium italic leading-relaxed">
                "{caseStudy.quote.text}"
              </p>
              
              <div className="flex items-center gap-3 mt-6 pt-4 border-t border-black/5 dark:border-white/5">
                <img
                  src={caseStudy.quote.avatar}
                  alt={caseStudy.quote.author}
                  className="w-12 h-12 rounded-full object-cover border border-black/10 dark:border-white/10"
                />
                <div>
                  <h5 className="text-sm font-bold text-[var(--text-main)]">
                    {caseStudy.quote.author}
                  </h5>
                  <p className="text-xs text-[var(--text-muted)]">
                    {caseStudy.quote.role}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Related Services Deployed */}
        {caseStudy.relatedServices && caseStudy.relatedServices.length > 0 && (
          <div className="mb-20">
            <div className="mb-6">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E51A4B]">
                Services Utilized
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-main)] mt-1">
                Explore The Disciplines Applied in This Project
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {caseStudy.relatedServices.map((svcSlug) => {
                const svc = SERVICES_DETAILED[svcSlug];
                if (!svc) return null;
                return (
                  <Link
                    key={svc.slug}
                    to={`/services/${svc.slug}`}
                    className="glass-panel p-6 rounded-3xl border border-black/10 dark:border-white/10 hover:border-[#E51A4B]/40 hover:-translate-y-1 transition-all group block"
                  >
                    <div className="text-[10px] font-mono text-[#E51A4B] dark:text-[#E2EC07] font-bold uppercase mb-1">
                      {svc.category}
                    </div>
                    <h4 className="text-base font-bold text-[var(--text-main)] group-hover:text-[#E51A4B] transition-colors">
                      {svc.title}
                    </h4>
                    <p className="text-xs text-[var(--text-muted)] mt-2 line-clamp-2">
                      {svc.description}
                    </p>
                    <div className="flex items-center gap-2 mt-4 pt-3 border-t border-black/5 dark:border-white/5 text-xs font-bold text-[#E51A4B]">
                      <span>View Service Deliverables &amp; Pricing</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-black/10 dark:border-white/10 text-center">
          <h3 className="text-2xl sm:text-3xl font-black text-[var(--text-main)]">
            Ready to Build an Architecture Like This?
          </h3>
          <p className="text-xs sm:text-sm text-[var(--text-muted)] max-w-lg mx-auto mt-2 mb-6">
            Let's discuss how we can engineer similar latency drops and conversion lifts for your organization.
          </p>
          <button
            onClick={() => onOpenConsultation({ project: `Similar to ${caseStudy.title}`, budget: '$10,000 - $25,000' })}
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#E51A4B] to-[#D01540] text-white font-bold text-xs sm:text-sm shadow-xl shadow-[#E51A4B]/30 hover:scale-105 active:scale-95 transition-all"
          >
            <span>Book 30-Min Architecture Discovery Call 🚀</span>
          </button>
        </div>

      </div>
    </div>
  );
};
