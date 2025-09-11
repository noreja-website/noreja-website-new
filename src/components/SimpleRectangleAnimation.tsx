import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { AnimatedGridBackground } from "@/components/AnimatedGridBackground";

const SimpleRectangleAnimation = () => {
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationStep(prev => (prev + 1) % 3); // Cycle through 0, 1, 2
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-noreja-main/5 to-noreja-main/10 flex flex-col items-center justify-center overflow-hidden">
      <AnimatedGridBackground className="z-0" />
      {/* Text content at the top */}
      <div className="relative z-10 text-center mb-16">
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
      
      {/* Animation area below the text */}
      <div className="relative w-full h-96 flex items-center justify-center z-20">
        {/* Blue Rectangle */}
        <motion.div
          className="absolute w-96 h-80 bg-blue-500/20 backdrop-blur-md rounded-xl shadow-2xl border border-white/20"
          style={{ 
            zIndex: animationStep === 0 ? 3 : animationStep === 1 ? 1 : 2,
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.05) 100%)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
          }}
          initial={{ 
            x: 0, 
            y: 30, 
            rotate: -3,
            scale: 0.9
          }}
          animate={{
            x: 0,
            y: animationStep === 0 ? -30 : animationStep === 1 ? 30 : 0,
            rotate: animationStep === 0 ? 3 : animationStep === 1 ? -3 : 0,
            scale: animationStep === 0 ? 1.1 : animationStep === 1 ? 0.9 : 0.95
          }}
          transition={{
            duration: 1.5,
            ease: "easeInOut"
          }}
        />

        {/* Green Rectangle */}
        <motion.div
          className="absolute w-96 h-80 bg-green-500/20 backdrop-blur-md rounded-xl shadow-2xl border border-white/20"
          style={{ 
            zIndex: animationStep === 0 ? 2 : animationStep === 1 ? 3 : 1,
            background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.15) 0%, rgba(34, 197, 94, 0.05) 100%)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
          }}
          initial={{ 
            x: 0, 
            y: 0, 
            rotate: 0,
            scale: 0.95
          }}
          animate={{
            x: 0,
            y: animationStep === 0 ? 0 : animationStep === 1 ? -30 : 30,
            rotate: animationStep === 0 ? 0 : animationStep === 1 ? 3 : -3,
            scale: animationStep === 0 ? 0.95 : animationStep === 1 ? 1.1 : 0.9
          }}
          transition={{
            duration: 1.5,
            ease: "easeInOut"
          }}
        />
        
        {/* Purple Rectangle */}
        <motion.div
          className="absolute w-96 h-80 bg-purple-500/20 backdrop-blur-md rounded-xl shadow-2xl border border-white/20"
          style={{ 
            zIndex: animationStep === 0 ? 1 : animationStep === 1 ? 2 : 3,
            background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.15) 0%, rgba(168, 85, 247, 0.05) 100%)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
          }}
          initial={{ 
            x: 0, 
            y: -30, 
            rotate: 3,
            scale: 1.0
          }}
          animate={{
            x: 0,
            y: animationStep === 0 ? 30 : animationStep === 1 ? 0 : -30,
            rotate: animationStep === 0 ? -3 : animationStep === 1 ? 0 : 3,
            scale: animationStep === 0 ? 0.9 : animationStep === 1 ? 0.95 : 1.1
          }}
          transition={{
            duration: 1.5,
            ease: "easeInOut"
          }}
        />
      </div>
    </div>
  );
};

export default SimpleRectangleAnimation;
