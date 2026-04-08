import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Pause, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';

export default function HeroSlider() {
  const { language } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const t = translations.hero;

  const slides = [
    {
      id: 1,
      category: t.cat1[language],
      title: t.title1[language],
      subtitle: t.subtitle1[language],
      tab: t.tab1[language],
      image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694fa8b08dd9a1d8cd23762e/f7bfa8f94_4.jpg',
    },
    {
      id: 2,
      category: t.cat2[language],
      title: t.title2[language],
      subtitle: t.subtitle2[language],
      tab: t.tab2[language],
      image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694fa8b08dd9a1d8cd23762e/45d5e5bd2_Untitleddesign-2026-02-14T103058479.png',
    },
    {
      id: 3,
      category: t.cat3[language],
      title: t.title3[language],
      subtitle: t.subtitle3[language],
      tab: t.tab3[language],
      image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694fa8b08dd9a1d8cd23762e/5106ce868_image.png',
    },
  ];

  useEffect(() => {
    if (isPaused) return;
    
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentSlide((current) => (current + 1) % slides.length);
          return 0;
        }
        return prev + 1;
      });
    }, 60);

    return () => clearInterval(progressInterval);
  }, [isPaused, currentSlide, slides.length]);

  const handleTabClick = (index) => {
    setCurrentSlide(index);
    setProgress(0);
  };

  return (
    <section aria-label={language === 'ar' ? 'العرض الرئيسي' : 'Hero slideshow'} className="relative h-screen w-full overflow-hidden bg-black" dir="ltr">
      {/* Preload Images — first slide high priority, rest low */}
      <div className="hidden" aria-hidden="true">
        {slides.map((slide, i) => (
          <img 
            key={slide.id} 
            src={slide.image} 
            alt="" 
            loading={i === 0 ? 'eager' : 'lazy'}
            fetchpriority={i === 0 ? 'high' : 'low'}
          />
        ))}
      </div>

      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="absolute inset-0"
        >
          {/* Using img tag instead of background-image for better LCP */}
          <img 
            src={slides[currentSlide].image} 
            alt={slides[currentSlide].title}
            className="absolute inset-0 w-full h-full object-cover"
            fetchpriority={currentSlide === 0 ? 'high' : 'auto'}
            loading={currentSlide === 0 ? 'eager' : 'lazy'}
            decoding="async"
            width="1920"
            height="1080"
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className={`relative z-10 h-full flex flex-col justify-center px-6 md:px-16 lg:px-24 ${language === 'ar' ? 'items-end text-right' : 'items-start text-left'}`}>
        <div className="max-w-4xl w-full">
          {/* Accent line with category */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`cat-${currentSlide}`}
              initial={{ opacity: 0, x: language === 'ar' ? 30 : -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: language === 'ar' ? -30 : 30 }}
              transition={{ duration: 0.5 }}
              className={`flex items-center mb-6 ${language === 'ar' ? 'flex-row-reverse' : 'flex-row'}`}
            >
              <div className={`w-16 md:w-24 h-1 bg-[#00529C] ${language === 'ar' ? 'ml-4' : 'mr-4'}`} />
              <span className="text-white/90 text-xs md:text-sm tracking-[0.2em] font-medium uppercase">
                {slides[currentSlide].category}
              </span>
            </motion.div>
          </AnimatePresence>

          {/* Main Title */}
          <AnimatePresence mode="wait">
            <motion.h1
              key={`title-${currentSlide}`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6"
            >
              {slides[currentSlide].title}
            </motion.h1>
          </AnimatePresence>

          {/* Subtitle */}
          {slides[currentSlide].subtitle && (
            <AnimatePresence mode="wait">
              <motion.p
                key={`subtitle-${currentSlide}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed mb-8 max-w-3xl"
              >
                {slides[currentSlide].subtitle}
              </motion.p>
            </AnimatePresence>
          )}

          {/* CTA Button */}
          <Link to={createPageUrl('Contact')}>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="bg-[#00529C] text-white px-8 py-4 text-sm tracking-wide font-semibold hover:bg-[#003d73] transition-colors duration-300"
            >
              {t.discover[language]}
            </motion.button>
          </Link>
        </div>
      </div>

      {/* Bottom Tabs Navigation - Always LTR for visual consistency, or RTL if preferred. Let's keep tabs LTR for now as it looks like a player control, but text inside will be localized. */}
      <div className="absolute bottom-0 left-0 right-0 z-20 px-6 md:px-16 lg:px-24 pb-8" dir={language === 'ar' ? 'rtl' : 'ltr'}>
        <div className="flex items-center justify-between">
          {/* Tabs */}
          <div className="flex items-center gap-8 md:gap-12">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => handleTabClick(index)}
                aria-label={language === 'ar' ? `شريحة ${index + 1}` : `Slide ${index + 1}`}
                className="relative pb-3 group"
              >
                <span 
                  className={`text-sm md:text-base font-medium transition-colors duration-300 ${
                    index === currentSlide ? 'text-white' : 'text-white/70 hover:text-white/90'
                  }`}
                >
                  {slide.tab}
                </span>
                {/* Progress bar under active tab */}
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/20">
                  {index === currentSlide && (
                    <motion.div
                      className="h-full bg-[#00529C]"
                      style={{ width: `${progress}%`, [language === 'ar' ? 'right' : 'left']: 0 }}
                    />
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Pause/Play Button */}
          <button
          onClick={() => setIsPaused(!isPaused)}
          aria-label={isPaused ? (language === 'ar' ? 'تشغيل العرض' : 'Play slider') : (language === 'ar' ? 'إيقاف العرض' : 'Pause slider')}
          className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center text-white hover:border-white transition-colors duration-300"
          >
          {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </section>
  );
}