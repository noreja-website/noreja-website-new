import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Database, Shield, Users, Rocket, Target, BarChart3, Brain, Lock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import graphThreeNodes from "@/assets/graph_three_nodes.png";

interface Connection {
  targetId: string;
  type: 'direct' | 'branch' | 'merge';
  strength?: number;
}

interface ProcessStep {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  side: 'left' | 'right' | 'center';
  size?: 'small' | 'medium' | 'large';
  connections?: Connection[];
}

interface ProcessGraphSectionProps {
  steps?: ProcessStep[];
}

export function ProcessGraphSection({ steps = undefined }: ProcessGraphSectionProps) {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  // All steps including the header step for connection calculation
  const allSteps: ProcessStep[] = [
    {
      id: "data",
      title: t.hero.dataCollection.title,
      description: t.hero.dataCollection.description,
      icon: Database,
      side: 'center',
      size: 'large',
      connections: [
        { targetId: "processing", type: 'branch' },
        { targetId: "security", type: 'branch' }
      ]
    },
    {
      id: "processing", 
      title: t.process.steps.processing.title,
      description: t.process.steps.processing.description,
      icon: Brain,
      side: 'left',
      size: 'medium',
      connections: [
        { targetId: "analysis", type: 'merge' }
      ]
    },
    {
      id: "security",
      title: t.process.steps.security.title,
      description: t.process.steps.security.description,
      icon: Shield,
      side: 'right',
      size: 'medium',
      connections: [
        { targetId: "analysis", type: 'merge' }
      ]
    },
    {
      id: "analysis",
      title: t.process.steps.analysis.title,
      description: t.process.steps.analysis.description,
      icon: BarChart3,
      side: 'center',
      size: 'large',
      connections: [
        { targetId: "optimization", type: 'branch' },
        { targetId: "encryption", type: 'branch' }
      ]
    },
    {
      id: "optimization",
      title: t.process.steps.optimization.title,
      description: t.process.steps.optimization.description,
      icon: Target,
      side: 'left',
      size: 'medium',
      connections: [
        { targetId: "deployment", type: 'merge' }
      ]
    },
    {
      id: "encryption",
      title: t.process.steps.encryption.title,
      description: t.process.steps.encryption.description,
      icon: Lock,
      side: 'right',
      size: 'medium',
      connections: [
        { targetId: "deployment", type: 'merge' }
      ]
    },
    {
      id: "deployment",
      title: t.process.steps.deployment.title,
      description: t.process.steps.deployment.description,
      icon: Rocket,
      side: 'center',
      size: 'large',
      connections: [
        { targetId: "users", type: 'direct' }
      ]
    },
    {
      id: "users",
      title: t.process.steps.users.title,
      description: t.process.steps.users.description,
      icon: Users,
      side: 'center',
      size: 'large',
      connections: []
    }
  ];

  // Steps for rendering (excluding the header step)
  const defaultSteps = allSteps.slice(1);
  const processSteps = steps || defaultSteps;

function ProcessNode({ step, index, allSteps }: { step: ProcessStep; index: number; allSteps: ProcessStep[] }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-300px" });
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const Icon = step.icon;

  // Track if animation has been triggered at least once
  useEffect(() => {
    if (isInView && !hasBeenVisible) {
      setHasBeenVisible(true);
    }
  }, [isInView, hasBeenVisible]);

  const shouldAnimate = hasBeenVisible;

  const getLayoutClasses = () => {
    const baseClasses = "relative w-full flex items-center flex-col md:flex-row";
    switch (step.side) {
      case 'left':
        return `${baseClasses} md:justify-start pl-0 md:pl-16`;
      case 'right':
        return `${baseClasses} md:justify-end pr-0 md:pr-16`;
      case 'center':
        return `${baseClasses} md:justify-center`;
      default:
        return `${baseClasses} md:justify-center`;
    }
  };

  const getCaptionPosition = () => {
    switch (step.side) {
      case 'left':
        return "mt-4 md:mt-0 md:ml-8";
      case 'right':
        return "mt-4 md:mt-0 md:mr-8 md:order-first";
      case 'center':
        return "mt-4 md:mt-0 md:ml-8";
      default:
        return "mt-4 md:mt-0 md:ml-8";
    }
  };

  const getStepPosition = () => {
    switch (step.side) {
      case 'left': return { x: 25, y: 0 };
      case 'right': return { x: 75, y: 0 };
      case 'center': return { x: 50, y: 0 };
      default: return { x: 50, y: 0 };
    }
  };

  return (
    <div ref={ref} className="relative min-h-[30vh] w-full flex flex-col">
      <div className={getLayoutClasses()}>
        {/* Node */}
        <motion.div
          initial={{ scale: 0, opacity: 0, y: 50 }}
          animate={shouldAnimate ? { scale: 1, opacity: 1, y: 0 } : { scale: 0, opacity: 0, y: 50 }}
          transition={{ 
            delay: 0.2,
            duration: 0.8,
            type: "spring",
            stiffness: 100
          }}
          className="relative flex-shrink-0"
        >
          {/* All nodes use graph image with rectangular glow and Y-rotation */}
          <div style={{ perspective: 800 }}>
            <motion.div
              initial={{ rotateY: 0 }}
              animate={shouldAnimate ? { rotateY: [-8, 0, 8, 0, -8] } : { rotateY: 0 }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className={`relative w-64 h-40 md:w-72 md:h-44 rounded-md bg-black/30 p-3 flex items-center justify-center`} data-node-id={step.id}>
                <motion.img 
                  src={graphThreeNodes} 
                  alt={step.title}
                  className="w-full h-full object-contain"
                  loading="lazy"
                  initial={{ rotateY: 0 }}
                  animate={shouldAnimate ? { rotateY: [-8, 0, 8, 0, -8] } : { rotateY: 0 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  style={{ transformStyle: 'preserve-3d', backfaceVisibility: 'hidden' }}
                />
                {/* Rectangular glow pulse */}
                <motion.div
                  className="pointer-events-none absolute inset-0 rounded-md border-2 border-noreja-tertiary"
                  animate={shouldAnimate ? {
                    scale: [1, 1.06, 1],
                    opacity: [0.35, 0, 0.35]
                  } : {}}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: 1.2
                  }}
                />
              </div>
            </motion.div>
          </div>
          
          {/* Circular pulse removed since all nodes now use rectangular glow */}
        </motion.div>

        {/* Caption */}
        <motion.div
          initial={{ opacity: 0, x: step.side === 'right' ? 30 : -30 }}
          animate={shouldAnimate ? { opacity: 1, x: 0 } : { opacity: 0, x: step.side === 'right' ? 30 : -30 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className={`max-w-sm ${getCaptionPosition()}`}
        >
          <h3 className="text-2xl font-bold mb-3 text-foreground">{step.title}</h3>
          <p className="text-base text-muted-foreground leading-relaxed">{step.description}</p>
        </motion.div>
      </div>

    </div>
  );
}


  // Create global connections array from all steps
  const globalConnections = allSteps.flatMap(step => 
    step.connections?.map(conn => ({
      sourceId: step.id,
      targetId: conn.targetId,
      type: conn.type
    })) || []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={containerRef} className="relative py-20"
      data-global-connections={JSON.stringify(globalConnections)}>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 lg:px-8">
          {/* Process graph nodes - starting from second step since first is in header */}
          <div className="relative">
            {processSteps.map((step, index) => (
              <ProcessNode 
                key={step.id}
                step={step} 
                index={index}
                allSteps={allSteps}
              />
            ))}
          </div>
        </div>
      </section>
  );
}