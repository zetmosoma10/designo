import AppDesignCard from "./AppDesignCard";
import GraphicDesignCard from "./GraphicDesignCard";
import WebDesignCard from "./WebDesignCard";

const DesignsShowGrid = () => {
  return (
    <section className="grid gap-y-6 lg:grid-cols-2 gap-x-[30px]">
      <WebDesignCard />
      <div className="grid gap-y-6">
        <AppDesignCard />
        <GraphicDesignCard />
      </div>
    </section>
  );
};

export default DesignsShowGrid;
