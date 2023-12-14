/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "18px",
    },
    extend: {
      colors: {
        primary: "#F3EEEA",
        secondary: "#EBE3D5",
        third: "#B0A695",
        fourth: "#776B5D",
        ig: "#c13584",
      },
      animation: {
        lentur: "lentur 3s linear infinite",
      },
      keyframes: {
        lentur: {
          "0%, 100%": {
            borderRadius: "38% 62% 21% 79% / 71% 23% 77% 29% ",
            backgroundColor: "#383838",
          },
          "25%": {
            borderRadius: "31% 69% 25% 75% / 86% 18% 82% 14% ",
            backgroundColor: "#383838",
          },
          "50%": {
            borderRadius: "35% 65% 29% 71% / 60% 31% 69% 40% ",
            backgroundColor: "#383838",
          },
          "75%": {
            borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70% ",
            backgroundColor: "#383838",
          },
        },
      },
    },
  },
  plugins: [],
};
