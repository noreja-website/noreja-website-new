import { MinimalHeroSection } from "@/components/MinimalHeroSection";
import { FunctionalitiesTeaser } from "@/components/FunctionalitiesTeaser";
import { HubSpotBlogTeaser } from "@/components/HubSpotBlogTeaser";
import { PartnersTeaser } from "@/components/PartnersTeaser";
import { FinalCTA } from "@/components/FinalCTA";

const Startseite3 = () => {
  return (
    <div className="relative">
      <MinimalHeroSection />
      <div className="relative bg-background">
        <FunctionalitiesTeaser />
        <HubSpotBlogTeaser />
        <PartnersTeaser />
        <FinalCTA />
      </div>
    </div>
  );
};

export default Startseite3;


