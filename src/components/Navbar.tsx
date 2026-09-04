import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, ExternalLink, Menu, X, Globe, Calendar } from 'lucide-react';
import { CLINIC_INFO } from '../data';
import { HeartbeatLogoIcon, FacebookIcon, WhatsAppIcon, InstagramIcon } from './MedicalIcons';
import { Language } from '../types';

interface NavbarProps {
  onOpenBooking: () => void;
  language: Language;
  onToggleLanguage: (lang: Language) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, language, onToggleLanguage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'services', 'testimonials', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = language === 'fr' ? [
    { name: 'Accueil', href: '#home', id: 'home' },
    { name: 'À propos', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Témoignages', href: '#testimonials', id: 'testimonials' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ] : [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Testimonial', href: '#testimonials', id: 'testimonials' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="w-full sticky top-0 z-50 bg-white">
      {/* Top Contact & Social Bar */}
      <div className="bg-[#7052ff] text-white text-xs sm:text-sm py-2 px-4 sm:px-6 lg:px-12 transition-all">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-2">
          {/* Left Contact Information */}
          <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-6 text-white/95 font-medium">
            <a
              href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{language === 'fr' ? 'Urgences & RDV :' : 'Call :'} {CLINIC_INFO.phone}</span>
            </a>
            <a
              href={`mailto:${CLINIC_INFO.email}`}
              className="hidden sm:flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{CLINIC_INFO.email}</span>
            </a>
            <span className="hidden md:flex items-center gap-1.5 text-white/90">
              <MapPin className="w-3.5 h-3.5" />
              <span>{language === 'fr' ? CLINIC_INFO.addressFr : CLINIC_INFO.address}</span>
            </span>
          </div>

          {/* Right Language & Social Channels */}
          <div className="flex items-center gap-4 text-white/90">
            {/* Language Switcher */}
            <div className="flex items-center bg-white/15 rounded-full p-0.5 text-xs font-semibold">
              <button
                onClick={() => onToggleLanguage('fr')}
                className={`px-2 py-0.5 rounded-full transition-colors ${
                  language === 'fr' ? 'bg-white text-[#7052ff] shadow-xs' : 'text-white/85 hover:text-white'
                }`}
                title="Passer en Français"
              >
                FR
              </button>
              <button
                onClick={() => onToggleLanguage('en')}
                className={`px-2 py-0.5 rounded-full transition-colors ${
                  language === 'en' ? 'bg-white text-[#7052ff] shadow-xs' : 'text-white/85 hover:text-white'
                }`}
                title="Switch to English"
              >
                EN
              </button>
            </div>

            <span className="text-white/40">|</span>

            <a
              href={CLINIC_INFO.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-transform hover:scale-110"
              aria-label="Facebook page"
            >
              <FacebookIcon className="w-4 h-4" />
            </a>
            <a
              href={CLINIC_INFO.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-transform hover:scale-110"
              aria-label="WhatsApp chat"
            >
              <WhatsAppIcon className="w-4 h-4" />
            </a>
            <a
              href={CLINIC_INFO.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-transform hover:scale-110"
              aria-label="Instagram profile"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full bg-white transition-shadow duration-300 ${
          isScrolled ? 'shadow-md border-b border-gray-100' : 'border-b border-gray-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-18 sm:h-20 flex items-center justify-between">
          {/* Clinic Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2.5 focus:outline-none group"
            id="brand-logo"
          >
            <HeartbeatLogoIcon className="w-9 h-9 sm:w-10 sm:h-10 transition-transform group-hover:scale-105" />
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#7052ff] leading-none">
                Dr. NGUETSOP
              </span>
              <span className="text-[10px] text-gray-500 font-semibold tracking-wider uppercase mt-0.5">
                {language === 'fr' ? 'Chirurgie Spécialisée' : 'Surgical Clinic'}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-7 lg:gap-9">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  id={`nav-link-${link.id}`}
                  className={`relative py-1 text-[15px] font-medium transition-colors ${
                    isActive ? 'text-[#7052ff] font-semibold' : 'text-gray-600 hover:text-[#7052ff]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#7052ff] rounded-full" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Right Action: Let's Talk & Appointment Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => {
                const contactEl = document.querySelector('#contact');
                if (contactEl) {
                  contactEl.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              id="header-lets-talk-btn"
              className="group inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-[#7052ff] text-[#7052ff] font-semibold text-sm hover:bg-purple-50 transition-all duration-200 active:scale-95 shadow-xs cursor-pointer"
            >
              <span>{language === 'fr' ? 'Contact Direct' : 'Let’s Talk'}</span>
              <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <button
              onClick={onOpenBooking}
              id="header-book-btn"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#7052ff] text-white font-semibold text-sm hover:bg-[#6042f0] transition-all duration-200 active:scale-95 shadow-xs cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>{language === 'fr' ? 'Prendre RDV' : 'Book Appointment'}</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle"
            className="md:hidden p-2 rounded-lg text-gray-700 hover:text-[#7052ff] hover:bg-purple-50 transition-colors cursor-pointer"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white px-5 py-4 space-y-3 shadow-lg animate-in slide-in-from-top-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`block py-2 text-base font-medium rounded-md px-3 ${
                  activeSection === link.id
                    ? 'bg-purple-50 text-[#7052ff] font-semibold'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-gray-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-2.5 rounded-lg bg-[#7052ff] text-white font-medium text-sm text-center shadow-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>{language === 'fr' ? 'Prendre Rendez-vous' : 'Book an Appointment'}</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  const contactEl = document.querySelector('#contact');
                  if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full py-2.5 rounded-lg border border-[#7052ff] text-[#7052ff] font-medium text-sm text-center cursor-pointer"
              >
                {language === 'fr' ? 'Nous contacter' : 'Let’s Talk'}
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
