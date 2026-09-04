import React from 'react';
import { ExternalLink, ShieldCheck, Clock, Sparkles, PhoneCall } from 'lucide-react';
import { HeroTeamIllustration } from './MedicalIllustrations';
import { Language } from '../types';
import { CLINIC_INFO } from '../data';

interface HeroProps {
  onOpenBooking: () => void;
  language: Language;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, language }) => {
  const isFr = language === 'fr';

  return (
    <section id="home" className="relative w-full overflow-hidden bg-white pt-6 pb-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Hero Column */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-4 sm:space-y-5">
            {/* "Welcome to" / "Bienvenue" */}
            <div className="inline-flex items-center gap-2 text-gray-800 text-lg sm:text-xl font-semibold">
              <Sparkles className="w-5 h-5 text-[#7052ff]" />
              <span>{isFr ? 'Bienvenue au cabinet du' : 'Welcome to'}</span>
            </div>

            {/* Dr NGUETSOP Jessica outlined badge pill */}
            <div
              id="hero-doctor-badge"
              className="inline-block px-5 py-2.5 rounded-xl border-2 border-[#7052ff] bg-purple-50/40 shadow-xs"
            >
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#7052ff] tracking-normal">
                Dr NGUETSOP Jessica
              </h1>
            </div>

            {/* Specialty Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-gray-950 leading-[1.2] tracking-tight">
              {isFr
                ? 'Chirurgie générale, viscérale & cœlioscopie avancée'
                : 'Specialist in general and laparoscopic surgery'}
            </h2>

            {/* Subtitle / Clinical Bio Teaser */}
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-xl">
              {isFr
                ? 'Chirurgie mini-invasive par caméra haute définition, proctologie laser sans coupure, chirurgie de la vésicule et prise en charge humaine et bienveillante de chaque patient.'
                : 'Expert minimally invasive laparoscopic surgery, painless diode laser proctology, gallbladder procedures, and tailored post-operative recovery.'}
            </p>

            {/* Action Buttons: Book an Appointment + Direct Emergency Call */}
            <div className="pt-2 sm:pt-4 flex flex-wrap items-center gap-3.5">
              <button
                onClick={onOpenBooking}
                id="hero-book-appointment-btn"
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#7052ff] hover:bg-[#6042f0] text-white font-semibold text-base shadow-md hover:shadow-lg transition-all duration-200 active:scale-98 cursor-pointer"
              >
                <span>{isFr ? 'Prendre un Rendez-vous' : 'Book an Appointment'}</span>
                <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <a
                href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`}
                id="hero-call-emergency-btn"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-gray-300 hover:border-[#7052ff] hover:bg-purple-50/50 text-gray-700 hover:text-[#7052ff] font-semibold text-base transition-all duration-200"
              >
                <PhoneCall className="w-4 h-4 text-[#7052ff]" />
                <span>{isFr ? 'Urgence 24/7' : '24/7 Emergency'}</span>
              </a>
            </div>

            {/* Clinical Trust Points */}
            <div className="pt-3 border-t border-gray-100 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-gray-600 font-medium">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>{isFr ? 'Cœlioscopie mini-invasive' : 'Minimally invasive'}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#7052ff]" />
                <span>{isFr ? 'Retour à domicile rapide' : 'Fast recovery'}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>{isFr ? 'Laser diode indolore' : 'Painless diode laser'}</span>
              </span>
            </div>
          </div>

          {/* Right Hero Column: Medical Team Illustration */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <HeroTeamIllustration />
          </div>
        </div>
      </div>
    </section>
  );
};
