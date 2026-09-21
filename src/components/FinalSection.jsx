import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Moon, Star, Heart, RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';
import { CONFIG } from '../config';

export default function FinalSection({ onRestart }) {
  const [typedLine, setTypedLine] = useState('');
  const fullTyping = CONFIG.finalSection.typingLine;

  useEffect(() => {
    let idx = 0;
    const interval = setInterval(() => {
      if (idx < fullTyping.length) {
        setTypedLine(fullTyping.slice(0, idx + 1));
        idx++;
      } else {
        clearInterval(interval);
      }
    }, 70);
    return () => clearInterval(interval);
  }, [fullTyping]);

  return (
    <section
      id="ending"
      className="relative min-h-screen flex flex-col items-center justify-center py-24 px-4 bg-gradient-to-b from-slate-900 via-purple-950 to-slate-950 text-white text-center overflow-hidden"
    >
      {/* Night Sky Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Glowing Moon */}
        <div className="absolute top-12 right-12 text-yellow-100 opacity-90 filter drop-shadow-[0_0_20px_rgba(254,240,138,0.5)]">
          <Moon className="w-16 h-16 sm:w-20 sm:h-20 stroke-1 fill-yellow-100/20" />
        </div>

        {/* Twinkling Stars */}
        <div className="absolute top-1/4 left-10 text-xl animate-sparkle">⭐</div>
        <div className="absolute top-1/3 right-1/4 text-sm animate-sparkle [animation-delay:-0.5s]">✨</div>
        <div className="absolute top-20 left-1/3 text-lg animate-sparkle [animation-delay:-1s]">⭐</div>
        <div className="absolute bottom-1/3 left-16 text-sm animate-sparkle">✨</div>
        <div className="absolute bottom-24 right-12 text-xl animate-sparkle [animation-delay:-0.7s]">⭐</div>

        {/* Soft Glowing Hearts Floating in Night Sky */}
        <div className="absolute top-1/2 left-8 text-2xl animate-float-slow opacity-60 text-pink-400">💗</div>
        <div className="absolute bottom-1/4 right-10 text-3xl animate-float opacity-50 text-rose-400">💖</div>

        {/* Night Blobs Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-900/30 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto space-y-8 px-4">
        {/* Line 1 */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-lg sm:text-xl text-purple-200/90 font-medium"
        >
          {CONFIG.finalSection.line1}
        </motion.p>

        {/* Typing Line */}
        <div className="min-h-[60px] flex items-center justify-center">
          <p className="text-xl sm:text-3xl font-serif text-pink-100 italic leading-relaxed">
            {typedLine}
            <span className="inline-block w-0.5 h-6 bg-pink-400 ml-1 animate-pulse" />
          </p>
        </div>

        {/* Animated Glowing I LOVE YOU Display */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="py-6 overflow-visible"
        >
          <div
            onClick={() => {
              confetti({
                particleCount: 40,
                spread: 80,
                origin: { y: 0.7 },
                colors: ['#ff758c', '#ff7eb3', '#f43f5e', '#e9d5ff'],
              });
            }}
            className="cursor-pointer select-none group"
            title="Klik untuk kejutan ciuman & hati! 💖"
          >
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold font-script tracking-wide overflow-visible flex items-center justify-center gap-2 sm:gap-3 flex-wrap py-2">
              <span className="text-3xl sm:text-5xl animate-bounce text-rose-400 filter drop-shadow-[0_0_15px_rgba(244,63,94,0.8)]">
                ❤️
              </span>
              
              <span className="inline-flex flex-wrap justify-center overflow-visible">
                {`I LOVE YOU, ${CONFIG.partnerName.replace(/[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, '').trim() || CONFIG.partnerName}`.split('').map((char, index) => (
                  <motion.span
                    key={index}
                    animate={{
                      y: [0, -10, 0],
                      scale: [1, 1.08, 1],
                    }}
                    transition={{
                      duration: 2.2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: index * 0.07,
                    }}
                    className="inline-block text-pink-300 hover:text-rose-200 hover:scale-125 transition-transform filter drop-shadow-[0_0_15px_rgba(244,63,94,0.9)]"
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </span>

              <span className="text-3xl sm:text-5xl animate-bounce text-rose-400 [animation-delay:-0.6s] filter drop-shadow-[0_0_15px_rgba(244,63,94,0.8)]">
                ❤️
              </span>
            </h2>
            <p className="text-xs text-rose-300/70 opacity-0 group-hover:opacity-100 transition-opacity mt-1 italic">
              ✨ Klik teks untuk ledakan cinta! 💖
            </p>
          </div>
        </motion.div>



        {/* Restart Button */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="pt-6"
        >
          <button
            onClick={onRestart}
            className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base border border-white/20 hover:border-pink-300 shadow-lg backdrop-blur-md hover:scale-105 active:scale-95 transition-all"
          >
            <RotateCcw className="w-4 h-4" />
            <span>{CONFIG.finalSection.restartButtonText}</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
