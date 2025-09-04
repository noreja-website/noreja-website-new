import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Building, Globe, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import bocLogo from "@/assets/partners/BOC-logo-white.png";

const partnerLogos = [
  { name: "BOC Group", src: bocLogo },
  { name: "BOC Group", src: bocLogo },
  { name: "BOC Group", src: bocLogo },
  { name: "BOC Group", src: bocLogo },
  { name: "BOC Group", src: bocLogo },
  { name: "BOC Group", src: bocLogo }
];

export function PartnersTeaser() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const stats = [
    { icon: Building, value: "500+", label: t.partners.stats.clients },
    { icon: Globe, value: "50+", label: t.partners.stats.countries },
    { icon: Users, value: "1M+", label: t.partners.stats.users }
  ];

  return (
    <section ref={ref} className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">
            {t.partners.title}{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {t.partners.titleHighlight}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {t.partners.subtitle}
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ 
                  duration: 0.6,
                  delay: index * 0.1 + 0.3
                }}
                className="text-center"
              >
                <Icon className="w-8 h-8 text-noreja-tertiary mx-auto mb-4" />
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Partner Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-3 md:grid-cols-6 gap-8 mb-12"
        >
          {partnerLogos.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.1 + 0.8
              }}
              className="flex items-center justify-center h-16 bg-muted/50 rounded-lg border border-border hover:bg-muted/70 transition-colors"
            >
              <img
                src={partner.src}
                alt={partner.name}
                className="max-h-10 w-auto object-contain opacity-90"
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
        >
          <Button asChild size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10">
            <a href="/partners">
              {t.partners.viewAllPartners}
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}