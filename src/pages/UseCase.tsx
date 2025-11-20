import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { useEffect } from "react";

interface TextSection {
  title: string;
  content: string;
  imagePath?: string;
}

interface UseCaseData {
  title: string;
  description: string;
  sections?: TextSection[];
}

const UseCase = () => {
  const { useCaseId } = useParams<{ useCaseId: string }>();
  const { t, language } = useLanguage();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Get use case data from translations (exclude 'cta' which is not a use case)
  const useCaseData: UseCaseData | null = useCaseId && 
    useCaseId !== 'cta' && 
    t.pages.useCases?.[useCaseId] && 
    'sections' in t.pages.useCases[useCaseId] ? {
      title: t.pages.useCases[useCaseId].title,
      description: t.pages.useCases[useCaseId].description,
      sections: (t.pages.useCases[useCaseId] as { sections?: TextSection[] }).sections || []
    } : null;

  if (!useCaseData || !useCaseId) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold mb-4">Use Case Not Found</h1>
          <p className="text-muted-foreground">
            {useCaseId ? `Use case "${useCaseId}" not found.` : "No use case ID provided."}
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
                  Back to Success Stories
                </Button>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center mb-16"
            >
              <AnimatedHeading 
                fixedText={useCaseData.title}
                rotatingWords={[]}
                size="md"
                className="text-foreground mb-6"
              />
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {useCaseData.description}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="pb-20">
          <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
            <div className="space-y-32 lg:space-y-40">
              {useCaseData.sections?.map((section, index) => {
                // Alternate layout: even index = image left, odd index = image right
                const isImageLeft = index % 2 === 0;
                const gridCols = isImageLeft 
                  ? "lg:grid-cols-[1.2fr_1fr]" 
                  : "lg:grid-cols-[1fr_1.2fr]";
                
                return (
                  <motion.section
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="scroll-mt-24"
                  >
                    <div className={`grid ${gridCols} gap-8 lg:gap-12 items-center overflow-hidden`}>
                      {/* Image Section */}
                      <motion.div
                        className={`${isImageLeft ? "lg:order-1" : "lg:order-2"}`}
                        initial={{ opacity: 0, x: isImageLeft ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                      >
                        <motion.div
                          className="relative w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden border border-border/50 shadow-lg group"
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.3 }}
                        >
                          {section.imagePath ? (
                            <>
                              <img
                                src={section.imagePath}
                                alt={section.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                loading="lazy"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </>
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-muted/50 to-muted/30 flex items-center justify-center">
                              <div className="text-muted-foreground text-center p-8">
                                <p className="text-sm font-medium">Image placeholder</p>
                                <p className="text-xs mt-2 opacity-70">Add image for {section.title}</p>
                              </div>
                            </div>
                          )}
                        </motion.div>
                      </motion.div>

                      {/* Text Content Section */}
                      <motion.div
                        className={`${isImageLeft ? "lg:order-2" : "lg:order-1"} space-y-6`}
                        initial={{ opacity: 0, x: isImageLeft ? 50 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.1 + 0.2 }}
                      >
                        <h2 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                          {section.title}
                        </h2>
                        <div className="prose prose-lg max-w-none">
                          <p className="text-base lg:text-lg leading-relaxed text-muted-foreground whitespace-pre-line">
                            {section.content}
                          </p>
                        </div>
                      </motion.div>
                    </div>
                  </motion.section>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 lg:px-8 pb-20">
          <div className="w-full max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-background/95 px-8 py-12 text-center shadow-xl shadow-noreja-main/10">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-noreja-main/10 via-transparent to-noreja-secondary/20 opacity-70" />
                <div className="relative z-10 space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    {t.pages.useCases?.cta?.title || "Ready to Transform Your Processes?"}
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    {t.pages.useCases?.cta?.description || "Discover how Noreja Process Intelligence can help your organization achieve similar results."}
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <Button
                      size="lg"
                      variant="default"
                      asChild
                    >
                      <Link to="/contact">
                        {t.pages.useCases?.cta?.buttonLabel || "Get Started"}
                      </Link>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      asChild
                    >
                      <Link to="/success-stories">
                        {t.pages.useCases?.cta?.secondaryButtonLabel || "View More Success Stories"}
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default UseCase;

