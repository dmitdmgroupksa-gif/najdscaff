import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import Footer from '../components/Footer';
import SEO from '../SEO';
import { JsonLd } from 'react-schemaorg';

export default function Projects() {
  const { language } = useLanguage();

  const projects = [
    {
      id: 1,
      title: { en: 'Roshn Sidra Project', ar: 'مشروع روشن سدرة' },
      image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694fa8b08dd9a1d8cd23762e/6eaee2bb7_8.png',
      location: { en: 'Riyadh', ar: 'الرياض' }
    },
    {
      id: 2,
      title: { en: 'Saudi Electricity Company - Kharj Road Riyadh', ar: 'شركة الكهرباء السعودية - طريق الخرج الرياض' },
      image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694fa8b08dd9a1d8cd23762e/a6f350dbe_2.png',
      location: { en: 'Riyadh', ar: 'الرياض' }
    },
    {
      id: 3,
      title: { en: 'King Salman Park - Riyadh', ar: 'حديقة الملك سلمان - الرياض' },
      image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694fa8b08dd9a1d8cd23762e/7dcabfb3c_4.png',
      location: { en: 'Riyadh', ar: 'الرياض' }
    },
    {
      id: 4,
      title: { en: 'Al Rajhi Medical Center', ar: 'مركز الراجحي الطبي' },
      image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694fa8b08dd9a1d8cd23762e/0a98ffa4b_6.png',
      location: { en: 'Riyadh', ar: 'الرياض' }
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-20">
      <SEO 
        title={language === 'ar' ? 'مشاريعنا' : 'Our Projects'}
        description={language === 'ar' ? 'استعرض مشاريعنا المكتملة في مختلف القطاعات في المملكة العربية السعودية' : 'Explore our completed projects across various sectors in Saudi Arabia'}
      />
      <JsonLd 
        item={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": language === 'ar' ? 'مشاريعنا' : 'Our Projects',
          "description": language === 'ar' ? 'استعرض مشاريعنا المكتملة' : 'Explore our completed projects',
          "url": "https://najdscaff.com/Projects"
        }}
      />

      {/* Hero Section */}
      <section className="bg-[#002D62] py-20 px-6">
        <div className="max-w-7xl mx-auto md:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {language === 'ar' ? 'مشاريعنا' : 'Our Projects'}
            </h1>
            <p className="text-white/80 text-lg max-w-2xl">
              {language === 'ar' 
                ? 'استعرض مجموعة من مشاريعنا المكتملة بنجاح في مختلف القطاعات في المملكة العربية السعودية'
                : 'Explore a selection of our successfully completed projects across various sectors in Saudi Arabia'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg"
            >
              <div className="relative overflow-hidden" style={{ paddingBottom: '125%' }}>
                <img 
                  src={project.image}
                  alt={project.title[language]}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-2xl font-bold text-[#002D62] mb-2">
                  {project.title[language]}
                </h3>
                <p className="text-gray-600 text-sm">
                  {project.location[language]}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}



