/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg1': "url('/src/assets/img/bg1.jpg')",
        'bg2': "url('/src/assets/img/bg2.jpg')",
        'bg3': "url('/src/assets/img/bg3.jpg')",
        'bg4': "url('/src/assets/img/bg4.jpg')",
        'vector': "url('/src/assets/img/vector.png')"
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif']
      },
    },
  },
  plugins: [],
}
