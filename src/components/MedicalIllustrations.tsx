import React from 'react';
import { FloatingHeartbeatBadge } from './MedicalIcons';

// Hero Section Medical Team Illustration
export const HeroTeamIllustration: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full max-w-[540px] mx-auto select-none ${className}`}>
      {/* Floating Heartbeat Badge in top right */}
      <div className="absolute -top-3 right-6 z-20 animate-bounce duration-1000">
        <FloatingHeartbeatBadge className="w-13 h-13 shadow-xl" />
      </div>

      <svg
        viewBox="0 0 520 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-sm"
      >
        <defs>
          <linearGradient id="blobGrad1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#805af5" />
            <stop offset="100%" stopColor="#673fe6" />
          </linearGradient>
          <linearGradient id="blobGradTeal" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#bbf2e9" />
            <stop offset="100%" stopColor="#99e3d6" />
          </linearGradient>
          <linearGradient id="skin1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fcd3be" />
            <stop offset="100%" stopColor="#f5be9e" />
          </linearGradient>
          <linearGradient id="skin2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fad0b5" />
            <stop offset="100%" stopColor="#f3b89b" />
          </linearGradient>
          <linearGradient id="skin3" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffd8c2" />
            <stop offset="100%" stopColor="#f7c2a4" />
          </linearGradient>
        </defs>

        {/* Organic Background Blob Shapes */}
        {/* Soft Teal Blob Left */}
        <path
          d="M60 210C35 150 70 80 130 65C190 50 220 110 240 160C260 210 210 260 160 280C110 300 85 270 60 210Z"
          fill="url(#blobGradTeal)"
          opacity="0.8"
        />
        {/* Purple Blob Right */}
        <path
          d="M330 140C380 90 460 110 480 170C500 230 460 290 400 310C340 330 290 280 290 220C290 160 380 190 330 140Z"
          fill="url(#blobGrad1)"
          opacity="0.9"
        />
        {/* Soft Violet Central Blob */}
        <path
          d="M160 300C120 220 180 130 260 120C340 110 400 180 410 260C420 340 330 370 250 360C170 350 200 380 160 300Z"
          fill="#d8c8fc"
          opacity="0.6"
        />

        {/* --- LEFT NURSE / ASSISTANT --- */}
        <g id="left-assistant">
          {/* Hair */}
          <path
            d="M125 155C125 125 140 100 170 100C200 100 215 125 215 155C215 170 210 185 205 190C195 185 190 175 190 165C170 165 150 165 140 180C130 175 125 165 125 155Z"
            fill="#803816"
          />
          {/* Neck & Face */}
          <path d="M158 170V195H182V170H158Z" fill="url(#skin1)" />
          <ellipse cx="170" cy="150" rx="26" ry="30" fill="url(#skin1)" />
          {/* Eyes & Brows */}
          <path d="M153 140Q160 138 165 141" stroke="#4a1a05" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="160" cy="145" r="2.5" fill="#33180d" />
          <path d="M175 141Q180 138 187 140" stroke="#4a1a05" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="180" cy="145" r="2.5" fill="#33180d" />
          {/* Medical Mask */}
          <path
            d="M146 150C146 150 170 148 194 150C194 165 190 185 170 185C150 185 146 165 146 150Z"
            fill="#e2f7f3"
            stroke="#b3ece2"
            strokeWidth="1.5"
          />
          <path d="M148 158H192" stroke="#b3ece2" strokeWidth="1.5" />
          <path d="M150 166H190" stroke="#b3ece2" strokeWidth="1.5" />
          {/* Scrubs / Uniform (Teal) */}
          <path
            d="M130 195C110 205 85 240 80 320H210C210 260 200 215 190 195L170 220L150 195H130Z"
            fill="#0ea58a"
          />
          <path d="M150 195L170 220L190 195" stroke="#0b7e69" strokeWidth="3" fill="none" />
        </g>

        {/* --- RIGHT NURSE / ASSISTANT --- */}
        <g id="right-assistant">
          {/* Hair */}
          <path
            d="M320 150C320 115 340 85 375 85C410 85 430 115 430 150C430 170 425 185 415 190C405 180 400 165 395 155C375 155 355 160 345 180C330 175 320 165 320 150Z"
            fill="#a83210"
          />
          {/* Neck & Face */}
          <path d="M363 165V190H387V165H363Z" fill="url(#skin2)" />
          <ellipse cx="375" cy="145" rx="26" ry="28" fill="url(#skin2)" />
          {/* Eyes & Brows */}
          <path d="M358 135Q365 133 370 136" stroke="#4a1a05" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="365" cy="140" r="2.5" fill="#33180d" />
          <path d="M380 136Q385 133 392 135" stroke="#4a1a05" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="385" cy="140" r="2.5" fill="#33180d" />
          {/* Medical Mask */}
          <path
            d="M351 146C351 146 375 144 399 146C399 160 395 180 375 180C355 180 351 160 351 146Z"
            fill="#e2f7f3"
            stroke="#b3ece2"
            strokeWidth="1.5"
          />
          <path d="M353 154H397" stroke="#b3ece2" strokeWidth="1.5" />
          <path d="M355 162H395" stroke="#b3ece2" strokeWidth="1.5" />
          {/* Scrubs / Uniform (Dark Navy/Slate Blue) */}
          <path
            d="M335 190C325 210 300 240 300 320H450C445 240 420 205 400 190L375 215L350 190H335Z"
            fill="#1e293b"
          />
          <path d="M350 190L375 215L400 190" stroke="#0f172a" strokeWidth="3" fill="none" />
        </g>

        {/* --- CENTER DOCTOR (LEAD) --- */}
        <g id="center-doctor">
          {/* Hair */}
          <path
            d="M210 110C210 70 235 45 270 45C305 45 330 70 330 110C330 130 325 145 320 150C310 135 295 125 270 125C245 125 230 135 220 150C215 145 210 130 210 110Z"
            fill="#1e293b"
          />
          {/* Neck & Ears */}
          <path d="M255 135V175H285V135H255Z" fill="url(#skin3)" />
          <circle cx="230" cy="120" r="7" fill="url(#skin3)" />
          <circle cx="310" cy="120" r="7" fill="url(#skin3)" />
          {/* Head */}
          <ellipse cx="270" cy="115" rx="36" ry="38" fill="url(#skin3)" />
          {/* Eyes & Eyebrows */}
          <path d="M246 102Q256 99 262 103" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" />
          <circle cx="255" cy="110" r="3.2" fill="#0f172a" />
          <path d="M278 103Q284 99 294 102" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" />
          <circle cx="285" cy="110" r="3.2" fill="#0f172a" />
          {/* Medical Mask */}
          <path
            d="M236 118C236 118 270 115 304 118C304 140 298 165 270 165C242 165 236 140 236 118Z"
            fill="#d3f2ec"
            stroke="#9ee0d3"
            strokeWidth="2"
          />
          <path d="M238 128H302" stroke="#9ee0d3" strokeWidth="1.8" />
          <path d="M241 138H299" stroke="#9ee0d3" strokeWidth="1.8" />
          {/* Mask elastic bands to ears */}
          <path d="M236 122L230 120" stroke="#9ee0d3" strokeWidth="2" />
          <path d="M304 122L310 120" stroke="#9ee0d3" strokeWidth="2" />

          {/* Under Shirt (Teal/Emerald V-neck) */}
          <path d="M255 170L270 205L285 170Z" fill="#0d9488" />

          {/* Doctor White Coat */}
          <path
            d="M210 175C185 195 160 245 155 350H385C380 245 355 195 330 175L290 240L285 350H255L250 240L210 175Z"
            fill="#ffffff"
            stroke="#e2e8f0"
            strokeWidth="1.5"
          />
          {/* Coat Lapels */}
          <path d="M210 175L255 240L250 350" stroke="#cbd5e1" strokeWidth="2" />
          <path d="M330 175L285 240L290 350" stroke="#cbd5e1" strokeWidth="2" />

          {/* Stethoscope */}
          <path
            d="M235 178C230 200 232 235 248 245C255 250 258 260 258 275"
            stroke="#475569"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M305 178C310 200 308 235 292 245C285 250 282 260 282 275"
            stroke="#475569"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />
          {/* Chestpiece Diaphragm */}
          <circle cx="270" cy="285" r="9" fill="#94a3b8" stroke="#475569" strokeWidth="2.5" />
          <circle cx="270" cy="285" r="4" fill="#0d9488" />
        </g>
      </svg>
    </div>
  );
};

// About Doctor Section Portrait Illustration
export const DoctorAboutIllustration: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full max-w-[460px] mx-auto select-none ${className}`}>
      <svg
        viewBox="0 0 460 460"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-md"
      >
        <defs>
          <linearGradient id="doctorBlobGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8c6eff" />
            <stop offset="100%" stopColor="#6744f4" />
          </linearGradient>
          <linearGradient id="doctorSkin" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffdbcc" />
            <stop offset="100%" stopColor="#f5c2ae" />
          </linearGradient>
        </defs>

        {/* Large Organic Purple Blob as Seen in Image */}
        <path
          d="M80 140C40 190 20 270 60 330C100 390 190 410 270 380C350 350 410 290 400 210C390 130 330 70 240 60C150 50 120 90 80 140Z"
          fill="url(#doctorBlobGrad)"
        />

        {/* Subtle Turquoise / Emerald Accent Wave on Left edge */}
        <path
          d="M50 250C35 290 40 330 65 355C80 370 100 378 125 382C100 370 80 350 65 320C55 295 50 270 50 250Z"
          fill="#10b981"
          opacity="0.9"
        />

        {/* Doctor Silhouette & Portrait (Dr NGUETSOP Jessica) */}
        <g id="doctor-figure">
          {/* Back Hair - Elegant Bun / Volume */}
          <ellipse cx="245" cy="85" rx="42" ry="38" fill="#1e1b2e" />

          {/* Ears */}
          <ellipse cx="185" cy="142" rx="6.5" ry="10" fill="url(#doctorSkin)" />
          <ellipse cx="305" cy="142" rx="6.5" ry="10" fill="url(#doctorSkin)" />
          {/* Small pearl earrings */}
          <circle cx="184" cy="148" r="2.5" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="0.8" />
          <circle cx="306" cy="148" r="2.5" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="0.8" />

          {/* Neck */}
          <path d="M228 152V202H262V152H228Z" fill="url(#doctorSkin)" />

          {/* Face */}
          <path
            d="M192 122C192 102 212 90 245 90C278 90 298 102 298 122C298 152 286 182 245 182C204 182 192 152 192 122Z"
            fill="url(#doctorSkin)"
          />

          {/* Front Hairstyle - Sleek side-parted bob/updo framing the face */}
          <path
            d="M190 120C188 85 215 55 245 55C275 55 302 85 300 120C300 135 296 150 288 152C284 135 272 115 245 115C218 115 204 135 202 152C194 148 190 135 190 120Z"
            fill="#1e1b2e"
          />

          {/* Eyebrows - Feminine, arched */}
          <path d="M210 115C220 111 228 112 233 115" stroke="#1e1b2e" strokeWidth="2.4" strokeLinecap="round" />
          <path d="M257 115C262 112 270 111 280 115" stroke="#1e1b2e" strokeWidth="2.4" strokeLinecap="round" />

          {/* Eyes with subtle lashes */}
          <circle cx="221" cy="125" r="3.4" fill="#1e1b2e" />
          <path d="M217 122L214 120" stroke="#1e1b2e" strokeWidth="1.2" strokeLinecap="round" />
          <circle cx="269" cy="125" r="3.4" fill="#1e1b2e" />
          <path d="M273 122L276 120" stroke="#1e1b2e" strokeWidth="1.2" strokeLinecap="round" />

          {/* Refined Nose */}
          <path d="M245 122V142L249 145H241" stroke="#e09e86" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />

          {/* Warm, Professional Smile */}
          <path d="M233 158Q245 167 257 158" stroke="#be5a48" strokeWidth="2.6" strokeLinecap="round" fill="none" />

          {/* Teal Medical Blouse / Scrub V-Neck */}
          <path d="M225 198L245 224L265 198H225Z" fill="#0d9488" />
          <path d="M232 198L245 215L258 198" stroke="#0f766e" strokeWidth="1.5" fill="none" />

          {/* Doctor White Coat */}
          <path
            d="M165 210C135 230 110 270 100 375H390C380 270 355 230 325 210L275 285L270 375H220L215 285L165 210Z"
            fill="#ffffff"
            stroke="#e5e7eb"
            strokeWidth="2"
          />
          {/* Lapel fold lines */}
          <path d="M165 210L225 285L220 375" stroke="#d1d5db" strokeWidth="2.2" />
          <path d="M325 210L265 285L270 375" stroke="#d1d5db" strokeWidth="2.2" />

          {/* Coat Pocket with Stethoscope Clip & ID Badge */}
          <rect x="142" y="272" width="34" height="36" rx="4" fill="#ffffff" stroke="#d1d5db" strokeWidth="1.5" />
          {/* Medical Cross on pocket */}
          <rect x="156" y="282" width="6" height="16" rx="1.5" fill="#7052ff" />
          <rect x="151" y="287" width="16" height="6" rx="1.5" fill="#7052ff" />

          {/* Surgeon Stethoscope around neck */}
          <path
            d="M195 215C190 240 190 270 210 280C218 285 220 295 220 310"
            stroke="#374151"
            strokeWidth="4.2"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M295 215C300 240 300 270 280 280C272 285 270 295 270 310"
            stroke="#374151"
            strokeWidth="4.2"
            strokeLinecap="round"
            fill="none"
          />
          {/* Chestpiece Diaphragm */}
          <circle cx="245" cy="320" r="10" fill="#9ca3af" stroke="#374151" strokeWidth="3" />
          <circle cx="245" cy="320" r="4.5" fill="#7052ff" />
          <line x1="220" y1="310" x2="245" y2="320" stroke="#374151" strokeWidth="3.8" />
          <line x1="270" y1="310" x2="245" y2="320" stroke="#374151" strokeWidth="3.8" />

          {/* Coat Buttons */}
          <circle cx="245" cy="342" r="3" fill="#cbd5e1" />
          <circle cx="245" cy="362" r="3" fill="#cbd5e1" />
        </g>
      </svg>
    </div>
  );
};

