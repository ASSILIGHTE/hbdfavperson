import React, { useState, useRef, useEffect } from 'react';
import { Music, Volume2, VolumeX } from 'lucide-react';
import { CONFIG } from '../config';

export default function MusicPlayer({ autoPlayTrigger }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
          setHasInteracted(true);
        })
        .catch((err) => {
          console.log('Autoplay or play error:', err);
        });
    }
  };

  // Start music when WelcomeScreen button is pressed if permitted
  useEffect(() => {
    if (autoPlayTrigger && audioRef.current && !isPlaying) {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
          setHasInteracted(true);
        })
        .catch(() => {
          console.log('Browser blocked initial autoplay until explicit click');
        });
    }
  }, [autoPlayTrigger]);

  return (
    <div className="fixed top-4 right-4 z-40">
      <audio ref={audioRef} src={CONFIG.music.src} loop preload="auto" />
      
      <button
        onClick={togglePlay}
        className={`glass-panel flex items-center gap-2 px-3.5 py-2 rounded-full shadow-lg transition-all duration-300 ${
          isPlaying
            ? 'border-pink-300 ring-2 ring-pink-300/40 bg-white/90 scale-105'
            : 'text-slate-600 hover:text-rose-500 hover:bg-white'
        }`}
        title={isPlaying ? 'Matikan Musik' : 'Putar Musik'}
      >
        <div className="relative flex items-center justify-center">
          {isPlaying ? (
            <Volume2 className="w-4 h-4 text-rose-500 animate-pulse" />
          ) : (
            <VolumeX className="w-4 h-4 text-slate-400" />
          )}
        </div>

        <div className="flex items-center gap-1">
          <span className="text-xs font-semibold text-slate-700 max-w-[90px] sm:max-w-[120px] truncate">
            🎵 {CONFIG.music.title}
          </span>
          
          {/* Animated Equalizer Bars */}
          {isPlaying && (
            <div className="flex items-end gap-0.5 h-3 ml-1">
              <span className="w-0.5 bg-rose-400 h-full animate-bounce [animation-delay:-0.3s]" />
              <span className="w-0.5 bg-pink-500 h-2/3 animate-bounce [animation-delay:-0.15s]" />
              <span className="w-0.5 bg-rose-600 h-full animate-bounce" />
            </div>
          )}
        </div>
      </button>
    </div>
  );
}
