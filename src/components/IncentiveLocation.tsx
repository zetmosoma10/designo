import Button from "./Button";

interface Props {
  img: string;
  title: string;
}

const IncentiveLocation = ({ img, title }: Props) => {
  return (
    <div className="flex flex-col gap-12 items-center text-dark_grey text-center">
      <div className="bg-[#5D0202] bg-opacity-5 rounded-full">
        <img src={img} alt="" />
      </div>
      <div>
        <h4 className="font-medium text-xl tracking-[5px] mb-8">{title}</h4>
        <Button className="bg-peach hover:bg-light_peach text-white">
          SEE LOCATION
        </Button>
      </div>
    </div>
  );
};

export default IncentiveLocation;
