import React from "react";
import MapComponent from "./MapComponent";
import LocationDetails from "./LocationDetails";

const LocationLayoutComponent = () => {
  return (
    <div className="flex flex-col md:gap-8 md:max-container lg:flex-row lg:justify-self-start lg:items-center">
      <div className=" md:rounded-3xl md:overflow-hidden lg:w-[350px]">
        <MapComponent />
      </div>
      <LocationDetails />
    </div>
  );
};

export default LocationLayoutComponent;
