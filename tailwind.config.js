/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    colors: {
      "Dark-Blue": "hsl(233, 26%, 24%)",
      "Lime-Green": "hsl(136, 65%, 51%)",
      "Bright-Cyan": "hsl(192, 70%, 51%)",

      "Grayish-Blue": "hsl(233, 8%, 62%)",
      "Light-Grayish-Blue": "hsl(220, 16%, 96%)",
      "Very-Light-Gray": "hsl(0, 0%, 98%)",
      White: " hsl(0, 0%, 100%)",
    },
    extend: {
      gridTemplateColumns: {
        // Custom grids
        "choose-us": "repeat(auto-fit, minmax(18rem, 1fr))",
        articles: "repeat(auto-fit, minmax(15rem, 1fr))",
      },
    },
  },
  plugins: [],
};
