import { motion } from "framer-motion";
import { SchematicCanvas } from "@/components/SchematicCanvas";
import { FunctionalitiesNav } from "@/components/FunctionalitiesNav";
import { HubSpotBlogTeaser } from "@/components/HubSpotBlogTeaser";

const Functionalities = () => {
  const capabilities = [
    {
      id: "data-collection",
      title: "Data Collection",
      description: "Intelligent data gathering from multiple sources with automated processing and real-time synchronization. Our advanced algorithms ensure comprehensive coverage while maintaining data integrity and compliance standards.",
      schematicTitle: "Data Flow Architecture",
      schematicDesc: "Multi-source data ingestion pipeline"
    },
    {
      id: "ai-processing",
      title: "AI Processing",
      description: "State-of-the-art machine learning models that analyze, classify, and extract insights from your data. Our AI engine continuously learns and adapts to provide increasingly accurate and relevant results.",
      schematicTitle: "Neural Network Pipeline",
      schematicDesc: "Advanced ML processing workflow"
    },
    {
      id: "analytics-insights",
      title: "Analytics & Insights",
      description: "Transform raw data into actionable insights with our comprehensive analytics suite. Generate detailed reports, identify trends, and make data-driven decisions with confidence.",
      schematicTitle: "Analytics Dashboard",
      schematicDesc: "Real-time insights visualization"
    },
    {
      id: "automation",
      title: "Automation",
      description: "Streamline your workflows with intelligent automation that reduces manual effort and eliminates repetitive tasks. Set up custom triggers and actions to optimize your business processes.",
      schematicTitle: "Workflow Engine",
      schematicDesc: "Automated process orchestration"
    },
    {
      id: "integration",
      title: "Integration",
      description: "Seamlessly connect with your existing tools and systems through our robust API and pre-built integrations. Ensure smooth data flow across your entire technology stack.",
      schematicTitle: "Integration Hub",
      schematicDesc: "System connectivity matrix"
    },
    {
      id: "security",
      title: "Security",
      description: "Enterprise-grade security features protect your data at every level. With end-to-end encryption, access controls, and compliance certifications, your information stays secure.",
      schematicTitle: "Security Framework",
      schematicDesc: "Multi-layer protection system"
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
              Product <span className="text-noreja-main">Functionalities</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the comprehensive capabilities that power your data-driven success. 
              From intelligent collection to actionable insights, explore how our platform transforms your workflow.
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
              Learn More
            </h2>
            <p className="text-lg text-muted-foreground">
              Discover insights and best practices from our experts
            </p>
          </motion.div>
          
          <HubSpotBlogTeaser />
        </div>
      </section>
    </div>
  );
};

export default Functionalities;