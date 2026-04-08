import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader2, Download } from 'lucide-react';
import { apiClient as base44 } from '@/apiClient';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';
import Footer from '../components/Footer';
import SEO from '../SEO';
import { JsonLd } from 'react-schemaorg';
import CatalogueModal from '../components/CatalogueModal';

export default function Contact() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle');
  const [showCatalogueModal, setShowCatalogueModal] = useState(false);

  // Helper for safe translation access
  const t = (path) => {
    const parts = path.split('.');
    let current = translations.contact || {};
    for (const part of parts) {
      current = current?.[part];
    }
    return current?.[language] || current?.['en'] || '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
      try {
        await base44.post('/inquiries', {
          ...formData,
          status: 'new'
        });
        
        // Send email notifications
        const emailBody = `
New Inquiry Received from Website
 
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}
 
Message:
${formData.message}
`;
        
        try {
          await Promise.all([
            base44.post('/email/send', {
              to: 'dmit.dmgroupksa@gmail.com',
              subject: `New Inquiry: ${formData.subject}`,
              body: emailBody
            }),
            base44.post('/email/send', {
              to: 'sales@najdscaff.com',
              subject: `New Inquiry: ${formData.subject}`,
              body: emailBody
            })
          ]);
        } catch (emailError) {
          console.error('Failed to send email notifications:', emailError);
        }


      setStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('error');
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <article className="bg-white min-h-screen">
      <CatalogueModal 
        isOpen={showCatalogueModal} 
        onClose={() => setShowCatalogueModal(false)} 
      />
      <SEO 
        title={t('title')}
        description="Contact Najd Scaffolding for all your scaffolding needs in Saudi Arabia."
      />
      <JsonLd 
        item={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": t('title'),
          "description": t('subtitle'),
          "url": "https://najdscaff.com/Contact",
          "mainEntity": {
            "@type": "Organization",
            "name": "Najd Scaffolding",
            "telephone": "+966 55 559 6872",
            "email": "sales@najdscaff.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "3314, Al Madinah Al Munawwara Road, Al Farooq Dist, Unit No. 2",
              "addressLocality": "Riyadh",
              "postalCode": "12864",
              "addressCountry": "SA"
            }
          }
        }}
      />

      {/* Hero Section */}
      <section aria-label={language === 'ar' ? 'اتصل بنا' : 'Contact us'} className="bg-[#002D62] pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute right-0 top-0 w-96 h-96 bg-white rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
          <div className="absolute left-0 bottom-0 w-64 h-64 bg-[#4DA8DA] rounded-full blur-[80px] -translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            {t('title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-2xl mx-auto"
          >
            {t('subtitle')}
          </motion.p>
        </div>
      </section>

      <section aria-label={language === 'ar' ? 'نموذج الاتصال ومعلومات الاتصال' : 'Contact form and information'} className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-3xl font-bold text-[#002D62] mb-6">{t('getInTouch')}</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {t('desc')}
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-[#002D62]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{t('info.phone')}</h3>
                  <p className="text-gray-600 text-lg" dir="ltr">+966 55 559 6872</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-[#002D62]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{t('info.email')}</h3>
                  <p className="text-gray-600 text-lg">sales@najdscaff.com</p>
                  <p className="text-gray-600 text-lg">info@najdscaff.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-[#002D62]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{t('info.hours')}</h3>
                  <p className="text-gray-600">{t('info.hoursText')}</p>
                  <p className="text-gray-600">{t('info.closed')}</p>
                </div>
              </div>
            </div>

            {/* Download Catalogue Button */}
            <button
              onClick={() => setShowCatalogueModal(true)}
              className="w-full bg-[#4DA8DA] text-white py-4 rounded-lg font-bold hover:bg-[#3d8db8] transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              {translations.nav.downloadCatalogue[language]}
            </button>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
          >
            {status === 'success' ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('thankYou')}</h3>
                <p className="text-gray-600 mb-8">{t('successMsg')}</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="text-[#002D62] font-semibold hover:underline"
                >
                  {t('sendAnother')}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-bold text-[#002D62] mb-6">{t('sendMessage')}</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-2">{t('form.name')}</label>
                    <input
                      type="text"
                      name="name"
                      id="contact-name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#002D62] focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="block text-sm font-medium text-gray-700 mb-2">{t('form.phone')}</label>
                    <input
                      type="tel"
                      name="phone"
                      id="contact-phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#002D62] focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-2">{t('form.email')}</label>
                  <input
                    type="email"
                    name="email"
                    id="contact-email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#002D62] focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-sm font-medium text-gray-700 mb-2">{t('form.subject')}</label>
                  <input
                    type="text"
                    name="subject"
                    id="contact-subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#002D62] focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-2">{t('form.message')}</label>
                  <textarea
                    name="message"
                    id="contact-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#002D62] focus:border-transparent outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-[#002D62] text-white py-4 rounded-lg font-bold hover:bg-[#00408a] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      {t('form.sending')}
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      {t('form.sendBtn')}
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      <Footer hideCTA={true} />
    </article>
  );
}




