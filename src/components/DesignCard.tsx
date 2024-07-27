import React from "react";
import img from "../assets/app-design/desktop/image-loopstudios.jpg";

const DesignCard = () => {
  return (
    <article className="grid lg:grid-cols-1 rounded-3xl  overflow-hidden">
      <img className="w-full" src={img} alt="" />
      <div className=" bg-very_light_peach text-center p-8">
        <div>
          <h4 className="text-peach font-medium text-xl tracking-[5px]">
            TRANSFER
          </h4>
          <p className="text-dark_grey text-base mt-6">
            Site for low-cost money transfers and sending money within seconds
          </p>
        </div>
      </div>
    </article>
  );
};

export default DesignCard;
