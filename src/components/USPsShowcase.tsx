import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export function USPsShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  // Disable body scroll when a card is selected
  useEffect(() => {
    if (selectedCard !== null) {
      // Simply prevent scrolling by hiding overflow
      document.body.style.overflow = 'hidden';
    } else {
      // Re-enable scrolling
      document.body.style.overflow = '';
    }

    // Cleanup function to ensure scroll is re-enabled on unmount
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedCard]);

  const usps = [
    {
      title: t.functionalities.features.aiAnalytics.title,
      description: t.functionalities.features.aiAnalytics.description,
      backgroundImage: "/src/assets/graph_three_nodes.png"
    },
    {
      title: t.functionalities.features.dataIntegration.title,
      description: t.functionalities.features.dataIntegration.description,
      backgroundImage: "/src/assets/sampleimage.png"
    },
    {
      title: t.functionalities.features.security.title,
      description: t.functionalities.features.security.description,
      backgroundImage: "/src/assets/graph_three_nodes.png"
    },
    {
      title: t.functionalities.features.realTime.title,
      description: t.functionalities.features.realTime.description,
      backgroundImage: "/src/assets/sampleimage.png"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">
            Why Choose{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Noreja
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the key advantages that make our platform the preferred choice for data-driven organizations worldwide.
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Background overlay when a card is selected */}
          {selectedCard !== null && (
            <div className="fixed inset-0 bg-black/30 z-40" />
          )}
          
          {/* Selected card overlay */}
          {selectedCard !== null && (
            <div 
              className="fixed inset-0 flex items-center justify-center z-50"
              onClick={() => setSelectedCard(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1.05 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  damping: 30,
                  duration: 1
                }}
                className="relative h-64 w-full max-w-2xl mx-auto shadow-2xl border border-primary/50 rounded-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${usps[selectedCard].backgroundImage})` }}
                />
                
                {/* Individual card overlay */}
                <div className="absolute inset-0 bg-black/20" />
                
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-center items-center p-6">
                  <motion.h3 
                    className="text-2xl font-bold text-white text-center mb-4"
                    animate={{
                      scale: 1.1,
                      y: -10
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                      duration: 0.5
                    }}
                  >
                    {usps[selectedCard].title}
                  </motion.h3>
                  
                  {/* Description */}
                  <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ 
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                      duration: 0.6
                    }}
                    className="text-white/90 text-center leading-relaxed max-w-md"
                  >
                    {usps[selectedCard].description}
                  </motion.div>
                </div>
              </motion.div>
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {usps.map((usp, index) => {
              const isSelected = selectedCard === index;
              const isBackground = selectedCard !== null && selectedCard !== index;
              
              return (
                <motion.div
                  key={usp.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { 
                    opacity: 1, 
                    y: 0
                  } : { opacity: 0, y: 50 }}
                  transition={{ 
                    duration: 0.6,
                    delay: index * 0.1 + 0.3
                  }}
                  whileHover={selectedCard === null ? { 
                    y: -8,
                    transition: { duration: 0.2 }
                  } : {}}
                  onClick={() => setSelectedCard(isSelected ? null : index)}
                  className="group cursor-pointer"
                >
                  <motion.div 
                    className={`relative h-64 border border-border rounded-2xl overflow-hidden ${
                      isSelected 
                        ? 'opacity-0' 
                        : 'group-hover:border-primary/50 group-hover:shadow-lg group-hover:shadow-primary/10'
                    }`}
                    animate={{
                      scale: 1,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 20,
                      duration: 1
                    }}
                  >
                    {/* Background Image */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                      style={{ backgroundImage: `url(${usp.backgroundImage})` }}
                    />
                    
                    {/* Individual card overlay - only on the card itself */}
                    <div className={`absolute inset-0 transition-opacity duration-500 ${
                      isBackground ? 'bg-black/60' : 'bg-black/40'
                    }`} />
                    
                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col justify-center items-center p-6">
                      <h3 className="text-2xl font-bold text-white text-center mb-4">
                        {usp.title}
                      </h3>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
