import { motion } from "framer-motion";
import { ArrowRight, Package, Factory, Shield, Building2, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HubSpotBlogTeaser } from "@/components/HubSpotBlogTeaser";
import { successStories } from "@/lib/successStories";
import { useCases } from "@/lib/useCases";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { AnimatedHeading } from "@/components/AnimatedHeading";

const SuccessStories = () => {
  const { t, language } = useLanguage();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Language-specific heading texts
  const headingTexts = {
    en: {
      fixedText: "Our Clients Achieve",
      rotatingWords: ["Success", "Efficiency", "Impact", "Growth"]
    },
    de: {
      fixedText: "Erfolge, die",
      rotatingWords: ["überzeugen", "bewegen", "skalieren", "Zukunft formen"]
    }
  };

  const currentHeading = headingTexts[language];

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  useEffect(() => {
    if (!api || !isAutoPlaying) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [api, isAutoPlaying]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  const handleDotClick = (index: number) => {
    api?.scrollTo(index);
    setIsAutoPlaying(false);
    // Resume autoplay after 5 seconds
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

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
            className="text-center mb-16"
          >
            <AnimatedHeading 
              fixedText={currentHeading.fixedText}
              rotatingWords={currentHeading.rotatingWords}
              size="md"
              className="text-foreground mb-6"
            />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t.pages.successStories.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Success Stories Carousel */}
      <section className="pb-20">
        <div className="w-full max-w-7xl mx-auto px-4 lg:px-8">
          {/* Tag Badge */}
          {current > 0 && successStories[current - 1] && (
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="flex justify-center mb-8"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <Trophy className="w-4 h-4 mr-2 text-noreja-tertiary" />
                <span className="text-sm font-medium">{successStories[current - 1].industry[language]}</span>
              </div>
            </motion.div>
          )}
          
          <div 
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Carousel
              setApi={setApi}
              opts={{
                align: "center",
                loop: true,
              }}
              className="w-full max-w-4xl mx-auto"
            >
              <CarouselContent className="-ml-4">
                {successStories.map((story, index) => (
                  <CarouselItem key={story.id} className="pl-4 basis-full">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="h-full"
                    >
                      <Card className="h-full group hover:shadow-md transition-all duration-300 cursor-pointer border-border/30 hover:border-noreja-main/20 max-w-4xl mx-auto overflow-hidden aspect-video relative">
                        {/* Background Image */}
                        <div 
                          className="absolute inset-0 bg-cover bg-center"
                          style={{
                            backgroundImage: `url(${story.coverImageUrl})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                          }}
                        />
                        
                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-black/60" />
                        
                        {/* Company Logo - Top Right */}
                        <div className="absolute top-4 right-4 z-20 h-16 w-auto">
                          <img
                            src={story.logoUrl}
                            alt={`${story.companyName} logo`}
                            className="h-full w-auto object-contain"
                            loading="lazy"
                          />
                        </div>
                        
                        {/* Content */}
                        <div className="relative z-10 h-full flex flex-col justify-center items-center p-8 text-white">
                          <CardHeader className="pb-4">
                            {/* Company Info */}
                            <div className="space-y-3">
                              <h2 className="text-4xl font-bold text-white text-center">
                                {story.companyName}
                              </h2>
                            </div>
                          </CardHeader>
                          
                          <CardContent className="pt-0 px-6">
                            {/* Summary */}
                            <CardDescription className="text-base leading-relaxed mb-6 text-center text-white/90">
                              {story.summary[language]}
                            </CardDescription>
                            
                            {/* Read More Button */}
                            <div className="flex justify-center">
                              <Button
                                variant="outline"
                                size="lg"
                                className="w-auto bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white/50 transition-all"
                                asChild
                              >
                                <Link to={`/success-stories/${story.id}`}>
                                  {t.pages.successStories.readCaseStudy}
                                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                                </Link>
                              </Button>
                            </div>
                          </CardContent>
                        </div>
                      </Card>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
            
            {/* Dot Navigation */}
            <div className="flex justify-center mt-12 space-x-3">
              {Array.from({ length: count }, (_, index) => (
                <button
                  key={index}
                  className={`rounded-full transition-all duration-200 hover:scale-110 ${
                    index + 1 === current 
                      ? 'w-5 h-5 bg-muted-foreground/30 ring-2 ring-accent' 
                      : 'w-4 h-4 bg-muted-foreground/30 hover:bg-muted-foreground/60'
                  }`}
                  onClick={() => handleDotClick(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="px-4 lg:px-8 pb-20">
        <div className="w-full max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t.pages.successStories.useCasesSection?.title || "Use Cases"}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t.pages.successStories.useCasesSection?.subtitle || "Discover how Noreja Process Intelligence transforms operations across industries."}
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { id: "supply-chain", Icon: Package },
              { id: "manufacturing", Icon: Factory },
              { id: "insurance", Icon: Shield },
              { id: "banking", Icon: Building2 }
            ].map((useCaseItem, index) => {
              const useCase = useCases.find(uc => uc.id === useCaseItem.id);
              const IconComponent = useCaseItem.Icon;
              if (!useCase) return null;
              
              return (
                <motion.div
                  key={useCase.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link to={`/use-cases/${useCase.id}`}>
                    <Card className="h-full group hover:shadow-lg transition-all duration-300 cursor-pointer border-border/30 hover:border-noreja-main/40 hover:scale-105">
                      <CardContent className="p-6 text-center">
                        <div className="flex justify-center mb-4">
                          <div className="w-16 h-16 rounded-full bg-noreja-main/10 group-hover:bg-noreja-main/20 flex items-center justify-center transition-colors">
                            <IconComponent className="w-8 h-8 text-foreground" />
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold group-hover:text-noreja-main transition-colors">
                          {useCase.title[language]}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-2">
                          {useCase.shortDescription[language]}
                        </p>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="mt-4 group-hover:text-noreja-main"
                        >
                          {t.pages.successStories.useCasesSection?.buttonLabel || "Learn More"}
                          <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partner CTA Section */}
      <section className="px-4 lg:px-8 pb-20">
        <div className="w-full max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-background/95 px-8 py-12 text-center shadow-xl shadow-noreja-main/10">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-noreja-main/10 via-transparent to-noreja-secondary/20 opacity-70" />
              <div className="relative z-10 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  {t.pages.successStories.partnerSection.title}{" "}
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    {t.pages.successStories.partnerSection.highlight}
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  {t.pages.successStories.partnerSection.subtitle}
                </p>
                <Button
                  size="lg"
                  variant="secondary"
                  className="group"
                  asChild
                >
                  <Link to="/partners">
                    {t.pages.successStories.partnerSection.buttonLabel}
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Teasers Section */}
      <HubSpotBlogTeaser />
      </div>
    </div>
  );
};

export default SuccessStories;