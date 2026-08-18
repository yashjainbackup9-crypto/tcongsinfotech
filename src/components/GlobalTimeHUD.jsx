import React, { useState, useEffect } from 'react';
import { Globe, Clock, ShieldCheck, Zap, PhoneCall } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const GlobalTimeHUD = ({ onOpenConsultation }) => {
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

  return (
    <div className="py-8 border-y border-black/5 dark:border-white/[0.06] bg-black/[0.02] dark:bg-[#0E0E14]/70 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          
          {/* Left: Global Availability Badge */}
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 flex items-center justify-center shrink-0">
              <Globe className="w-5 h-5 animate-spin-slow" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                <span className="text-xs font-bold text-[var(--text-main)] uppercase tracking-wider">
                  24/7 Global Engineering Operations
                </span>
              </div>
              <p className="text-[11px] text-[var(--text-muted)] mt-0.5">
                Multi-timezone teams serving enterprise clients across 4 continents with &lt; 15 min response time.
              </p>
            </div>
          </div>

          {/* Right: Live World Clocks Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 w-full lg:w-auto">
            {timeZones.map((tz, idx) => (
              <div
                key={idx}
                className="glass-panel p-2.5 sm:p-3 rounded-2xl border border-black/5 dark:border-white/5 text-center min-w-[120px] sm:min-w-[135px] hover:border-[#E51A4B]/30 hover:scale-105 transition-all duration-200"
              >
                <div className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-wider flex items-center justify-center gap-1">
                  <span>{tz.country}</span>
                </div>
                <div className="text-xs sm:text-sm font-mono font-black text-[var(--text-main)] mt-0.5">
                  {tz.time || '--:--:--'}
                </div>
                <div className="text-[9px] font-mono text-[#E51A4B] dark:text-[#E2EC07] font-semibold">
                  {tz.city} ({tz.zone})
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
};
