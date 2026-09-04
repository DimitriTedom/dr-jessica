import React from 'react';

interface IconProps {
  className?: string;
  color?: string;
}

// Logo Pulse Heartbeat Icon
export const HeartbeatLogoIcon: React.FC<IconProps> = ({ className = 'w-9 h-9' }) => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="40" height="40" rx="10" fill="#E8F8F5" />
    <path
      d="M6 21H13L16 11L21 29L25 16L28 23H34"
      stroke="#10B981"
      strokeWidth="3.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Floating Heartbeat Circle Badge (Hero)
export const FloatingHeartbeatBadge: React.FC<IconProps> = ({ className = 'w-14 h-14' }) => (
  <div className={`rounded-full bg-[#009b86] p-3 shadow-lg flex items-center justify-center ${className}`}>
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
      <path
        d="M4 16H9L12 8L17 24L20 12L23 18H28"
        stroke="#ffffff"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

// 1. Gastrointestinal Surgery: Stomach & Digestive Tract Icon
export const GastrointestinalIcon: React.FC<IconProps> = ({ className = 'w-14 h-14', color = '#7052ff' }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Esophagus */}
    <path d="M28 8V16" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    <path d="M34 8V15" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    {/* Stomach Fundus, Body and Duodenum */}
    <path
      d="M34 15C36 12 44 14 47 22C50 30 45 42 38 48C30 54 18 50 16 38C14 26 22 17 28 16"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Inner rugal folds */}
    <path
      d="M26 25C24 30 25 38 31 42"
      stroke={color}
      strokeWidth="2"
      strokeDasharray="2 3"
      strokeLinecap="round"
    />
    <path
      d="M33 24C35 30 36 36 41 40"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
    {/* Duodenum exit */}
    <path
      d="M38 48C42 50 48 48 50 44C51 40 48 37 46 36"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

// 2. Surgical Emergencies: Ambulance Emergency Vehicle
export const SurgicalEmergencyIcon: React.FC<IconProps> = ({ className = 'w-14 h-14', color = '#ffffff' }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Siren light */}
    <path d="M20 14H24V16H20V14Z" fill={color} />
    <path d="M22 10V14" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <path d="M17 12L19 14" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <path d="M27 12L25 14" stroke={color} strokeWidth="2" strokeLinecap="round" />
    {/* Ambulance Body */}
    <path
      d="M10 20H40C41.1 20 42 20.9 42 22V28H50L54 34V46C54 47.1 53.1 48 52 48H48M10 48H8C6.9 48 6 47.1 6 46V24C6 21.8 7.8 20 10 20Z"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Cab window */}
    <path
      d="M44 28H49.5L52.5 34H44V28Z"
      stroke={color}
      strokeWidth="2"
      strokeLinejoin="round"
    />
    {/* Wheels */}
    <circle cx="17" cy="48" r="6" stroke={color} strokeWidth="2.5" />
    <circle cx="17" cy="48" r="2" fill={color} />
    <circle cx="43" cy="48" r="6" stroke={color} strokeWidth="2.5" />
    <circle cx="43" cy="48" r="2" fill={color} />
    <path d="M23 48H37" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    {/* Medical Cross on Ambulance Side */}
    <rect x="23" y="26" width="6" height="14" rx="1.5" fill={color} />
    <rect x="19" y="30" width="14" height="6" rx="1.5" fill={color} />
  </svg>
);

// 3. Laser Hemorrhoid Surgery: Laser Scalpel / Applicator
export const LaserHemorrhoidIcon: React.FC<IconProps> = ({ className = 'w-14 h-14', color = '#7052ff' }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Cylindrical Laser Wand / Pen */}
    <path
      d="M48 10L54 16L24 46L18 40L48 10Z"
      stroke={color}
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
    {/* Handle Grip Stripes */}
    <line x1="39" y1="19" x2="45" y2="25" stroke={color} strokeWidth="2" />
    <line x1="34" y1="24" x2="40" y2="30" stroke={color} strokeWidth="2" />
    <line x1="29" y1="29" x2="35" y2="35" stroke={color} strokeWidth="2" />
    {/* Precision Probe Tip */}
    <path
      d="M18 40L10 50L20 54L24 46"
      stroke={color}
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
    {/* Laser Energy Ray at tip */}
    <line x1="10" y1="50" x2="4" y2="58" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    <path d="M5 52L8 56" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    <path d="M12 59L15 55" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

