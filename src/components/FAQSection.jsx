import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles, MessageCircle } from 'lucide-react';
import { FAQS } from '../data/content';
import { ScrollReveal } from './ScrollReveal';

export const FAQSection = ({ onOpenConsultation }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-16 sm:py-24 border-t border-black/5 dark:border-white/[0.06] bg-black/[0.01] dark:bg-[#0A0A0D] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/[0.04] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 text-[var(--text-muted)] text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-3 sm:mb-4">
              <HelpCircle className="w-3.5 h-3.5 text-[#E51A4B]" />
              <span>Clear Answers</span>
            </div>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-main)] tracking-tight">
              Frequently Asked <span className="primary-gradient-text">Questions.</span>
            </h2>
            <p className="text-[var(--text-muted)] text-xs sm:text-sm md:text-base mt-3 sm:mt-4 leading-relaxed">
              Everything you need to know about our engineering standards, timelines, pricing models, and international delivery.
            </p>
          </div>
        </ScrollReveal>

        {/* FAQ Accordion List */}
        <div className="space-y-3 sm:space-y-4 text-left">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <ScrollReveal
                key={idx}
                animation="fade-up"
                delay={idx * 60}
                duration={500}
              >
                <div
                  className={`rounded-2xl transition-all duration-200 border overflow-hidden ${
                    isOpen 
                      ? 'bg-black/[0.03] dark:bg-white/[0.06] border-[#E51A4B]/50 shadow-lg shadow-[#E51A4B]/5' 
                      : 'bg-black/[0.01] dark:bg-white/[0.02] border-black/5 dark:border-white/[0.06] hover:border-[#E51A4B]/30 hover:bg-black/[0.02] dark:hover:bg-white/[0.04]'
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(idx)}
                    className="w-full p-4 sm:p-6 text-left flex items-center justify-between gap-3 sm:gap-4 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#E51A4B] focus-visible:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-lg font-bold text-[var(--text-main)] leading-snug">
                      {faq.question}
                    </span>
                    <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'bg-[#E51A4B] text-white rotate-180' : 'bg-black/5 dark:bg-white/5 text-[var(--text-muted)]'
                    }`}>
                      <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 sm:px-6 sm:pb-6 pt-0 text-[var(--text-muted)] text-xs sm:text-base leading-relaxed border-t border-black/5 dark:border-white/5 animate-in fade-in-50 duration-200">
                      <p className="pt-3 sm:pt-4">{faq.answer}</p>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <ScrollReveal animation="fade-up" delay={200}>
          <div className="mt-8 sm:mt-12 p-6 sm:p-8 rounded-2xl sm:rounded-3xl glass-panel border border-black/10 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 text-center sm:text-left hover:border-[#E51A4B]/30 transition-all duration-300">
            <div className="flex items-center gap-3.5 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#E51A4B]/10 text-[#E51A4B] flex items-center justify-center shrink-0">
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-[var(--text-main)]">Have a custom or technical requirement?</h4>
                <p className="text-[11px] sm:text-xs text-[var(--text-muted)] mt-0.5">Speak directly with our technical lead within 24 hours.</p>
              </div>
            </div>

            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto px-6 py-2.5 sm:py-3 rounded-full bg-[#E51A4B] text-white font-bold text-xs sm:text-sm hover:bg-[#D01540] transition-all shadow-lg hover:scale-105 whitespace-nowrap active:scale-95 focus-visible:ring-2 focus-visible:ring-[#E51A4B] focus-visible:outline-none"
            >
              Ask Us Anything
            </button>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
