interface Props {
  img: string;
  title: string;
  text: string;
}

const Incentive = ({ img, title, text }: Props) => {
  return (
    <article
      className="flex flex-col gap-12 items-center  text-dark_grey text-center
        md:flex-row md:text-left lg:text-center lg:flex-col"
    >
      <div className="incentive-circle">
        <img src={img} alt="" />
      </div>
      <div>
        <h4 className="font-medium text-xl tracking-[5px]">{title}</h4>
        <p className="text-base mt-8 md:mt-4 lg:mt-8">{text}</p>
      </div>
    </article>
  );
};

export default Incentive;
