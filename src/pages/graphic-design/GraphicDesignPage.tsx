import { Helmet } from "react-helmet-async";
import DesignCard from "../../components/DesignCard";
import DesignMultiGrid from "../../components/DesignMultiGrid";
import DesignsHeader from "../../components/DesignsHeaders/DesignsHeader";
import DesignsText from "../../components/DesignsHeaders/DesignsText";
import DesignsTitle from "../../components/DesignsHeaders/DesignsTitle";
import DesignShowCard from "../../components/DesignShowCard";
import { graphicDesignData } from "./constance";

const GraphicDesignPage = () => {
  return (
    <div className="space-y-[120px] md:space-y-[160px]">
      <Helmet>
        <title>Disigno | Graphic Designs</title>
      </Helmet>
      <DesignsHeader>
        <DesignsTitle>Graphic Design</DesignsTitle>
        <DesignsText>
          We deliver eye-catching branding materials that are tailored to meet
          your business objectives.
        </DesignsText>
      </DesignsHeader>
      <DesignMultiGrid>
        {graphicDesignData.map((card) => (
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

export default GraphicDesignPage;
