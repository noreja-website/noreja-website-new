import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Database, Cpu, BarChart3, Workflow, ArrowRight, Zap, Target, TrendingUp, Search, Users, Settings, CloudUpload, Network, Shield, Eye } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

interface ProcessNode {
  id: string;
  x: number;
  y: number;
  icon: React.ComponentType<any>;
  label: string;
  description: string;
  step: number;
  type: 'data' | 'process' | 'analysis' | 'output';
}

interface ProcessEdge {
  from: string;
  to: string;
  step: number;
  path: string;
}

const processNodes: ProcessNode[] = [
  { id: 'data-source', x: 15, y: 30, icon: Database, label: 'Data Collection', description: 'Raw process data', step: 1, type: 'data' },
  { id: 'upload', x: 35, y: 20, icon: CloudUpload, label: 'Data Upload', description: 'Secure data ingestion', step: 2, type: 'data' },
  { id: 'extract', x: 55, y: 35, icon: Cpu, label: 'Data Processing', description: 'Extract patterns', step: 3, type: 'process' },
  { id: 'discover', x: 75, y: 25, icon: Search, label: 'Process Discovery', description: 'Find hidden processes', step: 4, type: 'analysis' },
  { id: 'analyze', x: 25, y: 60, icon: BarChart3, label: 'Analysis Engine', description: 'Deep insights', step: 5, type: 'analysis' },
  { id: 'optimize', x: 65, y: 55, icon: Target, label: 'Optimization', description: 'Improve processes', step: 6, type: 'output' },
  { id: 'monitor', x: 45, y: 75, icon: TrendingUp, label: 'Real-time Monitoring', description: 'Continuous tracking', step: 7, type: 'output' },
  { id: 'workflow', x: 85, y: 60, icon: Workflow, label: 'Workflow Management', description: 'Automated flows', step: 8, type: 'process' },
  { id: 'insights', x: 15, y: 75, icon: Zap, label: 'AI Insights', description: 'Smart recommendations', step: 9, type: 'analysis' },
  { id: 'collaboration', x: 75, y: 80, icon: Users, label: 'Team Collaboration', description: 'Shared workspace', step: 10, type: 'output' },
  { id: 'security', x: 45, y: 15, icon: Shield, label: 'Security Layer', description: 'Data protection', step: 11, type: 'process' },
  { id: 'network', x: 25, y: 45, icon: Network, label: 'Process Network', description: 'Connected systems', step: 12, type: 'process' },
  { id: 'config', x: 65, y: 40, icon: Settings, label: 'Configuration', description: 'Custom settings', step: 13, type: 'process' },
  { id: 'visual', x: 85, y: 35, icon: Eye, label: 'Visualization', description: 'Interactive dashboards', step: 14, type: 'output' }
];

const processEdges: ProcessEdge[] = [
  { from: 'data-source', to: 'upload', step: 2, path: 'M 15 30 Q 25 25 35 20' },
  { from: 'upload', to: 'security', step: 11, path: 'M 35 20 Q 40 17 45 15' },
  { from: 'upload', to: 'extract', step: 3, path: 'M 35 20 Q 45 27 55 35' },
  { from: 'extract', to: 'discover', step: 4, path: 'M 55 35 Q 65 30 75 25' },
  { from: 'extract', to: 'config', step: 13, path: 'M 55 35 Q 60 37 65 40' },
  { from: 'data-source', to: 'analyze', step: 5, path: 'M 15 30 Q 20 45 25 60' },
  { from: 'analyze', to: 'network', step: 12, path: 'M 25 60 Q 25 52 25 45' },
  { from: 'analyze', to: 'insights', step: 9, path: 'M 25 60 Q 20 67 15 75' },
  { from: 'discover', to: 'optimize', step: 6, path: 'M 75 25 Q 70 40 65 55' },
  { from: 'discover', to: 'visual', step: 14, path: 'M 75 25 Q 80 30 85 35' },
  { from: 'optimize', to: 'monitor', step: 7, path: 'M 65 55 Q 55 65 45 75' },
  { from: 'optimize', to: 'workflow', step: 8, path: 'M 65 55 Q 75 57 85 60' },
  { from: 'workflow', to: 'collaboration', step: 10, path: 'M 85 60 Q 80 70 75 80' },
  { from: 'network', to: 'config', step: 13, path: 'M 25 45 Q 45 42 65 40' },
  { from: 'insights', to: 'monitor', step: 7, path: 'M 15 75 Q 30 75 45 75' },
  { from: 'config', to: 'visual', step: 14, path: 'M 65 40 Q 75 37 85 35' }
];

