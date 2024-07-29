import { Helmet } from "react-helmet-async";
import IncentivesLocation from "../../components/IncentivesLocation";
import Contacts from "./sections/Contacts";

const ContactPage = () => {
  return (
    <div className="space-y-[120px] lg:space-y-[160px]">
      <Helmet>
        <title>Disigno | Contacts</title>
      </Helmet>
      <Contacts />
      <IncentivesLocation />
    </div>
  );
};

export default ContactPage;
