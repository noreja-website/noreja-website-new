import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, X, FileText, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { config } from "@/lib/config";
import { useLanguage } from "@/contexts/LanguageContext";

interface DownloadGateProps {
  title: string;
  description: string;
  fileUrl: string;
  fileSize?: string;
  fileType?: string;
  formPortalId?: string;
  formGuid?: string;
  onSuccess?: () => void;
  className?: string;
  variant?: "default" | "card";
  requiresForm?: boolean;
  accessLabel?: string;
}

interface DownloadGateInlineProps extends Omit<DownloadGateProps, "variant"> {
  buttonText?: string;
  buttonVariant?: "default" | "outline" | "secondary";
}

// Session storage key for tracking form submissions
const DOWNLOAD_SESSION_KEY = "noreja_download_validated";

// Load HubSpot form script dynamically
const loadHubSpotScript = (scriptSrc: string = "https://js-eu1.hsforms.net/forms/embed/144242473.js"): Promise<void> => {
  return new Promise((resolve, reject) => {
    const hbspt = (window as unknown as { hbspt?: { forms?: { create?: (config: Record<string, unknown>) => void } } }).hbspt;
    if (hbspt?.forms?.create) {
      resolve();
      return;
    }

    // Check if script is already being loaded
    let script = document.querySelector<HTMLScriptElement>(
      `script[src="${scriptSrc}"]`
    );

    const handleLoad = () => resolve();
    const handleError = () => reject(new Error("Failed to load HubSpot form script"));

    if (script) {
      script.addEventListener("load", handleLoad, { once: true });
      script.addEventListener("error", handleError, { once: true });
      return;
    }

    script = document.createElement("script");
    script.src = scriptSrc;
    script.async = true;
    script.defer = true;
    script.charset = "utf-8";
    script.type = "text/javascript";
    script.addEventListener("load", handleLoad, { once: true });
    script.addEventListener("error", handleError, { once: true });
    document.head.appendChild(script);
  });
};

// Create HubSpot form
const createHubSpotForm = (
  portalId: string,
  formGuid: string,
  targetId: string,
  onFormSubmit: () => void,
  onFormReady?: () => void,
  onFormError?: () => void
) => {
  const hbspt = (window as unknown as { hbspt?: { forms?: { create?: (config: Record<string, unknown>) => void } } }).hbspt;
  
  if (!hbspt?.forms?.create) {
    console.error("HubSpot script not loaded");
    onFormError?.();
    return;
  }

  const targetElement = document.getElementById(targetId);
  if (!targetElement) {
    console.error(`Target element #${targetId} not found`);
    onFormError?.();
    return;
  }

  // Clear any existing content
  targetElement.innerHTML = '';

  try {
            console.log("Creating HubSpot form with:", { region: "eu1", portalId, formId: formGuid, target: `#${targetId}` });
            hbspt.forms.create({
      region: "eu1",
    portalId,
    formId: formGuid,
    target: `#${targetId}`,
    onFormSubmit: () => {
        console.log("HubSpot form submitted");
      // Set session flag
      sessionStorage.setItem(DOWNLOAD_SESSION_KEY, "true");
      onFormSubmit();
    },
    onFormReady: () => {
      console.log("HubSpot form loaded successfully");
        onFormReady?.();
      },
      onFormError: (error: unknown) => {
        console.error("HubSpot form error:", error);
        onFormError?.();
    }
  });
  } catch (error) {
    console.error("Error creating HubSpot form:", error);
    onFormError?.();
  }
};

// Check if user has already validated this session
const isUserValidated = (): boolean => {
  return sessionStorage.getItem(DOWNLOAD_SESSION_KEY) === "true";
};

// Open file in new tab
const triggerDownload = (fileUrl: string, fileName?: string) => {
  window.open(fileUrl, '_blank');
};

