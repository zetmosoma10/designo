import DesignCard from "../../components/DesignCard";
import DesignMultiGrid from "../../components/DesignMultiGrid";
import DesignsHeader from "../../components/DesignsHeaders/DesignsHeader";
import DesignsText from "../../components/DesignsHeaders/DesignsText";
import DesignsTitle from "../../components/DesignsHeaders/DesignsTitle";
import DesignShowCard from "../../components/DesignShowCard";
import { webDesignData } from "./constance";

const WebDesignPage = () => {
  return (
    <div className="space-y-[120px] md:space-y-[160px]">
      <DesignsHeader>
        <DesignsTitle>Web Design</DesignsTitle>
        <DesignsText>
          We build websites that serve as powerful marketing tools and bring
          memorable brand experiences.
        </DesignsText>
      </DesignsHeader>
      <DesignMultiGrid>
        {webDesignData.map((card) => (
          <DesignCard key={card.header} {...card} />
        ))}
      </DesignMultiGrid>
      <div className="grid lg:grid-cols-2 gap-x-7 gap-y-6 max-container">
        <DesignShowCard
          title="Graphic Designs"
          to="/graphic-designs"
          mobileBgImg="bg-graphicMobileImg"
          tabletBgImg="md:bg-graphicTabletImg"
          desktopBgImg="lg:bg-graphicDesktopImg"
        />
        <DesignShowCard
          title="App Designs"
          to="/app-designs"
          mobileBgImg="bg-appMobileImg"
          tabletBgImg="md:bg-appTabletImg"
          desktopBgImg="lg:bg-appDesktopImg"
        />
      </div>
    </div>
  );
};

export default WebDesignPage;
