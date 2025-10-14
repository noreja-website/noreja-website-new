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
        {/* Gradient fade to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background pointer-events-none z-10" />
      </div>
      
      <USPsShowcase />
      
      {/* PartnerPhotosGrid with animated grid background */}
      <div className="relative">
        <AnimatedGridBackground key="animated-grid-partners" />
        {/* Gradient fade from previous section */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent pointer-events-none z-10" />
        {/* Gradient fade to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background pointer-events-none z-10" />
        <div className="relative z-10">
          <PartnerPhotosGrid />
        </div>
      </div>
      
      {/* TODO: add workbench to features teaser */}
      <FunctionalitiesTeaser />
      
      {/* IntegrationsShowcase with animated grid background */}
      <div className="relative">
        <AnimatedGridBackground key="animated-grid-integrations" />
        {/* Gradient fade from previous section */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent pointer-events-none z-10" />
        {/* Gradient fade to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background pointer-events-none z-10" />
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
