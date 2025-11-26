import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

type IntegrationLogo = {
  alt: string;
  src: string;
  size?: 'regular' | 'large' | 'xlarge';
};

// Dynamically import all images from the integrations folder (lazy loading)
const integrationImages = import.meta.glob<{ default: string }>(
  '../assets/integrations/*.{png,jpg,jpeg,svg,webp}',
  { eager: false }
);

// Cache for loaded logos
let logosCache: IntegrationLogo[] | null = null;

// Async function to load integration logos
const loadIntegrationLogos = async (): Promise<IntegrationLogo[]> => {
  if (logosCache) {
    return logosCache;
  }

  const imageEntries = Object.entries(integrationImages);
  const logoPromises = imageEntries.map(async ([path, moduleLoader]) => {
    const module = await moduleLoader();
    // Extract filename without extension from path
    const filename = path.split('/').pop()?.replace(/\.(png|jpg|jpeg|svg|webp)$/, '') || '';
    // Determine size based on filename postfix
    let size: 'regular' | 'large' | 'xlarge' = 'regular';
    if (filename.toLowerCase().includes('_xlarge')) {
      size = 'xlarge';
    } else if (filename.toLowerCase().includes('_large')) {
      size = 'large';
    }
    // Convert filename to readable alt text (e.g., "mysql_logo" -> "MySQL")
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
  
  // First, shuffle all logos once with a consistent seed
  const shuffled = seededShuffle(all, 42);
  
  // Distribute logos across columns in a round-robin fashion
  // This ensures each logo appears in different positions across columns
  const result: IntegrationLogo[][] = Array.from({ length: rows }, () => []);
  
  // Calculate how many times we need to go through the logos to fill all columns adequately
  const logosPerColumn = Math.ceil(shuffled.length * 1.5); // Ensure enough logos per column for smooth scrolling
  
  // Distribute logos using offset round-robin to avoid same logos appearing at same positions
  for (let columnIndex = 0; columnIndex < rows; columnIndex++) {
    // Start each column at a different offset to spread logos out
    const offset = Math.floor((columnIndex * shuffled.length) / rows);
    
    for (let i = 0; i < logosPerColumn; i++) {
      const logoIndex = (offset + i) % shuffled.length;
      result[columnIndex].push(shuffled[logoIndex]);
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
  const [loadedLogos, setLoadedLogos] = React.useState<IntegrationLogo[]>([]);
  const [isLoading, setIsLoading] = React.useState(!providedLogos);
  
  // Load logos if not provided
  React.useEffect(() => {
    if (providedLogos) {
      setLoadedLogos(providedLogos);
      setIsLoading(false);
    } else {
      loadIntegrationLogos().then(logos => {
        setLoadedLogos(logos);
        setIsLoading(false);
      });
    }
  }, [providedLogos]);

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

  if (isLoading) {
    return null; // Or a loading spinner
  }
  
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
    <section className="relative overflow-hidden">
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
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4" aria-hidden>
                {rowsData.map((row, rowIndex) => (
                  <VerticalTicker
                    key={rowIndex}
                    items={row}
                    reverse={rowIndex % 2 === 1}
                  />
                ))}
              </div>
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
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" aria-hidden>
                {rowsData.map((row, rowIndex) => (
                  <VerticalTicker
                    key={rowIndex}
                    items={row}
                    reverse={rowIndex % 2 === 1}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

const VerticalTicker: React.FC<{ items: IntegrationLogo[]; reverse?: boolean }> = ({
  items,
  reverse = false
}) => {
  // Memoize duplicated sequence to prevent re-creation on every render
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
          const sizeClass = 
            logo.size === 'xlarge' ? 'max-h-32 max-w-32' :
            logo.size === 'large' ? 'max-h-16 max-w-16' :
            'max-h-12 max-w-12';
          
          // Use stable key based on logo data, not just index
          const stableKey = `${logo.alt}-${logo.src}-${idx}`;
          
          return (
            <div
              key={stableKey}
              className="mx-auto grid h-24 w-24 place-content-center rounded-xl bg-white/90 shadow-sm ring-1 ring-border"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className={`${sizeClass} object-contain opacity-90`}
                loading="lazy"
                decoding="async"
              />
            </div>
          );
        })}
      </div>
      {/* Fade overlays at top and bottom */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background to-transparent pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none z-0" />
    </div>
  );
};

export default IntegrationsShowcase;


