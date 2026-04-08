import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';

// Import products from ProductGrid
const cuplockProducts = [
  {
    title: 'Couplers',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694fa8b08dd9a1d8cd23762e/689f10f60_couplers.png',
  },
  {
    title: 'U-Head Jack',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694fa8b08dd9a1d8cd23762e/a89aaf6b4_Uheadjack.png',
  },
  {
    title: 'Base Jack',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694fa8b08dd9a1d8cd23762e/c32ef4435_BaseJack.png',
  }
];

const aluminiumProducts = [
  {
    title: 'Wide - Aluminum Scaffolding Mobile Tower',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694fa8b08dd9a1d8cd23762e/203f5fce7_AluminiumFoldableMobileTower.png',
  },
  {
    title: 'Aluminium A-Type Ladder',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694fa8b08dd9a1d8cd23762e/6611b894f_AluminumA-TypeLadder.png',
  },
  {
    title: 'Aluminium Narrow Mobile Tower',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694fa8b08dd9a1d8cd23762e/f384c1e2b_AluminumNarrowmobileTower.png',
  }
];

// Select featured products (2 from cuplock, 2 from aluminium)
const products = [
  { ...cuplockProducts[0], id: 1, category: 'Steel Scaffolding', description: 'High-quality couplers for secure scaffolding connections.' },
  { ...aluminiumProducts[0], id: 2, category: 'Aluminium', description: 'Portable and easy-to-assemble mobile tower for various applications.' },
  { ...cuplockProducts[1], id: 3, category: 'Steel Scaffolding', description: 'Adjustable U-head jack for supporting beams and formwork.' },
  { ...aluminiumProducts[1], id: 4, category: 'Aluminium', description: 'Versatile A-type ladder for safe access at various heights.' }
];

export default function FeaturedProducts() {
  const { language } = useLanguage();
  const t = translations.featured;
  const categories = [t.categories.all[language], t.categories.structural[language], t.categories.support[language], t.categories.access[language], t.categories.accessories[language]];
  
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [hoveredProduct, setHoveredProduct] = useState(null);

  // Reset category on language change
  React.useEffect(() => {
    setActiveCategory(categories[0]);
  }, [language]);

  return (
    <section id="products" className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16">
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center mb-4"
            >
              <div className={`w-12 h-1 bg-[#00529C] ${language === 'ar' ? 'ml-4' : 'mr-4'}`} />
              <span className="text-[#333] text-sm tracking-[0.2em]">{t.tag[language]}</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#333]"
            >
              {t.title[language]}
            </motion.h2>
          </div>

          {/* Category Filter Removed */}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
              className="group relative aspect-square overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <motion.div 
                className="absolute inset-0"
                animate={{
                  scale: hoveredProduct === product.id ? 1.1 : 1
                }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                <img 
                  src={product.image} 
                  alt={product.title}
                  loading="lazy"
                  width="600"
                  height="450"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#002D62]/90 via-[#002D62]/40 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="flex items-center text-white/80 text-xs tracking-[0.15em] mb-2">
                  {product.category.toUpperCase()}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-[#4DA8DA] transition-colors duration-300">
                  {product.title}
                </h3>
                <p className="text-white/80 text-sm">{product.description}</p>
              </div>

              {/* Arrow Icon */}
              <motion.div
                className={`absolute top-6 ${language === 'ar' ? 'left-6' : 'right-6'} w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center`}
                animate={{
                  opacity: hoveredProduct === product.id ? 1 : 0,
                  scale: hoveredProduct === product.id ? 1 : 0.8
                }}
                transition={{ duration: 0.3 }}
              >
                <ArrowUpRight className={`w-5 h-5 text-white ${language === 'ar' ? 'rotate-[-90deg]' : ''}`} />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <Link to={createPageUrl('Products')} className="group flex items-center text-[#333] text-sm tracking-[0.15em] font-medium hover:text-[#00529C] transition-colors duration-300">
            {t.viewAll[language]}
            <ArrowRight className={`w-5 h-5 group-hover:translate-x-2 transition-transform duration-300 ${language === 'ar' ? 'mr-3 rotate-180 group-hover:-translate-x-2' : 'ml-3'}`} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}



