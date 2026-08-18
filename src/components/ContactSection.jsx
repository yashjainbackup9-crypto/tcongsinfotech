import React, { useState } from 'react';
import { Send, CheckCircle2, Mail, MapPin, Phone, ShieldCheck, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { ScrollReveal } from './ScrollReveal';

export const ContactSection = ({ prefillData }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: prefillData?.project || 'Web & Mobile App Development',
    budget: prefillData?.budget || '$2,500 - $5,000',
    message: '',
    verified: false
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.verified) {
      alert("Please complete the human verification checkbox.");
      return;
    }
    
    // Trigger celebratory confetti
    confetti({
      particleCount: 90,
      spread: 75,
      origin: { y: 0.6 }
    });

    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 border-t border-black/5 dark:border-white/[0.06] bg-black/[0.02] dark:bg-[#08080B] relative overflow-hidden">
      
      {/* Glow */}
      <div className="ambient-glow w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-[#E51A4B]/10 -right-20 bottom-10 animate-pulse-glow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start text-left">
          
          {/* Left Column: Contact Value Prop & Office Info */}
          <div className="lg:col-span-5 flex flex-col justify-between w-full">
            <ScrollReveal animation="fade-right" duration={700}>
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E51A4B]/10 border border-[#E51A4B]/20 text-[#E51A4B] text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-3 sm:mb-4">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Let’s Build Together</span>
                </div>

                <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-main)] tracking-tight leading-tight mb-4 sm:mb-6">
                  Let’s Build Something You’ll Be <span className="primary-gradient-text">Proud Of.</span>
                </h2>

                <p className="text-[var(--text-muted)] text-xs sm:text-sm md:text-base leading-relaxed mb-6 sm:mb-8">
                  Whether you’re scaling an existing software application, launching a flagship e-commerce marketplace, or building an MVP from scratch — our engineering team is ready.
                </p>

                {/* Guarantees */}
                <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-10 text-xs sm:text-sm text-[var(--text-muted)]">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <span>Response from lead technical architect within 24 hours</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <span>Transparent fixed-price or sprint-based proposals</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <span>Strict mutual non-disclosure & IP protection</span>
                  </div>
                </div>
              </div>

              {/* Direct Contact Cards */}
              <div className="space-y-2.5 sm:space-y-3 pt-5 sm:pt-6 border-t border-black/10 dark:border-white/10">
                <a 
                  href="mailto:info@tcongsinfotech.com" 
                  className="flex items-center gap-3 p-3.5 sm:p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 hover:border-black/20 dark:hover:border-white/20 transition-all text-xs text-[var(--text-muted)] group"
                >
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#E51A4B]/10 text-[#E51A4B] flex items-center justify-center shrink-0 group-hover:bg-[#E51A4B] group-hover:text-white transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[var(--text-subtle)] text-[9px] sm:text-[10px] uppercase font-bold">Direct Email</div>
                    <div className="font-semibold text-[var(--text-main)] text-xs sm:text-sm">info@tcongsinfotech.com</div>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3.5 sm:p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 text-xs text-[var(--text-muted)]">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#E51A4B]/10 dark:bg-[#E2EC07]/10 text-[#E51A4B] dark:text-[#E2EC07] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[var(--text-subtle)] text-[9px] sm:text-[10px] uppercase font-bold">Global Headquarters</div>
                    <div className="font-semibold text-[var(--text-main)] text-xs sm:text-sm">Mumbai, Maharashtra, India</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 w-full">
            <ScrollReveal animation="fade-left" duration={700}>
              <div className="glass-panel p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border border-black/10 dark:border-white/15 shadow-2xl relative">
                
                {submitted ? (
                  <div className="py-12 sm:py-16 text-center animate-in zoom-in-95 duration-300">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-500/20 text-emerald-500 dark:text-emerald-400 mx-auto flex items-center justify-center mb-5 sm:mb-6 shadow-lg shadow-emerald-500/20">
                      <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10" />
                    </div>
                    <h3 className="text-xl sm:text-3xl font-extrabold text-[var(--text-main)] mb-2">Inquiry Received! 🚀</h3>
                    <p className="text-[var(--text-muted)] text-xs sm:text-sm max-w-md mx-auto mb-6 sm:mb-8 leading-relaxed">
                      Thank you for reaching out to Tcongs Infotech. One of our senior technical leads will review your requirements and reach out within 1 business day.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-full bg-black/[0.04] dark:bg-white/[0.05] border border-black/10 dark:border-white/10 text-xs font-semibold text-[var(--text-main)] hover:bg-[#E51A4B] hover:text-white transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                      <div>
                        <label className="block text-[11px] sm:text-xs font-bold text-[var(--text-main)] uppercase tracking-wider mb-1.5 sm:mb-2">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Alex Morgan"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-3.5 py-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 text-base sm:text-sm text-[var(--text-main)] placeholder-[var(--text-subtle)] focus:outline-none focus:border-[#E51A4B] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] sm:text-xs font-bold text-[var(--text-main)] uppercase tracking-wider mb-1.5 sm:mb-2">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="alex@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-3.5 py-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 text-base sm:text-sm text-[var(--text-main)] placeholder-[var(--text-subtle)] focus:outline-none focus:border-[#E51A4B] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                      <div>
                        <label className="block text-[11px] sm:text-xs font-bold text-[var(--text-main)] uppercase tracking-wider mb-1.5 sm:mb-2">
                          Phone / WhatsApp (Optional)
                        </label>
                        <input
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-3.5 py-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 text-base sm:text-sm text-[var(--text-main)] placeholder-[var(--text-subtle)] focus:outline-none focus:border-[#E51A4B] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] sm:text-xs font-bold text-[var(--text-main)] uppercase tracking-wider mb-1.5 sm:mb-2">
                          Primary Service Needed
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-3.5 py-3 rounded-xl bg-white dark:bg-[#14141C] border border-black/10 dark:border-white/10 text-base sm:text-sm text-[var(--text-main)] focus:outline-none focus:border-[#E51A4B] transition-colors"
                        >
                          <option value="Web & Mobile App Development">Web & Mobile App Development</option>
                          <option value="Custom SaaS & Enterprise Software">Custom SaaS & Enterprise Software</option>
                          <option value="E-Commerce & Marketplace Management">E-Commerce & Marketplace Management</option>
                          <option value="Branding & UI/UX Design">Branding & UI/UX Design</option>
                          <option value="Performance Marketing & GEO">Performance Marketing & GEO</option>
                          <option value="Startup MVP & Consulting">Startup MVP & Consulting</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] sm:text-xs font-bold text-[var(--text-main)] uppercase tracking-wider mb-1.5 sm:mb-2">
                        Estimated Budget Range
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {['< $2,500', '$2,500 - $5k', '$5k - $15k', '$15k+'].map((b) => (
                          <button
                            type="button"
                            key={b}
                            onClick={() => setFormData({ ...formData, budget: b })}
                            className={`py-2 sm:py-2.5 px-2 text-xs font-semibold rounded-lg border transition-all active:scale-[0.98] ${
                              formData.budget === b
                                ? 'bg-[#E51A4B] border-[#E51A4B] text-white shadow-md'
                                : 'bg-black/[0.02] dark:bg-white/[0.03] border-black/5 dark:border-white/5 text-[var(--text-muted)] hover:bg-black/[0.05] dark:hover:bg-white/[0.06]'
                            }`}
                          >
                            {b}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] sm:text-xs font-bold text-[var(--text-main)] uppercase tracking-wider mb-1.5 sm:mb-2">
                        Tell Us About Your Project & Goals *
                      </label>
                      <textarea
                        rows={3}
                        required
                        placeholder="Briefly describe your vision, timeline, or current challenges..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-3.5 py-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 text-base sm:text-sm text-[var(--text-main)] placeholder-[var(--text-subtle)] focus:outline-none focus:border-[#E51A4B] transition-colors"
                      ></textarea>
                    </div>

                    {/* Human Verification */}
                    <div className="p-3 sm:p-4 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 flex items-start sm:items-center gap-2.5 sm:gap-3">
                      <input
                        type="checkbox"
                        id="verify"
                        checked={formData.verified}
                        onChange={(e) => setFormData({ ...formData, verified: e.target.checked })}
                        className="w-4 h-4 mt-0.5 sm:mt-0 rounded text-[#E51A4B] focus:ring-[#E51A4B] bg-transparent border-black/20 dark:border-white/20 shrink-0"
                      />
                      <label htmlFor="verify" className="text-[11px] sm:text-xs text-[var(--text-muted)] cursor-pointer">
                        I am a human exploring custom digital engineering services for my business.
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#E51A4B] via-[#E82C5A] to-[#D01540] text-white font-bold text-sm sm:text-base shadow-xl shadow-[#E51A4B]/30 hover:shadow-[#E51A4B]/50 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
                    >
                      <span>Submit Inquiry & Get Custom Proposal 🚀</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                    </button>

                    <p className="text-[10px] sm:text-[11px] text-[var(--text-muted)] text-center">
                      🔒 We respect your privacy. No spam. 100% confidential.
                    </p>

                  </form>
                )}

              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
};
