import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Terminal, 
  ShieldCheck, 
  Zap, 
  Trophy, 
  Users, 
  MapPin, 
  ArrowRight, 
  CheckCircle2, 
  Flame, 
  Globe2, 
  Heart 
} from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';
import { TEAM_MEMBERS, MILESTONES, STATS } from '../data/content';

export const AboutPage = ({ onOpenConsultation }) => {
  return (
    <div className="pt-24 sm:pt-28 pb-16 min-h-screen bg-[var(--bg-page)] text-[var(--text-main)] transition-colors duration-400 font-sans text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[var(--text-muted)] mb-8">
          <Link to="/" className="hover:text-[#E51A4B] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[var(--text-main)] font-semibold">About Tcongs</span>
        </div>

        {/* Hero Section */}
        <ScrollReveal animation="fade-up">
          <div className="max-w-4xl mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E51A4B]/10 border border-[#E51A4B]/20 text-[#E51A4B] dark:text-[#E2EC07] text-xs font-semibold uppercase tracking-wider mb-4">
              <Flame className="w-3.5 h-3.5" />
              <span>Not Your Grandfather's Agency</span>
            </div>
            
            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[var(--text-main)] leading-[1.1]">
              We don’t build 2014 websites. <br />
              <span className="accent-gradient-text">We engineer digital Ferraris.</span>
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg text-[var(--text-muted)] mt-6 leading-relaxed max-w-3xl">
              Born in Mumbai and serving clients across San Francisco, Dubai, Toronto, and London. We are a software engineering powerhouse founded on a simple premise: <strong>Zero fluff, 100% velocity, and high-converting code.</strong>
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3.5 rounded-full bg-gradient-to-r from-[#E51A4B] to-[#D01540] text-white text-xs sm:text-sm font-bold shadow-xl shadow-[#E51A4B]/30 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
              >
                <span>Book 30-Min Discovery Call</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                to="/case-studies"
                className="px-6 py-3.5 rounded-full bg-black/[0.04] dark:bg-white/[0.06] border border-black/10 dark:border-white/10 text-[var(--text-main)] text-xs sm:text-sm font-bold hover:border-[#E51A4B]/40 transition-all flex items-center gap-2"
              >
                <span>View Our Client Proof</span>
              </Link>
            </div>
          </div>
        </ScrollReveal>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-20">
          {STATS.map((s, idx) => (
            <div key={idx} className="glass-panel p-6 rounded-3xl border border-black/10 dark:border-white/10 text-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#E51A4B] dark:text-[#E2EC07] font-mono tracking-tight">
                {s.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-[var(--text-main)] mt-2">
                {s.label}
              </div>
              <p className="text-[11px] text-[var(--text-muted)] mt-1">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Origin Story & Core Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-20 items-center">
          <div className="lg:col-span-6">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E51A4B]">
              The Tcongs Origin
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--text-main)] mt-2 tracking-tight">
              Why We Rejected the Traditional Agency Model
            </h2>
            
            <div className="space-y-4 text-xs sm:text-sm text-[var(--text-muted)] mt-4 leading-relaxed">
              <p>
                Traditional agencies love 80-page PowerPoint discovery decks, billable hours that drag on for months, and dragging out project delivery.
              </p>
              <p>
                We built Tcongs Infotech to be the antidote. We treat every client engagement as a high-velocity product sprint. You work directly with senior architects and engineers—no account managers playing telephone, no bloated templates, and no excuses.
              </p>
              <p>
                Whether it's scaling an e-commerce brand to handle $18M in Black Friday traffic or building a HIPAA-compliant telemedicine platform with 0.2s latency, we obsess over every millisecond and every pixel.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 pt-4 border-t border-black/10 dark:border-white/10">
              <div className="flex items-center gap-2 text-xs font-semibold text-[var(--text-main)]">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>100% IP & Source Code Transfer</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[var(--text-main)]">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Bi-Weekly Live Demo Sprints</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[var(--text-main)]">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>99/100 Certified Lighthouse Speeds</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[var(--text-main)]">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>24/7 Global Engineering Dispatch</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-black/10 dark:border-white/10 relative overflow-hidden bg-black/[0.02] dark:bg-[#0E0E14]">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-black/5 dark:border-white/5">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-[11px] font-mono text-[var(--text-muted)] ml-2">manifesto.ts</span>
                </div>
                <span className="text-[10px] font-mono text-[#E51A4B] font-bold">RAW_TRUTH</span>
              </div>

              <pre className="text-xs font-mono text-[var(--text-main)] overflow-x-auto leading-relaxed">
{`const tcongsPhilosophy = {
  rule1: "Speed is a feature, not an afterthought.",
  rule2: "No bloated CMS themes. Clean React 19.",
  rule3: "Ship early, test continuously, deploy on Edge.",
  rule4: "The client owns 100% of their IP from Day 1.",
  guarantee: "99/100 Lighthouse + 99.99% Uptime SLA",
  caffeineStatus: "100% Operational ☕"
};`}
              </pre>
            </div>
          </div>
        </div>

        {/* Milestone Timeline */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E51A4B]">
              Proven Track Record
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-main)] mt-2">
              Our Journey from Mumbai to Global Enterprise
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {MILESTONES.map((m, idx) => (
              <div key={idx} className="glass-panel p-6 rounded-3xl border border-black/10 dark:border-white/10 relative">
                <span className="text-2xl font-black font-mono text-[#E51A4B] dark:text-[#E2EC07] block mb-2">
                  {m.year}
                </span>
                <h4 className="text-sm font-bold text-[var(--text-main)] mb-1">
                  {m.title}
                </h4>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership & Engineering Squad */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E51A4B]">
              Senior Engineering Core
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-main)] mt-2">
              Meet the Architects Behind Your Next Platform
            </h2>
            <p className="text-xs text-[var(--text-muted)] mt-2">
              No interns writing your production code. Only senior specialists who have built and scaled systems at global standards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM_MEMBERS.map((member, idx) => (
              <div key={idx} className="glass-panel p-6 rounded-3xl border border-black/10 dark:border-white/10 hover:border-[#E51A4B]/40 hover:-translate-y-1 transition-all group">
                <div className="w-16 h-16 rounded-2xl overflow-hidden mb-4 border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                </div>
                <h4 className="text-base font-bold text-[var(--text-main)]">
                  {member.name}
                </h4>
                <p className="text-xs font-semibold text-[#E51A4B] dark:text-[#E2EC07] mt-0.5">
                  {member.role}
                </p>
                <div className="text-[11px] font-mono text-[var(--text-muted)] mt-2">
                  Specialty: {member.specialty}
                </div>
                <p className="text-xs text-[var(--text-muted)] mt-2 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Ready to Build Callout */}
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-black/10 dark:border-white/10 text-center relative overflow-hidden bg-gradient-to-b from-black/[0.01] to-black/[0.04] dark:from-white/[0.02] dark:to-transparent">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            <span>Accepting Q3 / Q4 Digital Engineering Projects</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--text-main)]">
            Ready to Build Something Phenomenal?
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-muted)] max-w-xl mx-auto mt-3 mb-8">
            Schedule a free 30-minute architecture discovery session. We’ll analyze your requirements, review tech feasibility, and deliver a scope estimate within 24 hours.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#E51A4B] to-[#D01540] text-white font-bold text-xs sm:text-sm shadow-xl shadow-[#E51A4B]/30 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
            >
              <span>Schedule 30-Min Consultation 🚀</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <Link
              to="/pricing"
              className="px-8 py-3.5 rounded-full bg-black/[0.04] dark:bg-white/[0.06] border border-black/10 dark:border-white/10 text-[var(--text-main)] font-bold text-xs sm:text-sm hover:border-[#E51A4B]/40 transition-all"
            >
              <span>Calculate Project Cost</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
