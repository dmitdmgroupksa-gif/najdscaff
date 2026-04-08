import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Building2, Landmark, Factory } from 'lucide-react';

const sectorsData = {
  buildings: {
    icon: Building2,
    title: 'Buildings',
    description: 'We rise to the challenges associated with a diverse buildings portfolio to bring added value to every project.',
    links: [
      'Aviation', 'Commercial and Retail', 'Data Centers', 'Education', 
      'Entertainment', 'Health Care', 'Hospitality', 'Manufacturing', 
      'Multifamily Residential', 'Sports Facilities'
    ],
  },
  civil: {
    icon: Landmark,
    title: 'Civil',
    description: 'PCL\'s civil construction experts possess the ingenuity and experience to undertake any civil structure imaginable.',
    links: [
      'Aviation Infrastructure', 'Dams & Water Control', 'LRT & Transit', 
      'Marine & Port', 'Transportation', 'Water Treatment'
    ],
  },
  industrial: {
    icon: Factory,
    title: 'Industrial',
    description: 'Our industrial construction companies respond to the unique needs of clients in the energy and resources industries.',
    links: [
      'Agricultural Chemicals', 'Manufacturing', 'Mining', 
      'Nuclear', 'Oil and Gas', 'Petrochemical', 'Power', 'Renewable Energy'
    ],
  },
};

export default function MegaMenu({ type, onClose }) {
  if (type !== 'sectors' && type !== 'services') return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="absolute top-full left-0 right-0 bg-[#1a1a1a] border-t border-white/10 shadow-2xl"
      onMouseLeave={onClose}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(sectorsData).map(([key, sector]) => {
            const Icon = sector.icon;
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="group"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-white/5 group-hover:bg-[#d4a537] transition-colors duration-300 rounded-lg">
                    <Icon className="w-6 h-6 text-[#d4a537] group-hover:text-black transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg group-hover:text-[#d4a537] transition-colors duration-300">
                      {sector.title}
                    </h3>
                    <button className="text-[#d4a537] text-sm flex items-center mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Learn More <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
                
                <p className="text-white/50 text-sm mb-6 leading-relaxed">
                  {sector.description}
                </p>

                <ul className="space-y-2">
                  {sector.links.map((link) => (
                    <li key={link}>
                      <a 
                        href="#" 
                        className="text-white/60 text-sm hover:text-[#d4a537] transition-colors duration-200 flex items-center gap-2"
                      >
                        <span className="w-1 h-1 rounded-full bg-white/30" />
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}