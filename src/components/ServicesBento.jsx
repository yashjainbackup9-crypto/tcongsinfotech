import React, { useState, useEffect, useRef } from 'react';
import { 
  Smartphone, 
  Layers, 
  ShoppingBag, 
  Palette, 
  TrendingUp, 
  Rocket, 
  CheckCircle2, 
  ArrowUpRight, 
  Sparkles, 
  ChevronRight, 
  ChevronLeft,
  Pause,
  Play,
  X,
  ArrowRight
} from 'lucide-react';
import { SERVICES } from '../data/content';
import { ScrollReveal } from './ScrollReveal';

const iconMap = {
  Smartphone: Smartphone,
  Layers: Layers,
  ShoppingBag: ShoppingBag,
  Palette: Palette,
  TrendingUp: TrendingUp,
  Rocket: Rocket,
};

export const ServicesBento = ({ onSelectService }) => {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [selectedService, setSelectedService] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const autoPlayRef = useRef(null);

  const categories = ['ALL', 'ENGINEERING', 'ENTERPRISE', 'COMMERCE', 'DESIGN', 'GROWTH', 'STRATEGY'];

  const filteredServices = activeFilter === 'ALL' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === activeFilter);

  const totalSlides = filteredServices.length;

  useEffect(() => {
    setCurrentSlide(0);
  }, [activeFilter]);

  useEffect(() => {
    if (isAutoPlay && !isHovered && totalSlides > 1) {
      autoPlayRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, 4000);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlay, isHovered, totalSlides]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const activeService = filteredServices[currentSlide] || filteredServices[0];
  const ActiveIcon = iconMap[activeService?.icon] || Sparkles;

  return (
    <section id="services" className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      
      {/* Subtle ambient light */}
      <div className="ambient-glow w-[350px] sm:w-[400px] h-[350px] sm:h-[400px] bg-[#E51A4B]/10 -left-20 top-1/2 animate-pulse-glow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 text-left">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E51A4B]/10 border border-[#E51A4B]/20 text-[#E51A4B] text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-3 sm:mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Full-Spectrum Solutions Carousel</span>
              </div>
              <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-main)] tracking-tight">
                End-to-End Solutions for <span className="primary-gradient-text">Scalable Impact.</span>
              </h2>
            </div>
            
            {/* Carousel Navigation Buttons */}
            <div className="flex items-center gap-2 mt-4 md:mt-0">
              <button
                onClick={() => setIsAutoPlay(!isAutoPlay)}
                className="p-2.5 rounded-full bg-black/[0.03] dark:bg-white/[0.05] border border-black/10 dark:border-white/10 text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors"
                title={isAutoPlay ? "Pause Auto-play" : "Start Auto-play"}
              >
                {isAutoPlay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>
              <button
                onClick={handlePrev}
                className="p-2.5 rounded-full bg-black/[0.03] dark:bg-white/[0.05] border border-black/10 dark:border-white/10 text-[var(--text-main)] hover:bg-[#E51A4B] hover:text-white transition-all active:scale-95"
                aria-label="Previous Service"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-2.5 rounded-full bg-black/[0.03] dark:bg-white/[0.05] border border-black/10 dark:border-white/10 text-[var(--text-main)] hover:bg-[#E51A4B] hover:text-white transition-all active:scale-95"
                aria-label="Next Service"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Category Filters */}
        <ScrollReveal animation="fade-up" delay={100}>
          <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 sm:mb-10 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3.5 py-2 rounded-full text-[11px] sm:text-xs font-semibold tracking-wide transition-all uppercase whitespace-nowrap shrink-0 ${
                  activeFilter === cat
                    ? 'bg-[#E51A4B] text-white shadow-lg shadow-[#E51A4B]/20 scale-105'
                    : 'bg-black/[0.03] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 text-[var(--text-muted)] hover:bg-black/[0.06] dark:hover:bg-white/[0.08] hover:text-[var(--text-main)]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Featured Auto-Changing Service Carousel Hero */}
        <ScrollReveal animation="fade-up" duration={700}>
          <div 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="glass-panel p-6 sm:p-10 rounded-3xl border border-black/10 dark:border-white/15 text-left relative overflow-hidden shadow-2xl mb-8"
          >
            {/* Auto Advance Progress Bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-black/10 dark:bg-white/10">
              <div 
                key={currentSlide}
                className="h-full bg-gradient-to-r from-[#E51A4B] to-[#E2EC07] transition-all duration-[4000ms] ease-linear"
                style={{ width: isHovered ? '100%' : '100%' }}
              ></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column */}
              <div className="lg:col-span-8">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-black/[0.03] dark:bg-white/[0.05] border border-black/10 dark:border-white/10 flex items-center justify-center text-[#E51A4B] shadow-md">
                    <ActiveIcon className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-[#E51A4B]/10 text-[#E51A4B] border border-[#E51A4B]/20">
                      {activeService.category}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-main)] mt-1">
                      {activeService.title}
                    </h3>
                  </div>
                </div>

                <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed mb-6">
                  {activeService.description}
                </p>

                {/* Capabilities */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                  {activeService.capabilities.map((cap, i) => (
                    <div key={i} className="flex items-center gap-2.5 p-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/5 dark:border-white/5 text-xs text-[var(--text-main)]">
                      <CheckCircle2 className="w-4 h-4 text-[#E51A4B] dark:text-[#E2EC07] shrink-0" />
                      <span className="line-clamp-1">{cap}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-black/10 dark:border-white/10">
                  <div className="text-xs text-[var(--text-muted)] font-medium">
                    SLA & Metric: <strong className="text-[#E51A4B] dark:text-[#E2EC07]">{activeService.metrics}</strong>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setSelectedService(activeService)}
                      className="px-5 py-2.5 rounded-full bg-black/[0.03] dark:bg-white/[0.05] border border-black/10 dark:border-white/10 text-xs font-semibold text-[var(--text-main)] hover:border-[#E51A4B] transition-colors"
                    >
                      View Deep Dive
                    </button>
                    <button
                      onClick={() => onSelectService(activeService.title)}
                      className="px-6 py-2.5 rounded-full bg-[#E51A4B] hover:bg-[#D01540] text-white text-xs font-bold transition-all shadow-lg shadow-[#E51A4B]/30 hover:scale-105 active:scale-95 flex items-center gap-1.5"
                    >
                      <span>Inquire Now</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column: Carousel Quick Selector Tiles */}
              <div className="lg:col-span-4 flex flex-col gap-2.5">
                <div className="text-xs font-bold uppercase tracking-wider text-[var(--text-subtle)] mb-1">
                  All Specialized Pillars ({totalSlides})
                </div>
                {filteredServices.map((service, idx) => {
                  const isCurrent = idx === currentSlide;
                  return (
                    <button
                      key={service.id}
                      onClick={() => setCurrentSlide(idx)}
                      className={`p-3 rounded-xl text-left transition-all border flex items-center justify-between group ${
                        isCurrent
                          ? 'bg-[#E51A4B]/10 border-[#E51A4B] text-[#E51A4B] dark:text-white font-bold scale-[1.01]'
                          : 'bg-black/[0.02] dark:bg-white/[0.02] border-black/5 dark:border-white/5 text-[var(--text-muted)] hover:bg-black/[0.04] dark:hover:bg-white/[0.04]'
                      }`}
                    >
                      <div className="text-xs font-semibold line-clamp-1">
                        {service.title}
                      </div>
                      <ChevronRight className={`w-3.5 h-3.5 shrink-0 transition-transform ${isCurrent ? 'text-[#E51A4B] translate-x-0.5' : 'opacity-30'}`} />
                    </button>
                  );
                })}
              </div>

            </div>

          </div>
        </ScrollReveal>

      </div>

      {/* Service Deep-Dive Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="glass-panel p-5 sm:p-8 rounded-2xl sm:rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-black/20 dark:border-white/20 shadow-2xl relative text-left">
            
            <button
              onClick={() => setSelectedService(null)}
              className="sticky top-0 float-right p-2 rounded-full bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors z-10 backdrop-blur-md"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E51A4B]/20 text-[#E51A4B] text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2.5 sm:mb-3">
              {selectedService.category}
            </div>

            <h3 className="text-xl sm:text-3xl font-extrabold text-[var(--text-main)] mb-2.5 sm:mb-3">
              {selectedService.title}
            </h3>

            <p className="text-[var(--text-muted)] text-xs sm:text-base leading-relaxed mb-5 sm:mb-6">
              {selectedService.description}
            </p>

            <h4 className="text-xs sm:text-sm font-bold text-[var(--text-main)] uppercase tracking-wider mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#E51A4B] dark:text-[#E2EC07]" /> Core Deliverables & Capabilities
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6 sm:mb-8">
              {selectedService.capabilities.map((cap, i) => (
                <div key={i} className="flex items-start gap-2.5 p-2.5 sm:p-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/5 dark:border-white/5 text-xs text-[var(--text-main)]">
                  <CheckCircle2 className="w-4 h-4 text-[#E51A4B] shrink-0 mt-0.5" />
                  <span>{cap}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3.5 pt-4 border-t border-black/10 dark:border-white/10">
              <div className="text-[11px] sm:text-xs text-[var(--text-muted)] text-center sm:text-left">
                Performance Benchmark: <strong className="text-[var(--text-main)]">{selectedService.metrics}</strong>
              </div>

              <button
                onClick={() => {
                  setSelectedService(null);
                  if (onSelectService) onSelectService(selectedService.title);
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#E51A4B] hover:bg-[#D01540] text-white text-xs sm:text-sm font-bold transition-all shadow-lg shadow-[#E51A4B]/30 hover:scale-105 active:scale-95"
              >
                Inquire for {selectedService.title} 🚀
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
