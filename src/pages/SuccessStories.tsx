import { motion } from "framer-motion";
import { ExternalLink, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HubSpotBlogTeaser } from "@/components/HubSpotBlogTeaser";
import { successStories } from "@/lib/successStories";

const SuccessStories = () => {
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
              Customer <span className="text-noreja-main">Success Stories</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover how leading organizations across industries have transformed their operations 
              and achieved remarkable results with our platform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Success Stories Grid */}
      <section className="pb-20">
        <div className="w-full max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {successStories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full group hover:shadow-lg transition-all duration-300 cursor-pointer border-border/40 hover:border-noreja-main/30">
                  <CardHeader className="pb-4">
                    {/* Company Logo */}
                    <div className="w-full h-16 mb-4 overflow-hidden rounded-lg bg-muted flex items-center justify-center">
                      <img
                        src={story.logoUrl}
                        alt={`${story.companyName} logo`}
                        className="w-full h-full object-cover transition-transform group-hover:scale-105"
                        onClick={() => window.open(story.externalUrl, '_blank')}
                      />
                    </div>
                    
                    {/* Company Info */}
                    <div className="space-y-2">
                      <CardTitle className="text-lg font-semibold group-hover:text-noreja-main transition-colors">
                        {story.companyName}
                      </CardTitle>
                      <div className="flex flex-wrap gap-1">
                        <Badge variant="secondary" className="text-xs">
                          {story.industry}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {story.company_size}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    {/* Summary */}
                    <CardDescription className="text-sm leading-relaxed mb-4">
                      {story.summary}
                    </CardDescription>
                    
                    {/* Key Stat */}
                    {story.keyStat && (
                      <div className="flex items-center gap-2 mb-4 p-3 bg-noreja-main/5 rounded-lg border border-noreja-main/10">
                        <TrendingUp className="w-4 h-4 text-noreja-main" />
                        <div>
                          <div className="font-bold text-noreja-main text-lg">
                            {story.keyStat.value}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {story.keyStat.metric}
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {/* Read More Button */}
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full group-hover:bg-noreja-main group-hover:text-white group-hover:border-noreja-main transition-all"
                      onClick={() => window.open(story.externalUrl, '_blank')}
                    >
                      Read Case Study
                      <ExternalLink className="w-3 h-3 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Teasers Section */}
      <section className="py-20 bg-muted/30">
        <div className="w-full max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              Latest Insights
            </h2>
            <p className="text-lg text-muted-foreground">
              Learn from industry experts and best practices
            </p>
          </motion.div>
          
          <HubSpotBlogTeaser />
        </div>
      </section>
    </div>
  );
};

export default SuccessStories;