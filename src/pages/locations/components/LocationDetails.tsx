import React from "react";

const LocationDetails = () => {
  return (
    <div
      className="bg-very_light_peach text-center py-20 px-6 md:text-left
        md:py-[88px] md:px-[74px] md:max-container md:rounded-3xl"
    >
      <h2 className="text-peach font-medium text-3xl md:text-4xl">Canada</h2>
      <div className=" text-dark_grey mt-6 md:flex md:items-center md:space-x-[90px]">
        <ul>
          <li className="font-bold">Designo Central Office</li>
          <li>3886 Wellington Street</li>
          <li>Toronto, Ontario M9C 3J5</li>
        </ul>
        <ul className="mt-6 md:mt-0">
          <li className="font-bold">Contact Us (Central Office)</li>
          <li>P : +1 253-863-8967</li>
          <li>M : contact@designo.co</li>
        </ul>
      </div>
    </div>
  );
};

export default LocationDetails;
