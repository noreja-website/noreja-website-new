import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface NodePosition {
  id: string;
  x: number;
  y: number;
  element: HTMLElement;
}

interface Connection {
  sourceId: string;
  targetId: string;
  type: 'direct' | 'branch' | 'merge';
}

interface GlobalConnectionOverlayProps {
  connections: Connection[];
  isVisible: boolean;
}

export function GlobalConnectionOverlay({ connections, isVisible }: GlobalConnectionOverlayProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [nodePositions, setNodePositions] = useState<Map<string, NodePosition>>(new Map());
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updatePositions = () => {
      const positions = new Map<string, NodePosition>();
      
      // Find all process nodes by their data-node-id attribute
      const nodeElements = document.querySelectorAll('[data-node-id]');
      
      nodeElements.forEach((element) => {
        const nodeId = element.getAttribute('data-node-id');
        if (nodeId) {
          const rect = element.getBoundingClientRect();
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
          
          positions.set(nodeId, {
            id: nodeId,
            x: rect.left + rect.width / 2 + scrollLeft,
            y: rect.top + rect.height / 2 + scrollTop,
            element: element as HTMLElement
          });
        }
      });
      
      setNodePositions(positions);
      
      // Update SVG dimensions to cover the entire document
      setDimensions({
        width: Math.max(document.documentElement.scrollWidth, window.innerWidth),
        height: Math.max(document.documentElement.scrollHeight, window.innerHeight)
      });
    };

    // Initial position calculation
    updatePositions();

    // Update on resize and scroll
    const handleUpdate = () => {
      requestAnimationFrame(updatePositions);
    };

    window.addEventListener('resize', handleUpdate);
    window.addEventListener('scroll', handleUpdate);

    // Also update when nodes might have animated into view
    const observer = new MutationObserver(handleUpdate);
    observer.observe(document.body, { 
      childList: true, 
      subtree: true, 
      attributes: true,
      attributeFilter: ['style', 'class']
    });

    return () => {
      window.removeEventListener('resize', handleUpdate);
      window.removeEventListener('scroll', handleUpdate);
      observer.disconnect();
    };
  }, []);

  const generatePath = (source: NodePosition, target: NodePosition, type: string) => {
    const startX = source.x;
    const startY = source.y;
    const endX = target.x;
    const endY = target.y;
    
    // Calculate control points for smooth curves
    const deltaY = Math.abs(endY - startY);
    const controlOffset = Math.min(deltaY * 0.6, 200);
    
    const controlX1 = startX;
    const controlY1 = startY + controlOffset;
    const controlX2 = endX;
    const controlY2 = endY - controlOffset;
    
    return `M ${startX} ${startY} C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${endX} ${endY}`;
  };

  const getConnectionDelay = (index: number) => {
    return 0.5 + (index * 0.3);
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-[5]">
      <svg
        ref={svgRef}
        width={dimensions.width}
        height={dimensions.height}
        className="absolute inset-0"
        style={{ width: dimensions.width, height: dimensions.height }}
      >
        <defs>
          <marker
            id="global-arrowhead"
            markerWidth="10"
            markerHeight="7"
            refX="9"
            refY="3.5"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <polygon
              points="0 0, 10 3.5, 0 7"
              fill="hsl(var(--noreja-tertiary))"
              opacity="0.8"
            />
          </marker>
          <linearGradient id="global-flow-gradient" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="hsl(var(--noreja-tertiary))" stopOpacity="0.8" />
            <stop offset="50%" stopColor="hsl(var(--noreja-main))" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(var(--noreja-tertiary))" stopOpacity="0.8" />
          </linearGradient>
        </defs>
        
        {connections.map((connection, index) => {
          const sourcePos = nodePositions.get(connection.sourceId);
          const targetPos = nodePositions.get(connection.targetId);
          
          if (!sourcePos || !targetPos) return null;
          
          const path = generatePath(sourcePos, targetPos, connection.type);
          const pathId = `global-path-${connection.sourceId}-${connection.targetId}`;
          
          return (
            <g key={pathId}>
              {/* Main connection path */}
              <motion.path
                d={path}
                stroke="url(#global-flow-gradient)"
                strokeWidth="3"
                fill="none"
                strokeDasharray="8,4"
                markerEnd="url(#global-arrowhead)"
                opacity="0.8"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isVisible ? { pathLength: 1, opacity: 0.8 } : { pathLength: 0, opacity: 0 }}
                transition={{ 
                  delay: getConnectionDelay(index), 
                  duration: 2, 
                  ease: "easeInOut" 
                }}
              />
              
              {/* Animated flow particle */}
              <motion.circle
                r="4"
                fill="hsl(var(--noreja-main))"
                opacity="0.9"
                initial={{ offsetDistance: "0%", opacity: 0 }}
                animate={isVisible ? {
                  offsetDistance: "100%",
                  opacity: [0, 1, 0]
                } : { offsetDistance: "0%", opacity: 0 }}
                transition={{
                  delay: getConnectionDelay(index) + 2,
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