import React from 'react';
import { Hero } from '../components/Hero';
import { ClientTicker } from '../components/ClientTicker';
import { ServicesBento } from '../components/ServicesBento';
import { TechMatrix } from '../components/TechMatrix';
import { PerformanceBenchmark } from '../components/PerformanceBenchmark';
import { ProcessFlow } from '../components/ProcessFlow';
import { CaseStudies } from '../components/CaseStudies';
import { CostEstimator } from '../components/CostEstimator';
import { FAQSection } from '../components/FAQSection';
import { ContactSection } from '../components/ContactSection';
import { SectionAutoScroller } from '../components/SectionAutoScroller';

export const HomePage = ({ onOpenConsultation, estimatorPrefill }) => {
  return (
    <>
      <main>
        <Hero onOpenConsultation={() => onOpenConsultation()} />
        <ClientTicker />
        <ServicesBento onSelectService={(serviceName) => onOpenConsultation({ project: serviceName, budget: '$5,000 - $15,000' })} />
        <TechMatrix />
        <PerformanceBenchmark onOpenConsultation={() => onOpenConsultation()} />
        <ProcessFlow />
        <CaseStudies onOpenConsultation={() => onOpenConsultation()} />
        <CostEstimator onBookEstimate={(estimateData) => onOpenConsultation(estimateData)} />
        <FAQSection onOpenConsultation={() => onOpenConsultation()} />
        <ContactSection prefillData={estimatorPrefill} />
      </main>

      {/* Floating Section Navigator */}
      <SectionAutoScroller />
    </>
  );
};
