import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from './utils';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Menu, 
  X,
  Download
} from 'lucide-react';
import { LanguageProvider, useLanguage } from './LanguageContext';
import { HelmetProvider } from 'react-helmet-async';
import { translations } from './translations';


const LayoutContent = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const location = useLocation();
  const { language, toggleLanguage, dir, t } = useLanguage();

  const isHome = location.pathname === '/' || location.pathname === '/Home';
  const isTransparent = isHome && !isScrolled;

  // Initialize Google Analytics
  const initialized = React.useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      return; // Skip first track because the script tag handles it
    }
    
    if (typeof window.gtag === 'function') {
      window.gtag('config', 'G-KNX2VLPS32', {
        page_path: location.pathname + location.search
      });
    }
  }, [location]);

  // Scroll to top on route change, but respect hash links
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: translations.nav.home[language], href: createPageUrl('Home') },
    { label: translations.nav.about[language], href: createPageUrl('About') },
    { label: translations.nav.products[language], href: createPageUrl('Products') },
    { label: translations.nav.projects[language], href: createPageUrl('Projects') },
    { label: translations.nav.contact[language], href: createPageUrl('Contact') },
  ];





  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <link rel="preconnect" href="https://qtrypzzcjebvfcihiynt.supabase.co" />
        <link rel="preconnect" href="https://i.ibb.co" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-KNX2VLPS32"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-KNX2VLPS32');
          `}
        </script>
      </Helmet>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;800&display=swap');
        
        * {
          font-family: ${language === 'ar' ? "'Tajawal', sans-serif" : "'Inter', sans-serif"};
        }

        .font-arabic {
          font-family: 'Tajawal', sans-serif;
        }

        /* Keyboard focus styles for accessibility */
        *:focus-visible {
          outline: 3px solid #4DA8DA;
          outline-offset: 3px;
          border-radius: 2px;
        }

        /* Ensure buttons and links have visible focus */
        a:focus-visible,
        button:focus-visible {
          outline: 3px solid #4DA8DA;
          outline-offset: 3px;
          box-shadow: 0 0 0 6px rgba(77, 168, 218, 0.15);
        }

        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #ffffff;
        }
        ::-webkit-scrollbar-thumb {
          background: #002D62;
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #00529C;
        }
      `}</style>

      {/* Skip to Main Content - Accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:text-[#002D62] focus:px-6 focus:py-3 focus:rounded-md focus:shadow-lg focus:font-semibold focus:outline-none focus:ring-2 focus:ring-[#4DA8DA]"
      >
        {language === 'ar' ? 'تخطي إلى المحتوى الرئيسي' : 'Skip to main content'}
      </a>

      {/* Navigation */}
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isTransparent ? 'bg-transparent shadow-none' : 'bg-white shadow-md'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-full mx-auto px-6 md:px-12 lg:px-16">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to={createPageUrl('Home')} className="flex items-center">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694fa8b08dd9a1d8cd23762e/61b5aff2d_Untitleddesign94.png" 
                alt="Najd Scaffolding" 
                className="h-14 md:h-[68px] w-auto object-contain" 
              />
            </Link>

            {/* Desktop Navigation */}
            <nav aria-label={language === 'ar' ? 'التنقل الرئيسي' : 'Main navigation'} className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.hasDropdown && setActiveMenu(item.key)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <Link
                    to={item.href || '#'}
                    className={`px-4 py-2 text-sm font-medium flex items-center gap-1 transition-colors duration-200 ${
                      activeMenu === item.key 
                        ? 'text-[#4DA8DA]' 
                        : (isTransparent ? 'text-white hover:text-[#4DA8DA]' : 'text-[#002D62] hover:text-[#4DA8DA]')
                    }`}
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        activeMenu === item.key ? 'rotate-180' : ''
                      }`} />
                    )}
                  </Link>
                </div>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              {/* Language Selector */}
              <button 
                onClick={toggleLanguage}
                className={`hidden md:flex items-center gap-2 text-sm font-bold hover:text-[#4DA8DA] transition-colors duration-200 ${
                  isTransparent ? 'text-white' : 'text-[#002D62]'
                }`}
              >
                {language === 'en' ? 'العربية' : 'English'}
              </button>

              {/* Request Quote Button */}
              <Link
                to={createPageUrl('Contact')}
                className={`hidden md:flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 ${
                  isTransparent 
                    ? 'border-white text-white hover:bg-white hover:text-[#002D62]' 
                    : 'border-[#002D62] text-[#002D62] hover:bg-[#002D62] hover:text-white'
                }`}
              >
                <span className="text-xs font-semibold whitespace-nowrap">{translations.hero.discover[language]}</span>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`lg:hidden w-10 h-10 flex items-center justify-center ${
                  isTransparent ? 'text-white' : 'text-[#002D62]'
                }`}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mega Menu removed */}

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-[#0f0f0f] border-t border-white/10"
            >
              <nav className="px-6 py-8 space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href || '#'}
                    className="block text-white/80 hover:text-[#d4a537] text-lg font-medium py-2 transition-colors duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <button 
                  onClick={() => {
                    toggleLanguage();
                    setMobileMenuOpen(false);
                  }}
                  className="block text-white/80 hover:text-[#d4a537] text-lg font-medium py-2 transition-colors duration-200 w-full text-left rtl:text-right"
                >
                  {language === 'en' ? 'Switch to Arabic' : 'التبديل إلى الإنجليزية'}
                </button>
                <Link
                  to={createPageUrl('Contact')}
                  className="block text-white/80 hover:text-[#d4a537] text-lg font-medium py-2 transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {translations.hero.discover[language]}
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Main Content */}
      <main id="main-content">
        {children}
      </main>
    </div>
  );
};

export default function Layout({ children }) {
  return (
    <LanguageProvider>
      <HelmetProvider>
        <LayoutContent>{children}</LayoutContent>
      </HelmetProvider>
    </LanguageProvider>
  );
}



