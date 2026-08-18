import React, { useState } from 'react';
import { Calculator, Sparkles, Check, ArrowRight, Shield, Zap, Clock, Globe } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const CostEstimator = ({ onBookEstimate }) => {
  const [projectType, setProjectType] = useState('web-app');
  const [tier, setTier] = useState('growth');
  const [selectedAddons, setSelectedAddons] = useState(['ai-integration', 'geo-seo']);
  const [currency, setCurrency] = useState('USD');

  const currencies = {
    USD: { symbol: '$', rate: 1.0, label: 'USD ($)', flag: '🇺🇸' },
    INR: { symbol: '₹', rate: 84.0, label: 'INR (₹)', flag: '🇮🇳' },
    AED: { symbol: 'AED ', rate: 3.67, label: 'AED (د.إ)', flag: '🇦🇪' },
    EUR: { symbol: '€', rate: 0.92, label: 'EUR (€)', flag: '🇪🇺' },
    GBP: { symbol: '£', rate: 0.78, label: 'GBP (£)', flag: '🇬🇧' }
  };

  const currentCurrency = currencies[currency] || currencies.USD;

  const formatPrice = (usdAmount) => {
    const converted = Math.round(usdAmount * currentCurrency.rate);
    return `${currentCurrency.symbol}${converted.toLocaleString()}`;
  };

  const projectTypes = [
    { id: 'web-app', label: 'Custom Web App', base: 2500, time: 3 },
    { id: 'mobile-app', label: 'Mobile App (iOS & Android)', base: 3500, time: 4 },
    { id: 'saas', label: 'Enterprise SaaS Platform', base: 5000, time: 6 },
    { id: 'ecommerce', label: 'Shopify Plus / Marketplace', base: 2200, time: 3 },
    { id: 'uiux', label: 'Figma Design System', base: 1500, time: 2 },
  ];

  const tiers = [
    { id: 'startup', label: 'Startup MVP', multiplier: 1.0, weeksBonus: 0, desc: 'Core features for market validation' },
    { id: 'growth', label: 'Growth Scale', multiplier: 1.6, weeksBonus: 2, desc: 'Full custom architecture & scale' },
    { id: 'enterprise', label: 'Enterprise', multiplier: 2.5, weeksBonus: 4, desc: 'High concurrency, microservices & SLA' }
  ];

  const addons = [
    { id: 'ai-integration', label: 'AI & Workflow Automation', price: 800 },
    { id: 'geo-seo', label: 'Generative Engine Optimization (GEO)', price: 600 },
    { id: 'multi-marketplace', label: 'Amazon / Flipkart Auto-Sync', price: 900 },
    { id: 'sla-support', label: '24/7 Dedicated SLA Support', price: 500 },
  ];

  const toggleAddon = (id) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter(a => a !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  // Calculation
  const currentProject = projectTypes.find(p => p.id === projectType) || projectTypes[0];
  const currentTier = tiers.find(t => t.id === tier) || tiers[1];
  
  const addonsTotal = selectedAddons.reduce((acc, currId) => {
    const item = addons.find(a => a.id === currId);
    return acc + (item ? item.price : 0);
  }, 0);

  const baseCalculated = (currentProject.base * currentTier.multiplier) + addonsTotal;
  const estimatedMin = Math.round(baseCalculated * 0.9);
  const estimatedMax = Math.round(baseCalculated * 1.15);
  const estimatedWeeks = currentProject.time + currentTier.weeksBonus;

  return (
    <section id="estimator" className="py-16 sm:py-24 border-t border-black/5 dark:border-white/[0.06] bg-black/[0.01] dark:bg-[#0A0A0E] relative overflow-hidden">
      
      {/* Glow */}
      <div className="ambient-glow w-[350px] sm:w-[450px] h-[350px] sm:h-[450px] bg-[#E51A4B]/10 left-1/2 -translate-x-1/2 top-10 animate-pulse-glow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E51A4B]/10 border border-[#E51A4B]/20 text-[#E51A4B] text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-3 sm:mb-4">
              <Calculator className="w-3.5 h-3.5" />
              <span>Interactive Scope & Currency Calculator</span>
            </div>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-main)] tracking-tight">
              Estimate Project <span className="primary-gradient-text">Budget & Timeline.</span>
            </h2>
            <p className="text-[var(--text-muted)] text-xs sm:text-sm md:text-base mt-3 sm:mt-4 leading-relaxed">
              Get instant clarity on estimated investment and delivery sprints based on your project parameters with multi-currency conversion.
            </p>

            {/* Multi-Currency Selector Tabs */}
            <div className="flex items-center justify-center gap-1.5 mt-6 flex-wrap">
              {Object.entries(currencies).map(([code, cur]) => (
                <button
                  key={code}
                  onClick={() => setCurrency(code)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#E51A4B] focus-visible:outline-none ${
                    currency === code
                      ? 'bg-[#E51A4B] text-white shadow-md font-bold scale-105'
                      : 'bg-black/[0.04] dark:bg-white/[0.05] border border-black/10 dark:border-white/10 text-[var(--text-muted)] hover:text-[var(--text-main)]'
                  }`}
                >
                  <span>{cur.flag}</span>
                  <span>{code}</span>
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Calculator Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* Left / Center: Controls */}
          <div className="lg:col-span-7 flex flex-col gap-6 sm:gap-8 text-left glass-panel p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-black/10 dark:border-white/10 shadow-xl">
            
            {/* Step 1: Project Type */}
            <ScrollReveal animation="fade-up" delay={50}>
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[var(--text-main)] mb-2.5 sm:mb-3 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#E51A4B] text-white flex items-center justify-center text-[11px] font-bold shrink-0">1</span>
                  Select Project Type
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {projectTypes.map((pt) => (
                    <button
                      key={pt.id}
                      onClick={() => setProjectType(pt.id)}
                      className={`p-3 sm:p-3.5 rounded-xl text-left text-xs font-semibold transition-all duration-200 border focus-visible:ring-2 focus-visible:ring-[#E51A4B] focus-visible:outline-none ${
                        projectType === pt.id
                          ? 'bg-[#E51A4B]/15 border-[#E51A4B] text-[#E51A4B] dark:text-white font-bold scale-[1.01] shadow-sm'
                          : 'bg-black/[0.02] dark:bg-white/[0.03] border-black/5 dark:border-white/5 text-[var(--text-muted)] hover:border-[#E51A4B]/30 hover:bg-black/[0.04] dark:hover:bg-white/[0.05] hover:text-[var(--text-main)]'
                      }`}
                    >
                      {pt.label}
                    </button>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Step 2: Scale Tier */}
            <ScrollReveal animation="fade-up" delay={100}>
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[var(--text-main)] mb-2.5 sm:mb-3 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#E51A4B] text-white flex items-center justify-center text-[11px] font-bold shrink-0">2</span>
                  Scale & Architecture Scope
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {tiers.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setTier(t.id)}
                      className={`p-3 sm:p-4 rounded-xl text-left transition-all duration-200 border flex flex-col justify-between focus-visible:ring-2 focus-visible:ring-[#E51A4B] focus-visible:outline-none ${
                        tier === t.id
                          ? 'bg-[#E51A4B] text-white font-bold border-[#E51A4B] shadow-md scale-[1.01]'
                          : 'bg-black/[0.02] dark:bg-white/[0.03] border-black/5 dark:border-white/5 text-[var(--text-muted)] hover:border-[#E51A4B]/30 hover:bg-black/[0.04] dark:hover:bg-white/[0.05] hover:text-[var(--text-main)]'
                      }`}
                    >
                      <div className="text-xs font-extrabold mb-1">{t.label}</div>
                      <div className={`text-[10px] sm:text-[11px] leading-tight ${tier === t.id ? 'text-white/90' : 'text-[var(--text-muted)]'}`}>
                        {t.desc}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Step 3: Addons */}
            <ScrollReveal animation="fade-up" delay={150}>
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[var(--text-main)] mb-2.5 sm:mb-3 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#E51A4B] text-white flex items-center justify-center text-[11px] font-bold shrink-0">3</span>
                  Growth & Technology Add-Ons
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {addons.map((add) => {
                    const isChecked = selectedAddons.includes(add.id);
                    return (
                      <button
                        type="button"
                        key={add.id}
                        onClick={() => toggleAddon(add.id)}
                        className={`p-3 sm:p-3.5 rounded-xl border flex items-center justify-between cursor-pointer text-xs transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#E51A4B] focus-visible:outline-none ${
                          isChecked
                            ? 'bg-[#E51A4B]/10 dark:bg-[#E2EC07]/10 border-[#E51A4B]/40 dark:border-[#E2EC07]/40 text-[var(--text-main)] font-semibold'
                            : 'bg-black/[0.02] dark:bg-white/[0.02] border-black/5 dark:border-white/5 text-[var(--text-muted)] hover:border-[#E51A4B]/30 hover:bg-black/[0.04] dark:hover:bg-white/[0.05]'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <div className={`w-4 h-4 rounded flex items-center justify-center shrink-0 transition-colors ${
                            isChecked ? 'bg-[#E51A4B] text-white font-bold' : 'border border-black/20 dark:border-white/20'
                          }`}>
                            {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                          <span className="text-[11px] sm:text-xs text-[var(--text-main)]">{add.label}</span>
                        </div>
                        <span className="font-mono text-[#E51A4B] dark:text-[#E2EC07] text-[10px] sm:text-[11px] font-bold shrink-0 pl-1">
                          +{formatPrice(add.price)}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>

          </div>

          {/* Right: Instant Estimate Card */}
          <div className="lg:col-span-5 flex flex-col">
            <ScrollReveal animation="fade-left" duration={700} className="h-full">
              <div className="glass-panel p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border border-[#E51A4B]/40 text-left flex flex-col justify-between h-full relative overflow-hidden shadow-2xl bg-gradient-to-b from-white dark:from-[#161620] to-slate-50 dark:to-[#0E0E14] group">
                
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E51A4B]/20 text-[#E51A4B] text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-4 sm:mb-6">
                    <Sparkles className="w-3 h-3" /> Projected Scope
                  </div>

                  <div className="text-[11px] sm:text-xs text-[var(--text-muted)] font-medium mb-0.5 sm:mb-1">
                    Estimated Investment Window ({currency})
                  </div>
                  <div className="text-3xl xs:text-4xl sm:text-5xl font-black text-[var(--text-main)] tracking-tight mb-2 group-hover:scale-[1.02] transition-transform duration-300">
                    {formatPrice(estimatedMin)} – {formatPrice(estimatedMax)}
                    <span className="text-xs font-normal text-[var(--text-muted)] font-sans ml-1 sm:ml-2">{currency}</span>
                  </div>

                  <div className="flex items-center gap-2 text-xs sm:text-sm text-[#E51A4B] dark:text-[#E2EC07] font-semibold mb-5 sm:mb-6">
                    <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                    <span>Estimated Delivery: {estimatedWeeks} – {estimatedWeeks + 2} Weeks</span>
                  </div>

                  <div className="space-y-2.5 sm:space-y-3 pt-4 sm:pt-6 border-t border-black/10 dark:border-white/10 text-xs text-[var(--text-muted)]">
                    <div className="flex items-center justify-between">
                      <span>Deliverable:</span>
                      <span className="font-semibold text-[var(--text-main)] text-right">{currentProject.label}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Scope:</span>
                      <span className="font-semibold text-[var(--text-main)]">{currentTier.label}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Add-ons:</span>
                      <span className="font-semibold text-[#E51A4B] dark:text-[#E2EC07]">{selectedAddons.length} Selected</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>IP Ownership:</span>
                      <span className="font-semibold text-emerald-600 dark:text-emerald-400">100% Client Retained</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 sm:pt-8">
                  <button
                    onClick={() => onBookEstimate({
                      project: currentProject.label,
                      tier: currentTier.label,
                      budget: `${formatPrice(estimatedMin)} - ${formatPrice(estimatedMax)} (${currency})`,
                      timeline: `${estimatedWeeks}-${estimatedWeeks + 2} Weeks`
                    })}
                    className="w-full py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#E51A4B] to-[#D01540] text-white font-bold text-xs sm:text-base shadow-xl shadow-[#E51A4B]/30 hover:shadow-[#E51A4B]/50 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group focus-visible:ring-2 focus-visible:ring-[#E51A4B] focus-visible:outline-none"
                  >
                    <span>Book Free Consultation with This Scope</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform shrink-0" />
                  </button>
                  <p className="text-[10px] sm:text-[11px] text-[var(--text-muted)] text-center mt-2.5">
                    Zero obligation • Customized proposal within 24 hours
                  </p>
                </div>

              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
};
