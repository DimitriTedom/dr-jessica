import React, { useState } from 'react';
import { SERVICES_DATA } from '../data';
import { ServiceItem, Language } from '../types';
import {
  GastrointestinalIcon,
  SurgicalEmergencyIcon,
  LaserHemorrhoidIcon,
  CholecystectomyIcon,
  ThyroidIcon,
  HerniaIcon,
} from './MedicalIcons';
import { Search, Clock, BedDouble, ChevronRight } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  language: Language;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  language,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'digestive' | 'laser' | 'emergency'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const isFr = language === 'fr';

  const renderIcon = (type: ServiceItem['iconType'], isFeatured: boolean = false) => {
    const iconColor = isFeatured ? '#ffffff' : '#7052ff';
    switch (type) {
      case 'stomach':
        return <GastrointestinalIcon color={iconColor} className="w-16 h-16" />;
      case 'emergency':
        return <SurgicalEmergencyIcon color={iconColor} className="w-16 h-16" />;
      case 'laser':
        return <LaserHemorrhoidIcon color={iconColor} className="w-16 h-16" />;
      case 'cholecystectomy':
        return <CholecystectomyIcon color={iconColor} className="w-16 h-16" />;
      case 'thyroid':
        return <ThyroidIcon color={iconColor} className="w-16 h-16" />;
      case 'hernia':
        return <HerniaIcon color={iconColor} className="w-16 h-16" />;
      default:
        return <GastrointestinalIcon color={iconColor} className="w-16 h-16" />;
    }
  };

  const categories = [
    { id: 'all', label: isFr ? 'Toutes les interventions' : 'All Procedures' },
    { id: 'digestive', label: isFr ? 'Viscérale & Cœlioscopie' : 'Visceral & Laparoscopy' },
    { id: 'laser', label: isFr ? 'Laser & Ambulatoire' : 'Laser & Outpatient' },
    { id: 'emergency', label: isFr ? 'Urgences 24/7' : 'Emergencies 24/7' },
  ];

  const filteredServices = SERVICES_DATA.filter((service) => {
    const title = (isFr && service.titleFr ? service.titleFr : service.title).toLowerCase();
    const desc = (isFr && service.descriptionFr ? service.descriptionFr : service.description).toLowerCase();
    const matchesSearch = title.includes(searchQuery.toLowerCase()) || desc.includes(searchQuery.toLowerCase());

    if (selectedCategory === 'all') return matchesSearch;
    if (selectedCategory === 'emergency') return matchesSearch && service.category === 'emergency';
    if (selectedCategory === 'laser') return matchesSearch && service.category === 'laser';
    if (selectedCategory === 'digestive') return matchesSearch && (service.category === 'digestive' || service.category === 'general');
    return matchesSearch;
  });

  return (
    <section id="services" className="w-full bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            {isFr ? 'Nos ' : 'Our '}{' '}
            <span className="text-[#7052ff]">{isFr ? 'Interventions & Services' : 'Main Services'}</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-2">
            {isFr
              ? 'Actes chirurgicaux de pointe réalisés avec des technologies mini-invasives et laser par le Dr NGUETSOP Jessica.'
              : 'Cutting-edge surgical procedures delivered with mini-invasive and laser innovations by Dr. NGUETSOP Jessica.'}
          </p>
        </div>

        {/* Filter & Search Bar - UX Enhancement */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 bg-gray-50/80 p-2.5 sm:p-3 rounded-2xl border border-gray-200">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as any)}
                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#7052ff] text-white shadow-xs'
                    : 'text-gray-600 hover:text-[#7052ff] hover:bg-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={isFr ? 'Rechercher une intervention...' : 'Search procedure...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3.5 py-1.5 text-xs sm:text-sm bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#7052ff] transition-colors"
            />
          </div>
        </div>

        {/* Services Grid */}
        {filteredServices.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-2xl border border-gray-100 text-gray-500">
            <p className="text-sm">
              {isFr
                ? 'Aucune intervention ne correspond à votre recherche.'
                : 'No procedures found matching your search.'}
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-3 text-xs font-semibold text-[#7052ff] hover:underline"
            >
              {isFr ? 'Réinitialiser les filtres' : 'Reset filters'}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredServices.map((service) => {
              const isFeatured = !!service.isFeatured;
              const title = isFr && service.titleFr ? service.titleFr : service.title;
              const desc = isFr && service.descriptionFr ? service.descriptionFr : service.description;

              return (
                <div
                  key={service.id}
                  id={`service-card-${service.id}`}
                  onClick={() => onSelectService(service)}
                  className={`group relative rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 cursor-pointer ${
                    isFeatured
                      ? 'bg-[#7052ff] text-white shadow-xl shadow-purple-500/20 hover:-translate-y-1'
                      : 'bg-[#f4f4f7] hover:bg-[#eaeaf0] text-gray-900 hover:-translate-y-1'
                  }`}
                >
                  <div>
                    {/* Top Badges for Duration & Stay */}
                    <div className="flex items-center justify-between gap-2 mb-5 text-[11px] font-semibold">
                      {service.stay && (
                        <span
                          className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full ${
                            isFeatured
                              ? 'bg-white/20 text-white'
                              : 'bg-white text-gray-700 border border-gray-200 shadow-2xs'
                          }`}
                        >
                          <BedDouble className="w-3 h-3" />
                          <span>{service.stay}</span>
                        </span>
                      )}
                      {service.duration && (
                        <span
                          className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full ${
                            isFeatured
                              ? 'bg-white/20 text-white'
                              : 'bg-purple-100 text-[#7052ff]'
                          }`}
                        >
                          <Clock className="w-3 h-3" />
                          <span>{service.duration}</span>
                        </span>
                      )}
                    </div>

                    {/* Icon Container */}
                    <div className="mb-5 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                      {renderIcon(service.iconType, isFeatured)}
                    </div>

                    {/* Title */}
                    <h4
                      className={`text-lg sm:text-xl font-bold mb-3 tracking-tight text-center ${
                        isFeatured ? 'text-white' : 'text-gray-950'
                      }`}
                    >
                      {title}
                    </h4>

                    {/* Description */}
                    <p
                      className={`text-xs sm:text-sm leading-relaxed text-center ${
                        isFeatured ? 'text-purple-100' : 'text-gray-600'
                      }`}
                    >
                      {desc}
                    </p>
                  </div>

                  {/* Click cue footer */}
                  <div
                    className={`mt-6 pt-3.5 border-t flex items-center justify-center gap-1 text-xs font-semibold tracking-wide transition-opacity ${
                      isFeatured
                        ? 'border-white/20 text-white'
                        : 'border-gray-200 text-[#7052ff] group-hover:text-[#6042f0]'
                    }`}
                  >
                    <span>
                      {isFeatured
                        ? isFr ? 'Protocole Urgences 24/7' : 'View Emergency Protocol'
                        : isFr ? 'Fiche détaillée de l’intervention' : 'View Procedure Details'}
                    </span>
                    <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
