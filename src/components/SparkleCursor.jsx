import React, { useEffect, useState } from 'react';

export default function SparkleCursor() {
  const [particles, setParticles] = useState([]);
  const [clickHearts, setClickHearts] = useState([]);

  useEffect(() => {
    // Only run on non-touch screens or desktop
    const handleMouseMove = (e) => {
      if (Math.random() > 0.4) return; // limit frequency

      const newParticle = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 12 + 6,
        symbol: ['✨', '💖', '🌸', '⭐', '💗'][Math.floor(Math.random() * 5)],
      };

      setParticles((prev) => [...prev.slice(-15), newParticle]);
    };

    const handleClick = (e) => {
      const symbols = ['💗', '💖', '💕', '💋', '✨'];
      const newHearts = Array.from({ length: 6 }).map((_, i) => ({
        id: Date.now() + i + Math.random(),
        x: e.clientX + (Math.random() * 40 - 20),
        y: e.clientY + (Math.random() * 40 - 20),
        symbol: symbols[Math.floor(Math.random() * symbols.length)],
        angle: Math.random() * 360,
        speed: Math.random() * 2 + 1,
      }));

      setClickHearts((prev) => [...prev.slice(-20), ...newHearts]);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  // Clean up particles
  useEffect(() => {
    const timer = setInterval(() => {
      setParticles((prev) => prev.slice(1));
      setClickHearts((prev) => prev.slice(2));
    }, 300);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Sparkle cursor trail */}
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute animate-ping text-xs select-none opacity-80"
          style={{
            left: `${p.x}px`,
            top: `${p.y}px`,
            fontSize: `${p.size}px`,
            transform: 'translate(-50%, -50%)',
            transition: 'all 0.5s ease-out',
          }}
        >
          {p.symbol}
        </span>
      ))}

      {/* Click Hearts Burst */}
      {clickHearts.map((h) => (
        <span
          key={h.id}
          className="absolute select-none text-base font-bold transition-all duration-700 ease-out"
          style={{
            left: `${h.x}px`,
            top: `${h.y - 25}px`,
            transform: `translate(-50%, -50%) scale(1.3)`,
            opacity: 0.9,
          }}
        >
          {h.symbol}
        </span>
      ))}
    </div>
  );
}
