/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        extendImage : "url('src/assets/image-baklava-desktop.jpg')"
      }
    },
  },
  plugins: [],
}

