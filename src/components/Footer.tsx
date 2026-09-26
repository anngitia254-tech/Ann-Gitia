import React from 'react';
import { Logo } from './Logo';
import { BUSINESS_DETAILS, getGeneralWhatsAppUrl } from '../data/products';
import { Phone, MessageSquare, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A2438] border-t border-slate-800 text-slate-300 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-slate-800/80">
          
          {/* LEFT: BRADOH TECH AUTO SPARES logo */}
          <div className="flex-shrink-0">
            <Logo size="md" />
            <p className="text-xs text-slate-400 mt-2 max-w-xs">
              Quality car body parts and automotive lighting solutions in Nairobi, Kenya.
            </p>
          </div>

          {/* CENTER: Copyright */}
          <div className="text-center text-xs sm:text-sm text-slate-400">
            <p>© 2026 Bradoh Tech Auto Spares. All rights reserved.</p>
            <p className="text-[11px] text-slate-500 mt-1">
              Industrial Area, Baricho Road • Opposite Carrefour • Next to Robstar
            </p>
          </div>

          {/* RIGHT: Small links / icons (WhatsApp, Phone, Contact) */}
          <div className="flex items-center gap-6 text-xs sm:text-sm font-medium">
            <a
              href={getGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-[#149BFF] transition-colors"
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-4 h-4 text-[#087FF5]" />
              <span>WhatsApp</span>
            </a>

            <a
              href={`tel:${BUSINESS_DETAILS.phone1Raw}`}
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-[#149BFF] transition-colors"
              aria-label="Phone"
            >
              <Phone className="w-4 h-4 text-[#087FF5]" />
              <span>Phone</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-[#149BFF] transition-colors"
              aria-label="Contact section"
            >
              <Mail className="w-4 h-4 text-[#087FF5]" />
              <span>Contact</span>
            </a>
          </div>

        </div>

        {/* Bottom subtle footnote */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-2">
          <span>Serving Nairobi & Countrywide Courier Dispatch across Kenya</span>
          <span>Hours: Mon - Sat 8:00 AM - 6:00 PM</span>
        </div>

      </div>
    </footer>
  );
};
