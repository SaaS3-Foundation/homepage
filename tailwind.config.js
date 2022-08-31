/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '16px': '16px'
      },
      colors: {
        primary: '#4076fe'
      },
      screens: {
        ...defaultTheme.screens,
        md: { max: '1023px' },
        pc: { min: '1024px' }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
