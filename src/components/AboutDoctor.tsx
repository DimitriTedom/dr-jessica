import React from 'react';
import { ExternalLink, Award, CheckCircle2, Shield } from 'lucide-react';
import { DoctorAboutIllustration } from './MedicalIllustrations';
import { Language } from '../types';

interface AboutDoctorProps {
  onLearnMore: () => void;
  language: Language;
}

export const AboutDoctor: React.FC<AboutDoctorProps> = ({ onLearnMore, language }) => {
  const isFr = language === 'fr';

  return (
    <section id="about" className="w-full bg-[#f3f4f6] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Doctor Illustration */}
          <div className="lg:col-span-6 flex justify-center">
            <DoctorAboutIllustration />
          </div>

          {/* Right Column: Bio & Qualifications */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-6">
            {/* Name with Purple Medal Award Badge */}
            <div className="flex items-center gap-3">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                Dr NGUETSOP Jessica
              </h2>
              <div
                className="w-9 h-9 rounded-full bg-purple-100 flex items-center justify-center text-[#7052ff] shrink-0"
                title={isFr ? 'Chirurgienne Spécialiste Diplômée' : 'Board Certified Specialist Surgeon'}
              >
                <Award className="w-5 h-5" />
              </div>
            </div>

            {/* Subtitle / Role */}
            <div className="flex items-center gap-2 text-sm font-semibold text-[#7052ff]">
              <Shield className="w-4 h-4" />
              <span>
                {isFr
                  ? 'Chirurgie Générale, Viscérale & Mini-Invasive'
                  : 'Consultant in General & Laparoscopic Surgery'}
              </span>
            </div>

            {/* Paragraph 1 */}
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {isFr
                ? 'Spécialiste reconnue en chirurgie générale et digestive, le Dr NGUETSOP Jessica privilégie les abords cœlioscopiques de haute précision et le traitement laser proctologique. Son engagement repose sur la sécurité des patients, la réduction des douleurs post-opératoires et la discrétion des cicatrices.'
                : 'A recognized consultant in general and digestive surgery, Dr. NGUETSOP Jessica specializes in high-precision laparoscopic techniques and advanced laser proctology. Her clinical philosophy is centered on patient safety, minimal postoperative pain, and cosmetic discretion.'}
            </p>

            {/* Key Clinical Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full text-xs sm:text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{isFr ? 'Micro-incisions cœlioscopiques' : 'Micro-incision laparoscopy'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{isFr ? 'Technologie laser proctologique' : 'Laser diode proctology'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{isFr ? 'Prise en charge ambulatoire' : 'Same-day outpatient care'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{isFr ? 'Écoute & suivi personnalisé' : 'Attentive personalized care'}</span>
              </div>
            </div>

            {/* Paragraph 2 */}
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {isFr
                ? 'Chaque patient bénéficie d’une consultation préopératoire approfondie, d’une explication transparente de l’intervention et d’un accompagnement postopératoire continu pour un rétablissement rapide et serein.'
                : 'Every patient receives an in-depth pre-operative consultation, comprehensive procedure details, and continuous post-operative reassurance for a safe, smooth recovery.'}
            </p>

            {/* Learn More Button */}
            <div className="pt-2">
              <button
                onClick={onLearnMore}
                id="about-learn-more-btn"
                className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#7052ff] hover:bg-[#6042f0] text-white font-semibold text-sm sm:text-base shadow-sm hover:shadow-md transition-all duration-200 active:scale-98 cursor-pointer"
              >
                <span>{isFr ? 'Consulter le Profil Médical' : 'Learn More & Credentials'}</span>
                <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
