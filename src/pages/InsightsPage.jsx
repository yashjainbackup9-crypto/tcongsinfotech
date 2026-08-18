import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Terminal, 
  Clock, 
  ArrowRight, 
  Flame, 
  BookOpen, 
  Tag,
  Search
} from 'lucide-react';
import { INSIGHTS_DETAILED } from '../data/content';
import { ScrollReveal } from '../components/ScrollReveal';

export const InsightsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "All",
    "Architecture",
    "Frontend Engineering",
    "AI & Search Intelligence",
    "Enterprise AI",
    "Mobile Systems",
    "Cloud & DevOps",
    "E-Commerce"
  ];

  const filteredArticles = INSIGHTS_DETAILED.filter(art => {
    const matchesCategory = selectedCategory === "All" || art.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch = searchQuery.trim() === "" || 
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24 sm:pt-28 pb-16 min-h-screen bg-[var(--bg-page)] text-[var(--text-main)] transition-colors duration-400 font-sans text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[var(--text-muted)] mb-8">
          <Link to="/" className="hover:text-[#E51A4B] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[var(--text-main)] font-semibold">Engineering Insights</span>
        </div>

        {/* Header */}
        <ScrollReveal animation="fade-up">
          <div className="max-w-4xl mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E51A4B]/10 border border-[#E51A4B]/20 text-[#E51A4B] dark:text-[#E2EC07] text-xs font-semibold uppercase tracking-wider mb-4">
              <Terminal className="w-3.5 h-3.5" />
              <span>Technical Thought Leadership</span>
            </div>
            
            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[var(--text-main)] leading-[1.1]">
              Architectural Deep Dives &amp; <br />
              <span className="accent-gradient-text">Engineering Playbooks.</span>
            </h1>
            
            <p className="text-sm sm:text-base text-[var(--text-muted)] mt-4 leading-relaxed max-w-3xl">
              Real learnings from shipping 180+ web platforms, distributed microservices, and AI automations. No AI-generated fluff; just raw engineering benchmarks.
            </p>
          </div>
        </ScrollReveal>

        {/* Filter Tabs & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setSearchQuery("");
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#E51A4B] text-white shadow-md font-bold scale-105'
                    : 'bg-black/[0.03] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-black/[0.06] dark:hover:bg-white/[0.08]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-[var(--text-subtle)] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search playbooks & tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full bg-black/[0.03] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 text-xs text-[var(--text-main)] placeholder-[var(--text-subtle)] focus:outline-none focus:border-[#E51A4B] transition-colors"
            />
          </div>
        </div>

        {/* Insights Grid */}
        {filteredArticles.length === 0 ? (
          <div className="glass-panel p-12 rounded-3xl border border-black/10 dark:border-white/10 text-center my-12 text-xs sm:text-sm text-[var(--text-muted)]">
            No articles found matching your query. Try resetting filters.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {filteredArticles.map((art) => (
              <div
                key={art.slug}
                className="glass-panel p-6 sm:p-8 rounded-3xl border border-black/10 dark:border-white/10 flex flex-col justify-between hover:border-[#E51A4B]/40 hover:-translate-y-1 transition-all duration-300 group shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#E51A4B]/10 text-[#E51A4B] dark:text-[#E2EC07] border border-[#E51A4B]/20 truncate max-w-[180px]">
                      {art.category}
                    </span>
                    <span className="text-xs text-[var(--text-muted)] font-mono flex items-center gap-1 shrink-0">
                      <Clock className="w-3 h-3" /> {art.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[var(--text-main)] group-hover:text-[#E51A4B] transition-colors leading-snug">
                    {art.title}
                  </h3>

                  <p className="text-xs text-[var(--text-muted)] mt-2 leading-relaxed line-clamp-3">
                    {art.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {art.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/[0.03] dark:bg-white/[0.04] text-[var(--text-muted)]"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-black/10 dark:border-white/10 flex items-center justify-between">
                  <div className="text-[11px] text-[var(--text-muted)] font-mono">
                    {art.date}
                  </div>

                  <Link
                    to={`/insights/${art.slug}`}
                    className="text-xs font-bold text-[#E51A4B] hover:text-[#D01540] flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};
