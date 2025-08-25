import { motion } from "framer-motion";
import { ArrowRight, Zap, Shield, Rocket, Database } from "lucide-react";
import { Button } from "@/components/ui/button";

export function IntegratedHeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-dark opacity-50" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-noreja-main/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-noreja-tertiary/10 rounded-full blur-3xl" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center flex-1 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
          >
            <Zap className="w-4 h-4 mr-2 text-noreja-tertiary" />
            <span className="text-sm font-medium">Revolutionary Technology</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            The Future of{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Innovation
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Experience revolutionary solutions that transform businesses and accelerate growth with cutting-edge technology.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button size="lg" className="gradient-primary glow-primary group">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10">
              Learn More
            </Button>
          </motion.div>

          {/* Feature Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex justify-center items-center space-x-8 text-muted-foreground"
          >
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-noreja-tertiary" />
              <span className="text-sm">Secure</span>
            </div>
            <div className="flex items-center space-x-2">
              <Rocket className="h-5 w-5 text-noreja-tertiary" />
              <span className="text-sm">Fast</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="h-5 w-5 text-noreja-tertiary" />
              <span className="text-sm">Innovative</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Integrated First Process Node */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="relative z-20 pb-20"
      >
        <div className="flex flex-col items-center">
          {/* Large first node */}
          <div className="relative">
            <div className="w-32 h-32 bg-card border-4 border-noreja-tertiary rounded-full flex items-center justify-center shadow-glow-accent">
              <Database className="w-16 h-16 text-noreja-tertiary" />
            </div>
            
            {/* Pulse effect */}
            <motion.div
              className="absolute inset-0 w-32 h-32 border-2 border-noreja-tertiary rounded-full"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.4, 0, 0.4]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: 2
              }}
            />
          </div>
          
          {/* Caption */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="text-center mt-6"
          >
            <h3 className="text-2xl font-bold mb-2 text-foreground">Data Collection</h3>
            <p className="text-base text-muted-foreground">Intelligent data gathering from multiple sources</p>
          </motion.div>

          {/* Multiple connectors to next section (branching) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 2.5, duration: 1.5 }}
            className="mt-8 relative"
          >
            <svg width="400" height="120" viewBox="0 0 400 120" className="text-noreja-tertiary">
              <defs>
                <marker
                  id="arrowhead-hero"
                  markerWidth="10"
                  markerHeight="7"
                  refX="9"
                  refY="3.5"
                  orient="auto"
                >
                  <polygon
                    points="0 0, 10 3.5, 0 7"
                    fill="hsl(var(--noreja-tertiary))"
                    opacity="0.8"
                  />
                </marker>
              </defs>
              
              {/* Left branch to AI Processing */}
              <motion.path
                d="M 200 0 Q 150 60 100 120"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="5,5"
                fill="none"
                markerEnd="url(#arrowhead-hero)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 2.8, duration: 2 }}
              />
              
              {/* Right branch to Security Layer */}
              <motion.path
                d="M 200 0 Q 250 60 300 120"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="5,5"
                fill="none"
                markerEnd="url(#arrowhead-hero)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 3.1, duration: 2 }}
              />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}