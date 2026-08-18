import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Code2, 
  Smartphone, 
  ShoppingBag, 
  Cloud, 
  Sparkles, 
  Palette, 
  ArrowRight, 
  CheckCircle2, 
  Flame,
  Search,
  ExternalLink,
  Layers
} from 'lucide-react';
import { SERVICES } from '../data/content';
import { ScrollReveal } from '../components/ScrollReveal';

export const ServicesPage = ({ onOpenConsultation }) => {
  const [filter, setFilter] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['ALL', 'ENGINEERING', 'MOBILE', 'COMMERCE', 'INFRASTRUCTURE', 'INTELLIGENCE', 'DESIGN'];

  const filteredServices = SERVICES.filter(s => {
    const matchesCat = filter === 'ALL' || s.category === filter;
    const matchesSearch = s.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          s.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          s.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-5 h-5" />;
      case 'Smartphone': return <Smartphone className="w-5 h-5" />;
      case 'ShoppingBag': return <ShoppingBag className="w-5 h-5" />;
      case 'Cloud': return <Cloud className="w-5 h-5" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      case 'Palette': return <Palette className="w-5 h-5" />;
      default: return <Layers className="w-5 h-5" />;
    }
  };

  return (
    <div className="pt-24 sm:pt-28 pb-16 min-h-screen bg-[var(--bg-page)] text-[var(--text-main)] transition-colors duration-400 font-sans text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[var(--text-muted)] mb-8">
          <Link to="/" className="hover:text-[#E51A4B] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[var(--text-main)] font-semibold">Services &amp; Solutions</span>
        </div>

        {/* Header */}
        <ScrollReveal animation="fade-up">
          <div className="max-w-4xl mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E51A4B]/10 border border-[#E51A4B]/20 text-[#E51A4B] dark:text-[#E2EC07] text-xs font-semibold uppercase tracking-wider mb-4">
              <Code2 className="w-3.5 h-3.5" />
              <span>Full-Spectrum Solutions</span>
            </div>
            
            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[var(--text-main)] leading-[1.1]">
              Architecting Digital Engines That <br />
              <span className="accent-gradient-text">Dominate Their Industry.</span>
            </h1>
            
            <p className="text-sm sm:text-base text-[var(--text-muted)] mt-4 leading-relaxed max-w-3xl">
              From sub-second React 19 web platforms to AI autonomous agents and multi-channel marketplace synchronization. Explore our 6 specialized engineering disciplines.
            </p>
          </div>
        </ScrollReveal>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-black/10 dark:border-white/10">
          
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                  filter === cat
                    ? 'bg-[#E51A4B] text-white shadow-md shadow-[#E51A4B]/30'
                    : 'bg-black/[0.04] dark:bg-white/[0.05] text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-black/[0.08] dark:hover:bg-white/[0.1]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[var(--text-muted)] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search technologies, services..."
              className="w-full pl-9 pr-4 py-2 rounded-full bg-black/[0.03] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 text-xs text-[var(--text-main)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[#E51A4B]"
            />
          </div>

        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="glass-panel p-6 sm:p-8 rounded-3xl border border-black/10 dark:border-white/10 flex flex-col justify-between hover:border-[#E51A4B]/40 hover:-translate-y-1 transition-all duration-300 group shadow-md"
            >
              <div>
                {/* Top Badge & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-black/[0.04] dark:bg-white/[0.06] border border-black/10 dark:border-white/10 text-[#E51A4B] dark:text-[#E2EC07] flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getIcon(service.icon)}
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#E51A4B]/10 text-[#E51A4B] dark:text-[#E2EC07] border border-[#E51A4B]/20">
                    {service.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[var(--text-main)] group-hover:text-[#E51A4B] transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-xs text-[var(--text-muted)] mt-2 leading-relaxed">
                  {service.description}
                </p>

                {/* Capabilities List */}
                <div className="mt-5 space-y-2 pt-4 border-t border-black/5 dark:border-white/5">
                  {service.capabilities.slice(0, 3).map((cap, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[var(--text-main)]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span className="truncate">{cap}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mt-5">
                  {service.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-black/[0.03] dark:bg-white/[0.04] text-[var(--text-muted)] border border-black/5 dark:border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 mt-6 border-t border-black/10 dark:border-white/10 flex items-center justify-between">
                <Link
                  to={`/services/${service.slug}`}
                  className="text-xs font-bold text-[var(--text-main)] hover:text-[#E51A4B] flex items-center gap-1.5 group-hover:translate-x-1 transition-all"
                >
                  <span>Explore Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#E51A4B]" />
                </Link>

                <button
                  onClick={() => onOpenConsultation({ project: service.title, budget: '$5,000 - $15,000' })}
                  className="p-2 rounded-xl bg-black/[0.04] dark:bg-white/[0.06] hover:bg-[#E51A4B] hover:text-white transition-colors"
                  title="Book consultation for this service"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-black/10 dark:border-white/10 text-center">
          <h3 className="text-2xl sm:text-3xl font-black text-[var(--text-main)]">
            Need a Specialized Hybrid Architecture?
          </h3>
          <p className="text-xs sm:text-sm text-[var(--text-muted)] max-w-xl mx-auto mt-2 mb-6">
            Many enterprise projects require combining multiple disciplines (e.g. Next.js web platform + Flutter mobile app + AI knowledge bot). Let's design your exact roadmap.
          </p>
          <button
            onClick={() => onOpenConsultation()}
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#E51A4B] to-[#D01540] text-white font-bold text-xs sm:text-sm shadow-xl shadow-[#E51A4B]/30 hover:scale-105 active:scale-95 transition-all"
          >
            <span>Discuss Custom Hybrid Project 🚀</span>
          </button>
        </div>

      </div>
    </div>
  );
};
