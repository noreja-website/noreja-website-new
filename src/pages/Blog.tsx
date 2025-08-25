import { motion } from "framer-motion";
import { ExternalLink, Calendar, User, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Mock data for blog preview - in real implementation, fetch from HubSpot
const featuredPosts = [
  {
    title: "The Future of AI-Powered Business Intelligence",
    excerpt: "Discover how artificial intelligence is revolutionizing the way companies analyze data and make strategic decisions...",
    author: "Dr. Alex Chen",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Technology",
    slug: "future-ai-business-intelligence"
  },
  {
    title: "Zero-Downtime Deployment Strategies for Enterprise Applications",
    excerpt: "Learn the best practices and techniques for deploying enterprise applications without service interruption...",
    author: "Sarah Rodriguez",
    date: "2024-01-12",
    readTime: "12 min read",
    category: "DevOps",
    slug: "zero-downtime-deployment-strategies"
  },
  {
    title: "Building Scalable Real-Time Processing Systems",
    excerpt: "A deep dive into the architecture patterns and technologies that enable processing millions of events per second...",
    author: "Michael Wang",
    date: "2024-01-10",
    readTime: "15 min read",
    category: "Architecture",
    slug: "scalable-realtime-processing-systems"
  }
];

const categories = [
  "Technology",
  "Innovation", 
  "DevOps",
  "Architecture",
  "Security",
  "AI & Machine Learning",
  "Cloud Computing",
  "Best Practices"
];

export default function Blog() {
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
            Technical{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Blog
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Deep insights, best practices, and cutting-edge research from our engineering team. 
            Stay ahead of the curve with the latest in technology innovation.
          </p>
          
          {/* External Blog Link */}
          <motion.a
            href="https://blog.noreja.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-primary rounded-lg font-semibold glow-primary hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Visit Full Blog
            <ExternalLink className="ml-2 w-5 h-5" />
          </motion.a>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Browse by Category</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
              >
                <a
                  href={`https://blog.noreja.com/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-card/50 border border-border/40 rounded-full text-sm font-medium hover:border-primary/30 hover:bg-primary/10 transition-all"
                >
                  {category}
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Featured Posts Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
              >
                <Card className="h-full bg-card/50 border-border/40 hover:border-primary/30 transition-all hover:shadow-card group cursor-pointer">
                  <a
                    href={`https://blog.noreja.com/${post.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-3 py-1 bg-gradient-primary text-white text-xs font-semibold rounded-full">
                          {post.category}
                        </span>
                        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {post.title}
                      </CardTitle>
                      <CardDescription>
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center text-sm text-muted-foreground mb-4">
                        <User className="w-4 h-4 mr-1" />
                        <span className="mr-4">{post.author}</span>
                        <Calendar className="w-4 h-4 mr-1" />
                        <span className="mr-4">{new Date(post.date).toLocaleDateString()}</span>
                        <span>{post.readTime}</span>
                      </div>
                      <div className="flex items-center text-primary font-semibold group-hover:translate-x-1 transition-transform">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </div>
                    </CardContent>
                  </a>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-dark p-12 rounded-2xl border border-primary/20">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and never miss our latest technical insights, research findings, 
              and industry analysis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-lg bg-input border border-border text-foreground flex-1"
              />
              <button className="px-8 py-3 bg-gradient-primary rounded-lg font-semibold glow-primary hover:scale-105 transition-transform whitespace-nowrap">
                Subscribe
              </button>
            </div>
            {/* TODO: Replace with HubSpot newsletter form */}
            <p className="text-xs text-muted-foreground mt-4">
              By subscribing, you agree to our Privacy Policy and Terms of Service.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}