/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Gunakan mode class agar bisa dikontrol
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#111827", // Pastikan warna sesuai dengan dark mode
        light: "#ffffff", // Warna untuk light mode
      },
    },
  },
  plugins: [],
};
