import { ReactNode, useEffect, useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { GlobalConnectionOverlay } from "./GlobalConnectionOverlay";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [globalConnections, setGlobalConnections] = useState<any[]>([]);

  useEffect(() => {
    // Listen for global connections data from ProcessGraphSection
    const updateConnections = () => {
      const section = document.querySelector('[data-global-connections]');
      if (section) {
        const connectionsData = section.getAttribute('data-global-connections');
        if (connectionsData) {
          try {
            setGlobalConnections(JSON.parse(connectionsData));
          } catch (e) {
            console.warn('Failed to parse global connections:', e);
          }
        }
      }
    };

    // Check immediately and set up observer
    updateConnections();
    
    const observer = new MutationObserver(updateConnections);
    observer.observe(document.body, { 
      childList: true, 
      subtree: true, 
      attributes: true,
      attributeFilter: ['data-global-connections']
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative w-full max-w-full overflow-x-hidden">
      {/* Global grid background */}
      <div className="fixed inset-0 opacity-5 pointer-events-none z-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--noreja-main)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--noreja-main)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      {/* TODO: Add HubSpot tracking script */}
      {/* 
      <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/YOUR_PORTAL_ID.js"></script>
      */}
      
      <Header />
      <main className="flex-1 relative z-10 w-full max-w-full overflow-x-hidden">
        {children}
      </main>
      <Footer />
      
      {/* Global Connection Overlay */}
      <GlobalConnectionOverlay connections={globalConnections} />
      
      {/* TODO: Add HubSpot chat widget */}
      {/* 
      <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/YOUR_PORTAL_ID.js"></script>
      */}
    </div>
  );
}