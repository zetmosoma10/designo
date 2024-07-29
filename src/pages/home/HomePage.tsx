import DesignsShowGrid from "../../components/DesignsShowGrid";
import Incentives from "./sections/Incentives";
import Hero from "./sections/Hero";

const HomePage = () => {
  return (
    <div className="space-y-[120px] lg:space-y-[160px]">
      <Hero />
      <DesignsShowGrid />
      <Incentives />
    </div>
  );
};

export default HomePage;
