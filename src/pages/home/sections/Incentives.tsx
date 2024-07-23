import Incentive from "../components/Incentive";
import { incentivesData } from "../constance";

const Incentives = () => {
  return (
    <section className="max-container grid gap-y-20 md:gap-y-8 lg:gap-x-8 lg:grid-cols-3 ">
      {incentivesData.map((item) => (
        <Incentive key={item.text} {...item} />
      ))}
    </section>
  );
};

export default Incentives;
