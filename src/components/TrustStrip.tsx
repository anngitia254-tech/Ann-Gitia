import React from 'react';
import { ShieldCheck, MapPin, MessageSquare } from 'lucide-react';
import { getGeneralWhatsAppUrl } from '../data/products';

export const TrustStrip: React.FC = () => {
  return (
    <section className="bg-white border-y border-slate-200/80 shadow-md relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7 md:py-9">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200">
          
          {/* Column 1: Quality-focused */}
          <div className="flex items-center gap-4 py-3 md:py-0 md:px-6 first:pl-0">
            <div className="w-12 h-12 rounded-full bg-[#087FF5]/10 border border-[#087FF5]/20 flex items-center justify-center flex-shrink-0 text-[#087FF5]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-[#10283D] tracking-tight">
                Quality-focused
              </h2>
              <p className="text-xs sm:text-sm text-[#657887] font-normal">
                Genuine and reliable parts
              </p>
            </div>
          </div>

          {/* Column 2: Nairobi location */}
          <div className="flex items-center gap-4 py-3 md:py-0 md:px-6">
            <div className="w-12 h-12 rounded-full bg-[#087FF5]/10 border border-[#087FF5]/20 flex items-center justify-center flex-shrink-0 text-[#087FF5]">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-[#10283D] tracking-tight">
                Nairobi location
              </h2>
              <p className="text-xs sm:text-sm text-[#657887] font-normal">
                Easy to find in Industrial Area
              </p>
            </div>
          </div>

          {/* Column 3: Easy enquiries */}
          <div className="flex items-center gap-4 py-3 md:py-0 md:px-6 last:pr-0">
            <div className="w-12 h-12 rounded-full bg-[#087FF5]/10 border border-[#087FF5]/20 flex items-center justify-center flex-shrink-0 text-[#087FF5]">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h2 className="text-base sm:text-lg font-bold text-[#10283D] tracking-tight">
                Easy enquiries
              </h2>
              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm text-[#657887] hover:text-[#087FF5] font-normal inline-flex items-center gap-1 transition-colors"
              >
                <span>Call or WhatsApp directly</span>
                <span className="text-[#087FF5] font-semibold text-xs">→</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
