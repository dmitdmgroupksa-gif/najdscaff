import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { base44 } from "@/api/base44Client";
import { Download, Loader2 } from "lucide-react";
import { useLanguage } from '../contexts/LanguageContext';

export default function CatalogueModal({ isOpen, onClose }) {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const t = {
    title: { en: 'Download Catalogue', ar: 'تحميل الكتالوج' },
    desc: { en: 'Please fill in your details to download our full product catalogue.', ar: 'يرجى ملء بياناتك لتحميل كتالوج منتجاتنا الكامل.' },
    name: { en: 'Full Name', ar: 'الاسم الكامل' },
    email: { en: 'Email Address', ar: 'البريد الإلكتروني' },
    phone: { en: 'Phone Number', ar: 'رقم الهاتف' },
    company: { en: 'Company Name', ar: 'اسم الشركة' },
    download: { en: 'Download Now', ar: 'تحميل الآن' },
    cancel: { en: 'Cancel', ar: 'إلغاء' },
    optional: { en: '(Optional)', ar: '(اختياري)' }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // 1. Save the lead
      await base44.entities.CatalogueDownload.create(formData);
      
      // 2. Trigger download
      window.open('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694fa8b08dd9a1d8cd23762e/781b2f82d_FINALNAJDSCAFFOLDINGNEWCATALOGUE_compressed.pdf', '_blank');
      
      // 3. Close modal
      onClose();
      setFormData({ name: '', email: '', phone: '', company: '' });
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const isRtl = language === 'ar';

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className={`sm:max-w-[425px] ${isRtl ? 'rtl' : 'ltr'}`} dir={isRtl ? 'rtl' : 'ltr'}>
        <DialogHeader>
          <DialogTitle className={isRtl ? 'text-right' : 'text-left'}>{t.title[language]}</DialogTitle>
          <DialogDescription className={isRtl ? 'text-right' : 'text-left'}>
            {t.desc[language]}
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name" className={isRtl ? 'text-right' : 'text-left'}>
              {t.name[language]} <span className="text-red-500">*</span>
            </Label>
            <Input
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className={isRtl ? 'text-right' : 'text-left'}
            />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="email" className={isRtl ? 'text-right' : 'text-left'}>
              {t.email[language]} <span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className={isRtl ? 'text-right' : 'text-left'}
            />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="phone" className={isRtl ? 'text-right' : 'text-left'}>
              {t.phone[language]} <span className="text-red-500">*</span>
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleChange}
              className={isRtl ? 'text-right' : 'text-left'}
            />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="company" className={isRtl ? 'text-right' : 'text-left'}>
              {t.company[language]} <span className="text-gray-400 text-xs">{t.optional[language]}</span>
            </Label>
            <Input
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className={isRtl ? 'text-right' : 'text-left'}
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <DialogFooter className={`mt-4 ${isRtl ? 'sm:justify-start' : ''}`}>
            <Button type="submit" disabled={loading} className="w-full bg-[#002D62] hover:bg-[#00529C]">
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {language === 'ar' ? 'جاري المعالجة...' : 'Processing...'}
                </>
              ) : (
                <>
                  <Download className={`h-4 w-4 ${isRtl ? 'ml-2' : 'mr-2'}`} />
                  {t.download[language]}
                </>
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}