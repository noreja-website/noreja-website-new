import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

type IntegrationLogo = {
  alt: string;
  src: string;
  size?: 'regular' | 'large' | 'xlarge';
};

// Lazy load images (will be loaded when section comes into view)
const integrationImages = import.meta.glob<{ default: string }>(
  '../assets/integrations/*.{png,jpg,jpeg,svg,webp}',
  { eager: false }
);

// Cache for processed logos
let logosCache: IntegrationLogo[] | null = null;

// Process images into logo objects
const processLogos = async (): Promise<IntegrationLogo[]> => {
  if (logosCache) {
    return logosCache;
  }

  const imageEntries = Object.entries(integrationImages);
  const logoPromises = imageEntries.map(async ([path, moduleLoader]) => {
    const module = await moduleLoader();
    const filename = path.split('/').pop()?.replace(/\.(png|jpg|jpeg|svg|webp)$/, '') || '';
    
    let size: 'regular' | 'large' | 'xlarge' = 'regular';
    if (filename.toLowerCase().includes('_xlarge')) {
      size = 'xlarge';
    } else if (filename.toLowerCase().includes('_large')) {
      size = 'large';
    }
    
    const alt = filename
      .replace(/_logo|_white|-logo|_large|_xlarge/gi, '')
      .replace(/[-_]/g, ' ')
      .trim()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    return {
      alt,
      src: module.default,
      size
    };
  });

  logosCache = await Promise.all(logoPromises);
  return logosCache;
};

export interface IntegrationsShowcaseProps {
  title?: string;
  subtitle?: string;
  logos?: IntegrationLogo[];
  rows?: number;
}

// Fisher-Yates shuffle with seed for reproducibility
function seededShuffle<T>(array: T[], seed: number): T[] {
  const arr = [...array];
  let currentSeed = seed;
  const random = () => {
    currentSeed = (currentSeed * 9301 + 49297) % 233280;
    return currentSeed / 233280;
  };
  
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function buildRows(all: IntegrationLogo[], rows: number): IntegrationLogo[][] {
  if (all.length === 0) return [];
  
  // Shuffle all logos once with a consistent seed for reproducibility
  const shuffled = seededShuffle(all, 42);
  
  // Create rows array
  const result: IntegrationLogo[][] = Array.from({ length: rows }, () => []);
  
  // Calculate how many logos per column for smooth scrolling (1.5x the total logos)
  const logosPerColumn = Math.ceil(shuffled.length * 1.5);
  
  // Distribute logos across rows using round-robin with offset
  // Each row starts at a different position to spread logos out
  for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
    const offset = Math.floor((rowIndex * shuffled.length) / rows);
    
    for (let i = 0; i < logosPerColumn; i++) {
      const logoIndex = (offset + i) % shuffled.length;
      result[rowIndex].push(shuffled[logoIndex]);
    }
  }
  
  return result;
}

