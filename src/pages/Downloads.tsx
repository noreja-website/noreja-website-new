import { motion } from "framer-motion";
import { FolderDown, Filter } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DownloadGate } from "@/components/DownloadGate";
import { downloadAssets } from "@/lib/downloads";
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Downloads() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Get unique categories
  const categories = ["All", ...Array.from(new Set(downloadAssets.map(asset => asset.category)))];
  
  // Filter assets based on selected category
  const filteredAssets = selectedCategory === "All" 
    ? downloadAssets 
    : downloadAssets.filter(asset => asset.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-24">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-foreground">
              {t.downloads.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t.downloads.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-8">
        <div className="w-full max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8"
          >
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-noreja-main" />
              <span className="font-semibold text-foreground">{t.downloads.filterByCategory}</span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category 
                    ? "bg-noreja-main hover:bg-noreja-main/90 text-white" 
                    : "border-noreja-main/30 hover:bg-noreja-main/10"
                  }
                >
                  {category}
                  {category !== "All" && (
                    <Badge variant="secondary" className="ml-2 text-xs">
                      {downloadAssets.filter(asset => asset.category === category).length}
                    </Badge>
                  )}
                </Button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Downloads Grid */}
      <section className="pb-20">
        <div className="w-full max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-2">
              <FolderDown className="w-6 h-6 text-noreja-main" />
              <h2 className="text-2xl font-bold text-foreground">
                {t.downloads.availableDownloads}
              </h2>
              <Badge variant="outline" className="text-noreja-main border-noreja-main/30">
                {filteredAssets.length} {filteredAssets.length === 1 ? t.downloads.resource : t.downloads.resources}
              </Badge>
            </div>
            <p className="text-muted-foreground">
              {t.downloads.clickToDownload}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAssets.map((asset, index) => (
              <motion.div
                key={asset.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <DownloadGate
                  title={asset.title}
                  description={asset.description}
                  fileUrl={asset.fileUrl}
                  fileSize={asset.fileSize}
                  fileType={asset.fileType}
                  formGuid={asset.formGuid} // Use asset-specific form if provided
                  variant="card"
                  onSuccess={() => {
                    console.log(`Downloaded: ${asset.title}`);
                  }}
                />
              </motion.div>
            ))}
          </div>

          {filteredAssets.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center py-16"
            >
              <FolderDown className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-muted-foreground mb-2">
                {t.downloads.noResourcesFound}
              </h3>
              <p className="text-muted-foreground">
                {t.downloads.noResourcesDescription}
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Help Section */}
      <section className="bg-muted/30 py-16">
        <div className="w-full max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              {t.downloads.needAdditionalResources}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t.downloads.needAdditionalDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-noreja-main hover:bg-noreja-main/90 text-white px-8"
              >
                {t.downloads.contactSupport}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-noreja-main/30 hover:bg-noreja-main/10 px-8"
              >
                {t.downloads.requestCustomResource}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}