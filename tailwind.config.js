/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/app/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      animation: {
        'mask-left': 'mask-left 1000ms linear forwards'
      },
      keyframes: {
        'mask-left': {
          '0%': { 'clip-path': 'polygon(0 0, 0 0, 0 100%, 0% 100%)', opacity: 0 },
          '100%': { 'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', opacity: 1 }
        }
      }
    }
  },
  plugins: []
}
