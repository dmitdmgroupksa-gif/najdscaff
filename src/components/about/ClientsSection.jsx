import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../utils/translations';

const clientLogos = [
  "https://i.ibb.co/N2cT3MHy/39.webp",
  "https://i.ibb.co/8gfjFbd6/32.webp",
  "https://i.ibb.co/hj2fbb0/27.webp",
  "https://i.ibb.co/m53SK34J/23.webp",
  "https://i.ibb.co/hRZJSX8Y/16.webp",
  "https://i.ibb.co/XZtLQbmK/13.webp",
  "https://i.ibb.co/QjdZvV5v/12.webp",
  "https://i.ibb.co/cSHxGN3L/11.webp",
  "https://i.ibb.co/jZqvs5Zr/10.webp",
  "https://i.ibb.co/7dnccYvT/8.webp",
  "https://i.ibb.co/r2k0gr0Q/7.webp",
  "https://i.ibb.co/Mx9Xhm49/6.webp",
  "https://i.ibb.co/mr7d86HZ/5.webp",
  "https://i.ibb.co/PZ4mBmVb/4.webp",
  "https://i.ibb.co/XvJzSBF/3.webp",
  "https://i.ibb.co/3yg0B4zX/1.webp",
  "https://i.ibb.co/DHRJYq2B/2.webp"
];

export default function ClientsSection() {
  const { language } = useLanguage();

  return (
    <section className="py-20 bg-gray-50 border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-16 mb-12 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-[#002D62] mb-4"
        >
          {translations.clients.title[language]}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-600 max-w-2xl mx-auto"
        >
          {translations.clients.subtitle[language]}
        </motion.p>
      </div>

      <div className="relative w-full">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10" />
        
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-12 md:gap-20 items-center px-4"
            animate={{
              x: language === 'ar' ? ["0%", "50%"] : ["0%", "-50%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 120,
                ease: "linear",
              },
            }}
            style={{ width: "max-content" }}
          >
            {[...clientLogos, ...clientLogos].map((logo, index) => (
              <div 
                key={index} 
                className="w-32 h-32 md:w-40 md:h-40 flex items-center justify-center transition-all duration-300 opacity-80 hover:opacity-100 p-4"
              >
                <img 
                  src={logo} 
                  alt={`Client Logo ${index + 1}`} 
                  className="max-w-full max-h-full object-contain mix-blend-multiply"
                  loading="lazy"
                  width="120"
                  height="120"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}