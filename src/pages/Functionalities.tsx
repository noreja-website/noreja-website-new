import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { HubSpotBlogTeaser } from "@/components/HubSpotBlogTeaser";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useRef } from "react";
import { LayoutDashboard, Search, Brain, Wrench, Code, ArrowRight, LucideIcon } from "lucide-react";
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import dashboardImg from "@/assets/platform/dashboard.png";
import analyzerImg from "@/assets/platform/analyzer.png";
import minervaImg from "@/assets/platform/minerva.png";
import builderImg from "@/assets/platform/builder.png";
import workbenchImg from "@/assets/platform/workbench.png";

// Feature Section Component with advanced scroll animations
interface FeatureSectionProps {
  feature: {
    id: string;
    icon: LucideIcon;
    title: string;
    description: string;
    imagePath: string | null;
  };
  Icon: LucideIcon;
  layout: {
    imageOrder: number;
    imageSize: string;
    gridCols: string;
    imageOffset: string;
  };
  index: number;
  animationStyle: {
    imageInitial: any;
    imageAnimate: any;
    textInitial: any;
    textAnimate: any;
    iconInitial: any;
    iconAnimate: any;
    titleInitial: any;
    titleAnimate: any;
    descInitial: any;
    descAnimate: any;
  };
}

const FeatureSection = ({ feature, Icon, layout, index, animationStyle }: FeatureSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  
  // Use scroll-based animations for parallax effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  // Parallax transforms for image
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.8]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.95]);
  
  // Parallax transforms for text
  const textY = useTransform(scrollYProgress, [0, 1], [0, 30]);
  
  // In-view detection for triggering animations
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const imageInView = useInView(imageRef, { once: true, margin: "-50px" });
  const textInView = useInView(textRef, { once: true, margin: "-50px" });
  
  // Animation variants with staggered delays
  const imageVariants = {
    initial: animationStyle.imageInitial,
    animate: imageInView ? animationStyle.imageAnimate : animationStyle.imageInitial,
  };
  
  const textVariants = {
    initial: animationStyle.textInitial,
    animate: textInView ? animationStyle.textAnimate : animationStyle.textInitial,
  };
  
  const iconVariants = {
    initial: animationStyle.iconInitial,
    animate: isInView ? animationStyle.iconAnimate : animationStyle.iconInitial,
  };
  
  const titleVariants = {
    initial: animationStyle.titleInitial,
    animate: textInView ? animationStyle.titleAnimate : animationStyle.titleInitial,
  };
  
  const descVariants = {
    initial: animationStyle.descInitial,
    animate: textInView ? animationStyle.descAnimate : animationStyle.descInitial,
  };
  
  // Transition configurations
  const imageTransition = {
    duration: 0.8,
    ease: [0.16, 1, 0.3, 1] as [number, number, number, number], // Custom easing for smooth motion
    delay: index * 0.1,
  };
  
  const textTransition = {
    duration: 0.8,
    ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    delay: index * 0.1 + 0.2,
  };
  
  const iconTransition = {
    duration: 0.6,
    ease: [0.34, 1.56, 0.64, 1] as [number, number, number, number], // Bounce effect
    delay: index * 0.1 + 0.3,
  };
  
  const titleTransition = {
    duration: 0.6,
    ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    delay: index * 0.1 + 0.4,
  };
  
  const descTransition = {
    duration: 0.6,
    ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    delay: index * 0.1 + 0.5,
  };

  return (
    <motion.section
      ref={sectionRef}
      id={feature.id}
      className="scroll-mt-24 py-8"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className={`grid ${layout.gridCols} gap-8 lg:gap-12 items-stretch overflow-hidden`}>
        {/* Image Section with Parallax */}
        <motion.div
          ref={imageRef}
          className={`${layout.imageOrder === 1 ? "lg:order-1" : "lg:order-2"} ${layout.imageOffset} h-full`}
          style={{ y: imageY, opacity: imageOpacity, scale: imageScale }}
        >
          <motion.div
            className="relative w-full h-full overflow-visible group"
            variants={imageVariants}
            initial="initial"
            animate="animate"
            transition={imageTransition}
            style={{
              transformStyle: "preserve-3d",
              perspective: "1000px",
            }}
          >
            {/* Placeholder for image - replace with actual image when available */}
            {feature.imagePath ? (
              <>
                <motion.img
                  src={feature.imagePath}
                  alt={feature.title}
                  className="relative z-10 w-full h-full object-contain transition-all duration-500"
                  whileHover={{ scale: 1.05 }}
                />
              </>
            ) : (
              <div className="relative z-10 w-full h-full flex items-center justify-center bg-background">
                <motion.div
                  className="text-center space-y-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={imageInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
                >
                  <motion.div
                    className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/30 transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon className="w-12 h-12 text-noreja-tertiary" />
                  </motion.div>
                  <p className="text-sm text-muted-foreground px-4">
                    Image placeholder for {feature.title}
                  </p>
                </motion.div>
              </div>
            )}
          </motion.div>
        </motion.div>

        {/* Text Section with Staggered Animations */}
        <motion.div
          ref={textRef}
          className={`${layout.imageOrder === 1 ? "lg:order-2" : "lg:order-1"}`}
          style={{ y: textY }}
          variants={textVariants}
          initial="initial"
          animate="animate"
          transition={textTransition}
        >
          <div className="space-y-6 lg:py-4 pb-8">
            <motion.div
              className="flex items-center gap-4 mb-6"
              initial={{ opacity: 0 }}
              animate={textInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center border border-primary/20 flex-shrink-0"
                variants={iconVariants}
                initial="initial"
                animate="animate"
                transition={iconTransition}
                whileHover={{ scale: 1.1, rotate: 5, boxShadow: "0 0 20px hsl(var(--noreja-tertiary) / 0.3)" }}
              >
                <Icon className="w-8 h-8 text-noreja-tertiary" />
              </motion.div>
              <motion.h2
                className="text-3xl lg:text-4xl font-bold text-foreground"
                variants={titleVariants}
                initial="initial"
                animate="animate"
                transition={titleTransition}
              >
                {feature.title}
              </motion.h2>
            </motion.div>
            <motion.div
              className="text-lg lg:text-xl text-muted-foreground leading-relaxed space-y-4"
              variants={descVariants}
              initial="initial"
              animate="animate"
              transition={descTransition}
            >
              {feature.description.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph.trim()}</p>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

const Functionalities = () => {
  const { t, language } = useLanguage();

  // Language-specific heading texts
  const headingTexts = {
    en: {
      fixedText: "Discover The",
      rotatingWords: ["Dashboard", "Analyzer", "Workbench", "Builder", "Minerva AI"]
    },
    de: {
      fixedText: "Entdecke",
      rotatingWords: ["das Dashboard", "den Analyzer", "die Workbench", "den Builder", "Minerva AI"]
    }
  };

  const currentHeading = headingTexts[language];

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const features = [
    {
      id: "security",
      icon: LayoutDashboard,
      title: t.functionalities.features.security.title,
      description: t.functionalities.features.security.description,
      imagePath: dashboardImg
    },
    {
      id: "data-integration",
      icon: Search,
      title: t.functionalities.features.dataIntegration.title,
      description: t.functionalities.features.dataIntegration.description,
      imagePath: analyzerImg
    },
    {
      id: "ai-analytics",
      icon: Brain,
      title: t.functionalities.features.aiAnalytics.title,
      description: t.functionalities.features.aiAnalytics.description,
      imagePath: minervaImg
    },
    {
      id: "real-time",
      icon: Wrench,
      title: t.functionalities.features.realTime.title,
      description: t.functionalities.features.realTime.description,
      imagePath: builderImg
    },
    {
      id: "workbench",
      icon: Code,
      title: t.functionalities.features.workbench.title,
      description: t.functionalities.features.workbench.description,
      imagePath: workbenchImg
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative">
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
                {t.functionalities.subtitle}
              </p>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Features Section with Gradient Background */}
      <div className="relative overflow-hidden" style={{
        background: `
          linear-gradient(135deg, hsl(var(--background)) 0%, hsl(var(--noreja-main) / 0.14) 50%, hsl(var(--background)) 100%),
          radial-gradient(ellipse 1000px 800px at 50% 50%, hsl(var(--noreja-secondary) / 0.10) 0%, transparent 60%)
        `
      }}>
        {/* Gradient fade from previous section */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent pointer-events-none z-0" />
        {/* Gradient fade to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background pointer-events-none z-0" />
        
        <div className="relative z-10 w-full max-w-[90rem] mx-auto px-6 lg:px-12 py-20">
          <div className="space-y-32 lg:space-y-40">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              
              // Varied layout patterns with consistent 30% text / 70% image split
              const layouts = [
                { 
                  imageOrder: 1, 
                  imageSize: "h-full", 
                  gridCols: "lg:grid-cols-[0.7fr_0.3fr]",
                  imageOffset: ""
                },
                { 
                  imageOrder: 2, 
                  imageSize: "h-full", 
                  gridCols: "lg:grid-cols-[0.3fr_0.7fr]",
                  imageOffset: "lg:mt-8"
                },
                { 
                  imageOrder: 1, 
                  imageSize: "h-full", 
                  gridCols: "lg:grid-cols-[0.7fr_0.3fr]",
                  imageOffset: ""
                },
                { 
                  imageOrder: 2, 
                  imageSize: "h-full", 
                  gridCols: "lg:grid-cols-[0.3fr_0.7fr]",
                  imageOffset: "lg:-mt-8"
                },
                { 
                  imageOrder: 1, 
                  imageSize: "h-full", 
                  gridCols: "lg:grid-cols-[0.7fr_0.3fr]",
                  imageOffset: "lg:mt-12"
                }
              ];
              
              const layout = layouts[index % layouts.length];
              
              // Different animation styles for each section
              const animationStyles = [
                {
                  // Section 1: Slide from left with scale
                  imageInitial: { opacity: 0, x: -100, scale: 0.8, rotateY: -15 },
                  imageAnimate: { opacity: 1, x: 0, scale: 1, rotateY: 0 },
                  textInitial: { opacity: 0, x: 50, scale: 0.95 },
                  textAnimate: { opacity: 1, x: 0, scale: 1 },
                  iconInitial: { opacity: 0, scale: 0, rotate: -180 },
                  iconAnimate: { opacity: 1, scale: 1, rotate: 0 },
                  titleInitial: { opacity: 0, y: 20 },
                  titleAnimate: { opacity: 1, y: 0 },
                  descInitial: { opacity: 0, y: 20 },
                  descAnimate: { opacity: 1, y: 0 },
                },
                {
                  // Section 2: Slide from right with parallax
                  imageInitial: { opacity: 0, x: 100, scale: 0.9, rotateY: 15 },
                  imageAnimate: { opacity: 1, x: 0, scale: 1, rotateY: 0 },
                  textInitial: { opacity: 0, x: -50, scale: 0.95 },
                  textAnimate: { opacity: 1, x: 0, scale: 1 },
                  iconInitial: { opacity: 0, scale: 0, rotate: 180 },
                  iconAnimate: { opacity: 1, scale: 1, rotate: 0 },
                  titleInitial: { opacity: 0, y: 20 },
                  titleAnimate: { opacity: 1, y: 0 },
                  descInitial: { opacity: 0, y: 20 },
                  descAnimate: { opacity: 1, y: 0 },
                },
                {
                  // Section 3: Fade with scale
                  imageInitial: { opacity: 0, scale: 0.7, y: 50 },
                  imageAnimate: { opacity: 1, scale: 1, y: 0 },
                  textInitial: { opacity: 0, scale: 0.95 },
                  textAnimate: { opacity: 1, scale: 1 },
                  iconInitial: { opacity: 0, scale: 0, rotate: 360 },
                  iconAnimate: { opacity: 1, scale: 1, rotate: 0 },
                  titleInitial: { opacity: 0, y: 30 },
                  titleAnimate: { opacity: 1, y: 0 },
                  descInitial: { opacity: 0, y: 30 },
                  descAnimate: { opacity: 1, y: 0 },
                },
                {
                  // Section 4: Slide up with 3D rotation
                  imageInitial: { opacity: 0, y: 100, rotateX: -20, scale: 0.85 },
                  imageAnimate: { opacity: 1, y: 0, rotateX: 0, scale: 1 },
                  textInitial: { opacity: 0, y: -50, scale: 0.95 },
                  textAnimate: { opacity: 1, y: 0, scale: 1 },
                  iconInitial: { opacity: 0, scale: 0, rotate: -90 },
                  iconAnimate: { opacity: 1, scale: 1, rotate: 0 },
                  titleInitial: { opacity: 0, y: -20, scale: 0.9 },
                  titleAnimate: { opacity: 1, y: 0, scale: 1 },
                  descInitial: { opacity: 0, y: -20, scale: 0.9 },
                  descAnimate: { opacity: 1, y: 0, scale: 1 },
                },
                {
                  // Section 5: Diagonal slide with perspective
                  imageInitial: { opacity: 0, x: -80, y: 80, scale: 0.8, rotateZ: -5 },
                  imageAnimate: { opacity: 1, x: 0, y: 0, scale: 1, rotateZ: 0 },
                  textInitial: { opacity: 0, x: 80, y: -80, scale: 0.95 },
                  textAnimate: { opacity: 1, x: 0, y: 0, scale: 1 },
                  iconInitial: { opacity: 0, scale: 0, rotate: 90 },
                  iconAnimate: { opacity: 1, scale: 1, rotate: 0 },
                  titleInitial: { opacity: 0, x: 30, y: 20 },
                  titleAnimate: { opacity: 1, x: 0, y: 0 },
                  descInitial: { opacity: 0, x: 30, y: 20 },
                  descAnimate: { opacity: 1, x: 0, y: 0 },
                },
              ];
              
              const animStyle = animationStyles[index % animationStyles.length];
              
              return (
                <FeatureSection
                  key={feature.id}
                  feature={feature}
                  Icon={Icon}
                  layout={layout}
                  index={index}
                  animationStyle={animStyle}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Blog Teasers Section */}
      <div className="relative" style={{
        background: `
          linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--noreja-main) / 0.16) 40%, hsl(var(--noreja-secondary) / 0.15) 80%, hsl(var(--background)) 100%),
          radial-gradient(ellipse 1000px 700px at 70% 20%, hsl(var(--noreja-secondary) / 0.14) 0%, transparent 60%)
        `
      }}>
        {/* Gradient fade from previous section */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent pointer-events-none z-0" />
        <section className="relative z-10 py-20">
          <div className="w-full max-w-7xl mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-background/95 px-8 py-12 text-center shadow-xl shadow-noreja-main/10">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-noreja-main/10 via-transparent to-noreja-secondary/20 opacity-70" />
                <div className="relative z-10 space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    {t.pages.functionalities.learnMore}{" "}
                    <span className="bg-gradient-primary bg-clip-text text-transparent">
                      {t.pages.functionalities.learnMoreHighlight}
                    </span>
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    {t.pages.functionalities.learnMoreSubtitle}
                  </p>
                  <Button
                    size="lg"
                    variant="secondary"
                    className="group"
                    asChild
                  >
                    <Link to="/pricing">
                      {t.pages.functionalities.learnMoreCta}
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
            
            <HubSpotBlogTeaser />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Functionalities;