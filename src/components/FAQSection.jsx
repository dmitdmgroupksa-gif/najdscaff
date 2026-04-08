import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function FAQSection() {
  const { language } = useLanguage();
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: {
        en: 'How fast can scaffolding be installed?',
        ar: 'ما هي سرعة تركيب السقالات؟'
      },
      answer: {
        en: 'Installation time varies based on project size and complexity. For standard projects, our experienced team can typically complete installation within 24-48 hours. For larger or more complex projects, we provide a detailed timeline during the initial consultation.',
        ar: 'يختلف وقت التركيب حسب حجم المشروع وتعقيده. بالنسبة للمشاريع القياسية، يمكن لفريقنا ذو الخبرة عادةً إكمال التركيب خلال 24-48 ساعة. بالنسبة للمشاريع الأكبر أو الأكثر تعقيداً، نقدم جدولاً زمنياً مفصلاً أثناء الاستشارة الأولية.'
      }
    },
    {
      question: {
        en: 'Do you provide safety inspections?',
        ar: 'هل تقدمون عمليات فحص السلامة؟'
      },
      answer: {
        en: 'Yes, safety is our top priority. We conduct thorough safety inspections before, during, and after installation. Our certified inspectors ensure all scaffolding meets international safety standards and regulations. Regular maintenance inspections are also available for long-term projects.',
        ar: 'نعم، السلامة هي أولويتنا القصوى. نجري عمليات فحص شاملة للسلامة قبل وأثناء وبعد التركيب. يضمن مفتشونا المعتمدون أن جميع السقالات تلبي معايير ولوائح السلامة الدولية. كما تتوفر عمليات فحص صيانة منتظمة للمشاريع طويلة الأجل.'
      }
    },
    {
      question: {
        en: 'Do you offer rental services?',
        ar: 'هل تقدمون خدمات التأجير؟'
      },
      answer: {
        en: 'Yes, we offer flexible rental services for short-term and long-term projects. Our rental packages include delivery, installation, regular maintenance, and dismantling. We maintain a large inventory to ensure quick availability for your project needs.',
        ar: 'نعم، نقدم خدمات تأجير مرنة للمشاريع قصيرة وطويلة الأجل. تشمل باقات التأجير لدينا التوصيل والتركيب والصيانة الدورية والتفكيك. نحتفظ بمخزون كبير لضمان التوافر السريع لاحتياجات مشروعك.'
      }
    },
    {
      question: {
        en: 'Do you operate across Saudi Arabia?',
        ar: 'هل تعملون في جميع أنحاء المملكة العربية السعودية؟'
      },
      answer: {
        en: 'Yes, we have operations throughout the Kingdom of Saudi Arabia. Our headquarters is in Riyadh, and we have a strong presence in major cities and regions. We can mobilize teams and equipment to any location across Saudi Arabia to support your project.',
        ar: 'نعم، لدينا عمليات في جميع أنحاء المملكة العربية السعودية. يقع مقرنا الرئيسي في الرياض، ولدينا تواجد قوي في المدن والمناطق الرئيسية. يمكننا تعبئة الفرق والمعدات إلى أي موقع في المملكة لدعم مشروعك.'
      }
    },
    {
      question: {
        en: 'What types of scaffolding systems do you offer?',
        ar: 'ما هي أنواع أنظمة السقالات التي تقدمونها؟'
      },
      answer: {
        en: 'We offer a comprehensive range including Cuplock Scaffolding Systems, Aluminum Scaffolding Towers, Access Frames, Steel Pipes, Adjustable Jacks, Walk Boards, and all necessary accessories. Each system is selected based on your specific project requirements.',
        ar: 'نقدم مجموعة شاملة تشمل أنظمة الكوب لوك، وأبراج السقالات الألومنيوم، وإطارات الوصول، والأنابيب الفولاذية، والرافعات القابلة للتعديل، وألواح المشي، وجميع الملحقات الضرورية. يتم اختيار كل نظام بناءً على متطلبات مشروعك المحددة.'
      }
    },
    {
      question: {
        en: 'Are your products certified and quality tested?',
        ar: 'هل منتجاتكم معتمدة ومختبرة الجودة؟'
      },
      answer: {
        en: 'Absolutely. All our products undergo rigorous quality testing at every stage of manufacturing and supply. We ensure compliance with international standards and provide certified quality assurance. Our inspection team verifies all equipment before delivery.',
        ar: 'بالتأكيد. تخضع جميع منتجاتنا لاختبارات جودة صارمة في كل مرحلة من مراحل التصنيع والتوريد. نضمن الامتثال للمعايير الدولية ونقدم ضمان الجودة المعتمد. يتحقق فريق التفتيش لدينا من جميع المعدات قبل التسليم.'
      }
    }
  ];

  return (
    <section aria-label={language === 'ar' ? 'الأسئلة الشائعة' : 'Frequently asked questions'} className="bg-white py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6 md:px-16">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center mb-4"
          >
            <div className={`w-12 h-1 bg-[#002D62] ${language === 'ar' ? 'ml-4' : 'mr-4'}`} />
            <span className="text-[#002D62] text-sm tracking-[0.2em] font-medium uppercase">
              {language === 'ar' ? 'الأسئلة' : 'FAQ'}
            </span>
            <div className={`w-12 h-1 bg-[#002D62] ${language === 'ar' ? 'mr-4' : 'ml-4'}`} />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#002D62] mb-4"
          >
            {language === 'ar' ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg"
          >
            {language === 'ar' 
              ? 'إجابات على الأسئلة الأكثر شيوعاً حول خدمات السقالات لدينا'
              : 'Answers to common questions about our scaffolding services'}
          </motion.p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors duration-200 text-left rtl:text-right"
                >
                  <h3 className="text-lg font-semibold text-[#002D62] pr-4 rtl:pl-4 rtl:pr-0">
                    {faq.question[language]}
                  </h3>
                  <div className="shrink-0 w-8 h-8 rounded-full bg-[#002D62] flex items-center justify-center">
                    {isOpen ? (
                      <Minus className="w-5 h-5 text-white" />
                    ) : (
                      <Plus className="w-5 h-5 text-white" />
                    )}
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-2 text-gray-600 leading-relaxed">
                        {faq.answer[language]}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}