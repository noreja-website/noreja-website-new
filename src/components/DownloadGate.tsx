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

// HubSpot form script URL - use v2 API
const HUBSPOT_FORM_SCRIPT = "https://js-eu1.hsforms.net/forms/embed/v2.js";
const HUBSPOT_FORM_REGION = "eu1";
const HUBSPOT_PORTAL_ID = "144242473";
const HUBSPOT_FORM_ID = "cba179f6-530c-43a4-9d41-4bc0a459953b";

// TypeScript declaration for HubSpot API
declare global {
  interface Window {
    hbspt?: {
      forms?: {
        create?: (config: {
          region: string;
          portalId: string;
          formId: string;
          target: string;
          onFormReady?: () => void;
          onFormSubmit?: () => void;
          onFormError?: (error?: unknown) => void;
        }) => void;
      };
    };
  }
}

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

  // Check if API is already available
  const hbspt = window.hbspt;
  if (hbspt?.forms?.create) {
    scriptLoadPromise = Promise.resolve();
    return scriptLoadPromise;
  }

  // Check if script already exists
  const existingScript = document.querySelector<HTMLScriptElement>(
    `script[src="${HUBSPOT_FORM_SCRIPT}"]`
  );
  if (existingScript) {
    // Script exists, wait for API to be available
    scriptLoadPromise = new Promise<void>((resolve, reject) => {
      const checkInterval = setInterval(() => {
        const hbspt = window.hbspt;
        if (hbspt?.forms?.create) {
          clearInterval(checkInterval);
          resolve();
        }
      }, 100);
      
      setTimeout(() => {
        clearInterval(checkInterval);
        const hbspt = window.hbspt;
        if (hbspt?.forms?.create) {
          resolve();
        } else {
          reject(new Error("HubSpot script loaded but API not available"));
        }
      }, 10000);
    });
    return scriptLoadPromise;
  }

  scriptLoadPromise = new Promise<void>((resolve, reject) => {
    const script = document.createElement("script");
    script.src = HUBSPOT_FORM_SCRIPT;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      // Wait for API to be available after script loads
      const checkInterval = setInterval(() => {
        const hbspt = window.hbspt;
        if (hbspt?.forms?.create) {
          clearInterval(checkInterval);
          resolve();
        }
      }, 100);
      
      setTimeout(() => {
        clearInterval(checkInterval);
        const hbspt = window.hbspt;
        if (hbspt?.forms?.create) {
          resolve();
        } else {
          reject(new Error("HubSpot script loaded but API not available"));
        }
      }, 10000);
    };
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
  const formContainerIdRef = useRef<string>(`hubspot-form-${Math.random().toString(36).slice(2, 10)}`);

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
    const formContainerId = formContainerIdRef.current;
    
    // Set ID on container if not already set
    if (!container.id) {
      container.id = formContainerId;
    }
    
    // Clear any existing content
    container.innerHTML = "";

    // Load script and create form using v2 API
    loadHubSpotFormScript()
      .then(() => {
        const hbspt = window.hbspt;
        if (!hbspt?.forms?.create) {
          throw new Error("HubSpot forms API not available");
        }

        setFormError(false);

        // Create form using v2 API
        hbspt.forms.create({
          region: HUBSPOT_FORM_REGION,
          portalId: formPortalId || HUBSPOT_PORTAL_ID,
          formId: formGuid || HUBSPOT_FORM_ID,
          target: `#${formContainerId}`,
          onFormReady: () => {
            setFormError(false);
            
            // Set up form submission watcher
            const form = container.querySelector('form');
            if (form) {
              const handleSubmit = (e: Event) => {
                savePendingDownload(fileUrl, title);
                sessionStorage.setItem(DOWNLOAD_SESSION_KEY, "true");
              };
              
              form.addEventListener('submit', handleSubmit, { once: true });
              
              const submitButton = form.querySelector('input[type="submit"], button[type="submit"]');
              if (submitButton) {
                submitButton.addEventListener('click', () => {
                  savePendingDownload(fileUrl, title);
                  sessionStorage.setItem(DOWNLOAD_SESSION_KEY, "true");
                }, { once: true });
              }
            }
          },
          onFormSubmit: () => {
            savePendingDownload(fileUrl, title);
            sessionStorage.setItem(DOWNLOAD_SESSION_KEY, "true");
          },
          onFormError: (error?: unknown) => {
            console.error("HubSpot form error:", error);
            setFormError(true);
            toast({
              title: t.downloadGate.error,
              description: t.downloadGate.formLoadError,
              variant: "destructive"
            });
          }
        });

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
                
                {/* Form container - HubSpot form loads via v2 API */}
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
              
              {/* Form container - HubSpot form loads via v2 API */}
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
  const formContainerIdRef = useRef<string>(`hubspot-form-${Math.random().toString(36).slice(2, 10)}`);

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
    const formContainerId = formContainerIdRef.current;
    
    // Set ID on container if not already set
    if (!container.id) {
      container.id = formContainerId;
    }
    
    // Clear any existing content
    container.innerHTML = "";

    // Load script and create form using v2 API
    loadHubSpotFormScript()
      .then(() => {
        const hbspt = window.hbspt;
        if (!hbspt?.forms?.create) {
          throw new Error("HubSpot forms API not available");
        }

        setFormError(false);

        // Create form using v2 API
        hbspt.forms.create({
          region: HUBSPOT_FORM_REGION,
          portalId: formPortalId || HUBSPOT_PORTAL_ID,
          formId: formGuid || HUBSPOT_FORM_ID,
          target: `#${formContainerId}`,
          onFormReady: () => {
            setFormError(false);
            
            // Set up form submission watcher
            const form = container.querySelector('form');
            if (form) {
              const handleSubmit = (e: Event) => {
                savePendingDownload(fileUrl, title);
                sessionStorage.setItem(DOWNLOAD_SESSION_KEY, "true");
              };
              
              form.addEventListener('submit', handleSubmit, { once: true });
              
              const submitButton = form.querySelector('input[type="submit"], button[type="submit"]');
              if (submitButton) {
                submitButton.addEventListener('click', () => {
                  savePendingDownload(fileUrl, title);
                  sessionStorage.setItem(DOWNLOAD_SESSION_KEY, "true");
                }, { once: true });
              }
            }
          },
          onFormSubmit: () => {
            savePendingDownload(fileUrl, title);
            sessionStorage.setItem(DOWNLOAD_SESSION_KEY, "true");
          },
          onFormError: (error?: unknown) => {
            console.error("HubSpot form error:", error);
            setFormError(true);
            toast({
              title: t.downloadGate.error,
              description: t.downloadGate.formLoadError,
              variant: "destructive"
            });
          }
        });

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
              
              {/* Form container - HubSpot form loads via v2 API */}
              <div ref={formContainerRef} className="hubspot-form-container w-full min-h-[200px]"></div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};
