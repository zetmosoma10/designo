import DesignsHeader from "../../components/DesignsHeaders/DesignsHeader";
import DesignsTitle from "../../components/DesignsHeaders/DesignsTitle";
import DesignsText from "../../components/DesignsHeaders/DesignsText";
import DesignMultiGrid from "../../components/DesignMultiGrid";
import DesignCard from "../../components/DesignCard";
import DesignShowCard from "../../components/DesignShowCard";
import { appDesignData } from "./constance";

const AppDesignPage = () => {
  return (
    <div className="space-y-[120px] md:space-y-[160px]">
      <DesignsHeader>
        <DesignsTitle>App Design</DesignsTitle>
        <DesignsText>
          Our mobile designs bring intuitive digital solutions to your customers
          right at their fingertips.
        </DesignsText>
      </DesignsHeader>
      <DesignMultiGrid>
        {appDesignData.map((card) => (
          <DesignCard key={card.header} {...card} />
        ))}
      </DesignMultiGrid>
      <div className="grid lg:grid-cols-2 gap-x-7 gap-y-6 max-container">
        <DesignShowCard
          title="Web Designs"
          to="/web-designs"
          mobileBgImg="bg-webMobileImg"
          tabletBgImg="md:bg-webTabletImg"
          desktopBgImg="lg:bg-webDesktopSmallImg"
        />
        <DesignShowCard
          title="Graphic Designs"
          to="/graphic-designs"
          mobileBgImg="bg-graphicMobileImg"
          tabletBgImg="md:bg-graphicTabletImg"
          desktopBgImg="lg:bg-graphicDesktopImg"
        />
      </div>
    </div>
  );
};

export default AppDesignPage;
