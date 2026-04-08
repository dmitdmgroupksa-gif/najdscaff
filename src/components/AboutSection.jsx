import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';

export default function AboutSection() {
  const { language } = useLanguage();
  const t = translations.homeAbout;

  const features = [
    {
      title: t.features.f1.title[language],
      description: t.features.f1.desc[language],
      linkText: translations.nav.about[language],
      href: createPageUrl('About')
    },
    {
      title: t.features.f2.title[language],
      description: t.features.f2.desc[language],
      linkText: translations.nav.products[language],
      href: createPageUrl('Products')
    },
    {
      title: t.features.f3.title[language],
      description: t.features.f3.desc[language],
      linkText: translations.nav.projects[language],
      href: createPageUrl('Projects')
    },
    {
      title: t.features.f4.title[language],
      description: t.features.f4.desc[language],
      linkText: translations.nav.contact[language],
      href: createPageUrl('Contact')
    },
  ];

  return (
    <section aria-labelledby="about-section-heading" className="relative bg-[#002D62] py-20 md:py-28 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-1/2 h-full">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
          {/* Left Content */}
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center mb-6"
            >
              <div className={`w-12 h-1 bg-white ${language === 'ar' ? 'ml-4' : 'mr-4'}`} />
              <span className="text-white/80 text-sm tracking-[0.2em]">{t.tag[language]}</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              id="about-section-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
            >
              {t.title[language]}
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/70 text-lg mb-8 leading-relaxed"
            >
              {t.desc[language]}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Link 
                to={createPageUrl('About')} 
                aria-label={language === 'ar' ? 'اعرف المزيد عن نجد للسقالات' : 'Learn more about Najd Scaffolding'}
                className="group inline-flex items-center bg-white text-[#002D62] px-8 py-4 font-semibold text-sm tracking-wide hover:bg-[#f0f0f0] transition-colors duration-300"
              >
                {t.learnMore[language]}
                <ArrowRight className={`w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 ${language === 'ar' ? 'mr-3 rotate-180 group-hover:-translate-x-1' : 'ml-3'}`} />
              </Link>
            </motion.div>
          </div>

          {/* Right Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <Link 
                  to={feature.href}
                  className="block h-full group p-6 border border-white/10 hover:border-white/50 hover:bg-white/5 transition-all duration-300 cursor-pointer"
                >
                  <h3 className="text-white font-semibold text-lg mb-3 group-hover:text-[#4DA8DA] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-white/60 text-sm mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <span className="text-[#4DA8DA] text-sm font-medium flex items-center">
                    {feature.linkText}
                    <ArrowRight className={`w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 ${language === 'ar' ? 'mr-2 rotate-180 group-hover:-translate-x-1' : 'ml-2'}`} />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}





