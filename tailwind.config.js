/** @type {import('tailwindcss').Config} */

const tailwindColors = require("tailwindcss/colors");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    minWidth: {
      login: "23rem",
    },

    colors: {
      ...tailwindColors,
      white: "#FFFFFF",
      cyan: {
        regular: "#81D8F7",
        light: "#B9E5F4",
      },
      gray: {
        dark: "#202024",
        regular: "#7C7C8A",
        light: "#E1E1E6",
      },
    },

    fontSize: {
      sm: "0.875rem",
      md: "1rem",
      lg: "1.25rem",
      xl: "1.75rem",
    },
  },
  plugins: [],
};
