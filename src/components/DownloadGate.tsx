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
// LocalStorage key for pending downloads (persists across redirect)
const PENDING_DOWNLOAD_KEY = "pendingDownload";

// HubSpot form script URL
const HUBSPOT_FORM_SCRIPT = "https://js-eu1.hsforms.net/forms/embed/144242473.js";
const HUBSPOT_FORM_REGION = "eu1";
const HUBSPOT_PORTAL_ID = "144242473";
const HUBSPOT_FORM_ID = "cba179f6-530c-43a4-9d41-4bc0a459953b";

// Check if user has already validated this session
const isUserValidated = (): boolean => {
  return sessionStorage.getItem(DOWNLOAD_SESSION_KEY) === "true";
};

// Open file in new tab
const triggerDownload = (fileUrl: string, fileName?: string) => {
  window.open(fileUrl, '_blank');
};

// Save document info to localStorage before form submission
const savePendingDownload = (fileUrl: string, title: string, id?: string) => {
  const downloadInfo = {
    fileUrl,
    title,
    id,
    timestamp: Date.now()
  };
  localStorage.setItem(PENDING_DOWNLOAD_KEY, JSON.stringify(downloadInfo));
};

// Load HubSpot form script globally (only once)
let scriptLoadPromise: Promise<void> | null = null;
const loadHubSpotFormScript = (): Promise<void> => {
  if (scriptLoadPromise) {
    return scriptLoadPromise;
  }

  // Check if script already exists
  const existingScript = document.querySelector<HTMLScriptElement>(
    `script[src="${HUBSPOT_FORM_SCRIPT}"]`
  );
  if (existingScript) {
    scriptLoadPromise = Promise.resolve();
    return scriptLoadPromise;
  }

  scriptLoadPromise = new Promise<void>((resolve, reject) => {
    const script = document.createElement("script");
    script.src = HUBSPOT_FORM_SCRIPT;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Failed to load HubSpot form script"));
    document.head.appendChild(script);
  });

  return scriptLoadPromise;
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
  const [isDownloading, setIsDownloading] = useState(false);
  const [formError, setFormError] = useState(false);
  const { toast } = useToast();
  const formContainerRef = useRef<HTMLDivElement>(null);

  const handleDirectDownload = useCallback(() => {
    setIsDownloading(true);
    triggerDownload(fileUrl, title);
    
    // Reset downloading state after a delay
    setTimeout(() => {
      setIsDownloading(false);
    }, 2000);
  }, [fileUrl, title]);

  // Load HubSpot form script and initialize form when modal opens
  useEffect(() => {
    if (!isModalOpen || !requiresForm || !formContainerRef.current) {
      return;
    }

    // Save document info to localStorage before form loads
    savePendingDownload(fileUrl, title);

    const container = formContainerRef.current;
    
    // Clear any existing content
    container.innerHTML = "";

    // Create form container with data attributes - this must exist before script loads
    const formDiv = document.createElement("div");
    formDiv.className = "hs-form-frame";
    formDiv.setAttribute("data-region", HUBSPOT_FORM_REGION);
    formDiv.setAttribute("data-form-id", formGuid || HUBSPOT_FORM_ID);
    formDiv.setAttribute("data-portal-id", formPortalId || HUBSPOT_PORTAL_ID);
    
    container.appendChild(formDiv);

    // Load script - it will automatically find and initialize the form
    loadHubSpotFormScript()
      .then(() => {
        setFormError(false);

        // Set up form submission watcher to detect when form is submitted
        // This allows us to ensure localStorage is saved before redirect
        const observer = new MutationObserver(() => {
          const form = container.querySelector('form');
          if (form) {
            // Attach submit listener to form
            const handleSubmit = (e: Event) => {
              // Ensure localStorage is saved (in case it wasn't already)
              savePendingDownload(fileUrl, title);
              // Set session flag
              sessionStorage.setItem(DOWNLOAD_SESSION_KEY, "true");
            };
            
            form.addEventListener('submit', handleSubmit, { once: true });
            
            // Also watch for form submission via button clicks
            const submitButton = form.querySelector('input[type="submit"], button[type="submit"]');
            if (submitButton) {
              submitButton.addEventListener('click', () => {
                savePendingDownload(fileUrl, title);
                sessionStorage.setItem(DOWNLOAD_SESSION_KEY, "true");
              }, { once: true });
            }
          }
        });

        observer.observe(container, {
          childList: true,
          subtree: true
        });

        // Cleanup observer after form loads or timeout
        setTimeout(() => {
          observer.disconnect();
        }, 10000);

        // Check if form loaded successfully after a delay
        setTimeout(() => {
          const hasForm = container.querySelector('form');
          if (!hasForm) {
            setFormError(true);
          }
        }, 3000);
      })
      .catch((error) => {
        console.error("Error loading HubSpot form:", error);
        setFormError(true);
        toast({
          title: t.downloadGate.error,
          description: t.downloadGate.formLoadError,
          variant: "destructive"
        });
      });
  }, [isModalOpen, requiresForm, fileUrl, title, formGuid, formPortalId, toast, t.downloadGate.error, t.downloadGate.formLoadError]);

  // Clean up form when modal closes
  useEffect(() => {
    if (!isModalOpen && formContainerRef.current) {
      formContainerRef.current.innerHTML = "";
    }
  }, [isModalOpen]);

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
                
                {/* Only show error if form truly failed to load */}
                {formError && (
                  <div className="text-destructive text-center mb-4">
                    {t.downloadGate.formLoadError}
                  </div>
                )}
                
                {/* Form container - HubSpot form loads asynchronously via data attributes */}
                <div ref={formContainerRef} className="hubspot-form-container w-full min-h-[200px]"></div>
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
              
              {/* Only show error if form truly failed to load */}
              {formError && (
                <div className="text-destructive text-center mb-4">
                  {t.downloadGate.formLoadError}
                </div>
              )}
              
              {/* Form container - HubSpot form loads asynchronously via data attributes */}
              <div ref={formContainerRef} className="hubspot-form-container w-full min-h-[200px]"></div>
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
  const [isDownloading, setIsDownloading] = useState(false);
  const [formError, setFormError] = useState(false);
  const { toast } = useToast();
  const formContainerRef = useRef<HTMLDivElement>(null);

  const defaultButtonText = buttonText || t.downloadGate.download;

  const handleDirectDownload = useCallback(() => {
    setIsDownloading(true);
    triggerDownload(fileUrl, title);
    setTimeout(() => setIsDownloading(false), 2000);
  }, [fileUrl, title]);

  // Load HubSpot form script and initialize form when modal opens
  useEffect(() => {
    if (!isModalOpen || !requiresForm || !formContainerRef.current) {
      return;
    }

    // Save document info to localStorage before form loads
    savePendingDownload(fileUrl, title);

    const container = formContainerRef.current;
    
    // Clear any existing content
    container.innerHTML = "";

    // Create form container with data attributes - this must exist before script loads
    const formDiv = document.createElement("div");
    formDiv.className = "hs-form-frame";
    formDiv.setAttribute("data-region", HUBSPOT_FORM_REGION);
    formDiv.setAttribute("data-form-id", formGuid || HUBSPOT_FORM_ID);
    formDiv.setAttribute("data-portal-id", formPortalId || HUBSPOT_PORTAL_ID);
    
    container.appendChild(formDiv);

    // Load script - it will automatically find and initialize the form
    loadHubSpotFormScript()
      .then(() => {
        setFormError(false);

        // Set up form submission watcher to detect when form is submitted
        const observer = new MutationObserver(() => {
          const form = container.querySelector('form');
          if (form) {
            // Attach submit listener to form
            const handleSubmit = (e: Event) => {
              // Ensure localStorage is saved (in case it wasn't already)
              savePendingDownload(fileUrl, title);
              // Set session flag
              sessionStorage.setItem(DOWNLOAD_SESSION_KEY, "true");
            };
            
            form.addEventListener('submit', handleSubmit, { once: true });
            
            // Also watch for form submission via button clicks
            const submitButton = form.querySelector('input[type="submit"], button[type="submit"]');
            if (submitButton) {
              submitButton.addEventListener('click', () => {
                savePendingDownload(fileUrl, title);
                sessionStorage.setItem(DOWNLOAD_SESSION_KEY, "true");
              }, { once: true });
            }
          }
        });

        observer.observe(container, {
          childList: true,
          subtree: true
        });

        // Cleanup observer after form loads or timeout
        setTimeout(() => {
          observer.disconnect();
        }, 10000);

        // Check if form loaded successfully after a delay
        setTimeout(() => {
          const hasForm = container.querySelector('form');
          if (!hasForm) {
            setFormError(true);
          }
        }, 3000);
      })
      .catch((error) => {
        console.error("Error loading HubSpot form:", error);
        setFormError(true);
        toast({
          title: t.downloadGate.error,
          description: t.downloadGate.formLoadError,
          variant: "destructive"
        });
      });
  }, [isModalOpen, requiresForm, fileUrl, title, formGuid, formPortalId, toast, t.downloadGate.error, t.downloadGate.formLoadError]);

  const handleDownloadClick = () => {
    if (!requiresForm) {
      handleDirectDownload();
      return;
    }

    if (isUserValidated()) {
      handleDirectDownload();
      return;
    }

    setIsModalOpen(true);
  };

  // Clean up form when modal closes
  useEffect(() => {
    if (!isModalOpen && formContainerRef.current) {
      formContainerRef.current.innerHTML = "";
    }
  }, [isModalOpen]);

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
              
              {/* Only show error if form truly failed to load */}
              {formError && (
                <div className="text-destructive text-center mb-4">
                  {t.downloadGate.formLoadError}
                </div>
              )}
              
              {/* Form container - HubSpot form loads asynchronously via data attributes */}
              <div ref={formContainerRef} className="hubspot-form-container w-full min-h-[200px]"></div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};
