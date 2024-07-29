import { motion } from "framer-motion";
import React from "react";

interface Props {
  children: React.ReactNode;
}

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

const DesignsHeader = ({ children }: Props) => {
  return (
    <motion.div
      className="bgCircle bg-peach bgCircle text-center text-white py-[105px] px-6 
        md:max-container md:rounded-2xl md:py-16"
      variants={containerVariant}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-[384px] mx-auto">{children}</div>
    </motion.div>
  );
};

export default DesignsHeader;
