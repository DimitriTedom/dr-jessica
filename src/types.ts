export type Language = 'fr' | 'en';

export interface ServiceItem {
  id: string;
  title: string;
  titleFr?: string;
  category: 'digestive' | 'emergency' | 'laser' | 'general';
  description: string;
  descriptionFr?: string;
  isFeatured?: boolean;
  duration?: string;
  stay?: string;
  iconType: 'stomach' | 'emergency' | 'laser' | 'cholecystectomy' | 'thyroid' | 'hernia';
  details?: {
    overview: string;
    overviewFr?: string;
    indications: string[];
    indicationsFr?: string[];
    technique: string;
    techniqueFr?: string;
    recovery: string;
    recoveryFr?: string;
  };
}

export interface TestimonialItem {
  id: string;
  name: string;
  city: string;
  rating: number;
  avatar: string;
  review: string;
  reviewFr?: string;
}

export interface AppointmentData {
  patientName: string;
  phone: string;
  email: string;
  serviceId: string;
  date: string;
  timeSlot: string;
  notes?: string;
  isUrgent?: boolean;
}

export interface ContactFormData {
  fullName: string;
  phone: string;
  email: string;
  message: string;
}

export interface FAQItem {
  id: string;
  question: string;
  questionFr: string;
  answer: string;
  answerFr: string;
}
