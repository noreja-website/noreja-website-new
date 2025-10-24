import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

interface BlogPost {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  author?: string;
  imageUrl?: string;
}

interface HubSpotBlogTeaserProps {
  maxItems?: number;
}

export function HubSpotBlogTeaser({ maxItems = 3 }: HubSpotBlogTeaserProps) {
  const { t, language } = useLanguage();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // HubSpot RSS Feed URLs - adjust based on language
  const RSS_FEED_URL = language === 'de' 
    ? 'https://144242473.hs-sites-eu1.com/de-de/noreja-intelligence-gmbh-blog/rss.xml'
    : 'http://144242473.hs-sites-eu1.com/en/noreja-intelligence-blog/rss.xml';

  // Helper function to extract author name without email
  const extractAuthorName = (authorString: string | null | undefined): string | undefined => {
    if (!authorString) return undefined;
    
    // Format: "email@domain.com (Name)" -> extract Name
    const nameInParens = authorString.match(/\(([^)]+)\)/);
    if (nameInParens) {
      return nameInParens[1].trim();
    }
    
    // Format: "Name <email@domain.com>" -> extract Name
    const nameBeforeEmail = authorString.match(/^([^<]+)</);
    if (nameBeforeEmail) {
      return nameBeforeEmail[1].trim();
    }
    
    // If it's just an email, don't show it
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(authorString.trim());
    if (isEmail) {
      return undefined;
    }
    
    // Otherwise return as-is (but trim whitespace)
    return authorString.trim();
  };

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Fetch RSS feed via CORS proxy or direct fetch
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
        
        // Check for parsing errors
        const parserError = xmlDoc.querySelector('parsererror');
        if (parserError) {
          throw new Error('Failed to parse RSS feed');
        }
        
        // Extract blog posts from RSS feed
        const items = xmlDoc.querySelectorAll('item');
        const blogPosts: BlogPost[] = Array.from(items).slice(0, maxItems).map(item => {
          const title = item.querySelector('title')?.textContent || 'Untitled';
          const link = item.querySelector('link')?.textContent || '#';
          const pubDate = item.querySelector('pubDate')?.textContent || '';
          const description = item.querySelector('description')?.textContent || '';
          const authorRaw = item.querySelector('author, dc\\:creator')?.textContent;
          const author = extractAuthorName(authorRaw);
          
          // Extract image from various possible RSS elements
          let imageUrl: string | undefined;
          
          // Try media:content (common in RSS feeds)
          const mediaContent = item.querySelector('media\\:content, content');
          if (mediaContent) {
            imageUrl = mediaContent.getAttribute('url') || undefined;
          }
          
          // Try enclosure tag
          if (!imageUrl) {
            const enclosure = item.querySelector('enclosure[type^="image"]');
            if (enclosure) {
              imageUrl = enclosure.getAttribute('url') || undefined;
            }
          }
          
          // Try to extract image from description HTML
          if (!imageUrl && description) {
            const imgMatch = description.match(/<img[^>]+src="([^">]+)"/);
            if (imgMatch) {
              imageUrl = imgMatch[1];
            }
          }
          
          // Clean up description (remove HTML tags if present)
          const cleanDescription = description.replace(/<[^>]*>/g, '').substring(0, 200) + '...';
          
          return {
            title,
            link,
            pubDate,
            description: cleanDescription,
            author,
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
  }, [maxItems, language]);

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

  return (
    <section className="py-12 md:py-16 lg:py-20" aria-labelledby="blog-teaser-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 id="blog-teaser-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 px-4">
            {t.blog.title}
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto px-4">
            {t.blog.subtitle}
          </p>
        </div>
        
        {/* Blog Posts Grid */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {Array.from({ length: maxItems }).map((_, i) => (
              <Card key={i} className="overflow-hidden">
                <Skeleton className="w-full aspect-video" />
                <CardHeader>
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-1/2" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-2/3 mb-4" />
                  <Skeleton className="h-10 w-full" />
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {error && (
          <div className="text-center py-8 md:py-12 px-4">
            <p className="text-muted-foreground mb-4 text-sm sm:text-base">{error}</p>
            <Button 
              variant="outline"
              size="lg"
              onClick={() => window.location.reload()}
              className="min-h-[44px]"
            >
              {language === 'de' ? 'Erneut versuchen' : 'Try Again'}
            </Button>
          </div>
        )}

        {!loading && !error && posts.length === 0 && (
          <div className="text-center py-8 md:py-12 px-4">
            <p className="text-muted-foreground text-sm sm:text-base">
              {language === 'de' ? 'Keine Blog-Beiträge verfügbar' : 'No blog posts available'}
            </p>
          </div>
        )}

        {!loading && !error && posts.length > 0 && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 md:mb-8">
              {posts.map((post, index) => (
                <Card key={index} className="flex flex-col hover:shadow-lg transition-shadow overflow-hidden">
                  {post.imageUrl && (
                    <div className="w-full aspect-video overflow-hidden bg-muted">
                      <img 
                        src={post.imageUrl} 
                        alt={post.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg sm:text-xl line-clamp-2 leading-snug">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-xs sm:text-sm">
                      {formatDate(post.pubDate)}
                      {post.author && ` • ${post.author}`}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow pt-0">
                    <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                      {post.description}
                    </p>
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="w-full min-h-[44px]"
                    >
                      {t.blog.readMore}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center px-4">
              <Button 
                variant="default"
                size="lg"
                className="min-h-[44px] w-full sm:w-auto"
                asChild
              >
                <Link to="/blog" className="inline-flex items-center gap-2">
                  {t.blog.openBlog}
                </Link>
              </Button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}