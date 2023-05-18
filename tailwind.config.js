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
      login: "25rem",
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
      xs: "0.875rem",
      sm: "1rem",
      md: "1.125rem",
      lg: "1.5rem",
      xl: "2rem",
    },
  },
  plugins: [],
};
