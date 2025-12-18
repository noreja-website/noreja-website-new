import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Download, FileText, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";

const PENDING_DOWNLOAD_KEY = "pendingDownload";

interface PendingDownload {
  fileUrl: string;
  title: string;
  id?: string;
  timestamp: number;
}

// Trigger download
const triggerDownload = (fileUrl: string, fileName?: string) => {
  window.open(fileUrl, '_blank');
};

export default function DownloadThankYou() {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const [downloadInfo, setDownloadInfo] = useState<PendingDownload | null>(null);
  const [downloadTriggered, setDownloadTriggered] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    // Check localStorage for pending download
    try {
      const pendingDownloadStr = localStorage.getItem(PENDING_DOWNLOAD_KEY);
      if (pendingDownloadStr) {
        const pendingDownload: PendingDownload = JSON.parse(pendingDownloadStr);
        setDownloadInfo(pendingDownload);

        // Trigger download
        triggerDownload(pendingDownload.fileUrl, pendingDownload.title);
        setDownloadTriggered(true);

        // Clear localStorage after a short delay to ensure download started
        setTimeout(() => {
          localStorage.removeItem(PENDING_DOWNLOAD_KEY);
        }, 1000);
      } else {
        setError("No pending download found");
      }
    } catch (err) {
      console.error("Error reading pending download:", err);
      setError("Error processing download");
    }
  }, []);

  const gradientStyle = {
    background: `
      linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--noreja-main) / 0.16) 40%, hsl(var(--noreja-secondary) / 0.15) 80%, hsl(var(--background)) 100%),
      radial-gradient(ellipse 1000px 700px at 70% 20%, hsl(var(--noreja-secondary) / 0.14) 0%, transparent 60%)
    `
  } as const;

  return (
    <div className="min-h-screen relative overflow-hidden" style={gradientStyle}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-noreja-main/5 to-transparent pointer-events-none" />
      
      <div className="relative z-10">
        <section className="relative py-20 lg:py-24">
          <div className="relative z-10 w-full max-w-3xl mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <Card className="border-noreja-main/30 shadow-lg">
                <CardHeader className="text-center pb-4">
                  {downloadTriggered && downloadInfo ? (
                    <>
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", duration: 0.6 }}
                        className="mx-auto mb-4 w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center"
                      >
                        <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
                      </motion.div>
                      <CardTitle className="text-3xl font-bold mb-2">
                        {language === "de" ? "Vielen Dank!" : "Thank You!"}
                      </CardTitle>
                      <CardDescription className="text-lg">
                        {language === "de" 
                          ? "Ihr Download wurde gestartet." 
                          : "Your download has started."}
                      </CardDescription>
                    </>
                  ) : error ? (
                    <>
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", duration: 0.6 }}
                        className="mx-auto mb-4 w-16 h-16 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center"
                      >
                        <AlertCircle className="w-10 h-10 text-yellow-600 dark:text-yellow-400" />
                      </motion.div>
                      <CardTitle className="text-3xl font-bold mb-2">
                        {language === "de" ? "Kein Download gefunden" : "No Download Found"}
                      </CardTitle>
                      <CardDescription className="text-lg">
                        {language === "de"
                          ? "Es wurde kein ausstehender Download gefunden."
                          : "No pending download was found."}
                      </CardDescription>
                    </>
                  ) : (
                    <>
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", duration: 0.6 }}
                        className="mx-auto mb-4 w-16 h-16 rounded-full bg-noreja-main/10 flex items-center justify-center"
                      >
                        <FileText className="w-10 h-10 text-noreja-main" />
                      </motion.div>
                      <CardTitle className="text-3xl font-bold mb-2">
                        {language === "de" ? "Verarbeitung..." : "Processing..."}
                      </CardTitle>
                      <CardDescription className="text-lg">
                        {language === "de"
                          ? "Ihr Download wird vorbereitet."
                          : "Preparing your download."}
                      </CardDescription>
                    </>
                  )}
                </CardHeader>
                <CardContent className="space-y-6">
                  {downloadInfo && (
                    <div className="bg-muted/50 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <FileText className="w-5 h-5 text-noreja-main mt-0.5 flex-shrink-0" />
                        <div className="flex-1 text-left">
                          <p className="font-semibold text-sm text-muted-foreground mb-1">
                            {language === "de" ? "Dokument:" : "Document:"}
                          </p>
                          <p className="text-foreground">{downloadInfo.title}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    {downloadTriggered && downloadInfo && (
                      <Button
                        onClick={() => triggerDownload(downloadInfo.fileUrl, downloadInfo.title)}
                        className="bg-noreja-main hover:bg-noreja-main/90 text-white"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        {language === "de" ? "Erneut herunterladen" : "Download Again"}
                      </Button>
                    )}
                    <Button
                      onClick={() => navigate("/downloads")}
                      variant="outline"
                      className="border-noreja-main/30 hover:bg-noreja-main/10"
                    >
                      {language === "de" ? "Zu Downloads" : "Back to Downloads"}
                    </Button>
                  </div>

                  {downloadTriggered && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="text-center text-sm text-muted-foreground pt-4 border-t"
                    >
                      <p>
                        {language === "de"
                          ? "Falls der Download nicht automatisch gestartet wurde, klicken Sie bitte auf 'Erneut herunterladen'."
                          : "If the download didn't start automatically, please click 'Download Again'."}
                      </p>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}


