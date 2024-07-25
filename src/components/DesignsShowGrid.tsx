import AppDesignCard from "./AppDesignCard";
import WebDesignCard from "./WebDesignCard";

const DesignsShowGrid = () => {
  return (
    <section className="grid">
      <WebDesignCard />
      <div>
        <AppDesignCard />
      </div>
    </section>
  );
};

export default DesignsShowGrid;
