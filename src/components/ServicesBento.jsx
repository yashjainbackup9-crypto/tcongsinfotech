import React, { useState } from 'react';
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
  X
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

  const categories = ['ALL', 'ENGINEERING', 'ENTERPRISE', 'COMMERCE', 'DESIGN', 'GROWTH', 'STRATEGY'];

  const filteredServices = activeFilter === 'ALL' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === activeFilter);

  return (
    <section id="services" className="py-16 sm:py-24 lg:py-32 relative">
      
      {/* Subtle ambient light */}
      <div className="ambient-glow w-[350px] sm:w-[400px] h-[350px] sm:h-[400px] bg-[#E51A4B]/10 -left-20 top-1/2 animate-pulse-glow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with ScrollReveal */}
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 text-left">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E51A4B]/10 border border-[#E51A4B]/20 text-[#E51A4B] text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-3 sm:mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Full-Spectrum Digital Services</span>
              </div>
              <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-main)] tracking-tight">
                End-to-End Solutions for <span className="primary-gradient-text">Scalable Impact.</span>
              </h2>
            </div>
            <p className="text-[var(--text-muted)] text-xs sm:text-sm md:text-base max-w-md mt-3 md:mt-0 leading-relaxed">
              From initial wireframes to global marketplace orchestration, we deliver full-cycle engineering and growth services under one roof.
            </p>
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

        {/* Bento Grid with Staggered Scroll Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredServices.map((service, idx) => {
            const Icon = iconMap[service.icon] || Sparkles;
            return (
              <ScrollReveal 
                key={service.id} 
                animation="fade-up" 
                delay={idx * 90} 
                duration={650}
              >
                <div
                  onClick={() => setSelectedService(service)}
                  className="glass-panel glass-panel-hover p-6 sm:p-8 rounded-2xl sm:rounded-3xl text-left flex flex-col justify-between cursor-pointer group relative overflow-hidden active:scale-[0.99] transition-transform h-full"
                >
                  {/* Top Row: Icon & Category Tag */}
                  <div>
                    <div className="flex items-center justify-between mb-4 sm:mb-6">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 flex items-center justify-center text-[#E51A4B] group-hover:bg-[#E51A4B] group-hover:text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-md">
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                      </div>
                      <span className="px-2.5 py-1 rounded-full text-[9px] sm:text-[10px] font-bold tracking-widest uppercase bg-black/[0.04] dark:bg-white/[0.05] border border-black/10 dark:border-white/10 text-[var(--text-muted)] group-hover:border-[#E51A4B]/40 group-hover:text-[#E51A4B] transition-all">
                        {service.category}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-[var(--text-main)] mb-2 group-hover:text-[#E51A4B] transition-colors flex items-center justify-between">
                      <span>{service.title}</span>
                      <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--text-subtle)] group-hover:text-[#E51A4B] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform shrink-0" />
                    </h3>

                    <p className="text-[var(--text-muted)] text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6">
                      {service.description}
                    </p>

                    {/* Capabilities List (Preview) */}
                    <div className="space-y-1.5 sm:space-y-2 mb-5 sm:mb-6">
                      {service.capabilities.slice(0, 3).map((cap, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-[var(--text-main)]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#E51A4B] dark:text-[#E2EC07] shrink-0" />
                          <span className="line-clamp-1">{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Row: Tags & Metrics */}
                  <div className="pt-3.5 sm:pt-4 border-t border-black/10 dark:border-white/[0.08] flex flex-col gap-2.5 sm:gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {service.tags.slice(0, 3).map((tag, i) => (
                        <span key={i} className="text-[10px] sm:text-[11px] px-2 py-0.5 rounded-md bg-black/[0.03] dark:bg-white/[0.04] text-[var(--text-muted)] font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-[11px] sm:text-xs text-[var(--text-muted)] font-medium">
                      <span className="text-[#E51A4B] dark:text-[#E2EC07] font-semibold">{service.metrics}</span>
                      <span className="text-[var(--text-subtle)] group-hover:text-[var(--text-main)] flex items-center gap-1 font-semibold">
                        Details <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>

                </div>
              </ScrollReveal>
            );
          })}
        </div>

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
