import React from 'react';
import { motion } from 'framer-motion';

const cuplockProducts = [
  {
    title: 'Couplers',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694fa8b08dd9a1d8cd23762e/689f10f60_couplers.png',
    link: '#'
  },
  {
    title: 'U-Head Jack',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694fa8b08dd9a1d8cd23762e/a89aaf6b4_Uheadjack.png',
    link: '#'
  },
  {
    title: 'Base Jack',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694fa8b08dd9a1d8cd23762e/c32ef4435_BaseJack.png',
    link: '#'
  },
  {
    title: 'Beam Bracket',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694fa8b08dd9a1d8cd23762e/1fba47848_BeamBracket.png',
    link: '#'
  },
  {
    title: 'Intermediate Transoms',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694fa8b08dd9a1d8cd23762e/2308c50c0_IntermediateTransoms.png',
    link: '#'
  },
  {
    title: 'Ledgers',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694fa8b08dd9a1d8cd23762e/0c11137c8_Ledgers.png',
    link: '#'
  },
  {
    title: 'Standards',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694fa8b08dd9a1d8cd23762e/fe381bb60_Standards.png',
    link: '#'
  },
  {
    title: 'Korean Frame Scaffolding',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694fa8b08dd9a1d8cd23762e/bfb76c6e2_NAJDlatestproducts.jpg',
    link: '#'
  }
];

const aluminiumProducts = [
  {
    title: 'Wide - Aluminum Scaffolding Mobile Tower',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694fa8b08dd9a1d8cd23762e/203f5fce7_AluminiumFoldableMobileTower.png',
    link: '#'
  },
  {
    title: 'Aluminium A-Type Ladder',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694fa8b08dd9a1d8cd23762e/6611b894f_AluminumA-TypeLadder.png',
    link: '#'
  },
  {
    title: 'Aluminium Narrow Mobile Tower',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694fa8b08dd9a1d8cd23762e/f384c1e2b_AluminumNarrowmobileTower.png',
    link: '#'
  },
  {
    title: 'Aluminium Straight Ladder',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694fa8b08dd9a1d8cd23762e/f4b7198e9_AluminumStraightLadder.png',
    link: '#'
  },

  {
    title: 'Aluminum Podium Scaffolding',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694fa8b08dd9a1d8cd23762e/f67380ca3_NajdProducts.png',
    link: '#'
  }
];

const ProductCard = ({ product, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.05 }}
    className="group cursor-pointer flex flex-col h-full bg-white border border-gray-100 hover:border-[#002D62] hover:shadow-lg transition-all duration-300"
  >
    <div className="relative aspect-square overflow-hidden bg-gray-50 p-4">
      <img 
        src={product.image} 
        alt={product.title}
        loading="lazy"
        width="300"
        height="300"
        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
      />
    </div>
    <div className="p-6 flex-1 flex flex-col justify-between">
      <h3 className="text-[#333] font-semibold text-lg leading-tight group-hover:text-[#00529C] transition-colors duration-300">
        {product.title}
      </h3>
      <div className="mt-4 w-8 h-[2px] bg-[#00529C] group-hover:w-16 transition-all duration-300" />
    </div>
  </motion.div>
);

export default function ProductGrid() {
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-16 space-y-24">
        {/* Cuplock System Section */}
        <section>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-12 border-l-4 border-[#4DA8DA] pl-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#002D62] mb-2">
              Najd Scaffolding System
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              Cup Lock System - Korean Frame System - Aluminum Scaffolding
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {cuplockProducts.map((product, index) => (
              <ProductCard key={index} product={product} index={index} />
            ))}
          </div>
        </section>

        {/* Aluminium Scaffolding Section */}
        <section>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#002D62] mb-12 border-l-4 border-[#4DA8DA] pl-4"
          >
            Aluminium Scaffolding
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {aluminiumProducts.map((product, index) => (
              <ProductCard key={index} product={product} index={index} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}



