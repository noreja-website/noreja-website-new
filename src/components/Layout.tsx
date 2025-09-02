import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Global grid background */}
      <div className="fixed inset-0 opacity-5 pointer-events-none z-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--noreja-tertiary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--noreja-tertiary)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      {/* TODO: Add HubSpot tracking script */}
      {/* 
      <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/YOUR_PORTAL_ID.js"></script>
      */}
      
      <Header />
      <main className="flex-1 relative z-10 overflow-y-auto">
        {children}
      </main>
      <Footer />
      
      {/* TODO: Add HubSpot chat widget */}
      {/* 
      <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/YOUR_PORTAL_ID.js"></script>
      */}
    </div>
  );
}