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

// HubSpot form script URL - use iframe embed
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
  // Check if script already exists
  const existingScript = document.querySelector<HTMLScriptElement>(
    `script[src="${HUBSPOT_FORM_SCRIPT}"]`
  );
  if (existingScript) {
    // Script exists, wait a bit for it to be ready, then resolve
    return new Promise<void>((resolve) => {
      // Give a small delay to ensure script is ready
      setTimeout(() => resolve(), 100);
    });
  }

  // Create new promise if script doesn't exist
  if (!scriptLoadPromise) {
    scriptLoadPromise = new Promise<void>((resolve, reject) => {
      const script = document.createElement("script");
      script.src = HUBSPOT_FORM_SCRIPT;
      script.async = true;
      script.defer = true;
      script.onload = () => {
        // Give script time to initialize after load
        setTimeout(() => resolve(), 100);
      };
      script.onerror = () => reject(new Error("Failed to load HubSpot form script"));
      document.head.appendChild(script);
    });
  }

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

    // Create form div with iframe embed attributes using innerHTML
    // This ensures proper DOM structure for HubSpot to detect
    container.innerHTML = `<div class="hs-form-frame" data-region="${HUBSPOT_FORM_REGION}" data-form-id="${formGuid || HUBSPOT_FORM_ID}" data-portal-id="${formPortalId || HUBSPOT_PORTAL_ID}"></div>`;

    // Load script - it will scan DOM and find the form div we just created
    loadHubSpotFormScript()
      .then(() => {
        setFormError(false);

        // Check if script was already loaded - if so, we might need to trigger re-scan
        const scriptAlreadyLoaded = document.querySelector(`script[src="${HUBSPOT_FORM_SCRIPT}"]`);
        
        // Give the script time to initialize the form
        // HubSpot creates an iframe inside the .hs-form-frame div
        setTimeout(() => {
          const hasIframe = container.querySelector('.hs-form-frame iframe');
          const hasFormContent = container.querySelector('.hs-form-frame')?.children.length > 0;
          
          if (!hasIframe && !hasFormContent && scriptAlreadyLoaded) {
            // Script was already loaded, try to trigger re-initialization
            // by removing and re-adding the form div
            const formDiv = container.querySelector('.hs-form-frame');
            if (formDiv) {
              const clone = formDiv.cloneNode(true);
              formDiv.remove();
              container.appendChild(clone);
            }
            
            // Check again after re-adding
            setTimeout(() => {
              const stillNoForm = !container.querySelector('.hs-form-frame iframe') && 
                                  !container.querySelector('.hs-form-frame')?.children.length;
              if (stillNoForm) {
                console.warn("HubSpot form did not load after re-initialization attempt");
                setFormError(true);
              }
            }, 1500);
          } else if (!hasIframe && !hasFormContent) {
            // Script just loaded, give it more time
            setTimeout(() => {
              const stillNoForm = !container.querySelector('.hs-form-frame iframe') && 
                                  !container.querySelector('.hs-form-frame')?.children.length;
              if (stillNoForm) {
                console.warn("HubSpot form did not load");
                setFormError(true);
              }
            }, 2000);
          }
        }, 500);
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
                
                {/* Form container - HubSpot form loads via iframe embed */}
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
              
              {/* Form container - HubSpot form loads via iframe embed */}
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

    // Create form div with iframe embed attributes using innerHTML
    // This ensures proper DOM structure for HubSpot to detect
    container.innerHTML = `<div class="hs-form-frame" data-region="${HUBSPOT_FORM_REGION}" data-form-id="${formGuid || HUBSPOT_FORM_ID}" data-portal-id="${formPortalId || HUBSPOT_PORTAL_ID}"></div>`;

    // Load script - it will scan DOM and find the form div we just created
    loadHubSpotFormScript()
      .then(() => {
        setFormError(false);

        // Check if script was already loaded - if so, we might need to trigger re-scan
        const scriptAlreadyLoaded = document.querySelector(`script[src="${HUBSPOT_FORM_SCRIPT}"]`);
        
        // Give the script time to initialize the form
        // HubSpot creates an iframe inside the .hs-form-frame div
        setTimeout(() => {
          const hasIframe = container.querySelector('.hs-form-frame iframe');
          const hasFormContent = container.querySelector('.hs-form-frame')?.children.length > 0;
          
          if (!hasIframe && !hasFormContent && scriptAlreadyLoaded) {
            // Script was already loaded, try to trigger re-initialization
            // by removing and re-adding the form div
            const formDiv = container.querySelector('.hs-form-frame');
            if (formDiv) {
              const clone = formDiv.cloneNode(true);
              formDiv.remove();
              container.appendChild(clone);
            }
            
            // Check again after re-adding
            setTimeout(() => {
              const stillNoForm = !container.querySelector('.hs-form-frame iframe') && 
                                  !container.querySelector('.hs-form-frame')?.children.length;
              if (stillNoForm) {
                console.warn("HubSpot form did not load after re-initialization attempt");
                setFormError(true);
              }
            }, 1500);
          } else if (!hasIframe && !hasFormContent) {
            // Script just loaded, give it more time
            setTimeout(() => {
              const stillNoForm = !container.querySelector('.hs-form-frame iframe') && 
                                  !container.querySelector('.hs-form-frame')?.children.length;
              if (stillNoForm) {
                console.warn("HubSpot form did not load");
                setFormError(true);
              }
            }, 2000);
          }
        }, 500);
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
