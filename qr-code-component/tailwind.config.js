/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: "hsl(0, 0%, 100%)",
      lightGray: "hsl(212, 44%, 22%)",
      grayishBlue: "hsl(220, 15%, 55%)",
      darkBlue: "hsl(218, 44%, 22%)",
      supLightGray: "hsl(212, 44%, 88%)",
    },
    fontFamily: {
      outfit: ["Outfit", "sans-serif"],
    },
    fontWeight: {
      regular: "400",
      bold: "700",
    },
    extend: {
      width: {
        128: "32rem",
      },
    },
  },
  plugins: [],
};
