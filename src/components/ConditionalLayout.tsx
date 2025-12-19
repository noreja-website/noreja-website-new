import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { Layout } from "./Layout";

interface ConditionalLayoutProps {
  children: ReactNode;
}

export function ConditionalLayout({ children }: ConditionalLayoutProps) {
  const location = useLocation();
  
  // Don't wrap maintenance page in Layout
  if (location.pathname === "/maintenance") {
    return <>{children}</>;
  }
  
  return <Layout>{children}</Layout>;
}

