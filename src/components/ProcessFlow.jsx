import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, CheckCircle2, ArrowRight, ArrowLeft, Clock, ShieldCheck, Check, Pause, Play } from 'lucide-react';
import { PROCESS_STEPS } from '../data/content';
import { ScrollReveal } from './ScrollReveal';

export const ProcessFlow = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef(null);
  const intervalRef = useRef(null);

  const totalSteps = PROCESS_STEPS.length;
  const STEP_DURATION = 3800; // 3.8s per step

  useEffect(() => {
    if (isAutoPlay && !isHovered) {
      setProgress(0);
      const startTime = Date.now();

      intervalRef.current = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const currentPct = Math.min(100, (elapsed / STEP_DURATION) * 100);
        setProgress(currentPct);
      }, 50);

      timerRef.current = setTimeout(() => {
        setActiveStepIndex((prev) => (prev + 1) % totalSteps);
      }, STEP_DURATION);
    } else {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (intervalRef.current) clearInterval(intervalRef.current);
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [activeStepIndex, isAutoPlay, isHovered, totalSteps]);

  const handlePrev = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (intervalRef.current) clearInterval(intervalRef.current);
    setProgress(0);
    setActiveStepIndex((prev) => (prev === 0 ? totalSteps - 1 : prev - 1));
  };

  const handleNext = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (intervalRef.current) clearInterval(intervalRef.current);
    setProgress(0);
    setActiveStepIndex((prev) => (prev + 1) % totalSteps);
  };

  const handleSelectStep = (idx) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (intervalRef.current) clearInterval(intervalRef.current);
    setProgress(0);
    setActiveStepIndex(idx);
  };

  const activeStep = PROCESS_STEPS[activeStepIndex];

  return (
    <section id="process" className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      
      {/* Ambient glow */}
      <div className="ambient-glow w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-[#E51A4B]/10 -right-20 top-1/3 animate-pulse-glow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 text-left">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E51A4B]/10 border border-[#E51A4B]/20 text-[#E51A4B] text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-3 sm:mb-4">
                <Sparkles className="w-3.5 h-3.5 animate-spin-slow" />
                <span>Auto-Advancing Delivery Framework</span>
              </div>
              <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-main)] tracking-tight">
                From Blueprint to <span className="primary-gradient-text">Global Scale.</span>
              </h2>
            </div>

            {/* Auto-play Controls */}
            <div className="flex items-center gap-2 mt-4 md:mt-0">
              <button
                onClick={() => setIsAutoPlay(!isAutoPlay)}
                className={`p-2.5 rounded-full border transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#E51A4B] focus-visible:outline-none ${
                  isAutoPlay
                    ? 'bg-black/[0.04] dark:bg-white/[0.06] border-black/15 dark:border-white/15 text-[var(--text-main)] hover:border-[#E51A4B] hover:text-[#E51A4B]'
                    : 'bg-[#E51A4B]/10 border-[#E51A4B]/30 text-[#E51A4B] hover:bg-[#E51A4B] hover:text-white'
                }`}
                title={isAutoPlay ? "Pause Auto-Advancing" : "Start Auto-Advancing"}
                aria-label={isAutoPlay ? "Pause Auto-Advancing" : "Start Auto-Advancing"}
              >
                {isAutoPlay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>
              <button
                onClick={handlePrev}
                className="p-2.5 rounded-full bg-black/[0.04] dark:bg-white/[0.06] border border-black/15 dark:border-white/15 text-[var(--text-main)] hover:bg-[#E51A4B] hover:border-[#E51A4B] hover:text-white hover:scale-105 active:scale-95 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#E51A4B] focus-visible:outline-none"
                aria-label="Previous Step"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-2.5 rounded-full bg-black/[0.04] dark:bg-white/[0.06] border border-black/15 dark:border-white/15 text-[var(--text-main)] hover:bg-[#E51A4B] hover:border-[#E51A4B] hover:text-white hover:scale-105 active:scale-95 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#E51A4B] focus-visible:outline-none"
                aria-label="Next Step"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Process Stepper & Content Layout */}
        <div 
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start"
        >
          
          {/* Left Column: Interactive Step Selector Tabs */}
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
                Phase {activeStep.step} of 06: <span className="text-[#E51A4B]">{activeStep.title}</span>
              </div>
              <button
                onClick={handleNext}
                className="p-2 rounded-xl bg-black/[0.05] dark:bg-white/10 text-[var(--text-main)] active:scale-95 transition-transform"
                aria-label="Next step"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Desktop Step Buttons */}
            <div className="hidden lg:flex flex-col gap-3">
              {PROCESS_STEPS.map((step, idx) => {
                const isActive = activeStepIndex === idx;
                return (
                  <button
                    key={step.step}
                    onClick={() => handleSelectStep(idx)}
                    className={`w-full p-4 sm:p-5 rounded-2xl text-left transition-all duration-300 border flex items-center justify-between group relative overflow-hidden focus-visible:ring-2 focus-visible:ring-[#E51A4B] focus-visible:outline-none ${
                      isActive
                        ? 'bg-black/[0.05] dark:bg-white/[0.08] border-[#E51A4B] shadow-xl shadow-[#E51A4B]/10 scale-[1.02]'
                        : 'bg-black/[0.02] dark:bg-white/[0.02] border-black/5 dark:border-white/[0.06] hover:bg-black/[0.04] dark:hover:bg-white/[0.05] hover:border-[#E51A4B]/30'
                    }`}
                  >
                    {/* Active Step Progress Indicator Bar on the Edge */}
                    {isActive && (
                      <div 
                        className="absolute top-0 left-0 bottom-0 bg-[#E51A4B] transition-all duration-75 ease-linear"
                        style={{ width: '4px' }}
                      ></div>
                    )}

                    <div className="flex items-center gap-3.5 sm:gap-4 pl-2">
                      <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center font-mono font-extrabold text-xs sm:text-sm transition-all duration-300 ${
                        isActive ? 'bg-[#E51A4B] text-white shadow-md scale-105' : 'bg-black/5 dark:bg-white/5 text-[var(--text-muted)] group-hover:text-[var(--text-main)]'
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

                    <ArrowRight className={`w-4 h-4 transition-transform duration-200 ${
                      isActive ? 'text-[#E51A4B] translate-x-1.5' : 'text-[var(--text-subtle)] opacity-0 group-hover:opacity-100'
                    }`} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Active Stage Deep Dive Card */}
          <div className="lg:col-span-7 w-full">
            <div className="glass-panel p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border border-black/10 dark:border-white/15 text-left relative shadow-2xl overflow-hidden min-h-[380px] flex flex-col justify-between">
              
              {/* Animated Progress Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-black/5 dark:bg-white/10">
                <div 
                  className="h-full bg-gradient-to-r from-[#E51A4B] via-[#FF4D79] to-[#E2EC07] transition-all duration-75 ease-linear"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>

              {/* Step Content with Key-Triggered Smooth Fade Transition */}
              <div key={activeStepIndex} className="animate-in fade-in slide-in-from-right-3 duration-300">
                
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
                      <div key={i} className="flex items-center gap-2.5 sm:gap-3 p-3 sm:p-3.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/5 dark:border-white/5 text-xs font-medium text-[var(--text-main)] hover:border-[#E51A4B]/30 hover:scale-[1.01] transition-all">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 stroke-[2.5]" />
                        </div>
                        <span className="line-clamp-1">{del}</span>
                      </div>
                    ))}
                  </div>
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
                      onClick={() => handleSelectStep(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[#E51A4B] focus-visible:outline-none ${
                        i === activeStepIndex ? 'w-5 sm:w-6 bg-[#E51A4B]' : 'w-2 bg-black/20 dark:bg-white/20 hover:bg-[#E51A4B]/50'
                      }`}
                      title={`Jump to step ${i + 1}`}
                      aria-label={`Jump to step ${i + 1}`}
                    ></button>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
