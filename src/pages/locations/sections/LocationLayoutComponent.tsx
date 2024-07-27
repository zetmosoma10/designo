import React from "react";
import MapComponent from "../components/MapComponent";
import LocationDetails from "../components/LocationDetails";

const LocationLayoutComponent = () => {
  return (
    <section className="space-y-10 md:space-y-28  md:max-container lg:space-y-8">
      <div className="location ">
        <div className="order-1 lg:order-2 md:rounded-3xl md:overflow-hidden lg:w-[350px] ">
          <MapComponent />
        </div>
        <div className="order-2 lg:order-1 w-full">
          <LocationDetails />
        </div>
      </div>
      <div className="location">
        <div className=" md:rounded-3xl md:overflow-hidden lg:w-[350px]">
          <MapComponent />
        </div>
        <LocationDetails />
      </div>
      <div className="location">
        <div className="order-1 lg:order-2 md:rounded-3xl md:overflow-hidden lg:w-[350px]">
          <MapComponent />
        </div>
        <div className="order-2 lg:order-1 w-full">
          <LocationDetails />
        </div>
      </div>
    </section>
  );
};

export default LocationLayoutComponent;
