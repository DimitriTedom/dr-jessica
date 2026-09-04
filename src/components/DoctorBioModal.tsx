import React from 'react';
import { X, Award, GraduationCap, Building2, CheckCircle, Phone, Calendar } from 'lucide-react';
import { CLINIC_INFO } from '../data';
import { DoctorAboutIllustration } from './MedicalIllustrations';
import { Language } from '../types';

interface DoctorBioModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBook: () => void;
  language: Language;
}

export const DoctorBioModal: React.FC<DoctorBioModalProps> = ({
  isOpen,
  onClose,
  onBook,
  language,
}) => {
  if (!isOpen) return null;

  const isFr = language === 'fr';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in">
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#7052ff] text-white p-6 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <Award className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-purple-200 font-semibold">
                {isFr ? 'Profil & Titres Médicaux' : 'Surgeon Profile & Credentials'}
              </span>
              <h3 className="text-2xl font-bold tracking-tight">Dr NGUETSOP Jessica</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="w-36 sm:w-40 shrink-0">
              <DoctorAboutIllustration className="max-w-[130px] sm:max-w-[140px]" />
            </div>
            <div className="space-y-2 text-center sm:text-left">
              <h4 className="text-lg font-bold text-gray-900">
                {isFr
                  ? 'Spécialiste en Chirurgie Générale, Viscérale & Cœlioscopie'
                  : 'Consultant in General & Laparoscopic Surgery'}
              </h4>
              <p className="text-xs text-[#06b6d4] font-semibold flex items-center justify-center sm:justify-start gap-1">
                <Building2 className="w-3.5 h-3.5" />
                <span>{isFr ? CLINIC_INFO.addressFr : CLINIC_INFO.address}</span>
              </p>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {isFr
                  ? 'Le Dr NGUETSOP Jessica met son expertise au service d’une chirurgie moderne, mini-invasive et humaine. Elle prend en charge les affections digestives, la chirurgie de la vésicule, des hernies et les pathologies proctologiques traitées par thermo-ablation laser diode.'
                  : 'Dr. NGUETSOP Jessica brings high surgical precision and compassionate care to digestive pathology, laparoscopic gallbladder excision, hernia repair, and minimally invasive diode laser proctology.'}
              </p>
            </div>
          </div>

          {/* Academic & Professional Milestones */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold text-gray-900 uppercase tracking-wider flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-[#7052ff]" />
              <span>{isFr ? 'Formation & Qualifications Universitaires' : 'Education & Qualifications'}</span>
            </h5>
            <div className="space-y-2 text-xs sm:text-sm text-gray-700">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>
                  {isFr
                    ? 'Doctorat d’État en Médecine (Diplôme d’État de Docteur en Médecine)'
                    : 'Doctor of Medicine (MD) Degree'}
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>
                  {isFr
                    ? 'Diplôme d’Études Spécialisées (DES) en Chirurgie Générale & Viscérale'
                    : 'Specialized Residency Diploma in General & Visceral Surgery'}
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>
                  {isFr
                    ? 'Formation Approfondie en Cœlioscopie Avancée et Traitement Laser Mini-Invasif'
                    : 'Advanced Certifications in Laparoscopic Surgery and Laser Proctology'}
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>
                  {isFr
                    ? 'Membre de la Société de Chirurgie & Praticienne agréée'
                    : 'Member of Surgical Societies & Board-Registered Practitioner'}
                </span>
              </div>
            </div>
          </div>

          {/* Clinical Commitment */}
          <div className="bg-purple-50 p-4 rounded-xl border border-purple-100 text-xs text-gray-700 leading-relaxed">
            <strong className="text-[#7052ff] block mb-1">
              {isFr ? 'Philosophie de Prise en Charge :' : 'Philosophy of Care:'}
            </strong>
            {isFr
              ? 'Priorité absolue à la sécurité du geste opératoire, à la préservation des tissus grâce aux techniques mini-invasives, à la gestion anticipée de la douleur et à une communication bienveillante et transparente avec chaque patient.'
              : 'Absolute dedication to patient safety, tissue preservation through mini-invasive laparoscopy, low-scar aesthetics, active pain mitigation, and continuous communication throughout recovery.'}
          </div>
        </div>

        {/* Footer */}
        <div className="p-5 bg-gray-50 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
          <a
            href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`}
            className="inline-flex items-center gap-2 text-xs font-semibold text-gray-700 hover:text-[#7052ff]"
          >
            <Phone className="w-3.5 h-3.5 text-[#7052ff]" />
            <span>{CLINIC_INFO.phone}</span>
          </a>

          <button
            onClick={() => {
              onClose();
              onBook();
            }}
            className="px-6 py-2.5 rounded-xl bg-[#7052ff] hover:bg-[#6042f0] text-white text-sm font-semibold shadow-xs flex items-center gap-2 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>{isFr ? 'Prendre Rendez-vous' : 'Book Consultation'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
