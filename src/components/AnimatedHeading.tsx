import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface AnimatedHeadingProps {
  fixedText: string;
  rotatingWords: string[];
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const sizeClasses = {
  sm: "text-3xl lg:text-4xl",
  md: "text-4xl lg:text-5xl",
  lg: "text-4xl sm:text-5xl lg:text-6xl xl:text-7xl",
  xl: "text-5xl md:text-7xl"
};

export function AnimatedHeading({ 
  fixedText, 
  rotatingWords, 
  className = "",
  size = 'lg'
}: AnimatedHeadingProps) {
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
  }, [displayedText, isTyping, currentWordIndex, rotatingWords]);

  // Cursor blinking effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const sizeClass = sizeClasses[size];

  return (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.8 }}
      className={`${sizeClass} font-bold mb-4 lg:mb-6 leading-[1.1] lg:leading-[1.2] flex flex-col lg:flex-row items-center lg:items-baseline justify-center lg:justify-start gap-2 sm:gap-4 lg:gap-4 ${className}`}
    >
      <span className="lg:whitespace-nowrap">{fixedText}</span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-gradient-primary bg-clip-text text-transparent lg:whitespace-nowrap leading-[1.1] lg:leading-[1.2]"
      >
        {displayedText}
        <span 
          className={`inline-block ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`} 
          style={{ 
            fontSize: '1em', 
            lineHeight: '0.1', 
            color: 'transparent', 
            background: 'linear-gradient(135deg, #452BE9, #4569E7)', 
            backgroundClip: 'text', 
            WebkitBackgroundClip: 'text', 
            WebkitTextFillColor: 'transparent' 
          }}
        >
          _
        </span>
      </motion.span>
    </motion.h1>
  );
}

