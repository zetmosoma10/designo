import IncentiveGrid from "../../../components/IncentiveGrid";
import Incentive from "../components/Incentive";
import { incentivesData } from "../constance";

const Incentives = () => {
  return (
    <IncentiveGrid>
      {incentivesData.map((item) => (
        <Incentive key={item.text} {...item} />
      ))}
    </IncentiveGrid>
  );
};

export default Incentives;
