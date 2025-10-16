import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Zap, Shield, Rocket, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import graphThreeNodes from "@/assets/graph_three_nodes.png";
import { useState, useEffect } from "react";

export function IntegratedHeroSection() {
  const { t } = useLanguage();
  
  // Typing animation for words
  const rotatingWords = ["Transparent", "Understandable", "Self-Improving", "Compliant"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const currentWord = rotatingWords[currentWordIndex];
    
    if (isTyping) {
      // Typing effect
      if (displayedText.length < currentWord.length) {
        const timer = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1));
        }, 100);
        return () => clearTimeout(timer);
      } else {
        // Finished typing, wait then start erasing
        const timer = setTimeout(() => {
          setIsTyping(false);
        }, 1500);
        return () => clearTimeout(timer);
      }
    } else {
      // Erasing effect
      if (displayedText.length > 0) {
        const timer = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 50);
        return () => clearTimeout(timer);
      } else {
        // Finished erasing, move to next word
        setIsTyping(true);
        setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
      }
    }
  }, [displayedText, isTyping, currentWordIndex]);

  // Cursor blinking effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-20 md:pt-32 pb-0 flex flex-col justify-center items-center overflow-hidden w-full max-w-full">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-noreja-main/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-noreja-tertiary/10 rounded-full blur-3xl" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center flex-1 flex flex-col justify-center py-8 md:py-0 max-w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto w-full"
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
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 lg:mb-6 leading-tight lg:leading-relaxed flex flex-col lg:flex-row items-center justify-center gap-2 sm:gap-4 lg:gap-4 py-2 lg:py-4 px-2 lg:text-left lg:justify-start w-full max-w-full overflow-hidden"
          >
            <span className="lg:whitespace-nowrap">Make Processes</span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-primary bg-clip-text text-transparent py-1 md:py-2 lg:whitespace-nowrap"
            >
              {displayedText}
              <span className={`inline-block ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`} style={{ fontSize: '1em', lineHeight: '0.1', color: 'transparent', background: 'linear-gradient(135deg, #452BE9, #4569E7)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>_</span>
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 md:mb-8 max-w-4xl mx-auto whitespace-pre-line px-4"
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
            <Button size="lg" className="gradient-primary glow-primary group">
              {t.hero.getStarted}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10">
              {t.hero.learnMore}
            </Button>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
}