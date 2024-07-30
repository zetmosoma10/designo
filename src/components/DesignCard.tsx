import { Link } from "react-router-dom";

interface Props {
  img: string;
  header: string;
  text: string;
  to: string;
}
const DesignCard = ({ img, header, text, to }: Props) => {
  return (
    <Link
      to={to}
      target="_blank"
      rel="noopener noreferrer"
      className="grid lg:grid-cols-1 group rounded-3xl hover:shadow-xl  overflow-hidden"
    >
      <img className="w-full" src={img} alt="" />
      <div className=" bg-very_light_peach text-center p-8 group-hover:bg-peach">
        <div>
          <h4 className="text-peach group-hover:text-white font-medium text-xl tracking-[5px]">
            {header}
          </h4>
          <p className="text-dark_grey group-hover:text-white text-base mt-6">
            {text}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default DesignCard;
