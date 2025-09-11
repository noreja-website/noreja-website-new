import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { AnimatedGridBackground } from "@/components/AnimatedGridBackground";
import noreja_logo_white_violet from "@/assets/sampleimage.png";

const StickyCardStack = () => {
  // Animation state: tracks which step of the 4-card cycle we're in (0, 1, 2, 3)
  const [animationStep, setAnimationStep] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const cardContainerRef = useRef<HTMLDivElement>(null);

  // Scroll-based animation: detects when viewport is on cards and animates based on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!cardContainerRef.current) return;
      
      const cardContainer = cardContainerRef.current;
      const rect = cardContainer.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Check if the card area is in viewport
      const isInViewport = rect.top < windowHeight && rect.bottom > 0;
      
      if (isInViewport) {
        // Calculate scroll progress within the card area
        // Start when card container enters viewport, end when it exits
        const scrollProgress = Math.max(0, Math.min(1, 
          (windowHeight - rect.top) / (windowHeight + rect.height)
        ));
        
        // Map scroll progress to animation steps (0-3) with more sensitivity
        // Multiply by 4 and use Math.floor to get 0, 1, 2, 3
        const newStep = Math.floor(scrollProgress * 4);
        const clampedStep = Math.min(3, Math.max(0, newStep));
        
        // Debug logging
        console.log('Scroll progress:', scrollProgress, 'New step:', newStep, 'Clamped step:', clampedStep);
        
        setAnimationStep(clampedStep);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call to set correct state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Header section */}
      <div className="h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Innovation in Motion
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            Experience the seamless flow of technology and creativity
          </motion.p>
        </div>
      </div>

      {/* Sticky card animation area */}
      <div className="sticky top-0 w-full h-screen bg-gradient-to-br from-primary/5 to-primary/10 flex flex-col items-center justify-center overflow-hidden z-10">
        {/* Animated background: moving grid points */}
        <AnimatedGridBackground className="z-0" />
        
        {/* Card animation area: contains the 4 glass cards that cycle positions */}
        <div 
          ref={cardContainerRef}
          className="relative w-full h-2/5 flex items-center justify-center z-20"
        >
          {/* Accessibility: Screen reader announcement */}
          <div 
            className="sr-only" 
            aria-live="polite" 
            aria-atomic="true"
          >
            Currently viewing step {animationStep + 1} of 4
          </div>

          {/* CARD 1: Blue glass card */}
          <motion.div
            className="absolute w-2/4 h-full backdrop-blur-md rounded-xl shadow-2xl text-center"
            style={{ 
              zIndex: animationStep === 0 ? 4 : animationStep === 1 ? 1 : animationStep === 2 ? 2 : 3,
              opacity: animationStep === 0 ? 1 : animationStep === 1 ? 0.3 : animationStep === 2 ? 0.6 : 0.8,
              background: animationStep === 0 
                ? 'linear-gradient(135deg, hsl(var(--primary) / 0.4) 0%, hsl(var(--primary) / 0.25) 100%)'
                : animationStep === 1 
                ? 'linear-gradient(135deg, hsl(var(--primary) / 0.1) 0%, hsl(var(--primary) / 0.05) 100%)'
                : animationStep === 2
                ? 'linear-gradient(135deg, hsl(var(--primary) / 0.2) 0%, hsl(var(--primary) / 0.1) 100%)'
                : 'linear-gradient(135deg, hsl(var(--primary) / 0.3) 0%, hsl(var(--primary) / 0.15) 100%)',
              border: animationStep === 0 ? '1px solid rgba(255, 255, 255, 0.4)' : '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
            }}
            initial={{ x: 0, y: -30, rotate: 3, scale: 1.1 }}
            animate={{
              x: 0,
              y: animationStep === 0 ? -30 : animationStep === 1 ? 30 : animationStep === 2 ? 0 : 15,
              rotate: animationStep === 0 ? 3 : animationStep === 1 ? -3 : animationStep === 2 ? 0 : -1.5,
              scale: animationStep === 0 ? 1.1 : animationStep === 1 ? 0.9 : animationStep === 2 ? 0.95 : 0.92
            }}
            transition={shouldReduceMotion ? undefined : { duration: 1.5, ease: "easeInOut" }}
          >
            <div className="relative z-20 h-full flex flex-col items-center justify-center p-8 text-center">
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                Process Automation
              </h3>
              <p className="text-muted-foreground">
                Streamline your workflows with intelligent automation
              </p>
            </div>
          </motion.div>

          {/* CARD 2: Green glass card */}
          <motion.div
            className="absolute w-2/4 h-full backdrop-blur-md rounded-xl shadow-2xl text-center"
            style={{ 
              zIndex: animationStep === 0 ? 3 : animationStep === 1 ? 4 : animationStep === 2 ? 1 : 2,
              opacity: animationStep === 1 ? 1 : animationStep === 2 ? 0.3 : animationStep === 0 ? 0.8 : 0.6,
              background: animationStep === 1 
                ? 'linear-gradient(135deg, hsl(var(--secondary) / 0.4) 0%, hsl(var(--secondary) / 0.25) 100%)'
                : animationStep === 2 
                ? 'linear-gradient(135deg, hsl(var(--secondary) / 0.1) 0%, hsl(var(--secondary) / 0.05) 100%)'
                : animationStep === 0
                ? 'linear-gradient(135deg, hsl(var(--secondary) / 0.3) 0%, hsl(var(--secondary) / 0.15) 100%)'
                : 'linear-gradient(135deg, hsl(var(--secondary) / 0.2) 0%, hsl(var(--secondary) / 0.1) 100%)',
              border: animationStep === 1 ? '1px solid rgba(255, 255, 255, 0.4)' : '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
            }}
            initial={{ x: 0, y: 0, rotate: 0, scale: 0.95 }}
            animate={{
              x: 0,
              y: animationStep === 0 ? 0 : animationStep === 1 ? -30 : animationStep === 2 ? 30 : 0,
              rotate: animationStep === 0 ? 0 : animationStep === 1 ? 3 : animationStep === 2 ? -3 : 0,
              scale: animationStep === 0 ? 0.95 : animationStep === 1 ? 1.1 : animationStep === 2 ? 0.9 : 0.95
            }}
            transition={shouldReduceMotion ? undefined : { duration: 1.5, ease: "easeInOut" }}
          >
            <div className="relative z-20 h-full flex flex-col items-center justify-center p-8 text-center">
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                Data Integration
              </h3>
              <p className="text-muted-foreground">
                Connect all your systems seamlessly
              </p>
            </div>
          </motion.div>
          
          {/* CARD 3: Purple glass card */}
          <motion.div
            className="absolute w-2/4 h-full backdrop-blur-md rounded-xl shadow-2xl text-center"
            style={{ 
              zIndex: animationStep === 0 ? 2 : animationStep === 1 ? 3 : animationStep === 2 ? 4 : 1,
              opacity: animationStep === 2 ? 1 : animationStep === 3 ? 0.3 : animationStep === 0 ? 0.6 : 0.8,
              background: animationStep === 2 
                ? 'linear-gradient(135deg, hsl(var(--accent) / 0.4) 0%, hsl(var(--accent) / 0.25) 100%)'
                : animationStep === 3 
                ? 'linear-gradient(135deg, hsl(var(--accent) / 0.1) 0%, hsl(var(--accent) / 0.05) 100%)'
                : animationStep === 0
                ? 'linear-gradient(135deg, hsl(var(--accent) / 0.2) 0%, hsl(var(--accent) / 0.1) 100%)'
                : 'linear-gradient(135deg, hsl(var(--accent) / 0.3) 0%, hsl(var(--accent) / 0.15) 100%)',
              border: animationStep === 2 ? '1px solid rgba(255, 255, 255, 0.4)' : '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
            }}
            initial={{ x: 0, y: -30, rotate: 3, scale: 1.0 }}
            animate={{
              x: 0,
              y: animationStep === 0 ? 30 : animationStep === 1 ? 0 : animationStep === 2 ? -30 : 15,
              rotate: animationStep === 0 ? -3 : animationStep === 1 ? 0 : animationStep === 2 ? 3 : 1.5,
              scale: animationStep === 0 ? 0.9 : animationStep === 1 ? 0.95 : animationStep === 2 ? 1.1 : 0.92
            }}
            transition={shouldReduceMotion ? undefined : { duration: 1.5, ease: "easeInOut" }}
          >
            <div className="relative z-20 h-full flex flex-col items-center justify-center p-8 text-center">
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                Analytics Dashboard
              </h3>
              <p className="text-muted-foreground">
                Get insights from your data in real-time
              </p>
            </div>
          </motion.div>
          
          {/* CARD 4: Orange glass card */}
          <motion.div
            className="absolute w-2/4 h-full backdrop-blur-md rounded-xl shadow-2xl text-center"
            style={{ 
              zIndex: animationStep === 0 ? 1 : animationStep === 1 ? 2 : animationStep === 2 ? 3 : 4,
              opacity: animationStep === 3 ? 1 : animationStep === 0 ? 0.3 : animationStep === 1 ? 0.6 : 0.8,
              background: animationStep === 3 
                ? 'linear-gradient(135deg, hsl(var(--muted) / 0.6) 0%, hsl(var(--muted) / 0.4) 100%)'
                : animationStep === 0 
                ? 'linear-gradient(135deg, hsl(var(--muted) / 0.15) 0%, hsl(var(--muted) / 0.1) 100%)'
                : animationStep === 1
                ? 'linear-gradient(135deg, hsl(var(--muted) / 0.3) 0%, hsl(var(--muted) / 0.2) 100%)'
                : 'linear-gradient(135deg, hsl(var(--muted) / 0.45) 0%, hsl(var(--muted) / 0.3) 100%)',
              border: animationStep === 3 ? '1px solid rgba(255, 255, 255, 0.4)' : '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
            }}
            initial={{ x: 0, y: -15, rotate: 1.5, scale: 0.92 }}
            animate={{
              x: 0,
              y: animationStep === 0 ? -15 : animationStep === 1 ? 15 : animationStep === 2 ? 0 : -30,
              rotate: animationStep === 0 ? 1.5 : animationStep === 1 ? -1.5 : animationStep === 2 ? 0 : 3,
              scale: animationStep === 0 ? 0.92 : animationStep === 1 ? 0.92 : animationStep === 2 ? 0.95 : 1.1
            }}
            transition={shouldReduceMotion ? undefined : { duration: 1.5, ease: "easeInOut" }}
          >
            <div className="relative z-20 h-full flex flex-col items-center justify-center p-8 text-center">
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                Collaboration Tools
              </h3>
              <p className="text-muted-foreground">
                Work together more effectively
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Spacer content below for scrolling - this triggers the card animation */}
      <div className="h-[400vh] bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center">
        <div className="text-center">
          <motion.h2 
            className="text-3xl md:text-5xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Continue Your Journey
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Scroll down to explore more of our innovative solutions
          </motion.p>
        </div>
      </div>
    </>
  );
};

export default StickyCardStack;