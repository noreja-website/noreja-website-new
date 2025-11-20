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
          <div className="w-full max-w-7xl mx-auto px-4 lg:px-8">
            <div className="space-y-24">
              {useCaseData.sections?.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`flex flex-col ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } gap-12 items-center`}
                >
                  {/* Text Content */}
                  <div className="flex-1 space-y-4">
                    <h2 className="text-3xl font-bold text-foreground">
                      {section.title}
                    </h2>
                    <div className="prose prose-lg max-w-none text-muted-foreground">
                      <p className="text-base leading-relaxed whitespace-pre-line">
                        {section.content}
                      </p>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="flex-1">
                    {section.imagePath ? (
                      <div className="relative rounded-lg overflow-hidden shadow-xl">
                        <img
                          src={section.imagePath}
                          alt={section.title}
                          className="w-full h-auto object-cover"
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <div className="relative rounded-lg overflow-hidden shadow-xl bg-muted/50 aspect-video flex items-center justify-center">
                        <div className="text-muted-foreground text-center p-8">
                          <p className="text-sm">Image placeholder</p>
                          <p className="text-xs mt-2">Add image for {section.title}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
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

