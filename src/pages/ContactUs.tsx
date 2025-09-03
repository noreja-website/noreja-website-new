import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const ContactUs = () => {
  const { t } = useLanguage();

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
            {/* HubSpot Form Container */}
            <div className="w-full">
              <div 
                className="hubspot-form-container"
                id="hubspot-contact-form"
                style={{ minHeight: '400px' }}
              >
                {/* HubSpot form will be embedded here */}
                <div className="flex items-center justify-center h-96 bg-muted/20 rounded-lg border-2 border-dashed border-border">
                  <div className="text-center">
                    <p className="text-muted-foreground text-lg mb-2">HubSpot Contact Form</p>
                    <p className="text-sm text-muted-foreground">
                      Form will be embedded here with portal ID and form GUID
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
            onClick={() => window.open('https://outlook.live.com/book/', '_blank')}
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