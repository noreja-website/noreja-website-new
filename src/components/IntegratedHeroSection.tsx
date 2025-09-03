import { motion } from "framer-motion";
import { ArrowRight, Zap, Shield, Rocket, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import graphThreeNodes from "@/assets/graph_three_nodes.png";

export function IntegratedHeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-noreja-main/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-noreja-tertiary/10 rounded-full blur-3xl" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center flex-1 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
          >
            <Zap className="w-4 h-4 mr-2 text-noreja-tertiary" />
            <span className="text-sm font-medium">{t.hero.badge}</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            {t.hero.title}{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {t.hero.titleHighlight}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            {t.hero.subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button size="lg" className="gradient-primary glow-primary group">
              {t.hero.getStarted}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10">
              {t.hero.learnMore}
            </Button>
          </motion.div>

          {/* Feature Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex justify-center items-center space-x-8 text-muted-foreground"
          >
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-noreja-tertiary" />
              <span className="text-sm">{t.hero.features.secure}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Rocket className="h-5 w-5 text-noreja-tertiary" />
              <span className="text-sm">{t.hero.features.fast}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="h-5 w-5 text-noreja-tertiary" />
              <span className="text-sm">{t.hero.features.innovative}</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Integrated First Process Node */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="relative z-20 pb-20"
      >
        <div className="flex flex-col items-center">
          {/* Large first node replaced with graph image */}
          <div className="relative" style={{ perspective: 800 }}>
            <motion.div
              initial={{ rotateY: 0 }}
              animate={{ rotateY: [-8, 0, 8, 0, -8] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div 
                data-node-id="data"
                className="w-64 h-40 md:w-72 md:h-44 rounded-md bg-black/30 p-3 flex items-center justify-center"
              >
                <motion.img 
                  src={graphThreeNodes} 
                  alt="Data Collection"
                  className="w-full h-full object-contain"
                  initial={{ rotateY: 0 }}
                  animate={{ rotateY: [-8, 0, 8, 0, -8] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  style={{ transformStyle: 'preserve-3d', backfaceVisibility: 'hidden' }}
                />
                <motion.div
                  className="pointer-events-none absolute inset-0 rounded-md border-2 border-noreja-tertiary"
                  animate={{
                    scale: [1, 1.06, 1],
                    opacity: [0.35, 0, 0.35]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: 1.2
                  }}
                />
              </div>
            </motion.div>
          </div>
          
          {/* Caption */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="text-center mt-6"
          >
            <h3 className="text-2xl font-bold mb-2 text-foreground">{t.hero.dataCollection.title}</h3>
            <p className="text-base text-muted-foreground">{t.hero.dataCollection.description}</p>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}