import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CONFIG } from '../config';

export default function Hero() {
  const { scrollY } = useScroll();
  const yBlob1 = useTransform(scrollY, [0, 500], [0, 100]);
  const yBlob2 = useTransform(scrollY, [0, 500], [0, -80]);
  const opacityText = useTransform(scrollY, [0, 300], [1, 0.4]);

  const scrollToStory = () => {
    const el = document.getElementById('story');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4 overflow-hidden bg-gradient-to-b from-warm-cream via-baby-pink to-blush-pink"
    >
      {/* Background Animated Blobs & Stars with Parallax */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          style={{ y: yBlob1 }}
          className="absolute -top-10 -left-10 w-72 h-72 sm:w-96 sm:h-96 bg-pink-200/50 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: yBlob2 }}
          className="absolute top-1/3 -right-20 w-80 h-80 sm:w-[450px] sm:h-[450px] bg-rose-200/40 rounded-full blur-3xl"
        />
        <div className="absolute bottom-10 left-1/4 w-64 h-64 bg-purple-200/40 rounded-full blur-2xl animate-float-slow" />

        {/* Small floating twinkling icons */}
        <div className="absolute top-20 left-12 text-xl animate-sparkle">🎂</div>
        <div className="absolute top-1/4 right-16 text-2xl animate-float">💖</div>
        <div className="absolute top-2/3 left-10 text-xl animate-float-slow opacity-80">🌸</div>
        <div className="absolute bottom-24 right-1/3 text-2xl animate-sparkle">✨</div>
        <div className="absolute top-1/2 left-1/3 text-sm animate-float">💗</div>
      </div>

      {/* Main Hero Card Container */}
      <motion.div
        style={{ opacity: opacityText }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="relative z-10 max-w-3xl mx-auto text-center space-y-6 sm:space-y-8"
      >
        {/* Cute Badge */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100/80 border border-rose-200 text-rose-600 text-xs sm:text-sm font-semibold tracking-wider uppercase shadow-sm"
        >
          <span>✨</span>
          <span>{CONFIG.hero.badge}</span>
          <span>✨</span>
        </motion.div>

        {/* Lead Headline */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-slate-700 tracking-tight leading-relaxed px-2">
          "{CONFIG.hero.headline}"
        </h2>

        {/* Partner Name Display */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="py-4 overflow-visible"
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold font-script drop-shadow-sm tracking-wide overflow-visible flex items-center justify-center gap-3 flex-wrap leading-relaxed">
            <span className="text-gradient-romantic">
              {CONFIG.hero.partnerDisplay.replace(/[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, '').trim() || CONFIG.hero.partnerDisplay}
            </span>
            <span className="text-4xl sm:text-6xl animate-bounce select-none inline-block pb-2">
              💕
            </span>
          </h1>
        </motion.div>

        {/* Subtext */}
        <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto font-sans leading-relaxed whitespace-pre-line px-4">
          {CONFIG.hero.subtext}
        </p>

        {/* Scroll CTA Button */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="pt-4"
        >
          <button
            onClick={scrollToStory}
            className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/80 hover:bg-white text-rose-600 font-semibold text-base shadow-lg shadow-rose-200/50 border border-rose-100 hover:border-pink-300 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <span>{CONFIG.hero.ctaButton}</span>
            <span className="group-hover:translate-y-1 transition-transform">↓</span>
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
