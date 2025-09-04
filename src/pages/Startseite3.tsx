import { ProcessDiscoveryAnimation } from "@/components/ProcessDiscoveryAnimation";
import { FunctionalitiesTeaser } from "@/components/FunctionalitiesTeaser";
import { HubSpotBlogTeaser } from "@/components/HubSpotBlogTeaser";
import { PartnersTeaser } from "@/components/PartnersTeaser";
import { FinalCTA } from "@/components/FinalCTA";

const Startseite3 = () => {
  return (
    <>
      <ProcessDiscoveryAnimation />
      <div className="relative z-20 bg-background">
        <FunctionalitiesTeaser />
        <HubSpotBlogTeaser />
        <PartnersTeaser />
        <FinalCTA />
      </div>
    </>
  );
};

export default Startseite3;


