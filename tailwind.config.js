/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: 'var(--color-brand-primary)',
          secondary: 'var(--color-brand-secondary)',
          dark: 'var(--color-brand-dark)',
          light: 'var(--color-brand-light)',
        },
      },
      fontFamily: {
        heading: ['"Barlow Condensed"', '"Bebas Neue"', 'Impact', 'sans-serif'],
        display: ['"Barlow Condensed"', '"Bebas Neue"', 'Impact', 'sans-serif'],
        roboto: ['"Roboto Condensed"', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sanskrit: ['"Noto Serif Devanagari"', 'Georgia', 'serif'],
      },
      boxShadow: {
        premium: '0 24px 80px var(--color-intro-shadow)',
      },
    },
  },
  plugins: [],
};
