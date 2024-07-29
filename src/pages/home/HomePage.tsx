import DesignsShowGrid from "../../components/DesignsShowGrid";
import Incentives from "./sections/Incentives";
import Hero from "./sections/Hero";
import { Helmet } from "react-helmet-async";

const HomePage = () => {
  return (
    <div className="space-y-[120px] lg:space-y-[160px]">
      <Helmet>
        <title>Disigno | Home</title>
      </Helmet>
      <Hero />
      <DesignsShowGrid />
      <Incentives />
    </div>
  );
};

export default HomePage;
