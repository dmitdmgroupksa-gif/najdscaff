import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ShoppingCart, Factory, Truck } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';

export default function ServicesSection() {
  const { language } = useLanguage();
  const t = translations.sectors;

  const services = [
    {
      id: 'sales',
      title: t.items.sales.title[language],
      icon: ShoppingCart,
      description: t.items.sales.desc[language],
      image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694fa8b08dd9a1d8cd23762e/554d747d5_scaffoldingsales.jpg',
    },
    {
      id: 'industrial',
      title: t.items.industrial.title[language],
      icon: Factory,
      description: t.items.industrial.desc[language],
      image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694fa8b08dd9a1d8cd23762e/a3aa34136_industrialsolutions.jpg',
    },
    {
      id: 'logistics',
      title: t.items.logistics.title[language],
      icon: Truck,
      description: t.items.logistics.desc[language],
      image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694fa8b08dd9a1d8cd23762e/21566cf9f_Untitleddesign3.jpg',
    },
  ];

  const [activeService, setActiveService] = useState(services[0]);

  // Update active service text when language changes
  React.useEffect(() => {
    setActiveService(services.find(s => s.id === activeService.id) || services[0]);
  }, [language]);

  // Preload all images immediately on mount
  React.useEffect(() => {
    const imageUrls = [
      'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694fa8b08dd9a1d8cd23762e/554d747d5_scaffoldingsales.jpg',
      'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694fa8b08dd9a1d8cd23762e/a3aa34136_industrialsolutions.jpg',
      'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694fa8b08dd9a1d8cd23762e/21566cf9f_Untitleddesign3.jpg',
    ];
    
    imageUrls.forEach(url => {
      const img = new Image();
      img.src = url;
    });
  }, []);

  return (
    <section id="services" aria-label={language === 'ar' ? 'خدماتنا' : 'Our services'} className="bg-[#00529C] py-20 md:py-28 relative overflow-hidden">
      {/* Background Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00529C] to-[#0077be] opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center mb-4"
          >
            <div className={`w-12 h-1 bg-white ${language === 'ar' ? 'ml-4' : 'mr-4'}`} />
            <span className="text-white text-sm tracking-[0.2em] font-medium">{t.tag[language]}</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase"
          >
            {t.title[language]}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Left - Tabs */}
          <div className="flex flex-col gap-4">
            {services.map((service) => {
              const Icon = service.icon;
              const isActive = activeService.id === service.id;
              
              return (
                <motion.button
                   key={service.id}
                   onClick={() => setActiveService(service)}
                   initial={{ opacity: 0, x: -20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   className={`flex-1 w-full text-left rtl:text-right p-6 border transition-all duration-300 flex flex-col justify-center ${
                     isActive 
                       ? 'border-white bg-white/10' 
                       : 'border-white/20 hover:border-white/50'
                   }`}
                 >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg transition-colors duration-300 ${
                      isActive ? 'bg-white' : 'bg-white/10'
                    }`}>
                      <Icon className={`w-6 h-6 ${isActive ? 'text-[#00529C]' : 'text-white'}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-xl font-semibold mb-2 transition-colors duration-300 text-white`}>
                        {service.title}
                      </h3>
                      <p className="text-white/70 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    <ArrowRight className={`w-5 h-5 transition-all duration-300 ${
                      isActive ? (language === 'ar' ? 'text-white -translate-x-1 rotate-180' : 'text-white translate-x-1') : 'text-white/30'
                    }`} />
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Right - Image & Tags */}
          <div className="relative h-[400px] lg:h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 w-full h-full overflow-hidden"
              >
                <img 
                  src={activeService.image}
                  alt={language === 'ar' ? `صورة توضيحية لخدمة ${activeService.title}` : `Illustration of ${activeService.title} service`}
                  className="w-full h-full object-cover"
                  loading="eager"
                  width="1000"
                  height="667"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}