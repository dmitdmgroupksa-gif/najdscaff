import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Fuel, Factory, Construction } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function IndustriesSection() {
  const { language } = useLanguage();

  const industries = [
    {
      id: 'construction',
      icon: Building2,
      title: { en: 'Construction', ar: 'البناء' },
      description: { 
        en: 'Comprehensive scaffolding solutions for residential, commercial, and high-rise construction projects.',
        ar: 'حلول سقالات شاملة للمشاريع السكنية والتجارية والأبراج الشاهقة.'
      },
      image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694fa8b08dd9a1d8cd23762e/6e3137696_Construction.jpg'
    },
    {
      id: 'oil-gas',
      icon: Fuel,
      title: { en: 'Oil & Gas', ar: 'النفط والغاز' },
      description: { 
        en: 'Specialized scaffolding systems for refineries, petrochemical plants, and offshore facilities.',
        ar: 'أنظمة سقالات متخصصة للمصافي ومصانع البتروكيماويات والمنشآت البحرية.'
      },
      image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694fa8b08dd9a1d8cd23762e/e0c668278_Oilgas.jpg'
    },
    {
      id: 'industrial',
      icon: Factory,
      title: { en: 'Industrial Plants', ar: 'المصانع الصناعية' },
      description: { 
        en: 'Heavy-duty scaffolding for manufacturing facilities, power plants, and industrial maintenance.',
        ar: 'سقالات شديدة التحمل للمنشآت الصناعية ومحطات الطاقة وأعمال الصيانة الصناعية.'
      },
      image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694fa8b08dd9a1d8cd23762e/62cc567d9_IndustrialPlants.jpg'
    },
    {
      id: 'infrastructure',
      icon: Construction,
      title: { en: 'Infrastructure Projects', ar: 'مشاريع البنية التحتية' },
      description: { 
        en: 'Robust support systems for bridges, tunnels, highways, and major infrastructure developments.',
        ar: 'أنظمة دعم قوية للجسور والأنفاق والطرق السريعة ومشاريع البنية التحتية الكبرى.'
      },
      image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694fa8b08dd9a1d8cd23762e/db3af911b_InfrastructureProjects.jpg'
    }
  ];

  return (
    <section aria-label={language === 'ar' ? 'الصناعات التي نخدمها' : 'Industries we serve'} className="bg-gray-50 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center mb-4"
          >
            <div className={`w-12 h-1 bg-[#002D62] ${language === 'ar' ? 'ml-4' : 'mr-4'}`} />
            <span className="text-[#002D62] text-sm tracking-[0.2em] font-medium uppercase">
              {language === 'ar' ? 'القطاعات' : 'OUR SECTORS'}
            </span>
            <div className={`w-12 h-1 bg-[#002D62] ${language === 'ar' ? 'mr-4' : 'ml-4'}`} />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#002D62] mb-4"
          >
            {language === 'ar' ? 'الصناعات التي نخدمها' : 'Industries We Serve'}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg max-w-3xl mx-auto"
          >
            {language === 'ar' 
              ? 'نقدم حلول سقالات متخصصة لمجموعة متنوعة من الصناعات في جميع أنحاء المملكة العربية السعودية'
              : 'Delivering specialized scaffolding solutions across diverse industries throughout Saudi Arabia'}
          </motion.p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg"
              >
                {/* Image */}
                <div className="relative overflow-hidden" style={{ paddingBottom: '100%' }}>
                  <img 
                    src={industry.image}
                    alt={industry.title[language]}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#002D62]/90 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-3">
                      <Icon className="w-6 h-6 text-[#002D62]" />
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {industry.title[language]}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed">
                    {industry.description[language]}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}