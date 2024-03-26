/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      keyframes: {
        rotate: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' }
        }
      },
      animation: {
        rotate: 'rotate 3.5s linear infinite'
      },
      boxShadow: {
        custom: '0px 10px 10px -10px rgba(0, 0, 0, 0.17)'
      },
      colors: {
        primary: '#1e1f26',
        secondary: colors.slate[800],
        github: '#211F1F',
        linkedin: '#0077B5'
      },
      fontFamily: {
        ubuntu: ['Ubuntu Variable', 'sans-serif']
      }

    }
  },
  plugins: []
}
