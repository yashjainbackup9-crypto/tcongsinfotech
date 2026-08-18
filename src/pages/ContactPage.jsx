import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  PhoneCall, 
  MapPin, 
  Clock, 
  Globe2, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles,
  MessageSquare
} from 'lucide-react';
import { ContactSection } from '../components/ContactSection';
import { ScrollReveal } from '../components/ScrollReveal';

export const ContactPage = ({ onOpenConsultation, estimatorPrefill }) => {
  return (
    <div className="pt-24 sm:pt-28 pb-16 min-h-screen bg-[var(--bg-page)] text-[var(--text-main)] transition-colors duration-400 font-sans text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[var(--text-muted)] mb-8">
          <Link to="/" className="hover:text-[#E51A4B] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[var(--text-main)] font-semibold">Contact &amp; Discovery Lab</span>
        </div>

        {/* Header */}
        <ScrollReveal animation="fade-up">
          <div className="max-w-4xl mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E51A4B]/10 border border-[#E51A4B]/20 text-[#E51A4B] dark:text-[#E2EC07] text-xs font-semibold uppercase tracking-wider mb-4">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>24/7 Global Dispatch</span>
            </div>
            
            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[var(--text-main)] leading-[1.1]">
              Let’s Engineer Your Next <br />
              <span className="accent-gradient-text">Breakthrough Platform.</span>
            </h1>
            
            <p className="text-sm sm:text-base text-[var(--text-muted)] mt-4 leading-relaxed max-w-3xl">
              Reach out directly to our engineering architects in Mumbai. We respond within 15 minutes during active shift hours with clear technical roadmaps and scope estimates.
            </p>
          </div>
        </ScrollReveal>

        {/* Global Hubs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          <div className="glass-panel p-6 rounded-3xl border border-black/10 dark:border-white/10">
            <div className="text-xs font-mono font-bold text-[#E51A4B] dark:text-[#E2EC07] uppercase">
              Global HQ 🇮🇳
            </div>
            <h3 className="text-lg font-bold text-[var(--text-main)] mt-1">Mumbai Office</h3>
            <p className="text-xs text-[var(--text-muted)] mt-1.5 leading-relaxed">
              Mumbai, Maharashtra, India. Central hub for engineering &amp; architecture.
            </p>
            <div className="text-xs font-mono font-bold text-[var(--text-main)] mt-4">
              +91 (022) 8920-4100
            </div>
          </div>

          <div className="glass-panel p-6 rounded-3xl border border-black/10 dark:border-white/10">
            <div className="text-xs font-mono font-bold text-sky-500 uppercase">
              North America 🇺🇸
            </div>
            <h3 className="text-lg font-bold text-[var(--text-main)] mt-1">New York &amp; SF</h3>
            <p className="text-xs text-[var(--text-muted)] mt-1.5 leading-relaxed">
              Serving enterprise FinTech &amp; HealthTech clients across EST &amp; PST timezones.
            </p>
            <div className="text-xs font-mono font-bold text-[var(--text-main)] mt-4">
              us@tcongsinfotech.com
            </div>
          </div>

          <div className="glass-panel p-6 rounded-3xl border border-black/10 dark:border-white/10">
            <div className="text-xs font-mono font-bold text-emerald-500 uppercase">
              Middle East 🇦🇪
            </div>
            <h3 className="text-lg font-bold text-[var(--text-main)] mt-1">Dubai Hub</h3>
            <p className="text-xs text-[var(--text-muted)] mt-1.5 leading-relaxed">
              Supporting commerce and AI automation clients across the GCC region.
            </p>
            <div className="text-xs font-mono font-bold text-[var(--text-main)] mt-4">
              uae@tcongsinfotech.com
            </div>
          </div>

          <div className="glass-panel p-6 rounded-3xl border border-black/10 dark:border-white/10">
            <div className="text-xs font-mono font-bold text-purple-500 uppercase">
              Europe 🇬🇧
            </div>
            <h3 className="text-lg font-bold text-[var(--text-main)] mt-1">London Desk</h3>
            <p className="text-xs text-[var(--text-muted)] mt-1.5 leading-relaxed">
              Dedicated GMT shift coverage for UK and European technology partners.
            </p>
            <div className="text-xs font-mono font-bold text-[var(--text-main)] mt-4">
              uk@tcongsinfotech.com
            </div>
          </div>

        </div>

        {/* Contact Form Component */}
        <div className="mb-12">
          <ContactSection prefillData={estimatorPrefill} />
        </div>

      </div>
    </div>
  );
};
