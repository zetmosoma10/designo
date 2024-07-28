import MapComponent from "../components/MapComponent";
import LocationDetails from "../components/LocationDetails";

const LocationLayoutComponent = () => {
  return (
    <section className="space-y-10 md:space-y-28  md:max-container lg:space-y-8">
      <div className="location ">
        <div className="order-1 lg:order-2 md:rounded-3xl md:overflow-hidden lg:w-[350px] ">
          <MapComponent
            latitude={-26.015959}
            longitude={27.999823}
            name="Matrixes Warehouse South Africa"
          />
        </div>
        <div className="order-2 lg:order-1 w-full">
          <LocationDetails
            country="South Africa"
            address1="Cedar Rd, Fourways"
            address2="Sandton, 2055"
            email="isometrixessouthafrica@gmail.com"
            phone="+27 72 883 9417"
          />
        </div>
      </div>
      <div className="location">
        <div className=" md:rounded-3xl md:overflow-hidden lg:w-[350px]">
          <MapComponent
            latitude={52.516939}
            longitude={13.389843}
            name="Matrixes Warehouse Germany"
          />
        </div>
        <LocationDetails
          country="Germany"
          address1="B2 21-19"
          address2="10117 Berlin"
          email="isometrixesgermany@gmail.com"
          phone="+49 89 12345678"
        />
      </div>
      <div className="location">
        <div className="order-1 lg:order-2 md:rounded-3xl md:overflow-hidden lg:w-[350px]">
          <MapComponent
            latitude={40.698829}
            longitude={-73.973889}
            name="Matrixes Warehouse USA"
          />
        </div>
        <div className="order-2 lg:order-1 w-full">
          <LocationDetails
            country="USA"
            address1="6th St, Brooklyn"
            address2="NY 11205, USA"
            email="isometrixesusa@gmail.com"
            phone="+1 25 411-4893"
          />
        </div>
      </div>
    </section>
  );
};

export default LocationLayoutComponent;
