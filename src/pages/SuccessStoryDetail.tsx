import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Download } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { useEffect, useMemo } from "react";
import { successStories, type SuccessStoryDetailItem } from "@/lib/successStories";
import { downloadAssets, type DownloadAsset } from "@/lib/downloads";
import { DownloadGate } from "@/components/DownloadGate";
import { ArrowRight } from "lucide-react";

// Helper function to format text with markdown and HTML support
const formatContent = (text: string): string => {
  if (!text) return '';
  
  // Convert markdown bold (**text**) to HTML
  let formatted = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  
  // Preserve line breaks
  formatted = formatted.replace(/\n/g, '<br />');
  
  return formatted;
};

// Helper function to get image container classes based on size
const getImageContainerClasses = (size?: "s" | "m" | "l"): string => {
  switch (size) {
    case "s":
      return "w-full max-w-md mx-auto";
    case "l":
      return "w-full max-w-4xl mx-auto";
    case "m":
    default:
      return "w-full max-w-2xl mx-auto";
  }
};

// Reusable function to render detail/next steps items
const renderDetailItem = (
  item: SuccessStoryDetailItem,
  index: number,
  sectionTitle: string
) => {
  // If item has a number, render in numbered format
  if (item.number) {
    return (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="space-y-4"
      >
        <div className="flex items-baseline gap-3">
          <span className="text-5xl lg:text-6xl font-bold text-foreground">
            {item.number}
          </span>
          <span className="text-5xl lg:text-6xl font-bold text-foreground">x</span>
        </div>
        {item.title && (
          <h3 className="text-xl lg:text-2xl font-semibold text-foreground">
            {item.title}
          </h3>
        )}
        <p 
          className="text-base lg:text-lg leading-relaxed text-muted-foreground"
          dangerouslySetInnerHTML={{ __html: formatContent(item.content) }}
        />
      </motion.div>
    );
  }
  
  // Format with optional image
  const isImageLeft = index % 2 === 0;
  const gridCols = isImageLeft 
    ? "lg:grid-cols-[1.2fr_1fr]" 
    : "lg:grid-cols-[1fr_1.2fr]";
  
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`grid ${item.imagePath ? gridCols : "grid-cols-1"} gap-8 lg:gap-12 items-start`}
    >
      {/* Image Section */}
      {item.imagePath && (
        <motion.div
          className={`${isImageLeft ? "lg:order-1" : "lg:order-2"}`}
          initial={{ opacity: 0, x: isImageLeft ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className={`relative ${getImageContainerClasses(item.imageSize)} rounded-2xl overflow-hidden border border-border/50 shadow-lg`}
          >
            <img
              src={item.imagePath}
              alt={sectionTitle}
              className="w-full h-auto object-contain"
              loading="lazy"
            />
          </motion.div>
        </motion.div>
      )}

      {/* Text Content Section */}
      <motion.div
        className={`${item.imagePath ? (isImageLeft ? "lg:order-2" : "lg:order-1") : ""} space-y-4`}
        initial={{ opacity: 0, x: item.imagePath ? (isImageLeft ? 50 : -50) : 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {item.title && (
          <h3 className="text-xl lg:text-2xl font-semibold text-foreground">
            {item.title}
          </h3>
        )}
        <p 
          className="text-base lg:text-lg leading-relaxed text-muted-foreground"
          dangerouslySetInnerHTML={{ __html: formatContent(item.content) }}
        />
      </motion.div>
    </motion.div>
  );
};

const SuccessStoryDetail = () => {
  const { companyName } = useParams<{ companyName: string }>();
  const { t, language } = useLanguage();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Find success story by id (companyName in URL)
  const successStory = useMemo(() => {
    if (!companyName) return null;
    return successStories.find(story => story.id.toLowerCase() === companyName.toLowerCase());
  }, [companyName]);

  // Find download asset based on downloadAssetId and current language
  const downloadAsset = useMemo<DownloadAsset | null>(() => {
    if (!successStory) return null;
    
    const assetId = `${successStory.downloadAssetId}-${language === 'de' ? 'de' : 'en'}`;
    return downloadAssets.find(asset => asset.id === assetId) || null;
  }, [successStory, language]);

  if (!successStory) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold mb-4">Success Story Not Found</h1>
          <p className="text-muted-foreground">
            {companyName ? `Success story for "${companyName}" not found.` : "No company name provided."}
          </p>
          <Link to="/success-stories">
            <Button>Back to Success Stories</Button>
          </Link>
        </div>
      </div>
    );
  }

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
        {/* Hero Section */}
        <section className="relative py-20 lg:py-24">
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <Link to="/success-stories">
                <Button variant="ghost" className="mb-6">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  {t.pages.successStories?.backButton || "Back to Success Stories"}
                </Button>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center mb-16"
            >
              {successStory.logoUrl && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mb-8 flex justify-center"
                >
                  <img
                    src={successStory.logoUrl}
                    alt={successStory.companyName}
                    className="h-16 lg:h-20 w-auto object-contain"
                  />
                </motion.div>
              )}
              <AnimatedHeading 
                fixedText={successStory.companyName}
                rotatingWords={[]}
                size="md"
                className="text-foreground mb-6"
              />
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {successStory.subtitle[language]}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="pb-20">
          <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
            <div className="space-y-32 lg:space-y-40">
              {/* Section 1: Wer ist [Company] */}
              <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="scroll-mt-24"
              >
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-6">
                    {successStory.whoIsSection[language].title}
                    {successStory.whoIsSection[language].highlight && (
                      <>
                        {" "}
                        <span className="bg-gradient-primary bg-clip-text text-transparent">
                          {successStory.whoIsSection[language].highlight}
                        </span>
                      </>
                    )}
                  </h2>
                  <p 
                    className="text-base lg:text-lg leading-relaxed text-muted-foreground"
                    dangerouslySetInnerHTML={{ __html: formatContent(successStory.whoIsSection[language].content) }}
                  />
                </div>
              </motion.section>

              {/* Section 2: Wo waren die Blind Spots */}
              <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="scroll-mt-24"
              >
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-6">
                    {successStory.blindSpotsSection[language].title}
                    {successStory.blindSpotsSection[language].highlight && (
                      <>
                        {" "}
                        <span className="bg-gradient-primary bg-clip-text text-transparent">
                          {successStory.blindSpotsSection[language].highlight}
                        </span>
                      </>
                    )}
                  </h2>
                  <p 
                    className="text-base lg:text-lg leading-relaxed text-muted-foreground"
                    dangerouslySetInnerHTML={{ __html: formatContent(successStory.blindSpotsSection[language].content) }}
                  />
                </div>
              </motion.section>

              {/* Section 3: Was haben wir gefunden */}
              <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="scroll-mt-24 min-h-[600px]"
              >
                <div className="max-w-6xl mx-auto">
                  <h2 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-12 text-center">
                    {successStory.findingsSection[language].title}
                    {successStory.findingsSection[language].highlight && (
                      <>
                        {" "}
                        <span className="bg-gradient-primary bg-clip-text text-transparent">
                          {successStory.findingsSection[language].highlight}
                        </span>
                      </>
                    )}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    {successStory.findingsSection[language].findings.map((finding, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="space-y-4"
                      >
                        <h3 className="text-xl lg:text-2xl font-semibold text-foreground">
                          {finding.title}
                        </h3>
                        <p 
                          className="text-base lg:text-lg leading-relaxed text-muted-foreground"
                          dangerouslySetInnerHTML={{ __html: formatContent(finding.content) }}
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.section>

              {/* Section 4: Im Detail */}
              <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="scroll-mt-24 min-h-[600px]"
              >
                <div className="max-w-6xl mx-auto">
                  <h2 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-12 text-center">
                    {successStory.detailSection[language].title}
                    {successStory.detailSection[language].highlight && (
                      <>
                        {" "}
                        <span className="bg-gradient-primary bg-clip-text text-transparent">
                          {successStory.detailSection[language].highlight}
                        </span>
                      </>
                    )}
                  </h2>
                  <div className="space-y-12 overflow-visible">
                    {successStory.detailSection[language].items.map((item, index) => 
                      renderDetailItem(item, index, successStory.detailSection[language].title)
                    )}
                  </div>
                </div>
              </motion.section>

              {/* Section 5: Nächste Schritte */}
              <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="scroll-mt-24"
              >
                <div className="max-w-6xl mx-auto">
                  <h2 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-12 text-center">
                    {successStory.nextStepsSection[language].title}
                    {successStory.nextStepsSection[language].highlight && (
                      <>
                        {" "}
                        <span className="bg-gradient-primary bg-clip-text text-transparent">
                          {successStory.nextStepsSection[language].highlight}
                        </span>
                      </>
                    )}
                  </h2>
                  
                  {/* New format: items array */}
                  {successStory.nextStepsSection[language].items && successStory.nextStepsSection[language].items.length > 0 ? (
                    <div className="space-y-12">
                      {successStory.nextStepsSection[language].items!.map((item, index) => 
                        renderDetailItem(item, index, successStory.nextStepsSection[language].title)
                      )}
                    </div>
                  ) : (
                    /* Old format: content + optional imagePath (backward compatibility) */
                    <div className="max-w-4xl mx-auto">
                      {successStory.nextStepsSection[language].content && (
                        <p 
                          className="text-base lg:text-lg leading-relaxed text-muted-foreground mb-8"
                          dangerouslySetInnerHTML={{ __html: formatContent(successStory.nextStepsSection[language].content || '') }}
                        />
                      )}
                      {successStory.nextStepsSection[language].imagePath && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8 }}
                          className="mt-8"
                        >
                          <div className={`relative ${getImageContainerClasses(successStory.nextStepsSection[language].imageSize)} rounded-2xl overflow-hidden border border-border/50 shadow-lg`}>
                            <img
                              src={successStory.nextStepsSection[language].imagePath}
                              alt={successStory.nextStepsSection[language].title}
                              className="w-full h-auto object-contain"
                              loading="lazy"
                            />
                          </div>
                        </motion.div>
                      )}
                    </div>
                  )}
                </div>
              </motion.section>
            </div>
          </div>
        </section>

        {/* Download Section */}
        {downloadAsset && (
          <section className="px-4 lg:px-8 pb-20">
            <div className="w-full max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-background/95 px-8 py-12 shadow-xl shadow-noreja-main/10">
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-noreja-main/10 via-transparent to-noreja-secondary/20 opacity-70" />
                  <div className="relative z-10 space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                      {t.pages.successStories?.downloadSection?.title || "Noch unsicher?"}
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                      {t.pages.successStories?.downloadSection?.subtitle || "Lese den ganzen Report in einem herunterladbaren PDF!"}
                    </p>
                    <div className="flex justify-center">
                      <DownloadGate
                        title={downloadAsset.title}
                        description={downloadAsset.description}
                        fileUrl={downloadAsset.fileUrl}
                        fileSize={downloadAsset.fileSize}
                        fileType={downloadAsset.fileType}
                        variant="default"
                        requiresForm={downloadAsset.access === "locked"}
                        className="group"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Pricing CTA Section */}
        <section className="px-4 lg:px-8 pb-20">
          <div className="w-full max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-background/95 px-8 py-12 text-center shadow-xl shadow-noreja-main/10">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-noreja-main/10 via-transparent to-noreja-secondary/20 opacity-70" />
                <div className="relative z-10 space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    {t.pages.successStories?.pricingCta?.title || "Bereit loszulegen?"}{" "}
                    <span className="bg-gradient-primary bg-clip-text text-transparent">
                      {t.pages.successStories?.pricingCta?.highlight || ""}
                    </span>
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    {t.pages.successStories?.pricingCta?.subtitle || "Entdecke unsere Preise und finde den passenden Plan für dein Unternehmen."}
                  </p>
                  <Button
                    size="lg"
                    variant="secondary"
                    className="group"
                    asChild
                  >
                    <Link to="/pricing">
                      {t.pages.successStories?.pricingCta?.buttonLabel || "Zu den Preisen"}
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SuccessStoryDetail;

