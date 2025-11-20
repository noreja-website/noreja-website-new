import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Zap, Shield, Rocket, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { siteConfig } from "@/lib/config";
import { Link } from "react-router-dom";
import graphThreeNodes from "@/assets/graph_three_nodes.png";
import { AnimatedHeading } from "@/components/AnimatedHeading";

export function IntegratedHeroSection() {
  const { t } = useLanguage();
  
  // Typing animation for words
  const rotatingWords = ["Transparent", "Understandable", "Efficient", "Compliant"];

  return (
    <section className="relative pt-20 md:pt-32 pb-0 flex flex-col justify-center items-center overflow-hidden w-full max-w-full">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-noreja-main/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-noreja-tertiary/10 rounded-full blur-3xl" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center flex-1 flex flex-col justify-center py-8 md:py-0 w-full max-w-full overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto w-full"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4 md:mb-8"
          >
            <Zap className="w-4 h-4 mr-2 text-noreja-tertiary" />
            <span className="text-sm font-medium">{t.hero.badge}</span>
          </motion.div>

          {/* Main Heading */}
          <div className="py-2 lg:py-4 px-4 lg:px-6 w-full max-w-full lg:ml-12 xl:ml-16">
            <AnimatedHeading 
              fixedText="Make Processes"
              rotatingWords={rotatingWords}
              size="lg"
            />
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 md:mb-8 max-w-5xl xl:max-w-6xl mx-auto whitespace-pre-line px-4"
          >
            {t.hero.subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-row gap-3 sm:gap-4 justify-center mb-8 md:mb-12 px-4"
          >
            <Button 
              size="lg" 
              className="gradient-primary glow-primary group"
              asChild
            >
              <a 
                href={siteConfig.hubspot.appointmentBooking}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.hero.getStarted}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary/30 hover:bg-primary/10"
              asChild
            >
              <Link to="/functionalities">
                {t.hero.learnMore}
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
}