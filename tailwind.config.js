/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow : "#FFEAAE",
        "dark-yellow": "#FCCA3F",
        gray:"#5A5959",
        orange:"#F6820C"
      }
    },
  },
  plugins: [],
}