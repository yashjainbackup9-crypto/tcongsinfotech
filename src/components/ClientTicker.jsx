import React, { useState, useEffect } from 'react';
import { Globe2, ShieldCheck, Clock, Sparkles } from 'lucide-react';
import { CLIENT_LOCATIONS } from '../data/content';

export const ClientTicker = () => {
  const [times, setTimes] = useState({
    mumbai: '',
    newyork: '',
    dubai: '',
    london: ''
  });

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();
      const formatTime = (timeZone) => {
        return new Intl.DateTimeFormat('en-US', {
          timeZone,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        }).format(now);
      };

      setTimes({
        mumbai: formatTime('Asia/Kolkata'),
        newyork: formatTime('America/New_York'),
        dubai: formatTime('Asia/Dubai'),
        london: formatTime('Europe/London')
      });
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  const timeZones = [
    { city: 'Mumbai HQ', country: 'India 🇮🇳', time: times.mumbai, zone: 'IST' },
    { city: 'New York', country: 'USA 🇺🇸', time: times.newyork, zone: 'EST' },
    { city: 'Dubai', country: 'UAE 🇦🇪', time: times.dubai, zone: 'GST' },
    { city: 'London', country: 'UK 🇬🇧', time: times.london, zone: 'GMT' },
  ];

  const ecosystemItems = [
    { name: "Amazon US & UAE", icon: "/assets/frontend-assets/images/services-icons/amazon-shopping-svgrepo-com.svg" },
    { name: "Flipkart", icon: "/assets/frontend-assets/images/services-icons/flipkart-svgrepo-com.svg" },
    { name: "Shopify Plus", icon: "/assets/frontend-assets/images/services-icons/shopify-svgrepo-com.svg" },
    { name: "Meesho", icon: "/assets/frontend-assets/images/services-icons/meesho-svgrepo-com.svg" },
    { name: "Myntra", icon: "/assets/frontend-assets/images/services-icons/myntra-svgrepo-com.svg" },
    { name: "React & Next.js", icon: "/assets/frontend-assets/images/services-icons/react-16-svgrepo-com.svg" },
    { name: "Flutter Mobile", icon: "/assets/frontend-assets/images/services-icons/flutter-svgrepo-com.svg" },
    { name: "Node.js Engine", icon: "/assets/frontend-assets/images/services-icons/nodejs02-svgrepo-com.svg" },
    { name: "Laravel Cloud", icon: "/assets/frontend-assets/images/services-icons/laravel-svgrepo-com.svg" },
    { name: "Google Growth & Ads", icon: "/assets/frontend-assets/images/services-icons/google-ads-svgrepo-com.svg" },
    { name: "UI/UX & Figma", icon: "/assets/frontend-assets/images/services-icons/figma-svgrepo-com.svg" },
    { name: "AI Automations", icon: "/assets/frontend-assets/images/services-icons/ai-svgrepo-com.svg" },
  ];

  return (
    <section id="clients" className="py-12 border-y border-black/5 dark:border-white/[0.06] bg-black/[0.02] dark:bg-[#0E0E14]/60 relative overflow-hidden">
      
      {/* Top Section: Header, Flags & Live World Clocks */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-6 border-b border-black/5 dark:border-white/5">
          
          {/* Title & Description */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              <p className="text-xs font-bold uppercase tracking-widest text-[#E51A4B]">
                Global Reach & 24/7 Engineering Operations
              </p>
            </div>
            <h3 className="text-xs sm:text-sm font-medium text-[var(--text-muted)]">
              Serving enterprise brands across 4 continents with &lt; 15 min response time.
            </h3>
          </div>
          
          {/* Live World Clocks */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full lg:w-auto">
            {timeZones.map((tz, idx) => (
              <div
                key={idx}
                className="p-2 sm:p-2.5 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 text-center min-w-[110px] sm:min-w-[125px] hover:border-[#E51A4B]/40 transition-all shadow-sm"
              >
                <div className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-wider">
                  {tz.country}
                </div>
                <div className="text-xs sm:text-sm font-mono font-extrabold text-[var(--text-main)] mt-0.5 tracking-tight">
                  {tz.time || '--:--:--'}
                </div>
                <div className="text-[9px] font-mono text-[#E51A4B] dark:text-[#E2EC07] font-semibold">
                  {tz.city} ({tz.zone})
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Sub-bar: Serving Worldwide Pill */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 text-center sm:text-left">
          <div className="text-xs font-semibold text-[var(--text-main)]">
            Supported Channels & Framework Ecosystem:
          </div>

          <div className="flex items-center gap-2 bg-black/[0.03] dark:bg-white/[0.04] px-4 py-1.5 rounded-full border border-black/10 dark:border-white/5 shadow-sm">
            {CLIENT_LOCATIONS.map((loc, i) => (
              <span key={i} title={loc.country} className="text-sm cursor-default hover:scale-125 transition-transform duration-200">
                {loc.flag}
              </span>
            ))}
            <span className="text-[11px] text-[var(--text-muted)] font-medium pl-1">Serving Worldwide</span>
          </div>
        </div>
      </div>

      {/* Infinite scrolling ticker with High-Contrast Dark/Light Aware SVGs */}
      <div className="relative flex overflow-x-hidden marquee-container">
        <div className="flex gap-4 py-2 animate-scroll-ticker whitespace-nowrap">
          {[...ecosystemItems, ...ecosystemItems].map((item, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white dark:bg-white/[0.04] border border-black/10 dark:border-white/[0.08] text-[var(--text-main)] font-bold text-xs sm:text-sm hover:border-[#E51A4B]/40 hover:-translate-y-0.5 transition-all duration-200 cursor-default shadow-sm group"
            >
              {/* High-Contrast SVG Icon Container */}
              <div className="w-7 h-7 rounded-xl bg-black/[0.05] dark:bg-white/[0.08] border border-black/10 dark:border-white/10 flex items-center justify-center p-1.5 shrink-0 group-hover:scale-110 transition-transform">
                <img 
                  src={item.icon} 
                  alt={item.name} 
                  className="w-full h-full object-contain filter brightness-0 opacity-85 dark:brightness-100 dark:opacity-100 dark:invert-0"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <span className="tracking-tight">{item.name}</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
