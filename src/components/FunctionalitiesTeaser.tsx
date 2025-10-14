import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Cpu, Database, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export function FunctionalitiesTeaser() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const features = [
    {
      icon: Cpu,
      title: t.functionalities.features.aiAnalytics.title,
      description: t.functionalities.features.aiAnalytics.description
    },
    {
      icon: Database,
      title: t.functionalities.features.dataIntegration.title,
      description: t.functionalities.features.dataIntegration.description
    },
    {
      icon: Shield,
      title: t.functionalities.features.security.title,
      description: t.functionalities.features.security.description
    },
    {
      icon: Zap,
      title: t.functionalities.features.realTime.title,
      description: t.functionalities.features.realTime.description
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">
            {t.functionalities.title}{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ 
                  duration: 0.6,
                  delay: index * 0.1 + 0.3
                }}
                className="text-center group"
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
    </section>
  );
}