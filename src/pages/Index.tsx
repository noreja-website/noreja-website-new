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
import { AnimatedGridBackground } from "@/components/AnimatedGridBackground";

const Index = () => {
  return (
    <>
      {/* Sections with animated grid background */}
      <div className="relative">
        <AnimatedGridBackground />
        <IntegratedHeroSection />
        <LogoBanner />
        {/* <SimpleRectangleAnimation /> 
        TODO: kunden auch in banner anzeigen
        */}
        <PlaceholderImageSection />
      </div>
      
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
