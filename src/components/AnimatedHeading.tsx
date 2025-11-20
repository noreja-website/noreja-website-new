import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

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
  const [minWidth, setMinWidth] = useState<number | undefined>(undefined);
  const measureRef = useRef<HTMLSpanElement>(null);

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

  // Measure the widest word to calculate min-width for preventing layout shifts
  useEffect(() => {
    const measureWidth = () => {
      if (!measureRef.current || rotatingWords.length === 0) return;

      // Measure the actual rendered width of each word to find the widest one
      // (not just the longest by character count, as character widths vary)
      let widestWord = rotatingWords[0];
      let maxWidth = 0;
      
      for (const word of rotatingWords) {
        // Set the word to measure its width
        measureRef.current.textContent = word;
        
        // Force a reflow to ensure accurate measurement
        void measureRef.current.offsetWidth;
        
        // Get the width of this word
        const wordWidth = measureRef.current.offsetWidth;
        
        // Track the widest word
        if (wordWidth > maxWidth) {
          maxWidth = wordWidth;
          widestWord = word;
        }
      }
      
      // Now measure the cursor with margin using the widest word
      measureRef.current.textContent = widestWord;
      void measureRef.current.offsetWidth;
      
      const cursorSpan = document.createElement('span');
      cursorSpan.className = 'inline-block ml-1';
      cursorSpan.style.fontSize = '1em';
      cursorSpan.style.lineHeight = '0.1';
      cursorSpan.textContent = '_';
      measureRef.current.appendChild(cursorSpan);
      
      // Force a reflow
      void measureRef.current.offsetWidth;
      
      // Get the total width including cursor
      const totalWidth = measureRef.current.offsetWidth;
      
      // Clean up
      measureRef.current.removeChild(cursorSpan);
      measureRef.current.textContent = '';
      
      // Set the min-width
      setMinWidth(totalWidth);
    };

    // Measure after a short delay to ensure DOM is ready
    const timeoutId = setTimeout(measureWidth, 100);

    // Also measure on window resize to handle responsive changes
    window.addEventListener('resize', measureWidth);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', measureWidth);
    };
  }, [rotatingWords, size]);

  const sizeClass = sizeClasses[size];

  return (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.8 }}
      className={`${sizeClass} font-bold mb-4 lg:mb-6 leading-[1.1] lg:leading-[1.2] flex flex-col lg:flex-row items-center justify-center gap-2 sm:gap-4 lg:gap-4 text-center ${className}`}
    >
      <span className="lg:whitespace-nowrap">{fixedText}</span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-gradient-primary bg-clip-text text-transparent lg:whitespace-nowrap leading-[1.1] lg:leading-[1.2] text-left"
        style={{
          minWidth: minWidth ? `${minWidth}px` : undefined,
          display: 'inline-block'
        }}
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
      {/* Hidden span for measuring longest word */}
      <span
        ref={measureRef}
        className={`${sizeClass} font-bold bg-gradient-primary bg-clip-text text-transparent absolute opacity-0 pointer-events-none whitespace-nowrap -z-10 leading-[1.1] lg:leading-[1.2]`}
        aria-hidden="true"
      />
    </motion.h1>
  );
}

