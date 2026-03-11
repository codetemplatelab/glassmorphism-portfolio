/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#0b1020',
        glass: 'rgba(15, 23, 42, 0.55)',
        glow: 'rgba(56, 189, 248, 0.45)',
        nebula: '#7c3aed',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui'],
        body: ['"Manrope"', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        glass: '0 20px 60px -30px rgba(15, 23, 42, 0.8)',
        glow: '0 0 40px rgba(56, 189, 248, 0.25)',
      },
      backdropBlur: {
        glass: '18px',
      },
    },
  },
  plugins: [],
}
