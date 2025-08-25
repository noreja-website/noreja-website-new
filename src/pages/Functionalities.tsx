import { motion } from "framer-motion";
import { Cpu, Database, Shield, Zap, Cloud, Smartphone } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Cpu,
    title: "AI-Powered Analytics",
    description: "Advanced machine learning algorithms that provide deep insights into your business data and predict future trends with unprecedented accuracy."
  },
  {
    icon: Database,
    title: "Real-time Processing",
    description: "Lightning-fast data processing capabilities that handle millions of transactions per second with zero latency."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Military-grade encryption and security protocols that protect your sensitive data with multi-layered defense systems."
  },
  {
    icon: Zap,
    title: "Instant Deployment",
    description: "One-click deployment system that gets your applications live in seconds, not hours or days."
  },
  {
    icon: Cloud,
    title: "Cloud-Native Architecture",
    description: "Built from the ground up for cloud environments with automatic scaling and global distribution capabilities."
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Responsive interfaces that work flawlessly across all devices, ensuring optimal user experience everywhere."
  }
];

export default function Functionalities() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6">
            Powerful{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Functionalities
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the cutting-edge features that make our platform the most advanced solution in the market. 
            Built for the future, available today.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card className="h-full bg-card/50 border-border/40 hover:border-primary/30 transition-all hover:shadow-card group">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:glow-primary transition-all">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-dark p-12 rounded-2xl border border-primary/20">
            <h2 className="text-3xl font-bold mb-4">Ready to Experience the Future?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of forward-thinking companies that have already transformed their operations with our technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-primary rounded-lg font-semibold glow-primary hover:scale-105 transition-transform">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-primary/30 rounded-lg font-semibold hover:bg-primary/10 transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}