import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Database, Shield, Zap, Users, Rocket, Target } from "lucide-react";

interface ProcessStep {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  position: { x: number; y: number };
  connections?: string[];
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
    position: { x: 10, y: 50 },
    connections: ["processing"]
  },
  {
    id: "processing",
    title: "AI Processing",
    description: "Advanced machine learning algorithms analyze patterns",
    icon: Zap,
    position: { x: 35, y: 25 },
    connections: ["security", "optimization"]
  },
  {
    id: "security",
    title: "Security Layer",
    description: "Enterprise-grade security and compliance",
    icon: Shield,
    position: { x: 60, y: 15 },
    connections: ["deployment"]
  },
  {
    id: "optimization",
    title: "Optimization",
    description: "Continuous performance enhancement",
    icon: Target,
    position: { x: 60, y: 50 },
    connections: ["deployment"]
  },
  {
    id: "deployment",
    title: "Deployment",
    description: "Seamless integration with your systems",
    icon: Rocket,
    position: { x: 85, y: 35 },
    connections: ["users"]
  },
  {
    id: "users",
    title: "User Experience",
    description: "Intuitive interface for maximum productivity",
    icon: Users,
    position: { x: 90, y: 70 }
  }
];

export function ProcessGraphSection({ steps = defaultSteps }: ProcessGraphSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getConnectionPath = (from: ProcessStep, to: ProcessStep) => {
    const startX = from.position.x;
    const startY = from.position.y;
    const endX = to.position.x;
    const endY = to.position.y;
    
    const midX = (startX + endX) / 2;
    
    return `M ${startX} ${startY} Q ${midX} ${startY} ${endX} ${endY}`;
  };

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Building the{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Future
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our revolutionary process transforms complex challenges into elegant solutions through intelligent automation and cutting-edge technology.
          </p>
        </motion.div>

        <div className="relative h-[600px] max-w-6xl mx-auto">
          {/* SVG for connections */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {steps.map((step, stepIndex) => 
              step.connections?.map((connectionId, connIndex) => {
                const targetStep = steps.find(s => s.id === connectionId);
                if (!targetStep) return null;
                
                return (
                  <motion.path
                    key={`${step.id}-${connectionId}`}
                    d={getConnectionPath(step, targetStep)}
                    fill="none"
                    stroke="hsl(var(--noreja-tertiary))"
                    strokeWidth="0.2"
                    className="opacity-30"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={isInView ? { 
                      pathLength: 1, 
                      opacity: 0.3 
                    } : { 
                      pathLength: 0, 
                      opacity: 0 
                    }}
                    transition={{ 
                      delay: stepIndex * 0.3 + connIndex * 0.1 + 0.5,
                      duration: 0.8,
                      ease: "easeInOut"
                    }}
                  />
                );
              })
            )}
          </svg>

          {/* Process nodes */}
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `${step.position.x}%`,
                  top: `${step.position.y}%`
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                transition={{ 
                  delay: index * 0.3,
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100
                }}
              >
                <div className="relative group">
                  {/* Node circle */}
                  <div className="w-16 h-16 bg-background border-2 border-noreja-tertiary rounded-full flex items-center justify-center shadow-lg group-hover:shadow-glow transition-all duration-300">
                    <Icon className="w-8 h-8 text-noreja-tertiary" />
                  </div>
                  
                  {/* Tooltip */}
                  <motion.div
                    className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ y: 10 }}
                    whileHover={{ y: 0 }}
                  >
                    <div className="bg-background/90 backdrop-blur-sm border border-primary/20 rounded-lg p-4 min-w-[200px] shadow-xl">
                      <h4 className="font-semibold text-sm mb-1 text-foreground">{step.title}</h4>
                      <p className="text-xs text-muted-foreground">{step.description}</p>
                    </div>
                  </motion.div>
                  
                  {/* Pulse effect */}
                  <motion.div
                    className="absolute inset-0 w-16 h-16 border-2 border-noreja-tertiary rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 0, 0.3]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3 + 1
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}