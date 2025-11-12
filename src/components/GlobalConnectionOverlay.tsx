import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface NodePosition {
  id: string;
  x: number;
  y: number;
  element: HTMLElement;
  isVisible: boolean;
}

interface Connection {
  sourceId: string;
  targetId: string;
  type: 'direct' | 'branch' | 'merge';
}

interface ConnectionState {
  [connectionId: string]: {
    isVisible: boolean;
    sourceVisible: boolean;
    targetVisible: boolean;
    hasBeenVisible: boolean;
  };
}

interface GlobalConnectionOverlayProps {
  connections: Connection[];
}

export function GlobalConnectionOverlay({ connections }: GlobalConnectionOverlayProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [nodePositions, setNodePositions] = useState<Map<string, NodePosition>>(new Map());
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [connectionStates, setConnectionStates] = useState<ConnectionState>({});
  const observersRef = useRef<Map<string, IntersectionObserver>>(new Map());

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
          
          positions.set(nodeId, {
            id: nodeId,
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2 + scrollTop,
            element: element as HTMLElement,
            isVisible: false // Will be updated by intersection observers
          });
        }
      });
      
      setNodePositions(positions);
      
      // Update SVG dimensions to cover the entire document without triggering overflow
      const html = document.documentElement;
      const body = document.body;

      const width = Math.max(
        html ? html.clientWidth : 0,
        body ? body.clientWidth : 0,
        0
      );

      const height = Math.max(
        html ? html.scrollHeight : 0,
        body ? body.scrollHeight : 0,
        window.innerHeight || 0
      );

      setDimensions({
        width,
        height
      });
    };

    // Initial position calculation
    updatePositions();

    // Update on resize and scroll
    const handleUpdate = () => {
      requestAnimationFrame(updatePositions);
    };

    window.addEventListener('resize', handleUpdate);

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
      observer.disconnect();
    };
  }, []);

  // Setup intersection observers for each node
  useEffect(() => {
    const nodeElements = document.querySelectorAll('[data-node-id]');
    
    // Clear existing observers
    observersRef.current.forEach(observer => observer.disconnect());
    observersRef.current.clear();

    nodeElements.forEach((element) => {
      const nodeId = element.getAttribute('data-node-id');
      if (nodeId) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            setNodePositions(prev => {
              const node = prev.get(nodeId);
              if (node) {
                const updated = new Map(prev);
                updated.set(nodeId, { ...node, isVisible: entry.isIntersecting });
                return updated;
              }
              return prev;
            });

            // Update connection states when nodes become visible
            setConnectionStates(prev => {
              const updated = { ...prev };
              
              connections.forEach(connection => {
                const connectionId = `${connection.sourceId}-${connection.targetId}`;
                const current = updated[connectionId] || { 
                  isVisible: false, 
                  sourceVisible: false, 
                  targetVisible: false,
                  hasBeenVisible: false
                };
                
                if (connection.sourceId === nodeId) {
                  current.sourceVisible = entry.isIntersecting;
                } else if (connection.targetId === nodeId) {
                  current.targetVisible = entry.isIntersecting;
                }
                
                const shouldBeVisible = current.sourceVisible;
                if (shouldBeVisible && !current.hasBeenVisible) {
                  current.hasBeenVisible = true;
                }
                current.isVisible = current.hasBeenVisible;
                updated[connectionId] = current;
              });
              
              return updated;
            });
          },
          { threshold: 0.3, rootMargin: '50px' }
        );
        
        observer.observe(element);
        observersRef.current.set(nodeId, observer);
      }
    });

    return () => {
      observersRef.current.forEach(observer => observer.disconnect());
      observersRef.current.clear();
    };
  }, [connections]);

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

  if (connections.length === 0) {
    return null;
  }

  return (
    <div
      className="absolute inset-0 pointer-events-none z-0"
      style={{ height: dimensions.height }}
    >
      <svg
        ref={svgRef}
        width={dimensions.width}
        height={dimensions.height}
        className="absolute top-0 left-0"
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
          const connectionId = `${connection.sourceId}-${connection.targetId}`;
          const connectionState = connectionStates[connectionId];
          
          if (!sourcePos || !targetPos || !connectionState) return null;
          
          const path = generatePath(sourcePos, targetPos, connection.type);
          const pathId = `global-path-${connectionId}`;
          
          return (
            <g key={pathId}>
              {/* Main connection path (no arrowheads) */}
              <motion.path
                d={path}
                stroke="url(#global-flow-gradient)"
                strokeWidth="4"
                fill="none"
                strokeDasharray="10,5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={connectionState.isVisible ? { pathLength: 1, opacity: 0.9 } : { pathLength: 0, opacity: 0 }}
                transition={{ 
                  delay: getConnectionDelay(index), 
                  duration: 1.5, 
                  ease: "easeInOut" 
                }}
              />
              
              {/* Animated flow particle */}
              <motion.circle
                r="5"
                fill="hsl(var(--noreja-main))"
                initial={{ offsetDistance: "0%", opacity: 0 }}
                animate={connectionState.isVisible ? {
                  offsetDistance: "100%",
                  opacity: [0, 1, 0.7, 0]
                } : { offsetDistance: "0%", opacity: 0 }}
                transition={{
                  delay: getConnectionDelay(index) + 1.5,
                  duration: 2.5,
                  repeat: Infinity,
                  repeatDelay: 1.5
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