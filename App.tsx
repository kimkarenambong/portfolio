/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { CaseStudies } from './components/CaseStudies';
import { ClientHubCRM } from './components/ClientHubCRM';
import { ResumeSection } from './components/ResumeSection';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { BrandPaletteBar } from './components/BrandPaletteBar';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';

function PortfolioApp() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedPlanForModal, setSelectedPlanForModal] = useState<string | undefined>(undefined);

  const handleOpenBookingModal = (planName?: string) => {
    setSelectedPlanForModal(planName);
    setIsBookingModalOpen(true);
  };

  const handleCloseBookingModal = () => {
    setIsBookingModalOpen(false);
    setSelectedPlanForModal(undefined);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#FAF8F5] text-[#1C1917] transition-colors duration-300">
      {/* Sticky Top Navigation */}
      <Navbar onBookCallClick={() => handleOpenBookingModal()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. HERO */}
        <Hero onBookCallClick={() => handleOpenBookingModal()} />

        {/* 2. ABOUT */}
        <About />

        {/* 3. SERVICES */}
        <Services onBookCallClick={() => handleOpenBookingModal()} />

        {/* 4. SAMPLE WORKS & CASE STUDIES (Featuring Live GoHighLevel Sales Page) */}
        <CaseStudies onBookCallClick={() => handleOpenBookingModal()} />

        {/* 5. INTERACTIVE CLIENT HUB & DELIVERY CRM */}
        <ClientHubCRM />

        {/* 6. DEDICATED MASTER RESUME & CREDENTIALS HUB */}
        <ResumeSection onBookCallClick={() => handleOpenBookingModal()} />

        {/* 7. PRICING & RETAINER PACKAGES */}
        <Pricing onBookCallClick={(planName) => handleOpenBookingModal(planName)} />

        {/* 7. CLIENT ENDORSEMENTS */}
        <Testimonials />

        {/* 8. FREQUENTLY ASKED QUESTIONS */}
        <FAQ />

        {/* 9. CONTACT & SCHEDULING */}
        <Contact onBookCallClick={() => handleOpenBookingModal()} />
      </main>

      {/* FOOTER */}
      <Footer />

      {/* Interactive Booking / Discovery Call Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={handleCloseBookingModal}
        selectedPlan={selectedPlanForModal}
      />

      {/* Live Brand Palette & Theme Selector */}
      <BrandPaletteBar />

      {/* Floating WhatsApp Quick Connect */}
      <WhatsAppFloatingButton />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioApp />
    </ThemeProvider>
  );
}