export const IntegrationsShowcase: React.FC<IntegrationsShowcaseProps> = ({
  title,
  subtitle,
  logos: providedLogos,
  rows = 4
}) => {
  const { t } = useLanguage();
  const sectionRef = React.useRef<HTMLElement>(null);
  const [loadedLogos, setLoadedLogos] = React.useState<IntegrationLogo[]>(providedLogos || []);
  const [isLoading, setIsLoading] = React.useState(!providedLogos);
  
  // Use Intersection Observer to lazy load images when section comes into view
  React.useEffect(() => {
    // If logos are provided, skip lazy loading
    if (providedLogos) {
      return;
    }

    // If logos are already loaded, skip observer setup
    if (loadedLogos.length > 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Start loading when section is within 200px of viewport
          if (entry.isIntersecting && loadedLogos.length === 0) {
            setIsLoading(true);
            processLogos().then((logos) => {
              setLoadedLogos(logos);
              setIsLoading(false);
            });
            // Disconnect observer after loading starts
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '200px', // Start loading 200px before section is visible
        threshold: 0
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [providedLogos, loadedLogos.length]);

  // Use fewer rows on mobile (2), medium (3), and more on desktop (4)
  const [screenSize, setScreenSize] = React.useState<'mobile' | 'medium' | 'desktop'>('desktop');
  
  React.useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setScreenSize('mobile');
      } else if (width < 1024) {
        setScreenSize('medium');
      } else {
        setScreenSize('desktop');
      }
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);
  
  const isStackedLayout = screenSize !== 'desktop';
  const actualRows = screenSize === 'mobile' ? 2 : screenSize === 'medium' ? 3 : rows;
  
  // Memoize rowsData to prevent recalculation on every render
  const rowsData = React.useMemo(() => {
    return buildRows(loadedLogos, actualRows);
  }, [loadedLogos, actualRows]);
  
  // Use translations as defaults if no props are provided
  const displaySubtitle = subtitle || t.integrations.subtitle;

  const TextContent = () => (
    <>
      {title ? (
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
          {title}
        </h2>
      ) : (
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
          <span className="whitespace-nowrap">{t.integrations.title}</span>{" "}
          <span className="bg-gradient-primary bg-clip-text text-transparent whitespace-nowrap">
            {t.integrations.titleHighlight}
          </span>
        </h2>
      )}
      <p className="text-xl text-muted-foreground">{displaySubtitle}</p>
    </>
  );
  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      {isStackedLayout && (
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[460px] sm:h-[520px] bg-gradient-to-b from-background via-background/95 to-transparent"
          aria-hidden
        />
      )}
      <div className="container mx-auto px-6">
        {isStackedLayout ? (
          <div className="relative flex flex-col gap-10 py-12 sm:py-16">
            <div className="relative z-10 max-w-2xl sm:max-w-3xl mx-auto text-center sm:text-left">
              <TextContent />
            </div>
            <div className="relative w-full z-0 overflow-hidden">
              {isLoading ? (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4" aria-hidden>
                  {Array.from({ length: actualRows }).map((_, idx) => (
                    <div key={idx} className="h-[320px] md:h-[520px] rounded-xl bg-muted/50 animate-pulse" />
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4" aria-hidden>
                  {rowsData.map((row, rowIndex) => (
                    <VerticalTicker
                      key={rowIndex}
                      items={row}
                      reverse={rowIndex % 2 === 1}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Text Content */}
            <div className="max-w-2xl lg:max-w-xl w-full relative pt-20">
              <TextContent />
            </div>

            {/* Right: Integrations Animation Grid */}
            <div className="relative w-full z-0 overflow-hidden">
              {isLoading ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" aria-hidden>
                  {Array.from({ length: actualRows }).map((_, idx) => (
                    <div key={idx} className="h-[320px] md:h-[520px] rounded-xl bg-muted/50 animate-pulse" />
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" aria-hidden>
                  {rowsData.map((row, rowIndex) => (
                    <VerticalTicker
                      key={rowIndex}
                      items={row}
                      reverse={rowIndex % 2 === 1}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

// Logo image component
const LogoImage: React.FC<{ logo: IntegrationLogo }> = ({ logo }) => {
  const sizeClass = 
    logo.size === 'xlarge' ? 'max-h-32 max-w-32' :
    logo.size === 'large' ? 'max-h-16 max-w-16' :
    'max-h-12 max-w-12';
  
  return (
    <div className="mx-auto grid h-24 w-24 place-content-center rounded-xl bg-white/90 shadow-sm ring-1 ring-border">
      <img
        src={logo.src}
        alt={logo.alt}
        className={`${sizeClass} object-contain opacity-90`}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
};

const VerticalTicker: React.FC<{ items: IntegrationLogo[]; reverse?: boolean }> = React.memo(({
  items,
  reverse = false
}) => {
  // Duplicate items for seamless scrolling
  const sequence = React.useMemo(() => [...items, ...items], [items]);
  
  return (
    <div className="relative h-[320px] md:h-[520px] overflow-hidden rounded-xl bg-transparent z-0">
      <div
        className={
          "absolute left-0 top-0 flex w-full flex-col gap-4 animate-[marquee_70s_linear_infinite] " +
          (reverse ? "[animation-direction:reverse]" : "")
        }
      >
        {sequence.map((logo, idx) => {
          // Use logo src URL as key (stable since loaded eagerly) + index for uniqueness
          const key = `${logo.src}-${idx}`;
          return <LogoImage key={key} logo={logo} />;
        })}
      </div>
      {/* Fade overlays at top and bottom */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background to-transparent pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none z-0" />
    </div>
  );
});

VerticalTicker.displayName = 'VerticalTicker';

export default IntegrationsShowcase;


