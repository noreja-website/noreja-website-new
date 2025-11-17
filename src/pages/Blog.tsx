import { motion } from "framer-motion";
import { ArrowRight, BookOpen, TrendingUp, Code, BarChart3, FileText, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { AnimatedHeading } from "@/components/AnimatedHeading";

interface BlogPost {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  author?: string;
  imageUrl?: string;
  category?: string;
}

export default function Blog() {
  const { t, language } = useLanguage();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Language-specific heading texts
  const headingTexts = {
    en: {
      fixedText: "Our Blog",
      rotatingWords: ["PLACEHOLDER_1", "PLACEHOLDER_2", "PLACEHOLDER_3"]
    },
    de: {
      fixedText: "Unser Blog",
      rotatingWords: ["PLACEHOLDER_1", "PLACEHOLDER_2", "PLACEHOLDER_3"]
    }
  };

  const currentHeading = headingTexts[language];

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    {
      key: 'innovation',
      icon: TrendingUp,
      title: t.blog.features.innovation.title,
      description: t.blog.features.innovation.description,
      color: 'bg-gradient-to-br from-noreja-main to-noreja-secondary',
      href: '/blog/innovation'
    },
    {
      key: 'technical',
      icon: Code,
      title: t.blog.features.technical.title,
      description: t.blog.features.technical.description,
      color: 'bg-gradient-to-br from-noreja-secondary to-noreja-tertiary',
      href: '/blog/technical'
    },
    {
      key: 'analysis',
      icon: BarChart3,
      title: t.blog.features.analysis.title,
      description: t.blog.features.analysis.description,
      color: 'bg-gradient-to-br from-noreja-main to-noreja-tertiary',
      href: '/blog/analysis'
    },
    {
      key: 'caseStudies',
      icon: FileText,
      title: t.blog.features.caseStudies.title,
      description: t.blog.features.caseStudies.description,
      color: 'bg-gradient-to-br from-noreja-tertiary to-noreja-secondary',
      href: '/blog/case-studies'
    }
  ];

  // RSS Feed URLs
  const RSS_FEED_URL = language === 'de' 
    ? 'https://144242473.hs-sites-eu1.com/de-de/noreja-intelligence-gmbh-blog/rss.xml'
    : 'http://144242473.hs-sites-eu1.com/en/noreja-intelligence-blog/rss.xml';

  // Fetch RSS feed data
  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(RSS_FEED_URL, {
          headers: {
            'Accept': 'application/rss+xml, application/xml, text/xml',
          },
        });
        
        if (!response.ok) {
          throw new Error(`Failed to fetch blog posts: ${response.status}`);
        }
        
        const xmlText = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
        
        const parserError = xmlDoc.querySelector('parsererror');
        if (parserError) {
          throw new Error('Failed to parse RSS feed');
        }
        
        const items = xmlDoc.querySelectorAll('item');
        const blogPosts: BlogPost[] = Array.from(items).slice(0, 12).map(item => {
          const title = item.querySelector('title')?.textContent || 'Untitled';
          const link = item.querySelector('link')?.textContent || '#';
          const pubDate = item.querySelector('pubDate')?.textContent || '';
          const description = item.querySelector('description')?.textContent || '';
          const authorRaw = item.querySelector('author, dc\\:creator')?.textContent;
          
          // Extract image from description HTML
          let imageUrl: string | undefined;
          if (description) {
            const imgMatch = description.match(/<img[^>]+src="([^">]+)"/);
            if (imgMatch) {
              imageUrl = imgMatch[1];
            }
          }
          
          // Clean up description
          const cleanDescription = description.replace(/<[^>]*>/g, '').substring(0, 150) + '...';
          
          return {
            title,
            link,
            pubDate,
            description: cleanDescription,
            author: authorRaw?.replace(/<[^>]*>/g, '').trim(),
            imageUrl,
          };
        });
        
        setPosts(blogPosts);
      } catch (err) {
        console.error('Error fetching blog posts:', err);
        setError(err instanceof Error ? err.message : 'Failed to load blog posts');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, [RSS_FEED_URL, language]);

  // Helper function to extract author name
  const extractAuthorName = (authorString: string | null | undefined): string | undefined => {
    if (!authorString) return undefined;
    
    const nameInParens = authorString.match(/\(([^)]+)\)/);
    if (nameInParens) {
      return nameInParens[1].trim();
    }
    
    const nameBeforeEmail = authorString.match(/^([^<]+)</);
    if (nameBeforeEmail) {
      return nameBeforeEmail[1].trim();
    }
    
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(authorString.trim());
    if (isEmail) {
      return undefined;
    }
    
    return authorString.trim();
  };

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString(language === 'de' ? 'de-DE' : 'en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    } catch {
      return dateString;
    }
  };

  // Distribute posts across categories (for now, we'll use all posts for each category)
  // In the future, this would be filtered by actual categories from HubSpot
  const getPostsForCategory = (categoryKey: string) => {
    return posts.slice(0, 3); // Show latest 3 posts for each category
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
            <AnimatedHeading 
              fixedText={currentHeading.fixedText}
              rotatingWords={currentHeading.rotatingWords}
              size="lg"
              className="text-foreground mb-6"
            />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              {t.blog.subtitle}
            </p>
          </motion.div>
        </div>
        {/* Gradient fade to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background pointer-events-none z-0" />
      </section>

      {/* Categories Section with gradient background */}
      <div className="relative" style={{
        background: `
          linear-gradient(135deg, hsl(var(--background)) 0%, hsl(var(--noreja-main) / 0.14) 50%, hsl(var(--background)) 100%),
          radial-gradient(ellipse 1000px 800px at 50% 50%, hsl(var(--noreja-secondary) / 0.10) 0%, transparent 60%)
        `
      }}>
        {/* Gradient fade from previous section */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent pointer-events-none z-0" />
        {/* Gradient fade to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background pointer-events-none z-0" />
        <div className="relative z-10 pb-20">
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              {categories.map((category, index) => (
                <motion.div
                  key={category.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full text-center border-border/40 hover:border-noreja-main/30 transition-all duration-300 hover:shadow-lg group bg-background/80 backdrop-blur-sm flex flex-col">
                    <CardHeader className="flex-grow">
                      <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <category.icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold">
                        {category.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col flex-grow">
                      <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                        {category.description}
                      </p>
                      <div className="mt-auto">
                        <Link to={category.href}>
                          <Button 
                            variant="outline" 
                            className="w-full border-noreja-main/30 hover:bg-noreja-main/10 group-hover:border-noreja-main/50"
                          >
                            {t.blog.viewAllPosts}
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Latest Posts by Category */}
      <div className="relative" style={{
        background: `
          linear-gradient(45deg, hsl(var(--background)) 0%, hsl(var(--noreja-secondary) / 0.12) 30%, hsl(var(--background)) 100%),
          radial-gradient(ellipse 1200px 900px at 30% 70%, hsl(var(--noreja-main) / 0.08) 0%, transparent 60%)
        `
      }}>
        {/* Gradient fade from previous section */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent pointer-events-none z-0" />
        {/* Gradient fade to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background pointer-events-none z-0" />
        <div className="relative z-10">
          <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              {t.blog.latestPostsPreview}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t.blog.getGlimpse}
            </p>
          </motion.div>

          {loading && (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-noreja-main"></div>
              <p className="mt-4 text-muted-foreground">Loading blog posts...</p>
            </div>
          )}

          {error && (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">{error}</p>
              <Button variant="outline" onClick={() => window.location.reload()}>
                Try Again
              </Button>
            </div>
          )}

          {!loading && !error && posts.length > 0 && (
            <div className="space-y-16">
              {categories.map((category, categoryIndex) => {
                const categoryPosts = getPostsForCategory(category.key);
                return (
                  <motion.div
                    key={category.key}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-full ${category.color} flex items-center justify-center shadow-lg`}>
                          <category.icon className="w-4 h-4 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-foreground">
                          {t.blog.latestFrom}{' '}
                          <span className="bg-gradient-primary bg-clip-text text-transparent">
                            {t.blog.categories[category.key as keyof typeof t.blog.categories]}
                          </span>
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
                      {categoryPosts.map((post, postIndex) => (
                        <motion.div
                          key={`${category.key}-${postIndex}`}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: postIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <Card className="h-full hover:shadow-lg transition-all duration-300 hover:border-noreja-main/30 group bg-background/80 backdrop-blur-sm flex flex-col">
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
                            <CardHeader className="flex-grow">
                              <div className="flex items-center justify-between mb-2">
                                <Badge variant="secondary" className="text-xs">
                                  {Math.ceil(Math.random() * 8) + 2} min read
                                </Badge>
                                <span className="text-xs text-muted-foreground">
                                  {formatDate(post.pubDate)}
                                </span>
                              </div>
                              <CardTitle className="text-lg line-clamp-2 group-hover:text-noreja-main transition-colors">
                                {post.title}
                              </CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-col flex-grow">
                              <p className="text-sm text-muted-foreground line-clamp-3 mb-4 flex-grow">
                                {post.description}
                              </p>
                              <div className="flex items-center justify-between mt-auto">
                                {post.author && (
                                  <span className="text-xs text-muted-foreground">
                                    {extractAuthorName(post.author)}
                                  </span>
                                )}
                                <Button 
                                  variant="ghost" 
                                  size="sm" 
                                  className="p-0 h-auto text-noreja-main hover:bg-noreja-main/10"
                                  asChild
                                >
                                  <a href={post.link} target="_blank" rel="noopener noreferrer">
                                    {t.blog.readMore}
                                    <ExternalLink className="w-3 h-3 ml-1" />
                                  </a>
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
          </div>
        </div>
      </div>

      {/* Newsletter CTA */}
      <div className="relative" style={{
        background: `
          linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--noreja-main) / 0.16) 40%, hsl(var(--noreja-secondary) / 0.15) 80%, hsl(var(--background)) 100%),
          radial-gradient(ellipse 1000px 700px at 70% 20%, hsl(var(--noreja-secondary) / 0.14) 0%, transparent 60%)
        `
      }}>
        {/* Gradient fade from previous section */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent pointer-events-none z-0" />
        <div className="relative z-10">
          <div className="w-full max-w-4xl mx-auto px-4 lg:px-8 py-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-r from-noreja-main/10 to-noreja-main/5 rounded-2xl p-8 lg:p-12 border border-noreja-main/20 backdrop-blur-sm">
                <BookOpen className="w-12 h-12 mx-auto mb-6 text-noreja-main" />
                <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">
                  {t.blog.newsletterCta.title}
                </h3>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  {t.blog.newsletterCta.description}
                </p>
                <div className="flex justify-center items-center">
                  <Button 
                    size="lg" 
                    className="gradient-primary glow-primary"
                    asChild
                  >
                    <a 
                      href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7127319663822221313" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      {t.blog.newsletterCta.subscribeLinkedIn}
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}