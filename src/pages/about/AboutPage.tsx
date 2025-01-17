import AboutHero from "./components/AboutHero";
import TalentCard from "./components/TalentCard";
import IncentivesLocation from "../../components/IncentivesLocation";
import DealCard from "./components/DealCard";
import { Helmet } from "react-helmet-async";

const AboutPage = () => {
  return (
    <div className="md:space-y-[120px] lg:space-y-[160px]">
      <Helmet>
        <title>Disigno | About Us</title>
      </Helmet>
      <AboutHero />
      <TalentCard />
      <div className="my-[120px] md:my-0">
        <IncentivesLocation />
      </div>
      <DealCard />
    </div>
  );
};

export default AboutPage;