export const DownloadGate: React.FC<DownloadGateProps> = ({
  title,
  description,
  fileUrl,
  fileSize,
  fileType,
  formPortalId = config.hubspot.portalId,
  formGuid = config.hubspot.defaultFormGuid,
  onSuccess,
  className = "",
  variant = "default",
  requiresForm = true,
  accessLabel
}) => {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFormLoading, setIsFormLoading] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [formLoaded, setFormLoaded] = useState(false);
  const [formError, setFormError] = useState(false);
  const { toast } = useToast();

  // Generate a stable form target ID using useRef (like HubSpotContactForm)
  const formTargetIdRef = useRef<string>(`hubspot-form-${Math.random().toString(36).substr(2, 9)}`);
  const formTargetId = formTargetIdRef.current;
  
  // Use ref to track form loaded state (immediately available in observer callback)
  const formLoadedRef = useRef(false);

  const handleDirectDownload = useCallback(() => {
    setIsDownloading(true);
    triggerDownload(fileUrl, title);
    
    // Reset downloading state after a delay
    setTimeout(() => {
      setIsDownloading(false);
    }, 2000);
  }, [fileUrl, title]);

  const handleFormSuccess = useCallback(() => {
    // Close modal and start download
    setIsModalOpen(false);
    handleDirectDownload();
    onSuccess?.();
    
    toast({
      title: t.downloadGate.success,
      description: t.downloadGate.downloadStarted,
      variant: "default"
    });
  }, [handleDirectDownload, onSuccess, toast, t.downloadGate.success, t.downloadGate.downloadStarted]);

  // Load HubSpot script and create form when modal opens (following HubSpotContactForm pattern)
  useEffect(() => {
    if (!isModalOpen || !requiresForm) {
      // Reset states when modal closes
      setIsFormLoading(false);
      setFormLoaded(false);
      setFormError(false);
      formLoadedRef.current = false;
      return;
    }

    let isMounted = true;
    let observer: MutationObserver | null = null;
    let formSubmitted = false; // Flag to prevent double-firing

    const renderForm = () => {
      const hbspt = (window as unknown as { hbspt?: { forms?: { create?: (config: Record<string, unknown>) => void } } }).hbspt;
      const container = document.getElementById(formTargetId);

      if (!hbspt?.forms?.create || !container) {
        if (isMounted) {
          setFormError(true);
          setIsFormLoading(false);
        }
        return;
      }

      container.innerHTML = "";
      formSubmitted = false; // Reset flag
      formLoadedRef.current = false; // Reset ref
      if (isMounted) {
        setFormError(false);
        setFormLoaded(false);
        setIsFormLoading(true);
      }

      observer?.disconnect();
      observer = new MutationObserver(() => {
        if (!isMounted) {
          observer?.disconnect();
          return;
        }
        
        const currentContainer = document.getElementById(formTargetId);
        if (!currentContainer) return;
        
        // Check if form is loaded (initial state) - use ref for immediate availability
        if (currentContainer.childElementCount > 0 && !formLoadedRef.current) {
          formLoadedRef.current = true;
          setFormLoaded(true);
          setIsFormLoading(false);
          // Don't disconnect - keep watching for success message
        }
        
        // Check for success indicators after form is loaded - use ref
        if (currentContainer && formLoadedRef.current && !formSubmitted) {
          const containerText = currentContainer.textContent?.toLowerCase() || '';
          
          // Look for success message text (English and German)
          const hasSuccessText = 
            containerText.includes('thank') || 
            containerText.includes('success') ||
            containerText.includes('erfolgreich') ||
            containerText.includes('vielen dank') ||
            containerText.includes('danke');
          
          // Look for HubSpot success classes
          const hasSuccessClass = 
            currentContainer.querySelector('.submitted-message') ||
            currentContainer.querySelector('.hs-form-success') ||
            currentContainer.querySelector('[class*="success"]') ||
            currentContainer.querySelector('[class*="submitted"]');
          
          // Check if form is hidden (HubSpot hides form on success)
          const form = currentContainer.querySelector('form');
          const formHidden = form && (
            form.style.display === 'none' || 
            form.getAttribute('style')?.includes('display: none') ||
            window.getComputedStyle(form).display === 'none'
          );
          
          // Check if form element was removed (replaced by success message)
          const formRemoved = !currentContainer.querySelector('form') && formLoadedRef.current;
          
          if (hasSuccessText || hasSuccessClass || formHidden || formRemoved) {
            console.log("HubSpot form success detected", { hasSuccessText, hasSuccessClass, formHidden, formRemoved });
            if (isMounted && !formSubmitted) {
              formSubmitted = true;
              sessionStorage.setItem(DOWNLOAD_SESSION_KEY, "true");
              
              // Small delay to ensure user sees the success message
              setTimeout(() => {
                if (isMounted) {
                  handleFormSuccess();
                  observer?.disconnect();
                }
              }, 1000);
            }
          }
        }
      });
      observer.observe(container, { childList: true, subtree: true, attributes: true, attributeFilter: ['style', 'class'] });

      console.log("Creating HubSpot form with:", { region: "eu1", portalId: formPortalId, formId: formGuid, target: `#${formTargetId}` });
      
      hbspt.forms.create({
        region: "eu1",
        portalId: formPortalId,
        formId: formGuid,
        target: `#${formTargetId}`,
        onFormSubmit: () => {
          if (formSubmitted) return; // Prevent double-firing
          console.log("HubSpot form submitted via onFormSubmit callback");
          if (isMounted) {
            formSubmitted = true;
            // Set session flag first
            sessionStorage.setItem(DOWNLOAD_SESSION_KEY, "true");
            
            // Close modal and trigger download immediately
            handleFormSuccess();
          }
        },
        onFormReady: () => {
          console.log("HubSpot form loaded successfully");
          if (isMounted) {
            formLoadedRef.current = true;
            setFormLoaded(true);
            setIsFormLoading(false);
            // Don't disconnect observer - keep watching for success message
          }
        },
        onFormError: (error: unknown) => {
          console.error("HubSpot form error:", error);
          if (isMounted) {
            setFormError(true);
            setIsFormLoading(false);
            observer?.disconnect();
            toast({
              title: t.downloadGate.error,
              description: t.downloadGate.formLoadError,
              variant: "destructive"
            });
          }
        }
      });
    };

    const loadHubSpotScript = () =>
      new Promise<void>((resolve, reject) => {
        const hbspt = (window as unknown as { hbspt?: { forms?: { create?: (config: Record<string, unknown>) => void } } }).hbspt;
        if (hbspt?.forms?.create) {
          resolve();
          return;
        }

        const scriptSrc = "https://js-eu1.hsforms.net/forms/embed/144242473.js";
        let script = document.querySelector<HTMLScriptElement>(
          `script[src="${scriptSrc}"]`
        );

        const handleLoad = () => resolve();
        const handleError = () => reject(new Error("Failed to load HubSpot form script"));

        if (script) {
          script.addEventListener("load", handleLoad, { once: true });
          script.addEventListener("error", handleError, { once: true });
          return;
        }

        script = document.createElement("script");
        script.src = scriptSrc;
        script.async = true;
        script.defer = true;
        script.charset = "utf-8";
        script.type = "text/javascript";
        script.addEventListener("load", handleLoad, { once: true });
        script.addEventListener("error", handleError, { once: true });
        document.head.appendChild(script);
      });

    // Wait a bit for the dialog to be fully rendered before creating form
    const timeoutId = setTimeout(() => {
      loadHubSpotScript()
        .then(() => {
          if (isMounted) {
            renderForm();
          }
        })
        .catch(() => {
          if (isMounted) {
            setFormError(true);
            setIsFormLoading(false);
            toast({
              title: t.downloadGate.error,
              description: t.downloadGate.formLoadError,
              variant: "destructive"
            });
          }
        });
    }, 300);

    return () => {
      isMounted = false;
      clearTimeout(timeoutId);
      observer?.disconnect();
    };
  }, [isModalOpen, requiresForm, formTargetId, formPortalId, formGuid, handleFormSuccess, toast, t.downloadGate.error, t.downloadGate.formLoadError]);

  const handleDownloadClick = async () => {
    if (!requiresForm) {
      handleDirectDownload();
      return;
    }

    if (isUserValidated()) {
      // User already validated, download directly
      handleDirectDownload();
      return;
    }

    // Show modal with form - useEffect will handle form loading
    setIsModalOpen(true);
  };

  if (variant === "card") {
    return (
      <>
        <Card className={`group hover:shadow-lg transition-all duration-300 border-border/40 hover:border-noreja-main/30 ${className}`}>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <CardTitle className="text-lg font-semibold group-hover:text-noreja-main transition-colors flex-1">
                    {title}
                  </CardTitle>
                  {accessLabel && (
                    <Badge
                      variant={requiresForm ? "outline" : "secondary"}
                      className={`text-xs ${requiresForm ? "border-noreja-main/40 text-muted-foreground" : "bg-noreja-main text-white"}`}
                    >
                      {accessLabel}
                    </Badge>
                  )}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {description}
                </p>
              </div>
              <FileText className="w-8 h-8 text-noreja-main/60 flex-shrink-0 ml-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                {fileType && (
                  <Badge variant="secondary" className="text-xs">
                    {fileType}
                  </Badge>
                )}
                {fileSize && (
                  <Badge variant="outline" className="text-xs">
                    {fileSize}
                  </Badge>
                )}
              </div>
              <Button
                onClick={handleDownloadClick}
                disabled={isDownloading}
                className="bg-noreja-main hover:bg-noreja-main/90 text-white"
              >
                {isDownloading ? (
                  <CheckCircle className="w-4 h-4 mr-2" />
                ) : (
                  <Download className="w-4 h-4 mr-2" />
                )}
                {isDownloading ? t.downloadGate.downloaded : t.downloadGate.download}
              </Button>
            </div>
          </CardContent>
        </Card>

        {requiresForm && (
          <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle className="flex items-center">
                  <Download className="w-5 h-5 mr-2 text-noreja-main" />
                  Download {title}
                </DialogTitle>
              </DialogHeader>
              <div className="py-4">
                <p className="text-muted-foreground mb-6">
                  {t.downloadGate.fillForm}
                </p>
                
                {isFormLoading && !formLoaded && !formError && (
                  <div className="flex items-center justify-center py-4 mb-4">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-noreja-main"></div>
                  </div>
                )}
                
                {formError && (
                  <div className="text-destructive text-center mb-4">
                    {t.downloadGate.formLoadError}
                  </div>
                )}
                
                {/* Always render the form container (like HubSpotContactForm) */}
                <div id={formTargetId} className="hubspot-form-container w-full min-h-[200px]"></div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </>
    );
  }

  return (
    <div className={className}>
      <Button
        onClick={handleDownloadClick}
        disabled={isDownloading}
        size="lg"
        className="bg-noreja-main hover:bg-noreja-main/90 text-white"
      >
        {isDownloading ? (
          <CheckCircle className="w-5 h-5 mr-2" />
        ) : (
          <Download className="w-5 h-5 mr-2" />
        )}
        {isDownloading ? t.downloadGate.downloaded : t.downloadGate.download}
      </Button>

      {requiresForm && (
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle className="flex items-center">
                <Download className="w-5 h-5 mr-2 text-noreja-main" />
                Download {title}
              </DialogTitle>
            </DialogHeader>
            <div className="py-4">
              <p className="text-muted-foreground mb-6">
                {t.downloadGate.fillForm}
              </p>
              
              {isFormLoading && !formLoaded && !formError && (
                <div className="flex items-center justify-center py-4 mb-4">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-noreja-main"></div>
                </div>
              )}
              
              {formError && (
                <div className="text-destructive text-center mb-4">
                  {t.downloadGate.formLoadError}
                </div>
              )}
              
              {/* Always render the form container (like HubSpotContactForm) */}
              <div id={formTargetId} className="hubspot-form-container w-full min-h-[200px]"></div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export const DownloadGateInline: React.FC<DownloadGateInlineProps> = ({
  title,
  description,
  fileUrl,
  fileSize,
  fileType,
  formPortalId = config.hubspot.portalId,
  formGuid = config.hubspot.defaultFormGuid,
  onSuccess,
  className = "",
  buttonText,
  buttonVariant = "outline",
  requiresForm = true
}) => {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFormLoading, setIsFormLoading] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const { toast } = useToast();

  const defaultButtonText = buttonText || t.downloadGate.download;

  const formTargetId = `hubspot-form-inline-${Math.random().toString(36).substr(2, 9)}`;

  const handleDownloadClick = async () => {
    if (!requiresForm) {
      handleDirectDownload();
      return;
    }

    if (isUserValidated()) {
      handleDirectDownload();
      return;
    }

    setIsModalOpen(true);
    setIsFormLoading(true);

    try {
      await loadHubSpotScript();
      setTimeout(() => {
        createHubSpotForm(formPortalId, formGuid, formTargetId, handleFormSuccess);
        setIsFormLoading(false);
      }, 100);
    } catch (error) {
      console.error("Error loading HubSpot form:", error);
      toast({
        title: t.downloadGate.error,
        description: t.downloadGate.formLoadError,
        variant: "destructive"
      });
      setIsModalOpen(false);
      setIsFormLoading(false);
    }
  };

  const handleFormSuccess = () => {
    setIsModalOpen(false);
    handleDirectDownload();
    onSuccess?.();
    
    toast({
      title: t.downloadGate.success,
      description: t.downloadGate.downloadStarted,
      variant: "default"
    });
  };

  const handleDirectDownload = () => {
    setIsDownloading(true);
    triggerDownload(fileUrl, title);
    setTimeout(() => setIsDownloading(false), 2000);
  };

  return (
    <>
      <Button
        onClick={handleDownloadClick}
        disabled={isDownloading}
        variant={buttonVariant}
        className={`${className} ${buttonVariant === "outline" ? "border-noreja-main/30 hover:bg-noreja-main/10" : ""}`}
      >
        {isDownloading ? (
          <CheckCircle className="w-4 h-4 mr-2" />
        ) : (
          <Download className="w-4 h-4 mr-2" />
        )}
        {isDownloading ? t.downloadGate.downloaded : defaultButtonText}
      </Button>

      {requiresForm && (
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle className="flex items-center">
                <Download className="w-5 h-5 mr-2 text-noreja-main" />
                Download {title}
              </DialogTitle>
            </DialogHeader>
            <div className="py-4">
              <div className="mb-4">
                <h4 className="font-semibold mb-2">{title}</h4>
                <p className="text-sm text-muted-foreground">{description}</p>
                {(fileType || fileSize) && (
                  <div className="flex gap-2 mt-2">
                    {fileType && <Badge variant="secondary" className="text-xs">{fileType}</Badge>}
                    {fileSize && <Badge variant="outline" className="text-xs">{fileSize}</Badge>}
                  </div>
                )}
              </div>
              
              <p className="text-muted-foreground mb-6">
                {t.downloadGate.fillForm}
              </p>
              
              {isFormLoading ? (
                <div className="flex items-center justify-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-noreja-main"></div>
                </div>
              ) : (
                <div id={formTargetId} className="hubspot-form-container w-full min-h-[200px]"></div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

// Add TypeScript declaration for HubSpot
declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (options: {
          region: string;
          portalId: string;
          formId: string;
          target: string;
          onFormSubmit: () => void;
          onFormReady?: () => void;
        }) => void;
      };
    };
  }
}