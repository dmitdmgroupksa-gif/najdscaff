import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';
import SEO from '../utils/SEO';
import Footer from '../components/Footer';

export default function Sitemap() {
  const { language } = useLanguage();

  const siteStructure = [
    {
      title: { en: 'Main Pages', ar: 'الصفحات الرئيسية' },
      links: [
        { label: translations.nav.home, url: 'Home' },
        { label: translations.nav.about, url: 'About' },
        { label: translations.nav.products, url: 'Products' },
        { label: translations.nav.projects, url: 'Projects' },
        { label: translations.nav.contact, url: 'Contact' },
      ]
    },
    {
      title: { en: 'Products & Services', ar: 'المنتجات والخدمات' },
      links: [
        { label: { en: 'Cuplock Scaffolding', ar: 'سقالات الكوب لوك' }, url: 'Products' },
        { label: { en: 'Aluminium Scaffolding', ar: 'سقالات ألمنيوم' }, url: 'Products' },
        { label: { en: 'Couplers', ar: 'القارنات' }, url: 'Products' },
        { label: { en: 'Jacks', ar: 'الرافعات' }, url: 'Products' },
        { label: { en: 'Walk Boards', ar: 'ألواح المشي' }, url: 'Products' },
      ]
    },
    {
      title: { en: 'Industries We Serve', ar: 'الصناعات التي نخدمها' },
      links: [
        { label: { en: 'Construction', ar: 'البناء' }, url: 'Home#industries' },
        { label: { en: 'Oil & Gas', ar: 'النفط والغاز' }, url: 'Home#industries' },
        { label: { en: 'Industrial Plants', ar: 'المصانع الصناعية' }, url: 'Home#industries' },
        { label: { en: 'Infrastructure Projects', ar: 'مشاريع البنية التحتية' }, url: 'Home#industries' },
      ]
    },
    {
      title: { en: 'Legal & Info', ar: 'قانوني ومعلومات' },
      links: [
        { label: translations.footer.links.privacy, url: '#' },
        { label: translations.footer.links.terms, url: '#' },
        { label: translations.footer.links.accessibility, url: '#' },
      ]
    }
  ];

  const getLabel = (item) => {
    if (typeof item === 'string') return item;
    if (item[language]) return item[language];
    if (item.en) return item.en;
    return '';
  };

  return (
    <div className="bg-white min-h-screen pt-20">
      <SEO 
        title={language === 'ar' ? 'خريطة الموقع' : 'Sitemap'}
        description={language === 'ar' ? 'خريطة موقع نجد للسقالات - تصفح جميع صفحات موقعنا.' : 'Najd Scaffolding Sitemap - Browse all pages on our website.'}
      />

      <div className="bg-[#002D62] py-20 px-6">
        <div className="max-w-7xl mx-auto md:px-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            {language === 'ar' ? 'خريطة الموقع' : 'Sitemap'}
          </motion.h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {siteStructure.map((section, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <h2 className="text-xl font-bold text-[#002D62] mb-6 border-b border-gray-200 pb-2">
                {getLabel(section.title)}
              </h2>
              <ul className="space-y-3">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <Link 
                      to={link.url.startsWith('#') ? link.url : createPageUrl(link.url.split('#')[0]) + (link.url.includes('#') ? '#' + link.url.split('#')[1] : '')}
                      className="text-gray-600 hover:text-[#4DA8DA] transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-[#4DA8DA] transition-colors" />
                      {getLabel(link.label)}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}