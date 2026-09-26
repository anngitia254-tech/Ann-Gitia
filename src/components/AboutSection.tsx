import React from 'react';
import { MapPin, Cog, CheckCircle2 } from 'lucide-react';
import { BUSINESS_DETAILS } from '../data/products';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#F3F8FC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Automotive Mechanical Photography with Slanted Blue Accent (6 cols) */}
          <div className="lg:col-span-6 relative">
            {/* Blue diagonal/slanted accent ribbon/backdrop behind image */}
            <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-tr from-[#087FF5] to-[#149BFF] rounded-2xl transform -rotate-2 opacity-90 shadow-xl" />
            
            {/* Main Automotive Headlight Image Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#061A2B] border-2 border-white transform transition-transform duration-300 hover:scale-[1.01]">
              <img
                src="/src/assets/images/toyota_headlight_about_1790416791993.jpg"
                alt="Genuine Toyota Bi-LED Projector Headlight assembly at Bradoh Tech Auto Spares Nairobi"
                referrerPolicy="no-referrer"
                className="w-full h-[360px] sm:h-[420px] object-cover"
                loading="lazy"
              />
              
              {/* Slanted corner accent tag */}
              <div className="absolute bottom-0 right-0 bg-[#061A2B]/90 backdrop-blur-md text-white py-3 px-5 rounded-tl-2xl border-t border-l border-[#087FF5]/40 flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#087FF5]" />
                <div>
                  <p className="text-xs font-bold text-white tracking-wide">Ex-Japan Spares</p>
                  <p className="text-[11px] text-slate-300">Tested & Inspected</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: About Content (6 cols) */}
          <div className="lg:col-span-6 flex flex-col text-left">
            {/* Small blue uppercase heading */}
            <span className="text-xs sm:text-sm font-extrabold tracking-[0.2em] uppercase text-[#087FF5] mb-2.5">
              ABOUT BRADOH TECH
            </span>

            {/* Large heading with blue emphasis */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#10283D] tracking-tight leading-tight mb-6">
              Your trusted stop for{' '}
              <span className="text-[#087FF5] underline decoration-[#149BFF]/30 underline-offset-8">
                auto body parts.
              </span>
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#657887] leading-relaxed mb-8 font-normal">
              At Bradoh Tech Auto Spares, we supply high-quality car body parts and automotive lighting solutions for a wide range of vehicles, including Toyota models. We are committed to providing genuine products, reliable quality and excellent customer service.
            </p>

            {/* Two Information Blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-300/80">
              
              {/* Block 1: Location */}
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm hover:border-[#087FF5]/50 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[#087FF5]/10 flex items-center justify-center flex-shrink-0 text-[#087FF5]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#10283D] leading-snug">
                    Industrial Area, Baricho Road
                  </h3>
                  <p className="text-xs text-[#657887] mt-0.5 leading-snug">
                    Opposite Carrefour, next to Robstar
                  </p>
                </div>
              </div>

              {/* Block 2: Quality Parts */}
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm hover:border-[#087FF5]/50 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[#087FF5]/10 flex items-center justify-center flex-shrink-0 text-[#087FF5]">
                  <Cog className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#10283D] leading-snug">
                    Quality parts
                  </h3>
                  <p className="text-xs text-[#657887] mt-0.5 leading-snug">
                    for a smoother ride
                  </p>
                </div>
              </div>

            </div>

            {/* Additional Contact Prompt Link */}
            <div className="mt-8 flex items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#087FF5] hover:text-[#149BFF] transition-colors group"
              >
                <span>Visit our Nairobi store or place an enquiry</span>
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
