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
  const POINT_COUNT = 20; // Increased for better coverage
  const MIN_SPEED = 0.002;
  const MAX_SPEED = 0.006;

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
    const totalLines = horizontalLines + verticalLines;

    const newPoints: GridPoint[] = [];

    // Distribute points across all grid lines for better coverage
    const horizontalCount = Math.ceil(POINT_COUNT * 0.5);
    const verticalCount = POINT_COUNT - horizontalCount;

    // Create horizontal points (moving left-right)
    for (let i = 0; i < horizontalCount; i++) {
      const gridLineIndex = i % horizontalLines;
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

    // Create vertical points (moving top-bottom)
    for (let i = 0; i < verticalCount; i++) {
      const gridLineIndex = i % verticalLines;
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
    >
      
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