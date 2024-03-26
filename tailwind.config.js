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
        },
        typewriter: {
          to: {
            left: '100%'
          }
        },
        blink: {
          '0%': {
            opacity: '0'
          },
          '50%': {
            opacity: '1'
          },
          '100%': {
            opacity: '0'
          }
        }
      },
      animation: {
        rotate: 'rotate 3.5s linear infinite',
        typewriter: 'typewriter 3s steps(20) forwards',
        caret: 'typewriter 3s steps(20) forwards, blink 1s steps(11) infinite 2s'
      },
      boxShadow: {
        custom: '0px 10px 10px -10px rgba(0, 0, 0, 0.17)'
      },
      colors: {
        primary: '#1e1f26',
        secondary: colors.slate[800],
        accent: '#e2e2e2',
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
