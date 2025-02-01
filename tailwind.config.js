/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
 './index.html',
    "./src/**/*.{js,jsx,ts,tsx}"], // Include all your React files
  theme: {
    extend: { backgroundImage: {
      'zomato-bg': "url('src/assets/zomato.avif')",
    },
    fontFamily: {
      okra: ["Okra", "Helvetica", "sans-serif"],
    },},
  },
  plugins: [],
}