/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: { backgroundImage: {
      'grad-bg' : "url('./public/blur1.png')"
    },},
  },
  plugins: [],
}

