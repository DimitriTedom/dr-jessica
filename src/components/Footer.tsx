import React, { useState } from 'react';
import { CLINIC_INFO } from '../data';
import { HeartbeatLogoIcon, FacebookIcon, WhatsAppIcon, InstagramIcon } from './MedicalIcons';
import { Language } from '../types';
import { ShieldCheck, FileText, X } from 'lucide-react';

interface FooterProps {
  language: Language;
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  const isFr = language === 'fr';
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-[#f1f2f6] text-gray-700 pt-12 pb-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Top Footer Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-10 border-b border-gray-200">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2.5 focus:outline-none group"
            id="footer-brand-logo"
          >
            <HeartbeatLogoIcon className="w-8 h-8 transition-transform group-hover:scale-105" />
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-[#7052ff] leading-none">
                Dr. NGUETSOP
              </span>
              <span className="text-[10px] text-gray-500 font-semibold tracking-wider uppercase mt-0.5">
                {isFr ? 'Chirurgie Spécialisée' : 'Surgical Clinic'}
              </span>
            </div>
          </a>

          {/* Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-sm font-medium text-gray-700">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="hover:text-[#7052ff] transition-colors"
            >
              {isFr ? 'Accueil' : 'Home'}
            </a>
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, '#about')}
              className="hover:text-[#7052ff] transition-colors"
            >
              {isFr ? 'À propos' : 'About'}
            </a>
            <a
              href="#services"
              onClick={(e) => handleNavClick(e, '#services')}
              className="hover:text-[#7052ff] transition-colors"
            >
              Services
            </a>
            <a
              href="#testimonials"
              onClick={(e) => handleNavClick(e, '#testimonials')}
              className="hover:text-[#7052ff] transition-colors"
            >
              {isFr ? 'Témoignages' : 'Testimonials'}
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="hover:text-[#7052ff] transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 text-gray-600">
            <a
              href={CLINIC_INFO.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-[#7052ff] transition-transform hover:scale-110"
            >
              <FacebookIcon className="w-4 h-4" />
            </a>
            <a
              href={CLINIC_INFO.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="hover:text-[#7052ff] transition-transform hover:scale-110"
            >
              <WhatsAppIcon className="w-4 h-4" />
            </a>
            <a
              href={CLINIC_INFO.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-[#7052ff] transition-transform hover:scale-110"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Dr NGUETSOP Jessica. {isFr ? 'Tous droits réservés.' : 'All rights reserved.'}</p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => setLegalModal('privacy')}
              className="hover:text-[#7052ff] transition-colors cursor-pointer"
            >
              {isFr ? 'Confidentialité & Données Médicales' : 'Privacy Policy'}
            </button>
            <button
              onClick={() => setLegalModal('terms')}
              className="hover:text-[#7052ff] transition-colors cursor-pointer"
            >
              {isFr ? 'Conditions & Prise en Charge' : 'Terms & Conditions'}
            </button>
          </div>
        </div>
      </div>

      {/* Accessible In-App Modal for Privacy / Terms instead of raw window.alert */}
      {legalModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in"
          onClick={() => setLegalModal(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-gray-100 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <div className="flex items-center gap-2">
                {legalModal === 'privacy' ? (
                  <ShieldCheck className="w-5 h-5 text-[#7052ff]" />
                ) : (
                  <FileText className="w-5 h-5 text-[#7052ff]" />
                )}
                <h4 className="text-base font-bold text-gray-900">
                  {legalModal === 'privacy'
                    ? (isFr ? 'Secret Médical & Protection des Données' : 'Medical Privacy & Patient Data')
                    : (isFr ? 'Conditions de Consultation & Rendez-vous' : 'Terms of Surgical Care & Booking')}
                </h4>
              </div>
              <button
                onClick={() => setLegalModal(null)}
                className="p-1 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="text-xs sm:text-sm text-gray-600 space-y-2.5 leading-relaxed max-h-72 overflow-y-auto">
              {legalModal === 'privacy' ? (
                <>
                  <p>
                    {isFr
                      ? 'Toutes les informations transmises via notre formulaire de contact et la prise de rendez-vous en ligne sont protégées par le secret médical strict et la déontologie médicale.'
                      : 'All personal and medical data submitted through our booking and contact forms are strictly confidential and governed by surgical patient privacy regulations.'}
                  </p>
                  <p>
                    {isFr
                      ? 'Aucune coordonnée ou donnée clinique n’est partagée ou transmise à des tiers sans votre consentement explicite.'
                      : 'No patient contact information or clinical details are ever disclosed or shared with third parties.'}
                  </p>
                </>
              ) : (
                <>
                  <p>
                    {isFr
                      ? 'Les demandes de rendez-vous soumises en ligne font l’objet d’une confirmation téléphonique par le secrétariat médical du Dr NGUETSOP Jessica.'
                      : 'Appointments scheduled online are confirmed via telephone validation by Dr. NGUETSOP Jessica’s clinical reception.'}
                  </p>
                  <p>
                    {isFr
                      ? 'En cas d’urgence chirurgicale aiguë (douleur abdominale violente, fièvre élevée, vomissements incoercibles), veuillez contacter immédiatement notre ligne d’urgence au +213 698 96 63 28 ou vous rendre directement aux urgences hospitalières.'
                      : 'In acute emergencies (severe sudden abdominal pain, peritonitis symptoms), please dial our 24/7 hotline directly or proceed to the nearest emergency room.'}
                  </p>
                </>
              )}
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setLegalModal(null)}
                className="px-5 py-2 rounded-xl bg-[#7052ff] text-white text-xs font-semibold hover:bg-[#6042f0] transition-colors"
              >
                {isFr ? 'Compris' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
