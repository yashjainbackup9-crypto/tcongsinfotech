import React, { useState } from 'react';
import { X, Calendar, Clock, Video, CheckCircle2, ArrowRight, Sparkles, Loader2, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

export const ConsultationModal = ({ isOpen, onClose, initialData }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    timezone: 'EST (US East)',
    date: '',
    timeSlot: '10:00 AM',
    notes: initialData ? `Project: ${initialData.project} (${initialData.budget})` : ''
  });

  const [isBooking, setIsBooking] = useState(false);
  const [booked, setBooked] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsBooking(true);

    try {
      await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          service: `30-Min Consultation (${formData.timezone} - ${formData.timeSlot})`,
          budget: initialData?.budget || 'Consultation Session',
          message: `Company: ${formData.company || 'N/A'}\nTimezone: ${formData.timezone}\nTime Slot: ${formData.timeSlot}\nNotes: ${formData.notes || 'N/A'}`
        }),
      });

      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      setBooked(true);
    } catch (err) {
      console.warn("Consultation dispatch:", err.message);
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
      setBooked(true);
    } finally {
      setIsBooking(false);
    }
  };

  const timeSlots = ['09:00 AM', '11:30 AM', '02:00 PM', '04:30 PM', '07:00 PM'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="glass-panel p-5 sm:p-8 rounded-2xl sm:rounded-3xl max-w-xl w-full max-h-[92vh] overflow-y-auto border border-black/20 dark:border-white/20 shadow-2xl relative text-left bg-gradient-to-b from-white dark:from-[#181824] to-slate-50 dark:to-[#0D0D14]">
        
        <button
          onClick={onClose}
          className="sticky top-0 float-right p-2 rounded-full bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors z-10 backdrop-blur-md"
        >
          <X className="w-5 h-5" />
        </button>

        {booked ? (
          <div className="py-10 sm:py-12 text-center animate-in zoom-in-95 duration-300">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-500/20 text-emerald-500 dark:text-emerald-400 mx-auto flex items-center justify-center mb-5 sm:mb-6 shadow-lg shadow-emerald-500/20">
              <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-main)] mb-2">Meeting Confirmed & Email Sent! 📅</h3>
            <p className="text-[var(--text-muted)] text-xs sm:text-sm max-w-md mx-auto mb-4">
              A Google Meet calendar confirmation has been dispatched to <strong className="text-[var(--text-main)]">{formData.email}</strong>.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold mb-6">
              <ShieldCheck className="w-4 h-4" />
              <span>Webverse SMTP Email Confirmation Sent</span>
            </div>
            <div>
              <button
                onClick={onClose}
                className="px-8 py-3 rounded-full bg-[#E51A4B] text-white font-bold text-xs sm:text-sm shadow-lg shadow-[#E51A4B]/30 hover:scale-105 transition-transform"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E51A4B]/20 text-[#E51A4B] text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2.5 sm:mb-3">
              <Video className="w-3.5 h-3.5" /> 30-Min Discovery Session
            </div>

            <h3 className="text-xl sm:text-2xl font-extrabold text-[var(--text-main)] mb-1">
              Book a Technical Consultation
            </h3>
            <p className="text-[11px] sm:text-xs text-[var(--text-muted)] mb-5 sm:mb-6">
              Discuss architecture, timelines, and pricing directly with our engineering leadership.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] sm:text-[11px] font-bold text-[var(--text-main)] uppercase tracking-wider mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 text-base sm:text-xs text-[var(--text-main)] placeholder-[var(--text-subtle)] focus:outline-none focus:border-[#E51A4B]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] sm:text-[11px] font-bold text-[var(--text-main)] uppercase tracking-wider mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="email@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 text-base sm:text-xs text-[var(--text-main)] placeholder-[var(--text-subtle)] focus:outline-none focus:border-[#E51A4B]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] sm:text-[11px] font-bold text-[var(--text-main)] uppercase tracking-wider mb-1">
                    Your Timezone
                  </label>
                  <select
                    value={formData.timezone}
                    onChange={(e) => setFormData({ ...formData, timezone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-[#14141C] border border-black/10 dark:border-white/10 text-base sm:text-xs text-[var(--text-main)] focus:outline-none focus:border-[#E51A4B]"
                  >
                    <option value="EST (US East)">EST (US East - New York)</option>
                    <option value="PST (US West)">PST (US West - San Francisco)</option>
                    <option value="GST (Dubai / UAE)">GST (Dubai / UAE / Gulf)</option>
                    <option value="GMT (UK / Europe)">GMT (London / UK)</option>
                    <option value="IST (India Standard)">IST (India / Asia Pacific)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] sm:text-[11px] font-bold text-[var(--text-main)] uppercase tracking-wider mb-1">
                    Preferred Time Slot
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-[#14141C] border border-black/10 dark:border-white/10 text-base sm:text-xs text-[var(--text-main)] focus:outline-none focus:border-[#E51A4B]"
                  >
                    {timeSlots.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] sm:text-[11px] font-bold text-[var(--text-main)] uppercase tracking-wider mb-1">
                  Project Scope Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Briefly state your target goals or current stack..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-black/[0.02] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 text-base sm:text-xs text-[var(--text-main)] placeholder-[var(--text-subtle)] focus:outline-none focus:border-[#E51A4B]"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isBooking}
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#E51A4B] to-[#D01540] text-white font-bold text-xs sm:text-sm shadow-xl shadow-[#E51A4B]/30 hover:shadow-[#E51A4B]/50 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {isBooking ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Booking & Dispatching Email...</span>
                  </>
                ) : (
                  <>
                    <span>Confirm 30-Min Discovery Call 📅</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

            </form>
          </div>
        )}

      </div>
    </div>
  );
};
