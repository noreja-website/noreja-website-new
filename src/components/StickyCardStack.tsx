import { useState, useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

const StickyCardStack = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Card content data
  const cards = [
    {
      id: 1,
      title: "Process Automation",
      description: "Streamline your workflows with intelligent automation",
      gradient: "from-blue-500/20 to-blue-600/20",
      border: "border-blue-500/30",
      shadow: "shadow-blue-500/20"
    },
    {
      id: 2,
      title: "Data Integration", 
      description: "Connect all your systems seamlessly",
      gradient: "from-emerald-500/20 to-emerald-600/20",
      border: "border-emerald-500/30",
      shadow: "shadow-emerald-500/20"
    },
    {
      id: 3,
      title: "Analytics Dashboard",
      description: "Get insights from your data in real-time",
      gradient: "from-purple-500/20 to-purple-600/20",
      border: "border-purple-500/30",
      shadow: "shadow-purple-500/20"
    },
    {
      id: 4,
      title: "Collaboration Tools",
      description: "Work together more effectively",
      gradient: "from-orange-500/20 to-orange-600/20",
      border: "border-orange-500/30",
      shadow: "shadow-orange-500/20"
    }
  ];

  // Intersection Observer for scroll detection
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    stepRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveIndex(index);
            }
          });
        },
        {
          root: null,
          rootMargin: "-40% 0% -40% 0%", // Trigger when step is in middle 20% of screen
          threshold: 0
        }
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);


  return (
    <section id="sticky-stack" className="relative h-[500vh]">
      {/* Pinned viewport */}
      <div className="sticky top-0 h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/20 overflow-hidden">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full">
          
          {/* Text content */}
          <div className="order-2 md:order-1 text-center md:text-left">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-foreground mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Innovation in Motion
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Experience the seamless flow of technology and creativity as you scroll through our solutions
            </motion.p>
            
            {/* Accessibility: Screen reader announcement */}
            <div 
              className="sr-only" 
              aria-live="polite" 
              aria-atomic="true"
            >
              Currently viewing: {cards[activeIndex].title}
            </div>
          </div>

          {/* Card stack */}
          <div className="order-1 md:order-2 relative h-80 md:h-96">
            {cards.map((card, index) => (
              <motion.div
                key={card.id}
                className={`absolute inset-0 rounded-2xl border backdrop-blur-sm ${card.gradient} ${card.border}`}
                style={{
                  willChange: shouldReduceMotion ? 'auto' : 'transform',
                  zIndex: activeIndex === index ? 10 : 5 - Math.abs(activeIndex - index)
                }}
                initial={false}
                animate={{
                  opacity: activeIndex === index ? 1 : 0,
                  scale: activeIndex === index ? 1 : 0.92,
                  filter: activeIndex === index ? 'blur(0px)' : 'blur(2px)'
                }}
                transition={shouldReduceMotion ? undefined : {
                  duration: 0.5,
                  ease: "easeInOut"
                }}
              >
                <div className={`absolute inset-0 rounded-2xl shadow-2xl ${card.shadow}`} />
                <div className="relative h-full flex flex-col items-center justify-center p-8 text-center">
                  <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Invisible step markers for scroll detection */}
      {cards.map((_, index) => (
        <div
          key={index}
          ref={(el) => (stepRefs.current[index] = el)}
          className="h-screen w-full absolute pointer-events-none"
          style={{
            top: `${100 + (index * 100)}vh`
          }}
          aria-hidden="true"
        />
      ))}
    </section>
  );
};

export default StickyCardStack;