import australiaImg from "./assets/shared/desktop/illustration-australia.svg";
import canadaImg from "./assets/shared/desktop/illustration-canada.svg";
import unitedKingdomImg from "./assets/shared/desktop/illustration-united-kingdom.svg";
import appMobileImg from "./assets/home/mobile/image-app-design.jpg";
import appTabletImg from "./assets/home/tablet/image-app-design.jpg";
import appDesktopImg from "./assets/home/desktop/image-app-design.jpg";
import webMobileImg from "./assets/home/mobile/image-web-design.jpg";
import webTabletImg from "./assets/home/tablet/image-web-design.jpg";
import webDesktopSmallImg from "./assets/home/desktop/image-web-design-small.jpg";
import webDesktopLargeImg from "./assets/home/desktop/image-web-design-large.jpg";
import graphicMobileImg from "./assets/home/mobile/image-graphic-design.jpg";
import graphicTabletImg from "./assets/home/tablet/image-graphic-design.jpg";
import graphicDesktopImg from "./assets/home/desktop/image-graphic-design.jpg";

export const incentiveLocationData = [
  { img: canadaImg, title: "CANADA" },
  { img: australiaImg, title: "AUSTRALIA" },
  { img: unitedKingdomImg, title: "UNITED KINGDOM" },
];

export const navLinks = [
  { link: "our company", to: "about" },
  { link: "location", to: "location" },
  { link: "contact", to: "contact" },
];

export const homeDesignCardData = [
  {
    name: "web designs",
    mobileImg: webMobileImg,
    tabletImg: webTabletImg,
    desktopImg: webDesktopLargeImg,
  },
  {
    name: "app designs",
    mobileImg: appMobileImg,
    tabletImg: appTabletImg,
    desktopImg: appDesktopImg,
  },
  {
    name: "graphics designs",
    mobileImg: graphicMobileImg,
    tabletImg: graphicTabletImg,
    desktopImg: graphicDesktopImg,
  },
];
