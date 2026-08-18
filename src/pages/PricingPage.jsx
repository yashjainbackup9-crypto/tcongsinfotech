import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calculator, 
  ShieldCheck, 
  Zap, 
  Clock, 
  ArrowRight, 
  HelpCircle, 
  CheckCircle2, 
  Flame 
} from 'lucide-react';
import { CostEstimator } from '../components/CostEstimator';
import { ScrollReveal } from '../components/ScrollReveal';

export const PricingPage = ({ onOpenConsultation }) => {
  return (
    <div className="pt-24 sm:pt-28 pb-16 min-h-screen bg-[var(--bg-page)] text-[var(--text-main)] transition-colors duration-400 font-sans text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[var(--text-muted)] mb-8">
          <Link to="/" className="hover:text-[#E51A4B] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[var(--text-main)] font-semibold">Pricing &amp; Sprint Estimator</span>
        </div>

        {/* Header */}
        <ScrollReveal animation="fade-up">
          <div className="max-w-4xl mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E51A4B]/10 border border-[#E51A4B]/20 text-[#E51A4B] dark:text-[#E2EC07] text-xs font-semibold uppercase tracking-wider mb-4">
              <Calculator className="w-3.5 h-3.5" />
              <span>Transparent Multi-Currency Estimator</span>
            </div>
            
            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[var(--text-main)] leading-[1.1]">
              Predictable Fixed-Price Sprints. <br />
              <span className="accent-gradient-text">Zero Billing Surprises.</span>
            </h1>
            
            <p className="text-sm sm:text-base text-[var(--text-muted)] mt-4 leading-relaxed max-w-3xl">
              Use our interactive real-time multi-currency calculator to estimate project scopes, specialized add-ons, and sprint delivery timelines in USD ($), INR (₹), AED (د.إ), EUR (€), or GBP (£).
            </p>
          </div>
        </ScrollReveal>

        {/* Interactive Estimator Tool */}
        <div className="mb-20">
          <CostEstimator onBookEstimate={(estimateData) => onOpenConsultation(estimateData)} />
        </div>

        {/* Pricing Guarantees */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-black/10 dark:border-white/10">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[var(--text-main)]">100% IP &amp; Code Ownership</h3>
            <p className="text-xs text-[var(--text-muted)] mt-2 leading-relaxed">
              You own all source code, Figma design files, infrastructure configs, and database schemas from Day 1. No recurring platform lock-in fees.
            </p>
          </div>

          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-black/10 dark:border-white/10">
            <div className="w-10 h-10 rounded-xl bg-[#E51A4B]/10 text-[#E51A4B] flex items-center justify-center mb-4">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[var(--text-main)]">60-Day Hypercare Warranty</h3>
            <p className="text-xs text-[var(--text-muted)] mt-2 leading-relaxed">
              Every production launch includes 60 days of complimentary bug fixes, telemetry monitoring, and performance tuning by our senior engineering team.
            </p>
          </div>

          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-black/10 dark:border-white/10">
            <div className="w-10 h-10 rounded-xl bg-[#E2EC07]/15 text-[#E51A4B] dark:text-[#E2EC07] flex items-center justify-center mb-4">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[var(--text-main)]">Milestone-Based Releases</h3>
            <p className="text-xs text-[var(--text-muted)] mt-2 leading-relaxed">
              Payments are tied strictly to demonstrable sprint milestones (Kickoff, Staging Demo, Production Launch). You only pay as tangible value is shipped.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};
