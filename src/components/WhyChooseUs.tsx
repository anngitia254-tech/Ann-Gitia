import React from 'react';

export const WhyChooseUs: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Clear enquiries',
      text: 'Tell us your vehicle model and the part you need.',
      subText: 'We quickly cross-reference OEM part numbers and inventory.',
    },
    {
      num: '02',
      title: 'Convenient location',
      text: 'Industrial Area, Baricho Road.',
      subText: 'Centrally situated opposite Carrefour, next to Robstar.',
    },
    {
      num: '03',
      title: 'Product confirmation',
      text: 'Part compatibility and availability confirmed before purchase.',
      subText: 'Get high-resolution photos and verified part matching.',
    },
  ];

  return (
    <section id="why-choose-us" className="py-20 md:py-28 bg-[#F3F8FC] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-xs sm:text-sm font-extrabold tracking-[0.22em] uppercase text-[#087FF5] block mb-2.5">
            WHY BRADOH TECH
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#10283D] tracking-tight leading-tight">
            Simple. Professional. Customer-focused.
          </h2>
        </div>

        {/* 3 Horizontally Arranged Features with Subtle Vertical Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-300/80 bg-white rounded-2xl border border-slate-200/90 shadow-sm p-8 sm:p-10">
          {steps.map((step, idx) => (
            <div
              key={step.num}
              className={`flex flex-col items-center text-center py-6 md:py-4 ${
                idx === 0 ? 'md:pr-8' : idx === 1 ? 'md:px-8' : 'md:pl-8'
              }`}
            >
              {/* Blue Circular Number */}
              <div className="w-14 h-14 rounded-full bg-[#087FF5]/10 border-2 border-[#087FF5] flex items-center justify-center mb-5 shadow-sm text-[#087FF5]">
                <span className="text-xl font-black tracking-tight">{step.num}</span>
              </div>

              {/* Heading */}
              <h3 className="text-xl font-bold text-[#10283D] mb-2 tracking-tight">
                {step.title}
              </h3>

              {/* Main Text */}
              <p className="text-base text-[#10283D] font-medium leading-relaxed mb-1">
                {step.text}
              </p>

              {/* Supporting Note */}
              <p className="text-xs text-[#657887] leading-relaxed mt-1 max-w-xs">
                {step.subText}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
