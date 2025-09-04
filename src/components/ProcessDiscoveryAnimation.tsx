import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Database, Cpu, BarChart3, Workflow, ArrowRight, Zap, Target, TrendingUp } from 'lucide-react';

interface ProcessNode {
  id: string;
  x: number;
  y: number;
  icon: React.ComponentType<any>;
  label: string;
  description: string;
  step: number;
}

interface ProcessEdge {
  from: string;
  to: string;
  step: number;
  path: string;
}

const processNodes: ProcessNode[] = [
  { id: 'data', x: 20, y: 50, icon: Database, label: 'Data Collection', description: 'Raw process data', step: 1 },
  { id: 'extract', x: 40, y: 30, icon: Cpu, label: 'Data Processing', description: 'Extract patterns', step: 2 },
  { id: 'analyze', x: 60, y: 60, icon: BarChart3, label: 'Analysis', description: 'Discover insights', step: 3 },
  { id: 'optimize', x: 80, y: 40, icon: Target, label: 'Optimization', description: 'Improve processes', step: 4 },
  { id: 'monitor', x: 50, y: 80, icon: TrendingUp, label: 'Monitoring', description: 'Continuous tracking', step: 5 },
  { id: 'workflow', x: 30, y: 70, icon: Workflow, label: 'Process Flow', description: 'Automated workflows', step: 6 },
  { id: 'insights', x: 70, y: 20, icon: Zap, label: 'AI Insights', description: 'Smart recommendations', step: 7 },
];

const processEdges: ProcessEdge[] = [
  { from: 'data', to: 'extract', step: 2, path: 'M 20 50 Q 30 40 40 30' },
  { from: 'extract', to: 'analyze', step: 3, path: 'M 40 30 Q 50 45 60 60' },
  { from: 'analyze', to: 'optimize', step: 4, path: 'M 60 60 Q 70 50 80 40' },
  { from: 'data', to: 'workflow', step: 6, path: 'M 20 50 Q 25 60 30 70' },
  { from: 'workflow', to: 'monitor', step: 6, path: 'M 30 70 Q 40 75 50 80' },
  { from: 'extract', to: 'insights', step: 7, path: 'M 40 30 Q 55 25 70 20' },
  { from: 'analyze', to: 'monitor', step: 5, path: 'M 60 60 Q 55 70 50 80' },
];

export function ProcessDiscoveryAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isComplete, setIsComplete] = useState(false);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Transform scroll progress to animation steps (0-8 steps)
  const animationProgress = useTransform(scrollYProgress, [0, 1], [0, 8]);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const unsubscribe = animationProgress.on('change', (latest) => {
      const step = Math.floor(latest);
      setCurrentStep(step);
      if (step >= 8) {
        setIsComplete(true);
      }
    });

    return unsubscribe;
  }, [animationProgress]);

  // Background opacity transform
  const bgOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0.3]);

  return (
    <div ref={containerRef} className="relative">
      {/* Fixed hero section that stays in view during scroll */}
      <motion.div 
        className="fixed inset-0 z-10 flex items-center justify-center"
        style={{ opacity: bgOpacity }}
      >
        {/* Hero background with animated grid */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/90">
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `linear-gradient(hsl(var(--noreja-tertiary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--noreja-tertiary)) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}
          />
        </div>

        {/* Process Graph Canvas */}
        <div className="relative w-full h-full max-w-6xl mx-auto p-8">
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Render edges */}
            {processEdges.map((edge) => (
              <motion.path
                key={`${edge.from}-${edge.to}`}
                d={edge.path}
                stroke="url(#edgeGradient)"
                strokeWidth="0.5"
                fill="none"
                strokeDasharray="2,1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: currentStep >= edge.step ? 1 : 0,
                  opacity: currentStep >= edge.step ? 0.8 : 0
                }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
            ))}

            {/* Define gradients */}
            <defs>
              <linearGradient id="edgeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(var(--noreja-main))" />
                <stop offset="50%" stopColor="hsl(var(--noreja-tertiary))" />
                <stop offset="100%" stopColor="hsl(var(--noreja-secondary))" />
              </linearGradient>
              <radialGradient id="nodeGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="hsl(var(--noreja-main))" />
                <stop offset="100%" stopColor="hsl(var(--noreja-secondary))" />
              </radialGradient>
            </defs>
          </svg>

          {/* Render nodes */}
          {processNodes.map((node) => {
            const Icon = node.icon;
            const isVisible = currentStep >= node.step;
            
            return (
              <motion.div
                key={node.id}
                className="absolute"
                style={{
                  left: `${node.x}%`,
                  top: `${node.y}%`,
                  transform: 'translate(-50%, -50%)'
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: isVisible ? 1 : 0,
                  opacity: isVisible ? 1 : 0
                }}
                transition={{ 
                  duration: 0.8, 
                  ease: "easeOut",
                  delay: isVisible ? 0.3 : 0
                }}
              >
                {/* Node glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'radial-gradient(circle, hsl(var(--noreja-main) / 0.3) 0%, transparent 70%)',
                    width: '120px',
                    height: '120px',
                    transform: 'translate(-50%, -50%)',
                    left: '50%',
                    top: '50%'
                  }}
                  animate={{
                    scale: isVisible ? [1, 1.2, 1] : 0,
                    opacity: isVisible ? [0.5, 0.8, 0.5] : 0
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                {/* Node circle */}
                <div className="relative w-16 h-16 bg-gradient-to-br from-noreja-main to-noreja-secondary rounded-full flex items-center justify-center shadow-2xl border-2 border-noreja-tertiary/30">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Node label */}
                <motion.div
                  className="absolute top-20 left-1/2 transform -translate-x-1/2 text-center min-w-max"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: isVisible ? 1 : 0,
                    y: isVisible ? 0 : 10
                  }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <div className="text-sm font-semibold text-foreground mb-1">
                    {node.label}
                  </div>
                  <div className="text-xs text-muted-foreground px-2 py-1 bg-background/80 rounded-md backdrop-blur-sm border border-border/50">
                    {node.description}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}

          {/* Central title that appears first */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20"
            initial={{ opacity: 1, scale: 1 }}
            animate={{ 
              opacity: currentStep > 0 ? 0 : 1,
              scale: currentStep > 0 ? 0.8 : 1
            }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-noreja-main via-noreja-secondary to-noreja-tertiary bg-clip-text text-transparent mb-4">
              Process Mining
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Discover hidden patterns in your processes
            </p>
          </motion.div>

          {/* Completion message */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isComplete ? 1 : 0,
              y: isComplete ? 0 : 20
            }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 text-noreja-tertiary font-medium">
              <span>Continue exploring</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Spacer to enable scrolling */}
      <div className="h-[300vh]" />
    </div>
  );
}