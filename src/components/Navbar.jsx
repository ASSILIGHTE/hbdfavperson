import React, { useState, useEffect } from 'react';
import { Home, Heart, Camera, Mail, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(currentProgress);
      }

      // Track current section
      const sections = ['hero', 'story', 'memories', 'reasons', 'quiz', 'meter', 'letter', 'ending'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 3) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'story', label: 'Story', icon: Heart },
    { id: 'memories', label: 'Memories', icon: Camera },
    { id: 'letter', label: 'Letter', icon: Mail },
    { id: 'ending', label: 'Ending', icon: Sparkles },
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Scroll Progress Bar with Floating Heart */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1.5 bg-rose-100/50">
        <div
          className="h-full bg-gradient-to-r from-pink-400 via-rose-500 to-purple-400 transition-all duration-150 relative"
          style={{ width: `${scrollProgress}%` }}
        >
          <span
            className="absolute -right-2 -top-2 text-xs select-none transition-transform duration-75"
            style={{ transform: `scale(${1 + scrollProgress / 200})` }}
          >
            💗
          </span>
        </div>
      </div>

      {/* Floating Glass Navigation Pill */}
      <nav className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 px-3 py-2 rounded-full glass-nav flex items-center gap-1 sm:gap-2 shadow-2xl transition-all hover:scale-[1.02]">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                isActive
                  ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-md shadow-pink-300/50 scale-105'
                  : 'text-slate-600 hover:text-rose-500 hover:bg-rose-50/80'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'animate-bounce' : ''}`} />
              <span className="hidden xs:inline sm:inline">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </>
  );
}
