import { motion } from "framer-motion";
import { Quote, TrendingUp, Users, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const stories = [
  {
    company: "TechCorp Global",
    industry: "Financial Services",
    result: "300% increase in processing speed",
    quote: "Noreja's solution transformed our entire infrastructure. We went from processing thousands of transactions per hour to millions, with zero downtime during the transition.",
    person: "Sarah Chen",
    role: "CTO",
    metrics: {
      performance: "+300%",
      efficiency: "+250%",
      savings: "$2.4M"
    }
  },
  {
    company: "Innovation Labs",
    industry: "Healthcare Technology",
    result: "50% reduction in deployment time",
    quote: "The AI-powered analytics gave us insights we never knew were possible. Patient outcomes improved dramatically, and our research timeline accelerated by months.",
    person: "Dr. Michael Rodriguez",
    role: "Head of Research",
    metrics: {
      deployment: "-50%",
      accuracy: "+95%",
      roi: "340%"
    }
  },
  {
    company: "FutureScale Inc",
    industry: "E-commerce",
    result: "500% growth in user engagement",
    quote: "The real-time processing capabilities allowed us to scale globally overnight. Our customer satisfaction scores reached all-time highs within the first quarter.",
    person: "Emily Watson",
    role: "VP of Operations",
    metrics: {
      engagement: "+500%",
      uptime: "99.99%",
      growth: "+200%"
    }
  }
];

export default function SuccessStories() {
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
            Success{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Stories
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how industry leaders are transforming their businesses with our revolutionary technology platform.
          </p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 glow-primary">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-2">250%</h3>
            <p className="text-muted-foreground">Average Performance Increase</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4 glow-accent">
              <Users className="w-8 h-8 text-background" />
            </div>
            <h3 className="text-3xl font-bold mb-2">10K+</h3>
            <p className="text-muted-foreground">Companies Transformed</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 glow-primary">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-2">99.9%</h3>
            <p className="text-muted-foreground">Customer Satisfaction</p>
          </div>
        </motion.div>

        {/* Success Stories */}
        <div className="space-y-12">
          {stories.map((story, index) => (
            <motion.div
              key={story.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <Card className="bg-card/50 border-border/40 overflow-hidden">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                    {/* Story Content */}
                    <div className="lg:col-span-2">
                      <div className="flex items-center mb-4">
                        <Quote className="w-8 h-8 text-noreja-tertiary mr-3" />
                        <div>
                          <h3 className="text-xl font-bold">{story.company}</h3>
                          <p className="text-sm text-muted-foreground">{story.industry}</p>
                        </div>
                      </div>
                      
                      <blockquote className="text-lg text-muted-foreground italic mb-6 leading-relaxed">
                        "{story.quote}"
                      </blockquote>
                      
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mr-4">
                          <span className="text-white font-bold text-lg">
                            {story.person.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <p className="font-semibold">{story.person}</p>
                          <p className="text-sm text-muted-foreground">{story.role}</p>
                        </div>
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="lg:col-span-1">
                      <div className="bg-gradient-dark p-6 rounded-xl border border-primary/20">
                        <h4 className="font-semibold mb-4 text-center">Key Results</h4>
                        <div className="space-y-4">
                          {Object.entries(story.metrics).map(([key, value]) => (
                            <div key={key} className="flex justify-between items-center">
                              <span className="text-sm text-muted-foreground capitalize">
                                {key}:
                              </span>
                              <span className="font-bold text-noreja-tertiary text-lg">
                                {value}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-dark p-12 rounded-2xl border border-primary/20">
            <h2 className="text-3xl font-bold mb-4">Ready to Write Your Success Story?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join these industry leaders and transform your business with our cutting-edge technology platform.
            </p>
            <button className="px-8 py-4 bg-gradient-primary rounded-lg font-semibold glow-primary hover:scale-105 transition-transform">
              Start Your Transformation
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}