import { useEffect, useRef, useState } from 'react';

interface GridPoint {
  id: string;
  x: number;
  y: number;
  direction: 'horizontal' | 'vertical';
  speed: number;
  progress: number;
  gridLineIndex: number;
}

interface AnimatedGridBackgroundProps {
  className?: string;
}

export function AnimatedGridBackground({ className = "" }: AnimatedGridBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const [points, setPoints] = useState<GridPoint[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const GRID_SIZE = 50;
  const MIN_SPEED = 0.001;
  const MAX_SPEED = 0.003;

  // Initialize points - use full viewport dimensions
  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({ 
        width: window.innerWidth, 
        height: window.innerHeight 
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return;

    // Use Math.floor to prevent overflow and ensure proper grid bounds
    const horizontalLines = Math.floor(dimensions.height / GRID_SIZE);
    const verticalLines = Math.floor(dimensions.width / GRID_SIZE);
    
    // Calculate point count based on screen size (1 point per 4-5 grid lines)
    const horizontalCount = Math.max(2, Math.floor(horizontalLines / 4));
    const verticalCount = Math.max(2, Math.floor(verticalLines / 4));

    const newPoints: GridPoint[] = [];

    // Create horizontal points distributed across ALL horizontal lines
    for (let i = 0; i < horizontalCount; i++) {
      // Randomly distribute across all available horizontal lines
      const gridLineIndex = Math.floor(Math.random() * horizontalLines);
      const y = gridLineIndex * GRID_SIZE;
      const speed = MIN_SPEED + Math.random() * (MAX_SPEED - MIN_SPEED);
      
      newPoints.push({
        id: `h-${i}`,
        x: 0,
        y,
        direction: 'horizontal',
        speed,
        progress: Math.random(),
        gridLineIndex
      });
    }

    // Create vertical points distributed across ALL vertical lines
    for (let i = 0; i < verticalCount; i++) {
      // Randomly distribute across all available vertical lines
      const gridLineIndex = Math.floor(Math.random() * verticalLines);
      const x = gridLineIndex * GRID_SIZE;
      const speed = MIN_SPEED + Math.random() * (MAX_SPEED - MIN_SPEED);
      
      newPoints.push({
        id: `v-${i}`,
        x,
        y: 0,
        direction: 'vertical',
        speed,
        progress: Math.random(),
        gridLineIndex
      });
    }

    setPoints(newPoints);
  }, [dimensions]);

  // Animation loop
  useEffect(() => {
    if (points.length === 0) return;

    const animate = () => {
      setPoints(prevPoints => 
        prevPoints.map(point => {
          let newProgress = point.progress + point.speed;
          let newX = point.x;
          let newY = point.y;

          if (point.direction === 'horizontal') {
            // Horizontal points move left to right, Y stays fixed
            newX = newProgress * dimensions.width;
            newY = point.gridLineIndex * GRID_SIZE;
            if (newProgress >= 1) {
              newProgress = 0;
              newX = 0;
            }
          } else {
            // Vertical points move top to bottom, X stays fixed
            newX = point.gridLineIndex * GRID_SIZE;
            newY = newProgress * dimensions.height;
            if (newProgress >= 1) {
              newProgress = 0;
              newY = 0;
            }
          }

          return {
            ...point,
            x: newX,
            y: newY,
            progress: newProgress
          };
        })
      );

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [points.length, dimensions]);

  return (
    <div 
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      style={{
        background: 'hsl(var(--background))',
        backgroundImage: `
          radial-gradient(at 20% 50%, hsl(var(--noreja-main) / 0.05) 0px, transparent 50%),
          radial-gradient(at 80% 20%, hsl(var(--noreja-secondary) / 0.05) 0px, transparent 50%),
          radial-gradient(at 40% 80%, hsl(var(--noreja-secondary) / 0.05) 0px, transparent 50%)
        `
      }}
    >
      {/* Grid Lines - Direct SVG approach */}
      <svg className="absolute inset-0 w-full h-full">
        {/* Draw grid lines directly */}
        {Array.from({ length: Math.ceil(dimensions.width / GRID_SIZE) }, (_, i) => (
          <line
            key={`v-${i}`}
            x1={i * GRID_SIZE}
            y1={0}
            x2={i * GRID_SIZE}
            y2="200vh"
            stroke="#452BE9"
            strokeWidth="0.3"
            strokeOpacity="0.8"
          />
        ))}
        {Array.from({ length: Math.ceil(2000 / GRID_SIZE) }, (_, i) => (
          <line
            key={`h-${i}`}
            x1={0}
            y1={i * GRID_SIZE}
            x2={dimensions.width}
            y2={i * GRID_SIZE}
            stroke="#452BE9"
            strokeWidth="0.3"
            strokeOpacity="0.8"
          />
        ))}
      </svg>
      
      {/* Animated Points */}
      <div className="absolute inset-0">
        {points.map(point => (
          <div
            key={point.id}
            className="absolute w-1 h-1 rounded-full transition-opacity duration-300"
            style={{
              left: `${point.x}px`,
              top: `${point.y}px`,
              backgroundColor: 'hsl(var(--noreja-secondary))',
              boxShadow: '0 0 6px hsl(var(--noreja-secondary) / 0.6), 0 0 12px hsl(var(--noreja-secondary) / 0.4)',
              opacity: Math.sin(point.progress * Math.PI) * 0.6 + 0.4
            }}
          />
        ))}
      </div>
    </div>
  );
}