import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SparkleCursor from './components/SparkleCursor';
import Navbar from './components/Navbar';
import MusicPlayer from './components/MusicPlayer';
import WelcomeScreen from './components/WelcomeScreen';
import Hero from './components/Hero';
import LoveStory from './components/LoveStory';
import MemoryGallery from './components/MemoryGallery';
import ReasonsSection from './components/ReasonsSection';
import LoveQuiz from './components/LoveQuiz';
import LoveMeter from './components/LoveMeter';
import SecretLetter from './components/SecretLetter';
import KissButton from './components/KissButton';
import FinalSection from './components/FinalSection';
import { CONFIG } from './config';

export default function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [autoPlayMusic, setAutoPlayMusic] = useState(false);
  const [currentToast, setCurrentToast] = useState('');

  // Trigger random cute floating toasts on scroll
  useEffect(() => {
    let lastScroll = 0;
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      // Trigger toast randomly every 800px scroll
      if (Math.abs(currentScroll - lastScroll) > 900 && !showWelcome) {
        lastScroll = currentScroll;
        const toasts = CONFIG.floatingToasts;
        const randomMsg = toasts[Math.floor(Math.random() * toasts.length)];
        setCurrentToast(randomMsg);

        setTimeout(() => {
          setCurrentToast('');
        }, 3500);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showWelcome]);

  const handleOpenMainSite = () => {
    setShowWelcome(false);
    setAutoPlayMusic(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRestart = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      setShowWelcome(true);
    }, 500);
  };

  return (
    <div className="relative min-h-screen bg-warm-cream text-slate-800 selection:bg-pink-300 selection:text-rose-900 overflow-x-hidden font-sans">
      {/* Interactive Cursor Trail & Click Hearts */}
      <SparkleCursor />

      {/* Background Music Player */}
      <MusicPlayer autoPlayTrigger={autoPlayMusic} />

      {/* Floating Micro Interaction Toast Notification */}
      <AnimatePresence>
        {currentToast && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-40 px-5 py-2.5 rounded-full bg-white/90 backdrop-blur-md border border-pink-200 shadow-xl text-rose-600 font-bold text-xs sm:text-sm flex items-center gap-2"
          >
            <span>✨</span>
            <span>{currentToast}</span>
            <span>✨</span>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {showWelcome ? (
          <WelcomeScreen key="welcome" onOpen={handleOpenMainSite} />
        ) : (
          <motion.main
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Navigation Pill */}
            <Navbar />

            {/* 1. HERO SECTION */}
            <Hero />

            {/* 2. OUR LITTLE STORY (TIMELINE) */}
            <LoveStory />

            {/* 3. PHOTO MEMORY GALLERY */}
            <MemoryGallery />

            {/* 4. 5 THINGS I LOVE ABOUT YOU */}
            <ReasonsSection />

            {/* 5. MINI INTERACTIVE GAME (LOVE QUIZ) */}
            <LoveQuiz />

            {/* 6. LOVE METER */}
            <LoveMeter />

            {/* 7. SECRET MESSAGE (LETTER) */}
            <SecretLetter />

            {/* 8. SPECIAL KISS BUTTON */}
            <KissButton />

            {/* 9. FINAL SECTION (CINEMATIC ENDING) */}
            <FinalSection onRestart={handleRestart} />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}
