import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Database, Shield, Zap, Users, Rocket, Target, ArrowDown, BarChart3, Brain, Lock } from "lucide-react";

interface ProcessStep {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  side: 'left' | 'right' | 'center';
  size?: 'small' | 'medium' | 'large';
}

interface ProcessGraphSectionProps {
  steps?: ProcessStep[];
}

const defaultSteps: ProcessStep[] = [
  {
    id: "data",
    title: "Data Collection",
    description: "Intelligent data gathering from multiple sources",
    icon: Database,
    side: 'center',
    size: 'large'
  },
  {
    id: "processing", 
    title: "AI Processing",
    description: "Advanced machine learning algorithms analyze patterns",
    icon: Brain,
    side: 'left',
    size: 'medium'
  },
  {
    id: "security",
    title: "Security Layer", 
    description: "Enterprise-grade security and compliance",
    icon: Shield,
    side: 'right',
    size: 'medium'
  },
  {
    id: "analysis",
    title: "Pattern Analysis",
    description: "Deep learning identifies complex data relationships", 
    icon: BarChart3,
    side: 'left',
    size: 'small'
  },
  {
    id: "optimization",
    title: "Optimization",
    description: "Continuous performance enhancement", 
    icon: Target,
    side: 'center',
    size: 'large'
  },
  {
    id: "encryption",
    title: "Data Encryption",
    description: "Military-grade protection for sensitive information",
    icon: Lock,
    side: 'right',
    size: 'small'
  },
  {
    id: "deployment",
    title: "Deployment",
    description: "Seamless integration with your systems",
    icon: Rocket,
    side: 'left',
    size: 'medium'
  },
  {
    id: "users",
    title: "User Experience",
    description: "Intuitive interface for maximum productivity",
    icon: Users,
    side: 'center',
    size: 'large'
  }
];

function ProcessNode({ step, index, isLast }: { step: ProcessStep; index: number; isLast: boolean }) {
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

  const getConnectorPath = () => {
    if (isLast) return null;
    
    const nextStep = defaultSteps[index + 1];
    if (!nextStep) return null;

    // Different connector styles based on layout
    if (step.side === 'center' && nextStep.side === 'left') {
      return "M 50% 100% Q 25% 150% 25% 200%";
    } else if (step.side === 'left' && nextStep.side === 'right') {
      return "M 25% 100% Q 50% 150% 75% 200%";
    } else if (step.side === 'right' && nextStep.side === 'left') {
      return "M 75% 100% Q 50% 150% 25% 200%";
    } else if (step.side === 'left' && nextStep.side === 'center') {
      return "M 25% 100% Q 50% 150% 50% 200%";
    } else if (step.side === 'right' && nextStep.side === 'center') {
      return "M 75% 100% Q 50% 150% 50% 200%";
    }
    return "M 50% 100% L 50% 200%";
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
          <div className={`${getNodeSize()} bg-card border-2 border-noreja-tertiary rounded-full flex items-center justify-center shadow-glow-accent`}>
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

      {/* Connecting path to next node */}
      {!isLast && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.6 } : { opacity: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute inset-x-0 top-0 h-full pointer-events-none"
        >
          <svg className="w-full h-full" viewBox="0 0 100 200" preserveAspectRatio="none">
            <motion.path
              d={getConnectorPath()}
              stroke="hsl(var(--noreja-tertiary))"
              strokeWidth="2"
              fill="none"
              strokeDasharray="5,5"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ delay: 1.4, duration: 1.5, ease: "easeInOut" }}
            />
          </svg>
        </motion.div>
      )}
    </div>
  );
}

export function ProcessGraphSection({ steps = defaultSteps }: ProcessGraphSectionProps) {
  const containerRef = useRef(null);

  return (
    <section ref={containerRef} className="relative min-h-screen">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--noreja-tertiary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--noreja-tertiary)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 lg:px-8">
        {/* Process graph nodes */}
        <div className="relative">
          {steps.map((step, index) => (
            <ProcessNode 
              key={step.id}
              step={step} 
              index={index}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}