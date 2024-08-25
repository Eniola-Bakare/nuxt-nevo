/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        nevoPrimary: "#00064B",
        nevoSecondary: "#234DC4",
      },
      fontFamily: {
        custom: ["BuiltTitling", "sans-serif"],
      },
    },
  },
  plugins: [],
};
