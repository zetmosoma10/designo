/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        peach: "#E7816B",
        light_peach: "#FFAD9B",
        very_light_peach: "#FDF3F0",
        black: "#1D1C1E",
        dark_grey: "#333136",
        light_grey: "#F1F3F5",
        white: "#fff",
      },
    },
  },
  plugins: [],
};
