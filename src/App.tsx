import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ConditionalLayout } from "@/components/ConditionalLayout";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import Functionalities from "./pages/Functionalities";
import SuccessStories from "./pages/SuccessStories";
import SuccessStoryDetail from "./pages/SuccessStoryDetail";
import UseCase from "./pages/UseCase";
import Team from "./pages/Team";
import Partners from "./pages/Partners";
import Blog from "./pages/Blog";
import BlogCategory from "./pages/BlogCategory";
import Downloads from "./pages/Downloads";
import DownloadThankYou from "./pages/DownloadThankYou";
import Events from "./pages/Events";
import Pricing from "./pages/Pricing";
import ContactUs from "./pages/ContactUs";
import Imprint from "./pages/Imprint";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";
import Maintenance from "./pages/Maintenance";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ConditionalLayout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/functionalities" element={<Functionalities />} />
              <Route path="/success-stories" element={<SuccessStories />} />
              <Route path="/success-stories/:companyName" element={<SuccessStoryDetail />} />
              <Route path="/use-cases/:useCaseName" element={<UseCase />} />
              <Route path="/team" element={<Team />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:category" element={<BlogCategory />} />
              <Route path="/downloads" element={<Downloads />} />
              <Route path="/download-thank-you" element={<DownloadThankYou />} />
              <Route path="/events" element={<Events />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/imprint" element={<Imprint />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/maintenance" element={<Maintenance />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </ConditionalLayout>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
