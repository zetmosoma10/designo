import mobileImg from "../../../assets/about/mobile/image-real-deal.jpg";
import tabletImg from "../../../assets/about/tablet/image-real-deal.jpg";
import desktopImg from "../../../assets/about/desktop/image-real-deal.jpg";

const DealCard = () => {
  return (
    <div className="card-container">
      <picture className="w-full block order-1 lg:order-2">
        <source media="(max-width:767px)" srcSet={mobileImg} />
        <source
          media="(min-width:768px) and (max-width:1023px)"
          srcSet={tabletImg}
        />
        <source media="(min-width:1110px)" srcSet={desktopImg} />
        <img className="w-full block" src={desktopImg} alt="" />
      </picture>
      <div className="bgCircle card-body order-2 lg:order-1">
        <div>
          <h2 className="font-medium text-peach text-3xl md:text-4xl">
            The real deal
          </h2>
          <p className="text-base text-dark_grey mt-6">
            As strategic partners in our clients’ businesses, we are ready to
            take on any challenge as our own. Solving real problems require
            empathy and collaboration, and we strive to bring a fresh
            perspective to every opportunity. We make design and technology more
            accessible and give you tools to measure success.
          </p>
          <p className="text-base text-dark_grey mt-3">
            We are visual storytellers in appealing and captivating ways. By
            combining business and marketing strategies, we inspire audiences to
            take action and drive real results.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DealCard;
