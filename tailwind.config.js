/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        archivo: ["Archivo", "sans-serif"],
        rubik: ["rubik", "sans-serif"],
        caveat: ["caveat", "cursive"],
        shadow: ["Shadows Into Light", "cursive"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
