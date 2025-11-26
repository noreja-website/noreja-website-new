import React, { useMemo, useEffect, useState } from 'react';

// Dynamically import all customer logos (lazy loading)
const customerImages = import.meta.glob<{ default: string }>(
  '../assets/customers/*.{png,jpg,jpeg,svg,webp}',
  { eager: false }
);

// Dynamically import all partner logos (white versions) (lazy loading)
const partnerImages = import.meta.glob<{ default: string }>(
  '../assets/partners/partners_white/*.{png,jpg,jpeg,svg,webp}',
  { eager: false }
);

// Fisher-Yates shuffle function
function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

type LogoSize = 'regular' | 'large' | 'xlarge';

interface Logo {
  name: string;
  logo: string;
  size: LogoSize;
}

const LogoBanner: React.FC = () => {
  const [loadedLogos, setLoadedLogos] = useState<Logo[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load images on mount
  useEffect(() => {
    const loadLogos = async () => {
      // Process customer logos
      const customerEntries = Object.entries(customerImages);
      const customerLogosPromises = customerEntries.map(async ([path, moduleLoader]) => {
        const module = await moduleLoader();
        const filename = path.split('/').pop()?.replace(/\.(png|jpg|jpeg|svg|webp)$/, '') || '';
        
        // Determine size based on filename postfix
        let size: LogoSize = 'regular';
        if (filename.toLowerCase().includes('_xlarge')) {
          size = 'xlarge';
        } else if (filename.toLowerCase().includes('_large')) {
          size = 'large';
        }
        
        const name = filename
          .replace(/_logo|_white|-logo|_large|_xlarge/gi, '')
          .replace(/[-_]/g, ' ')
          .trim()
          .split(' ')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
        
        return {
          name,
          logo: module.default,
          size
        };
      });

      // Process partner logos
      const partnerEntries = Object.entries(partnerImages);
      const partnerLogosPromises = partnerEntries.map(async ([path, moduleLoader]) => {
        const module = await moduleLoader();
        const filename = path.split('/').pop()?.replace(/\.(png|jpg|jpeg|svg|webp)$/, '') || '';
        
        // Determine size based on filename postfix
        let size: LogoSize = 'regular';
        if (filename.toLowerCase().includes('_xlarge')) {
          size = 'xlarge';
        } else if (filename.toLowerCase().includes('_large')) {
          size = 'large';
        }
        
        const name = filename
          .replace(/_logo|_white|-logo|-white|_large|_xlarge/gi, '')
          .replace(/[-_]/g, ' ')
          .trim()
          .split(' ')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
        
        return {
          name,
          logo: module.default,
          size
        };
      });
      
      const customerLogos = await Promise.all(customerLogosPromises);
      const partnerLogos = await Promise.all(partnerLogosPromises);
      
      // Combine all logos with customers first, then partners (no randomization)
      const allLogos: Logo[] = [...customerLogos, ...partnerLogos];
      setLoadedLogos(allLogos);
      setIsLoading(false);
    };
    
    loadLogos();
  }, []);

  // Memoize duplicated logos to prevent re-creation on every render
  const duplicatedLogos = useMemo(() => {
    return [...loadedLogos, ...loadedLogos, ...loadedLogos, ...loadedLogos];
  }, [loadedLogos]);

  if (isLoading) {
    return null; // Or a loading spinner
  }

  return (
    <div className="relative overflow-hidden py-8 w-full">
      <div className="flex animate-scroll w-full">
        {duplicatedLogos.map((company, index) => {
          // Apply size classes based on logo size
          const sizeClass = 
            company.size === 'xlarge' ? 'max-h-20 max-w-32' :
            company.size === 'large' ? 'max-h-16 max-w-24' :
            'max-h-12 max-w-20';
          
          const containerClass =
            company.size === 'xlarge' ? 'w-32 h-20' :
            company.size === 'large' ? 'w-24 h-16' :
            'w-20 h-12';
          
          return (
            <div
              key={`${company.name}-${index}`}
              className="flex-shrink-0 mx-8 flex items-center justify-center max-w-fit"
            >
              <div className={`relative ${containerClass} flex items-center justify-center opacity-60 hover:opacity-80 transition-opacity duration-300`}>
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className={`${sizeClass} object-contain filter grayscale hover:grayscale-0 transition-all duration-300`}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Gradient overlays for smooth edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background/20 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background/20 to-transparent pointer-events-none" />
    </div>
  );
};

export default LogoBanner;
