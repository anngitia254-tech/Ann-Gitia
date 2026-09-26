import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const isLg = size === 'lg';
  const isSm = size === 'sm';

  return (
    <a
      href="#home"
      className={`inline-flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#087FF5] rounded-lg transition-transform duration-200 ${className}`}
      aria-label="BRADOH TECH AUTO SPARES Home"
    >
      {/* Automotive emblem icon */}
      <div
        className={`relative flex items-center justify-center rounded-lg bg-gradient-to-br from-[#087FF5] to-[#0A2438] border border-[#149BFF]/40 shadow-sm shadow-[#087FF5]/20 group-hover:border-[#149BFF] transition-all duration-300 ${
          isLg ? 'w-12 h-12' : isSm ? 'w-8 h-8' : 'w-10 h-10'
        }`}
      >
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={isLg ? 'w-7 h-7' : isSm ? 'w-5 h-5' : 'w-6 h-6'}
        >
          {/* Stylized sports car aerodynamic roofline & headlight beam */}
          <path
            d="M6 25C9 25 10.5 24 13 20L17 14C18 12.5 20 12 23 12H27C29 12 31 13 32 15L35 21C36.5 24 35 25 31 25"
            stroke="#FFFFFF"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Wheel contours */}
          <circle cx="12" cy="25" r="3.2" stroke="#149BFF" strokeWidth="2.2" />
          <circle cx="28" cy="25" r="3.2" stroke="#149BFF" strokeWidth="2.2" />
          {/* Speed line/horizontal chassis */}
          <path
            d="M4 27H9M15.2 27H24.8M31.2 27H36"
            stroke="#149BFF"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col text-left leading-none select-none">
        <div className="flex items-center gap-1.5">
          <span
            className={`font-extrabold tracking-tight text-white group-hover:text-slate-100 transition-colors ${
              isLg ? 'text-2xl' : isSm ? 'text-base' : 'text-lg md:text-xl'
            }`}
          >
            BRADOH TECH
          </span>
        </div>
        <div className="flex items-center gap-1.5 mt-0.5">
          <span
            className={`font-bold tracking-[0.22em] text-[#087FF5] uppercase ${
              isLg ? 'text-xs' : isSm ? 'text-[9px]' : 'text-[10px] md:text-[11px]'
            }`}
          >
            AUTO SPARES
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#149BFF] animate-pulse"></span>
        </div>
      </div>
    </a>
  );
};
