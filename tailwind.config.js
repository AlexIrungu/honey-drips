/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary Brand Colors
        honey: {
          DEFAULT: '#F4A23F',
          50: '#FEF7ED',
          100: '#FDEFD6',
          200: '#FBDEAD',
          300: '#F8CB83',
          400: '#F6B761',
          500: '#F4A23F',
          600: '#E89130',
          700: '#D47E23',
          800: '#B36A1E',
          900: '#92561A',
        },
        gold: {
          DEFAULT: '#D4A348',
          50: '#FAF6EC',
          100: '#F3EBD5',
          200: '#E8D6AB',
          300: '#DCC181',
          400: '#D0AC5C',
          500: '#D4A348',
          600: '#B88D3A',
          700: '#9C762F',
          800: '#7E5F26',
          900: '#64491E',
        },
        // Neutral Colors
        charcoal: {
          DEFAULT: '#3A3A3A',
          50: '#F5F5F5',
          100: '#E8E8E8',
          200: '#D1D1D1',
          300: '#ABABAB',
          400: '#6B6B6B',
          500: '#3A3A3A',
          600: '#2E2E2E',
          700: '#242424',
          800: '#1A1A1A',
          900: '#0F0F0F',
        },
        // Supporting Colors
        cream: '#FAFAF8',
        warm: {
          white: '#FAFAF8',
          gray: '#F5F5F5',
        },
        brown: {
          DEFAULT: '#8B4513',
          50: '#F7EDE5',
          100: '#EDD9C8',
          200: '#DCB391',
          300: '#CA8D5A',
          400: '#B86A2E',
          500: '#8B4513',
          600: '#6F370F',
          700: '#532A0B',
          800: '#371C08',
          900: '#1B0E04',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-playfair)', 'serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-sm': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 30px -5px rgba(0, 0, 0, 0.08)',
        'large': '0 10px 40px -10px rgba(0, 0, 0, 0.15), 0 20px 50px -10px rgba(0, 0, 0, 0.12)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}