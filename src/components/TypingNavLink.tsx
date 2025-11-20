import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTypingEffect } from "@/hooks/use-typing-effect";

interface TypingNavLinkProps {
  to: string;
  children: string;
  isActive: boolean;
  onClick?: () => void;
}

export function TypingNavLink({ to, children, isActive, onClick }: TypingNavLinkProps) {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);
  const measureRef = useRef<HTMLSpanElement>(null);
  
  const { displayedText, showCursor } = useTypingEffect({
    text: children,
    isActive: isHovered,
  });

  const baseClassName = `text-sm font-medium transition-fast ${
    isActive
      ? "text-[hsl(256,77%,72%)]"
      : "text-muted-foreground hover:text-[hsl(256,77%,72%)]"
  }`;

  // Set min-width based on full text + cursor to prevent layout shift
  useEffect(() => {
    if (measureRef.current && containerRef.current) {
      const fullWidth = measureRef.current.offsetWidth;
      containerRef.current.style.minWidth = `${fullWidth}px`;
    }
  }, [children]);

  return (
    <Link
      to={to}
      className={`${baseClassName} relative`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Hidden element to measure full text + cursor width */}
      <span
        ref={measureRef}
        className="absolute opacity-0 pointer-events-none whitespace-nowrap -z-10"
        aria-hidden="true"
        style={{ visibility: 'hidden' }}
      >
        {children}
        <span className="inline-block ml-0.5">_</span>
      </span>
      <span ref={containerRef} className="inline-block whitespace-nowrap">
        {displayedText}
        {/* Always render cursor to reserve space, but make it invisible when not needed */}
        <span 
          className={`inline-block ml-0.5 ${
            isActive ? "text-[hsl(256,77%,72%)]" : "text-muted-foreground"
          }`}
          style={{
            opacity: showCursor ? 1 : 0,
            transition: 'opacity 0.1s'
          }}
        >
          _
        </span>
      </span>
      {isActive && (
        <motion.div
          className="h-0.5 bg-gradient-primary mt-1"
          layoutId="activeTab"
          initial={false}
        />
      )}
    </Link>
  );
}

