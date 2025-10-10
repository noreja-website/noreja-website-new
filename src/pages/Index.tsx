import SimpleRectangleAnimation from "@/components/SimpleRectangleAnimation";
import { IntegratedHeroSection } from "@/components/IntegratedHeroSection";
import { PlaceholderImageSection } from "@/components/PlaceholderImageSection";
import LogoBanner from "@/components/LogoBanner";
import { USPsShowcase } from "@/components/USPsShowcase";
import { FunctionalitiesTeaser } from "@/components/FunctionalitiesTeaser";
import { HubSpotBlogTeaser } from "@/components/HubSpotBlogTeaser";
import { PartnerPhotosGrid } from "@/components/PartnerPhotosGrid";
import { FinalCTA } from "@/components/FinalCTA";
import { IntegrationsShowcase } from "@/components/IntegrationsShowcase";

const Index = () => {
  return (
    <>
      <IntegratedHeroSection />
      <LogoBanner />
      {/* <SimpleRectangleAnimation /> 
      TODO: kunden auch in banner anzeigen
      */}
      <PlaceholderImageSection />
      <USPsShowcase />
      <div className="bg-background">
        <PartnerPhotosGrid />
        <FunctionalitiesTeaser />
        <IntegrationsShowcase />
        <HubSpotBlogTeaser />
        <FinalCTA />
      </div>
    </>
  );
};

export default Index;
