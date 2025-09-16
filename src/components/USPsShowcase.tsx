import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useIsMobile } from "@/hooks/use-mobile";

export function USPsShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

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

  // Handle card click - different behavior for mobile vs desktop
  const handleCardClick = (index: number) => {
    if (isMobile) {
      // On mobile, toggle flip state
      setFlippedCards(prev => {
        const newSet = new Set(prev);
        if (newSet.has(index)) {
          newSet.delete(index);
        } else {
          newSet.add(index);
        }
        return newSet;
      });
    } else {
      // On desktop, use the overlay animation
      setSelectedCard(selectedCard === index ? null : index);
    }
  };

  // Define specific animation properties for each card
  const getCardAnimation = (cardIndex: number) => {
    const animations = {
      0: { // Top left card (aiAnalytics)
        initial: { opacity: 0, scale: 0.8, x: -200, y: -100 },
        animate: { opacity: 1, scale: 1.1, x: 0, y: 0 },
        exit: { opacity: 0, scale: 0.8, x: -200, y: -100 }
      },
      1: { // Top right card (dataIntegration)
        initial: { opacity: 0, scale: 0.8, x: 200, y: -100 },
        animate: { opacity: 1, scale: 1.1, x: 0, y: 0 },
        exit: { opacity: 0, scale: 0.8, x: 200, y: -100 }
      },
      2: { // Bottom left card (security)
        initial: { opacity: 0, scale: 0.8, x: -200, y: 100 },
        animate: { opacity: 1, scale: 1.1, x: 0, y: 0 },
        exit: { opacity: 0, scale: 0.8, x: -200, y: 100 }
      },
      3: { // Bottom right card (realTime)
        initial: { opacity: 0, scale: 0.8, x: 200, y: 100 },
        animate: { opacity: 1, scale: 1.1, x: 0, y: 0 },
        exit: { opacity: 0, scale: 0.8, x: 200, y: 100 }
      }
    };
    
    return animations[cardIndex as keyof typeof animations] || animations[0];
  };

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
            <motion.div 
              className="fixed inset-0 bg-black/30 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          )}
          
          {/* Desktop: Selected card overlay */}
          {!isMobile && (
            <AnimatePresence>
              {selectedCard !== null && (
                <motion.div 
                  className="fixed inset-0 z-50 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedCard(null)}
                >
                  <motion.div
                    initial={getCardAnimation(selectedCard).initial}
                    animate={getCardAnimation(selectedCard).animate}
                    exit={getCardAnimation(selectedCard).exit}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 25,
                      duration: 0.8
                    }}
                    className="relative h-80 w-full max-w-2xl mx-auto shadow-2xl border border-primary/50 rounded-2xl overflow-hidden"
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
                    <div className="relative z-10 h-full flex flex-col justify-center items-center p-8">
                      <motion.h3 
                        className="text-3xl font-bold text-white text-center mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                      >
                        {usps[selectedCard].title}
                      </motion.h3>
                      
                      {/* Description */}
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="text-white/90 text-center leading-relaxed max-w-lg text-lg"
                      >
                        {usps[selectedCard].description}
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          )}
          
          <div 
            data-cards-container
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {usps.map((usp, index) => {
              const isSelected = selectedCard === index;
              const isBackground = selectedCard !== null && selectedCard !== index;
              const isFlipped = flippedCards.has(index);
              
              return (
                <motion.div
                  key={usp.title}
                  data-card-index={index}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { 
                    opacity: isSelected ? 0 : 1, 
                    scale: isBackground ? 0.95 : 1
                  } : { opacity: 0 }}
                  transition={{ 
                    duration: isSelected ? 0.2 : 0.6, // Faster fade out for selected card
                    delay: isSelected ? 0 : 0.6, // Same delay for all cards - matches the bottom right timing
                    ease: "easeOut" // Consistent easing for all cards
                  }}
                  whileHover={!isMobile && selectedCard === null ? { 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  } : {}}
                  onClick={() => handleCardClick(index)}
                  className="group cursor-pointer"
                >
                  {/* Mobile: Flip card container */}
                  {isMobile ? (
                    <div className="relative h-64 w-full perspective-1000">
                      <motion.div
                        className="relative w-full h-full preserve-3d"
                        animate={{ rotateY: isFlipped ? 180 : 0 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                      >
                        {/* Front of card */}
                        <div className={`absolute inset-0 w-full h-full backface-hidden ${
                          isFlipped ? 'opacity-0' : 'opacity-100'
                        }`}>
                          <div className="relative h-full border border-border rounded-2xl overflow-hidden group-hover:border-primary/50 group-hover:shadow-lg group-hover:shadow-primary/10">
                            {/* Background Image */}
                            <div 
                              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                              style={{ backgroundImage: `url(${usp.backgroundImage})` }}
                            />
                            
                            {/* Card overlay */}
                            <div className="absolute inset-0 bg-black/40" />
                            
                            {/* Content */}
                            <div className="relative z-10 h-full flex flex-col justify-center items-center p-6">
                              <h3 className="text-2xl font-bold text-white text-center mb-4">
                                {usp.title}
                              </h3>
                              <div className="text-white/80 text-sm text-center">
                                Tap to learn more
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Back of card */}
                        <div className={`absolute inset-0 w-full h-full backface-hidden rotate-y-180 ${
                          isFlipped ? 'opacity-100' : 'opacity-0'
                        }`}>
                          <div className="relative h-full border border-primary/50 rounded-2xl overflow-hidden bg-gradient-to-br from-background/90 via-primary/20 to-secondary/40">
                            {/* Content */}
                            <div className="relative z-10 h-full flex flex-col justify-center items-center p-6">
                              <h3 className="text-2xl font-bold text-foreground text-center mb-4">
                                {usp.title}
                              </h3>
                              <p className="text-muted-foreground text-center leading-relaxed text-sm">
                                {usp.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  ) : (
                    /* Desktop: Regular card */
                    <div 
                      className={`relative h-64 border border-border rounded-2xl overflow-hidden transition-all duration-500 ${
                        isBackground 
                          ? 'opacity-60 blur-sm' 
                          : 'group-hover:border-primary/50 group-hover:shadow-lg group-hover:shadow-primary/10'
                      }`}
                    >
                      {/* Background Image */}
                      <div 
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(${usp.backgroundImage})` }}
                      />
                      
                      {/* Individual card overlay */}
                      <div className={`absolute inset-0 transition-opacity duration-500 ${
                        isBackground ? 'bg-black/60' : 'bg-black/40'
                      }`} />
                      
                      {/* Content */}
                      <div className="relative z-10 h-full flex flex-col justify-center items-center p-6">
                        <h3 className="text-2xl font-bold text-white text-center mb-4">
                          {usp.title}
                        </h3>
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
