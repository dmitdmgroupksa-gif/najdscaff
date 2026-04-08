import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';

const news = [
  {
    id: 1,
    title: 'Safety Guidelines for Scaffolding Installation',
    category: 'Safety',
    date: 'Jan 2024',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
    featured: true,
  },
  {
    id: 2,
    title: 'The Benefits of Cuplock Scaffolding Systems',
    category: 'Product Focus',
    date: 'Dec 2023',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80',
    featured: true,
  },
  {
    id: 3,
    title: 'Supporting Major Infrastructure in Riyadh',
    category: 'Projects',
    date: 'Nov 2023',
    image: 'https://images.unsplash.com/photo-1590650046871-92c887180603?w=600&q=80',
    featured: true,
  },
  ];

export default function NewsCards() {
  const { language } = useLanguage();
  const t = translations.news;

  return (
    <section className="bg-[#f4f4f4] py-20 md:py-28">
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

          <motion.button 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group flex items-center text-[#333] text-sm tracking-[0.15em] font-medium hover:text-[#00529C] transition-colors duration-300 mt-6 md:mt-0"
          >
            {t.viewAll[language]}
            <ArrowRight className={`w-5 h-5 group-hover:translate-x-2 transition-transform duration-300 ${language === 'ar' ? 'mr-3 rotate-180 group-hover:-translate-x-2' : 'ml-3'}`} />
          </motion.button>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {news.slice(0, 3).map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden mb-6">
                <motion.img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-[#002D62]/20 group-hover:bg-[#002D62]/10 transition-colors duration-300" />
                
                {/* Arrow on hover */}
                <div className={`absolute top-4 ${language === 'ar' ? 'left-4' : 'right-4'} w-10 h-10 rounded-full bg-white/80 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100`}>
                  <ArrowUpRight className={`w-5 h-5 text-[#002D62] ${language === 'ar' ? 'rotate-[-90deg]' : ''}`} />
                </div>
              </div>

              {/* Content */}
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[#00529C] text-xs tracking-[0.15em] font-medium">
                  {item.category.toUpperCase()}
                </span>
                <span className="w-1 h-1 rounded-full bg-[#333]/40" />
                <span className="text-[#666] text-xs">{item.date}</span>
              </div>

              <h3 className="text-lg md:text-xl font-semibold text-[#333] group-hover:text-[#00529C] transition-colors duration-300 leading-tight">
                {item.title}
              </h3>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}



