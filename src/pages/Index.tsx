import { ProcessMiningHero } from "@/components/ProcessMiningHero";
import { ProcessGraphSection } from "@/components/ProcessGraphSection";
import { FunctionalitiesTeaser } from "@/components/FunctionalitiesTeaser";
import { HubSpotBlogTeaser } from "@/components/HubSpotBlogTeaser";
import { PartnersTeaser } from "@/components/PartnersTeaser";
import { FinalCTA } from "@/components/FinalCTA";

const Index = () => {
  return (
    <>
      <ProcessMiningHero />
      <ProcessGraphSection />
      <FunctionalitiesTeaser />
      <HubSpotBlogTeaser />
      <PartnersTeaser />
      <FinalCTA />
    </>
  );
};

export default Index;
