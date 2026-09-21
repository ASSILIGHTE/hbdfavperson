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

      {/* Center Cute Couple Illustration */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 mb-8"
      >
        <div className="w-48 h-48 sm:w-56 sm:h-56 mx-auto rounded-full bg-white/60 p-4 shadow-xl border-4 border-white/80 backdrop-blur-md flex items-center justify-center relative">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            {/* Soft background glow */}
            <circle cx="100" cy="100" r="90" fill="#FFE4E6" opacity="0.6" />
            
            {/* Left Cute Character (Boy/Partner 1) */}
            <g className="animate-float-slow">
              {/* Body */}
              <path d="M50 145 C50 115, 85 115, 85 145 Z" fill="#93C5FD" />
              {/* Head */}
              <circle cx="67.5" cy="100" r="22" fill="#FED7AA" />
              {/* Hair */}
              <path d="M47 96 C47 75, 88 75, 88 96 C80 88, 55 88, 47 96 Z" fill="#475569" />
              {/* Eyes */}
              <circle cx="62" cy="98" r="2.5" fill="#1E293B" />
              <circle cx="73" cy="98" r="2.5" fill="#1E293B" />
              {/* Blush */}
              <ellipse cx="58" cy="104" rx="3" ry="2" fill="#F43F5E" opacity="0.6" />
              <ellipse cx="77" cy="104" rx="3" ry="2" fill="#F43F5E" opacity="0.6" />
              {/* Smile */}
              <path d="M64 105 Q67.5 110 71 105" stroke="#1E293B" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            </g>

            {/* Right Cute Character (Girl/Partner 2) */}
            <g className="animate-float">
              {/* Body */}
              <path d="M115 145 C115 115, 150 115, 150 145 Z" fill="#F472B6" />
              {/* Head */}
              <circle cx="132.5" cy="100" r="22" fill="#FED7AA" />
              {/* Long Cute Hair */}
              <path d="M110 95 C110 70, 155 70, 155 95 C158 120, 152 135, 148 135 C146 115, 145 95, 132.5 95 C120 95, 119 115, 117 135 C113 135, 107 120, 110 95 Z" fill="#78350F" />
              {/* Flower Ribbon in hair */}
              <circle cx="120" cy="82" r="4" fill="#F43F5E" />
              <circle cx="120" cy="82" r="1.5" fill="#FEF08A" />
              {/* Eyes */}
              <circle cx="127" cy="98" r="2.5" fill="#1E293B" />
              <circle cx="138" cy="98" r="2.5" fill="#1E293B" />
              {/* Blush */}
              <ellipse cx="123" cy="104" rx="3" ry="2" fill="#F43F5E" opacity="0.7" />
              <ellipse cx="142" cy="104" rx="3" ry="2" fill="#F43F5E" opacity="0.7" />
              {/* Smile */}
              <path d="M129 105 Q132.5 110 136 105" stroke="#1E293B" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            </g>

            {/* Floating Heart between them */}
            <path d="M100 82 Q95 72 88 80 Q88 88 100 96 Q112 88 112 80 Q105 72 100 82" fill="#F43F5E" className="animate-bounce" />
          </svg>

          {/* Floating heart badge */}
          <div className="absolute -top-3 -right-2 bg-pink-500 text-white rounded-full p-2 text-xs shadow-md animate-pulse">
            💗
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
