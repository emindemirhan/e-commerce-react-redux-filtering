/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2347ad",
        secondary: "#2347ad",
        lighter: "#eaf6fd",
      },
      backgroundImage: {
        gradient:
          "linear-gradient(307deg, #AF2763 0%, #0079C1 54%, #2347AD 100%)",
        gradient2: "linear-gradient(180deg, #cf5ec9 0%, #2347ad 82%)",
      },
    },
    screens: {
      xs: "428px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
