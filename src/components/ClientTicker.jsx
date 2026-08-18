import React from 'react';
import { Globe2, Shield } from 'lucide-react';
import { CLIENT_LOCATIONS } from '../data/content';

export const ClientTicker = () => {
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
    <div className="py-12 border-y border-black/5 dark:border-white/[0.06] bg-black/[0.02] dark:bg-[#0E0E14]/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#E51A4B]">
              Global Reach & Platform Ecosystems
            </p>
            <h3 className="text-sm font-medium text-[var(--text-muted)] mt-1">
              Powering businesses, e-commerce stores, and cloud applications across top digital channels
            </h3>
          </div>
          
          {/* Countries flags pill */}
          <div className="flex items-center gap-3 bg-black/[0.03] dark:bg-white/[0.04] px-4 py-2 rounded-full border border-black/10 dark:border-white/5">
            {CLIENT_LOCATIONS.map((loc, i) => (
              <span key={i} title={loc.country} className="text-base cursor-default hover:scale-125 transition-transform">
                {loc.flag}
              </span>
            ))}
            <span className="text-xs text-[var(--text-muted)] font-medium pl-1">Serving Worldwide</span>
          </div>
        </div>
      </div>

      {/* Infinite scrolling ticker with real SVGs */}
      <div className="relative flex overflow-x-hidden group">
        <div className="flex gap-6 py-2 animate-[scroll_30s_linear_infinite] whitespace-nowrap">
          {[...ecosystemItems, ...ecosystemItems].map((item, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-black/[0.03] dark:bg-white/[0.03] border border-black/10 dark:border-white/[0.06] text-[var(--text-main)] font-semibold text-xs sm:text-sm hover:border-[#E51A4B]/40 hover:scale-105 transition-all cursor-default shadow-sm"
            >
              <img 
                src={item.icon} 
                alt={item.name} 
                className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
