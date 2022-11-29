/** @type {import('tailwindcss').Config} */
// const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: '"Space Mono", -apple-system, BlinkMacSystemFont, "PingFang SC", "Helvetica Neue", STHeiti, "Microsoft Yahei", Tahoma, Simsun, sans-serif',
      },
      fontSize: {
        m: '0.34rem',
        m2: '0.42rem',
        mT: '0.7rem',
      },
      colors: {
        hoverDark: 'var(--hover-dark-color)',
        dark2: 'var(--dark-color-2)',
        'semi-primary': 'var(--semi-color-primary)',
        'primary-blue': 'var(--color-primary-blue)',
        primary: '#8c74f9',
        'bg-dark': 'var(--app-background-dark)',
      },
      spacing: {
        '16px': '16px',
        '24px': '24px',
        '32px': '32px',
        '48px': '48px',
      },
      width: {
      },
      screens: {
        // ...defaultTheme.screens,
        m: { max: '750px' },
        p: { min: '751px' },
        md: { max: '1023px' },
        pc: { min: '1024px' },
      },
    },
  },
  plugins: [],
};
