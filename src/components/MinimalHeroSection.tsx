import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export function MinimalHeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      {/* Subtle background grid */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--noreja-tertiary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--noreja-tertiary)) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
          >
            Maximum{" "}
            <span className="bg-gradient-to-r from-noreja-main via-noreja-secondary to-noreja-accent bg-clip-text text-transparent">
              Intelligence
            </span>
            ,<br />
            Minimum Effort
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed"
          >
            {t.hero.subtitle}
          </motion.p>
          
          {/* CTA buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              size="lg" 
              className="bg-noreja-main hover:bg-noreja-main/90 text-white px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {t.hero.getStarted}
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-noreja-main/30 text-foreground hover:border-noreja-main hover:bg-noreja-main/10 px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105"
            >
              {t.hero.learnMore}
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Company logos section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute bottom-20 left-0 right-0"
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center space-x-8 md:space-x-16 opacity-60">
            {/* Company logos placeholder - replace with actual partner logos */}
            <div className="h-8 w-24 bg-muted rounded opacity-50"></div>
            <div className="h-8 w-20 bg-muted rounded opacity-50"></div>
            <div className="h-8 w-28 bg-muted rounded opacity-50"></div>
            <div className="h-8 w-16 bg-muted rounded opacity-50"></div>
            <div className="h-8 w-32 bg-muted rounded opacity-50"></div>
            <div className="h-8 w-20 bg-muted rounded opacity-50"></div>
            <div className="h-8 w-24 bg-muted rounded opacity-50"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}