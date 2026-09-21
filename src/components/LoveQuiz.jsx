import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { CONFIG } from '../config';

export default function LoveQuiz() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState({});
  const [reactionModal, setReactionModal] = useState(null);
  const [isCompleted, setIsCompleted] = useState(false);

  const questions = CONFIG.quizQuestions;
  const currentQ = questions[currentIdx];

  const handleSelectOption = (optionIndex) => {
    // Save answer
    setAnswers((prev) => ({ ...prev, [currentIdx]: optionIndex }));

    // Show funny reaction modal
    const reactionMsg = currentQ.reactionText[optionIndex] || "Hehe kamu pinter banget! 💕";
    setReactionModal({
      msg: reactionMsg,
      optionSelected: currentQ.options[optionIndex],
    });

    // Confetti burst
    confetti({
      particleCount: 20,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#ff758c', '#ff7eb3', '#f43f5e'],
    });
  };

  const handleNextQuestion = () => {
    setReactionModal(null);
    if (currentIdx < questions.length - 1) {
      setCurrentIdx((prev) => prev + 1);
    } else {
      setIsCompleted(true);
      confetti({
        particleCount: 50,
        spread: 100,
        origin: { y: 0.5 },
      });
    }
  };

  const handleResetQuiz = () => {
    setCurrentIdx(0);
    setAnswers({});
    setReactionModal(null);
    setIsCompleted(false);
  };

  return (
    <section id="quiz" className="relative py-24 px-4 bg-gradient-to-b from-warm-cream via-baby-pink to-blush-pink overflow-hidden">
      <div className="max-w-2xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-3">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold tracking-widest text-rose-500 uppercase bg-rose-100 px-3 py-1 rounded-full"
          >
            MINI INTERACTIVE GAME
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold font-script text-gradient-pink"
          >
            Quiz Ultah & Kebahagiaan 🎂💖
          </motion.h2>
          <p className="text-slate-500 text-sm sm:text-base">
            Jawab pertanyaan seru & manis ini yuk! 😜
          </p>
        </div>

        {/* Quiz Container Card */}
        <div className="glass-panel p-6 sm:p-10 rounded-3xl shadow-2xl border-2 border-white/80 text-center relative">
          {!isCompleted ? (
            <div className="space-y-8">
              {/* Progress indicator */}
              <div className="flex items-center justify-between text-xs font-bold text-slate-400">
                <span>PERTANYAAN {currentIdx + 1} DARI {questions.length}</span>
                <span className="text-rose-500 font-sans">
                  {'💗'.repeat(currentIdx + 1)}
                </span>
              </div>

              {/* Question Text */}
              <h3 className="text-xl sm:text-2xl font-bold text-slate-800 font-sans leading-snug">
                "{currentQ.question}"
              </h3>

              {/* Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {currentQ.options.map((opt, optIdx) => (
                  <button
                    key={optIdx}
                    onClick={() => handleSelectOption(optIdx)}
                    className="p-4 rounded-2xl bg-white hover:bg-rose-50 border-2 border-rose-100 hover:border-pink-300 font-semibold text-slate-700 text-base shadow-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-300 text-center"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Quiz Completion Screen */
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-6 py-4"
            >
              <div className="text-6xl animate-bounce">🏆</div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 font-sans">
                Selamat! Kamu Lulus Ujian Pacar Terbaik 1000%! 🏆💕
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Mau jawab apa pun, kamu tetap jadi orang nomor satu paling favorit di hati aku! 💖❤️
              </p>
              <button
                onClick={handleResetQuiz}
                className="px-6 py-2.5 rounded-full bg-rose-500 hover:bg-rose-600 text-white font-semibold text-sm shadow-md transition-all"
              >
                Coba Jawab Lagi 🔄
              </button>
            </motion.div>
          )}
        </div>
      </div>

      {/* Reaction Popup Modal */}
      <AnimatePresence>
        {reactionModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 20 }}
              className="max-w-md w-full bg-white p-6 rounded-3xl shadow-2xl border-4 border-pink-200 text-center space-y-5"
            >
              <div className="text-5xl animate-bounce">😳</div>
              
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-rose-400">
                  Jawaban Kamu: "{reactionModal.optionSelected}"
                </span>
                <p className="text-lg font-bold text-slate-800 font-sans leading-relaxed">
                  {reactionModal.msg}
                </p>
              </div>

              <button
                onClick={handleNextQuestion}
                className="w-full py-3 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold shadow-lg shadow-pink-300/50 hover:scale-105 transition-transform"
              >
                LanjutPertanyaan Berikutnya ➔
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
