import React, { useState } from 'react';
import { FEATURED_PRODUCTS, getWhatsAppProductUrl } from '../data/products';
import { Product } from '../types';
import { ProductModal } from './ProductModal';
import { ArrowRight, Eye } from 'lucide-react';

export const ProductsSection: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section id="products" className="py-20 md:py-28 bg-[#061A2B] text-slate-100 relative">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#087FF5]/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-18">
          {/* Small blue uppercase text */}
          <span className="text-xs sm:text-sm font-extrabold tracking-[0.22em] uppercase text-[#149BFF] block mb-2.5">
            OUR PRODUCTS
          </span>

          {/* Large heading with "Products" in blue */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Featured <span className="text-[#087FF5]">Products</span>
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            High-quality auto parts for your vehicle. Browse our top picks below.
          </p>
        </div>

        {/* 3-Column Grid on Desktop, 2 Columns on Tablets, 1 Column on Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {FEATURED_PRODUCTS.map((product) => (
            <article
              key={product.id}
              className="bg-white rounded-xl border border-slate-200/90 shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-[#087FF5]/15 transition-all duration-300 flex flex-col overflow-hidden group transform hover:-translate-y-1"
            >
              {/* Product Photograph Area */}
              <div
                className="relative bg-white pt-4 px-4 pb-2 flex items-center justify-center overflow-hidden cursor-pointer aspect-[4/3] border-b border-slate-100"
                onClick={() => setSelectedProduct(product)}
              >
                <img
                  src={product.image}
                  alt={product.altText}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain p-2 transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Subtle Quick View Overlay button on hover */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProduct(product);
                  }}
                  className="absolute inset-0 bg-[#061A2B]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2 text-xs font-bold text-white backdrop-blur-[2px]"
                  aria-label={`Quick view details for ${product.name}`}
                >
                  <span className="px-3.5 py-1.5 rounded-full bg-[#087FF5] flex items-center gap-1.5 shadow-md">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Quick View</span>
                  </span>
                </button>
              </div>

              {/* Product Details Content */}
              <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between bg-white text-[#10283D]">
                <div>
                  {/* Category / Badge */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#657887]">
                      {product.category}
                    </span>
                    <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                      In Stock
                    </span>
                  </div>

                  {/* Product Name */}
                  <h3
                    onClick={() => setSelectedProduct(product)}
                    className="text-base sm:text-lg font-bold text-[#10283D] group-hover:text-[#087FF5] transition-colors leading-snug mb-2 cursor-pointer"
                  >
                    {product.name}
                  </h3>

                  {/* Stock & Genuine Badge */}
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#087FF5] bg-[#087FF5]/10 px-2.5 py-1 rounded-md mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#087FF5]"></span>
                    <span>Genuine Ex-Japan / In Stock</span>
                  </div>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-[#657887] leading-relaxed mb-6 font-normal">
                    {product.description}
                  </p>
                </div>

                {/* Blue ENQUIRE Button */}
                <div className="pt-2 border-t border-slate-100 flex items-center gap-2">
                  <a
                    href={getWhatsAppProductUrl(product)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-xs sm:text-sm font-bold bg-[#087FF5] hover:bg-[#149BFF] text-white shadow-md shadow-[#087FF5]/20 hover:shadow-lg hover:shadow-[#087FF5]/35 transition-all text-center group/btn focus:outline-none focus:ring-2 focus:ring-[#087FF5]"
                    aria-label={`Enquire via WhatsApp for ${product.name}`}
                  >
                    <span>ENQUIRE</span>
                    <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                  </a>

                  <button
                    type="button"
                    onClick={() => setSelectedProduct(product)}
                    className="p-3 rounded-lg border border-slate-200 text-slate-600 hover:text-[#087FF5] hover:border-[#087FF5] transition-colors"
                    title="View details"
                    aria-label={`View specs for ${product.name}`}
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom catalogue reassurance note */}
        <div className="mt-14 p-5 rounded-xl bg-[#0A2438] border border-slate-800 text-center max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-slate-300">
            Need parts for other models? (Harrier, Prado 120, Subaru GP7, etc.)
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#149BFF] hover:underline"
          >
            <span>Request Custom Spare Part</span>
            <span>→</span>
          </a>
        </div>

      </div>

      {/* Product Detail Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
};
