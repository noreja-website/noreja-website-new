import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <LanguageProvider>
          <ConditionalLayout>
            <Routes>
              {/* Redirect root to German home */}
              <Route path="/" element={<Navigate to="/de" replace />} />
              
              {/* Language-prefixed routes */}
              <Route path="/de" element={<Index />} />
              <Route path="/en" element={<Index />} />
              
              {/* Functionalities */}
              <Route path="/de/plattform" element={<Functionalities />} />
              <Route path="/en/platform" element={<Functionalities />} />
              
              {/* Pricing */}
              <Route path="/de/preise" element={<Pricing />} />
              <Route path="/en/pricing" element={<Pricing />} />
              
              {/* Success Stories */}
              <Route path="/de/success-stories" element={<SuccessStories />} />
              <Route path="/en/success-stories" element={<SuccessStories />} />
              
              {/* Success Story Detail */}
              <Route path="/de/success-story/:companyName" element={<SuccessStoryDetail />} />
              <Route path="/en/success-story/:companyName" element={<SuccessStoryDetail />} />
              
              {/* Partners */}
              <Route path="/de/partner" element={<Partners />} />
              <Route path="/en/partners" element={<Partners />} />
              
              {/* Team */}
              <Route path="/de/team" element={<Team />} />
              <Route path="/en/team" element={<Team />} />
              
              {/* Events */}
              <Route path="/de/veranstaltungen" element={<Events />} />
              <Route path="/en/events" element={<Events />} />
              
              {/* Downloads */}
              <Route path="/de/downloads" element={<Downloads />} />
              <Route path="/en/downloads" element={<Downloads />} />
              
              {/* Download Thank You */}
              <Route path="/de/download-vielen-dank" element={<DownloadThankYou />} />
              <Route path="/en/download-thank-you" element={<DownloadThankYou />} />
              
              {/* Use Cases */}
              <Route path="/de/use-cases/:useCaseName" element={<UseCase />} />
              <Route path="/en/use-cases/:useCaseName" element={<UseCase />} />
              
              {/* Contact */}
              <Route path="/de/kontakt" element={<ContactUs />} />
              <Route path="/en/contact" element={<ContactUs />} />
              
              {/* Imprint */}
              <Route path="/de/impressum" element={<Imprint />} />
              <Route path="/en/imprint" element={<Imprint />} />
              
              {/* Privacy */}
              <Route path="/de/datenschutz" element={<PrivacyPolicy />} />
              <Route path="/en/privacy" element={<PrivacyPolicy />} />
              
              {/* Blog */}
              <Route path="/de/blog" element={<Blog />} />
              <Route path="/en/blog" element={<Blog />} />
              
              {/* Blog Category */}
              <Route path="/de/blog/:category" element={<BlogCategory />} />
              <Route path="/en/blog/:category" element={<BlogCategory />} />
              
              {/* Terms */}
              <Route path="/de/nutzungsbedingungen" element={<TermsOfService />} />
              <Route path="/en/terms" element={<TermsOfService />} />
              
              {/* Maintenance (same for both) */}
              <Route path="/maintenance" element={<Maintenance />} />
              
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </ConditionalLayout>
        </LanguageProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
