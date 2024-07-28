import DesignShowCard from "./DesignShowCard";

const DesignsShowGrid = () => {
  return (
    <section className="max-container grid gap-y-6 lg:grid-cols-2 gap-x-[30px] ">
      <DesignShowCard
        title="Web Designs"
        to="/web-designs"
        mobileBgImg="bg-webMobileImg"
        tabletBgImg="bg-webTabletImg"
        desktopBgImg="bg-webDesktopLargeImg"
      />
      <div className="grid gap-y-6">
        <DesignShowCard
          title="App Designs"
          to="/app-designs"
          mobileBgImg="bg-appMobileImg"
          tabletBgImg="bg-appTabletImg"
          desktopBgImg="bg-appDesktopImg"
        />
        <DesignShowCard
          title="Graphic Designs"
          to="/graphic-designs"
          mobileBgImg="bg-graphicMobileImg"
          tabletBgImg="bg-graphicTabletImg"
          desktopBgImg="bg-graphicDesktopImg"
        />
      </div>
    </section>
  );
};

export default DesignsShowGrid;
