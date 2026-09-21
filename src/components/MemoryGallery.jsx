import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, Sparkles } from 'lucide-react';
import { CONFIG } from '../config';

export default function MemoryGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <section id="memories" className="relative py-24 px-4 bg-gradient-to-b from-warm-cream via-baby-pink to-blush-pink overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold tracking-widest text-rose-500 uppercase bg-rose-100 px-3 py-1 rounded-full"
          >
            PHOTO MEMORIES
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold font-script text-gradient-pink"
          >
            Galeri Kenangan Indah Kita 📸💖
          </motion.h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-md mx-auto">
            Setiap momen menyimpan sejuta cerita yang selalu bikin tersenyum.
          </p>
        </div>

        {/* 5-Photo Asymmetric Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 items-center">
          {CONFIG.memoryGallery.map((photo, idx) => {
            // Layout classes based on size property
            const isFeatured = photo.size === 'featured';
            const isMedium = photo.size === 'medium';

            return (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                style={{ transform: `rotate(${photo.rotate})` }}
                onClick={() => setSelectedPhoto(photo)}
                className={`cursor-pointer group relative bg-white p-4 pt-5 rounded-xl shadow-polaroid hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:z-20 overflow-visible ${
                  isFeatured ? 'md:col-span-2 md:row-span-2' : ''
                }`}
              >
                {/* Washi Tape Accent on Polaroid */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-pink-200/80 backdrop-blur-sm rotate-[-2deg] rounded-sm shadow-sm pointer-events-none z-20" />

                {/* Image Frame with 4:5 Aspect Ratio */}
                <div className="overflow-hidden rounded-lg relative aspect-[4/5] w-full">
                  <img
                    src={photo.image}
                    alt={`Memory ${photo.id}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Subtle hover overlay icon */}
                  <div className="absolute inset-0 bg-rose-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white/90 p-3 rounded-full text-rose-500 shadow-lg scale-90 group-hover:scale-100 transition-transform">
                      💖
                    </span>
                  </div>
                </div>

                {/* Polaroid Caption Teaser */}
                <div className="mt-3 text-center px-1">
                  <p className="font-handwritten text-lg sm:text-xl text-slate-700 truncate">
                    {photo.caption}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Enlarged Photo Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-lg w-full bg-white p-5 sm:p-6 rounded-2xl shadow-2xl border-4 border-rose-100 text-center space-y-4"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-3 right-3 p-2 rounded-full bg-rose-100 text-rose-600 hover:bg-rose-200 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Image */}
              <div className="overflow-hidden rounded-xl bg-slate-50 border border-slate-100 shadow-inner">
                <img
                  src={selectedPhoto.image}
                  alt="Expanded Memory"
                  className="w-full max-h-[60vh] object-contain mx-auto rounded-lg"
                />
              </div>

              {/* Caption & Floating Hearts */}
              <div className="space-y-2 pt-2">
                <div className="flex items-center justify-center gap-2 text-rose-500">
                  <Heart className="w-5 h-5 fill-rose-500 animate-bounce" />
                  <Sparkles className="w-4 h-4 text-pink-400" />
                </div>

                <p className="text-xl sm:text-2xl font-handwritten text-slate-800 leading-snug">
                  "{selectedPhoto.caption}"
                </p>
                
                <p className="text-xs text-slate-400 italic">
                  Klik di luar untuk menutup
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
