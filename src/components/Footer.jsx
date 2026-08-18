import React, { useState } from 'react';
import { ArrowRight, Mail, MapPin, Heart, Shield, Check, Globe } from 'lucide-react';
import { SERVICES } from '../data/content';

export const Footer = ({ onOpenConsultation }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="bg-black/95 dark:bg-[#050507] border-t border-black/10 dark:border-white/[0.08] text-slate-400 text-xs pt-16 pb-12 relative overflow-hidden text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-black/10 dark:border-white/[0.06]">
          
          {/* Col 1: Brand & Mission with Official SVG Logo */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <a href="#" className="flex items-center gap-3 mb-4 group">
                <img 
                  src="/assets/frontend-assets/images/svgs/logo.svg" 
                  alt="Tcongs Infotech Logo" 
                  className="h-9 sm:h-10 w-auto object-contain brightness-105 group-hover:scale-105 transition-transform"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.nextElementSibling;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <div className="hidden items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#E51A4B] to-[#FF4D79] flex items-center justify-center text-white font-black text-xl shadow-lg shadow-[#E51A4B]/20">
                    T
                  </div>
                  <span className="font-bold text-lg tracking-tight text-white">
                    tcongs <span className="text-[#E51A4B] font-light">infotech</span>
                  </span>
                </div>
              </a>

              <p className="text-slate-300 text-xs leading-relaxed mb-6 max-w-sm">
                Empowering global brands with 8+ years of expertise in custom web & mobile engineering, enterprise software, e-commerce marketplace optimization, and Generative Engine Optimization (GEO).
              </p>

              <div className="flex items-center gap-2 text-[11px] text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-[#E51A4B] shrink-0" />
                <span>Mumbai HQ, Maharashtra, India • Serving Clients Globally</span>
              </div>
            </div>

            <div className="mt-8">
              <button
                onClick={onOpenConsultation}
                className="px-5 py-2.5 rounded-full bg-white/[0.08] hover:bg-[#E51A4B] text-white font-semibold transition-all border border-white/10 hover:border-[#E51A4B] text-xs flex items-center gap-2 hover:scale-105"
              >
                <span>Schedule Free 30-Min Call 🚀</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Col 2: Services Quick Directory */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-4">
              Specialized Solutions
            </h4>
            <ul className="space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-[#E51A4B] transition-colors line-clamp-1">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company & Growth */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              <li><a href="#services" className="hover:text-white transition-colors">Services Directory</a></li>
              <li><a href="#tech-stack" className="hover:text-white transition-colors">Tech Matrix</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">6-Step Framework</a></li>
              <li><a href="#case-studies" className="hover:text-white transition-colors">Client Case Studies</a></li>
              <li><a href="#estimator" className="hover:text-white transition-colors">Project Cost Estimator</a></li>
              <li><a href="#faqs" className="hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Technical Team</a></li>
            </ul>
          </div>

          {/* Col 4: Newsletter & Direct Updates */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-4">
              Tech & Growth Insights
            </h4>
            <p className="text-slate-400 text-xs mb-4">
              Subscribe to get monthly case studies on digital engineering, AI automations, and marketplace tactics.
            </p>

            {subscribed ? (
              <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs flex items-center gap-2">
                <Check className="w-4 h-4 shrink-0" />
                <span>Thank you! You're subscribed.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
                <div className="relative">
                  <Mail className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 rounded-xl bg-white/[0.06] border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#E51A4B]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2 rounded-xl bg-[#E51A4B] hover:bg-[#D01540] text-white font-semibold text-xs transition-colors hover:scale-[1.02]"
                >
                  Join Insights
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Bar: Copyright & Terms */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} Tcongs Infotech. All Rights Reserved. Mumbai Office: Serving clients worldwide across USA, Canada, UAE & India.
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-300">Terms of Engagement</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-300">Security & Compliance</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
