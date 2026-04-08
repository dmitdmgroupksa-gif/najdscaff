import React from 'react';
import { motion } from 'framer-motion';
import ProductGrid from '../components/ProductGrid';
import Footer from '../components/Footer';
import SEO from '../SEO';
import { JsonLd } from 'react-schemaorg';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';

export default function Products() {
  const { language } = useLanguage();

  return (
    <article className="bg-white min-h-screen pt-20">
      <SEO 
        title={translations.productsPage.title[language]}
        description={translations.productsPage.subtitle[language]}
      />
      <JsonLd 
        item={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": translations.productsPage.title[language],
          "description": translations.productsPage.subtitle[language],
          "url": "https://najdscaff.com/Products",
          "mainEntity": {
            "@type": "ItemList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Scaffolding Pipes"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Couplers"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Jacks"
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": "Walk Boards"
              }
            ]
          }
        }}
      />
      
      {/* Hero Section */}
      <section aria-label={language === 'ar' ? 'منتجاتنا' : 'Our products'} className="bg-[#002D62] py-20 px-6">
        <div className="max-w-7xl mx-auto md:px-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            {translations.productsPage.title[language]}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/80 text-lg max-w-2xl"
          >
            {translations.productsPage.subtitle[language]}
          </motion.p>
        </div>
      </section>

      <ProductGrid />

      <Footer />
    </article>
  );
}



