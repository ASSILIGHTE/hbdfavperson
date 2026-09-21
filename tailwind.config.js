/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'romantic-pink': '#ff758c',
        'soft-pink': '#ff7eb3',
        'baby-pink': '#fff0f5',
        'blush-pink': '#ffe4e6',
        'rose-pink': '#f43f5e',
        'warm-cream': '#fffdfa',
        'lavender-soft': '#e9d5ff',
        'peach-soft': '#ffedd5',
        'deep-rose': '#e11d48',
        'night-bg': '#0f172a',
      },
      fontFamily: {
        script: ['"Dancing Script"', '"Great Vibes"', 'cursive'],
        handwritten: ['"Sacramento"', 'cursive'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'sparkle': 'sparkle 2s ease-in-out infinite',
        'heart-beat': 'heartBeat 1.5s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(3deg)' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        heartBeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.15)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        }
      },
      boxShadow: {
        'glow-pink': '0 0 25px rgba(255, 117, 140, 0.4)',
        'glow-rose': '0 0 30px rgba(225, 29, 72, 0.5)',
        'polaroid': '0 10px 30px -10px rgba(244, 63, 94, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}
