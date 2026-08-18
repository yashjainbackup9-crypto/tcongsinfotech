import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ClientTicker } from './components/ClientTicker';
import { ServicesBento } from './components/ServicesBento';
import { TechMatrix } from './components/TechMatrix';
import { PerformanceBenchmark } from './components/PerformanceBenchmark';
import { ProcessFlow } from './components/ProcessFlow';
import { CaseStudies } from './components/CaseStudies';
import { CostEstimator } from './components/CostEstimator';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { SectionAutoScroller } from './components/SectionAutoScroller';
import { ThemeShowcaseModal } from './components/ThemeShowcaseModal';
import { MessageSquare, PhoneCall, ArrowUp } from 'lucide-react';

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
      
      {/* Top Navbar with Cmd+K Command Palette */}
      <Navbar onOpenConsultation={() => handleOpenConsultation()} />

      {/* Main Home Page Sections */}
      <main>
        <Hero onOpenConsultation={() => handleOpenConsultation()} />
        <ClientTicker />
        <ServicesBento onSelectService={(serviceName) => handleOpenConsultation({ project: serviceName, budget: '$5,000 - $15,000' })} />
        <TechMatrix />
        <PerformanceBenchmark onOpenConsultation={() => handleOpenConsultation()} />
        <ProcessFlow />
        <CaseStudies onOpenConsultation={() => handleOpenConsultation()} />
        <CostEstimator onBookEstimate={(estimateData) => handleOpenConsultation(estimateData)} />
        <FAQSection onOpenConsultation={() => handleOpenConsultation()} />
        <ContactSection prefillData={estimatorPrefill} />
      </main>

      {/* Global Footer */}
      <Footer onOpenConsultation={() => handleOpenConsultation()} />

      {/* Interactive Consultation Modal */}
      <ConsultationModal
        isOpen={consultationModalOpen}
        onClose={() => {
          setConsultationModalOpen(false);
          setEstimatorPrefill(null);
        }}
        initialData={estimatorPrefill}
      />

      {/* Interactive Theme Showcase Popup */}
      <ThemeShowcaseModal />

      {/* Bottom Floating Section Auto-Scroll Showcase Controller */}
      <SectionAutoScroller />

      {/* Floating Action Button (Quick Call / Scroll Top) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-black/[0.06] dark:bg-white/[0.08] hover:bg-black/10 dark:hover:bg-white/20 text-[var(--text-main)] border border-black/10 dark:border-white/10 backdrop-blur-md flex items-center justify-center transition-all shadow-lg hidden sm:flex hover:scale-110 active:scale-95 focus-visible:ring-2 focus-visible:ring-[#E51A4B] focus-visible:outline-none"
          aria-label="Scroll to top"
          title="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>

        <button
          onClick={() => handleOpenConsultation()}
          className="relative group p-3.5 sm:px-5 sm:py-3 rounded-full bg-gradient-to-r from-[#E51A4B] to-[#D01540] text-white font-bold text-xs shadow-2xl shadow-[#E51A4B]/40 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-[#E51A4B] focus-visible:outline-none"
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
      <MainLayout />
    </ThemeProvider>
  );
}

export default App;
