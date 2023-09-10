/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lalezar: ["Lalezar", "sans-serif"],
        barlow: ["Barlow", "sans-serif"],
        rowdies: ["Rowdies", "sans-serif"],
      },
    },
  },
  plugins: [],
};
