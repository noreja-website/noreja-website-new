import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function USPsShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());
  const [isResizing, setIsResizing] = useState(false);

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

  // Handle resize events to prevent hover effects during layout changes
  useEffect(() => {
    let resizeTimeout: NodeJS.Timeout;
    
    const handleResize = () => {
      setIsResizing(true);
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        setIsResizing(false);
      }, 150); // Debounce resize events
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  const usps = [
    {
      title: t.usps.features.connectionSpeed.title,
      description: t.usps.features.connectionSpeed.description
    },
    {
      title: t.usps.features.realisticResults.title,
      description: t.usps.features.realisticResults.description
    },
    {
      title: t.usps.features.multidimensionalPerspectives.title,
      description: t.usps.features.multidimensionalPerspectives.description
    },
    {
      title: t.usps.features.contextDomainKnowledge.title,
      description: t.usps.features.contextDomainKnowledge.description
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
        initial: { opacity: 0, scale: 0.93, x: -40, y: -20 },
        animate: { opacity: 1, scale: 1, x: 0, y: 0 },
        exit: { opacity: 0, scale: 0.93, x: -40, y: -20 }
      },
      1: { // Top right card (dataIntegration)
        initial: { opacity: 0, scale: 0.93, x: 40, y: -20 },
        animate: { opacity: 1, scale: 1, x: 0, y: 0 },
        exit: { opacity: 0, scale: 0.93, x: 40, y: -20 }
      },
      2: { // Bottom left card (security)
        initial: { opacity: 0, scale: 0.93, x: -40, y: 20 },
        animate: { opacity: 1, scale: 1, x: 0, y: 0 },
        exit: { opacity: 0, scale: 0.93, x: -40, y: 20 }
      },
      3: { // Bottom right card (realTime)
        initial: { opacity: 0, scale: 0.93, x: 40, y: 20 },
        animate: { opacity: 1, scale: 1, x: 0, y: 0 },
        exit: { opacity: 0, scale: 0.93, x: 40, y: 20 }
      }
    };
    
    return animations[cardIndex as keyof typeof animations] || animations[0];
  };

  return (
    <section ref={ref} className="py-20 overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 overflow-hidden"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
            <span className="whitespace-nowrap">{t.usps.title}</span>{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent whitespace-nowrap">
              {t.usps.highlight}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {t.usps.subtitle}
          </p>
          <Link to="/contact">
            <Button size="lg" className="gradient-primary glow-primary">
              {t.hero.ctaSecondary}
            </Button>
          </Link>
        </motion.div>

        <div className="relative max-w-6xl mx-auto overflow-hidden">
          {/* Background overlay when a card is selected */}
          {selectedCard !== null && (
            <motion.div 
              className="fixed inset-0 bg-black/30 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedCard(null)}
            />
          )}
          
          {/* Desktop: Selected card overlay */}
          {!isMobile && (
            <AnimatePresence>
              {selectedCard !== null && (
                <motion.div 
                  className="absolute inset-0 z-50 flex items-center justify-center overflow-hidden"
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
                    className="relative h-80 w-full max-w-2xl mx-auto shadow-2xl rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-primary/20"
                    onClick={(e) => e.stopPropagation()}
                  >
                    
                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col justify-center items-center p-8">
                      <motion.h3 
                        className="text-3xl font-bold text-foreground text-center mb-6"
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
                        className="text-muted-foreground text-center leading-relaxed max-w-lg text-lg"
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
            className="grid grid-cols-1 md:grid-cols-2 gap-6 overflow-hidden py-4 transition-all duration-300 ease-in-out"
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
                  whileHover={!isMobile && selectedCard === null && !isResizing ? { 
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
                          <div className="relative h-full border border-border rounded-2xl overflow-hidden group-hover:border-primary/50 group-hover:shadow-lg group-hover:shadow-primary/10 bg-gradient-to-br from-primary/10 to-primary/20">
                            {/* Content */}
                            <div className="relative z-10 h-full flex flex-col justify-center items-center p-6">
                              <h3 className="text-2xl font-bold text-foreground text-center mb-4">
                                {usp.title}
                              </h3>
                              <div className="text-muted-foreground text-sm text-center">
                                {t.usps.tapToLearnMore}
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
                      className={`relative h-64 border border-border rounded-2xl overflow-hidden transition-all duration-500 bg-gradient-to-br from-primary/10 to-primary/20 ${
                        isBackground 
                          ? 'opacity-60 blur-sm' 
                          : 'group-hover:border-primary/50 group-hover:shadow-lg group-hover:shadow-primary/10'
                      }`}
                    >
                      {/* Content */}
                      <div className="relative z-10 h-full flex flex-col justify-center items-center p-6">
                        <h3 className="text-2xl font-bold text-foreground text-center mb-4">
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
