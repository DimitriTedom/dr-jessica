import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, User, Phone, Mail, Stethoscope, AlertTriangle, Download, Send } from 'lucide-react';
import { SERVICES_DATA, CLINIC_INFO } from '../data';
import { AppointmentData, Language } from '../types';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
  language: Language;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  initialServiceId,
  language,
}) => {
  const isFr = language === 'fr';

  const [formData, setFormData] = useState<AppointmentData>({
    patientName: '',
    phone: '',
    email: '',
    serviceId: initialServiceId || SERVICES_DATA[0].id,
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    timeSlot: '09:30 AM',
    notes: '',
    isUrgent: false,
  });

  const [step, setStep] = useState<1 | 2>(1);
  const [confirmed, setConfirmed] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const morningSlots = ['08:30 AM', '09:30 AM', '10:30 AM', '11:30 AM'];
  const afternoonSlots = ['02:00 PM', '03:00 PM', '04:30 PM', '05:30 PM'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setConfirmed(true);
    }, 500);
  };

  const handleClose = () => {
    setConfirmed(false);
    setStep(1);
    onClose();
  };

  const selectedService = SERVICES_DATA.find((s) => s.id === formData.serviceId) || SERVICES_DATA[0];
  const serviceTitle = isFr && selectedService.titleFr ? selectedService.titleFr : selectedService.title;

  // Calendar .ics download feature
  const downloadCalendarEvent = () => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Cabinet Dr NGUETSOP Jessica//FR',
      'BEGIN:VEVENT',
      `SUMMARY:Consultation Chirurgicale - Dr NGUETSOP Jessica`,
      `DESCRIPTION:Consultation pour: ${serviceTitle}. Lieu: ${CLINIC_INFO.address}. Tél: ${CLINIC_INFO.phone}`,
      `LOCATION:${CLINIC_INFO.address}`,
      `STATUS:CONFIRMED`,
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `RDV-Dr-NGUETSOP-${formData.date}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // WhatsApp confirmation text
  const sendWhatsAppConfirmation = () => {
    const text = isFr
      ? `Bonjour Dr NGUETSOP Jessica, je souhaite confirmer mon rendez-vous de consultation pour "${serviceTitle}" le ${formData.date} à ${formData.timeSlot}. Nom: ${formData.patientName}, Tél: ${formData.phone}.`
      : `Hello Dr. NGUETSOP Jessica, I would like to confirm my surgical consultation for "${serviceTitle}" on ${formData.date} at ${formData.timeSlot}. Name: ${formData.patientName}, Phone: ${formData.phone}.`;
    const url = `https://wa.me/213698966328?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in">
      <div
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#7052ff] text-white px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Stethoscope className="w-5 h-5 text-purple-200" />
            <div>
              <h3 className="text-base sm:text-lg font-bold">
                {isFr ? 'Prendre Rendez-vous' : 'Book an Appointment'}
              </h3>
              <p className="text-xs text-purple-200">
                {isFr ? 'Cabinet du Dr NGUETSOP Jessica' : 'Dr. NGUETSOP Jessica Clinic'}
              </p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto">
          {confirmed ? (
            <div className="text-center py-4 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900">
                {isFr ? 'Demande de Rendez-vous Enregistrée !' : 'Appointment Requested!'}
              </h4>
              <p className="text-sm text-gray-600 max-w-md mx-auto">
                {isFr ? (
                  <>
                    Votre demande de consultation avec le{' '}
                    <strong className="text-gray-900">Dr NGUETSOP Jessica</strong> pour{' '}
                    <span className="text-[#7052ff] font-semibold">{serviceTitle}</span> le{' '}
                    <strong className="text-gray-900">{formData.date} à {formData.timeSlot}</strong> a bien été transmise au secrétariat.
                  </>
                ) : (
                  <>
                    Your consultation request with{' '}
                    <strong className="text-gray-900">Dr. NGUETSOP Jessica</strong> for{' '}
                    <span className="text-[#7052ff] font-semibold">{serviceTitle}</span> on{' '}
                    <strong className="text-gray-900">{formData.date} at {formData.timeSlot}</strong> has been received.
                  </>
                )}
              </p>

              {/* Clinic details pill */}
              <div className="bg-purple-50 rounded-xl p-4 text-xs text-gray-700 text-left space-y-1.5 border border-purple-100">
                <p>📍 <strong>{isFr ? 'Lieu :' : 'Location:'}</strong> {isFr ? CLINIC_INFO.addressFr : CLINIC_INFO.address}</p>
                <p>📞 <strong>{isFr ? 'Secrétariat :' : 'Reception:'}</strong> {CLINIC_INFO.phone}</p>
                <p>⚠️ {isFr ? 'Notre coordinatrice chirurgicale vous contactera par téléphone pour valider votre venue.' : 'Our coordinator will phone you shortly to confirm and prepare your visit.'}</p>
              </div>

              {/* Action Buttons: Calendar Download & WhatsApp message */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2.5">
                <button
                  onClick={downloadCalendarEvent}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-gray-300 hover:border-[#7052ff] text-gray-700 text-xs font-semibold flex items-center justify-center gap-2 hover:bg-purple-50 transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5 text-[#7052ff]" />
                  <span>{isFr ? 'Ajouter à mon agenda (.ics)' : 'Add to Calendar (.ics)'}</span>
                </button>

                <button
                  onClick={sendWhatsAppConfirmation}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isFr ? 'Confirmer sur WhatsApp' : 'Confirm via WhatsApp'}</span>
                </button>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleClose}
                  className="px-6 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold transition-colors cursor-pointer"
                >
                  {isFr ? 'Fermer la fenêtre' : 'Close Window'}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Step indicator */}
              <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-2">
                <div className="flex items-center gap-2">
                  <span
                    className={`w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center ${
                      step === 1 ? 'bg-[#7052ff] text-white' : 'bg-emerald-100 text-emerald-700'
                    }`}
                  >
                    1
                  </span>
                  <span className={`text-xs font-semibold ${step === 1 ? 'text-[#7052ff]' : 'text-gray-600'}`}>
                    {isFr ? 'Motif & Créneau' : 'Procedure & Slot'}
                  </span>
                </div>
                <div className="h-0.5 w-12 bg-gray-200" />
                <div className="flex items-center gap-2">
                  <span
                    className={`w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center ${
                      step === 2 ? 'bg-[#7052ff] text-white' : 'bg-gray-100 text-gray-400'
                    }`}
                  >
                    2
                  </span>
                  <span className={`text-xs font-semibold ${step === 2 ? 'text-[#7052ff]' : 'text-gray-400'}`}>
                    {isFr ? 'Vos Coordonnées' : 'Patient Info'}
                  </span>
                </div>
              </div>

              {step === 1 && (
                <div className="space-y-4 animate-in fade-in duration-150">
                  {/* Urgency Selector Toggle */}
                  <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50 border border-gray-200">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className={`w-4 h-4 ${formData.isUrgent ? 'text-amber-500' : 'text-gray-400'}`} />
                      <span className="text-xs font-semibold text-gray-700">
                        {isFr ? 'Il s’agit d’une situation urgente ?' : 'Is this an urgent surgical situation?'}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, isUrgent: !formData.isUrgent })}
                      className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                        formData.isUrgent
                          ? 'bg-amber-500 text-white'
                          : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                      }`}
                    >
                      {formData.isUrgent ? (isFr ? 'Oui (Prioritaire)' : 'Yes (Priority)') : (isFr ? 'Non (Routine)' : 'No (Routine)')}
                    </button>
                  </div>

                  {/* Service Selection */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                      {isFr ? 'Intervention / Motif de Consultation' : 'Surgical Category / Procedure'}
                    </label>
                    <select
                      value={formData.serviceId}
                      onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:border-[#7052ff] focus:ring-1 focus:ring-[#7052ff] outline-none"
                    >
                      {SERVICES_DATA.map((srv) => (
                        <option key={srv.id} value={srv.id}>
                          {isFr && srv.titleFr ? srv.titleFr : srv.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Date Input */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#7052ff]" />
                      <span>{isFr ? 'Date souhaitée' : 'Preferred Date'}</span>
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:border-[#7052ff] focus:ring-1 focus:ring-[#7052ff] outline-none"
                    />
                  </div>

                  {/* Time Slots (Morning & Afternoon) */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#7052ff]" />
                      <span>{isFr ? 'Heure de passage' : 'Preferred Time Slot'}</span>
                    </label>

                    {/* Morning */}
                    <p className="text-[11px] text-gray-500 font-medium mb-1">
                      {isFr ? 'Matinée (08h30 - 12h00)' : 'Morning'}
                    </p>
                    <div className="grid grid-cols-4 gap-2 mb-2.5">
                      {morningSlots.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setFormData({ ...formData, timeSlot: slot })}
                          className={`py-1.5 px-2 rounded-lg text-xs font-medium border text-center transition-colors cursor-pointer ${
                            formData.timeSlot === slot
                              ? 'border-[#7052ff] bg-purple-50 text-[#7052ff] font-bold'
                              : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>

                    {/* Afternoon */}
                    <p className="text-[11px] text-gray-500 font-medium mb-1">
                      {isFr ? 'Après-midi (14h00 - 18h00)' : 'Afternoon'}
                    </p>
                    <div className="grid grid-cols-4 gap-2">
                      {afternoonSlots.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setFormData({ ...formData, timeSlot: slot })}
                          className={`py-1.5 px-2 rounded-lg text-xs font-medium border text-center transition-colors cursor-pointer ${
                            formData.timeSlot === slot
                              ? 'border-[#7052ff] bg-purple-50 text-[#7052ff] font-bold'
                              : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="w-full py-3 rounded-xl bg-[#7052ff] hover:bg-[#6042f0] text-white font-semibold text-sm shadow-xs transition-colors cursor-pointer"
                    >
                      {isFr ? 'Continuer (Étape 2 : Vos coordonnées)' : 'Continue to Step 2'}
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4 animate-in fade-in duration-150">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1 flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-[#7052ff]" />
                      <span>{isFr ? 'Nom et Prénom du patient' : 'Patient Full Name'}</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={isFr ? 'ex. Amina Mansouri' : 'e.g. John Doe'}
                      value={formData.patientName}
                      onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:border-[#7052ff] focus:ring-1 focus:ring-[#7052ff] outline-none"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1 flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5 text-[#7052ff]" />
                      <span>{isFr ? 'Numéro de téléphone portable' : 'Phone Number'}</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+213 XX XX XX XX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:border-[#7052ff] focus:ring-1 focus:ring-[#7052ff] outline-none"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1 flex items-center gap-1">
                      <Mail className="w-3.5 h-3.5 text-[#7052ff]" />
                      <span>Email ({isFr ? 'facultatif' : 'optional'})</span>
                    </label>
                    <input
                      type="email"
                      placeholder="patient@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:border-[#7052ff] focus:ring-1 focus:ring-[#7052ff] outline-none"
                    />
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                      {isFr ? 'Précisions / Antécédents / Traitement actuel' : 'Clinical Notes / Medications'}
                    </label>
                    <textarea
                      rows={2}
                      placeholder={isFr ? 'Allergies, examens déjà réalisés (échographie, scanner)...' : 'Ultrasound results, current medications...'}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl border border-gray-300 text-sm focus:border-[#7052ff] focus:ring-1 focus:ring-[#7052ff] outline-none resize-none"
                    />
                  </div>

                  {/* Navigation Buttons */}
                  <div className="pt-2 flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="w-1/3 py-3 rounded-xl border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold text-sm transition-colors cursor-pointer"
                    >
                      {isFr ? '← Retour' : '← Back'}
                    </button>
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-2/3 py-3 rounded-xl bg-[#7052ff] hover:bg-[#6042f0] text-white font-semibold text-sm shadow-xs transition-colors cursor-pointer disabled:opacity-75"
                    >
                      {loading
                        ? (isFr ? 'Validation en cours...' : 'Confirming...')
                        : (isFr ? 'Confirmer la Demande de RDV' : 'Submit Consultation Request')}
                    </button>
                  </div>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
