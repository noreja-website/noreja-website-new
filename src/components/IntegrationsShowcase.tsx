import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

type IntegrationLogo = {
  alt: string;
  src: string;
  size?: 'regular' | 'large' | 'xlarge';
};

// Dynamically import all images from the integrations folder
const integrationImages = import.meta.glob<{ default: string }>(
  '../assets/integrations/*.{png,jpg,jpeg,svg,webp}',
  { eager: true }
);

// Convert the imported images to IntegrationLogo format
const DEFAULT_LOGOS: IntegrationLogo[] = Object.entries(integrationImages).map(
  ([path, module]) => {
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
  }
);

export interface IntegrationsShowcaseProps {
  title?: string;
  subtitle?: string;
  logos?: IntegrationLogo[];
  rows?: number;
}

function buildRows(all: IntegrationLogo[], rows: number): IntegrationLogo[][] {
  if (all.length === 0) return [];
  const result: IntegrationLogo[][] = [];
  for (let i = 0; i < rows; i++) {
    // Offset each row slightly so columns are staggered
    const offset = (i * Math.floor(all.length / rows)) % all.length;
    const row = [...all.slice(offset), ...all.slice(0, offset)];
    result.push(row);
  }
  return result;
}

export const IntegrationsShowcase: React.FC<IntegrationsShowcaseProps> = ({
  title,
  subtitle,
  logos = DEFAULT_LOGOS,
  rows = 4
}) => {
  const { t } = useLanguage();
  const rowsData = buildRows(logos, rows);
  
  // Use translations as defaults if no props are provided
  const displayTitle = title || `${t.integrations.title} ${t.integrations.titleHighlight}`;
  const displaySubtitle = subtitle || t.integrations.subtitle;
  return (
    <section className="relative py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="max-w-xl">
            <span className="inline-block rounded-full bg-primary/10 text-primary text-xs font-medium tracking-wide px-4 py-2 mb-6">
              {t.integrations.badge}
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-foreground">
              <span className="text-primary">{t.integrations.title}</span> {t.integrations.titleHighlight}
            </h2>
            <p className="text-muted-foreground mt-6">{displaySubtitle}</p>
            {/*<div className="flex gap-3 mt-8">
              <a
                href="#integrations"
                className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-5 py-3 text-sm font-medium shadow transition-opacity hover:opacity-90"
              >
                {t.integrations.discoverIntegrations}
              </a>
            </div>*/}
          </div>

          <div className="relative w-full">
            <div className="grid grid-cols-4 gap-4" aria-hidden>
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
      </div>
    </section>
  );
};

const VerticalTicker: React.FC<{ items: IntegrationLogo[]; reverse?: boolean }> = ({
  items,
  reverse = false
}) => {
  // Duplicate list for seamless loop
  const sequence = [...items, ...items];
  return (
    <div className="relative h-[520px] overflow-hidden rounded-xl bg-secondary/60">
      <div
        className={
          "absolute left-0 top-0 flex w-full flex-col gap-4 animate-[marquee_30s_linear_infinite] " +
          (reverse ? "[animation-direction:reverse]" : "")
        }
      >
        {sequence.map((logo, idx) => {
          const sizeClass = 
            logo.size === 'xlarge' ? 'max-h-32 max-w-32' :
            logo.size === 'large' ? 'max-h-16 max-w-16' :
            'max-h-12 max-w-12';
          
          return (
            <div
              key={idx}
              className="mx-auto grid h-24 w-24 place-content-center rounded-xl bg-white shadow-sm ring-1 ring-border"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className={`${sizeClass} object-contain opacity-90`}
                loading="lazy"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default IntegrationsShowcase;


