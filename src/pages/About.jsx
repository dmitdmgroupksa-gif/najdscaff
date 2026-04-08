import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Target, Eye, Layout as LayoutIcon, Star, ShieldCheck, Handshake, Heart } from 'lucide-react';
import ClientsSection from '../components/ClientsSection';
import Footer from '../components/Footer';
import SEO from '../SEO';
import { JsonLd } from 'react-schemaorg';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';

export default function About() {
  const { language, t } = useLanguage();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 150]);
  const imageY = useTransform(scrollYProgress, [0.1, 0.5], [50, -50]);
  const contentY = useTransform(scrollYProgress, [0.1, 0.5], [0, -30]);
  const valuesY = useTransform(scrollYProgress, [0.4, 0.7], [50, -50]);
  
  const values = [
    {
      icon: Star,
      title: translations.about.values.excellence[language],
      description: translations.about.values.excellenceDesc[language]
    },
    {
      icon: ShieldCheck,
      title: translations.about.values.integrity[language],
      description: translations.about.values.integrityDesc[language]
    },
    {
      icon: Handshake,
      title: translations.about.values.teamwork[language],
      description: translations.about.values.teamworkDesc[language]
    },
    {
      icon: Heart,
      title: translations.about.values.safety[language],
      description: translations.about.values.safetyDesc[language]
    }
  ];

  return (
    <article ref={containerRef} className="bg-white min-h-screen pt-20 overflow-hidden">
      <SEO 
        title={translations.about.title[language]}
        description={translations.about.subtitle[language]}
      />
      <JsonLd 
        item={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": translations.about.title[language],
          "description": translations.about.subtitle[language],
          "url": "https://najdscaff.com/About",
          "mainEntity": {
            "@type": "Organization",
            "name": "Najd Scaffolding",
            "logo": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694fa8b08dd9a1d8cd23762e/61b5aff2d_Untitleddesign94.png"
          }
        }}
      />
      {/* Hero Section */}
      <section aria-label={language === 'ar' ? 'مقدمة عن الشركة' : 'About introduction'} className="bg-[#002D62] py-20 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto md:px-16 relative z-10">
          <motion.div style={{ y: heroY }}>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              {translations.about.title[language]}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-white/80 text-lg max-w-2xl"
            >
              {translations.about.subtitle[language]}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section aria-label={language === 'ar' ? 'من نحن' : 'Who we are'} className="max-w-7xl mx-auto px-6 md:px-16 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: language === 'ar' ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694fa8b08dd9a1d8cd23762e/127996232_ChatGPTImageJan7202608_56_30AM.jpg"
              alt={language === 'ar' ? 'مشروع نجد للسقالات' : 'Najd Scaffolding Project'}
              className="w-full h-auto object-cover rounded-lg shadow-xl"
              loading="eager"
              width="800"
              height="600"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: language === 'ar' ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center mb-4"
            >
              <div className={`w-12 h-1 bg-[#002D62] ${language === 'ar' ? 'ml-4' : 'mr-4'}`} />
              <span className="text-[#002D62] text-sm tracking-[0.2em] font-medium uppercase">
                {language === 'ar' ? 'نبذة عنا' : 'ABOUT US'}
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#002D62] mb-8">
              {language === 'ar' ? 'من نحن' : 'Who We Are'}
            </h2>
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>{translations.about.p1[language]}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Specialize In */}
      <section aria-label={language === 'ar' ? 'تخصصنا' : 'What we specialize in'} className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center mb-4"
            >
              <div className={`w-12 h-1 bg-[#002D62] ${language === 'ar' ? 'ml-4' : 'mr-4'}`} />
              <span className="text-[#002D62] text-sm tracking-[0.2em] font-medium uppercase">
                {language === 'ar' ? 'خبرتنا' : 'OUR EXPERTISE'}
              </span>
              <div className={`w-12 h-1 bg-[#002D62] ${language === 'ar' ? 'mr-4' : 'ml-4'}`} />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#002D62] mb-6"
            >
              {language === 'ar' ? 'ما نتخصص فيه' : 'What We Specialize In'}
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold text-[#002D62] mb-4">
                {language === 'ar' ? 'تصميم وتصنيع' : 'Design & Manufacturing'}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {translations.about.p2[language]}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold text-[#002D62] mb-4">
                {language === 'ar' ? 'ضمان الجودة' : 'Quality Assurance'}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {translations.about.p3[language]}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content - Mission Vision Goals */}
      <section aria-label={language === 'ar' ? 'رسالة الرئيس التنفيذي' : "CEO's Message"} className="max-w-7xl mx-auto px-6 md:px-16 py-16 md:py-24 border-t border-gray-200">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          {/* Left Image */}
          <motion.div 
            style={{ y: imageY }}
            initial={{ opacity: 0, x: language === 'ar' ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-[40%] h-auto"
            >
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694fa8b08dd9a1d8cd23762e/fd0999b3f_BlackYellowModernCareerBusinessMagazineCover2.jpg" 
              alt={language === 'ar' ? 'د. سميع الله نخوة - الرئيس التنفيذي لشركة نجد للسقالات' : 'Dr. Samiulla Nakwa - Chairman & CEO of Najd Scaffolding'} 
              fetchpriority="high"
              loading="eager"
              width="600"
              height="800"
              className="w-full h-full object-cover rounded-lg shadow-2xl"
              style={{ minHeight: '600px' }}
            />
            </motion.div>

            {/* Right Content */}
            <motion.div 
            style={{ y: contentY }}
            initial={{ opacity: 0, x: language === 'ar' ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-[60%] flex flex-col justify-center py-4"
            >
            <h2 className="text-4xl md:text-5xl font-bold text-[#002D62] mb-2 leading-tight">
              {language === 'ar' ? 'د. سميع الله نخوة' : 'Dr. Samiulla Nakwa'}
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              {language === 'ar' ? 'رئيس مجلس الإدارة والرئيس التنفيذي' : 'Chairman & CEO'}
            </p>

            <p className="text-xl text-gray-800 font-medium italic border-l-4 border-[#4DA8DA] pl-4">
              "{translations.about.ceoWelcome[language]}"
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section aria-label={language === 'ar' ? 'لماذا تختارنا' : 'Why choose us'} className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center mb-4"
            >
              <div className={`w-12 h-1 bg-[#002D62] ${language === 'ar' ? 'ml-4' : 'mr-4'}`} />
              <span className="text-[#002D62] text-sm tracking-[0.2em] font-medium uppercase">
                {language === 'ar' ? 'مميزاتنا' : 'OUR STRENGTHS'}
              </span>
              <div className={`w-12 h-1 bg-[#002D62] ${language === 'ar' ? 'mr-4' : 'ml-4'}`} />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#002D62] mb-6"
            >
              {language === 'ar' ? 'لماذا تختار نجد للسقالات؟' : 'Why Choose Najd Scaffolding?'}
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: { en: 'Safety First', ar: 'السلامة أولاً' },
                desc: { en: 'We adhere to the strictest international safety standards to ensure the well-being of your workforce.', ar: 'نلتزم بأشد معايير السلامة الدولية لضمان سلامة القوى العاملة لديك.' }
              },
              {
                title: { en: 'Quality Assurance', ar: 'ضمان الجودة' },
                desc: { en: 'Our products undergo rigorous testing and quality checks to meet industry requirements.', ar: 'تخضع منتجاتنا لاختبارات وفحوصات جودة صارمة لتلبية متطلبات الصناعة.' }
              },
              {
                title: { en: 'Expert Team', ar: 'فريق خبراء' },
                desc: { en: 'A team of seasoned professionals dedicated to providing the best solutions for your projects.', ar: 'فريق من المحترفين المتمرسين مكرس لتقديم أفضل الحلول لمشاريعك.' }
              },
              {
                title: { en: 'Timely Delivery', ar: 'التسليم في الوقت المحدد' },
                desc: { en: 'We understand the value of time in construction and ensure punctual delivery of services.', ar: 'نحن نتفهم قيمة الوقت في البناء ونضمن تسليم الخدمات في الوقت المحدد.' }
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-lg border-t-4 border-[#4DA8DA]"
              >
                <div className="w-12 h-12 bg-[#002D62] rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">0{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-[#002D62] mb-3">
                  {item.title[language]}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.desc[language]}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section - Redesigned */}
      <section aria-label={language === 'ar' ? 'قيمنا الجوهرية' : 'Core values'} className="bg-[#1a1a1a] py-24 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="mb-20">
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                {translations.about.coreValues[language]}
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-gray-400 text-lg leading-relaxed max-w-xl"
              >
                {translations.about.coreValuesDesc[language]}
              </motion.p>
            </div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="relative pl-6"
              >
                {/* Blue left border */}
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#4DA8DA]" />
                
                <span className="text-[#4DA8DA] font-mono text-sm mb-2 block">
                  0{index + 1}
                </span>
                <h3 className="text-xl font-bold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section aria-label={language === 'ar' ? 'الرؤية والرسالة' : 'Mission and vision'} className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="flex items-center mb-4">
                <div className={`w-12 h-1 bg-[#002D62] ${language === 'ar' ? 'ml-4' : 'mr-4'}`} />
                <span className="text-[#002D62] text-sm tracking-[0.2em] font-medium uppercase">
                  {language === 'ar' ? 'أهدافنا' : 'OUR PURPOSE'}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#002D62] mb-6">
                {language === 'ar' ? 'رؤيتنا ورسالتنا' : 'Mission & Vision'}
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div className="bg-gradient-to-br from-[#002D62] to-[#00529C] p-8 rounded-lg text-white">
                <Target className="w-12 h-12 mb-4 text-[#4DA8DA]" />
                <h3 className="text-2xl font-bold mb-4">{translations.about.mission[language]}</h3>
                <p className="text-white/90 leading-relaxed">
                  {translations.about.missionText[language]}
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#4DA8DA] to-[#002D62] p-8 rounded-lg text-white">
                <Eye className="w-12 h-12 mb-4 text-white" />
                <h3 className="text-2xl font-bold mb-4">{translations.about.vision[language]}</h3>
                <p className="text-white/90 leading-relaxed">
                  {translations.about.visionText[language]}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <ClientsSection />

      <Footer />
    </article>
  );
}



