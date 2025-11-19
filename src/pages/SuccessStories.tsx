import { motion } from "framer-motion";
import { ExternalLink, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HubSpotBlogTeaser } from "@/components/HubSpotBlogTeaser";
import { successStories } from "@/lib/successStories";
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
                      <Card className="h-full group hover:shadow-lg transition-all duration-300 cursor-pointer border-border/40 hover:border-noreja-main/30 max-w-4xl mx-auto">
                        <CardHeader className="pb-6">
                          {/* Company Logo */}
                          <div className="w-full h-40 mb-6 overflow-hidden rounded-lg bg-muted flex items-center justify-center">
                            <img
                              src={story.logoUrl}
                              alt={`${story.companyName} logo`}
                              className="max-w-full max-h-full object-contain transition-transform group-hover:scale-105"
                              loading="lazy"
                              onClick={() => window.open(story.externalUrl, '_blank')}
                            />
                          </div>
                          
                          {/* Company Info */}
                          <div className="space-y-3">
                            <h2 className="text-2xl font-bold group-hover:text-noreja-main transition-colors text-center">
                              {story.companyName}
                            </h2>
                            <div className="flex flex-wrap gap-2 justify-center">
                              <Badge variant="secondary" className="text-sm px-3 py-1">
                                {story.industry}
                              </Badge>
                              <Badge variant="outline" className="text-sm px-3 py-1">
                                {story.company_size}
                              </Badge>
                            </div>
                          </div>
                        </CardHeader>
                        
                        <CardContent className="pt-0 px-8">
                          {/* Summary */}
                          <CardDescription className="text-base leading-relaxed mb-6 text-center">
                            {story.summary}
                          </CardDescription>
                          
                          {/* Key Stat */}
                          {story.keyStat && (
                            <div className="flex items-center justify-center gap-3 mb-6 p-4 bg-noreja-main/5 rounded-lg border border-noreja-main/10">
                              <TrendingUp className="w-6 h-6 text-noreja-main" />
                              <div className="text-center">
                                <div className="font-bold text-noreja-main text-2xl">
                                  {story.keyStat.value}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  {story.keyStat.metric}
                                </div>
                              </div>
                            </div>
                          )}
                          
                          {/* Read More Button */}
                          <Button
                            variant="outline"
                            size="lg"
                            className="w-full group-hover:bg-noreja-main group-hover:text-white group-hover:border-noreja-main transition-all"
                            onClick={() => window.open(story.externalUrl, '_blank')}
                          >
                            {t.pages.successStories.readCaseStudy}
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </Button>
                        </CardContent>
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
                  className={`w-4 h-4 rounded-full transition-all duration-200 hover:scale-110 ${
                    index + 1 === current 
                      ? 'bg-noreja-main shadow-lg shadow-noreja-main/30' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/60'
                  }`}
                  onClick={() => handleDotClick(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
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
                  className="group bg-noreja-main text-white hover:bg-noreja-main/90"
                  asChild
                >
                  <Link to="/partners">
                    {t.pages.successStories.partnerSection.buttonLabel}
                    <ExternalLink className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
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