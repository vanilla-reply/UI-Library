const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    "./src/**/*.vue"
  ],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: colors.indigo,
        secondary: colors.yellow,
        neutral: colors.gray,
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