// 4. Cholecystectomy: Gallbladder and Bile Ducts
export const CholecystectomyIcon: React.FC<IconProps> = ({ className = 'w-14 h-14', color = '#7052ff' }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Branching Bile Ducts (Hepatic & Common bile ducts) */}
    <path d="M42 12V22M48 14L42 22" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    <path d="M42 22V52" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    <path d="M42 34C37 32 34 30 33 26" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    {/* Pear-shaped Gallbladder organ */}
    <path
      d="M33 26C31 22 28 20 23 20C17 20 14 26 14 34C14 43 20 48 26 48C33 48 36 40 34 32C33.5 29.5 33 28 33 26Z"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Internal subtle stone / contour */}
    <circle cx="24" cy="35" r="3" stroke={color} strokeWidth="2" strokeDasharray="1 2" />
  </svg>
);

// 5. Thyroid Surgery: Neck Contour & Thyroid Gland
export const ThyroidIcon: React.FC<IconProps> = ({ className = 'w-14 h-14', color = '#7052ff' }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Neck & Chin lines */}
    <path
      d="M20 10C24 16 26 18 32 18C38 18 40 16 44 10"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    {/* Lateral neck down to clavicle shoulders */}
    <path
      d="M20 10C21 22 18 32 12 40C8 45 6 48 4 50"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M44 10C43 22 46 32 52 40C56 45 58 48 60 50"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    {/* Clavicle notch */}
    <path d="M26 50C29 52 35 52 38 50" stroke={color} strokeWidth="2" strokeLinecap="round" />
    {/* Butterfly-shaped Thyroid Gland */}
    <path
      d="M26 28C22 24 20 30 20 35C20 40 24 42 27 39C29 37 30 34 32 34C34 34 35 37 37 39C40 42 44 40 44 35C44 30 42 24 38 28C36 30 34 31 32 31C30 31 28 30 26 28Z"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Trachea ring marks */}
    <line x1="30" y1="23" x2="34" y2="23" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <line x1="30" y1="26" x2="34" y2="26" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// 6. Hernia Surgery: Abdominal Torso & Hernia Highlight
export const HerniaIcon: React.FC<IconProps> = ({ className = 'w-14 h-14', color = '#7052ff' }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Torso outline */}
    <path
      d="M18 12C14 18 16 26 18 36C20 46 16 54 14 58"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M46 12C50 18 48 26 46 36C44 46 48 54 50 58"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    {/* Chest & Pelvic guide */}
    <path d="M26 14C30 18 34 18 38 14" stroke={color} strokeWidth="2" strokeLinecap="round" />
    {/* Umbilicus / Center mark */}
    <circle cx="32" cy="32" r="2" fill={color} />
    {/* Inguinal/Abdominal Hernia bulge ring */}
    <path
      d="M26 40C24 43 25 48 30 48C35 48 36 43 34 40C32 38 28 38 26 40Z"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M28 44C30 46 32 46 34 44" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

// Social Media Icons
export const FacebookIcon: React.FC<IconProps> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

export const WhatsAppIcon: React.FC<IconProps> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12.031 0C5.405 0 .027 5.378.027 12.004c0 2.116.55 4.18 1.597 5.992L0 24l6.195-1.624a11.96 11.96 0 005.836 1.503h.005c6.626 0 12.005-5.378 12.005-12.004 0-3.208-1.25-6.223-3.518-8.492C18.254 1.25 15.239 0 12.031 0zm0 21.908h-.004a9.934 9.934 0 01-5.068-1.393l-.364-.216-3.766.988 1.005-3.671-.237-.377a9.92 9.92 0 01-1.521-5.235c0-5.485 4.464-9.949 9.954-9.949 2.658 0 5.157 1.035 7.037 2.915 1.88 1.88 2.915 4.38 2.915 7.038 0 5.486-4.464 9.95-9.95 9.95zm5.452-7.447c-.299-.15-1.771-.874-2.046-.974-.275-.1-.475-.15-.675.15-.2.3-.775.974-.95 1.174-.175.2-.35.225-.65.075-.3-.15-1.266-.467-2.411-1.488-.891-.795-1.493-1.777-1.668-2.077-.175-.3-.019-.462.131-.611.135-.134.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.244-.583-.492-.505-.675-.514-.175-.009-.375-.011-.575-.011s-.525.075-.8.375c-.275.3-1.05 1.026-1.05 2.501s1.075 2.899 1.225 3.1c.15.2 2.115 3.23 5.124 4.532.716.31 1.275.495 1.71.633.719.229 1.373.197 1.891.12.577-.086 1.771-.724 2.021-1.423.25-.699.25-1.299.175-1.424-.075-.125-.275-.2-.575-.35z" />
  </svg>
);

export const InstagramIcon: React.FC<IconProps> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);
