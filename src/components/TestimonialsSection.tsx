import React from 'react';
import { Star, MessageSquareQuote } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data';
import { Language, TestimonialItem } from '../types';

interface TestimonialsSectionProps {
  language: Language;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ language }) => {
  const isFr = language === 'fr';
  const topRow = TESTIMONIALS_DATA.slice(0, 3);
  const bottomRow = TESTIMONIALS_DATA.slice(3, 5);

  const renderCard = (item: TestimonialItem) => {
    const reviewText = isFr && item.reviewFr ? item.reviewFr : item.review;

    return (
      <div
        key={item.id}
        id={`testimonial-card-${item.id}`}
        className="bg-white rounded-2xl p-6 shadow-xs border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow"
      >
        <div>
          {/* Header with Avatar, Name, Location & Star Rating */}
          <div className="flex items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-3">
              {/* Avatar Photo */}
              <img
                src={item.avatar}
                alt={item.name}
                className="w-12 h-12 rounded-xl object-cover shadow-2xs border border-gray-100"
                referrerPolicy="no-referrer"
              />
              {/* Patient Name & City */}
              <div>
                <h4 className="text-base font-bold text-gray-900 tracking-tight leading-snug">
                  {item.name}
                </h4>
                <p className="text-xs font-semibold text-[#06b6d4]">
                  {item.city}
                </p>
              </div>
            </div>

            {/* Star Rating Badge */}
            <div className="flex items-center gap-1 text-[#10b981] font-semibold text-xs bg-emerald-50 px-2 py-1 rounded-lg">
              <Star className="w-3.5 h-3.5 fill-[#10b981] text-[#10b981]" />
              <span>{item.rating.toFixed(1)}</span>
            </div>
          </div>

          {/* Review text */}
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed italic">
            « {reviewText} »
          </p>
        </div>
      </div>
    );
  };

  return (
    <section id="testimonials" className="w-full bg-[#f3f4f6] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-[#10b981] text-xs font-bold uppercase tracking-wider mb-2">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>{isFr ? 'Avis Patients Vérifiés' : 'Verified Patient Reviews'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            {isFr ? 'Ce que nos patients disent' : 'What our great patients say'}
          </h2>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mt-1">
            {isFr ? 'à propos du ' : 'about '}{' '}
            <span className="text-[#7052ff]">Dr NGUETSOP Jessica</span>
          </h3>
        </div>

        {/* Top Row: 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 mb-6 sm:mb-7">
          {topRow.map(renderCard)}
        </div>

        {/* Bottom Row: 2 Centered Cards */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7">
          {bottomRow.map(renderCard)}
        </div>
      </div>
    </section>
  );
};
