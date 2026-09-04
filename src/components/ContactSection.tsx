import React, { useState } from 'react';
import { Send, CheckCircle2, Phone, Mail, MapPin, ChevronDown, Copy, Check, HelpCircle } from 'lucide-react';
import { ContactFormData, Language } from '../types';
import { ContactTeamIllustration } from './MedicalIllustrations';
import { CLINIC_INFO, FAQ_DATA } from '../data';

interface ContactSectionProps {
  language: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ language }) => {
  const isFr = language === 'fr';

  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    phone: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [openFaqId, setOpenFaqId] = useState<string | null>(FAQ_DATA[0].id);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 500);
  };

  const handleReset = () => {
    setFormData({ fullName: '', phone: '', email: '', message: '' });
    setSubmitted(false);
  };

  const handleCopyPhone = () => {
    navigator.clipboard?.writeText(CLINIC_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="w-full bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading, Illustration & Quick Contact Info */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                {isFr ? 'Une question ou une urgence ?' : 'Have any questions ?'}
              </h2>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#7052ff] tracking-tight mt-1">
                {isFr ? 'Contactez le cabinet chirurgical' : 'Just write us a message !'}
              </h3>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed max-w-md">
              {isFr
                ? 'Notre équipe chirurgicale et le secrétariat du Dr NGUETSOP Jessica vous répondent avec réactivité pour vos prises de rendez-vous, avis chirurgicaux et urgences.'
                : 'Dr. NGUETSOP Jessica’s team and clinical coordinators are available to answer your surgical questions, consultation requests, and emergency inquiries.'}
            </p>

            {/* Quick Contact Cards */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              {/* Phone card with copy */}
              <div className="p-3.5 rounded-xl border border-gray-200 bg-gray-50 flex items-center justify-between">
                <a
                  href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-gray-800 hover:text-[#7052ff]"
                >
                  <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-[#7052ff]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-gray-400 font-normal uppercase">
                      {isFr ? 'Ligne directe' : 'Phone'}
                    </span>
                    <span>{CLINIC_INFO.phone}</span>
                  </div>
                </a>
                <button
                  onClick={handleCopyPhone}
                  title={isFr ? 'Copier le numéro' : 'Copy phone'}
                  className="p-1.5 text-gray-400 hover:text-[#7052ff] rounded-md transition-colors cursor-pointer"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Email card */}
              <a
                href={`mailto:${CLINIC_INFO.email}`}
                className="p-3.5 rounded-xl border border-gray-200 bg-gray-50 flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-gray-800 hover:text-[#7052ff]"
              >
                <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-[#7052ff]">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <span className="block text-[10px] text-gray-400 font-normal uppercase">
                    Email
                  </span>
                  <span className="truncate block">{CLINIC_INFO.email}</span>
                </div>
              </a>
            </div>

            {/* Address badge */}
            <div className="flex items-center gap-2 text-xs text-gray-600 bg-purple-50/70 px-3.5 py-2 rounded-xl border border-purple-100 w-full">
              <MapPin className="w-4 h-4 text-[#7052ff] shrink-0" />
              <span>{isFr ? CLINIC_INFO.addressFr : CLINIC_INFO.address}</span>
            </div>

            {/* Medical Staff Illustration */}
            <div className="w-full flex justify-center lg:justify-start pt-2">
              <ContactTeamIllustration />
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-6">
            <div
              id="contact-form-container"
              className="rounded-2xl border border-gray-200 p-7 sm:p-9 bg-white shadow-xs"
            >
              {submitted ? (
                <div className="py-12 text-center flex flex-col items-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900">
                    {isFr ? 'Message bien reçu !' : 'Message Received'}
                  </h4>
                  <p className="text-sm text-gray-600 max-w-md">
                    {isFr
                      ? `Merci d'avoir contacté l'équipe du Dr NGUETSOP Jessica. Nous allons vous joindre au ${formData.phone || formData.email} dans les plus brefs délais.`
                      : `Thank you for reaching out to Dr. NGUETSOP Jessica’s surgical team. We will contact you at ${formData.phone || formData.email} shortly.`}
                  </p>
                  <button
                    onClick={handleReset}
                    className="mt-4 px-6 py-2.5 rounded-lg border border-[#7052ff] text-[#7052ff] text-sm font-semibold hover:bg-purple-50 transition-colors cursor-pointer"
                  >
                    {isFr ? 'Envoyer un autre message' : 'Send Another Message'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h4 className="text-lg font-bold text-gray-900 mb-1">
                    {isFr ? 'Formulaire de contact & demande d’information' : 'Direct Surgical Inquiry'}
                  </h4>

                  {/* Full Name */}
                  <div className="space-y-1">
                    <label
                      htmlFor="contact-fullname"
                      className="block text-xs font-semibold text-gray-700 uppercase tracking-wider"
                    >
                      {isFr ? 'Nom complet' : 'Full name'}
                    </label>
                    <input
                      type="text"
                      id="contact-fullname"
                      required
                      placeholder={isFr ? 'ex. Sarah Bouzid' : 'e.g. Sarah Smith'}
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 border-b border-gray-300 focus:border-[#7052ff] focus:outline-none transition-colors text-sm text-gray-900 placeholder:text-gray-400 bg-transparent"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-1">
                    <label
                      htmlFor="contact-phone"
                      className="block text-xs font-semibold text-gray-700 uppercase tracking-wider"
                    >
                      {isFr ? 'Numéro de téléphone' : 'Phone Number'}
                    </label>
                    <input
                      type="tel"
                      id="contact-phone"
                      required
                      placeholder="+213 XX XX XX XX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 border-b border-gray-300 focus:border-[#7052ff] focus:outline-none transition-colors text-sm text-gray-900 placeholder:text-gray-400 bg-transparent"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1">
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-semibold text-gray-700 uppercase tracking-wider"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      required
                      placeholder="patient@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 border-b border-gray-300 focus:border-[#7052ff] focus:outline-none transition-colors text-sm text-gray-900 placeholder:text-gray-400 bg-transparent"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1 pt-1">
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-semibold text-gray-700 uppercase tracking-wider"
                    >
                      {isFr ? 'Votre message / symptômes / demande' : 'Message'}
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      placeholder={
                        isFr
                          ? 'Détaillez brièvement votre motif de consultation ou votre demande...'
                          : 'Write your surgical inquiry, symptoms or consultation request here...'
                      }
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-3.5 rounded-xl border border-gray-300 focus:border-[#7052ff] focus:ring-1 focus:ring-[#7052ff] focus:outline-none transition-colors text-sm text-gray-900 placeholder:text-gray-400 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      id="contact-submit-btn"
                      className="w-full py-3.5 px-6 rounded-xl bg-[#7052ff] hover:bg-[#6042f0] active:scale-98 text-white font-semibold text-sm sm:text-base shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                    >
                      {loading ? (
                        <span>{isFr ? 'Envoi en cours...' : 'Sending message...'}</span>
                      ) : (
                        <>
                          <span>{isFr ? 'Envoyer le message' : 'Send Message'}</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* FAQ Accordion Section - Major UX Improvement for Patients */}
        <div className="mt-20 pt-12 border-t border-gray-200">
          <div className="text-center max-w-xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7052ff] uppercase tracking-wider mb-2">
              <HelpCircle className="w-4 h-4" />
              <span>{isFr ? 'Foire aux Questions' : 'Frequently Asked Questions'}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
              {isFr ? 'Questions fréquentes des patients' : 'Common Patient Inquiries'}
            </h3>
          </div>

          <div className="max-w-3xl mx-auto space-y-3.5">
            {FAQ_DATA.map((faq) => {
              const isOpen = openFaqId === faq.id;
              const question = isFr ? faq.questionFr : faq.question;
              const answer = isFr ? faq.answerFr : faq.answer;

              return (
                <div
                  key={faq.id}
                  className="rounded-xl border border-gray-200 bg-white overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                    className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-gray-900 hover:text-[#7052ff] transition-colors cursor-pointer"
                  >
                    <span>{question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-gray-500 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#7052ff]' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3 animate-in fade-in duration-150">
                      {answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
