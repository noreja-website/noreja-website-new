import { useState, useEffect, useRef } from "react";

interface UseTypingEffectOptions {
  text: string;
  isActive: boolean;
  typingSpeed?: number;
  restartDelay?: number;
}

export function useTypingEffect({
  text,
  isActive,
  typingSpeed = 100,
  restartDelay = 1000,
}: UseTypingEffectOptions) {
  const [displayedText, setDisplayedText] = useState(text);
  const [showCursor, setShowCursor] = useState(false);
  const animationRef = useRef<number | null>(null);
  const cursorIntervalRef = useRef<number | null>(null);
  const isActiveRef = useRef(isActive);

  // Keep ref in sync
  useEffect(() => {
    isActiveRef.current = isActive;
  }, [isActive]);

  // Reset when text changes
  useEffect(() => {
    setDisplayedText(text);
    setShowCursor(false);
  }, [text]);

  // Handle active state changes
  useEffect(() => {
    // Clear any existing animations
    if (animationRef.current !== null) {
      clearTimeout(animationRef.current);
      animationRef.current = null;
    }
    if (cursorIntervalRef.current !== null) {
      clearInterval(cursorIntervalRef.current);
      cursorIntervalRef.current = null;
    }

    if (!isActive) {
      // When inactive, show full text immediately without cursor
      setDisplayedText(text);
      setShowCursor(false);
      return;
    }

    // When active, start typing animation
    setDisplayedText("");
    setShowCursor(true);

    // Start cursor blinking
    cursorIntervalRef.current = window.setInterval(() => {
      if (isActiveRef.current) {
        setShowCursor((prev) => !prev);
      }
    }, 500);

    // Start typing animation
    let currentIndex = 0;
    const typeNextChar = () => {
      if (!isActiveRef.current) {
        return;
      }

      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1));
        currentIndex++;
        animationRef.current = window.setTimeout(typeNextChar, typingSpeed);
      } else {
        // Finished typing, wait then restart
        animationRef.current = window.setTimeout(() => {
          if (!isActiveRef.current) {
            return;
          }
          currentIndex = 0;
          setDisplayedText("");
          typeNextChar();
        }, restartDelay);
      }
    };

    // Small delay before starting to prevent flicker
    animationRef.current = window.setTimeout(() => {
      typeNextChar();
    }, 50);

    return () => {
      if (animationRef.current !== null) {
        clearTimeout(animationRef.current);
        animationRef.current = null;
      }
      if (cursorIntervalRef.current !== null) {
        clearInterval(cursorIntervalRef.current);
        cursorIntervalRef.current = null;
      }
    };
  }, [isActive, text, typingSpeed, restartDelay]);

  return {
    displayedText: isActive ? displayedText : text,
    showCursor: isActive && showCursor,
  };
}

