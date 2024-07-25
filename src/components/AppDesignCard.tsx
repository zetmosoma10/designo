import React from "react";

const AppDesignCard = () => {
  return (
    <div
      className="relative group flex items-center justify-center h-[500px] bg-appMobileImg  
      md:bg-appTabletImg lg:bg-appDesktopImg 
      bg-center bg-cover rounded-3xl cursor-pointer"
    >
      <div className="custom-overlay"></div>
      <div className="text-white text-center z-10">
        <h3 className="font-medium text-3xl md:text-4xl tracking-[1.4px] md:tracking-[2px] uppercase">
          App Designs
        </h3>
        <p className="arrow-right text-base tracking-[5px] uppercase mt-3 md:mt-6">
          view projects
        </p>
      </div>
    </div>
  );
};

export default AppDesignCard;
