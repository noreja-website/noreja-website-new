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
import { useHubSpotForm } from "@/hooks/use-hubspot-form";

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
  const [isDownloading, setIsDownloading] = useState(false);
  const { toast } = useToast();

  // Use refs to avoid dependency issues with hook callbacks
  const handleFormSuccessRef = useRef<(() => void) | null>(null);
  const handleDirectDownloadRef = useRef<(() => void) | null>(null);

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

  // Update refs when callbacks change
  useEffect(() => {
    handleDirectDownloadRef.current = handleDirectDownload;
    handleFormSuccessRef.current = handleFormSuccess;
  }, [handleDirectDownload, handleFormSuccess]);

  // Use HubSpot form hook with v2 API
  // The hook automatically creates the form when enabled=true, so we don't need to manually call createForm()
  const {
    formLoaded,
    formError,
    formTargetId,
    destroyForm,
  } = useHubSpotForm({
    portalId: formPortalId,
    formId: formGuid,
    enabled: isModalOpen && requiresForm,
    trackAnalytics: true,
    analyticsSource: "download_page",
    onFormSubmit: () => {
      // Set session flag
      sessionStorage.setItem(DOWNLOAD_SESSION_KEY, "true");
      // Handle form success using ref to avoid dependency issues
      handleFormSuccessRef.current?.();
    },
    onFormReady: () => {
      // Form is ready, no additional action needed
    },
    onFormError: () => {
      toast({
        title: t.downloadGate.error,
        description: t.downloadGate.formLoadError,
        variant: "destructive"
      });
    },
  });

  // Clean up form when modal closes
  useEffect(() => {
    if (!isModalOpen && requiresForm) {
      destroyForm();
    }
  }, [isModalOpen, requiresForm, destroyForm]);

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
                
                {/* Form container - HubSpot form loads asynchronously, no spinner needed */}
                <div id={formTargetId} className="hs-form-frame hubspot-form-container w-full min-h-[200px]"></div>
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
              
              {/* Only show error if form truly failed to load (check DOM) */}
              {formError && (() => {
                const container = document.getElementById(formTargetId);
                const hasForm = container && container.querySelector('form');
                return !hasForm;
              })() && (
                <div className="text-destructive text-center mb-4">
                  {t.downloadGate.formLoadError}
                </div>
              )}
              
              {/* Form container - HubSpot form loads asynchronously, no spinner needed */}
              <div id={formTargetId} className="hs-form-frame hubspot-form-container w-full min-h-[200px]"></div>
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
  const { toast } = useToast();

  const defaultButtonText = buttonText || t.downloadGate.download;

  // Use refs to avoid dependency issues with hook callbacks
  const handleFormSuccessRef = useRef<(() => void) | null>(null);
  const handleDirectDownloadRef = useRef<(() => void) | null>(null);

  const handleDirectDownload = useCallback(() => {
    setIsDownloading(true);
    triggerDownload(fileUrl, title);
    setTimeout(() => setIsDownloading(false), 2000);
  }, [fileUrl, title]);

  const handleFormSuccess = useCallback(() => {
    setIsModalOpen(false);
    handleDirectDownload();
    onSuccess?.();
    
    toast({
      title: t.downloadGate.success,
      description: t.downloadGate.downloadStarted,
      variant: "default"
    });
  }, [handleDirectDownload, onSuccess, toast, t.downloadGate.success, t.downloadGate.downloadStarted]);

  // Update refs when callbacks change
  useEffect(() => {
    handleDirectDownloadRef.current = handleDirectDownload;
    handleFormSuccessRef.current = handleFormSuccess;
  }, [handleDirectDownload, handleFormSuccess]);

  // Use HubSpot form hook with v2 API
  // The hook automatically creates the form when enabled=true, so we don't need to manually call createForm()
  const {
    formLoaded,
    formError,
    formTargetId,
    destroyForm,
  } = useHubSpotForm({
    portalId: formPortalId,
    formId: formGuid,
    enabled: isModalOpen && requiresForm,
    trackAnalytics: true,
    analyticsSource: "download_page",
    onFormSubmit: () => {
      // Set session flag
      sessionStorage.setItem(DOWNLOAD_SESSION_KEY, "true");
      // Handle form success using ref to avoid dependency issues
      handleFormSuccessRef.current?.();
    },
    onFormError: () => {
      toast({
        title: t.downloadGate.error,
        description: t.downloadGate.formLoadError,
        variant: "destructive"
      });
    },
  });

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
    if (!isModalOpen && requiresForm) {
      destroyForm();
    }
  }, [isModalOpen, requiresForm, destroyForm]);

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
              
              {/* Only show error if form truly failed to load (check DOM) */}
              {formError && (() => {
                const container = document.getElementById(formTargetId);
                const hasForm = container && container.querySelector('form');
                return !hasForm;
              })() && (
                <div className="text-destructive text-center mb-4">
                  {t.downloadGate.formLoadError}
                </div>
              )}
              
              {/* Form container - HubSpot form loads asynchronously, no spinner needed */}
              <div id={formTargetId} className="hs-form-frame hubspot-form-container w-full min-h-[200px]"></div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};
