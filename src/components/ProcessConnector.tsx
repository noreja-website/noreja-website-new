import { motion } from "framer-motion";
import { useRef } from "react";

interface Connection {
  targetId: string;
  type: 'direct' | 'branch' | 'merge';
  strength?: number;
}

interface ProcessConnectorProps {
  sourceId: string;
  sourcePosition: { x: number; y: number };
  connections: Connection[];
  allSteps: any[];
  isVisible: boolean;
}

export function ProcessConnector({ 
  sourceId, 
  sourcePosition, 
  connections, 
  allSteps, 
  isVisible 
}: ProcessConnectorProps) {
  const ref = useRef(null);

  const getStepPosition = (stepId: string) => {
    const step = allSteps.find(s => s.id === stepId);
    if (!step) return { x: 50, y: 100 };
    
    switch (step.side) {
      case 'left': return { x: 25, y: 100 };
      case 'right': return { x: 75, y: 100 };
      case 'center': return { x: 50, y: 100 };
      default: return { x: 50, y: 100 };
    }
  };

  const generatePath = (target: { x: number; y: number }, type: string) => {
    const startX = sourcePosition.x;
    const startY = sourcePosition.y;
    const endX = target.x;
    const endY = target.y;
    
    // Calculate control points for smooth curves
    const midY = startY + (endY - startY) * 0.6;
    const controlX1 = startX;
    const controlY1 = midY;
    const controlX2 = endX;
    const controlY2 = midY;
    
    return `M ${startX}% ${startY}% C ${controlX1}% ${controlY1}%, ${controlX2}% ${controlY2}%, ${endX}% ${endY}%`;
  };

  return (
    <div ref={ref} className="absolute inset-0 w-full h-full pointer-events-none z-0">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <marker
            id={`arrowhead-${sourceId}`}
            markerWidth="10"
            markerHeight="7"
            refX="9"
            refY="3.5"
            orient="auto"
          >
            <polygon
              points="0 0, 10 3.5, 0 7"
              fill="hsl(var(--noreja-tertiary))"
              opacity="0.8"
            />
          </marker>
          <linearGradient id={`flow-gradient-${sourceId}`} gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="hsl(var(--noreja-tertiary))" stopOpacity="0.8" />
            <stop offset="50%" stopColor="hsl(var(--noreja-main))" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(var(--noreja-tertiary))" stopOpacity="0.8" />
          </linearGradient>
        </defs>
        
        {connections.map((connection, index) => {
          const targetPosition = getStepPosition(connection.targetId);
          const path = generatePath(targetPosition, connection.type);
          
          return (
            <g key={`${sourceId}-${connection.targetId}`}>
              {/* Main path (no arrowheads) */}
              <motion.path
                d={path}
                stroke={`url(#flow-gradient-${sourceId})`}
                strokeWidth="3"
                fill="none"
                strokeDasharray="8,4"
                
                opacity="0.8"
                initial={{ pathLength: 0 }}
                animate={isVisible ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ 
                  delay: 1.2 + (index * 0.3), 
                  duration: 2, 
                  ease: "easeInOut" 
                }}
              />
              
              {/* Animated flow particle */}
              <motion.circle
                r="3"
                fill="hsl(var(--noreja-main))"
                opacity="0.8"
                initial={{ offsetDistance: "0%", opacity: 0 }}
                animate={isVisible ? {
                  offsetDistance: "100%",
                  opacity: [0, 1, 0]
                } : { offsetDistance: "0%", opacity: 0 }}
                transition={{
                  delay: 2.5 + (index * 0.3),
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 2
                }}
                style={{
                  offsetPath: `path('${path}')`,
                  offsetRotate: 'auto'
                }}
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
}