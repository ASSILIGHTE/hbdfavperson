import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { CONFIG } from '../config';

export default function WelcomeScreen({ onOpen }) {
  const [step, setStep] = useState(1);
  const [typedText, setTypedText] = useState('');
  const fullText = CONFIG.welcomeScreen.typingText;

  // Typing animation effect
  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
        // Show delayed third message after typing finishes
        setTimeout(() => setStep(3), 1200);
      }
    }, 90);

    return () => clearInterval(typingInterval);
  }, [fullText]);

  const handleOpenClick = () => {
    // 1. Heart Burst Confetti Explosion
    const duration = 2.5 * 1000;
    const end = Date.now() + duration;

    const heartConfetti = () => {
      confetti({
        particleCount: 25,
        spread: 70,
        origin: { y: 0.6 },
        shapes: ['circle'],
        colors: ['#ff758c', '#ff7eb3', '#ffedd5', '#f43f5e', '#e9d5ff'],
        scalar: 1.2,
      });

      if (Date.now() < end) {
        requestAnimationFrame(heartConfetti);
      }
    };
    heartConfetti();

    // 2. Trigger parent callback to unmount / transition to main site
    setTimeout(() => {
      onOpen();
    }, 600);
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-pink-200 via-rose-100 to-peach-soft p-6 overflow-hidden text-center select-none"
    >
      {/* Floating Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating Hearts & Birthday Icons */}
        <div className="absolute top-10 left-10 text-2xl animate-float opacity-70">🎂</div>
        <div className="absolute top-1/4 right-12 text-3xl animate-float-slow opacity-60">💖</div>
        <div className="absolute bottom-20 left-16 text-3xl animate-float opacity-80">🎉</div>
        <div className="absolute bottom-1/3 right-1/4 text-2xl animate-float-slow opacity-70">✨</div>
        <div className="absolute top-1/3 left-1/4 text-xl animate-sparkle opacity-80">⭐</div>
        <div className="absolute top-20 right-1/3 text-2xl animate-float opacity-60">🌸</div>
        <div className="absolute bottom-12 right-12 text-3xl animate-float-slow opacity-70">💕</div>

        {/* Soft Glowing Animated Blobs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-300/30 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-purple-200/40 rounded-full blur-2xl animate-float-slow" />
      </div>

      {/* Center Birthday Photo Avatar */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 mb-8"
      >
        <div className="w-48 h-48 sm:w-56 sm:h-56 mx-auto rounded-full bg-white/80 p-2.5 shadow-2xl border-4 border-white backdrop-blur-md flex items-center justify-center relative group overflow-hidden">
          <img
            src="/1.jpeg"
            alt="Birthday Partner"
            className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
          />
          {/* Floating heart badge */}
          <div className="absolute top-2 right-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full p-2.5 text-sm shadow-lg animate-bounce">
            🎂
          </div>
        </div>
      </motion.div>

      {/* Sequential Text Messages */}
      <div className="relative z-10 max-w-md space-y-3 min-h-[140px] flex flex-col justify-center">
        {/* Message 1 */}
        <motion.h1
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold font-script text-rose-600 tracking-wide"
        >
          {CONFIG.welcomeScreen.initialText}
        </motion.h1>

        {/* Message 2 (Typing animation) */}
        <p className="text-lg sm:text-xl font-medium text-slate-700 font-sans tracking-tight min-h-[28px]">
          {typedText}
          <span className="inline-block w-0.5 h-5 bg-pink-500 ml-1 animate-pulse" />
        </p>

        {/* Message 3 (Delayed reveal) */}
        <AnimatePresence>
          {step >= 3 && (
            <motion.p
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-sm sm:text-base font-semibold text-rose-500/90 italic"
            >
              {CONFIG.welcomeScreen.delayedText}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Big Trigger Button */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="relative z-10 mt-8"
      >
        <button
          onClick={handleOpenClick}
          className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white text-lg sm:text-xl font-bold shadow-xl shadow-pink-400/40 hover:shadow-2xl hover:shadow-pink-400/60 hover:scale-105 active:scale-95 transition-all duration-300 ring-4 ring-white/60"
        >
          <span className="group-hover:animate-bounce">💗</span>
          <span>{CONFIG.welcomeScreen.buttonText}</span>
          <span className="group-hover:animate-bounce">✨</span>
        </button>
      </motion.div>
    </motion.div>
  );
}
