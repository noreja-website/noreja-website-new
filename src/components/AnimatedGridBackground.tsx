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
  const POINT_COUNT = 12; // Reduced for performance
  const MIN_SPEED = 0.3;
  const MAX_SPEED = 0.8;

  // Initialize points
  useEffect(() => {
    if (!containerRef.current) return;

    const updateDimensions = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setDimensions({ width: rect.width, height: rect.height });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return;

    const horizontalLines = Math.ceil(dimensions.height / GRID_SIZE);
    const verticalLines = Math.ceil(dimensions.width / GRID_SIZE);

    const newPoints: GridPoint[] = [];

    for (let i = 0; i < POINT_COUNT; i++) {
      const isHorizontal = Math.random() > 0.5;
      const speed = MIN_SPEED + Math.random() * (MAX_SPEED - MIN_SPEED);
      
      if (isHorizontal) {
        const gridLineIndex = Math.floor(Math.random() * horizontalLines);
        const y = gridLineIndex * GRID_SIZE;
        newPoints.push({
          id: `h-${i}`,
          x: Math.random() * dimensions.width,
          y,
          direction: 'horizontal',
          speed,
          progress: Math.random(),
          gridLineIndex
        });
      } else {
        const gridLineIndex = Math.floor(Math.random() * verticalLines);
        const x = gridLineIndex * GRID_SIZE;
        newPoints.push({
          id: `v-${i}`,
          x,
          y: Math.random() * dimensions.height,
          direction: 'vertical',
          speed,
          progress: Math.random(),
          gridLineIndex
        });
      }
    }

    setPoints(newPoints);
  }, [dimensions]);

  // Animation loop
  useEffect(() => {
    if (points.length === 0) return;

    const animate = () => {
      setPoints(prevPoints => 
        prevPoints.map(point => {
          let newProgress = point.progress + point.speed * 0.01;
          let newX = point.x;
          let newY = point.y;

          if (point.direction === 'horizontal') {
            newX = newProgress * dimensions.width;
            if (newX > dimensions.width) {
              newProgress = 0;
              newX = 0;
            }
          } else {
            newY = newProgress * dimensions.height;
            if (newY > dimensions.height) {
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
    >
      {/* Static Grid */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--noreja-tertiary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--noreja-tertiary)) 1px, transparent 1px)`,
          backgroundSize: `${GRID_SIZE}px ${GRID_SIZE}px`
        }}
      />
      
      {/* Animated Points */}
      <div className="absolute inset-0">
        {points.map(point => (
          <div
            key={point.id}
            className="absolute w-1.5 h-1.5 rounded-full transition-opacity duration-300"
            style={{
              left: `${point.x}px`,
              top: `${point.y}px`,
              backgroundColor: '#23F3DA',
              boxShadow: '0 0 6px #23F3DA, 0 0 12px #23F3DA40',
              transform: 'translate(-50%, -50%)',
              opacity: point.direction === 'horizontal' 
                ? Math.sin(point.progress * Math.PI) * 0.8 + 0.2
                : Math.sin(point.progress * Math.PI) * 0.8 + 0.2
            }}
          />
        ))}
      </div>
    </div>
  );
}