const WebDesignCard = () => {
  return (
    <div
      className="relative bg-dark_grey py-[90px] md:py-[53px] group flex items-center justify-center bg-webMobileImg  
      md:bg-webTabletImg lg:bg-webDesktopLargeImg 
      bg-center bg-cover rounded-3xl cursor-pointer"
    >
      <div className="custom-overlay"></div>
      <div className="text-white text-center z-10">
        <h3 className="font-medium text-3xl md:text-4xl tracking-[1.4px] md:tracking-[2px] uppercase">
          Web Designs
        </h3>
        <p className="arrow-right text-base tracking-[5px] uppercase mt-3 md:mt-6">
          view projects
        </p>
      </div>
    </div>
  );
};

export default WebDesignCard;
