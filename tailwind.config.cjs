/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        littleBlack: "#333",
        fbColor: "#1877f2",
        igColor: "#c13584",
        ytColor: "#ff0000",
        twColor: "#1da1f2",
      },
    },
  },
  plugins: [],
};
