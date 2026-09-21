import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { CONFIG } from '../config';

export default function LoveMeter() {
  const [percent, setPercent] = useState('0%');
  const [isCalculating, setIsCalculating] = useState(false);
  const [isInfinity, setIsInfinity] = useState(false);

  const startCalculation = () => {
    if (isCalculating) return;
    setIsCalculating(true);
    setIsInfinity(false);

    const steps = ['0%', '10%', '25%', '50%', '75%', '99%', '100%', '∞%'];
    let idx = 0;

    const interval = setInterval(() => {
      idx++;
      if (idx < steps.length) {
        setPercent(steps[idx]);
        if (steps[idx] === '∞%') {
          setIsInfinity(true);
          setIsCalculating(false);
          clearInterval(interval);

          // Massive confetti particle explosion!
          confetti({
            particleCount: 80,
            spread: 120,
            origin: { y: 0.6 },
            colors: ['#ff758c', '#ff7eb3', '#f43f5e', '#e9d5ff', '#ffedd5'],
          });
        }
      } else {
        clearInterval(interval);
        setIsCalculating(false);
      }
    }, 400);
  };

  return (
    <section id="meter" className="relative py-24 px-4 bg-gradient-to-b from-blush-pink via-baby-pink to-warm-cream overflow-hidden">
      <div className="max-w-2xl mx-auto text-center space-y-8 relative z-10">
        {/* Section Header */}
        <div className="space-y-3">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold tracking-widest text-rose-500 uppercase bg-rose-100 px-3 py-1 rounded-full"
          >
            LOVE METER
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold font-script text-gradient-romantic"
          >
            {CONFIG.loveMeter.title}
          </motion.h2>
          <p className="text-slate-500 text-sm sm:text-base">
            Tekan tombol di bawah untuk mengukur kadar rasa sayang dan doa buat kamu!
          </p>
        </div>

        {/* Meter Gauge Card */}
        <div className={`glass-panel p-8 sm:p-12 rounded-3xl shadow-2xl border-4 transition-all duration-500 ${
          isInfinity
            ? 'border-rose-500 shadow-glow-rose bg-rose-50/90 scale-105'
            : 'border-white/80'
        }`}>
          {/* Main Percentage Display */}
          <div className="relative py-6">
            <motion.div
              key={percent}
              initial={{ scale: 0.8, opacity: 0.5 }}
              animate={{ scale: 1, opacity: 1 }}
              className={`text-6xl sm:text-8xl font-extrabold font-sans transition-colors ${
                isInfinity ? 'text-rose-600 animate-pulse' : 'text-slate-800'
              }`}
            >
              {percent}
            </motion.div>

            {/* Pulsing Heart Icon */}
            <div className="mt-4 flex justify-center">
              <span className={`text-4xl sm:text-5xl transition-transform duration-300 ${
                isInfinity ? 'animate-bounce scale-125' : 'animate-pulse'
              }`}>
                {isInfinity ? '💖' : '💗'}
              </span>
            </div>
          </div>

          {/* Progress Bar Visual */}
          <div className="w-full h-4 bg-rose-100 rounded-full overflow-hidden mb-6 p-0.5 border border-pink-200">
            <div
              className="h-full bg-gradient-to-r from-pink-400 via-rose-500 to-purple-500 rounded-full transition-all duration-300"
              style={{
                width:
                  percent === '∞%'
                    ? '100%'
                    : percent === '100%'
                    ? '100%'
                    : percent,
              }}
            />
          </div>

          {/* Infinity Error Banner */}
          {isInfinity && (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="p-4 rounded-2xl bg-rose-100 border-2 border-rose-300 text-rose-700 font-bold text-base sm:text-lg mb-6 shadow-inner animate-pulse"
            >
              {CONFIG.loveMeter.errorText}
            </motion.div>
          )}

          {/* Calculate Button */}
          <button
            onClick={startCalculation}
            disabled={isCalculating}
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white font-bold text-base sm:text-lg shadow-lg shadow-pink-300/50 hover:shadow-xl hover:scale-105 active:scale-95 transition-all disabled:opacity-50"
          >
            <span>{CONFIG.loveMeter.buttonText}</span>
            <span className="group-hover:animate-bounce">💗</span>
          </button>
        </div>
      </div>
    </section>
  );
}
