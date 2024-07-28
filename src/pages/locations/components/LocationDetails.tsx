import React from "react";

interface Props {
  address1: string;
  address2: string;
  email: string;
  phone: string;
  country: string;
}

const LocationDetails = ({
  country,
  address1,
  address2,
  email,
  phone,
}: Props) => {
  return (
    <div
      className="bg-very_light_peach  w-full text-center py-20 px-6 md:text-left
        md:py-[88px] md:px-[74px] md:rounded-3xl"
    >
      <h2 className="text-peach font-medium text-3xl md:text-4xl">{country}</h2>
      <div className=" text-dark_grey mt-6 md:flex md:items-center md:space-x-[90px]">
        <ul>
          <li className="font-bold">Designo Central Office</li>
          <li>{address1}</li>
          <li>{address2}</li>
        </ul>
        <ul className="mt-6 md:mt-0">
          <li className="font-bold">Contact Us (Central Office)</li>
          <li>P : {email}</li>
          <li>M : {phone}</li>
        </ul>
      </div>
    </div>
  );
};

export default LocationDetails;
