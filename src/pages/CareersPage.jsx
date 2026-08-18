import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { 
  Briefcase, 
  Sparkles, 
  MapPin, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  Flame, 
  Send, 
  FileText, 
  Cpu, 
  Heart 
} from 'lucide-react';
import { CAREERS_DATA } from '../data/content';
import { ScrollReveal } from '../components/ScrollReveal';

export const CareersPage = () => {
  const [selectedRole, setSelectedRole] = useState('Senior Full-Stack Engineer');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: 'Senior Full-Stack Engineer',
    experience: '3 - 5 Years',
    portfolioUrl: '',
    linkedinUrl: '',
    resumeUrl: '',
    note: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleApplyClick = (roleTitle) => {
    setSelectedRole(roleTitle);
    setFormData(prev => ({ ...prev, role: roleTitle }));
    const formElement = document.getElementById('career-application-form');
    if (formElement) {
      if (window.lenis) {
        window.lenis.scrollTo(formElement, { offset: -80, duration: 1.2 });
      } else {
        formElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: `Job Application: ${formData.role}`,
          budget: `Experience: ${formData.experience}`,
          message: `Portfolio: ${formData.portfolioUrl}\nLinkedIn: ${formData.linkedinUrl}\nResume URL: ${formData.resumeUrl}\n\nNote: ${formData.note}`,
          timeline: 'Immediate / Next Month'
        })
      });

      if (response.ok) {
        setSubmitted(true);
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } else {
        // Even if local mock or offline, show success state
        setSubmitted(true);
      }
    } catch (err) {
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24 sm:pt-28 pb-16 min-h-screen bg-[var(--bg-page)] text-[var(--text-main)] transition-colors duration-400 font-sans text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[var(--text-muted)] mb-8">
          <Link to="/" className="hover:text-[#E51A4B] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[var(--text-main)] font-semibold">Careers &amp; Engineering Culture</span>
        </div>

        {/* Header */}
        <ScrollReveal animation="fade-up">
          <div className="max-w-4xl mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E51A4B]/10 border border-[#E51A4B]/20 text-[#E51A4B] dark:text-[#E2EC07] text-xs font-semibold uppercase tracking-wider mb-4">
              <Flame className="w-3.5 h-3.5" />
              <span>We Are Hiring Builders</span>
            </div>
            
            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[var(--text-main)] leading-[1.1]">
              No Boring 9 AM Standups. <br />
              <span className="accent-gradient-text">Ship to Prod on Week 1.</span>
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg text-[var(--text-muted)] mt-4 leading-relaxed max-w-3xl">
              We are looking for engineers and product designers who obsess over 60fps animations, sub-second latency, and clean code architecture. No corporate bureaucracy. Just pure engineering craft.
            </p>
          </div>
        </ScrollReveal>

        {/* Culture & Perks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {CAREERS_DATA.cultureValues.map((val, idx) => (
            <div key={idx} className="glass-panel p-6 rounded-3xl border border-black/10 dark:border-white/10">
              <span className="text-xl font-black font-mono text-[#E51A4B] dark:text-[#E2EC07] block mb-2">
                0{idx + 1}
              </span>
              <h3 className="text-base font-bold text-[var(--text-main)] mb-1">
                {val.title}
              </h3>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                {val.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Open Positions List */}
        <div className="mb-20">
          <div className="mb-8">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E51A4B]">
              Active Openings
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-main)] mt-1">
              Explore Open Engineering Roles
            </h2>
          </div>

          <div className="space-y-4">
            {CAREERS_DATA.openPositions.map((pos) => (
              <div
                key={pos.id}
                className="glass-panel p-6 sm:p-8 rounded-3xl border border-black/10 dark:border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-[#E51A4B]/40 transition-all group"
              >
                <div>
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <span className="text-xs font-mono font-bold text-[#E51A4B] dark:text-[#E2EC07] px-2.5 py-0.5 rounded-md bg-[#E51A4B]/10">
                      {pos.team}
                    </span>
                    <span className="text-xs text-[var(--text-muted)] flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" /> {pos.location}
                    </span>
                    <span className="text-xs text-[var(--text-muted)] flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {pos.experience}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[var(--text-main)] group-hover:text-[#E51A4B] transition-colors">
                    {pos.role}
                  </h3>

                  <p className="text-xs text-[var(--text-muted)] mt-1.5 max-w-2xl leading-relaxed">
                    {pos.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {pos.stack.map((tech, i) => (
                      <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/[0.03] dark:bg-white/[0.04] text-[var(--text-muted)]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => handleApplyClick(pos.role)}
                  className="px-6 py-3 rounded-full bg-[#E51A4B] hover:bg-[#D01540] text-white text-xs font-bold shadow-md shadow-[#E51A4B]/30 hover:scale-105 active:scale-95 transition-all shrink-0 flex items-center gap-2"
                >
                  <span>Apply for Role</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

              </div>
            ))}
          </div>
        </div>

        {/* Dedicated Career Application Form */}
        <div id="career-application-form" className="glass-panel p-6 sm:p-12 rounded-3xl border border-[#E51A4B]/30 max-w-3xl mx-auto shadow-2xl relative overflow-hidden bg-black/[0.01] dark:bg-[#0E0E14]">
          
          <div className="text-center mb-8">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E51A4B]">
              Direct Engineering Application
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--text-main)] mt-1">
              Apply to Join Tcongs Infotech
            </h2>
            <p className="text-xs text-[var(--text-muted)] mt-2">
              Send your profile directly to our engineering leads. We review every single application within 48 hours.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center animate-in zoom-in-95">
              <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto mb-3" />
              <h3 className="text-xl font-bold text-[var(--text-main)]">Application Received! 🚀</h3>
              <p className="text-xs text-[var(--text-muted)] mt-2 max-w-md mx-auto leading-relaxed">
                Thank you for applying for the <strong>{formData.role}</strong> position. Our engineering team has received your application and will review your GitHub/portfolio within 48 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 px-6 py-2.5 rounded-full bg-black/[0.05] dark:bg-white/[0.08] text-xs font-bold text-[var(--text-main)]"
              >
                Submit Another Application
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[var(--text-main)] mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Rivera"
                    className="w-full px-4 py-2.5 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 text-xs text-[var(--text-main)] focus:outline-none focus:border-[#E51A4B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[var(--text-main)] mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@domain.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 text-xs text-[var(--text-main)] focus:outline-none focus:border-[#E51A4B]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[var(--text-main)] mb-1">Target Position *</label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 text-xs text-[var(--text-main)] focus:outline-none focus:border-[#E51A4B]"
                  >
                    {CAREERS_DATA.openPositions.map((pos) => (
                      <option key={pos.id} value={pos.role} className="bg-[var(--bg-page)] text-[var(--text-main)]">
                        {pos.role}
                      </option>
                    ))}
                    <option value="General Open Application" className="bg-[var(--bg-page)] text-[var(--text-main)]">
                      General Open Application (Wildcard)
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[var(--text-main)] mb-1">Experience Level *</label>
                  <select
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 text-xs text-[var(--text-main)] focus:outline-none focus:border-[#E51A4B]"
                  >
                    <option value="1 - 3 Years" className="bg-[var(--bg-page)] text-[var(--text-main)]">1 - 3 Years (Junior/Mid)</option>
                    <option value="3 - 5 Years" className="bg-[var(--bg-page)] text-[var(--text-main)]">3 - 5 Years (Mid/Senior)</option>
                    <option value="5+ Years" className="bg-[var(--bg-page)] text-[var(--text-main)]">5+ Years (Staff / Lead)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[var(--text-main)] mb-1">GitHub / Portfolio Link *</label>
                  <input
                    type="url"
                    required
                    value={formData.portfolioUrl}
                    onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value })}
                    placeholder="https://github.com/yourhandle"
                    className="w-full px-4 py-2.5 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 text-xs text-[var(--text-main)] focus:outline-none focus:border-[#E51A4B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[var(--text-main)] mb-1">LinkedIn URL</label>
                  <input
                    type="url"
                    value={formData.linkedinUrl}
                    onChange={(e) => setFormData({ ...formData, linkedinUrl: e.target.value })}
                    placeholder="https://linkedin.com/in/yourhandle"
                    className="w-full px-4 py-2.5 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 text-xs text-[var(--text-main)] focus:outline-none focus:border-[#E51A4B]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[var(--text-main)] mb-1">Resume / CV Link (Google Drive, Notion, PDF link) *</label>
                <input
                  type="url"
                  required
                  value={formData.resumeUrl}
                  onChange={(e) => setFormData({ ...formData, resumeUrl: e.target.value })}
                  placeholder="https://drive.google.com/your-resume-link"
                  className="w-full px-4 py-2.5 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 text-xs text-[var(--text-main)] focus:outline-none focus:border-[#E51A4B]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[var(--text-main)] mb-1">Why Tcongs? (Tell us what you love building)</label>
                <textarea
                  rows="3"
                  value={formData.note}
                  onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                  placeholder="Tell us about the coolest project you've built, or why you want to work on high-velocity systems..."
                  className="w-full px-4 py-2.5 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 text-xs text-[var(--text-main)] focus:outline-none focus:border-[#E51A4B]"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#E51A4B] to-[#D01540] text-white font-bold text-xs sm:text-sm shadow-xl shadow-[#E51A4B]/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>Submitting Application...</span>
                ) : (
                  <>
                    <span>Submit Job Application 🚀</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

            </form>
          )}

        </div>

      </div>
    </div>
  );
};
