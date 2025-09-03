import React, { useState, useEffect } from "react";
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
}

interface DownloadGateInlineProps extends Omit<DownloadGateProps, "variant"> {
  buttonText?: string;
  buttonVariant?: "default" | "outline" | "secondary";
}

// Session storage key for tracking form submissions
const DOWNLOAD_SESSION_KEY = "noreja_download_validated";

// Load HubSpot form script dynamically
const loadHubSpotScript = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (window.hbspt) {
      resolve();
      return;
    }

    const script = document.createElement("script");
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.charset = "utf-8";
    script.type = "text/javascript";
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Failed to load HubSpot script"));
    document.head.appendChild(script);
  });
};

// Create HubSpot form
const createHubSpotForm = (
  portalId: string,
  formGuid: string,
  targetId: string,
  onFormSubmit: () => void
) => {
  if (!window.hbspt) {
    console.error("HubSpot script not loaded");
    return;
  }

  window.hbspt.forms.create({
    region: "na1", // TODO: Update with your HubSpot region if different
    portalId,
    formId: formGuid,
    target: `#${targetId}`,
    onFormSubmit: () => {
      // Set session flag
      sessionStorage.setItem(DOWNLOAD_SESSION_KEY, "true");
      onFormSubmit();
    },
    onFormReady: () => {
      console.log("HubSpot form loaded successfully");
    }
  });
};

// Check if user has already validated this session
const isUserValidated = (): boolean => {
  return sessionStorage.getItem(DOWNLOAD_SESSION_KEY) === "true";
};

// Trigger file download
const triggerDownload = (fileUrl: string, fileName?: string) => {
  const link = document.createElement("a");
  link.href = fileUrl;
  link.download = fileName || fileUrl.split("/").pop() || "download";
  link.style.display = "none";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
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
  variant = "default"
}) => {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFormLoading, setIsFormLoading] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const { toast } = useToast();

  const formTargetId = `hubspot-form-${Math.random().toString(36).substr(2, 9)}`;

  const handleDownloadClick = async () => {
    if (isUserValidated()) {
      // User already validated, download directly
      handleDirectDownload();
      return;
    }

    // Show modal with form
    setIsModalOpen(true);
    setIsFormLoading(true);

    try {
      await loadHubSpotScript();
      
      // Small delay to ensure DOM is ready
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
    // Close modal and start download
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
    
    // Reset downloading state after a delay
    setTimeout(() => {
      setIsDownloading(false);
    }, 2000);
  };

  if (variant === "card") {
    return (
      <>
        <Card className={`group hover:shadow-lg transition-all duration-300 border-border/40 hover:border-noreja-main/30 ${className}`}>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <CardTitle className="text-lg font-semibold mb-2 group-hover:text-noreja-main transition-colors">
                  {title}
                </CardTitle>
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
              
              {isFormLoading ? (
                <div className="flex items-center justify-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-noreja-main"></div>
                </div>
              ) : (
                <div id={formTargetId} className="hubspot-form-container"></div>
              )}
              
              {/* TODO: HubSpot Form Integration
                  1. Replace formPortalId and formGuid with your actual HubSpot values
                  2. Update the region in createHubSpotForm if needed (default: "na1")
                  3. Test the form submission and download flow
                  4. Customize form styling in your HubSpot account if needed
              */}
            </div>
          </DialogContent>
        </Dialog>
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
            
            {isFormLoading ? (
              <div className="flex items-center justify-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-noreja-main"></div>
              </div>
            ) : (
              <div id={formTargetId} className="hubspot-form-container"></div>
            )}
          </div>
        </DialogContent>
      </Dialog>
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
  buttonVariant = "outline"
}) => {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFormLoading, setIsFormLoading] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const { toast } = useToast();

  const defaultButtonText = buttonText || t.downloadGate.download;

  const formTargetId = `hubspot-form-inline-${Math.random().toString(36).substr(2, 9)}`;

  const handleDownloadClick = async () => {
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
              <div id={formTargetId} className="hubspot-form-container"></div>
            )}
          </div>
        </DialogContent>
      </Dialog>
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