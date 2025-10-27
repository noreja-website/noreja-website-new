import { motion } from "framer-motion";
import { SchematicCanvas } from "@/components/SchematicCanvas";
import { FunctionalitiesNav } from "@/components/FunctionalitiesNav";
import { HubSpotBlogTeaser } from "@/components/HubSpotBlogTeaser";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect } from "react";

const Functionalities = () => {
  const { t } = useLanguage();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const capabilities = [
    {
      id: "data-collection",
      title: t.pages.functionalities.capabilities.dataCollection.title,
      description: t.pages.functionalities.capabilities.dataCollection.description,
      schematicTitle: t.pages.functionalities.capabilities.dataCollection.schematicTitle,
      schematicDesc: t.pages.functionalities.capabilities.dataCollection.schematicDesc
    },
    {
      id: "ai-processing",
      title: t.pages.functionalities.capabilities.aiProcessing.title,
      description: t.pages.functionalities.capabilities.aiProcessing.description,
      schematicTitle: t.pages.functionalities.capabilities.aiProcessing.schematicTitle,
      schematicDesc: t.pages.functionalities.capabilities.aiProcessing.schematicDesc
    },
    {
      id: "analytics-insights",
      title: t.pages.functionalities.capabilities.analyticsInsights.title,
      description: t.pages.functionalities.capabilities.analyticsInsights.description,
      schematicTitle: t.pages.functionalities.capabilities.analyticsInsights.schematicTitle,
      schematicDesc: t.pages.functionalities.capabilities.analyticsInsights.schematicDesc
    },
    {
      id: "automation",
      title: t.pages.functionalities.capabilities.automation.title,
      description: t.pages.functionalities.capabilities.automation.description,
      schematicTitle: t.pages.functionalities.capabilities.automation.schematicTitle,
      schematicDesc: t.pages.functionalities.capabilities.automation.schematicDesc
    },
    {
      id: "integration",
      title: t.pages.functionalities.capabilities.integration.title,
      description: t.pages.functionalities.capabilities.integration.description,
      schematicTitle: t.pages.functionalities.capabilities.integration.schematicTitle,
      schematicDesc: t.pages.functionalities.capabilities.integration.schematicDesc
    },
    {
      id: "security",
      title: t.pages.functionalities.capabilities.security.title,
      description: t.pages.functionalities.capabilities.security.description,
      schematicTitle: t.pages.functionalities.capabilities.security.schematicTitle,
      schematicDesc: t.pages.functionalities.capabilities.security.schematicDesc
    }
  ];

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
              {t.pages.functionalities.title} <span className="text-noreja-main">{t.pages.functionalities.titleHighlight}</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t.pages.functionalities.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content with Navigation */}
      <div className="relative w-full max-w-7xl mx-auto px-4 lg:px-8 pb-20">
        <div className="flex gap-8">
          {/* Navigation Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <FunctionalitiesNav />
          </aside>

          {/* Main Content */}
          <main className="flex-1 space-y-20">
            {capabilities.map((capability, index) => (
              <motion.section
                key={capability.id}
                id={capability.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="scroll-mt-24"
              >
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className={index % 2 === 0 ? "lg:order-1" : "lg:order-2"}>
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">
                      {capability.title}
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {capability.description}
                    </p>
                  </div>
                  
                  <div className={index % 2 === 0 ? "lg:order-2" : "lg:order-1"}>
                    <SchematicCanvas 
                      title={capability.schematicTitle}
                      description={capability.schematicDesc}
                      className="w-full"
                    />
                  </div>
                </div>
              </motion.section>
            ))}
          </main>
        </div>
      </div>

      {/* Blog Teasers Section */}
      <section className="py-20 bg-muted/30">
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
  );
};

export default Functionalities;