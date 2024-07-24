import React from "react";
import DesktopImg from "../../../assets/about/desktop/image-world-class-talent-d.jpg";
import MobileImg from "../../../assets/about/mobile/image-world-class-talent-m.jpg";
import TabletImg from "../../../assets/about/tablet/image-world-class-talent-t.jpg";

console.log(DesktopImg);
console.log(MobileImg);
console.log(TabletImg);

const Card = () => {
  return (
    <div className="grid lg:grid-cols-2 md:max-container md:rounded-3xl md:overflow-hidden">
      <picture className="w-full block">
        <source media="(max-width:767px)" srcSet={MobileImg} />
        <source
          media="(min-width:768px) and (max-width:1023px)"
          srcSet={TabletImg}
        />
        <source media="(min-width:1110px)" srcSet={DesktopImg} />
        <img className="w-full block" src={DesktopImg} alt="" />
      </picture>
      <div
        className="bgCircle bg-very_light_peach text-center lg:text-left py-20 px-6 md:px-14 md:py-16
        lg:px-16 lg:flex lg:items-center lg:justify-center"
      >
        <div>
          <h2 className="font-medium text-peach text-3xl md:text-4xl">
            World-class talent
          </h2>
          <p className="text-base text-dark_grey mt-6">
            We are a crew of strategists, problem-solvers, and technologists.
            Every design is thoughtfully crafted from concept to launch,
            ensuring success in its given market. We are constantly updating our
            skills in a myriad of platforms.
          </p>
          <p className="text-base text-dark_grey mt-3">
            Our team is multi-disciplinary and we are not merely interested in
            form — content and meaning are just as important. We give great
            importance to craftsmanship, service, and prompt delivery. Clients
            have always been impressed with our high-quality outcomes that
            encapsulates their brand’s story and mission.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
