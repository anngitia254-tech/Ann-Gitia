/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { AboutSection } from './components/AboutSection';
import { ProductsSection } from './components/ProductsSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { BUSINESS_DETAILS, FEATURED_PRODUCTS } from './data/products';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'products', 'why-choose-us', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Structured Data (JSON-LD) for LocalBusiness / AutoPartsStore
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'AutoPartsStore',
    name: BUSINESS_DETAILS.name,
    description: 'Quality car body parts and automotive lighting solutions in Nairobi, Kenya.',
    telephone: BUSINESS_DETAILS.phone1,
    email: BUSINESS_DETAILS.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Baricho Road, Opposite Carrefour, next to Robstar',
      addressLocality: 'Industrial Area, Nairobi',
      addressRegion: 'Nairobi',
      addressCountry: 'KE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -1.3032,
      longitude: 36.8375,
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Featured Auto Spares & Lighting',
      itemListElement: FEATURED_PRODUCTS.map((prod) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: prod.name,
          description: prod.description,
        },
      })),
    },
  };

  return (
    <div className="min-h-screen bg-[#061A2B] text-slate-100 flex flex-col font-sans selection:bg-[#087FF5] selection:text-white">
      {/* JSON-LD Structured Data for Search Engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Sticky Header Navigation */}
      <Header activeSection={activeSection} />

      {/* Main Semantic Page Content */}
      <main className="flex-grow">
        <Hero />
        <TrustStrip />
        <AboutSection />
        <ProductsSection />
        <WhyChooseUs />
        <ContactSection />
      </main>

      {/* Semantic Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}
