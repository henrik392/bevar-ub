module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          200: "#E8F4E7",
          300: "#5BB12F",
          400: "#53a32b",
          500: "#4C7935",
          800: "#2B4D19",
        },
        secondary: {
          200: "#F6EFDD",
        },
      },
    },
  },
  plugins: [],
};
