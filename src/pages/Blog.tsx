import { motion } from "framer-motion";
import { ExternalLink, Rss, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HubSpotBlogTeaser } from "@/components/HubSpotBlogTeaser";
import { BLOG_SUBDOMAIN_URL } from "@/lib/config";

export default function Blog() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-24">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-foreground">
              Our <span className="text-noreja-main">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              Dive deep into industry insights, technical innovations, and thought leadership 
              from our team of experts on our dedicated blog platform.
            </p>
            
            {/* Primary CTA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-8"
            >
              <Button
                size="lg"
                className="bg-noreja-main hover:bg-noreja-main/90 text-white px-12 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                onClick={() => window.open(BLOG_SUBDOMAIN_URL, '_blank')}
              >
                <BookOpen className="w-6 h-6 mr-3" />
                Open Blog
                <ExternalLink className="w-5 h-5 ml-3" />
              </Button>
            </motion.div>

            {/* Secondary Info */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center"
            >
              <p className="text-muted-foreground">
                Our blog is hosted on{" "}
                <span className="font-semibold text-noreja-main">blog.noreja.com</span>{" "}
                powered by HubSpot
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Blog Features Section */}
      <section className="pb-20">
        <div className="w-full max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              What You'll Find
            </h2>
            <p className="text-lg text-muted-foreground">
              Regular updates on industry trends, technical deep-dives, and expert insights
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: "🚀",
                title: "Innovation Insights",
                description: "Latest trends and breakthrough technologies shaping the future of business."
              },
              {
                icon: "🛠️",
                title: "Technical Deep-Dives",
                description: "In-depth technical articles and tutorials from our engineering team."
              },
              {
                icon: "📊",
                title: "Industry Analysis",
                description: "Data-driven analysis and expert commentary on market developments."
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center border-border/40 hover:border-noreja-main/30 transition-all duration-300 hover:shadow-lg">
                  <CardHeader>
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <CardTitle className="text-xl font-bold">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Additional CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                variant="outline"
                size="lg"
                className="border-noreja-main/30 hover:bg-noreja-main/10 px-8"
                onClick={() => window.open('https://blog.noreja.com/rss', '_blank')}
              >
                <Rss className="w-5 h-5 mr-2" />
                Subscribe to RSS
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-noreja-main/30 hover:bg-noreja-main/10 px-8"
                onClick={() => window.open('https://blog.noreja.com/newsletter', '_blank')}
              >
                Subscribe to Newsletter
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="bg-muted/30">
        <div className="w-full max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8 pt-20"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              Latest Posts Preview
            </h2>
            <p className="text-lg text-muted-foreground">
              Get a glimpse of our recent content
            </p>
          </motion.div>
          
          <HubSpotBlogTeaser />
        </div>
      </section>
    </div>
  );
}