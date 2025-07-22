import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class', // follow system preference
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0066FF', // cobalt blue
        accent: '#FFD400', // light gold
      },
      borderRadius: {
        card: '12px',
      },
      boxShadow: {
        soft: '0 4px 12px rgba(0,0,0,0.08)',
      },
      fontFamily: {
        sans: ['var(--font-noto-sans)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
        playfair: ['var(--font-playfair)', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;
