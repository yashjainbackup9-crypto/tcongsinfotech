import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Clock, 
  Flame, 
  HelpCircle, 
  Layers, 
  ExternalLink,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { SERVICES_DETAILED, CASE_STUDIES_DETAILED } from '../data/content';
import { ScrollReveal } from '../components/ScrollReveal';

export const ServiceDetailPage = ({ onOpenConsultation }) => {
  const { serviceSlug } = useParams();
  const navigate = useNavigate();

  const service = SERVICES_DETAILED[serviceSlug] || SERVICES_DETAILED['web-development'];

  if (!service) {
    return (
      <div className="pt-32 pb-20 text-center min-h-screen">
        <h2 className="text-2xl font-bold">Service Not Found</h2>
        <Link to="/services" className="text-[#E51A4B] mt-4 inline-block">Back to Services</Link>
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
          <Link to="/services" className="hover:text-[#E51A4B] transition-colors">Services</Link>
          <span>/</span>
          <span className="text-[var(--text-main)] font-semibold">{service.title}</span>
        </div>

        {/* Hero Section */}
        <ScrollReveal animation="fade-up">
          <div className="max-w-4xl mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E51A4B]/10 border border-[#E51A4B]/20 text-[#E51A4B] dark:text-[#E2EC07] text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{service.badge}</span>
            </div>

            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[var(--text-main)] leading-[1.1]">
              {service.title}
            </h1>
            
            <p className="text-lg sm:text-xl font-bold text-[#E51A4B] dark:text-[#E2EC07] mt-3">
              {service.subtitle}
            </p>

            <p className="text-sm sm:text-base md:text-lg text-[var(--text-muted)] mt-4 leading-relaxed max-w-3xl">
              {service.description}
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <button
                onClick={() => onOpenConsultation({ project: service.title, budget: '$5,000 - $15,000' })}
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#E51A4B] to-[#D01540] text-white text-xs sm:text-sm font-bold shadow-xl shadow-[#E51A4B]/30 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
              >
                <span>Book Free Architecture Call 🚀</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                to="/pricing"
                className="px-6 py-3.5 rounded-full bg-black/[0.04] dark:bg-white/[0.06] border border-black/10 dark:border-white/10 text-[var(--text-main)] text-xs sm:text-sm font-bold hover:border-[#E51A4B]/40 transition-all flex items-center gap-2"
              >
                <span>Calculate Sprint Pricing</span>
              </Link>
            </div>
          </div>
        </ScrollReveal>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-20">
          {service.stats.map((stat, idx) => (
            <div key={idx} className="glass-panel p-6 rounded-3xl border border-black/10 dark:border-white/10 text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#E51A4B] dark:text-[#E2EC07] font-mono tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-[var(--text-muted)] mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* 4-Step Technical Architecture */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E51A4B]">
              Engineering Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-main)] mt-2">
              How We Architect Your Solution
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.architecture.map((arch, idx) => (
              <div key={idx} className="glass-panel p-6 rounded-3xl border border-black/10 dark:border-white/10 relative">
                <span className="text-2xl font-black font-mono text-[#E51A4B] dark:text-[#E2EC07] block mb-2">
                  {arch.step}
                </span>
                <h4 className="text-sm font-bold text-[var(--text-main)] mb-1">
                  {arch.title}
                </h4>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  {arch.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Deliverables Checklist & Tech Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-20 items-start">
          
          {/* Deliverables */}
          <div className="lg:col-span-7">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E51A4B]">
              Production Deliverables
            </span>
            <h3 className="text-2xl font-extrabold text-[var(--text-main)] mt-1 mb-6">
              What You Receive Upon Handover
            </h3>

            <div className="space-y-3">
              {service.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/5 dark:border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[var(--text-main)] font-medium leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Matrix */}
          <div className="lg:col-span-5">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-black/10 dark:border-white/10">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E51A4B] dark:text-[#E2EC07]">
                Battle-Tested Tech Stack
              </span>
              <h4 className="text-lg font-bold text-[var(--text-main)] mt-1 mb-4">
                Core Technologies Deployed
              </h4>

              <div className="flex flex-wrap gap-2">
                {service.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-xl bg-black/[0.04] dark:bg-white/[0.06] border border-black/10 dark:border-white/10 text-xs font-bold text-[var(--text-main)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-black/5 dark:border-white/5 text-xs text-[var(--text-muted)]">
                💡 Every line of code is structured in modern TypeScript with automated CI/CD validation.
              </div>
            </div>
          </div>

        </div>

        {/* Transparent Sprint Pricing Tiers */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E51A4B]">
              Transparent Pricing Packages
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-main)] mt-2">
              Fixed-Price Sprints with Zero Hidden Fees
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.pricingTiers.map((tier, idx) => (
              <div
                key={idx}
                className={`glass-panel p-6 sm:p-8 rounded-3xl border flex flex-col justify-between ${
                  idx === 1 
                    ? 'border-[#E51A4B]/50 bg-[#E51A4B]/[0.02] shadow-xl relative' 
                    : 'border-black/10 dark:border-white/10'
                }`}
              >
                {idx === 1 && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#E51A4B] text-white text-[10px] font-bold uppercase tracking-wider">
                    Most Popular Choice
                  </div>
                )}

                <div>
                  <h4 className="text-lg font-bold text-[var(--text-main)]">{tier.tier}</h4>
                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="text-3xl sm:text-4xl font-black font-mono text-[var(--text-main)]">{tier.usd}</span>
                    <span className="text-xs font-mono text-[var(--text-muted)]">({tier.inr})</span>
                  </div>
                  <div className="text-xs font-semibold text-[#E51A4B] dark:text-[#E2EC07] mt-1 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Estimated Sprint: {tier.timeline}</span>
                  </div>

                  <p className="text-xs text-[var(--text-muted)] mt-4 leading-relaxed pt-4 border-t border-black/5 dark:border-white/5">
                    {tier.scope}
                  </p>
                </div>

                <button
                  onClick={() => onOpenConsultation({ project: `${service.title} - ${tier.tier}`, budget: `${tier.usd} (${tier.inr})` })}
                  className={`w-full py-3 rounded-xl font-bold text-xs mt-6 transition-all ${
                    idx === 1
                      ? 'bg-[#E51A4B] text-white shadow-md shadow-[#E51A4B]/30 hover:scale-105'
                      : 'bg-black/[0.05] dark:bg-white/[0.08] text-[var(--text-main)] hover:bg-[#E51A4B] hover:text-white'
                  }`}
                >
                  Book This Sprint
                </button>

              </div>
            ))}
          </div>
        </div>

        {/* Related Case Studies */}
        {service.relatedCaseStudies && service.relatedCaseStudies.length > 0 && (
          <div className="mb-20">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E51A4B]">
                  Proven Case Studies
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-main)] mt-1">
                  See This Architecture in Action
                </h3>
              </div>
              <Link to="/case-studies" className="text-xs font-bold text-[#E51A4B] hover:underline flex items-center gap-1">
                <span>View All Case Studies</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.relatedCaseStudies.map((csSlug) => {
                const cs = CASE_STUDIES_DETAILED[csSlug];
                if (!cs) return null;
                return (
                  <Link
                    key={cs.slug}
                    to={`/case-studies/${cs.slug}`}
                    className="glass-panel p-6 rounded-3xl border border-black/10 dark:border-white/10 hover:border-[#E51A4B]/40 hover:-translate-y-1 transition-all group block"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono text-[#E51A4B] dark:text-[#E2EC07] font-bold uppercase">
                        {cs.industry}
                      </span>
                      <span className="text-xs text-[var(--text-muted)] font-mono">{cs.duration}</span>
                    </div>
                    <h4 className="text-base font-bold text-[var(--text-main)] group-hover:text-[#E51A4B] transition-colors">
                      {cs.title}
                    </h4>
                    <p className="text-xs text-[var(--text-muted)] mt-2 line-clamp-2">
                      {cs.summary}
                    </p>
                    <div className="flex items-center gap-4 mt-4 pt-4 border-t border-black/5 dark:border-white/5 text-xs font-bold text-[#E51A4B]">
                      <span>Read Full Technical Breakdown</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {/* Service FAQs */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E51A4B]">
              Frequently Asked Questions
            </span>
            <h3 className="text-2xl font-bold text-[var(--text-main)] mt-1">
              Common Questions on {service.title}
            </h3>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {service.faqs.map((faq, idx) => (
              <div key={idx} className="glass-panel p-6 rounded-2xl border border-black/10 dark:border-white/10">
                <h4 className="text-sm font-bold text-[var(--text-main)] flex items-start gap-2.5">
                  <HelpCircle className="w-4 h-4 text-[#E51A4B] shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h4>
                <p className="text-xs text-[var(--text-muted)] mt-2 pl-6.5 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Booking Action Banner */}
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-black/10 dark:border-white/10 text-center">
          <h3 className="text-2xl sm:text-3xl font-black text-[var(--text-main)]">
            Ready to Build Your {service.title}?
          </h3>
          <p className="text-xs sm:text-sm text-[var(--text-muted)] max-w-lg mx-auto mt-2 mb-6">
            Get a tailored architecture roadmap and sprint proposal in your inbox within 24 hours.
          </p>
          <button
            onClick={() => onOpenConsultation({ project: service.title, budget: '$5,000 - $15,000' })}
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#E51A4B] to-[#D01540] text-white font-bold text-xs sm:text-sm shadow-xl shadow-[#E51A4B]/30 hover:scale-105 active:scale-95 transition-all"
          >
            <span>Book 30-Min Architecture Discovery Call 🚀</span>
          </button>
        </div>

      </div>
    </div>
  );
};
