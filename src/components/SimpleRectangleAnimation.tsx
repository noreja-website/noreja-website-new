import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { AnimatedGridBackground } from "@/components/AnimatedGridBackground";
import noreja_logo_white_violet from "@/assets/sampleimage.png";

const SimpleRectangleAnimation = () => {
  // Animation state: tracks which step of the 4-card cycle we're in (0, 1, 2, 3)
  const [animationStep, setAnimationStep] = useState(0);

  // Animation timer: cycles through all 4 cards every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationStep(prev => (prev + 1) % 4); // Cycle through 0, 1, 2, 3
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    // Main container: full screen with gradient background and animated grid
    <div className="relative w-full h-screen bg-gradient-to-br from-noreja-main/5 to-noreja-main/10 flex flex-col items-center justify-center overflow-hidden">
      {/* Animated background: moving grid points from Startseite2 */}
      <AnimatedGridBackground className="z-0" />
      
      {/* Header section: title and subtitle with fade-in animation */}
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
      
      {/* Card animation area: contains the 4 glass cards that cycle positions */}
      <div className="relative w-full h-2/5 flex items-center justify-center z-20 mt-16">
        
        {/* CARD 1: Blue glass card - cycles through all 4 positions */}
        <motion.div
          className="absolute w-2/4 h-full backdrop-blur-md rounded-xl shadow-2xl text-center"
          style={{ 
            // Z-index cycling: front(4) → back(1) → middle(2) → middle(3)
            zIndex: animationStep === 0 ? 4 : animationStep === 1 ? 1 : animationStep === 2 ? 2 : 3,
            // Dynamic opacity based on position: front=high, back=low
            opacity: animationStep === 0 ? 1 : animationStep === 1 ? 0.3 : animationStep === 2 ? 0.6 : 0.8,
            // Dynamic background opacity based on position
            background: animationStep === 0 
              ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.4) 0%, rgba(59, 130, 246, 0.25) 100%)'
              : animationStep === 1 
              ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(59, 130, 246, 0.05) 100%)'
              : animationStep === 2
              ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(59, 130, 246, 0.1) 100%)'
              : 'linear-gradient(135deg, rgba(59, 130, 246, 0.3) 0%, rgba(59, 130, 246, 0.15) 100%)',
            // Dynamic border opacity
            border: animationStep === 0 ? '1px solid rgba(255, 255, 255, 0.4)' : '1px solid rgba(255, 255, 255, 0.1)',
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
            y: animationStep === 0 ? -30 : animationStep === 1 ? 30 : animationStep === 2 ? 0 : 15,
            rotate: animationStep === 0 ? 3 : animationStep === 1 ? -3 : animationStep === 2 ? 0 : -1.5,
            scale: animationStep === 0 ? 1.1 : animationStep === 1 ? 0.9 : animationStep === 2 ? 0.95 : 0.92
          }}
          transition={{
            duration: 1.5,
            ease: "easeInOut"
          }}
        >
          <div className="relative z-20 transform translate-y-[-30px] translate-x-[-70px] w-2/3 h-2/3">
            <img src={noreja_logo_white_violet} alt="Noreja Logo" className="w-2/3 h-1/2 mx-auto" style={{ 
              filter: 'drop-shadow(0 30px 60px rgba(0, 0, 0, 0.6)) drop-shadow(0 15px 30px rgba(0, 0, 0, 0.4)) drop-shadow(0 0 40px rgba(255, 255, 255, 0.3))',
              transform: 'translateZ(20px)'
            }} />
          </div>
        </motion.div>

        {/* CARD 2: Green glass card - cycles through all 4 positions */}
        <motion.div
          className="absolute w-2/4 h-full backdrop-blur-md rounded-xl shadow-2xl text-center"
          style={{ 
            zIndex: animationStep === 0 ? 3 : animationStep === 1 ? 4 : animationStep === 2 ? 1 : 2,
            // Dynamic opacity based on position: front=high, back=low
            opacity: animationStep === 1 ? 1 : animationStep === 2 ? 0.3 : animationStep === 0 ? 0.8 : 0.6,
            // Dynamic background opacity based on position
            background: animationStep === 1 
              ? 'linear-gradient(135deg, rgba(34, 197, 94, 0.4) 0%, rgba(34, 197, 94, 0.25) 100%)'
              : animationStep === 2 
              ? 'linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(34, 197, 94, 0.05) 100%)'
              : animationStep === 0
              ? 'linear-gradient(135deg, rgba(34, 197, 94, 0.3) 0%, rgba(34, 197, 94, 0.15) 100%)'
              : 'linear-gradient(135deg, rgba(34, 197, 94, 0.2) 0%, rgba(34, 197, 94, 0.1) 100%)',
            // Dynamic border opacity
            border: animationStep === 1 ? '1px solid rgba(255, 255, 255, 0.4)' : '1px solid rgba(255, 255, 255, 0.1)',
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
            y: animationStep === 0 ? 0 : animationStep === 1 ? -30 : animationStep === 2 ? 30 : 0,
            rotate: animationStep === 0 ? 0 : animationStep === 1 ? 3 : animationStep === 2 ? -3 : 0,
            scale: animationStep === 0 ? 0.95 : animationStep === 1 ? 1.1 : animationStep === 2 ? 0.9 : 0.95
          }}
          transition={{
            duration: 1.5,
            ease: "easeInOut"
          }}
        >
          <div className="relative z-20 transform translate-y-[350px] translate-x-70px w-2/3 h-2/3">
            <img src={noreja_logo_white_violet} alt="Noreja Logo" className="w-2/3 h-1/2 mx-auto" style={{ 
              filter: 'drop-shadow(0 30px 60px rgba(0, 0, 0, 0.6)) drop-shadow(0 15px 30px rgba(0, 0, 0, 0.4)) drop-shadow(0 0 40px rgba(255, 255, 255, 0.3))',
              transform: 'translateZ(20px)'
            }} />
          </div>
        </motion.div>
        
        {/* CARD 3: Purple glass card - cycles through all 4 positions */}
        <motion.div
          className="absolute w-2/4 h-full backdrop-blur-md rounded-xl shadow-2xl text-center"
          style={{ 
            zIndex: animationStep === 0 ? 2 : animationStep === 1 ? 3 : animationStep === 2 ? 4 : 1,
            // Dynamic opacity based on position: front=high, back=low
            opacity: animationStep === 2 ? 1 : animationStep === 3 ? 0.3 : animationStep === 0 ? 0.6 : 0.8,
            // Dynamic background opacity based on position
            background: animationStep === 2 
              ? 'linear-gradient(135deg, rgba(168, 85, 247, 0.4) 0%, rgba(168, 85, 247, 0.25) 100%)'
              : animationStep === 3 
              ? 'linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(168, 85, 247, 0.05) 100%)'
              : animationStep === 0
              ? 'linear-gradient(135deg, rgba(168, 85, 247, 0.2) 0%, rgba(168, 85, 247, 0.1) 100%)'
              : 'linear-gradient(135deg, rgba(168, 85, 247, 0.3) 0%, rgba(168, 85, 247, 0.15) 100%)',
            // Dynamic border opacity
            border: animationStep === 2 ? '1px solid rgba(255, 255, 255, 0.4)' : '1px solid rgba(255, 255, 255, 0.1)',
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
            y: animationStep === 0 ? 30 : animationStep === 1 ? 0 : animationStep === 2 ? -30 : 15,
            rotate: animationStep === 0 ? -3 : animationStep === 1 ? 0 : animationStep === 2 ? 3 : 1.5,
            scale: animationStep === 0 ? 0.9 : animationStep === 1 ? 0.95 : animationStep === 2 ? 1.1 : 0.92
          }}
          transition={{
            duration: 1.5,
            ease: "easeInOut"
          }}
        >
          <div className="relative z-20 transform translate-y-[80px]">
            <img src={noreja_logo_white_violet} alt="Noreja Logo" className="w-2/3 h-1/2 mx-auto" style={{ 
              filter: 'drop-shadow(0 30px 60px rgba(0, 0, 0, 0.6)) drop-shadow(0 15px 30px rgba(0, 0, 0, 0.4)) drop-shadow(0 0 40px rgba(255, 255, 255, 0.3))',
              transform: 'translateZ(20px)'
            }} />
          </div>
        </motion.div>
        
        {/* CARD 4: Orange glass card - cycles through all 4 positions */}
        <motion.div
          className="absolute w-2/4 h-full backdrop-blur-md rounded-xl shadow-2xl text-center"
          style={{ 
            zIndex: animationStep === 0 ? 1 : animationStep === 1 ? 2 : animationStep === 2 ? 3 : 4,
            // Dynamic opacity based on position: front=high, back=low
            opacity: animationStep === 3 ? 1 : animationStep === 0 ? 0.3 : animationStep === 1 ? 0.6 : 0.8,
            // Dynamic background opacity based on position
            background: animationStep === 3 
              ? 'linear-gradient(135deg, rgba(249, 115, 22, 0.4) 0%, rgba(249, 115, 22, 0.25) 100%)'
              : animationStep === 0 
              ? 'linear-gradient(135deg, rgba(249, 115, 22, 0.1) 0%, rgba(249, 115, 22, 0.05) 100%)'
              : animationStep === 1
              ? 'linear-gradient(135deg, rgba(249, 115, 22, 0.2) 0%, rgba(249, 115, 22, 0.1) 100%)'
              : 'linear-gradient(135deg, rgba(249, 115, 22, 0.3) 0%, rgba(249, 115, 22, 0.15) 100%)',
            // Dynamic border opacity
            border: animationStep === 3 ? '1px solid rgba(255, 255, 255, 0.4)' : '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
          }}
          initial={{ 
            x: 0, 
            y: -15, 
            rotate: 1.5,
            scale: 0.92
          }}
          animate={{
            x: 0,
            y: animationStep === 0 ? -15 : animationStep === 1 ? 15 : animationStep === 2 ? 0 : -30,
            rotate: animationStep === 0 ? 1.5 : animationStep === 1 ? -1.5 : animationStep === 2 ? 0 : 3,
            scale: animationStep === 0 ? 0.92 : animationStep === 1 ? 0.92 : animationStep === 2 ? 0.95 : 1.1
          }}
          transition={{
            duration: 1.5,
            ease: "easeInOut"
          }}
        >
          <div className="relative z-20 transform translate-y-[-30px] translate-x-[70px] w-2/3 h-2/3">
            <img src={noreja_logo_white_violet} alt="Noreja Logo" className="w-2/3 h-2/3 mx-auto" style={{ 
              filter: 'drop-shadow(0 30px 60px rgba(0, 0, 0, 0.6)) drop-shadow(0 15px 30px rgba(0, 0, 0, 0.4)) drop-shadow(0 0 40px rgba(255, 255, 255, 0.3))',
              transform: 'translateZ(20px)'
            }} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SimpleRectangleAnimation;
