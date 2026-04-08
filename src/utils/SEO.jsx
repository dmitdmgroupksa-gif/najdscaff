import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from './translations';
import { JsonLd } from 'react-schemaorg';

export default function SEO({ title, description, keywords, image, type = 'website' }) {
  const { language } = useLanguage();
  const location = useLocation();
  
  const siteUrl = 'https://najdscaff.com';
  const currentUrl = `${siteUrl}${location.pathname}`;
  
  const baseTitle = language === 'ar' ? 'نجد للسقالات' : 'Najd Scaffolding';
  const fullTitle = title ? `${title} | ${baseTitle}` : baseTitle;
  
  const defaultDescription = language === 'ar' 
    ? 'نجد للسقالات هي إحدى الشركات الرائدة في توريد السقالات في المملكة العربية السعودية.' 
    : 'Najd Scaffolding is one of the leading and pioneer scaffolding suppliers in the Kingdom of Saudi Arabia.';
    
  const metaDescription = description || defaultDescription;
  const metaKeywords = keywords || (language === 'ar' 
    ? 'سقالات, بناء, المملكة العربية السعودية, الرياض, تركيب, تأجير, سقالات حديدية, سقالات في الرياض, سقالات سعودية' 
    : 'scaffolding, construction, KSA, Saudi Arabia, Riyadh, installation, rental, steel scaffolding, scaffolding in riyadh, scaffolding in saudi, saudi scaffolding');
    
  const metaImage = image || "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694fa8b08dd9a1d8cd23762e/61b5aff2d_Untitleddesign94.png";

  return (
    <>
      <Helmet>
        {/* Basic Meta Tags */}
        <html lang={language} dir={language === 'ar' ? 'rtl' : 'ltr'} />
        <title>{fullTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />
        <link rel="canonical" href={currentUrl} />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#002D62" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content={type} />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={metaImage} />
        <meta property="og:site_name" content={baseTitle} />
        <meta property="og:locale" content={language === 'ar' ? 'ar_SA' : 'en_US'} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={currentUrl} />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={metaImage} />
      </Helmet>

      {/* Structured Data (JSON-LD) */}
      <JsonLd
        item={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Najd Scaffolding",
          "url": siteUrl,
          "logo": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694fa8b08dd9a1d8cd23762e/61b5aff2d_Untitleddesign94.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+966 55 559 6872",
            "contactType": "sales",
            "areaServed": "SA",
            "availableLanguage": ["en", "ar"]
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "3314, Al Madinah Al Munawwara Road, Al Farooq Dist, Unit No. 2",
            "addressLocality": "Riyadh",
            "postalCode": "12864",
            "addressCountry": "SA"
          },
          "sameAs": [
            "https://www.instagram.com/najdscaffolding"
          ]
        }}
      />
    </>
  );
}