import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Code2, 
  Cpu, 
  Zap, 
  Terminal, 
  Smartphone, 
  Globe2,
  TrendingUp,
  Layers,
  ShoppingBag
} from 'lucide-react';
import { STATS } from '../data/content';

export const Hero = ({ onOpenConsultation }) => {
  const [activeTab, setActiveTab] = useState('web');
  const [counts, setCounts] = useState({ years: 0, projects: 0, satisfaction: 0, roi: 0 });

  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const intervalTime = 20;
    const steps = duration / intervalTime;

    const timer = setInterval(() => {
      start++;
      const progress = Math.min(start / steps, 1);
      setCounts({
        years: Math.floor(progress * 8),
        projects: Math.floor(progress * 180),
        satisfaction: (progress * 99.4).toFixed(1),
        roi: (progress * 4.8).toFixed(1)
      });
      if (progress >= 1) clearInterval(timer);
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  const previews = {
    web: {
      title: "Next.js 15 & React Architecture",
      subtitle: "Sub-second load times & SEO domination",
      code: `// Tcongs High-Performance Pipeline
export async function generateEnterpriseApp() {
  const stack = await configureStack({
    framework: 'Next.js 15 App Router',
    styling: 'Tailwind CSS v4 Engine',
    database: 'PostgreSQL + Prisma',
    performance: 'Lighthouse Score 99/100',
    globalCDN: 'Multi-Region Edge Caching'
  });
  return stack.deploy();
}`
    },
    mobile: {
      title: "Cross-Platform Flutter & iOS",
      subtitle: "60fps native feel on iOS & Android",
      code: `// Unified Mobile Experience
class TcongsMobileCore extends StatelessWidget {
  Widget build(BuildContext context) {
    return NativeAppEngine(
      telemetry: RealtimeAnalytics(),
      pushEngine: SmartNotificationBridge(),
      offlineCache: LocalEncryptedStore(),
    );
  }
}`
    },
    ecommerce: {
      title: "Shopify & Marketplace Sync",
      subtitle: "Amazon, Flipkart & Shopify automation",
      code: `// Real-Time Multi-Channel Sync
const marketplaceEngine = new OmniChannelBridge({
  channels: ['Shopify Plus', 'Amazon US/UAE', 'Flipkart'],
  autoInventoryLock: true,
  conversionRateOpt: true,
  payoutOptimization: 'Instant'
});`
    }
  };

  return (
    <section className="relative pt-24 pb-16 sm:pt-36 sm:pb-24 lg:pt-44 lg:pb-32 overflow-hidden">
      
      {/* Ambient background glows */}
      <div className="ambient-glow w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] bg-[#E51A4B]/15 -top-28 sm:-top-40 left-1/2 -translate-x-1/2 animate-pulse-glow"></div>
      <div className="ambient-glow w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] bg-[#E2EC07]/10 top-1/3 -right-20 animate-pulse-glow" style={{ animationDelay: '2s' }}></div>

      {/* Floating Animated Badges in Background (Hidden on very small screens to avoid clutter) */}
      <div className="absolute top-28 left-4 lg:left-24 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.05] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 text-xs font-semibold text-[var(--text-muted)] shadow-xl animate-float backdrop-blur-md">
        <Code2 className="w-3.5 h-3.5 text-[#E51A4B]" />
        <span>Next.js 15 + React</span>
      </div>

      <div className="absolute top-48 right-4 lg:right-28 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.05] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 text-xs font-semibold text-[var(--text-muted)] shadow-xl animate-float-delayed backdrop-blur-md">
        <Smartphone className="w-3.5 h-3.5 text-sky-400" />
        <span>Flutter iOS & Android</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Trust Pill */}
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-black/[0.03] dark:bg-white/[0.04] border border-black/10 dark:border-white/[0.08] text-[var(--text-muted)] text-[11px] sm:text-sm font-medium mb-5 sm:mb-6 backdrop-blur-md shadow-inner">
              <span className="flex h-2 w-2 relative shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E51A4B] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E51A4B]"></span>
              </span>
              <span>8+ Years Delivering Digital Excellence</span>
              <span className="opacity-40 hidden xs:inline">|</span>
              <span className="text-[#E51A4B] dark:text-[#E2EC07] font-semibold">USA • UAE • Canada • India</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--text-main)] leading-[1.15] mb-5 sm:mb-6">
              Smart Digital Solutions for{' '}
              <span className="primary-gradient-text shimmer-text block sm:inline">Modern Businesses.</span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg lg:text-xl text-[var(--text-muted)] font-normal leading-relaxed max-w-2xl mb-7 sm:mb-8">
              We engineer cutting-edge <strong className="text-[var(--text-main)] font-semibold">Web & Mobile Apps</strong>, scalable <strong className="text-[var(--text-main)] font-semibold">Enterprise SaaS</strong>, and high-growth <strong className="text-[var(--text-main)] font-semibold">E-Commerce Marketplaces</strong> for ambitious brands worldwide.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-8 sm:mb-10">
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto px-7 py-3.5 sm:px-8 sm:py-4 rounded-full bg-gradient-to-r from-[#E51A4B] via-[#E82C5A] to-[#D01540] text-white font-bold text-sm sm:text-base shadow-xl shadow-[#E51A4B]/30 hover:shadow-[#E51A4B]/50 hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 flex items-center justify-center gap-3 group"
              >
                <span>Launch Your Project 🚀</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1.5 transition-transform" />
              </button>

              <a
                href="#services"
                className="w-full sm:w-auto px-7 py-3.5 sm:px-8 sm:py-4 rounded-full bg-black/[0.03] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 hover:bg-black/[0.06] dark:hover:bg-white/[0.08] text-[var(--text-main)] font-semibold text-sm sm:text-base transition-all duration-200 text-center flex items-center justify-center gap-2"
              >
                <span>Explore Solutions</span>
                <Zap className="w-4 h-4 text-[#E51A4B] dark:text-[#E2EC07]" />
              </a>
            </div>

            {/* Quick Guarantees / Value Props */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-4 pt-5 sm:pt-6 border-t border-black/10 dark:border-white/[0.08] w-full text-xs sm:text-sm text-[var(--text-muted)]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0" />
                <span>100% IP Ownership</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0" />
                <span>Agile Bi-Weekly Sprints</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0" />
                <span>30-Day Post-Launch SLA</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Code & Architecture Preview */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-2xl overflow-hidden glass-panel p-1 shadow-2xl border border-black/10 dark:border-white/15">
              
              {/* Tab Selector */}
              <div className="bg-slate-900 px-3.5 py-2.5 sm:px-4 sm:py-3 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="text-[11px] sm:text-xs text-slate-300 font-mono ml-1.5 sm:ml-2 truncate max-w-[120px] sm:max-w-none">tcongs-core.ts</span>
                </div>
                
                <div className="flex bg-black/50 p-0.5 sm:p-1 rounded-lg border border-white/10 text-[10px] sm:text-[11px] font-medium">
                  {['web', 'mobile', 'ecommerce'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-2 py-0.5 sm:px-2.5 sm:py-1 rounded capitalize transition-all ${
                        activeTab === tab 
                          ? 'bg-[#E51A4B] text-white shadow-sm font-bold' 
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {/* Terminal / Code Body */}
              <div className="p-4 sm:p-6 bg-[#0E0E14] text-left">
                <div className="mb-3 sm:mb-4">
                  <div className="text-xs sm:text-sm font-semibold text-white flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E2EC07]" />
                    {previews[activeTab].title}
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-400 mt-0.5">
                    {previews[activeTab].subtitle}
                  </div>
                </div>

                <pre className="font-mono text-[11px] sm:text-xs text-slate-300 bg-black/60 p-3 sm:p-4 rounded-xl border border-white/5 overflow-x-auto leading-relaxed max-h-56 sm:max-h-none">
                  <code>{previews[activeTab].code}</code>
                </pre>

                <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-white/10 flex items-center justify-between text-[11px] sm:text-xs text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                    <span>Continuous Deployment Ready</span>
                  </div>
                  <span className="font-mono text-[10px] sm:text-[11px] text-[#E2EC07]">Zero Technical Debt</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Live Metrics Showcase Banner with Animated Counter */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          <div className="glass-panel glass-panel-hover p-4 sm:p-6 rounded-2xl text-left relative overflow-hidden group">
            <div className="text-2xl xs:text-3xl sm:text-4xl font-extrabold text-[var(--text-main)] mb-0.5 sm:mb-1 tracking-tight group-hover:text-[#E51A4B] transition-colors">
              {counts.years}+
            </div>
            <div className="text-xs sm:text-sm font-semibold text-[var(--text-main)] mb-0.5 sm:mb-1">Years Excellence</div>
            <div className="text-[11px] sm:text-xs text-[var(--text-muted)] leading-tight sm:leading-normal">Proven global delivery track record</div>
          </div>

          <div className="glass-panel glass-panel-hover p-4 sm:p-6 rounded-2xl text-left relative overflow-hidden group">
            <div className="text-2xl xs:text-3xl sm:text-4xl font-extrabold text-[var(--text-main)] mb-0.5 sm:mb-1 tracking-tight group-hover:text-[#E51A4B] transition-colors">
              {counts.projects}+
            </div>
            <div className="text-xs sm:text-sm font-semibold text-[var(--text-main)] mb-0.5 sm:mb-1">Projects Shipped</div>
            <div className="text-[11px] sm:text-xs text-[var(--text-muted)] leading-tight sm:leading-normal">Web, Mobile & SaaS platforms</div>
          </div>

          <div className="glass-panel glass-panel-hover p-4 sm:p-6 rounded-2xl text-left relative overflow-hidden group">
            <div className="text-2xl xs:text-3xl sm:text-4xl font-extrabold text-[var(--text-main)] mb-0.5 sm:mb-1 tracking-tight group-hover:text-[#E51A4B] transition-colors">
              {counts.satisfaction}%
            </div>
            <div className="text-xs sm:text-sm font-semibold text-[var(--text-main)] mb-0.5 sm:mb-1">Client Satisfaction</div>
            <div className="text-[11px] sm:text-xs text-[var(--text-muted)] leading-tight sm:leading-normal">Across USA, UAE, Canada & India</div>
          </div>

          <div className="glass-panel glass-panel-hover p-4 sm:p-6 rounded-2xl text-left relative overflow-hidden group">
            <div className="text-2xl xs:text-3xl sm:text-4xl font-extrabold text-[var(--text-main)] mb-0.5 sm:mb-1 tracking-tight group-hover:text-[#E51A4B] transition-colors">
              {counts.roi}x
            </div>
            <div className="text-xs sm:text-sm font-semibold text-[var(--text-main)] mb-0.5 sm:mb-1">Average ROI Uplift</div>
            <div className="text-[11px] sm:text-xs text-[var(--text-muted)] leading-tight sm:leading-normal">For scaling brands & marketplaces</div>
          </div>
        </div>

      </div>
    </section>
  );
};
