import { Helmet } from "react-helmet-async";
import LocationLayoutComponent from "./sections/LocationLayoutComponent";
import { motion } from "framer-motion";

const containerVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.5,
    },
  },
};
const LocationPage = () => {
  return (
    <motion.section
      variants={containerVariant}
      initial="hidden"
      animate="visible"
    >
      <Helmet>
        <title>Disigno | Locations</title>
      </Helmet>
      <LocationLayoutComponent />
    </motion.section>
  );
};

export default LocationPage;
