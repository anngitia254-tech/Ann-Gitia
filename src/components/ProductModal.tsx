import React from 'react';
import { Product } from '../types';
import { getWhatsAppProductUrl } from '../data/products';
import { X, Check, Shield, MapPin, Truck } from 'lucide-react';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
    >
      <div
        className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-[#087FF5]"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Product Image */}
          <div className="bg-[#F8FAFC] p-6 flex items-center justify-center border-b md:border-b-0 md:border-r border-slate-200">
            <img
              src={product.image}
              alt={product.altText}
              referrerPolicy="no-referrer"
              className="w-full h-auto max-h-[280px] object-contain rounded-lg"
            />
          </div>

          {/* Details */}
          <div className="p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#087FF5]">
                  {product.category}
                </span>
                <span className="text-slate-300">·</span>
                <span className="text-[11px] font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                  Available in Stock
                </span>
              </div>

              <h3 id="modal-product-title" className="text-xl font-extrabold text-[#10283D] leading-snug mb-2">
                {product.name}
              </h3>

              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#087FF5] bg-[#087FF5]/10 px-3 py-1.5 rounded-lg mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#087FF5]"></span>
                <span>Genuine Ex-Japan OEM Part</span>
              </div>

              <p className="text-sm text-[#657887] leading-relaxed mb-4">
                {product.description}
              </p>

              {/* Specs */}
              <div className="space-y-2 mb-6 text-xs text-slate-700 bg-slate-50 p-3.5 rounded-xl border border-slate-200/80">
                <div className="flex items-center justify-between">
                  <span className="text-[#657887]">Condition:</span>
                  <span className="font-semibold text-[#10283D]">{product.condition}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#657887]">Fitment:</span>
                  <span className="font-semibold text-[#10283D] text-right truncate max-w-[180px]">{product.fitment}</span>
                </div>
              </div>

              {/* Highlights */}
              {product.features && (
                <div className="mb-6 space-y-1.5">
                  {product.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                      <Check className="w-3.5 h-3.5 text-[#087FF5] flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <a
                href={getWhatsAppProductUrl(product)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#087FF5] hover:bg-[#149BFF] text-white font-bold text-sm shadow-md shadow-[#087FF5]/25 transition-all text-center"
              >
                <span>ENQUIRE ON WHATSAPP →</span>
              </a>
              <p className="text-center text-[11px] text-slate-500">
                Direct response from our Nairobi store team
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
