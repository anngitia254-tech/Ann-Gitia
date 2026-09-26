import React from 'react';
import { BUSINESS_DETAILS } from '../data/products';
import { ArrowRight, Phone, MapPin } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] md:min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 bg-[#061A2B] overflow-hidden flex items-center"
    >
      {/* Background subtle radial gradient aura behind image */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#087FF5]/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-[#149BFF]/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: Hero Copy & Actions (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Small uppercase eyebrow label */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#149BFF] animate-pulse" />
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.18em] uppercase text-[#149BFF]">
                QUALITY CAR BODY PARTS & AUTOMOTIVE LIGHTING SOLUTIONS
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.08] mb-3">
              <span className="text-white block">BRADOH TECH</span>
              <span className="text-[#149BFF] block drop-shadow-[0_2px_15px_rgba(20,155,255,0.35)]">
                AUTO SPARES
              </span>
            </h1>

            {/* Tagline */}
            <p className="text-lg sm:text-xl font-bold text-slate-100 mb-3 tracking-wide">
              Quality parts. Reliable service.
            </p>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed mb-8 font-normal">
              Your trusted source for genuine and high-quality auto body parts and automotive lighting solutions in Nairobi.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-sm font-bold bg-[#087FF5] hover:bg-[#149BFF] text-white shadow-lg shadow-[#087FF5]/30 hover:shadow-[#087FF5]/50 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                <span>VIEW PRODUCTS</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={`tel:${BUSINESS_DETAILS.phone1Raw}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-bold text-white border border-slate-600/80 hover:border-slate-300 hover:bg-slate-800/40 backdrop-blur-sm transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                <Phone className="w-4 h-4 text-[#149BFF]" />
                <span>CALL {BUSINESS_DETAILS.phone1}</span>
              </a>
            </div>

            {/* Nairobi Location Badge */}
            <div className="flex items-start sm:items-center gap-2.5 text-xs sm:text-sm text-slate-300 pt-4 border-t border-slate-800/80">
              <MapPin className="w-4 h-4 text-[#087FF5] flex-shrink-0 mt-0.5 sm:mt-0" />
              <span className="leading-snug">
                <strong className="text-white font-semibold">Industrial Area, Baricho Road</strong> • Opposite Carrefour • Next to Robstar
              </span>
            </div>
          </div>

          {/* RIGHT COLUMN: Automotive Photography (5 cols on lg) */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            {/* Visual vehicle image container with subtle lighting and border */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/60 shadow-2xl shadow-black/60 bg-[#0A2438] group">
              <img
                src="/src/assets/images/toyota_hero_suv_1790416371187.jpg"
                alt="BRADOH TECH AUTO SPARES - Premium Toyota SUV and Automotive Lighting"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                loading="eager"
              />
              
              {/* Subtle dark gradient overlay blending into navy */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#061A2B]/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#061A2B]/40 via-transparent to-transparent pointer-events-none" />

              {/* Bottom badge overlay */}
              <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#061A2B]/85 backdrop-blur-md border border-slate-700/60 flex items-center justify-between text-xs">
                <div>
                  <p className="font-bold text-white tracking-wide">Toyota Spares Specialist</p>
                  <p className="text-[11px] text-slate-400">Ex-Japan Genuine Replacement Parts</p>
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#087FF5]/20 border border-[#087FF5]/40 text-[#149BFF] text-[11px] font-bold">
                  Verified Genuine
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
