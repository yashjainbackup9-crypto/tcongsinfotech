import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowRight, 
  Clock, 
  Calendar, 
  Tag, 
  Share2, 
  BookOpen,
  CheckCircle2,
  Terminal,
  Sparkles
} from 'lucide-react';
import { INSIGHTS_DETAILED } from '../data/content';
import { ScrollReveal } from '../components/ScrollReveal';
import { MarkdownRenderer } from '../components/MarkdownRenderer';

export const InsightDetailPage = ({ onOpenConsultation }) => {
  const { slug } = useParams();

  const article = INSIGHTS_DETAILED.find(a => a.slug === slug) || INSIGHTS_DETAILED[0];

  if (!article) {
    return (
      <div className="pt-32 pb-20 text-center min-h-screen">
        <h2 className="text-2xl font-bold">Article Not Found</h2>
        <Link to="/insights" className="text-[#E51A4B] mt-4 inline-block">Back to Insights</Link>
      </div>
    );
  }

  return (
    <div className="pt-24 sm:pt-28 pb-16 min-h-screen bg-[var(--bg-page)] text-[var(--text-main)] transition-colors duration-400 font-sans text-left">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs text-[var(--text-muted)] mb-8 flex-wrap">
          <Link to="/" className="hover:text-[#E51A4B] transition-colors">Home</Link>
          <span>/</span>
          <Link to="/insights" className="hover:text-[#E51A4B] transition-colors">Insights</Link>
          <span>/</span>
          <span className="text-[var(--text-main)] font-semibold truncate max-w-xs">{article.title}</span>
        </div>

        {/* Article Header */}
        <ScrollReveal animation="fade-up">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#E51A4B]/10 text-[#E51A4B] dark:text-[#E2EC07] border border-[#E51A4B]/20">
                {article.category}
              </span>
              <span className="text-xs text-[var(--text-muted)] font-mono flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> {article.readTime}
              </span>
              <span className="text-xs text-[var(--text-muted)] font-mono flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" /> {article.date}
              </span>
            </div>

            <h1 className="text-3xl xs:text-4xl sm:text-5xl font-black tracking-tight text-[var(--text-main)] leading-[1.1]">
              {article.title}
            </h1>
            
            <p className="text-base sm:text-lg text-[#E51A4B] dark:text-[#E2EC07] font-semibold mt-3">
              {article.subtitle}
            </p>

            {/* Author Bar */}
            <div className="flex items-center gap-3 mt-6 pt-4 border-t border-black/10 dark:border-white/10">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-10 h-10 rounded-full border border-black/10 dark:border-white/10 p-1 bg-black/5 dark:bg-white/5"
              />
              <div>
                <div className="text-xs font-bold text-[var(--text-main)]">
                  {article.author.name}
                </div>
                <div className="text-[11px] text-[var(--text-muted)]">
                  {article.author.role} • Tcongs Infotech
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Article Body Content */}
        <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-black/10 dark:border-white/10 mb-16 text-xs sm:text-sm text-[var(--text-main)] leading-relaxed space-y-6">
          <div className="max-w-none">
            <MarkdownRenderer content={article.content} />
          </div>

          <div className="pt-8 mt-8 border-t border-black/10 dark:border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {article.tags.map((t, idx) => (
                <span key={idx} className="text-xs font-mono px-3 py-1 rounded-full bg-black/[0.04] dark:bg-white/[0.06] text-[var(--text-muted)]">
                  #{t}
                </span>
              ))}
            </div>

            <button
              onClick={() => {
                if (navigator.clipboard) {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Article link copied to clipboard!');
                }
              }}
              className="px-4 py-2 rounded-full bg-black/[0.04] dark:bg-white/[0.06] hover:bg-[#E51A4B] hover:text-white text-xs font-bold transition-colors flex items-center gap-1.5"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Share Article</span>
            </button>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-black/10 dark:border-white/10 text-center">
          <h3 className="text-2xl sm:text-3xl font-black text-[var(--text-main)]">
            Want This Architecture for Your Organization?
          </h3>
          <p className="text-xs sm:text-sm text-[var(--text-muted)] max-w-lg mx-auto mt-2 mb-6">
            Schedule a free 30-minute discovery call to discuss technical strategy and feasibility with our senior engineering architects.
          </p>
          <button
            onClick={() => onOpenConsultation({ project: `Discussion on ${article.title}` })}
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#E51A4B] to-[#D01540] text-white font-bold text-xs sm:text-sm shadow-xl shadow-[#E51A4B]/30 hover:scale-105 active:scale-95 transition-all"
          >
            <span>Book 30-Min Architecture Call 🚀</span>
          </button>
        </div>

      </div>
    </div>
  );
};
