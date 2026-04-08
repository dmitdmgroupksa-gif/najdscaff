import React, { Suspense, lazy } from 'react';
import SEO from '../utils/SEO';
import { JsonLd } from 'react-schemaorg';
import HeroSlider from '../components/HeroSlider';

const FeaturesBar = lazy(() => import('../components/FeaturesBar'));
const AboutSection = lazy(() => import('../components/about/AboutSection'));
const SectorsSection = lazy(() => import('../components/SectorsSection'));
const FeaturedProjects = lazy(() => import('../components/FeaturedProjects'));
const StatsSection = lazy(() => import('../components/StatsSection'));
const IndustriesSection = lazy(() => import('../components/IndustriesSection'));
const FAQSection = lazy(() => import('../components/FAQSection'));
const ClientsSection = lazy(() => import('../components/about/ClientsSection'));
const Footer = lazy(() => import('../components/Footer'));

const SectionFallback = () => (
  <div className="w-full py-20 flex justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#002D62]"></div>
  </div>
);

export default function Home() {
  return (
    <div className="bg-white">
      <SEO 
        title="Home" 
        description="Najd Scaffolding - Leading scaffolding supplier in Saudi Arabia. We provide sales, rental, and installation services for all construction needs."
        keywords="scaffolding, construction, saudi arabia, riyadh, rental, sales, installation"
      />
      <JsonLd 
        item={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Najd Scaffolding",
          "url": "https://najdscaff.com",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://najdscaff.com/Products?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }}
      />
      <HeroSlider />
      <Suspense fallback={<SectionFallback />}>
        <FeaturesBar />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <AboutSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <IndustriesSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <SectorsSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <FeaturedProjects />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <StatsSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <FAQSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <ClientsSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Footer />
      </Suspense>
    </div>
  );
}