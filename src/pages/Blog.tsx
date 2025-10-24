import { motion } from "framer-motion";
import { ArrowRight, BookOpen, TrendingUp, Code, BarChart3, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

export default function Blog() {
  const { t } = useLanguage();

  const categories = [
    {
      key: 'innovation',
      icon: TrendingUp,
      title: t.blog.features.innovation.title,
      description: t.blog.features.innovation.description,
      color: 'bg-blue-500',
      href: '/blog/innovation'
    },
    {
      key: 'technical',
      icon: Code,
      title: t.blog.features.technical.title,
      description: t.blog.features.technical.description,
      color: 'bg-green-500',
      href: '/blog/technical'
    },
    {
      key: 'analysis',
      icon: BarChart3,
      title: t.blog.features.analysis.title,
      description: t.blog.features.analysis.description,
      color: 'bg-purple-500',
      href: '/blog/analysis'
    },
    {
      key: 'caseStudies',
      icon: FileText,
      title: t.blog.features.caseStudies.title,
      description: t.blog.features.caseStudies.description,
      color: 'bg-orange-500',
      href: '/blog/case-studies'
    }
  ];

  // Mock data for latest posts - in a real implementation, this would come from an API
  const mockPosts = {
    innovation: [
      { id: 1, title: "The Future of Process Intelligence", date: "2024-01-15", readTime: "5 min read" },
      { id: 2, title: "AI-Driven Business Transformation", date: "2024-01-10", readTime: "7 min read" },
      { id: 3, title: "Next-Gen Analytics Platforms", date: "2024-01-05", readTime: "6 min read" }
    ],
    technical: [
      { id: 4, title: "Building Scalable Data Pipelines", date: "2024-01-12", readTime: "8 min read" },
      { id: 5, title: "Advanced Query Optimization", date: "2024-01-08", readTime: "6 min read" },
      { id: 6, title: "Microservices Architecture Patterns", date: "2024-01-03", readTime: "9 min read" }
    ],
    analysis: [
      { id: 7, title: "Market Trends in Process Mining", date: "2024-01-14", readTime: "5 min read" },
      { id: 8, title: "ROI Analysis of Digital Transformation", date: "2024-01-09", readTime: "6 min read" },
      { id: 9, title: "Industry Benchmark Report 2024", date: "2024-01-04", readTime: "10 min read" }
    ],
    caseStudies: [
      { id: 10, title: "Manufacturing Excellence Case Study", date: "2024-01-13", readTime: "7 min read" },
      { id: 11, title: "Banking Process Optimization", date: "2024-01-07", readTime: "8 min read" },
      { id: 12, title: "Healthcare Workflow Improvement", date: "2024-01-02", readTime: "6 min read" }
    ]
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(t.language === 'de' ? 'de-DE' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

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
              {t.blog.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              {t.blog.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
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
              {t.blog.whatYouFind}
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore our content organized by category
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {categories.map((category, index) => (
              <motion.div
                key={category.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center border-border/40 hover:border-noreja-main/30 transition-all duration-300 hover:shadow-lg group">
                  <CardHeader>
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold">
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {category.description}
                    </p>
                    <Link to={category.href}>
                      <Button 
                        variant="outline" 
                        className="w-full border-noreja-main/30 hover:bg-noreja-main/10 group-hover:border-noreja-main/50"
                      >
                        {t.blog.viewAllPosts}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Posts by Category */}
      <section className="bg-muted/30">
        <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              {t.blog.latestPostsPreview}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t.blog.getGlimpse}
            </p>
          </motion.div>

          <div className="space-y-16">
            {categories.map((category, categoryIndex) => (
              <motion.div
                key={category.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-full ${category.color} flex items-center justify-center`}>
                      <category.icon className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {t.blog.latestFrom} {t.blog.categories[category.key as keyof typeof t.blog.categories]}
                    </h3>
                  </div>
                  <Link to={category.href}>
                    <Button variant="ghost" className="text-noreja-main hover:bg-noreja-main/10">
                      {t.blog.viewAllPosts}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {mockPosts[category.key as keyof typeof mockPosts].map((post, postIndex) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: postIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="h-full hover:shadow-lg transition-all duration-300 hover:border-noreja-main/30 group">
                        <CardHeader>
                          <div className="flex items-center justify-between mb-2">
                            <Badge variant="secondary" className="text-xs">
                              {post.readTime}
                            </Badge>
                            <span className="text-xs text-muted-foreground">
                              {formatDate(post.date)}
                            </span>
                          </div>
                          <CardTitle className="text-lg line-clamp-2 group-hover:text-noreja-main transition-colors">
                            {post.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                          </p>
                          <Button variant="ghost" size="sm" className="p-0 h-auto text-noreja-main hover:bg-noreja-main/10">
                            {t.blog.readMore}
                            <ArrowRight className="w-3 h-3 ml-1" />
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20">
        <div className="w-full max-w-4xl mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-noreja-main/10 to-noreja-main/5 rounded-2xl p-8 lg:p-12">
              <BookOpen className="w-12 h-12 mx-auto mb-6 text-noreja-main" />
              <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">
                Stay Updated
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Get the latest insights, technical articles, and industry analysis delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
                <Button size="lg" className="gradient-primary glow-primary">
                  {t.blog.subscribeNewsletter}
                </Button>
                <Button variant="outline" size="lg" className="border-noreja-main/30 hover:bg-noreja-main/10">
                  {t.blog.subscribeRss}
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}