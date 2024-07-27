import { Link } from "react-router-dom";

interface Props {
  title: string;
  to: string;
  mobileBgImg: string;
  tabletBgImg: string;
  desktopBgImg: string;
}

const DesignShowCard = ({
  to,
  title,
  mobileBgImg,
  tabletBgImg,
  desktopBgImg,
}: Props) => {
  return (
    <div
      className={`relative bg-dark_grey py-[90px] md:py-[53px] lg:py-[100px] group flex items-center justify-center ${mobileBgImg}  
        md:${tabletBgImg} lg:${desktopBgImg} 
        bg-center bg-cover rounded-3xl cursor-pointer`}
    >
      <Link to={to}>
        <div className="custom-overlay"></div>
        <div className="text-white text-center z-10">
          <h3 className="font-medium text-3xl md:text-4xl tracking-[1.4px] md:tracking-[2px] uppercase">
            {title}
          </h3>
          <p className="arrow-right text-base tracking-[5px] uppercase mt-3 md:mt-6">
            view projects
          </p>
        </div>
      </Link>
    </div>
  );
};

export default DesignShowCard;
