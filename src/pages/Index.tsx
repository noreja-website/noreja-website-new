import { HeroSection } from "@/components/HeroSection";
import { DownloadGate } from "@/components/DownloadGate";

const Index = () => {
  return (
    <>
      <HeroSection />
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Downloads</h2>
            <p className="text-muted-foreground">Get started with our comprehensive resources</p>
          </div>
          <DownloadGate embedded />
        </div>
      </section>
    </>
  );
};

export default Index;
