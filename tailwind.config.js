/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "sukses.html", "list.html", "./kuis/*.html"],
  theme: {
    extend: {
      fontFamily: {
        robo: ["Roboto"],
        mplus: ["'M PLUS Rounded 1c'", "Verdana", "sans-serif"],
      },
    },
  },
  plugins: [],
};
