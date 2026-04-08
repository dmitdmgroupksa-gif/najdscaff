import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';
import { FolderCheck, Award, ShieldCheck, Headphones } from 'lucide-react';

function AnimatedCounter({ value, prefix = '', suffix = '', duration = 2000, inView }) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!inView) return;
    
    let start = 0;
    const end = value;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [value, duration, inView]);
  
  return (
    <span>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { language } = useLanguage();

  const stats = [
    { value: 120, suffix: '+', label: { en: 'Projects Completed', ar: 'مشاريع مكتملة' }, icon: FolderCheck },
    { value: 8, suffix: '+', label: { en: 'Years Industry Experience', ar: 'سنوات خبرة صناعية' }, icon: Award },
    { value: 100, suffix: '%', label: { en: 'Safety Compliance', ar: 'امتثال السلامة' }, icon: ShieldCheck },
    { value: 24, suffix: '/7', label: { en: 'Support & Response', ar: 'دعم واستجابة' }, icon: Headphones },
  ];

  return (
    <section 
      ref={ref}
      aria-label={language === 'ar' ? 'إحصائياتنا' : 'Our statistics'}
      className="bg-[#002D62] py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center mb-16"
        >
          {language === 'ar' ? 'تقديم خدمات سقالات موثوقة' : 'Delivering Reliable Scaffolding Services'}
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3">
                  <AnimatedCounter 
                    value={stat.value} 
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    inView={isInView}
                  />
                </div>
                <div className="text-white/80 text-sm md:text-base">
                  {stat.label[language]}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}



