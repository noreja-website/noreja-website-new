import React, { useMemo } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface AnimatedGradientBoxProps {
  costDriverPercent: string;
  ftePercent: string;
  className?: string;
}

export function AnimatedGradientBox({ 
  costDriverPercent, 
  ftePercent, 
  className = "" 
}: AnimatedGradientBoxProps) {
  const { t, language } = useLanguage();
  const fallbackLines =
    language === 'de'
      ? [
          'Entdecke ca. {costDriverPercent} der versteckten Kostentreiber in deinen Prozessen.',
          'Spare ca.',
          '{ftePercent} der FTE für die Prozessanalyse.*',
        ]
      : [
          'Discover approx. {costDriverPercent} of hidden cost drivers in your processes.',
          'Save approx.',
          '{ftePercent} of FTE for process analysis.*',
        ];
  const statisticsLines = (t.pages.pricing.statisticsBox?.lines ?? fallbackLines);
  const renderLine = (line: string, lineIndex: number) => {
    const parts = line.split(/(\{costDriverPercent\}|\{ftePercent\})/g);
    return (
      <p key={lineIndex} className="text-inherit">
        {parts.map((part, partIndex) => {
          if (part === '{costDriverPercent}') {
            return (
              <span key={partIndex} className="font-semibold">
                {costDriverPercent}
              </span>
            );
          }
          if (part === '{ftePercent}') {
            return (
              <span key={partIndex} className="font-semibold">
                {ftePercent}
              </span>
            );
          }
          return <React.Fragment key={partIndex}>{part}</React.Fragment>;
        })}
      </p>
    );
  };
  
  // Generate unique animation values for each box instance
  const particles = useMemo(() => {
    return Array.from({ length: 6 }).map((_, i) => ({
      id: i,
      width: 3 + Math.random() * 3,
      height: 3 + Math.random() * 3,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 4 + Math.random() * 3,
      delay: Math.random() * 2,
      translateX: (Math.random() * 15 - 7.5),
      translateY: (Math.random() * 15 - 7.5),
    }));
  }, []);

  return (
    <div 
      className={`relative overflow-hidden rounded-xl p-4 border border-border/50 flex flex-col ${className}`}
      style={{
        background: `
          linear-gradient(135deg, hsl(var(--card)) 0%, hsl(var(--noreja-main) / 0.15) 50%, hsl(var(--card)) 100%),
          radial-gradient(ellipse 600px 400px at 50% 50%, hsl(var(--noreja-secondary) / 0.12) 0%, transparent 60%),
          radial-gradient(ellipse 500px 350px at 30% 70%, hsl(var(--noreja-tertiary) / 0.10) 0%, transparent 60%)
        `,
        backgroundSize: '200% 200%, 100% 100%, 100% 100%',
        animation: 'gradientShift 12s ease infinite',
      }}
    >
      {/* Animated gradient overlay for subtle pulsing effect */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 30% 50%, hsl(var(--noreja-main) / 0.08) 0%, transparent 50%),
            radial-gradient(circle at 70% 50%, hsl(var(--noreja-tertiary) / 0.06) 0%, transparent 50%)
          `,
          animation: 'pulseGlow 6s ease-in-out infinite',
        }}
      />
      
      {/* Subtle animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              width: `${particle.width}px`,
              height: `${particle.height}px`,
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              background: 'hsl(var(--noreja-tertiary) / 0.2)',
              boxShadow: '0 0 8px hsl(var(--noreja-tertiary) / 0.3)',
              animation: `float-${particle.id} ${particle.duration}s ease-in-out infinite`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-2">
        <div className="flex flex-col items-center text-center text-[13px] sm:text-sm leading-tight text-foreground space-y-1">
          {statisticsLines.map((line, index) => renderLine(line, index))}
        </div>
      </div>

      <style>{`
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%, 50% 50%, 50% 50%;
          }
          50% {
            background-position: 100% 50%, 50% 50%, 50% 50%;
          }
          100% {
            background-position: 0% 50%, 50% 50%, 50% 50%;
          }
        }
        
        @keyframes pulseGlow {
          0%, 100% {
            opacity: 0.7;
          }
          50% {
            opacity: 1;
          }
        }
        
        ${particles.map((particle) => `
          @keyframes float-${particle.id} {
            0%, 100% {
              transform: translate(0, 0) scale(1);
              opacity: 0.15;
            }
            50% {
              transform: translate(${particle.translateX}px, ${particle.translateY}px) scale(1.3);
              opacity: 0.35;
            }
          }
        `).join('')}
      `}</style>
    </div>
  );
}

