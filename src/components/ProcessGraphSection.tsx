import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Database, Shield, Zap, Users, Rocket, Target, ArrowDown } from "lucide-react";

interface ProcessStep {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

interface ProcessGraphSectionProps {
  steps?: ProcessStep[];
}

const defaultSteps: ProcessStep[] = [
  {
    id: "data",
    title: "Data Collection",
    description: "Intelligent data gathering from multiple sources",
    icon: Database
  },
  {
    id: "processing", 
    title: "AI Processing",
    description: "Advanced machine learning algorithms analyze patterns",
    icon: Zap
  },
  {
    id: "security",
    title: "Security Layer", 
    description: "Enterprise-grade security and compliance",
    icon: Shield
  },
  {
    id: "optimization",
    title: "Optimization",
    description: "Continuous performance enhancement", 
    icon: Target
  },
  {
    id: "deployment",
    title: "Deployment",
    description: "Seamless integration with your systems",
    icon: Rocket
  },
  {
    id: "users",
    title: "User Experience",
    description: "Intuitive interface for maximum productivity",
    icon: Users
  }
];

function ProcessNode({ step, index }: { step: ProcessStep; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });
  const Icon = step.icon;
  
  return (
    <div ref={ref} className="flex items-center gap-8 mb-32">
      {/* Node */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{ 
          delay: 0.2,
          duration: 0.8,
          type: "spring",
          stiffness: 100
        }}
        className="relative flex-shrink-0"
      >
        <div className="w-20 h-20 bg-background border-2 border-noreja-tertiary rounded-full flex items-center justify-center shadow-glow">
          <Icon className="w-10 h-10 text-noreja-tertiary" />
        </div>
        
        {/* Pulse effect */}
        <motion.div
          className="absolute inset-0 w-20 h-20 border-2 border-noreja-tertiary rounded-full"
          animate={isInView ? {
            scale: [1, 1.3, 1],
            opacity: [0.3, 0, 0.3]
          } : {}}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: 1
          }}
        />
      </motion.div>

      {/* Caption */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="flex-1"
      >
        <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
        <p className="text-lg text-muted-foreground">{step.description}</p>
      </motion.div>

      {/* Connecting line to next node */}
      {index < defaultSteps.length - 1 && (
        <motion.div
          initial={{ scaleY: 0, opacity: 0 }}
          animate={isInView ? { scaleY: 1, opacity: 0.3 } : { scaleY: 0, opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="absolute left-10 top-20 w-0.5 h-24 bg-noreja-tertiary origin-top z-0"
        />
      )}
    </div>
  );
}

export function ProcessGraphSection({ steps = defaultSteps }: ProcessGraphSectionProps) {
  const containerRef = useRef(null);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <section ref={containerRef} className="py-20 relative">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
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

        {/* Scroll-driven process nodes */}
        <div className="relative">
          {steps.map((step, index) => {
            return (
              <div
                key={step.id}
                ref={(el) => { nodeRefs.current[index] = el; }}
                className="relative"
              >
                <ProcessNode 
                  step={step} 
                  index={index}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}