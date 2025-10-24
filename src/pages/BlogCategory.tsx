import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link, useParams } from "react-router-dom";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  category: string;
  imageUrl?: string;
}

export default function BlogCategory() {
  const { t } = useLanguage();
  const { category } = useParams<{ category: string }>();

  // Map category parameter to category key
  const categoryMap: Record<string, string> = {
    'innovation': 'innovation',
    'technical': 'technical', 
    'analysis': 'analysis',
    'case-studies': 'caseStudies'
  };

  const categoryKey = categoryMap[category || ''] || 'innovation';

  // Mock data - in a real implementation, this would come from an API
  const mockPosts: BlogPost[] = [
    {
      id: 1,
      title: "The Future of Process Intelligence: Trends and Predictions",
      excerpt: "Explore the latest trends in process intelligence and how they're shaping the future of business process management.",
      date: "2024-01-15",
      readTime: "5 min read",
      author: "Dr. Sarah Johnson",
      category: categoryKey,
      imageUrl: "/api/placeholder/400/250"
    },
    {
      id: 2,
      title: "Advanced Analytics in Manufacturing: A Complete Guide",
      excerpt: "Learn how manufacturing companies are leveraging advanced analytics to optimize their processes and reduce costs.",
      date: "2024-01-12",
      readTime: "8 min read", 
      author: "Michael Chen",
      category: categoryKey,
      imageUrl: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: "Building Scalable Data Pipelines for Enterprise",
      excerpt: "A comprehensive guide to building robust, scalable data pipelines that can handle enterprise-level workloads.",
      date: "2024-01-10",
      readTime: "12 min read",
      author: "Alex Rodriguez",
      category: categoryKey,
      imageUrl: "/api/placeholder/400/250"
    },
    {
      id: 4,
      title: "ROI Analysis of Digital Transformation Initiatives",
      excerpt: "Understanding the return on investment for digital transformation projects and how to measure success.",
      date: "2024-01-08",
      readTime: "6 min read",
      author: "Emma Thompson",
      category: categoryKey,
      imageUrl: "/api/placeholder/400/250"
    },
    {
      id: 5,
      title: "Case Study: Banking Process Optimization Success Story",
      excerpt: "A detailed look at how a major bank optimized their loan processing workflow using process intelligence.",
      date: "2024-01-05",
      readTime: "9 min read",
      author: "David Park",
      category: categoryKey,
      imageUrl: "/api/placeholder/400/250"
    },
    {
      id: 6,
      title: "Microservices Architecture for Process Mining Platforms",
      excerpt: "How to design and implement microservices architecture for large-scale process mining applications.",
      date: "2024-01-03",
      readTime: "11 min read",
      author: "Lisa Wang",
      category: categoryKey,
      imageUrl: "/api/placeholder/400/250"
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(t.language === 'de' ? 'de-DE' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const getCategoryInfo = () => {
    const categoryInfo = {
      innovation: {
        title: t.blog.features.innovation.title,
        description: t.blog.features.innovation.description,
        icon: "🚀"
      },
      technical: {
        title: t.blog.features.technical.title,
        description: t.blog.features.technical.description,
        icon: "🛠️"
      },
      analysis: {
        title: t.blog.features.analysis.title,
        description: t.blog.features.analysis.description,
        icon: "📊"
      },
      caseStudies: {
        title: t.blog.features.caseStudies.title,
        description: t.blog.features.caseStudies.description,
        icon: "📄"
      }
    };
    return categoryInfo[categoryKey as keyof typeof categoryInfo] || categoryInfo.innovation;
  };

  const categoryInfo = getCategoryInfo();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="relative py-20 lg:py-24">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <Link to="/blog">
              <Button variant="ghost" className="mb-6 text-noreja-main hover:bg-noreja-main/10">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
            
            <div className="text-center">
              <div className="text-6xl mb-4">{categoryInfo.icon}</div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-foreground">
                {categoryInfo.title}
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {categoryInfo.description}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="pb-20">
        <div className="w-full max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:border-noreja-main/30 group">
                  {post.imageUrl && (
                    <div className="w-full aspect-video overflow-hidden bg-muted">
                      <img 
                        src={post.imageUrl} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {post.readTime}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {formatDate(post.date)}
                      </span>
                    </div>
                    <CardTitle className="text-xl line-clamp-2 group-hover:text-noreja-main transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </div>
                      <Button variant="ghost" size="sm" className="text-noreja-main hover:bg-noreja-main/10">
                        {t.blog.readMore}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Load More Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Button size="lg" variant="outline" className="border-noreja-main/30 hover:bg-noreja-main/10">
              Load More Posts
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-muted/30 py-20">
        <div className="w-full max-w-4xl mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">
              Stay Updated with {categoryInfo.title}
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get the latest articles and insights delivered to your inbox.
            </p>
            <Button size="lg" className="gradient-primary glow-primary">
              {t.blog.subscribeNewsletter}
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
