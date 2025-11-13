import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { HubSpotContactForm } from "@/components/HubSpotContactForm";

const ContactUs = () => {
  const { t } = useLanguage();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            {t.pages.contact.title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.pages.contact.subtitle}
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl border border-border shadow-sm p-8 sm:p-12">
            <HubSpotContactForm
              wrapperClassName="w-full"
              loadingMessage={t.pages.contact.formLoading}
              errorMessage={t.pages.contact.formError}
              targetId="hubspot-contact-form"
            />
          </div>
        </div>
      </section>

      {/* Secondary CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl text-foreground mb-8">
            {t.pages.contact.bookCallText}
          </p>
          <Button 
            size="lg"
            className="text-lg px-8 py-3"
            onClick={() => window.open('https://outlook.office365.com/book/Kennenlernen@noreja.com/?ismsaljsauthenabled=true', '_blank')}
          >
            {t.pages.contact.bookCallButton}
            <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer Note */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            {t.pages.contact.responseNote}
          </p>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;