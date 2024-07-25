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
      backgroundImage: {
        appMobileImg: 'url("./assets/home/mobile/image-app-design.jpg")',
        appTabletImg: 'url("./assets/home/tablet/image-app-design.jpg")',
        appDesktopImg: 'url("./assets/home/desktop/image-app-design.jpg")',
        webMobileImg: 'url("./assets/home/mobile/image-web-design.jpg")',
        webTabletImg: 'url("./assets/home/tablet/image-web-design.jpg")',
        webDesktopSmallImg:
          'url("./assets/home/desktop/image-web-design-small.jpg")',
        webDesktopLargeImg:
          'url("./assets/home/desktop/image-web-design-large.jpg")',
        graphicMobileImg:
          'url("./assets/home/mobile/image-graphic-design.jpg")',
        graphicTabletImg:
          'url("./assets/home/tablet/image-graphic-design.jpg")',
        graphicDesktopImg:
          'url("./assets/home/desktop/image-graphic-design.jpg")',
      },
    },
  },
  plugins: [],
};
