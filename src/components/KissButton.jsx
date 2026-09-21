import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CONFIG } from '../config';

export default function KissButton() {
  const [kissCount, setKissCount] = useState(0);
  const [flyingKisses, setFlyingKisses] = useState([]);
  const [milestoneMsg, setMilestoneMsg] = useState('');

  const handleSendKiss = (e) => {
    const nextCount = kissCount + 1;
    setKissCount(nextCount);

    // Spawn floating kiss emojis from button location
    const rect = e.currentTarget.getBoundingClientRect();
    const newKisses = Array.from({ length: 4 }).map((_, i) => ({
      id: Date.now() + i + Math.random(),
      x: rect.left + rect.width / 2 + (Math.random() * 80 - 40),
      y: rect.top,
      symbol: ['💋', '💖', '💕', '😚', '✨'][Math.floor(Math.random() * 5)],
    }));

    setFlyingKisses((prev) => [...prev.slice(-25), ...newKisses]);

    // Check milestones
    if (nextCount === 10) {
      setMilestoneMsg(CONFIG.kissButton.milestone10);
    } else if (nextCount === 50) {
      setMilestoneMsg(CONFIG.kissButton.milestone50);
    }
  };

  return (
    <section className="relative py-16 px-4 bg-gradient-to-b from-warm-cream via-baby-pink to-blush-pink text-center overflow-hidden">
      <div className="max-w-md mx-auto relative z-10 space-y-4">
        {/* Floating Kiss Animations */}
        <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden">
          {flyingKisses.map((k) => (
            <motion.span
              key={k.id}
              initial={{ y: k.y, x: k.x, opacity: 1, scale: 0.8 }}
              animate={{ y: k.y - 250, opacity: 0, scale: 1.5 }}
              transition={{ duration: 1.8, ease: 'easeOut' }}
              className="absolute text-3xl select-none"
            >
              {k.symbol}
            </motion.span>
          ))}
        </div>

        {/* Counter Display Badge */}
        <motion.div
          key={kissCount}
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          className="inline-block px-4 py-1.5 rounded-full bg-rose-100 border border-rose-200 text-rose-600 font-semibold text-sm shadow-sm"
        >
          {kissCount === 0 ? (
            <span>Kirim ciuman & pelukan manis! 💋</span>
          ) : (
            <span>Kamu mengirim {kissCount} ciuman & pelukan 😳</span>
          )}
        </motion.div>

        {/* Milestone Message Popup */}
        <AnimatePresence>
          {milestoneMsg && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="p-3 rounded-2xl bg-rose-500 text-white font-bold text-sm sm:text-base shadow-lg animate-bounce"
            >
              {milestoneMsg}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Kiss Button */}
        <div>
          <button
            onClick={handleSendKiss}
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 text-white font-extrabold text-lg sm:text-xl shadow-xl shadow-rose-300/50 hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-200 ring-4 ring-white"
          >
            <span className="group-hover:animate-bounce">💋</span>
            <span>{CONFIG.kissButton.buttonText}</span>
            <span className="group-hover:animate-bounce">💖</span>
          </button>
        </div>
      </div>
    </section>
  );
}
