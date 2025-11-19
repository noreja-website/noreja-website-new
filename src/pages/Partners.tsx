import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { partners, type PartnerCategory, type PartnerLogoSize } from "@/lib/partners";
import { useEffect, useState } from "react";
import { HubSpotContactForm } from "@/components/HubSpotContactForm";
import { AnimatedHeading } from "@/components/AnimatedHeading";

export default function Partners() {
  const { t, language } = useLanguage();

  // Language-specific heading texts
  const headingTexts = {
    en: {
      fixedText: "Partnerships That",
      rotatingWords: ["Last", "Grow", "Innovate", "Impact"]
    },
    de: {
      fixedText: "Partnerschaften, die",
      rotatingWords: ["bestehen", "wachsen", "innovieren", "Wirkung zeigen"]
    }
  };

  const currentHeading = headingTexts[language];

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const partnerList = partners.filter(
    (partner) =>
      partner.partnerType === 'businessWithQuote' ||
      partner.partnerType === 'businessWithoutQuote'
  );
  const partnerDescriptions = t.pages.partners.partnerDescriptions;
  const categoryLabels = t.pages.partners.partnerCategories;

  const partnersByCategory = partnerList.reduce<Record<string, typeof partnerList>>(
    (acc, partner) => {
      const categoryKey = partner.category ?? 'uncategorized';
      (acc[categoryKey] ??= []).push(partner);
      return acc;
    },
    {}
  );

  const allCategoryKeys = Array.from(
    new Set([
      ...Object.keys(categoryLabels),
      ...Object.keys(partnersByCategory),
    ])
  );

  const categoryOrder = allCategoryKeys
    .filter((category) => category !== 'uncategorized' && partnersByCategory[category]?.length)
    .concat(partnersByCategory.uncategorized?.length ? ['uncategorized'] : []);

  const baseLogoWrapperClass =
    "w-40 h-32 md:w-48 md:h-40 lg:w-56 lg:h-44 rounded-2xl bg-gradient-to-br from-noreja-main/10 to-noreja-main/5 flex items-center justify-center p-5 md:p-6";
  const [flippedCardId, setFlippedCardId] = useState<string | null>(null);

  const toggleCard = (partnerId: string) => {
    setFlippedCardId((current) => (current === partnerId ? null : partnerId));
  };

  const handleKeyToggle = (event: React.KeyboardEvent<HTMLDivElement>, partnerId: string) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleCard(partnerId);
    }
  };


  const logoImageClasses: Record<PartnerLogoSize, string> = {
    xsmall: "max-h-16 md:max-h-20 max-w-[4.5rem] md:max-w-[5.5rem]",
    small: "max-h-22 md:max-h-26 max-w-[6rem] md:max-w-[7.5rem]",
    medium: "max-h-28 md:max-h-36 max-w-[8.5rem] md:max-w-[11rem]",
    large: "max-h-32 md:max-h-40 lg:max-h-44 max-w-[10rem] md:max-w-[13rem] lg:max-w-[14rem]",
    xlarge: "max-h-20 md:max-h-24 lg:max-h-28 max-w-[12rem] md:max-w-[16rem] lg:max-w-[18rem]",
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
        <section className="py-20 lg:py-24">
          <div className="max-w-6xl mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-6"
            >
              <AnimatedHeading 
                fixedText={currentHeading.fixedText}
                rotatingWords={currentHeading.rotatingWords}
                size="md"
                className="text-foreground"
              />
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t.pages.partners.subtitle}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="pb-24">
          <div className="w-full max-w-6xl mx-auto px-4 lg:px-8">
            <div className="space-y-16">
              {categoryOrder.map((category) => {
                const partnersInCategory = partnersByCategory[category as string] ?? [];
                if (!partnersInCategory.length) return null;

                const categoryLabel =
                  categoryLabels[category as keyof typeof categoryLabels] ?? category;
                const isUncategorizedGroup = category === 'uncategorized';

                return (
                  <div key={category} className="space-y-10">
                    <div className="flex items-center gap-4">
                      <h2 className="text-2xl font-semibold text-foreground">
                        {categoryLabel}
                      </h2>
                      <div className="flex-1 h-px bg-border/40" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                      {partnersInCategory.map((partner, index) => {
                        const size: PartnerLogoSize =
                          partner.logoSize && logoImageClasses[partner.logoSize]
                            ? partner.logoSize
                            : "medium";

                        const logoSrc =
                          partner.id === "5"
                            ? partner.logoUrlWhite || partner.logoUrl || ""
                            : partner.logoUrl || partner.logoUrlWhite || "";
                        const description = partnerDescriptions?.[partner.id] ?? "";

                        const isFlipped = flippedCardId === partner.id;

                        return (
                          <motion.div
                            key={partner.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-60px" }}
                            className="group relative cursor-pointer h-full"
                            onClick={() => toggleCard(partner.id)}
                            onKeyDown={(event) => handleKeyToggle(event, partner.id)}
                            role="button"
                            tabIndex={0}
                            aria-pressed={isFlipped}
                          >
                            <div className="relative h-full min-h-[360px] md:min-h-[380px]">
                              <div
                                className={`relative h-full transform transition-transform duration-500 [transform-style:preserve-3d] ${
                                  isFlipped ? "[transform:rotateY(180deg)]" : ""
                                }`}
                              >
                                <div className="absolute inset-0 flex h-full flex-col justify-between gap-6 rounded-3xl border border-border/40 bg-background/80 p-8 shadow-lg shadow-noreja-main/5 backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-noreja-main/15 [backface-visibility:hidden]">
                                  <div className="flex justify-center">
                                    <div className={baseLogoWrapperClass}>
                                      <img
                                        src={logoSrc}
                                        alt={`${partner.name} logo`}
                                        className={`${logoImageClasses[size]} w-full object-contain`}
                                        loading="lazy"
                                        onError={(e) => {
                                          const target = e.target as HTMLImageElement;
                                          target.style.display = "none";
                                          const parent = target.parentElement;
                                          if (parent) {
                                            parent.innerHTML = `<div class="text-3xl lg:text-4xl font-bold text-noreja-main">${partner.name
                                              .split(" ")
                                              .map((n) => n[0])
                                              .join("")}</div>`;
                                          }
                                        }}
                                      />
                                    </div>
                                  </div>

                                  <div className="space-y-3 text-center">
                                    {!isUncategorizedGroup && (
                                      <Badge
                                        variant="secondary"
                                        className="mx-auto text-noreja-main border-noreja-main/20"
                                      >
                                        {categoryLabel ?? partner.category ?? ""}
                                      </Badge>
                                    )}

                                    <h3 className="text-2xl font-bold text-foreground">
                                      {partner.name}
                                    </h3>

                                    <p className="text-xs text-muted-foreground">
                                      {t.pages.partners.learnMore}
                                    </p>
                                  </div>
                                </div>

                                <div className="absolute inset-0 flex h-full flex-col justify-between rounded-3xl border border-border/40 bg-background/95 p-7 shadow-lg shadow-noreja-main/5 backdrop-blur-sm transition-all duration-300 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                  <div className="space-y-3 text-center">
                                    {!isUncategorizedGroup && (
                                      <Badge
                                        variant="secondary"
                                        className="mx-auto text-noreja-main border-noreja-main/20 text-[11px] px-3 py-1"
                                      >
                                        {categoryLabel ?? partner.category ?? ""}
                                      </Badge>
                                    )}

                                    <h3 className="text-lg font-semibold text-foreground">
                                      {partner.name}
                                    </h3>

                                    <p className="text-[13px] leading-relaxed text-muted-foreground">
                                      {description}
                                    </p>
                                  </div>

                                  {partner.website && (
                                    <Button
                                      variant="outline"
                                      size="sm"
                                      className="mx-auto w-fit group/btn hover:bg-noreja-main hover:border-noreja-main hover:text-white transition-all text-sm"
                                      onClick={(event) => {
                                        event.stopPropagation();
                                        window.open(partner.website, "_blank");
                                      }}
                                    >
                                      {t.pages.partners.visitWebsite}
                                      <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                    </Button>
                                  )}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-24"
            >
              <Card className="bg-gradient-to-br from-noreja-main/5 to-noreja-main/10 border-noreja-main/20">
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-3xl font-bold mb-4">
                    {t.pages.partners.becomePartner}
                  </CardTitle>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    {t.pages.partners.partnerSubtitle}
                  </p>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="max-w-3xl mx-auto">
                    <HubSpotContactForm
                      wrapperClassName="w-full"
                      contentClassName="rounded-2xl border border-border/60 bg-background/95 px-6 py-10 shadow-sm space-y-6"
                      loadingMessage={t.pages.contact.formLoading}
                      errorMessage={t.pages.contact.formError}
                      minHeight="0"
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-16"
            >
              <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-background/95 px-8 py-12 text-center shadow-xl shadow-noreja-main/10">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-noreja-main/10 via-transparent to-noreja-secondary/20 opacity-70" />
                <div className="relative z-10 space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    {t.pages.partners.successStoriesCta.title}{" "}
                    <span className="bg-gradient-primary bg-clip-text text-transparent">
                      {t.pages.partners.successStoriesCta.highlight}
                    </span>
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    {t.pages.partners.successStoriesCta.description}
                  </p>
                  <Button
                    size="lg"
                    className="group bg-noreja-main text-white hover:bg-noreja-main/90"
                    asChild
                  >
                    <Link to="/success-stories">
                      {t.pages.partners.successStoriesCta.buttonLabel}
                      <ExternalLink className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
