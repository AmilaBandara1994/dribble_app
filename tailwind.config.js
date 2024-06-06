/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: ['Mona Sans', 'Helvetica Neue', 'Helvetica', 'Arial','sans-serif']
      },
      gridTemplateColumns: {
        '70/30':'70% 28%',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'bg-amb': '#f8f7f4',
      
    },
  },

  plugins: [],
}