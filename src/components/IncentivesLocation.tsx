import { incentiveLocationData } from "../constance";
import IncentiveGrid from "./IncentiveGrid";
import IncentiveLocation from "./IncentiveLocation";

const IncentivesLocation = () => {
  return (
    <IncentiveGrid>
      {incentiveLocationData.map((item) => (
        <IncentiveLocation key={item.title} {...item} />
      ))}
    </IncentiveGrid>
  );
};

export default IncentivesLocation;
