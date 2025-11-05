import { motion } from "framer-motion";
import { HubSpotBlogTeaser } from "@/components/HubSpotBlogTeaser";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect } from "react";
import { LayoutDashboard, Search, Brain, Wrench, Code } from "lucide-react";

const Functionalities = () => {
  const { t } = useLanguage();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const features = [
    {
      id: "security",
      icon: LayoutDashboard,
      title: t.functionalities.features.security.title,
      description: t.functionalities.features.security.description,
      imagePath: null // Placeholder for image path
    },
    {
      id: "data-integration",
      icon: Search,
      title: t.functionalities.features.dataIntegration.title,
      description: t.functionalities.features.dataIntegration.description,
      imagePath: null // Placeholder for image path
    },
    {
      id: "ai-analytics",
      icon: Brain,
      title: t.functionalities.features.aiAnalytics.title,
      description: t.functionalities.features.aiAnalytics.description,
      imagePath: null // Placeholder for image path
    },
    {
      id: "real-time",
      icon: Wrench,
      title: t.functionalities.features.realTime.title,
      description: t.functionalities.features.realTime.description,
      imagePath: null // Placeholder for image path
    },
    {
      id: "workbench",
      icon: Code,
      title: t.functionalities.features.workbench.title,
      description: t.functionalities.features.workbench.description,
      imagePath: null // Placeholder for image path
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative">
        <section className="relative py-20 lg:py-24">
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-foreground">
                {t.functionalities.title}{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  {t.functionalities.titleHighlight}
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t.functionalities.subtitle}
              </p>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Features Section with Gradient Background */}
      <div className="relative" style={{
        background: `
          linear-gradient(135deg, hsl(var(--background)) 0%, hsl(var(--noreja-main) / 0.14) 50%, hsl(var(--background)) 100%),
          radial-gradient(ellipse 1000px 800px at 50% 50%, hsl(var(--noreja-secondary) / 0.10) 0%, transparent 60%)
        `
      }}>
        {/* Gradient fade from previous section */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent pointer-events-none z-0" />
        {/* Gradient fade to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background pointer-events-none z-0" />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 lg:px-8 py-20">
          <div className="space-y-32 lg:space-y-40">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              
              // Varied layout patterns for more organic feel
              const layouts = [
                { 
                  imageOrder: 1, 
                  imageSize: "h-[450px] lg:h-[550px]", 
                  gridCols: "lg:grid-cols-[1.2fr_1fr]",
                  imageOffset: ""
                },
                { 
                  imageOrder: 2, 
                  imageSize: "h-[400px] lg:h-[600px]", 
                  gridCols: "lg:grid-cols-[1fr_1.2fr]",
                  imageOffset: "lg:mt-8"
                },
                { 
                  imageOrder: 1, 
                  imageSize: "h-[500px] lg:h-[500px]", 
                  gridCols: "lg:grid-cols-2",
                  imageOffset: ""
                },
                { 
                  imageOrder: 2, 
                  imageSize: "h-[450px] lg:h-[550px]", 
                  gridCols: "lg:grid-cols-[1.1fr_0.9fr]",
                  imageOffset: "lg:-mt-8"
                },
                { 
                  imageOrder: 1, 
                  imageSize: "h-[400px] lg:h-[580px]", 
                  gridCols: "lg:grid-cols-[0.9fr_1.1fr]",
                  imageOffset: "lg:mt-12"
                }
              ];
              
              const layout = layouts[index % layouts.length];
              
              return (
                <motion.section
                  key={feature.id}
                  id={feature.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="scroll-mt-24"
                >
                  <div className={`grid ${layout.gridCols} gap-8 lg:gap-12 items-start`}>
                    {/* Image Section */}
                    <div className={`${layout.imageOrder === 1 ? "lg:order-1" : "lg:order-2"} ${layout.imageOffset}`}>
                      <div className={`relative w-full ${layout.imageSize} rounded-2xl overflow-hidden border border-border/50 shadow-lg group`}>
                        {/* Placeholder for image - replace with actual image when available */}
                        {feature.imagePath ? (
                          <>
                            {/* Gradient background - only visible with images */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/30" />
                            <img
                              src={feature.imagePath}
                              alt={feature.title}
                              className="relative z-10 w-full h-full object-cover opacity-80 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                            />
                            {/* Gradient overlay that blends with image */}
                            <div className="absolute inset-0 z-20 bg-gradient-to-br from-primary/30 via-transparent to-secondary/40 pointer-events-none" />
                            <div className="absolute inset-0 z-20 bg-gradient-to-t from-background/30 via-transparent to-transparent pointer-events-none" />
                          </>
                        ) : (
                          <div className="relative z-10 w-full h-full flex items-center justify-center bg-background">
                            <div className="text-center space-y-4">
                              <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/30 transition-colors">
                                <Icon className="w-12 h-12 text-noreja-tertiary" />
                              </div>
                              <p className="text-sm text-muted-foreground px-4">
                                Image placeholder for {feature.title}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Text Section */}
                    <div className={`${layout.imageOrder === 1 ? "lg:order-2" : "lg:order-1"}`}>
                      <div className="space-y-6 lg:py-4">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center border border-primary/20 flex-shrink-0">
                            <Icon className="w-8 h-8 text-noreja-tertiary" />
                          </div>
                          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                            {feature.title}
                          </h2>
                        </div>
                        <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.section>
              );
            })}
          </div>
        </div>
      </div>

      {/* Blog Teasers Section */}
      <div className="relative" style={{
        background: `
          linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--noreja-main) / 0.16) 40%, hsl(var(--noreja-secondary) / 0.15) 80%, hsl(var(--background)) 100%),
          radial-gradient(ellipse 1000px 700px at 70% 20%, hsl(var(--noreja-secondary) / 0.14) 0%, transparent 60%)
        `
      }}>
        {/* Gradient fade from previous section */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent pointer-events-none z-0" />
        <section className="relative z-10 py-20">
          <div className="w-full max-w-7xl mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
                {t.pages.functionalities.learnMore}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t.pages.functionalities.learnMoreSubtitle}
              </p>
            </motion.div>
            
            <HubSpotBlogTeaser />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Functionalities;