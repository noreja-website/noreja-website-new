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
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background pointer-events-none z-0" />
      </div>
      
      {/* USPsShowcase with gradient background */}
      <div className="relative" style={{
        background: `
          linear-gradient(135deg, hsl(var(--background)) 0%, hsl(var(--noreja-main) / 0.14) 50%, hsl(var(--background)) 100%),
          radial-gradient(ellipse 1000px 800px at 50% 50%, hsl(var(--noreja-secondary) / 0.10) 0%, transparent 60%)
        `
      }}>
        {/* Gradient fade from previous section */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent pointer-events-none z-0" />
        {/* Gradient fade to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background pointer-events-none z-0" />
        <div className="relative z-10">
          <USPsShowcase />
        </div>
      </div>
      
      {/* PartnerPhotosGrid with animated grid background */}
      <div className="relative">
        <AnimatedGridBackground key="animated-grid-partners" />
        {/* Gradient fade from previous section */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent pointer-events-none z-0" />
        {/* Gradient fade to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background pointer-events-none z-0" />
        <div className="relative z-10">
          <PartnerPhotosGrid />
        </div>
      </div>
      
      {/* FunctionalitiesTeaser with gradient background */}
      <div className="relative" style={{
        background: `
          linear-gradient(45deg, hsl(var(--background)) 0%, hsl(var(--noreja-secondary) / 0.12) 30%, hsl(var(--background)) 100%),
          radial-gradient(ellipse 1200px 900px at 30% 70%, hsl(var(--noreja-main) / 0.08) 0%, transparent 60%)
        `
      }}>
        {/* Gradient fade from previous section */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent pointer-events-none z-0" />
        {/* Gradient fade to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background pointer-events-none z-0" />
        <div className="relative z-10">
          {/* TODO: add workbench to features teaser */}
          <FunctionalitiesTeaser />
        </div>
      </div>
      
      {/* IntegrationsShowcase with animated grid background */}
      <div className="relative">
        <AnimatedGridBackground key="animated-grid-integrations" />
        {/* Gradient fade from previous section */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-background to-transparent pointer-events-none z-10" />
        {/* Gradient fade to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-background pointer-events-none z-10" />
        <div className="relative z-0">
          <IntegrationsShowcase />
        </div>
      </div>
      
      {/* Blog and CTA section with gradient background */}
      <div className="relative" style={{
        background: `
          linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--noreja-main) / 0.16) 40%, hsl(var(--noreja-secondary) / 0.15) 80%, hsl(var(--background)) 100%),
          radial-gradient(ellipse 1000px 700px at 70% 20%, hsl(var(--noreja-secondary) / 0.14) 0%, transparent 60%)
        `
      }}>
        {/* Gradient fade from previous section */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent pointer-events-none z-0" />
        <div className="relative z-10">
          <HubSpotBlogTeaser />
          <FinalCTA />
        </div>
      </div>
    </>
  );
};

export default Index;
