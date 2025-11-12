import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const ContactUs = () => {
  const { t } = useLanguage();

  const [formLoaded, setFormLoaded] = useState(false);
  const [formError, setFormError] = useState(false);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Load HubSpot embed script once and let it initialize the form container
  useEffect(() => {
    let isMounted = true;
    const formContainerId = "hubspot-contact-form";
    const scriptSrc = "https://js-eu1.hsforms.net/forms/embed/v2.js";
    let observer: MutationObserver | null = null;

    setFormLoaded(false);
    setFormError(false);

    const renderForm = () => {
      const hbspt = (window as unknown as { hbspt?: any }).hbspt;
      const container = document.getElementById(formContainerId);

      if (!hbspt?.forms?.create || !container) {
        if (isMounted) {
          setFormError(true);
        }
        return;
      }

      container.innerHTML = "";
      if (isMounted) {
        setFormError(false);
        setFormLoaded(false);
      }

      observer?.disconnect();
      observer = new MutationObserver(() => {
        if (!isMounted) {
          observer?.disconnect();
          return;
        }
        if (container.childElementCount > 0) {
          setFormLoaded(true);
          observer?.disconnect();
        }
      });
      observer.observe(container, { childList: true });

      hbspt.forms.create({
        region: "eu1",
        portalId: "144242473",
        formId: "8e77caaf-8841-462e-b0bb-0ef0082e0c48",
        target: `#${formContainerId}`,
        onFormReady: () => {
          if (isMounted) {
            setFormLoaded(true);
          }
        },
        onFormSubmit: () => {
          if (isMounted) {
            setFormLoaded(true);
          }
        },
        onFormError: () => {
          if (isMounted) {
            setFormError(true);
          }
        },
      });
    };

    const loadHubSpotScript = () =>
      new Promise<void>((resolve, reject) => {
        const hbspt = (window as unknown as { hbspt?: any }).hbspt;
        if (hbspt?.forms?.create) {
          resolve();
          return;
        }

        let script = document.querySelector<HTMLScriptElement>(
          `script[src="${scriptSrc}"]`
        );

        const handleLoad = () => resolve();
        const handleError = () =>
          reject(new Error("Failed to load HubSpot form script"));

        if (script) {
          script.addEventListener("load", handleLoad, { once: true });
          script.addEventListener("error", handleError, { once: true });
          return;
        }

        script = document.createElement("script");
        script.src = scriptSrc;
        script.async = true;
        script.defer = true;
        script.addEventListener("load", handleLoad, { once: true });
        script.addEventListener("error", handleError, { once: true });
        document.head.appendChild(script);
      });

    loadHubSpotScript()
      .then(() => {
        if (isMounted) {
          renderForm();
        }
      })
      .catch(() => {
        if (isMounted) {
          setFormError(true);
        }
      });

    return () => {
      isMounted = false;
      observer?.disconnect();
    };
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
            {/* HubSpot Form Container */}
            <div className="w-full">
              <div
                className="hubspot-form-container flex flex-col items-center justify-center space-y-4"
                style={{ minHeight: "400px" }}
              >
                {!formLoaded && !formError && (
                  <p className="text-muted-foreground text-center" aria-live="polite">
                    {t.pages.contact.formLoading}
                  </p>
                )}
                {formError && (
                  <p className="text-destructive text-center">
                    {t.pages.contact.formError}
                  </p>
                )}
                <div className="w-full" id="hubspot-contact-form" />
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