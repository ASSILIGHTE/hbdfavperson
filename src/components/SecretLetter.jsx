import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Heart, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { CONFIG } from '../config';

export default function SecretLetter() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenEnvelope = () => {
    setIsOpen(true);
    confetti({
      particleCount: 25,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#ff758c', '#ff7eb3', '#f43f5e', '#fff0f5'],
    });
  };

  return (
    <section id="letter" className={`relative py-24 px-4 transition-colors duration-1000 overflow-hidden ${
      isOpen ? 'bg-gradient-to-b from-pink-100 via-rose-100 to-warm-cream' : 'bg-gradient-to-b from-warm-cream via-baby-pink to-blush-pink'
    }`}>
      {/* Floating Sparkles & Hearts when opened */}
      {isOpen && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-10 left-10 text-2xl animate-float opacity-70">💗</div>
          <div className="absolute top-1/3 right-10 text-2xl animate-float-slow opacity-60">💖</div>
          <div className="absolute bottom-16 left-1/4 text-3xl animate-sparkle opacity-80">✨</div>
        </div>
      )}

      <div className="max-w-2xl mx-auto text-center relative z-10 space-y-8">
        {/* Section Teaser */}
        <div className="space-y-3">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold tracking-widest text-rose-500 uppercase bg-rose-100 px-3 py-1 rounded-full"
          >
            SECRET MESSAGE
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold font-script text-gradient-romantic"
          >
            {CONFIG.secretLetter.teaserTitle}
          </motion.h2>
          <p className="text-slate-500 text-sm sm:text-base">
            Ada pesan spesial yang ditulis khusus untuk kamu dari dasar hati.
          </p>
        </div>

        {/* Envelope Container */}
        <div className="relative mx-auto max-w-lg">
          {!isOpen ? (
            /* CLOSED ENVELOPE CARD */
            <motion.div
              initial={{ scale: 0.95 }}
              whileHover={{ scale: 1.02 }}
              className="glass-panel p-8 sm:p-12 rounded-3xl shadow-2xl border-4 border-white/90 text-center space-y-6 relative overflow-hidden group cursor-pointer"
              onClick={handleOpenEnvelope}
            >
              {/* Envelope Flap Visual */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-2xl bg-gradient-to-tr from-pink-400 to-rose-500 flex items-center justify-center text-white shadow-xl group-hover:rotate-6 transition-transform duration-300 relative">
                <Mail className="w-12 h-12 sm:w-14 sm:h-14 animate-pulse" />
                <span className="absolute -top-2 -right-2 bg-white text-rose-500 rounded-full p-1 text-xs shadow-md">
                  💌
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-800 font-sans">
                  Surat Spesial Ulang Tahun 💌
                </h3>
                <p className="text-xs sm:text-sm text-slate-500">
                  Tertutup rapi dan hanya bisa dibuka oleh kamu.
                </p>
              </div>

              <button
                onClick={handleOpenEnvelope}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold text-base shadow-lg shadow-pink-300/50 hover:scale-105 transition-all"
              >
                <span>{CONFIG.secretLetter.buttonText}</span>
                <span>✨</span>
              </button>
            </motion.div>
          ) : (
            /* OPENED LETTER CARD */
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="bg-white p-8 sm:p-12 rounded-3xl shadow-2xl border-4 border-pink-200 text-left space-y-6 relative font-sans leading-relaxed text-slate-700"
              >
                {/* Decorative Heart Seal at Top */}
                <div className="flex justify-between items-center border-b border-rose-100 pb-4">
                  <span className="font-handwritten text-2xl text-rose-500 font-bold">
                    Khusus Untukmu 💕
                  </span>
                  <div className="flex items-center gap-1 text-rose-400">
                    <Heart className="w-4 h-4 fill-rose-400 animate-pulse" />
                    <Sparkles className="w-4 h-4" />
                  </div>
                </div>

                {/* Letter Paragraphs */}
                <div className="space-y-4 text-base sm:text-lg font-sans text-slate-700 leading-relaxed">
                  {CONFIG.secretLetter.paragraphs.map((para, idx) => (
                    <motion.p
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.2 }}
                      className={idx === CONFIG.secretLetter.paragraphs.length - 1 ? 'font-bold text-rose-600 text-lg sm:text-xl pt-2' : ''}
                    >
                      {para}
                    </motion.p>
                  ))}
                </div>

                {/* Closing signature */}
                <div className="pt-6 border-t border-rose-100 text-right">
                  <p className="font-script text-2xl sm:text-3xl text-rose-600 font-bold">
                    Dengan Segala Rasa Sayang,
                  </p>
                  <p className="font-semibold text-slate-800 text-sm mt-1">
                    {CONFIG.yourName} 💕
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </div>
    </section>
  );
}
