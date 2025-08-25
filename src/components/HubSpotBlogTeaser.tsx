export function HubSpotBlogTeaser() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Latest Insights</h2>
          <p className="text-muted-foreground">Stay updated with our latest thoughts and innovations</p>
        </div>
        
        {/* HubSpot Blog Teaser Embed Container */}
        <div 
          id="hubspot-blog-teaser"
          className="min-h-[400px] bg-muted/30 rounded-lg border border-border flex items-center justify-center"
        >
          <div className="text-center text-muted-foreground">
            <p className="text-sm">HubSpot Blog Teaser will appear here</p>
            <p className="text-xs mt-2">Paste HubSpot embed code in the script section below</p>
          </div>
        </div>
        
        {/* 
        TODO: Replace this comment with HubSpot blog teaser embed script
        
        Example HubSpot embed code structure:
        <script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/embed/v2.js"></script>
        <script>
          hbspt.forms.create({
            region: "YOUR_REGION",
            portalId: "YOUR_PORTAL_ID", 
            formId: "YOUR_FORM_ID",
            target: "#hubspot-blog-teaser"
          });
        </script>
        
        OR for blog listing widget:
        <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/YOUR_PORTAL_ID.js"></script>
        <div id="hs_cos_wrapper_blog_teaser" class="hs_cos_wrapper hs_cos_wrapper_widget" style="" data-hs-cos-general-type="widget" data-hs-cos-type="module">
          <!-- HubSpot blog teaser module will render here -->
        </div>
        */}
      </div>
    </section>
  );
}