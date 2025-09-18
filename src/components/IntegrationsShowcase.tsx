import React from "react";

type IntegrationLogo = {
  alt: string;
  src: string;
};

const DEFAULT_LOGOS: IntegrationLogo[] = [
  { alt: "GitHub", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { alt: "GitLab", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" },
  { alt: "Jira", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
  { alt: "Trello", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg" },
  { alt: "Slack", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg" },
  { alt: "Vercel", src: "https://assets.vercel.com/image/upload/front/assets/design/vercel-triangle-black.svg" },
  { alt: "Oracle", src: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" },
  { alt: "Azure", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
  { alt: "AWS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
  { alt: "Google Cloud", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" }
];

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
  title = "Over 100 Integrations available",
  subtitle =
    "Simply connect and get started: With numerous integrations, connecting your IT landscape is child's play.",
  logos = DEFAULT_LOGOS,
  rows = 4
}) => {
  const rowsData = buildRows(logos, rows);
  return (
    <section className="relative py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="max-w-xl">
            <span className="inline-block rounded-full bg-primary/10 text-primary text-xs font-medium tracking-wide px-4 py-2 mb-6">
              Integrations
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-foreground">
              <span className="text-primary">Over 100</span> Integrations
              <br /> available
            </h2>
            <p className="text-muted-foreground mt-6">{subtitle}</p>
            <div className="flex gap-3 mt-8">
              <a
                href="#integrations"
                className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-5 py-3 text-sm font-medium shadow transition-opacity hover:opacity-90"
              >
                Discover integrations
              </a>
            </div>
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
    <div className="relative h-[520px] overflow-hidden rounded-xl bg-secondary/40">
      <div
        className={
          "absolute left-0 top-0 flex w-full flex-col gap-4 animate-[marquee_18s_linear_infinite] " +
          (reverse ? "[animation-direction:reverse]" : "")
        }
      >
        {sequence.map((logo, idx) => (
          <div
            key={idx}
            className="mx-auto grid h-24 w-24 place-content-center rounded-xl bg-background/70 shadow-sm ring-1 ring-border"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="max-h-12 max-w-12 object-contain opacity-90"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default IntegrationsShowcase;


