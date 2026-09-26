import React, { useState } from 'react';
import { BUSINESS_DETAILS, getWhatsAppCustomUrl } from '../data/products';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    vehicleMake: 'Toyota',
    partRequired: 'Headlights / Lighting Solutions',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const waUrl = getWhatsAppCustomUrl({
      fullName: formData.fullName.trim(),
      phone: formData.phone.trim(),
      vehicleMake: formData.vehicleMake,
      partRequired: formData.partRequired,
      message: formData.message.trim(),
    });

    // Open WhatsApp
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    setIsSubmitting(false);
  };

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
                Tell us the vehicle make, model, year and the part you need.
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

          {/* RIGHT SIDE: Clean White WhatsApp Enquiry Form (6 cols) */}
          <div className="lg:col-span-6 bg-white rounded-2xl border border-slate-200 shadow-2xl p-8 sm:p-10 flex flex-col justify-between text-[#10283D]">
            <div>
              <div className="mb-6">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#10283D] tracking-tight mb-1">
                  Send a WhatsApp Enquiry
                </h3>
                <p className="text-sm text-[#657887]">
                  Quick, easy and convenient.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Your Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-[#10283D] mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. David Mwangi"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#087FF5] focus:ring-2 focus:ring-[#087FF5]/20 text-sm text-slate-900 placeholder:text-slate-400 transition-all outline-none"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-[#10283D] mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 0712 345678"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#087FF5] focus:ring-2 focus:ring-[#087FF5]/20 text-sm text-slate-900 placeholder:text-slate-400 transition-all outline-none"
                  />
                </div>

                {/* Select Vehicle Make */}
                <div>
                  <label htmlFor="vehicleMake" className="block text-xs font-bold uppercase tracking-wider text-[#10283D] mb-1.5">
                    Select Vehicle Make
                  </label>
                  <select
                    id="vehicleMake"
                    value={formData.vehicleMake}
                    onChange={(e) => setFormData({ ...formData, vehicleMake: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#087FF5] focus:ring-2 focus:ring-[#087FF5]/20 text-sm text-slate-900 bg-white transition-all outline-none cursor-pointer"
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

                {/* Select Part Required */}
                <div>
                  <label htmlFor="partRequired" className="block text-xs font-bold uppercase tracking-wider text-[#10283D] mb-1.5">
                    Select Part Required
                  </label>
                  <select
                    id="partRequired"
                    value={formData.partRequired}
                    onChange={(e) => setFormData({ ...formData, partRequired: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#087FF5] focus:ring-2 focus:ring-[#087FF5]/20 text-sm text-slate-900 bg-white transition-all outline-none cursor-pointer"
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

                {/* Your Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-[#10283D] mb-1.5">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Specify vehicle year, chassis/model code, or part number if available..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#087FF5] focus:ring-2 focus:ring-[#087FF5]/20 text-sm text-slate-900 placeholder:text-slate-400 transition-all outline-none resize-none"
                  ></textarea>
                </div>

                {/* Large Green WhatsApp Button (Official WhatsApp Green #25D366) */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-xl bg-[#25D366] hover:bg-[#1fb355] active:bg-[#1a9f4b] text-white font-extrabold text-base shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  <span>☘ WhatsApp Send WhatsApp Enquiry</span>
                </button>
              </form>
            </div>

            <p className="text-center text-xs text-[#657887] mt-4 pt-4 border-t border-slate-100">
              WhatsApp enquiries go directly to <strong>+254726976908</strong>
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
