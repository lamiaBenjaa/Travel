/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        A:['Pacifico','cursive'],
        B:['Nunito','sans-serif'],
        C:['Dancing Script'],
        D:['Varela Round']
      },
    },
    fontFamily:{
      'Rubik':'"Rubik", sans-serif'
    }
  },
  plugins: [require("daisyui")],
}