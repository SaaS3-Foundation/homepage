/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '16px': '16px',
        '24px': '24px',
        '32px': '32px',
        '48px': '48px'
      },
      colors: {
        primary: '#8c74f9'
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
