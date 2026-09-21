import React from 'react';
import { motion } from 'framer-motion';
import { CONFIG } from '../config';

export default function LoveStory() {
  return (
    <section id="story" className="relative py-24 px-4 bg-gradient-to-b from-blush-pink via-baby-pink to-warm-cream overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-5 text-3xl animate-float opacity-50">🌸</div>
        <div className="absolute top-1/2 right-6 text-2xl animate-float-slow opacity-60">💖</div>
        <div className="absolute bottom-20 left-10 text-3xl animate-sparkle opacity-50">✨</div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold tracking-widest text-rose-500 uppercase bg-rose-100 px-3 py-1 rounded-full">
              BIRTHDAY JOURNEY
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-3xl sm:text-5xl font-bold font-script text-gradient-romantic"
          >
            Cerita Ulang Tahun & Kebahagiaan 🎂💖
          </motion.h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-md mx-auto">
            Setiap momen dan langkah bersamamu menyimpan cerita indah tersendiri.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Middle/Left Connecting Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-300 via-rose-400 to-purple-300 transform -translate-x-1/2 rounded-full" />

          {/* Timeline Items */}
          <div className="space-y-16 sm:space-y-24">
            {CONFIG.storyTimeline.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot Node */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-20">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white flex items-center justify-center font-bold text-sm shadow-md ring-4 ring-white animate-pulse">
                      💗
                    </div>
                  </div>

                  {/* Content Card Side */}
                  <div className="w-full md:w-1/2 pl-20 sm:pl-24 md:px-14 pt-4 pb-2 overflow-visible">
                    <div className={`bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-white relative group overflow-visible ${
                      isEven ? 'md:text-right' : 'md:text-left'
                    }`}>
                      {/* Decorative Floating Heart */}
                      <span className="absolute -top-4 -right-2 text-2xl sm:text-3xl group-hover:scale-125 transition-transform z-20 select-none filter drop-shadow-sm">
                        💖
                      </span>

                      {/* Step Badge */}
                      <div className={`flex items-center gap-2 mb-2 ${isEven ? 'md:justify-end' : 'justify-start'}`}>
                        <span className="text-xs font-bold text-rose-500 tracking-wider bg-rose-100 px-2.5 py-0.5 rounded-full">
                          {item.step}
                        </span>
                        <span className="text-xs font-medium text-slate-400">
                          {item.date}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-800 font-sans mb-2">
                        {item.title}
                      </h3>

                      {/* Caption */}
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed italic">
                        "{item.caption}"
                      </p>

                      {/* Polaroid Photo Container with 4:5 Aspect Ratio */}
                      <div className="mt-4 overflow-hidden rounded-xl bg-white p-2 shadow-md group-hover:shadow-lg transition-shadow">
                        <div className="overflow-hidden rounded-lg relative aspect-[4/5] w-full">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
