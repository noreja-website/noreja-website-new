import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Database, Shield, Zap, Users, Rocket, Target, ArrowDown, BarChart3, Brain, Lock } from "lucide-react";

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

// All steps including the header step for connection calculation
const allSteps: ProcessStep[] = [
  {
    id: "data",
    title: "Data Collection",
    description: "Intelligent data gathering from multiple sources",
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
    title: "AI Processing",
    description: "Advanced machine learning algorithms analyze patterns",
    icon: Brain,
    side: 'left',
    size: 'medium',
    connections: [
      { targetId: "analysis", type: 'merge' }
    ]
  },
  {
    id: "security",
    title: "Security Layer", 
    description: "Enterprise-grade security and compliance",
    icon: Shield,
    side: 'right',
    size: 'medium',
    connections: [
      { targetId: "analysis", type: 'merge' }
    ]
  },
  {
    id: "analysis",
    title: "Pattern Analysis",
    description: "Deep learning identifies complex data relationships", 
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
    title: "Optimization",
    description: "Continuous performance enhancement", 
    icon: Target,
    side: 'left',
    size: 'medium',
    connections: [
      { targetId: "deployment", type: 'merge' }
    ]
  },
  {
    id: "encryption",
    title: "Data Encryption",
    description: "Military-grade protection for sensitive information",
    icon: Lock,
    side: 'right',
    size: 'medium',
    connections: [
      { targetId: "deployment", type: 'merge' }
    ]
  },
  {
    id: "deployment",
    title: "Deployment",
    description: "Seamless integration with your systems",
    icon: Rocket,
    side: 'center',
    size: 'large',
    connections: [
      { targetId: "users", type: 'direct' }
    ]
  },
  {
    id: "users",
    title: "User Experience",
    description: "Intuitive interface for maximum productivity",
    icon: Users,
    side: 'center',
    size: 'large',
    connections: []
  }
];

// Steps for rendering (excluding the header step)
const defaultSteps = allSteps.slice(1);

function ProcessNode({ step, index, allSteps }: { step: ProcessStep; index: number; allSteps: ProcessStep[] }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-300px" });
  const Icon = step.icon;
  
  const getNodeSize = () => {
    switch (step.size) {
      case 'large': return 'w-32 h-32';
      case 'medium': return 'w-24 h-24';
      case 'small': return 'w-20 h-20';
      default: return 'w-24 h-24';
    }
  };

  const getIconSize = () => {
    switch (step.size) {
      case 'large': return 'w-16 h-16';
      case 'medium': return 'w-12 h-12';
      case 'small': return 'w-10 h-10';
      default: return 'w-12 h-12';
    }
  };

  const getLayoutClasses = () => {
    const baseClasses = "relative w-full flex items-center";
    switch (step.side) {
      case 'left':
        return `${baseClasses} justify-start pl-8 lg:pl-16`;
      case 'right':
        return `${baseClasses} justify-end pr-8 lg:pr-16`;
      case 'center':
        return `${baseClasses} justify-center`;
      default:
        return `${baseClasses} justify-center`;
    }
  };

  const getCaptionPosition = () => {
    switch (step.side) {
      case 'left':
        return "ml-8";
      case 'right':
        return "mr-8 order-first";
      case 'center':
        return "ml-8";
      default:
        return "ml-8";
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
    <div ref={ref} className="relative min-h-[40vh] w-full flex flex-col">
      <div className={getLayoutClasses()}>
        {/* Node */}
        <motion.div
          initial={{ scale: 0, opacity: 0, y: 50 }}
          animate={isInView ? { scale: 1, opacity: 1, y: 0 } : { scale: 0, opacity: 0, y: 50 }}
          transition={{ 
            delay: 0.2,
            duration: 0.8,
            type: "spring",
            stiffness: 100
          }}
          className="relative flex-shrink-0"
        >
          <div 
            data-node-id={step.id}
            className={`${getNodeSize()} bg-card border-2 border-noreja-tertiary rounded-full flex items-center justify-center shadow-glow-accent`}
          >
            <Icon className={`${getIconSize()} text-noreja-tertiary`} />
          </div>
          
          {/* Pulse effect */}
          <motion.div
            className={`absolute inset-0 ${getNodeSize()} border-2 border-noreja-tertiary rounded-full`}
            animate={isInView ? {
              scale: [1, 1.4, 1],
              opacity: [0.4, 0, 0.4]
            } : {}}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: 1.5
            }}
          />
        </motion.div>

        {/* Caption */}
        <motion.div
          initial={{ opacity: 0, x: step.side === 'right' ? 30 : -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: step.side === 'right' ? 30 : -30 }}
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

export function ProcessGraphSection({ steps = defaultSteps }: ProcessGraphSectionProps) {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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
            {steps.map((step, index) => (
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