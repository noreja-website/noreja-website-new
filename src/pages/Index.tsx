import SimpleRectangleAnimation from "@/components/SimpleRectangleAnimation";
import { IntegratedHeroSection } from "@/components/IntegratedHeroSection";
import LogoBanner from "@/components/LogoBanner";
import { ProcessGraphSection } from "@/components/ProcessGraphSection";
import { USPsShowcase } from "@/components/USPsShowcase";
import { FunctionalitiesTeaser } from "@/components/FunctionalitiesTeaser";
import { HubSpotBlogTeaser } from "@/components/HubSpotBlogTeaser";
import { PartnersTeaser } from "@/components/PartnersTeaser";
import { FinalCTA } from "@/components/FinalCTA";
import { IntegrationsShowcase } from "@/components/IntegrationsShowcase";

const Index = () => {
  return (
    <>
      <IntegratedHeroSection />
      <LogoBanner />
      <SimpleRectangleAnimation />
      <USPsShowcase />
      <div className="bg-background">
        <FunctionalitiesTeaser />
        <HubSpotBlogTeaser />
        <PartnersTeaser />
        <IntegrationsShowcase />
        <FinalCTA />
      </div>
    </>
  );
};

export default Index;
