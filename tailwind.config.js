/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: ['sans-serif'],
        arial: ['Arial',],
        neue: ['Helvetica Neue', ],
        helvetica: [ 'Helvetica',],
        mono: ['Mona Sans',],
      },
      gridTemplateColumns: {
        '70/30':'70% 28%',
      },
      colors: {
        primary: "#243343",
      },
    
      
    },
  },

  plugins: [],
}