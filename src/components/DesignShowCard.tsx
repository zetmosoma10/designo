const DesignShowCard = () => {
  return (
    <div
      className="relative group flex items-center justify-center h-[500px] bg-[url('./assets/home/mobile/image-web-design.jpg')]  
      md:bg-[url('./assets/home/tablet/image-web-design.jpg')] lg:bg-[url('./assets/home/desktop/image-web-design-large.jpg')] bg-center bg-cover rounded-3xl cursor-pointer "
    >
      <div className="absolute top-0 left-0 w-full h-full group-hover:bg-peach rounded-3xl group-hover:bg-opacity-70"></div>
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

export default DesignShowCard;
