import React from 'react';

const BrandLogo: React.FC<{ className?: string }> = ({ className = "h-10" }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Brain Icon SVG */}
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto"
        style={{ filter: 'drop-shadow(0 0 5px rgba(37, 99, 235, 0.5))' }}
      >
        <defs>
          <linearGradient id="brainGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2563EB" /> {/* Neuro Blue */}
            <stop offset="50%" stopColor="#7C3AED" /> {/* Mark Violet */}
            <stop offset="100%" stopColor="#F43F5E" /> {/* AI Pink */}
          </linearGradient>
        </defs>
        <path
          d="M50 15C35 15 22 25 20 40C18 55 25 65 35 70V80C35 82 37 84 40 84H60C63 84 65 82 65 80V70C75 65 82 55 80 40C78 25 65 15 50 15ZM30 40C30 30 38 22 50 22C62 22 70 30 70 40C70 48 65 55 58 58H42C35 55 30 48 30 40Z"
          fill="url(#brainGradient)"
          opacity="0.2"
        />
        <path
          d="M50 20C55 20 60 22 62 25M38 25C40 22 45 20 50 20M50 20V35M35 45H65M42 58L45 75M58 58L55 75"
          stroke="url(#brainGradient)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="35" cy="35" r="2" fill="#2563EB" />
        <circle cx="65" cy="35" r="2" fill="#F43F5E" />
        <circle cx="50" cy="28" r="2" fill="#7C3AED" />
        <circle cx="28" cy="48" r="2" fill="#2563EB" />
        <circle cx="72" cy="48" r="2" fill="#F43F5E" />
      </svg>
      
      {/* Text Logo */}
      <span className="text-2xl font-bold tracking-tighter font-display">
        <span className="text-[#2563EB]">Neuro</span>
        <span className="text-[#7C3AED]">Mark</span>
        <span className="text-[#F43F5E]">AI</span>
      </span>
    </div>
  );
};

export default BrandLogo;