 
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  safelist: ['bg-primary', 'border-primary', 'border-secondary'],
  theme: {
    colors: {
      current: 'currentColor',
      transparent: 'transparent',
      inherit: 'inherit',
      black: '#000',
      white: '#fff',
      primary: {
        shade: 'var(--color-primary-shade)',
        DEFAULT: 'var(--color-primary)',
        tint: 'var(--color-primary-tint)',
        light: 'var(--color-primary-light)'
      },
      secondary: {
        shade: 'var(--color-secondary-shade)',
        DEFAULT: 'var(--color-secondary)',
        tint: 'var(--color-secondary-tint)',
        light: 'var(--color-secondary-light)',
        text: 'var(--color-secondary-text)'
      },
      dark: {
        black: 'var(--color-dark-black)',
        shade: 'var(--color-dark-shade)',
        DEFAULT: 'var(--color-dark)',
        tint: 'var(--color-dark-tint)',
        light: 'var(--color-dark-light)'
      }
    },
    fontFamily: {
      sans: ['JetBrains\\ Mono', ...defaultTheme.fontFamily.mono],
      cursive: ['JetBrains\\ Mono', ...defaultTheme.fontFamily.mono],
      mono: ['JetBrains\\ Mono', ...defaultTheme.fontFamily.mono]
    },
    extend: {
      fontSize: {
        '8xl': '6rem'
      },
      height: {
        '1/2': '50%',
        '2/5': '40%',
        '3/5': '60%'
      }
    }
  },
  plugins: []
};
