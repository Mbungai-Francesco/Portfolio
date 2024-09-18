/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'myGrey': '#A4A4A4',
        'myBlack': '#1A1A1A',
        'myWhite': '#F2F2F2',
      }
    },
  },
  plugins: [],
}

