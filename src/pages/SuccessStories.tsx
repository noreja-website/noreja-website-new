import { motion } from "framer-motion";
import { ExternalLink, TrendingUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HubSpotBlogTeaser } from "@/components/HubSpotBlogTeaser";
import { successStories } from "@/lib/successStories";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import { useEffect, useState } from "react";

const SuccessStories = () => {
  const { t } = useLanguage();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

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
              {t.pages.successStories.title} <span className="text-noreja-main">{t.pages.successStories.titleHighlight}</span>
            </h1>
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
                            <CardTitle className="text-2xl font-bold group-hover:text-noreja-main transition-colors text-center">
                              {story.companyName}
                            </CardTitle>
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

      {/* Blog Teasers Section */}
      <HubSpotBlogTeaser />
    </div>
  );
};

export default SuccessStories;