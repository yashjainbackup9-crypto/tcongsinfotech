import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Lenis from 'lenis';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { ThemeShowcaseModal } from './components/ThemeShowcaseModal';
import { ScrollToTop } from './components/ScrollToTop';
import { PhoneCall, ArrowUp } from 'lucide-react';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { CaseStudyDetailPage } from './pages/CaseStudyDetailPage';
import { PricingPage } from './pages/PricingPage';
import { CareersPage } from './pages/CareersPage';
import { InsightsPage } from './pages/InsightsPage';
import { InsightDetailPage } from './pages/InsightDetailPage';
import { ContactPage } from './pages/ContactPage';

export function MainLayout() {
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);
  const [estimatorPrefill, setEstimatorPrefill] = useState(null);

  // Initialize Lenis Smooth Inertia Scrolling throughout the entire page
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.8,
    });

    window.lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const animFrame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animFrame);
      lenis.destroy();
      window.lenis = null;
    };
  }, []);

  const handleOpenConsultation = (data = null) => {
    setEstimatorPrefill(data);
    setConsultationModalOpen(true);
  };

  const scrollToTop = () => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[var(--bg-page)] text-[var(--text-main)] selection:bg-[#E51A4B] selection:text-white font-sans relative transition-colors duration-400">
      
      {/* Scroll restoration helper */}
      <ScrollToTop />

      {/* Top Navbar with Cmd+K Command Palette & Multi-Page Routing */}
      <Navbar onOpenConsultation={() => handleOpenConsultation()} />

      {/* Dynamic Multi-Page Router Switch */}
      <Routes>
        <Route 
          path="/" 
          element={<HomePage onOpenConsultation={handleOpenConsultation} estimatorPrefill={estimatorPrefill} />} 
        />
        <Route 
          path="/about" 
          element={<AboutPage onOpenConsultation={handleOpenConsultation} />} 
        />
        <Route 
          path="/services" 
          element={<ServicesPage onOpenConsultation={handleOpenConsultation} />} 
        />
        <Route 
          path="/services/:serviceSlug" 
          element={<ServiceDetailPage onOpenConsultation={handleOpenConsultation} />} 
        />
        <Route 
          path="/case-studies" 
          element={<CaseStudiesPage onOpenConsultation={handleOpenConsultation} />} 
        />
        <Route 
          path="/case-studies/:caseSlug" 
          element={<CaseStudyDetailPage onOpenConsultation={handleOpenConsultation} />} 
        />
        <Route 
          path="/pricing" 
          element={<PricingPage onOpenConsultation={handleOpenConsultation} />} 
        />
        <Route 
          path="/careers" 
          element={<CareersPage />} 
        />
        <Route 
          path="/insights" 
          element={<InsightsPage />} 
        />
        <Route 
          path="/insights/:slug" 
          element={<InsightDetailPage onOpenConsultation={handleOpenConsultation} />} 
        />
        <Route 
          path="/contact" 
          element={<ContactPage onOpenConsultation={handleOpenConsultation} estimatorPrefill={estimatorPrefill} />} 
        />
        {/* Fallback Catch-All */}
        <Route 
          path="*" 
          element={<HomePage onOpenConsultation={handleOpenConsultation} estimatorPrefill={estimatorPrefill} />} 
        />
      </Routes>

      {/* Luxury 4-Tier Footer with Subpage Links */}
      <Footer onOpenConsultation={() => handleOpenConsultation()} />

      {/* Interactive 30-Min Consultation Modal */}
      <ConsultationModal
        isOpen={consultationModalOpen}
        onClose={() => {
          setConsultationModalOpen(false);
          setEstimatorPrefill(null);
        }}
        initialData={estimatorPrefill}
      />

      {/* Executive Dark Mode Showcase Preview Popup */}
      <ThemeShowcaseModal />

      {/* Floating Quick Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-black/[0.06] dark:bg-white/[0.08] hover:bg-black/10 dark:hover:bg-white/20 text-[var(--text-main)] border border-black/10 dark:border-white/10 backdrop-blur-md flex items-center justify-center transition-all shadow-lg hidden sm:flex hover:scale-110 active:scale-95 focus-visible:ring-2 focus-visible:ring-[#E51A4B] focus-visible:outline-none cursor-pointer"
          aria-label="Scroll to top"
          title="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>

        <button
          onClick={() => handleOpenConsultation()}
          className="relative group p-3.5 sm:px-5 sm:py-3 rounded-full bg-gradient-to-r from-[#E51A4B] to-[#D01540] text-white font-bold text-xs shadow-2xl shadow-[#E51A4B]/40 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-[#E51A4B] focus-visible:outline-none cursor-pointer"
        >
          <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
          <PhoneCall className="w-4 h-4" />
          <span className="hidden sm:inline">Book 30-Min Call</span>
        </button>
      </div>

    </div>
  );
}

export function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <MainLayout />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
