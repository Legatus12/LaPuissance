/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'showcase': "url('/src/assets/img/showcase.jpg')",
        'g1': "url('/src/assets/img/g1.jpg')",
        'g2': "url('/src/assets/img/g2.jpg')",
        'g3': "url('/src/assets/img/g3.jpg')",
        'g4': "url('/src/assets/img/g4.jpg')"
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif']
      },
    },
  },
  plugins: [],
}
