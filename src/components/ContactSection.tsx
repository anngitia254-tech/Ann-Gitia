import React, { useState } from 'react';
import { BUSINESS_DETAILS, getWhatsAppCustomUrl } from '../data/products';
import { Phone, Mail, MapPin, MessageCircle, ExternalLink, ArrowRight, ShieldCheck, Clock, Zap } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [vehicleMake, setVehicleMake] = useState('Toyota');
  const [partRequired, setPartRequired] = useState('Headlights / Lighting Solutions');
  const [quickNotes, setQuickNotes] = useState('');

  // Default direct chat link
  const defaultWhatsAppUrl = `https://wa.me/${BUSINESS_DETAILS.whatsappNumber}?text=${encodeURIComponent(
    'Hello Bradoh Tech Auto Spares, I have an auto spare parts enquiry.'
  )}`;

  // Customized direct WhatsApp link
  const customWhatsAppUrl = `https://wa.me/${BUSINESS_DETAILS.whatsappNumber}?text=${encodeURIComponent(
    `Hello Bradoh Tech Auto Spares, I am looking for parts for my vehicle:
- Make / Model: ${vehicleMake}
- Part Required: ${partRequired}
${quickNotes.trim() ? `- Notes / Details: ${quickNotes.trim()}` : ''}`
  )}`;

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#061A2B] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          
          {/* LEFT SIDE: Dark Navy Automotive Info Card with Vehicle Headlight Background (6 cols) */}
          <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl p-8 sm:p-10 flex flex-col justify-between bg-[#0A2438]">
            
            {/* Background Headlight Glow Image with Darkened Overlay */}
            <div className="absolute inset-0 z-0">
              <img
                src="/src/assets/images/car_headlight_glow_1790416395279.jpg"
                alt="Automotive LED Projector Headlight Background"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover opacity-25 filter brightness-75 contrast-125"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2438] via-[#0A2438]/90 to-[#0A2438]/70" />
            </div>

            {/* Left Content */}
            <div className="relative z-10">
              <span className="text-xs sm:text-sm font-extrabold tracking-[0.22em] uppercase text-[#149BFF] block mb-2.5">
                GET IN TOUCH
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
                Looking for a specific part?
              </h2>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 font-normal">
                Tell us your vehicle make, model, year, and the part you need. We check compatibility and share detailed photos directly on WhatsApp.
              </p>

              {/* Contact Information List */}
              <div className="space-y-6 pt-4 border-t border-slate-700/60">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-[#087FF5]/15 border border-[#087FF5]/30 flex items-center justify-center flex-shrink-0 text-[#149BFF]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-0.5">
                      Direct Lines / Call Us
                    </p>
                    <div className="text-base sm:text-lg font-bold text-white flex flex-wrap items-center gap-2">
                      <a
                        href={`tel:${BUSINESS_DETAILS.phone1Raw}`}
                        className="hover:text-[#149BFF] transition-colors"
                      >
                        {BUSINESS_DETAILS.phone1}
                      </a>
                      <span className="text-slate-500 font-normal">/</span>
                      <a
                        href={`tel:${BUSINESS_DETAILS.phone2Raw}`}
                        className="hover:text-[#149BFF] transition-colors"
                      >
                        {BUSINESS_DETAILS.phone2}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-[#087FF5]/15 border border-[#087FF5]/30 flex items-center justify-center flex-shrink-0 text-[#149BFF]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-0.5">
                      Email Address
                    </p>
                    <a
                      href={`mailto:${BUSINESS_DETAILS.email}`}
                      className="text-base sm:text-lg font-bold text-white hover:text-[#149BFF] transition-colors break-all"
                    >
                      {BUSINESS_DETAILS.email}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-[#087FF5]/15 border border-[#087FF5]/30 flex items-center justify-center flex-shrink-0 text-[#149BFF]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-0.5">
                      Shop Location
                    </p>
                    <p className="text-base sm:text-lg font-bold text-white leading-snug">
                      {BUSINESS_DETAILS.location}
                    </p>
                    <p className="text-sm text-slate-300 font-normal mt-0.5">
                      {BUSINESS_DETAILS.landmark}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Map Link */}
            <div className="relative z-10 pt-6 mt-6 border-t border-slate-700/60">
              <a
                href={BUSINESS_DETAILS.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#149BFF] hover:text-white transition-colors"
              >
                <span>Open Baricho Road in Google Maps</span>
                <span>↗</span>
              </a>
            </div>

          </div>

          {/* RIGHT SIDE: Dedicated WhatsApp Enquiry Section (6 cols) */}
          <div className="lg:col-span-6 bg-white rounded-2xl border border-slate-200 shadow-2xl p-8 sm:p-10 flex flex-col justify-between text-[#10283D]">
            <div>
              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#25D366] bg-[#25D366]/10 px-3 py-1 rounded-full mb-3">
                    <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
                    <span>Instant Response on WhatsApp</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#10283D] tracking-tight">
                    WhatsApp Enquiry
                  </h3>
                  <p className="text-sm text-[#657887] mt-1">
                    Connect directly with our team on WhatsApp for part availability, fitment checks, and photos.
                  </p>
                </div>
              </div>

              {/* Big Primary Direct WhatsApp Button */}
              <a
                href={defaultWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full group flex items-center justify-center gap-3 py-4 px-6 rounded-xl bg-[#25D366] hover:bg-[#1fb355] active:bg-[#1a9f4b] text-white font-extrabold text-base sm:text-lg shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0 mb-6"
              >
                <MessageCircle className="w-6 h-6 fill-white stroke-none" />
                <span>Chat on WhatsApp Directly</span>
                <ArrowRight className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" />
              </a>

              {/* Fast Selector / Custom Enquiry Builder */}
              <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Zap className="w-4 h-4 text-[#087FF5]" />
                  <p className="text-xs font-bold uppercase tracking-wider text-[#10283D]">
                    Or Pre-fill Your Part Details
                  </p>
                </div>

                <div className="space-y-3">
                  <div>
                    <label htmlFor="vehicleMake" className="block text-xs font-semibold text-[#657887] mb-1">
                      Vehicle Make / Model
                    </label>
                    <select
                      id="vehicleMake"
                      value={vehicleMake}
                      onChange={(e) => setVehicleMake(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#087FF5] focus:ring-2 focus:ring-[#087FF5]/20 text-sm text-slate-900 bg-white transition-all outline-none cursor-pointer"
                    >
                      <option value="Toyota (Land Cruiser V8 / Prado / Mark X / Probox / Sienta / Harrier)">Toyota</option>
                      <option value="Subaru (GP7 / Forester / Outback / Legacy)">Subaru</option>
                      <option value="Nissan (X-Trail / Note / Teana / Navara)">Nissan</option>
                      <option value="Mazda (Demio / CX-5 / Axela / Atenza)">Mazda</option>
                      <option value="Honda (Fit / CR-V / Vezel)">Honda</option>
                      <option value="Isuzu (D-Max / NQR / Forward)">Isuzu</option>
                      <option value="Mitsubishi (Pajero / Outlander / Canter)">Mitsubishi</option>
                      <option value="Other Vehicle Model">Other Vehicle Make</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="partRequired" className="block text-xs font-semibold text-[#657887] mb-1">
                      Part Required
                    </label>
                    <select
                      id="partRequired"
                      value={partRequired}
                      onChange={(e) => setPartRequired(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#087FF5] focus:ring-2 focus:ring-[#087FF5]/20 text-sm text-slate-900 bg-white transition-all outline-none cursor-pointer"
                    >
                      <option value="Xenon / LED Headlights">Xenon / LED Headlights</option>
                      <option value="Tail Lights / Boot Lights">Tail Lights / Boot Lights</option>
                      <option value="Front Bumper / Rear Bumper">Front Bumper / Rear Bumper</option>
                      <option value="Side Mirror / Mirror Glass / Folding Motor">Side Mirror / Mirror Glass / Folding Motor</option>
                      <option value="Radiator Grille & Chrome Trims">Radiator Grille & Chrome Trims</option>
                      <option value="Fender / Bonnet / Door Shells">Fender / Bonnet / Door Shells</option>
                      <option value="Engine Bay / Mechanical Replacement Part">Engine Bay / Mechanical Replacement Part</option>
                      <option value="Other Auto Body Part">Other Auto Body Part</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="quickNotes" className="block text-xs font-semibold text-[#657887] mb-1">
                      Vehicle Year or Specific Part Note (optional)
                    </label>
                    <input
                      type="text"
                      id="quickNotes"
                      value={quickNotes}
                      onChange={(e) => setQuickNotes(e.target.value)}
                      placeholder="e.g. 2014 model, right-hand driver side"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#087FF5] focus:ring-2 focus:ring-[#087FF5]/20 text-sm text-slate-900 placeholder:text-slate-400 transition-all outline-none bg-white"
                    />
                  </div>

                  <a
                    href={customWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#087FF5] hover:bg-[#0667c7] active:bg-[#0557aa] text-white font-bold text-sm shadow-md transition-all mt-1"
                  >
                    <span>Send Part Details via WhatsApp</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Guarantees */}
              <div className="grid grid-cols-2 gap-3 text-xs text-[#657887]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#087FF5] flex-shrink-0" />
                  <span>Verified Genuine Ex-Japan</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#087FF5] flex-shrink-0" />
                  <span>Fast response within minutes</span>
                </div>
              </div>
            </div>

            <div className="pt-5 mt-6 border-t border-slate-100 flex items-center justify-between text-xs text-[#657887]">
              <span>WhatsApp Direct Line:</span>
              <strong className="text-slate-900 font-bold">{BUSINESS_DETAILS.phone1Raw}</strong>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
