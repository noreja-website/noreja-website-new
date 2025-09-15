import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { partners } from "@/lib/partners";

export function PartnersTeaser() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Get partners with quotes for the gallery
  const galleryPartners = partners.filter(partner => partner.quote).slice(0, 6);

  // Auto-rotate functionality
  useEffect(() => {
    if (!isHovered && galleryPartners.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryPartners.length);
      }, 5000); // Change every 5 seconds

      return () => clearInterval(interval);
    }
  }, [isHovered, galleryPartners.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryPartners.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + galleryPartners.length) % galleryPartners.length);
  };


  return (
    <section ref={ref} className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">
            {t.partners.title}{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {t.partners.titleHighlight}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {t.partners.subtitle}
          </p>
        </motion.div>


        {/* Partner Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative max-w-6xl mx-auto mb-12"
        >
          <div 
            className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-muted/50 to-muted/30 border border-border/50"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <AnimatePresence mode="wait">
              {galleryPartners.length > 0 && (
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="p-10 md:p-16"
                >
                  <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Partner Logo */}
                    <div className="flex-shrink-0">
                      <div className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 bg-white/90 rounded-xl shadow-lg flex items-center justify-center p-8">
                        <img
                          src={galleryPartners[currentIndex].logoUrl}
                          alt={galleryPartners[currentIndex].name}
                          className="max-h-full max-w-full object-contain"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    
                    {/* Quote Section */}
                    <div className="flex-1 text-center md:text-left">
                      <blockquote className="text-xl md:text-2xl lg:text-3xl text-foreground font-medium mb-8 leading-relaxed">
                        "{galleryPartners[currentIndex].quote}"
                      </blockquote>
                      <div className="text-base md:text-lg text-muted-foreground">
                        <div className="font-semibold text-foreground">
                          {galleryPartners[currentIndex].quoteAuthor}
                        </div>
                        <div className="text-noreja-tertiary">
                          {galleryPartners[currentIndex].name}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Controls */}
            {galleryPartners.length > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/50 rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                  aria-label="Previous partner"
                >
                  <ChevronLeft className="w-5 h-5 text-foreground" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/50 rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                  aria-label="Next partner"
                >
                  <ChevronRight className="w-5 h-5 text-foreground" />
                </button>
              </>
            )}

            {/* Dots Indicator */}
            {galleryPartners.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {galleryPartners.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      index === currentIndex 
                        ? 'bg-noreja-primary scale-125' 
                        : 'bg-white/60 hover:bg-white/80'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
        >
          <Button asChild size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10">
            <a href="/partners">
              {t.partners.viewAllPartners}
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}