export function ProcessMiningHero() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Map scroll progress to animation steps (0-15 steps for complete animation)
  const animationProgress = useTransform(scrollYProgress, [0, 1], [0, 15]);

  useEffect(() => {
    const unsubscribe = animationProgress.on('change', (latest) => {
      const step = Math.floor(latest);
      setCurrentStep(step);
      if (step >= 14) {
        setIsAnimationComplete(true);
      }
    });

    return unsubscribe;
  }, [animationProgress]);

  return (
    <div ref={containerRef} className="relative">
      {/* Sticky Hero Section */}
      <motion.div 
        className="sticky top-0 h-screen w-full overflow-hidden bg-background z-10"
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          {/* Grid Pattern */}
          <motion.div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(hsl(var(--noreja-tertiary) / 0.1) 1px, transparent 1px),
                linear-gradient(90deg, hsl(var(--noreja-tertiary) / 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
            }}
            animate={{
              backgroundPosition: currentStep > 0 ? ['0 0', '60px 60px'] : '0 0'
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />

          {/* Scanning Effect */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(90deg, transparent 0%, hsl(var(--noreja-main) / 0.2) 50%, transparent 100%)`,
              transform: `translateX(-100%)`,
            }}
            animate={{
              transform: currentStep > 0 ? ['translateX(-100%)', 'translateX(100vw)'] : 'translateX(-100%)'
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Radar Sweep */}
          <motion.div
            className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2"
            style={{
              background: `conic-gradient(from 0deg, transparent 0deg, hsl(var(--noreja-tertiary) / 0.1) 60deg, transparent 120deg)`,
              borderRadius: '50%',
            }}
            animate={{
              rotate: currentStep > 0 ? [0, 360] : 0
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Initial Hero Content */}
        <motion.div
          className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4"
          animate={{
            opacity: currentStep > 0 ? 0 : 1,
            scale: currentStep > 0 ? 0.8 : 1
          }}
          transition={{ duration: 1 }}
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              backgroundSize: '200% 200%',
            }}
          >
            Process Mining
          </motion.h1>
          <motion.p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
            {t.hero.subtitle}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" className="gradient-primary glow-primary group">
              {t.hero.getStarted}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10">
              {t.hero.learnMore}
            </Button>
          </motion.div>
        </motion.div>

        {/* Process Graph */}
        <div className="absolute inset-0 z-20">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient id="edgeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(var(--noreja-main))" />
                <stop offset="50%" stopColor="hsl(var(--noreja-tertiary))" />
                <stop offset="100%" stopColor="hsl(var(--noreja-secondary))" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {/* Edges */}
            {processEdges.map((edge) => (
              <motion.path
                key={`edge-${edge.from}-${edge.to}`}
                d={edge.path}
                stroke="url(#edgeGradient)"
                strokeWidth="0.5"
                fill="none"
                filter="url(#glow)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: currentStep >= edge.step ? 1 : 0,
                  opacity: currentStep >= edge.step ? 1 : 0
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            ))}
          </svg>

          {/* Nodes */}
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
                  duration: 0.6, 
                  ease: "backOut",
                  delay: isVisible ? 0.1 : 0
                }}
              >
                {/* Node Glow */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: `radial-gradient(circle, hsl(var(--noreja-${node.type === 'data' ? 'main' : node.type === 'process' ? 'secondary' : node.type === 'analysis' ? 'tertiary' : 'main'}) / 0.3) 0%, transparent 70%)`,
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

                {/* Node Circle */}
                <motion.div 
                  className={`relative w-16 h-16 rounded-full flex items-center justify-center border-2 shadow-lg
                    ${node.type === 'data' ? 'bg-gradient-to-br from-noreja-main/80 to-noreja-main border-noreja-main/50' :
                      node.type === 'process' ? 'bg-gradient-to-br from-noreja-secondary/80 to-noreja-secondary border-noreja-secondary/50' :
                      node.type === 'analysis' ? 'bg-gradient-to-br from-noreja-tertiary/80 to-noreja-tertiary border-noreja-tertiary/50' :
                      'bg-gradient-to-br from-noreja-main/80 to-noreja-secondary border-noreja-main/50'}`}
                  animate={{
                    boxShadow: isVisible ? [
                      `0 0 20px hsl(var(--noreja-${node.type === 'data' ? 'main' : node.type === 'process' ? 'secondary' : 'tertiary'}) / 0.4)`,
                      `0 0 40px hsl(var(--noreja-${node.type === 'data' ? 'main' : node.type === 'process' ? 'secondary' : 'tertiary'}) / 0.6)`,
                      `0 0 20px hsl(var(--noreja-${node.type === 'data' ? 'main' : node.type === 'process' ? 'secondary' : 'tertiary'}) / 0.4)`
                    ] : `0 0 0px transparent`
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Node Label */}
                <motion.div
                  className="absolute top-20 left-1/2 transform -translate-x-1/2 text-center min-w-max"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: isVisible ? 1 : 0,
                    y: isVisible ? 0 : 10
                  }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                >
                  <div className="text-sm font-semibold text-foreground mb-1">
                    {node.label}
                  </div>
                  <div className="text-xs text-muted-foreground bg-background/80 px-2 py-1 rounded border border-border/50 backdrop-blur-sm">
                    {node.description}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Progress Indicator */}
        <motion.div
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: currentStep > 0 && !isAnimationComplete ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center space-x-3 text-sm text-muted-foreground">
            <span>Discovering Process</span>
            <div className="w-32 h-1 bg-border rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-primary"
                initial={{ width: '0%' }}
                animate={{ width: `${(currentStep / 14) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <span>{Math.round((currentStep / 14) * 100)}%</span>
          </div>
        </motion.div>

        {/* Completion Message */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: isAnimationComplete ? 1 : 0,
            y: isAnimationComplete ? 0 : 20
          }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="flex items-center gap-2 text-noreja-tertiary font-semibold"
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
            <ArrowRight className="w-4 h-4" />
          </motion.div>
          <div className="text-sm text-muted-foreground mt-1">
            Continue scrolling to explore
          </div>
        </motion.div>
      </motion.div>

      {/* Spacer for scroll distance */}
      <div className="h-[400vh]" />
    </div>
  );
}