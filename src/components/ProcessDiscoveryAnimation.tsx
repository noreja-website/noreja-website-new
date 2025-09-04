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
  { id: 'data', x: 15, y: 45, icon: Database, label: 'Data Collection', description: 'Raw process data', step: 1 },
  { id: 'extract', x: 30, y: 25, icon: Cpu, label: 'Data Processing', description: 'Extract patterns', step: 2 },
  { id: 'analyze', x: 50, y: 60, icon: BarChart3, label: 'Analysis', description: 'Discover insights', step: 3 },
  { id: 'optimize', x: 75, y: 35, icon: Target, label: 'Optimization', description: 'Improve processes', step: 4 },
  { id: 'monitor', x: 40, y: 75, icon: TrendingUp, label: 'Monitoring', description: 'Continuous tracking', step: 5 },
  { id: 'workflow', x: 25, y: 65, icon: Workflow, label: 'Process Flow', description: 'Automated workflows', step: 6 },
  { id: 'insights', x: 65, y: 20, icon: Zap, label: 'AI Insights', description: 'Smart recommendations', step: 7 },
  { id: 'security', x: 85, y: 60, icon: Database, label: 'Security Layer', description: 'Data protection', step: 8 },
  { id: 'integration', x: 10, y: 20, icon: Cpu, label: 'System Integration', description: 'Connect systems', step: 9 },
  { id: 'automation', x: 60, y: 80, icon: BarChart3, label: 'Automation', description: 'Automated tasks', step: 10 },
  { id: 'reporting', x: 90, y: 25, icon: Target, label: 'Reporting', description: 'Generate reports', step: 11 },
  { id: 'compliance', x: 20, y: 85, icon: TrendingUp, label: 'Compliance', description: 'Regulatory checks', step: 12 },
  { id: 'prediction', x: 80, y: 75, icon: Workflow, label: 'Prediction', description: 'Future insights', step: 13 },
  { id: 'alerts', x: 45, y: 15, icon: Zap, label: 'Real-time Alerts', description: 'Instant notifications', step: 14 },
  { id: 'dashboard', x: 70, y: 50, icon: Database, label: 'Live Dashboard', description: 'Real-time view', step: 15 },
];

const processEdges: ProcessEdge[] = [
  { from: 'integration', to: 'data', step: 2, path: 'M 10 20 Q 12.5 32.5 15 45' },
  { from: 'data', to: 'extract', step: 3, path: 'M 15 45 Q 22.5 35 30 25' },
  { from: 'extract', to: 'analyze', step: 4, path: 'M 30 25 Q 40 42.5 50 60' },
  { from: 'analyze', to: 'optimize', step: 5, path: 'M 50 60 Q 62.5 47.5 75 35' },
  { from: 'data', to: 'workflow', step: 6, path: 'M 15 45 Q 20 55 25 65' },
  { from: 'workflow', to: 'monitor', step: 7, path: 'M 25 65 Q 32.5 70 40 75' },
  { from: 'extract', to: 'insights', step: 8, path: 'M 30 25 Q 47.5 22.5 65 20' },
  { from: 'analyze', to: 'monitor', step: 9, path: 'M 50 60 Q 45 67.5 40 75' },
  { from: 'optimize', to: 'security', step: 10, path: 'M 75 35 Q 80 47.5 85 60' },
  { from: 'insights', to: 'alerts', step: 11, path: 'M 65 20 Q 55 17.5 45 15' },
  { from: 'monitor', to: 'automation', step: 12, path: 'M 40 75 Q 50 77.5 60 80' },
  { from: 'security', to: 'reporting', step: 13, path: 'M 85 60 Q 87.5 42.5 90 25' },
  { from: 'workflow', to: 'compliance', step: 14, path: 'M 25 65 Q 22.5 75 20 85' },
  { from: 'automation', to: 'prediction', step: 15, path: 'M 60 80 Q 70 77.5 80 75' },
  { from: 'optimize', to: 'dashboard', step: 16, path: 'M 75 35 Q 72.5 42.5 70 50' },
  { from: 'security', to: 'dashboard', step: 17, path: 'M 85 60 Q 77.5 55 70 50' },
  { from: 'insights', to: 'dashboard', step: 18, path: 'M 65 20 Q 67.5 35 70 50' },
  { from: 'alerts', to: 'dashboard', step: 19, path: 'M 45 15 Q 57.5 32.5 70 50' },
  { from: 'reporting', to: 'dashboard', step: 20, path: 'M 90 25 Q 80 37.5 70 50' },
  { from: 'prediction', to: 'dashboard', step: 21, path: 'M 80 75 Q 75 62.5 70 50' },
];

