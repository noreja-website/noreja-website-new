import { IntegratedHeroSection } from "@/components/IntegratedHeroSection";
import { ProcessGraphSection } from "@/components/ProcessGraphSection";
import { FunctionalitiesTeaser } from "@/components/FunctionalitiesTeaser";
import { HubSpotBlogTeaser } from "@/components/HubSpotBlogTeaser";
import { PartnersTeaser } from "@/components/PartnersTeaser";
import { FinalCTA } from "@/components/FinalCTA";
import { AnimatedGridBackground } from "@/components/AnimatedGridBackground";

const Startseite2 = () => {
  return (
    <div className="relative">
      <AnimatedGridBackground className="z-0" />
      <div className="relative z-10">
        <IntegratedHeroSection />
        <ProcessGraphSection />
        <FunctionalitiesTeaser />
        <HubSpotBlogTeaser />
        <PartnersTeaser />
        <FinalCTA />
      </div>
    </div>
  );
};

export default Startseite2;


