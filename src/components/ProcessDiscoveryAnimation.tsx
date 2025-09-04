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
  const [showParticles, setShowParticles] = useState(false);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Transform scroll progress to animation steps (0-8 steps) with longer scroll distance
  const animationProgress = useTransform(scrollYProgress, [0, 1], [0, 8]);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const unsubscribe = animationProgress.on('change', (latest) => {
      const step = Math.floor(latest);
      setCurrentStep(step);
      if (step >= 8) {
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
    <div ref={containerRef} className="relative h-[400vh]">
      {/* Sticky hero section that remains fixed while scroll drives animation */}
      <motion.div 
        className="sticky top-0 h-screen w-full z-10 overflow-hidden"
        style={{
          opacity: isComplete ? 0 : 1
        }}
        transition={{ duration: 1 }}
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

                {/* Enhanced node circle - Much larger */}
                <motion.div 
                  className="relative w-24 h-24 bg-gradient-to-br from-noreja-main via-noreja-secondary to-noreja-tertiary rounded-full flex items-center justify-center shadow-2xl border-4 border-noreja-tertiary/50"
                  style={{
                    boxShadow: '0 0 40px hsl(var(--noreja-main) / 0.6), inset 0 0 20px hsl(var(--noreja-tertiary) / 0.3)'
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
                  <Icon className="w-12 h-12 text-white drop-shadow-lg" />
                  
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
                  className="absolute top-28 left-1/2 transform -translate-x-1/2 text-center min-w-max"
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
                  animate={{ width: `${(currentStep / 8) * 100}%` }}
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

        {/* Hero content visible when animation completes */}
        {isComplete && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#452BE9] via-[#4569E7] to-[#23F3DA] bg-clip-text text-transparent mb-6">
                Noreja Process Mining
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Transform your business processes with AI-powered insights
              </p>
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-[#452BE9] to-[#4569E7] text-white rounded-lg font-semibold text-lg hover:scale-105 transition-transform duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}