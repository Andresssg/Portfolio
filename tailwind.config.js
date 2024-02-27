/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#061538',
        secondary: '#34425c',
        tertiary: '#adb4d1',
        quaternary: '#3b64c0',
        'primary-light': '#FCFCFC',
        'secondary-light': colors.slate[800],
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
