import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* TODO: Add HubSpot tracking script */}
      {/* 
      <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/YOUR_PORTAL_ID.js"></script>
      */}
      
      <Header />
      <main className="flex-1">
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