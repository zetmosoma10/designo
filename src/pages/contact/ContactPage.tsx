import IncentivesLocation from "../../components/IncentivesLocation";
import Contacts from "./sections/Contacts";

const ContactPage = () => {
  return (
    <div className="space-y-[120px] lg:space-y-[160px]">
      <Contacts />
      <IncentivesLocation />
    </div>
  );
};

export default ContactPage;