export function ProcessDiscoveryAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isComplete, setIsComplete] = useState(false);
  const [showParticles, setShowParticles] = useState(false);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Transform scroll progress to animation steps (0-22 steps) with much longer scroll distance
  const animationProgress = useTransform(scrollYProgress, [0, 1], [0, 22]);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const unsubscribe = animationProgress.on('change', (latest) => {
      const step = Math.floor(latest);
      setCurrentStep(step);
      if (step >= 22) {
        setIsComplete(true);
      }
      if (step >= 2) {
        setShowParticles(true);
      }
    });

    return unsubscribe;
  }, [animationProgress]);

  // Create scanning effect
  const scanProgress = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <div ref={containerRef} className="relative">
      {/* Fixed immersive hero section - respects navbar space */}
      <motion.div 
        className="fixed top-16 left-0 right-0 bottom-0 z-10 overflow-hidden"
        style={{ height: 'calc(100vh - 4rem)' }}
      >
        {/* Animated background with particles and grid */}
        <div className="absolute inset-0">
          {/* Base gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
          
          {/* Animated grid overlay */}
          <motion.div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(hsl(var(--noreja-tertiary) / 0.1) 1px, transparent 1px),
                linear-gradient(90deg, hsl(var(--noreja-tertiary) / 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
            }}
            animate={{
              backgroundPosition: showParticles ? ['0 0', '40px 40px'] : '0 0'
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />

          {/* Holographic scanning lines */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(90deg, transparent 0%, hsl(var(--noreja-tertiary) / 0.3) 50%, transparent 100%)`,
              transform: `translateX(-100%)`,
            }}
            animate={{
              transform: currentStep > 0 ? ['translateX(-100%)', 'translateX(100vw)'] : 'translateX(-100%)'
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />

          {/* Particle effects */}
          {showParticles && Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{
                background: `hsl(var(--noreja-${['main', 'secondary', 'tertiary'][i % 3]}))`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                y: [0, -50, -100],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeOut"
              }}
            />
          ))}
        </div>

        {/* Process Graph Canvas - Full viewport */}
        <div className="relative w-full h-full">
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Enhanced gradients and effects */}
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
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              <filter id="strongGlow">
                <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {/* Enhanced edges with data flow particles */}
            {processEdges.map((edge, index) => (
              <g key={`edge-group-${edge.from}-${edge.to}`}>
                {/* Main edge path */}
                <motion.path
                  d={edge.path}
                  stroke="url(#edgeGradient)"
                  strokeWidth="1"
                  fill="none"
                  filter="url(#glow)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{
                    pathLength: currentStep >= edge.step ? 1 : 0,
                    opacity: currentStep >= edge.step ? 0.9 : 0
                  }}
                  transition={{ duration: 1.5, ease: "easeInOut", delay: edge.step * 0.2 }}
                />
                
                {/* Data flow particles */}
                {currentStep >= edge.step && (
                  <motion.circle
                    r="0.8"
                    fill="hsl(var(--noreja-tertiary))"
                    filter="url(#strongGlow)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                      ease: "easeInOut"
                    }}
                  >
                    <animateMotion dur="2s" repeatCount="indefinite" begin={`${index * 0.3}s`}>
                      <mpath href={`#path-${edge.from}-${edge.to}`}/>
                    </animateMotion>
                  </motion.circle>
                )}
                
                {/* Hidden path for motion */}
                <path id={`path-${edge.from}-${edge.to}`} d={edge.path} fill="none" stroke="none" />
              </g>
            ))}
          </svg>

          {/* Enhanced nodes - Much larger and more futuristic */}
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
                  duration: 1, 
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: isVisible ? node.step * 0.3 : 0
                }}
              >
                {/* Multiple layered glow effects */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: `radial-gradient(circle, hsl(var(--noreja-main) / 0.4) 0%, hsl(var(--noreja-tertiary) / 0.2) 50%, transparent 100%)`,
                    width: '200px',
                    height: '200px',
                    transform: 'translate(-50%, -50%)',
                    left: '50%',
                    top: '50%'
                  }}
                  animate={{
                    scale: isVisible ? [1, 1.4, 1] : 0,
                    opacity: isVisible ? [0.3, 0.6, 0.3] : 0
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Secondary glow */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: `radial-gradient(circle, hsl(var(--noreja-tertiary) / 0.5) 0%, transparent 70%)`,
                    width: '120px',
                    height: '120px',
                    transform: 'translate(-50%, -50%)',
                    left: '50%',
                    top: '50%'
                  }}
                  animate={{
                    scale: isVisible ? [1, 1.2, 1] : 0,
                    opacity: isVisible ? [0.6, 1, 0.6] : 0
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                />

                {/* Enhanced node circle - Extra large and futuristic */}
                <motion.div 
                  className="relative w-32 h-32 bg-gradient-to-br from-noreja-main via-noreja-secondary to-noreja-tertiary rounded-full flex items-center justify-center shadow-2xl border-4 border-noreja-tertiary/50"
                  style={{
                    boxShadow: '0 0 60px hsl(var(--noreja-main) / 0.8), inset 0 0 30px hsl(var(--noreja-tertiary) / 0.4)'
                  }}
                  animate={{
                    rotateY: isVisible ? [0, 360] : 0
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <Icon className="w-16 h-16 text-white drop-shadow-lg" />
                  
                  {/* Inner pulse effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-white/30"
                    animate={{
                      scale: isVisible ? [1, 1.3, 1] : 1,
                      opacity: isVisible ? [0.8, 0, 0.8] : 0
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeOut"
                    }}
                  />
                </motion.div>

                {/* Enhanced node label with holographic effect */}
                <motion.div
                  className="absolute top-36 left-1/2 transform -translate-x-1/2 text-center min-w-max"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{
                    opacity: isVisible ? 1 : 0,
                    y: isVisible ? 0 : 15
                  }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  <div className="text-base font-bold text-foreground mb-2 drop-shadow-lg">
                    {node.label}
                  </div>
                  <div className="text-sm text-muted-foreground px-3 py-2 bg-background/90 rounded-lg backdrop-blur-md border border-noreja-tertiary/30 shadow-xl">
                    {node.description}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}

          {/* Enhanced central title with scanning effect */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20"
            initial={{ opacity: 1, scale: 1 }}
            animate={{ 
              opacity: currentStep > 0 ? 0 : 1,
              scale: currentStep > 0 ? 0.8 : 1
            }}
            transition={{ duration: 1.2 }}
          >
            <motion.h1 
              className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-noreja-main via-noreja-secondary to-noreja-tertiary bg-clip-text text-transparent mb-6"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                backgroundSize: '200% 200%',
                textShadow: '0 0 30px hsl(var(--noreja-main) / 0.5)'
              }}
            >
              Process Mining
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground"
              animate={{
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Discover hidden patterns in your processes
            </motion.p>
            
            {/* Scanning line effect */}
            <motion.div
              className="absolute -inset-x-10 top-0 h-0.5 bg-gradient-to-r from-transparent via-noreja-tertiary to-transparent"
              animate={{
                y: [0, 200]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </motion.div>

          {/* Progress indicator */}
          <motion.div
            className="absolute bottom-20 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: currentStep > 0 && !isComplete ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-2">
              <div className="text-sm text-muted-foreground">Discovery Progress</div>
              <div className="w-32 h-1 bg-border rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-noreja-main to-noreja-tertiary"
                  initial={{ width: '0%' }}
                  animate={{ width: `${(currentStep / 22) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
          </motion.div>

          {/* Enhanced completion message */}
          <motion.div
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: isComplete ? 1 : 0,
              y: isComplete ? 0 : 30
            }}
            transition={{ duration: 1 }}
          >
            <motion.div 
              className="flex items-center gap-3 text-noreja-tertiary font-semibold text-lg"
              animate={{
                scale: [1, 1.05, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <span>Process Discovery Complete</span>
              <ArrowRight className="w-5 h-5" />
            </motion.div>
            <div className="text-sm text-muted-foreground mt-2">
              Continue scrolling to explore
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Extended spacer for much longer scroll experience */}
      <div className="h-[800vh]" />
    </div>
  );
}