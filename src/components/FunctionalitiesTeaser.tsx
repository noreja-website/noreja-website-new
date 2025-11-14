import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Brain, Search, LayoutDashboard, Wrench, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function FunctionalitiesTeaser() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const features = [
    {
      icon: LayoutDashboard,
      title: t.functionalities.features.security.title,
      description: t.functionalities.features.security.description
    },
    {
      icon: Search,
      title: t.functionalities.features.dataIntegration.title,
      description: t.functionalities.features.dataIntegration.description
    },
    {
      icon: Brain,
      title: t.functionalities.features.aiAnalytics.title,
      description: t.functionalities.features.aiAnalytics.description
    },
    {
      icon: Wrench,
      title: t.functionalities.features.realTime.title,
      description: t.functionalities.features.realTime.description
    },
    {
      icon: Code,
      title: t.functionalities.features.workbench.title,
      description: t.functionalities.features.workbench.description
    }
  ];

  return (
    <section ref={ref} className="py-20 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 overflow-hidden"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
            <span className="whitespace-nowrap">{t.functionalities.title}</span>{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent whitespace-nowrap">
              {t.functionalities.titleHighlight}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {t.functionalities.subtitle}
          </p>
          <Button asChild size="lg" className="gradient-primary glow-primary group">
            <a href="/functionalities">
              {t.functionalities.exploreFeatures}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div>

        {/* Mobile: Carousel */}
        <div className="lg:hidden overflow-hidden">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-sm mx-auto"
          >
            <CarouselContent>
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <CarouselItem key={feature.title}>
                    <motion.div
                      initial={{ opacity: 0, y: 32 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
                      transition={{ 
                        duration: 0.6,
                        delay: index * 0.1 + 0.3
                      }}
                      className="text-center group p-6 overflow-hidden"
                    >
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-8 h-8 text-noreja-tertiary" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </motion.div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>

        {/* Desktop: 3 items first row, 2 items centered second row */}
        <div className="hidden lg:block">
          {/* First row - 3 items */}
          <div className="flex justify-center gap-8 mb-8 overflow-hidden">
            {features.slice(0, 3).map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 32 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
                  transition={{ 
                    duration: 0.6,
                    delay: index * 0.1 + 0.3
                  }}
                  className="text-center group flex-1 max-w-xs overflow-hidden"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-8 h-8 text-noreja-tertiary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
          
          {/* Second row - 2 items centered */}
          <div className="flex justify-center gap-8 overflow-hidden">
            {features.slice(3, 5).map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 32 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
                  transition={{ 
                    duration: 0.6,
                    delay: (index + 3) * 0.1 + 0.3
                  }}
                  className="text-center group flex-1 max-w-xs overflow-hidden"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-8 h-8 text-noreja-tertiary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}