import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { partners, initializePartnersData, type Partner } from "@/lib/partners";
import { Link } from "react-router-dom";
import { getRoutePath } from "@/lib/routes";

export function PartnersTeaser() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t, language } = useLanguage();
  const [loadedPartners, setLoadedPartners] = useState<Partner[]>([]);
  
  // Initialize partners data on mount
  useEffect(() => {
    const loadData = async () => {
      try {
        await initializePartnersData();
        setLoadedPartners([...partners]);
      } catch (error) {
        console.error('Error loading partners in PartnersTeaser:', error);
        setLoadedPartners([]);
      }
    };
    loadData();
  }, []);
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Get all partners with quotes for the gallery
  const galleryPartners = loadedPartners.filter(
    (partner) =>
      (partner.partnerType === 'businessWithQuote' || partner.partnerType === 'advisorWithQuote') &&
      partner.quote
  );

  // Don't render if no partners loaded yet
  if (loadedPartners.length === 0) {
    return null;
  }

  const getPartnerLogo = (partner: Partner) => {
    if (partner.preferOriginalLogo) {
      return partner.logoUrl || partner.logoUrlWhite || "";
    }
    return partner.logoUrlWhite || partner.logoUrl || "";
  };

  // Auto-rotate functionality - works globally across all partners
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

  const handleTabChange = (partnerIndex: number) => {
    setCurrentIndex(partnerIndex);
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

        {/* Company Tabs Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center mb-8"
        >
          <div className="flex flex-wrap gap-3 bg-muted/30 rounded-xl p-3 max-w-6xl overflow-x-auto">
            {galleryPartners.map((partner, index) => (
              <button
                key={partner.id}
                onClick={() => handleTabChange(index)}
                className={`w-16 h-16 md:w-20 md:h-20 rounded-lg transition-all duration-200 flex items-center justify-center p-2 ${
                  currentIndex === index
                    ? 'bg-white shadow-sm border-2 border-noreja-primary'
                    : 'bg-white/50 hover:bg-white/80 border-2 border-transparent hover:border-noreja-primary/30'
                }`}
                title={partner.name}
              >
                <img
                  src={getPartnerLogo(partner)}
                  alt={partner.name}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
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
              {galleryPartners.length > 0 && galleryPartners[currentIndex] && (
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="p-10 md:p-16"
                >
                  <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Person Photo */}
                    <div className="flex-shrink-0">
                      <div className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 bg-white/90 rounded-xl shadow-lg flex items-center justify-center p-4 overflow-hidden">
                        <img
                          src={
                            galleryPartners[currentIndex].personPhotoUrl ||
                            getPartnerLogo(galleryPartners[currentIndex])
                          }
                          alt={galleryPartners[currentIndex].quoteAuthor || galleryPartners[currentIndex].name}
                          className="w-full h-full object-cover rounded-lg"
                          loading="lazy"
                        />
                      </div>
                      {/* LinkedIn Link */}
                      {galleryPartners[currentIndex].linkedin && (
                        <div className="mt-4 flex justify-center">
                          <a
                            href={galleryPartners[currentIndex].linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-12 h-12 text-white-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                            title="LinkedIn Profile"
                          >
                            <Linkedin className="w-7 h-7" />
                          </a>
                        </div>
                      )}
                    </div>
                    
                    {/* Quote Section */}
                    <div className="flex-1 text-center md:text-left">
                      <blockquote className="text-xl md:text-2xl lg:text-3xl text-foreground font-medium mb-8 leading-relaxed whitespace-pre-line">
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

          </div>
        </motion.div>

        {/* Navigation Controls Below Gallery */}
        {galleryPartners.length > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex items-center justify-center gap-8 mb-12"
          >
            {/* Previous Button */}
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-muted/50 hover:bg-muted rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110 border border-border/50"
              aria-label="Previous partner"
            >
              <ChevronLeft className="w-6 h-6 text-foreground" />
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-3">
              {galleryPartners.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex 
                      ? 'bg-noreja-primary scale-125' 
                      : 'bg-muted-foreground/60 hover:bg-muted-foreground'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-muted/50 hover:bg-muted rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110 border border-border/50"
              aria-label="Next partner"
            >
              <ChevronRight className="w-6 h-6 text-foreground" />
            </button>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
        >
          <Button asChild size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10">
            <Link to={getRoutePath('partners', language)}>
              {t.partners.viewAllPartners}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}