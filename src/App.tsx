import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import Functionalities from "./pages/Functionalities";
import SuccessStories from "./pages/SuccessStories";
import Team from "./pages/Team";
import Partners from "./pages/Partners";
import Blog from "./pages/Blog";
import Downloads from "./pages/Downloads";
import Pricing from "./pages/Pricing";
import Imprint from "./pages/Imprint";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/functionalities" element={<Functionalities />} />
            <Route path="/success-stories" element={<SuccessStories />} />
            <Route path="/team" element={<Team />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/imprint" element={<Imprint />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
