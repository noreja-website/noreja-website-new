import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type HubSpot = {
  forms?: {
    create?: (config: Record<string, unknown>) => void;
  };
};

interface HubSpotContactFormProps {
  portalId?: string;
  formId?: string;
  region?: string;
  scriptSrc?: string;
  targetId?: string;
  wrapperClassName?: string;
  contentClassName?: string;
  minHeight?: number | string;
  loadingMessage?: string;
  errorMessage?: string;
}

const DEFAULT_SCRIPT_SRC = "https://js-eu1.hsforms.net/forms/embed/v2.js";
const DEFAULT_PORTAL_ID = "144242473";
const DEFAULT_FORM_ID = "8e77caaf-8841-462e-b0bb-0ef0082e0c48";
const DEFAULT_REGION = "eu1";

export function HubSpotContactForm({
  portalId = DEFAULT_PORTAL_ID,
  formId = DEFAULT_FORM_ID,
  region = DEFAULT_REGION,
  scriptSrc = DEFAULT_SCRIPT_SRC,
  targetId,
  wrapperClassName,
  contentClassName,
  minHeight = "400px",
  loadingMessage,
  errorMessage,
}: HubSpotContactFormProps) {
  const [formLoaded, setFormLoaded] = useState(false);
  const [formError, setFormError] = useState(false);

  const formContainerIdRef = useRef<string>(
    targetId ?? `hubspot-form-${Math.random().toString(36).slice(2, 10)}`
  );

  const formContainerId = formContainerIdRef.current;

  useEffect(() => {
    let isMounted = true;
    let observer: MutationObserver | null = null;

    setFormLoaded(false);
    setFormError(false);

    const renderForm = () => {
      const hbspt = (window as unknown as { hbspt?: HubSpot }).hbspt;
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
        region,
        portalId,
        formId,
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
        const hbspt = (window as unknown as { hbspt?: HubSpot }).hbspt;
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
  }, [formContainerId, formId, portalId, region, scriptSrc]);

  return (
    <div className={cn("w-full", wrapperClassName)}>
      <div
        className={cn(
          "hubspot-form-container flex flex-col items-center justify-center space-y-4",
          contentClassName
        )}
        style={{ minHeight }}
      >
        {!formLoaded && !formError && loadingMessage && (
          <p className="text-muted-foreground text-center" aria-live="polite">
            {loadingMessage}
          </p>
        )}
        {formError && errorMessage && (
          <p className="text-destructive text-center">{errorMessage}</p>
        )}
        <div className="w-full" id={formContainerId} />
      </div>
    </div>
  );
}

export default HubSpotContactForm;



