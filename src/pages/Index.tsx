import SimpleRectangleAnimation from "@/components/SimpleRectangleAnimation";
import { IntegratedHeroSection } from "@/components/IntegratedHeroSection";
import { PlaceholderImageSection } from "@/components/PlaceholderImageSection";
import LogoBanner from "@/components/LogoBanner";
import { ProcessGraphSection } from "@/components/ProcessGraphSection";
import { USPsShowcase } from "@/components/USPsShowcase";
import { FunctionalitiesTeaser } from "@/components/FunctionalitiesTeaser";
import { HubSpotBlogTeaser } from "@/components/HubSpotBlogTeaser";
import { PartnersTeaser } from "@/components/PartnersTeaser";
import { PartnerPhotosGrid } from "@/components/PartnerPhotosGrid";
import { FinalCTA } from "@/components/FinalCTA";
import { IntegrationsShowcase } from "@/components/IntegrationsShowcase";

const Index = () => {
  return (
    <>
      <IntegratedHeroSection />
      <LogoBanner />
      {/* <SimpleRectangleAnimation /> */}
      <PlaceholderImageSection />
      <USPsShowcase />
      <div className="bg-background">
        <FunctionalitiesTeaser />
        <PartnerPhotosGrid />
        <IntegrationsShowcase />
        <HubSpotBlogTeaser />
        <FinalCTA />
      </div>
    </>
  );
};

export default Index;
