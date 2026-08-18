import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUpRight, 
  TrendingUp, 
  Sparkles, 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight,
  Trophy
} from 'lucide-react';
import { CASE_STUDIES, TESTIMONIALS } from '../data/content';
import { ScrollReveal } from './ScrollReveal';

export const CaseStudies = ({ onOpenConsultation }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef(null);
  const intervalRef = useRef(null);

  const totalSlides = CASE_STUDIES.length;
  const SLIDE_DURATION = 4000;

  useEffect(() => {
    if (isAutoPlay && !isHovered) {
      setProgress(0);
      const startTime = Date.now();

      intervalRef.current = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const currentPct = Math.min(100, (elapsed / SLIDE_DURATION) * 100);
        setProgress(currentPct);
      }, 50);

      timerRef.current = setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, SLIDE_DURATION);
    } else {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (intervalRef.current) clearInterval(intervalRef.current);
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [currentSlide, isAutoPlay, isHovered, totalSlides]);

  const handlePrev = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (intervalRef.current) clearInterval(intervalRef.current);
    setProgress(0);
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (intervalRef.current) clearInterval(intervalRef.current);
    setProgress(0);
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const handleSelectSlide = (idx) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (intervalRef.current) clearInterval(intervalRef.current);
    setProgress(0);
    setCurrentSlide(idx);
  };

  const activeStudy = CASE_STUDIES[currentSlide] || CASE_STUDIES[0];
  const primaryMetric = activeStudy.metrics?.[0] || { value: '+310%', label: 'Revenue Lift' };

  return (
    <section id="case-studies" className="py-16 sm:py-24 lg:py-32 border-t border-black/5 dark:border-white/[0.06] bg-black/[0.01] dark:bg-[#07070A] relative overflow-hidden">
      
      {/* Ambient Glow */}
      <div className="ambient-glow w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-[#E51A4B]/10 -left-20 top-1/4 animate-pulse-glow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Navigation Controls */}
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 text-left">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E51A4B]/10 border border-[#E51A4B]/20 text-[#E51A4B] text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-3 sm:mb-4">
                <Trophy className="w-3.5 h-3.5" />
                <span>Featured Client Transformations</span>
              </div>
              <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-main)] tracking-tight">
                Architected for <span className="accent-gradient-text">Proven ROI.</span>
              </h2>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center gap-2 mt-4 md:mt-0">
              <button
                onClick={handlePrev}
                className="p-2.5 rounded-full bg-black/[0.04] dark:bg-white/[0.06] border border-black/15 dark:border-white/15 text-[var(--text-main)] hover:bg-[#E51A4B] hover:border-[#E51A4B] hover:text-white hover:scale-105 active:scale-95 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#E51A4B] focus-visible:outline-none"
                aria-label="Previous Case Study"
                title="Previous Case Study"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                onClick={handleNext}
                className="p-2.5 rounded-full bg-black/[0.04] dark:bg-white/[0.06] border border-black/15 dark:border-white/15 text-[var(--text-main)] hover:bg-[#E51A4B] hover:border-[#E51A4B] hover:text-white hover:scale-105 active:scale-95 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#E51A4B] focus-visible:outline-none"
                aria-label="Next Case Study"
                title="Next Case Study"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Featured Case Study Auto-Changing Carousel Card */}
        <ScrollReveal animation="fade-up" duration={700}>
          <div 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="glass-panel p-6 sm:p-10 rounded-3xl border border-black/10 dark:border-white/15 text-left relative overflow-hidden shadow-2xl mb-16 group/card min-h-[380px] flex flex-col justify-between"
          >
            {/* Top Auto Progress Bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-black/10 dark:bg-white/10">
              <div 
                className="h-full bg-gradient-to-r from-[#E51A4B] via-[#FF4D79] to-[#E2EC07] transition-all duration-75 ease-linear"
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            <div key={currentSlide} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in slide-in-from-right-3 duration-300">
              
              {/* Left Column: Metrics and Title */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[11px] font-bold tracking-widest uppercase text-[#E51A4B] bg-[#E51A4B]/10 px-3.5 py-1 rounded-full border border-[#E51A4B]/20">
                      {activeStudy.industry}
                    </span>
                    <span className="text-xs text-[var(--text-muted)] font-mono">
                      Case Study {currentSlide + 1} of {totalSlides}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--text-main)] mb-3 group-hover/card:text-[#E51A4B] transition-colors duration-300">
                    {activeStudy.title}
                  </h3>

                  <div className="text-xs sm:text-sm text-[var(--text-muted)] font-medium mb-4">
                    Client Partner: <strong className="text-[var(--text-main)]">{activeStudy.client}</strong> • Duration: {activeStudy.duration}
                  </div>

                  <p className="text-[var(--text-muted)] text-xs sm:text-sm leading-relaxed mb-6">
                    {activeStudy.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {activeStudy.techUsed?.map((tag, i) => (
                      <span 
                        key={i} 
                        className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-black/[0.03] dark:bg-white/[0.04] text-[var(--text-main)] border border-black/5 dark:border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-black/10 dark:border-white/10">
                  <Link
                    to={`/case-studies/${activeStudy.slug}`}
                    className="px-6 py-3 rounded-full bg-[#E51A4B] hover:bg-[#D01540] text-white font-bold text-xs sm:text-sm transition-all shadow-lg shadow-[#E51A4B]/30 hover:scale-105 active:scale-95 flex items-center gap-2"
                  >
                    <span>Read Full Breakdown</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <button
                    onClick={() => onOpenConsultation({ project: `Similar to ${activeStudy.title}` })}
                    className="px-6 py-3 rounded-full bg-black/[0.04] dark:bg-white/[0.06] border border-black/10 dark:border-white/10 text-[var(--text-main)] font-bold text-xs sm:text-sm hover:border-[#E51A4B]/40 transition-all"
                  >
                    <span>Request Similar Case Study 🚀</span>
                  </button>
                </div>
              </div>

              {/* Right Column: High-Impact ROI Stat Box */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-black/[0.04] dark:from-white/[0.06] to-black/[0.01] dark:to-white/[0.01] border border-black/10 dark:border-white/10 text-center relative overflow-hidden group hover:border-[#E51A4B]/30 transition-all duration-300">
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#E51A4B] dark:text-[#E2EC07] font-mono tracking-tight mb-2">
                    {primaryMetric.value}
                  </div>
                  <div className="text-xs sm:text-sm font-mono text-[var(--text-main)] font-bold uppercase tracking-wider mb-2">
                    {primaryMetric.label}
                  </div>
                  <div className="text-[11px] text-[var(--text-muted)] leading-relaxed">
                    Measured directly post-launch via production telemetry &amp; analytics.
                  </div>
                </div>
              </div>

            </div>

            {/* Slide Indicator Dots */}
            <div className="flex items-center justify-center gap-2 mt-8">
              {CASE_STUDIES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => handleSelectSlide(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === currentSlide 
                      ? 'w-8 bg-[#E51A4B]' 
                      : 'w-2 bg-black/20 dark:bg-white/20 hover:bg-[#E51A4B]/60'
                  }`}
                  title={`Go to slide ${i + 1}`}
                  aria-label={`Go to slide ${i + 1}`}
                ></button>
              ))}
            </div>

          </div>
        </ScrollReveal>

        {/* Continuous Auto-Scrolling Testimonial Marquee Carousel */}
        <div className="pt-10 sm:pt-12 border-t border-black/10 dark:border-white/[0.08]">
          <ScrollReveal animation="fade-up" duration={700}>
            <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-main)]">What Founders &amp; Product Leaders Say</h3>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-1.5">Trusted across 4 continents by engineering and commerce executives</p>
            </div>
          </ScrollReveal>

          <div className="relative flex overflow-x-hidden marquee-container">
            <div className="flex gap-6 py-2 animate-scroll-testimonials whitespace-nowrap">
              {[...TESTIMONIALS, ...TESTIMONIALS].map((t, idx) => (
                <div
                  key={idx}
                  className="glass-panel p-6 sm:p-7 rounded-2xl border border-black/10 dark:border-white/10 w-[300px] sm:w-[360px] shrink-0 text-left hover:border-[#E51A4B]/40 hover:-translate-y-1 transition-all duration-300 group shadow-md"
                >
                  <div className="flex items-center gap-1 text-amber-400 mb-3">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-[var(--text-main)] leading-relaxed italic mb-4 whitespace-normal line-clamp-3">
                    "{t.quote}"
                  </p>

                  <div className="pt-3 border-t border-black/5 dark:border-white/5 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-xs sm:text-sm text-[var(--text-main)]">{t.author}</div>
                      <div className="text-[11px] text-[var(--text-muted)]">{t.role}, {t.company}</div>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
