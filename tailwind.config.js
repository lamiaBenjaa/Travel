/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        mine:["Protest Revolution", "sans-serif"]
      }
    },
    fontFamily:{
      'Rubik':'sans-serif'
    }
  },
  plugins: [require("daisyui") , require('tailwind-scrollbar-hide')],
}