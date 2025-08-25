import { IntegratedHeroSection } from "@/components/IntegratedHeroSection";
import { ProcessGraphSection } from "@/components/ProcessGraphSection";
import { FunctionalitiesTeaser } from "@/components/FunctionalitiesTeaser";
import { HubSpotBlogTeaser } from "@/components/HubSpotBlogTeaser";
import { PartnersTeaser } from "@/components/PartnersTeaser";
import { FinalCTA } from "@/components/FinalCTA";

const Index = () => {
  return (
    <>
      <IntegratedHeroSection />
      <ProcessGraphSection />
      <FunctionalitiesTeaser />
      <HubSpotBlogTeaser />
      <PartnersTeaser />
      <FinalCTA />
    </>
  );
};

export default Index;
