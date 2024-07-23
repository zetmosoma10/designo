import friendly from "../../../assets/home/desktop/illustration-friendly.svg";

const Incentive = () => {
  return (
    <article
      className="border border-red-500 flex flex-col gap-12 items-center  text-dark_grey text-center
        md:flex-row md:text-left lg:text-center lg:flex-col"
    >
      <div className="bg-[#5D0202] bg-opacity-5 rounded-full">
        <img src={friendly} alt="" />
      </div>
      <div>
        <h4 className="font-medium text-xl tracking-[5px]">FRIENDLY</h4>
        <p className="text-base mt-8 md:mt-4 lg:mt-8">
          We are a group of enthusiastic folks who know how to put people first.
          Our success depends on our customers, and we strive to give them the
          best experience a company can provide.
        </p>
      </div>
    </article>
  );
};

export default Incentive;
