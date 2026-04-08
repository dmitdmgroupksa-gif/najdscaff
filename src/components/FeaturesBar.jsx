import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Users, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const features = [
  {
    icon: Shield,
    text: { en: 'Safety First Operations', ar: 'عمليات السلامة أولاً' }
  },
  {
    icon: Zap,
    text: { en: 'Fast Site Mobilization', ar: 'تعبئة سريعة للموقع' }
  },
  {
    icon: Users,
    text: { en: 'Experienced Supervisors', ar: 'مشرفون ذوو خبرة' }
  },
  {
    icon: MapPin,
    text: { en: 'Serving All Regions of KSA', ar: 'خدمة جميع مناطق المملكة' }
  }
];

export default function FeaturesBar() {
  const { language } = useLanguage();

  return (
    <section className="bg-white py-8 border-b border-gray-100">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#0077be]/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[#0077be]" />
                </div>
                <p className="text-sm font-medium text-gray-700">
                  {feature.text[language]}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}