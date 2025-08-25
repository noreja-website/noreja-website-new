import { useState } from "react";
import { motion } from "framer-motion";
import { Download, FileText, Lock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface DownloadItem {
  id: string;
  title: string;
  description: string;
  fileSize: string;
  type: string;
  requiresAuth: boolean;
}

const downloadItems: DownloadItem[] = [
  {
    id: "whitepaper",
    title: "Technology Whitepaper",
    description: "Comprehensive overview of our innovative solutions and methodologies",
    fileSize: "2.4 MB",
    type: "PDF",
    requiresAuth: true
  },
  {
    id: "case-study",
    title: "Enterprise Case Studies",
    description: "Real-world implementations and success stories from our enterprise clients",
    fileSize: "5.1 MB", 
    type: "PDF",
    requiresAuth: true
  },
  {
    id: "api-docs",
    title: "API Documentation",
    description: "Complete developer documentation and integration guides",
    fileSize: "1.8 MB",
    type: "PDF",
    requiresAuth: false
  },
  {
    id: "product-sheet",
    title: "Product Data Sheet",
    description: "Technical specifications and feature overview",
    fileSize: "800 KB",
    type: "PDF",
    requiresAuth: false
  }
];

interface DownloadGateProps {
  embedded?: boolean;
}

export function DownloadGate({ embedded = false }: DownloadGateProps) {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [downloadingItems, setDownloadingItems] = useState<Set<string>>(new Set());

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with HubSpot form submission
    console.log("Email submitted:", email);
    setIsSubmitted(true);
  };

  const handleDownload = (item: DownloadItem) => {
    if (item.requiresAuth && !isSubmitted) {
      // Scroll to email form or show modal
      return;
    }

    setDownloadingItems(prev => new Set([...prev, item.id]));
    
    // Simulate download
    setTimeout(() => {
      setDownloadingItems(prev => {
        const newSet = new Set(prev);
        newSet.delete(item.id);
        return newSet;
      });
      // TODO: Trigger actual file download
      console.log(`Downloading ${item.title}`);
    }, 2000);
  };

  return (
    <div className={embedded ? "" : "container mx-auto px-4 lg:px-8 py-12"}>
      {!embedded && (
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Downloads</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Access our comprehensive resources, documentation, and case studies to accelerate your implementation.
          </p>
        </div>
      )}

      {/* Email Gate */}
      {!isSubmitted && (
        <Card className="mb-8 bg-card/50 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Lock className="w-5 h-5 mr-2 text-noreja-tertiary" />
              Unlock Premium Downloads
            </CardTitle>
            <CardDescription>
              Enter your email to access our exclusive whitepapers and case studies
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleEmailSubmit} className="flex gap-4">
              <Input
                type="email"
                placeholder="Enter your business email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1"
                required
              />
              <Button type="submit" className="gradient-primary">
                Get Access
              </Button>
            </form>
            {/* TODO: Replace with HubSpot form embed */}
            {/* <div id="hubspot-form-container"></div> */}
          </CardContent>
        </Card>
      )}

      {/* Downloads Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {downloadItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
          >
            <Card className="h-full bg-card/50 border-border/40 hover:border-primary/30 transition-all">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center">
                    <FileText className="w-8 h-8 text-noreja-secondary mr-3" />
                    <div>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground mt-1">
                        <span>{item.type}</span>
                        <span>•</span>
                        <span>{item.fileSize}</span>
                      </div>
                    </div>
                  </div>
                  {item.requiresAuth && !isSubmitted && (
                    <Lock className="w-4 h-4 text-muted-foreground" />
                  )}
                  {isSubmitted && item.requiresAuth && (
                    <CheckCircle className="w-4 h-4 text-noreja-tertiary" />
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{item.description}</p>
                <Button
                  onClick={() => handleDownload(item)}
                  disabled={downloadingItems.has(item.id) || (item.requiresAuth && !isSubmitted)}
                  className="w-full"
                  variant={item.requiresAuth && !isSubmitted ? "outline" : "default"}
                >
                  {downloadingItems.has(item.id) ? (
                    "Downloading..."
                  ) : item.requiresAuth && !isSubmitted ? (
                    <>
                      <Lock className="w-4 h-4 mr-2" />
                      Requires Access
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}