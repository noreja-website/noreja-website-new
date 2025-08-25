import { useEffect } from 'react';

interface HubSpotBlogTeaserProps {
  maxItems?: number;
}

export function HubSpotBlogTeaser({ maxItems = 3 }: HubSpotBlogTeaserProps) {
  useEffect(() => {
    // Client-side script loading for HubSpot blog teaser
    // This ensures the component is safe for server-side rendering
    
    /* 
    TODO: Uncomment and configure one of the following options:
    
    OPTION 1: HubSpot Blog Listing Widget
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.id = 'hs-script-loader';
    script.async = true;
    script.defer = true;
    script.src = `//js.hs-scripts.com/YOUR_HUBSPOT_PORTAL_ID.js`;
    document.head.appendChild(script);
    
    OR
    
    OPTION 2: Custom RSS Feed Implementation
    // Fetch blog posts from RSS feed and render manually
    const fetchBlogPosts = async () => {
      try {
        // Replace with your blog RSS feed URL
        const response = await fetch('/api/blog-feed'); // or your RSS endpoint
        const posts = await response.json();
        const limitedPosts = posts.slice(0, ${maxItems});
        
        // Render posts in the hubspot-blog-teaser container
        const container = document.getElementById('hubspot-blog-teaser');
        if (container) {
          container.innerHTML = limitedPosts.map(post => `
            <article class="blog-post">
              <h3><a href="${post.link}">${post.title}</a></h3>
              <p>${post.excerpt}</p>
              <time>${post.publishDate}</time>
            </article>
          `).join('');
        }
      } catch (error) {
        console.error('Failed to load blog posts:', error);
      }
    };
    
    fetchBlogPosts();
    */
    
    // Cleanup function
    return () => {
      // Remove scripts if needed when component unmounts
    };
  }, [maxItems]);

  return (
    <section className="py-20" aria-labelledby="blog-teaser-heading">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="blog-teaser-heading" className="text-3xl font-bold mb-4">Latest Insights</h2>
          <p className="text-muted-foreground">Stay updated with our latest thoughts and innovations</p>
        </div>
        
        {/* HubSpot Blog Teaser Embed Container */}
        <div 
          id="hubspot-blog-teaser"
          className="min-h-[400px] bg-muted/30 rounded-lg border border-border flex items-center justify-center"
        >
          <div className="text-center text-muted-foreground">
            <p className="text-sm">Blog posts will appear here (showing up to {maxItems} items)</p>
            <p className="text-xs mt-2">Configure HubSpot embed or RSS feed in useEffect</p>
          </div>
        </div>
        
        {/* 
        HubSpot Blog Listing Widget Configuration:
        1. Replace YOUR_HUBSPOT_PORTAL_ID in the useEffect with your actual Portal ID
        2. If using HubSpot's blog listing widget, the maxItems limit may need to be configured
           in your HubSpot dashboard under Content > Blog > Settings > Blog Listing
        3. For RSS implementation, the maxItems prop controls the number of posts shown
        
        Alternative HubSpot Blog Module Embed (if you prefer inline approach):
        <div id="hs_cos_wrapper_blog_teaser" 
             className="hs_cos_wrapper hs_cos_wrapper_widget" 
             data-hs-cos-general-type="widget" 
             data-hs-cos-type="module">
        </div>
        
        Note: HubSpot blog listing widgets don't always support direct item limits via embed code.
        You may need to configure this in your HubSpot portal settings or use custom CSS/JS
        to limit the displayed items to the maxItems value.
        */}
      </div>
    </section>
  );
}