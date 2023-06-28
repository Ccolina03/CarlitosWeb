/** @type {import('tailwindcss').Config} */
const colors = require ('tailwindcss/colors')
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: false,
  theme: {
    colors: {
      primary: "#202225",
      secondary: "#5865f2",
      black: "#1E1E1E",
      gray: colors.trueGray,
      gray: {
        900: '#202225',
        800: '#2f3136',
        700: '#36393f',
        600: '#4f545c',
        400: '#d4d7dc',
        300: '#e3e5e8',
        200: '#ebedef',
        100: '#f2f3f5', 
      },
      green: '#93C572',
    },
    extend: {
      animate: {
        'bounce': 'bounce',
      },
      backgroundImage: {
        'header': "url('/src/gallery/Rectangle 9.png')"
      },
      flex: {
        '1/3': '1 1 33%',
        '1/2': '1 1 50%',
        '1/4': '1 1 25%',
        '2/3': '1 1 67%',
        '3/4': '1 1 75%',
      }
    },
  },
  plugins: [],
}