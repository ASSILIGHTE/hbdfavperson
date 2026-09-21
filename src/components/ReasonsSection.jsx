import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { CONFIG } from '../config';

export default function ReasonsSection() {
  const [flippedCards, setFlippedCards] = useState({});

  const handleCardClick = (id, event) => {
    const isNowFlipped = !flippedCards[id];
    setFlippedCards((prev) => ({ ...prev, [id]: isNowFlipped }));

    if (isNowFlipped) {
      // Trigger subtle mini confetti burst at click position
      const rect = event.currentTarget.getBoundingClientRect();
      const x = (rect.left + rect.width / 2) / window.innerWidth;
      const y = (rect.top + rect.height / 2) / window.innerHeight;

      confetti({
        particleCount: 15,
        spread: 50,
        origin: { x, y },
        colors: ['#ff758c', '#ff7eb3', '#f43f5e'],
        scalar: 0.8,
      });
    }
  };

  return (
    <section id="reasons" className="relative py-24 px-4 bg-gradient-to-b from-blush-pink via-baby-pink to-warm-cream overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold tracking-widest text-rose-500 uppercase bg-rose-100 px-3 py-1 rounded-full"
          >
            5 THINGS I LOVE ABOUT YOU
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold font-script text-gradient-romantic"
          >
            Alasan Kenapa Kamu Begitu Spesial 💖
          </motion.h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-md mx-auto">
            Klik kartu di bawah untuk membuka pesan rahasia di baliknya!
          </p>
        </div>

        {/* 5 Interactive Flip Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {CONFIG.reasonsToLove.map((item, idx) => {
            const isFlipped = !!flippedCards[item.id];

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={(e) => handleCardClick(item.id, e)}
                className="perspective-1000 cursor-pointer h-64 sm:h-72"
              >
                <div
                  className={`relative w-full h-full duration-700 transform-style-3d transition-transform ${
                    isFlipped ? 'rotate-y-180' : ''
                  }`}
                >
                  {/* FRONT SIDE OF CARD */}
                  <div className="absolute inset-0 w-full h-full rounded-2xl glass-panel p-6 flex flex-col justify-between items-center text-center shadow-lg border-2 border-white/80 hover:border-pink-300 hover:shadow-pink-200/50 hover:scale-[1.02] transition-all backface-hidden">
                    <div className="text-4xl sm:text-5xl mt-2 animate-bounce">
                      {item.icon}
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-slate-800 font-sans">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 italic">
                        "{item.preview}"
                      </p>
                    </div>

                    <div className="inline-flex items-center gap-1 text-xs font-semibold text-rose-500 bg-rose-50 px-3 py-1 rounded-full border border-rose-100">
                      <span>Klik untuk buka</span>
                      <span>✨</span>
                    </div>
                  </div>

                  {/* BACK SIDE OF CARD */}
                  <div className="absolute inset-0 w-full h-full rounded-2xl bg-gradient-to-br from-rose-500 via-pink-500 to-rose-600 text-white p-6 flex flex-col justify-between items-center text-center shadow-2xl rotate-y-180 backface-hidden ring-4 ring-pink-300/50">
                    <div className="text-2xl">
                      {item.icon}
                    </div>

                    <div className="space-y-2 my-auto">
                      <h4 className="text-lg font-bold font-sans underline decoration-pink-200 underline-offset-4">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm leading-relaxed text-pink-50 font-sans">
                        {item.content}
                      </p>
                    </div>

                    <span className="text-[10px] text-pink-200 font-medium tracking-wide uppercase">
                      💗 Klik untuk tutup
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
