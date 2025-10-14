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
        <AnimatedGridBackground key="animated-grid-v2" />
        <IntegratedHeroSection />
        <LogoBanner />
        {/* <SimpleRectangleAnimation /> 
        TODO: kunden auch in banner anzeigen
        */}
        <PlaceholderImageSection />
      </div>
      
      <USPsShowcase />
      
      {/* PartnerPhotosGrid with animated grid background */}
      <div className="relative">
        <AnimatedGridBackground key="animated-grid-partners" />
        <div className="relative z-10">
          <PartnerPhotosGrid />
        </div>
      </div>
      
      {/* TODO: add workbench to features teaser */}
      <FunctionalitiesTeaser />
      
      {/* IntegrationsShowcase with animated grid background */}
      <div className="relative">
        <AnimatedGridBackground key="animated-grid-integrations" />
        <div className="relative z-10">
          <IntegrationsShowcase />
        </div>
      </div>
      
      <div className="bg-background">
        <HubSpotBlogTeaser />
        <FinalCTA />
      </div>
    </>
  );
};

export default Index;
