import React, { useState } from 'react';
import { Sparkles, CheckCircle2, ArrowRight, ArrowLeft, Clock, ShieldCheck, Check } from 'lucide-react';
import { PROCESS_STEPS } from '../data/content';
import { ScrollReveal } from './ScrollReveal';

export const ProcessFlow = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const activeStep = PROCESS_STEPS[activeStepIndex];

  const handlePrev = () => {
    setActiveStepIndex((prev) => (prev === 0 ? PROCESS_STEPS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveStepIndex((prev) => (prev === PROCESS_STEPS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="process" className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      
      {/* Ambient glow */}
      <div className="ambient-glow w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-[#E51A4B]/10 -right-20 top-1/3 animate-pulse-glow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="text-left max-w-2xl mb-10 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E51A4B]/10 border border-[#E51A4B]/20 text-[#E51A4B] text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-3 sm:mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Proven Delivery Engine</span>
            </div>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-main)] tracking-tight">
              From Blueprint to <span className="primary-gradient-text">Global Scale.</span>
            </h2>
            <p className="text-[var(--text-muted)] text-xs sm:text-sm md:text-base mt-3 sm:mt-4 leading-relaxed">
              Our structured 6-stage engineering and growth framework guarantees zero scope creep, absolute timeline transparency, and elite quality.
            </p>
          </div>
        </ScrollReveal>

        {/* Process Stepper & Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Left Column: Step Selector */}
          <div className="lg:col-span-5 flex flex-col gap-2.5 sm:gap-3 w-full">
            
            {/* Mobile Quick Carousel Bar */}
            <div className="lg:hidden flex items-center justify-between gap-2 p-2 rounded-2xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/5 dark:border-white/10 mb-2">
              <button
                onClick={handlePrev}
                className="p-2 rounded-xl bg-black/[0.05] dark:bg-white/10 text-[var(--text-main)] active:scale-95 transition-transform"
                aria-label="Previous step"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <div className="text-xs font-bold text-[var(--text-main)]">
                Step {activeStep.step} of 06: <span className="text-[#E51A4B]">{activeStep.title}</span>
              </div>
              <button
                onClick={handleNext}
                className="p-2 rounded-xl bg-black/[0.05] dark:bg-white/10 text-[var(--text-main)] active:scale-95 transition-transform"
                aria-label="Next step"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Step List on Desktop */}
            <div className="hidden lg:flex flex-col gap-3">
              {PROCESS_STEPS.map((step, idx) => {
                const isActive = activeStepIndex === idx;
                return (
                  <ScrollReveal key={step.step} animation="fade-right" delay={idx * 70}>
                    <button
                      onClick={() => setActiveStepIndex(idx)}
                      className={`w-full p-4 sm:p-5 rounded-2xl text-left transition-all border flex items-center justify-between group ${
                        isActive
                          ? 'bg-black/[0.05] dark:bg-white/[0.08] border-[#E51A4B] shadow-xl shadow-[#E51A4B]/10 scale-[1.02]'
                          : 'bg-black/[0.02] dark:bg-white/[0.02] border-black/5 dark:border-white/[0.06] hover:bg-black/[0.04] dark:hover:bg-white/[0.05]'
                      }`}
                    >
                      <div className="flex items-center gap-3.5 sm:gap-4">
                        <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center font-mono font-extrabold text-xs sm:text-sm transition-colors ${
                          isActive ? 'bg-[#E51A4B] text-white shadow-md' : 'bg-black/5 dark:bg-white/5 text-[var(--text-muted)] group-hover:text-[var(--text-main)]'
                        }`}>
                          {step.step}
                        </div>
                        <div>
                          <div className={`text-sm sm:text-base font-bold transition-colors ${
                            isActive ? 'text-[#E51A4B] dark:text-white' : 'text-[var(--text-main)]'
                          }`}>
                            {step.title}
                          </div>
                          <div className="text-[11px] sm:text-xs text-[var(--text-muted)] mt-0.5">
                            {step.tagline}
                          </div>
                        </div>
                      </div>

                      <ArrowRight className={`w-4 h-4 transition-transform ${
                        isActive ? 'text-[#E51A4B] translate-x-1.5' : 'text-[var(--text-subtle)] opacity-0 group-hover:opacity-100'
                      }`} />
                    </button>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>

          {/* Right Column: Active Step Deep Dive Card */}
          <div className="lg:col-span-7 w-full">
            <ScrollReveal animation="fade-left" duration={700}>
              <div className="glass-panel p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border border-black/10 dark:border-white/15 text-left relative shadow-2xl">
                
                <div className="flex items-center justify-between mb-4 sm:mb-6 pb-4 sm:pb-6 border-b border-black/10 dark:border-white/10">
                  <div>
                    <span className="text-[10px] sm:text-xs font-mono font-bold text-[#E51A4B] dark:text-[#E2EC07] uppercase tracking-widest">
                      Phase {activeStep.step} of 06
                    </span>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[var(--text-main)] mt-0.5 sm:mt-1">
                      {activeStep.title}
                    </h3>
                  </div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#E51A4B]/10 border border-[#E51A4B]/20 text-[#E51A4B] flex items-center justify-center font-mono font-black text-lg sm:text-xl shadow-md shrink-0">
                    {activeStep.step}
                  </div>
                </div>

                <div className="mb-6 sm:mb-8">
                  <h4 className="text-[11px] sm:text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider mb-2">
                    What Happens in This Stage
                  </h4>
                  <p className="text-[var(--text-main)] text-xs sm:text-sm md:text-base leading-relaxed">
                    {activeStep.desc}
                  </p>
                </div>

                {/* Deliverables Checklist */}
                <div className="mb-6 sm:mb-8">
                  <h4 className="text-[11px] sm:text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider mb-3 sm:mb-4 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0" />
                    Key Phase Deliverables & Client Sign-Offs
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    {activeStep.deliverables.map((del, i) => (
                      <div key={i} className="flex items-center gap-2.5 sm:gap-3 p-3 sm:p-3.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/5 dark:border-white/5 text-xs font-medium text-[var(--text-main)]">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 stroke-[2.5]" />
                        </div>
                        <span className="line-clamp-1">{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Progress Bar & Sprint Note */}
                <div className="pt-4 sm:pt-6 border-t border-black/10 dark:border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[11px] sm:text-xs text-[var(--text-muted)]">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E51A4B] dark:text-[#E2EC07] shrink-0" />
                    <span>Bi-weekly sprint demos & Slack channel updates</span>
                  </div>
                  <div className="flex items-center gap-1.5 self-end sm:self-auto">
                    {PROCESS_STEPS.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveStepIndex(i)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          i === activeStepIndex ? 'w-5 sm:w-6 bg-[#E51A4B]' : 'w-2 bg-black/20 dark:bg-white/20'
                        }`}
                        aria-label={`Jump to step ${i + 1}`}
                      ></button>
                    ))}
                  </div>
                </div>

              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
};
