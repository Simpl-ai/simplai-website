'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MainSection from '@/components/sections/MainSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import AdditionalContextSection from '@/components/sections/AdditionalContextSection';
import SolutionSection from '@/components/sections/SolutionsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import AboutSection from '@/components/sections/AboutSection';

import SimplSurveyOverlay from '@/components/overlays/SimplSurveyOverlay';
import InvestmentOverlay from '@/components/overlays/InvestmentOverlay';
import GetStartedOverlay from '@/components/overlays/GetStartedOverlay';

import { useState } from 'react';

export default function Home() {
  const [showSurvey, setShowSurvey] = useState(false);
  const [showInvestment, setShowInvestment] = useState(false);
  const [showGetStarted, setShowGetStarted] = useState(false);

  return (
    <div className="min-h-screen" id='home'>
      <Header onOpenSurvey={() => setShowSurvey(true)} onOpenInvestment={() => setShowInvestment(true)} onOpenGetStarted={() => setShowGetStarted(true)} />

      {/* Hero Section */}
      <MainSection />

      {/* Additional Context Section */}
      <AdditionalContextSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Solution Section */}
      <SolutionSection onOpenGetStarted={() => setShowGetStarted(true)} />

      {/* Services Section */}
      <ServicesSection />

      {/* About Section */}
      <AboutSection />

      {/* Footer Section */}
      <Footer />

      {/* Overlays */}
      <SimplSurveyOverlay open={showSurvey} onClose={() => setShowSurvey(false)} />

      <InvestmentOverlay open={showInvestment} onClose={() => setShowInvestment(false)} />

      <GetStartedOverlay open={showGetStarted} onClose={() => setShowGetStarted(false)} />

    </div>
  );
}