// Contact Section Medical Staff Illustration
export const ContactTeamIllustration: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full max-w-[480px] mx-auto select-none ${className}`}>
      <svg
        viewBox="0 0 460 380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-sm"
      >
        <defs>
          <linearGradient id="contactCircleGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#c5f0eb" />
            <stop offset="100%" stopColor="#a3e3db" />
          </linearGradient>
          <linearGradient id="leafGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0891b2" />
            <stop offset="100%" stopColor="#0e7490" />
          </linearGradient>
        </defs>

        {/* Backdrop Circular Shape */}
        <circle cx="230" cy="200" r="160" fill="url(#contactCircleGrad)" opacity="0.6" />

        {/* Tropical Leaves on Left */}
        <path
          d="M80 320C50 280 40 240 60 210C80 230 100 270 95 320Z"
          fill="url(#leafGrad)"
        />
        <path
          d="M60 280C30 250 25 210 40 180C60 200 75 235 70 280Z"
          fill="#155e75"
        />
        <path
          d="M100 330C80 290 75 250 100 220C115 245 120 285 110 330Z"
          fill="#0e7490"
        />

        {/* Tropical Leaves on Right */}
        <path
          d="M380 320C410 280 420 240 400 210C380 230 360 270 365 320Z"
          fill="url(#leafGrad)"
        />
        <path
          d="M400 280C430 250 435 210 420 180C400 200 385 235 390 280Z"
          fill="#155e75"
        />
        <path
          d="M360 330C380 290 385 250 360 220C345 245 340 285 350 330Z"
          fill="#0e7490"
        />

        {/* --- LEFT PHYSICIAN (Male, Brown hair) --- */}
        <g id="contact-left-doctor">
          {/* Hair */}
          <path
            d="M110 135C110 105 130 85 155 85C180 85 195 105 195 135C195 145 190 155 185 160C175 150 165 145 150 145C135 145 120 150 115 160C112 155 110 145 110 135Z"
            fill="#803816"
          />
          {/* Neck */}
          <rect x="145" y="155" width="22" height="25" fill="#fcd3be" />
          {/* Face */}
          <ellipse cx="155" cy="135" rx="25" ry="28" fill="#fcd3be" />
          {/* Eyebrows */}
          <path d="M138 126Q145 123 150 126" stroke="#4a1a05" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M160 126Q165 123 172 126" stroke="#4a1a05" strokeWidth="2.5" strokeLinecap="round" />
          {/* Eyes */}
          <circle cx="145" cy="133" r="2.8" fill="#2d1305" />
          <circle cx="165" cy="133" r="2.8" fill="#2d1305" />
          {/* Smile */}
          <path d="M148 148Q155 155 162 148" stroke="#a04d30" strokeWidth="2" strokeLinecap="round" fill="none" />
          {/* Teal Scrub / Shirt */}
          <path d="M142 175L155 200L168 175H142Z" fill="#0d9488" />
          {/* Lab Coat */}
          <path
            d="M105 180C90 200 80 235 75 320H195C190 235 180 200 165 180L155 230L145 180H105Z"
            fill="#ffffff"
            stroke="#e2e8f0"
            strokeWidth="1.5"
          />
          <path d="M105 180L145 230L140 320" stroke="#cbd5e1" strokeWidth="2" />
          <path d="M165 180L155 230L160 320" stroke="#cbd5e1" strokeWidth="2" />
        </g>

        {/* --- RIGHT PHYSICIAN (Male, Black hair) --- */}
        <g id="contact-right-doctor">
          {/* Hair */}
          <path
            d="M265 135C265 105 285 85 310 85C335 85 350 105 350 135C350 145 345 155 340 160C330 150 320 145 305 145C290 145 275 150 270 160C267 155 265 145 265 135Z"
            fill="#1e293b"
          />
          {/* Neck */}
          <rect x="298" y="155" width="24" height="25" fill="#fcd3be" />
          {/* Face */}
          <ellipse cx="310" cy="135" rx="25" ry="28" fill="#fcd3be" />
          {/* Eyebrows */}
          <path d="M293 126Q300 123 305 126" stroke="#0f172a" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M315 126Q320 123 327 126" stroke="#0f172a" strokeWidth="2.5" strokeLinecap="round" />
          {/* Eyes */}
          <circle cx="300" cy="133" r="2.8" fill="#0f172a" />
          <circle cx="320" cy="133" r="2.8" fill="#0f172a" />
          {/* Smile */}
          <path d="M303 148Q310 155 317 148" stroke="#a04d30" strokeWidth="2" strokeLinecap="round" fill="none" />
          {/* Teal Scrub / Shirt */}
          <path d="M297 175L310 200L323 175H297Z" fill="#0d9488" />
          {/* Lab Coat */}
          <path
            d="M260 180C245 200 235 235 230 320H350C345 235 335 200 320 180L310 230L300 180H260Z"
            fill="#ffffff"
            stroke="#e2e8f0"
            strokeWidth="1.5"
          />
          <path d="M260 180L300 230L295 320" stroke="#cbd5e1" strokeWidth="2" />
          <path d="M320 180L310 230L315 320" stroke="#cbd5e1" strokeWidth="2" />
        </g>

        {/* --- CENTER PHYSICIAN (Female Doctor, Bob dark hair) --- */}
        <g id="contact-center-doctor">
          {/* Hair */}
          <path
            d="M185 160C180 125 195 100 230 100C265 100 280 125 275 160C275 180 270 200 260 210C250 195 245 180 240 170C225 170 215 180 205 210C195 200 190 180 185 160Z"
            fill="#090d16"
          />
          {/* Neck */}
          <rect x="220" y="170" width="20" height="20" fill="#fed7aa" />
          {/* Face */}
          <ellipse cx="230" cy="150" rx="22" ry="24" fill="#fed7aa" />
          {/* Hair bangs */}
          <path d="M210 135C215 130 225 130 235 138C245 130 252 132 255 138C250 130 240 125 230 125C220 125 212 130 210 135Z" fill="#090d16" />
          {/* Eyes */}
          <circle cx="222" cy="148" r="2.5" fill="#090d16" />
          <circle cx="238" cy="148" r="2.5" fill="#090d16" />
          {/* Cheerful Smile */}
          <path d="M224 160Q230 166 236 160" stroke="#b45309" strokeWidth="2" strokeLinecap="round" fill="none" />
          {/* Teal Scrub */}
          <path d="M218 185L230 205L242 185H218Z" fill="#0f766e" />
          {/* White Coat */}
          <path
            d="M190 190C180 205 170 230 165 320H295C290 230 280 205 270 190L230 230L190 190Z"
            fill="#ffffff"
            stroke="#e2e8f0"
            strokeWidth="1.5"
          />
          <path d="M190 190L225 235L220 320" stroke="#cbd5e1" strokeWidth="2" />
          <path d="M270 190L235 235L240 320" stroke="#cbd5e1" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
};
