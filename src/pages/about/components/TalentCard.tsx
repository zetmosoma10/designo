import DesktopImg from "../../../assets/about/desktop/image-world-class-talent-d.jpg";
import MobileImg from "../../../assets/about/mobile/image-world-class-talent-m.jpg";
import TabletImg from "../../../assets/about/tablet/image-world-class-talent-t.jpg";

const TalentCard = () => {
  return (
    <div className="card-container">
      <picture className="w-full block">
        <source media="(max-width:767px)" srcSet={MobileImg} />
        <source
          media="(min-width:768px) and (max-width:1023px)"
          srcSet={TabletImg}
        />
        <source media="(min-width:1110px)" srcSet={DesktopImg} />
        <img className="w-full block" src={DesktopImg} alt="" />
      </picture>
      <div className="bgCircle card-body">
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

export default TalentCard;
