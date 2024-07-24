import React from "react";
import MobileImg from "../../../assets/about/mobile/image-about-hero.jpg";
import TabletImg from "../../../assets/about/tablet/image-about-hero.jpg";
import DesktopImg from "../../../assets/about/desktop/image-about-hero.jpg";

const AboutHero = () => {
  return (
    <div className="card-container">
      <picture className="w-full block order-1 lg:order-2">
        <source media="(max-width:767px)" srcSet={MobileImg} />
        <source
          media="(min-width:768px) and (max-width:1023px)"
          srcSet={TabletImg}
        />
        <source media="(min-width:1110px)" srcSet={DesktopImg} />
        <img className="w-full block" src={DesktopImg} alt="" />
      </picture>
      <div className="bgCircle card-body text-white bg-peach order-2 lg:order-1">
        <div>
          <h2 className="font-medium text-3xl md:text-4xl">About Us</h2>
          <p className="text-base mt-6">
            Founded in 2010, we are a creative agency that produces lasting
            results for our clients. We’ve partnered with many startups,
            corporations, and nonprofits alike to craft designs that make real
            impact. We’re always looking forward to creating brands, products,
            and digital experiences that connect with our clients’ audiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
