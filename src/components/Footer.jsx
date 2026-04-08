import React from 'react';
import { motion } from 'framer-motion';
import { 
  Instagram, 
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Shield
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';

const socialLinks = [
  { icon: Instagram, href: 'https://www.instagram.com/najdscaff/', label: 'Instagram' },
];

export default function Footer({ hideCTA = false }) {
  const { language } = useLanguage();
  const t = translations.footer;

  return (
    <footer className="bg-[#002D62]" role="contentinfo">
      {/* CTA Section */}
      {!hideCTA && (
      <section aria-label={language === 'ar' ? 'دعوة للتواصل' : 'Call to action'} className="border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-white mb-4"
              >
                {t.ready[language]}
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-white/70 text-lg"
              >
                {t.discuss[language]}
              </motion.p>
            </div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to={createPageUrl('Contact')} className="group inline-flex items-center justify-center bg-white text-[#002D62] px-8 py-4 font-semibold text-sm tracking-wide hover:bg-[#f0f0f0] transition-colors duration-300">
                {t.contactBtn[language]}
                <ArrowRight className={`w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 ${language === 'ar' ? 'mr-3 rotate-180 group-hover:-translate-x-1' : 'ml-3'}`} />
              </Link>
              <Link to={createPageUrl('Contact')} className="group inline-flex items-center justify-center border border-white/30 text-white px-8 py-4 font-semibold text-sm tracking-wide hover:border-white hover:bg-white/5 transition-all duration-300">
                {t.locationsBtn[language]}
                <MapPin className={`w-5 h-5 ${language === 'ar' ? 'mr-3' : 'ml-3'}`} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      )}

      {/* Main Footer */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 py-10 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-8 lg:gap-6 xl:gap-8">
          {/* Logo & Socials */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 flex flex-col justify-between">
            <div className="mb-6">
              <div className="mb-5">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694fa8b08dd9a1d8cd23762e/61b5aff2d_Untitleddesign94.png" 
                  alt="Najd Scaffolding" 
                  loading="lazy"
                  width="150"
                  height="56"
                  className="h-[56px] w-auto brightness-0 invert" 
                />
              </div>
              <p className="text-white/70 text-sm max-w-[200px]">{t.slogan[language]}</p>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-3 mt-auto">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-[#4DA8DA] hover:bg-[#4DA8DA]/10 transition-all duration-300"
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Contact Details */}
          <div className="col-span-1 md:col-span-2 lg:col-span-4 lg:px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 text-white/70 text-sm">
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#4DA8DA] flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-white block text-xs uppercase tracking-wider mb-1">{t.headOffice[language]}</strong>
                    <span className="text-xs leading-relaxed block text-white/70">
                      {language === 'ar' ? '3314، طريق المدينة المنورة، حي الفاروق، الوحدة رقم 2، الرياض 12864' : '3314, Al Madinah Al Munawwara Road, Al Farooq Dist, Unit No. 2, Riyadh 12864'}
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#4DA8DA] flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-white block text-xs uppercase tracking-wider mb-1">{t.branchOffice[language]}</strong>
                    <span className="text-xs leading-relaxed block text-white/70">
                      {language === 'ar' ? 'شارع شداد بن أوس، 18033 الدمام' : 'Shaddad Ibn Aws Street, 18033 Dammam'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#4DA8DA] flex-shrink-0 mt-1" />
                  <div className="text-xs text-white/70">
                    <a href="tel:+966555596872" className="block mb-1 hover:text-[#4DA8DA] transition-colors" dir="ltr">+966 55 559 6872</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#4DA8DA] flex-shrink-0 mt-1" />
                  <div className="text-xs text-white/70">
                    <a href="mailto:sales@najdscaff.com" className="block mb-1 hover:text-[#4DA8DA] transition-colors">sales@najdscaff.com</a>
                    <a href="mailto:info@najdscaff.com" className="block hover:text-[#4DA8DA] transition-colors">info@najdscaff.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Links */}
          <nav aria-label={language === 'ar' ? 'روابط سريعة' : 'Quick links'}>
            <h4 className="text-white font-semibold mb-4">{language === 'ar' ? 'روابط سريعة' : 'Quick Links'}</h4>
            <ul className="space-y-2">
              {[
                { label: language === 'ar' ? 'الرئيسية' : 'Home', path: createPageUrl('Home') },
                { label: language === 'ar' ? 'من نحن' : 'About Us', path: createPageUrl('About') },
                { label: language === 'ar' ? 'منتجاتنا' : 'Products', path: createPageUrl('Products') },
                { label: language === 'ar' ? 'مشاريعنا' : 'Projects', path: createPageUrl('Projects') },
                { label: language === 'ar' ? 'اتصل بنا' : 'Contact Us', path: createPageUrl('Contact') }
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.path} className="text-white/70 hover:text-[#4DA8DA] transition-colors duration-300 text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={language === 'ar' ? 'روابط المنتجات' : 'Products links'}>
            <h4 className="text-white font-semibold mb-4">{translations.nav.products[language]}</h4>
            <ul className="space-y-2">
              {[
                { label: language === 'ar' ? 'سقالات الكوب لوك' : 'Cuplock Scaffolding', path: createPageUrl('Products') },
                { label: language === 'ar' ? 'القارنات' : 'Couplers', path: createPageUrl('Products') },
                { label: language === 'ar' ? 'الرافعات' : 'Jacks', path: createPageUrl('Products') },
                { label: language === 'ar' ? 'سقالات ألمنيوم' : 'Aluminium Scaffolding', path: createPageUrl('Products') }
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.path} className="text-white/70 hover:text-[#4DA8DA] transition-colors duration-300 text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={language === 'ar' ? 'روابط الشركة' : 'Company links'}>
            <h4 className="text-white font-semibold mb-4">{language === 'ar' ? 'الشركة' : 'Company'}</h4>
            <ul className="space-y-2">
              {[
               { label: language === 'ar' ? 'من نحن' : 'About Us', path: createPageUrl('About') },
               { label: language === 'ar' ? 'مشاريعنا' : 'Our Projects', path: createPageUrl('Projects') },
               { label: language === 'ar' ? 'اتصل بنا' : 'Contact', path: createPageUrl('Contact') },
               { label: language === 'ar' ? 'خريطة الموقع' : 'Sitemap', path: createPageUrl('Sitemap') }
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.path} className="text-white/70 hover:text-[#4DA8DA] transition-colors duration-300 text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/90 text-sm">
              {t.rights[language]}
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/90 hover:text-white transition-colors duration-300">{t.links.privacy[language]}</a>
              <a href="#" className="text-white/90 hover:text-white transition-colors duration-300">{t.links.terms[language]}</a>
              <a href="#" className="text-white/90 hover:text-white transition-colors duration-300">{t.links.accessibility[language]}</a>
              <Link to={createPageUrl('Sitemap')} className="text-white/90 hover:text-white transition-colors duration-300">{language === 'ar' ? 'خريطة الموقع' : 'Sitemap'}</Link>
              <Link to={createPageUrl('Admin')} className="text-white/10 hover:text-white/30 transition-colors duration-300" title="Admin Access">
                <Shield className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}




