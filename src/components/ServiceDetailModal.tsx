import React from 'react';
import { X, CheckCircle2, Stethoscope, ArrowRight, ShieldCheck, Clock, BedDouble } from 'lucide-react';
import { ServiceItem, Language } from '../types';
import {
  GastrointestinalIcon,
  SurgicalEmergencyIcon,
  LaserHemorrhoidIcon,
  CholecystectomyIcon,
  ThyroidIcon,
  HerniaIcon,
} from './MedicalIcons';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookForService: (serviceId: string) => void;
  language: Language;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBookForService,
  language,
}) => {
  if (!service) return null;

  const isFr = language === 'fr';
  const title = isFr && service.titleFr ? service.titleFr : service.title;
  const overview = isFr && service.details?.overviewFr ? service.details.overviewFr : service.details?.overview || service.description;
  const indications = isFr && service.details?.indicationsFr ? service.details.indicationsFr : service.details?.indications;
  const technique = isFr && service.details?.techniqueFr ? service.details.techniqueFr : service.details?.technique;
  const recovery = isFr && service.details?.recoveryFr ? service.details.recoveryFr : service.details?.recovery;

  const renderIcon = (type: ServiceItem['iconType']) => {
    switch (type) {
      case 'stomach':
        return <GastrointestinalIcon color="#7052ff" className="w-12 h-12" />;
      case 'emergency':
        return <SurgicalEmergencyIcon color="#7052ff" className="w-12 h-12" />;
      case 'laser':
        return <LaserHemorrhoidIcon color="#7052ff" className="w-12 h-12" />;
      case 'cholecystectomy':
        return <CholecystectomyIcon color="#7052ff" className="w-12 h-12" />;
      case 'thyroid':
        return <ThyroidIcon color="#7052ff" className="w-12 h-12" />;
      case 'hernia':
        return <HerniaIcon color="#7052ff" className="w-12 h-12" />;
      default:
        return <GastrointestinalIcon color="#7052ff" className="w-12 h-12" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in">
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#7052ff] to-[#5b3adb] text-white p-6 flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-xl bg-white p-2 flex items-center justify-center shadow-md shrink-0">
              {renderIcon(service.iconType)}
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-purple-200 font-semibold">
                {isFr ? 'Fiche Clinique d’Intervention' : 'Surgical Specialization'}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight">{title}</h3>
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
          {/* Duration & Stay Pills */}
          {(service.duration || service.stay) && (
            <div className="flex flex-wrap gap-2 text-xs font-semibold">
              {service.duration && (
                <div className="px-3 py-1.5 rounded-lg bg-purple-50 text-[#7052ff] flex items-center gap-1.5 border border-purple-100">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{isFr ? 'Durée estimée :' : 'Estimated Duration:'} {service.duration}</span>
                </div>
              )}
              {service.stay && (
                <div className="px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 flex items-center gap-1.5 border border-emerald-100">
                  <BedDouble className="w-3.5 h-3.5" />
                  <span>{isFr ? 'Séjour :' : 'Stay:'} {service.stay}</span>
                </div>
              )}
            </div>
          )}

          {/* Clinical Overview */}
          <div>
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2 flex items-center gap-2">
              <Stethoscope className="w-4 h-4 text-[#7052ff]" />
              <span>{isFr ? 'Présentation Chirurgicale' : 'Clinical Overview'}</span>
            </h4>
            <p className="text-sm text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-xl border border-gray-100">
              {overview}
            </p>
          </div>

          {/* Common Indications */}
          {indications && (
            <div>
              <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2.5 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#10b981]" />
                <span>{isFr ? 'Indications & Pathologies traitées' : 'Primary Indications & Treated Pathologies'}</span>
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {indications.map((ind, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-[#10b981] shrink-0 mt-0.5" />
                    <span>{ind}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Surgical Technique & Recovery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-purple-50/50 p-4 rounded-xl border border-purple-100">
              <h5 className="text-xs font-bold text-[#7052ff] uppercase tracking-wider mb-1.5">
                {isFr ? 'Approche & Technique' : 'Surgical Approach'}
              </h5>
              <p className="text-xs text-gray-600 leading-relaxed">
                {technique || (isFr ? 'Approche cœlioscopique mini-invasive avec rétablissement accéléré.' : 'Minimally invasive laparoscopy with micro-incisions.')}
              </p>
            </div>

            <div className="bg-emerald-50/50 p-4 rounded-xl border border-emerald-100">
              <h5 className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-1.5">
                {isFr ? 'Rétablissement Post-Opératoire' : 'Expected Recovery'}
              </h5>
              <p className="text-xs text-gray-600 leading-relaxed">
                {recovery || (isFr ? 'Reprise des activités légères sous 7 à 14 jours.' : 'Typical return to routine life within 7–14 days.')}
              </p>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-5 bg-gray-50 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-gray-600 hover:text-gray-900 cursor-pointer"
          >
            {isFr ? 'Fermer' : 'Close'}
          </button>
          <button
            onClick={() => {
              onClose();
              onBookForService(service.id);
            }}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#7052ff] hover:bg-[#6042f0] text-white text-xs sm:text-sm font-semibold shadow-xs cursor-pointer"
          >
            <span>{isFr ? 'Prendre RDV pour cette intervention' : 'Book Consultation for this Procedure'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
