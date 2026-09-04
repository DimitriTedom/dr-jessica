import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutDoctor } from './components/AboutDoctor';
import { ServicesSection } from './components/ServicesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { DoctorBioModal } from './components/DoctorBioModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { ServiceItem, Language } from './types';
import { CLINIC_INFO } from './data';
import { Phone, Calendar, ArrowUp } from 'lucide-react';
import { WhatsAppIcon } from './components/MedicalIcons';

export default function App() {
  const [language, setLanguage] = useState<Language>('fr');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedServiceIdForBooking, setSelectedServiceIdForBooking] = useState<string | undefined>();
  const [detailService, setDetailService] = useState<ServiceItem | null>(null);
  const [isDoctorBioOpen, setIsDoctorBioOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll for back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close modals on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsBookingOpen(false);
        setDetailService(null);
        setIsDoctorBioOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleOpenBooking = (serviceId?: string) => {
    setSelectedServiceIdForBooking(serviceId);
    setIsBookingOpen(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col font-sans selection:bg-[#7052ff] selection:text-white">
      {/* Top Header & Navigation */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        language={language}
        onToggleLanguage={setLanguage}
      />

      <main className="flex-1 w-full">
        {/* 1. Hero Section */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          language={language}
        />

        {/* 2. Doctor About & Profile Section */}
        <AboutDoctor
          onLearnMore={() => setIsDoctorBioOpen(true)}
          language={language}
        />

        {/* 3. Main Services Section */}
        <ServicesSection
          onSelectService={(service) => setDetailService(service)}
          language={language}
        />

        {/* 4. Testimonials Section */}
        <TestimonialsSection language={language} />

        {/* 5. Have any questions / Contact Section */}
        <ContactSection language={language} />
      </main>

      {/* 6. Footer */}
      <Footer language={language} />

      {/* Interactive Floating Quick-Action Bar for Enhanced UX */}
      <aside aria-label="Quick contact actions" className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
        {/* Scroll to Top */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-10 h-10 rounded-full bg-white text-gray-700 shadow-md border border-gray-200 flex items-center justify-center hover:bg-purple-50 hover:text-[#7052ff] transition-all cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

        {/* Direct WhatsApp Consultation */}
        <a
          href={CLINIC_INFO.social.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="group flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
        >
          <WhatsAppIcon className="w-5 h-5" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 text-xs font-bold">
            WhatsApp Direct
          </span>
        </a>

        {/* Floating Quick Book Button */}
        <button
          onClick={() => handleOpenBooking()}
          aria-label="Prendre Rendez-vous"
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-[#7052ff] hover:bg-[#6042f0] text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 cursor-pointer font-bold text-xs sm:text-sm"
        >
          <Calendar className="w-4 h-4" />
          <span>{language === 'fr' ? 'Prendre RDV' : 'Book Appointment'}</span>
        </button>
      </aside>

      {/* Interactive Modals */}
      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialServiceId={selectedServiceIdForBooking}
        language={language}
      />

      <DoctorBioModal
        isOpen={isDoctorBioOpen}
        onClose={() => setIsDoctorBioOpen(false)}
        onBook={() => handleOpenBooking()}
        language={language}
      />

      <ServiceDetailModal
        service={detailService}
        onClose={() => setDetailService(null)}
        onBookForService={(serviceId) => handleOpenBooking(serviceId)}
        language={language}
      />
    </div>
  );
}
