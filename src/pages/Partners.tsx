import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { partners, type PartnerLogoSize } from "@/lib/partners";
import { useEffect } from "react";

export default function Partners() {
  const { t } = useLanguage();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const partnerList = partners.filter((partner) => partner.isPartner);

  const logoWrapperClasses: Record<PartnerLogoSize, string> = {
    xsmall: "w-28 h-28 md:w-32 md:h-32 p-3 md:p-4",
    small: "w-36 h-36 md:w-44 md:h-44 p-4 md:p-5",
    medium: "w-44 h-44 md:w-52 md:h-52 p-6 md:p-7",
    large: "w-52 h-52 md:w-60 md:h-60 p-7 md:p-8",
    xlarge: "w-60 h-60 md:w-72 md:h-72 p-8 md:p-10",
  };

  const logoImageClasses: Record<PartnerLogoSize, string> = {
    xsmall: "max-h-16 md:max-h-20 max-w-[4.5rem] md:max-w-[5.5rem]",
    small: "max-h-22 md:max-h-26 max-w-[6rem] md:max-w-[7.5rem]",
    medium: "max-h-28 md:max-h-36 max-w-[8.5rem] md:max-w-[11rem]",
    large: "max-h-32 md:max-h-40 max-w-[10rem] md:max-w-[13rem]",
    xlarge: "max-h-[32rem] md:max-h-[36rem] max-w-[40rem] md:max-w-[60rem]",
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
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
                {t.pages.partners.title}
                <span className="block text-noreja-main">
                  {t.pages.partners.titleHighlight}
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t.pages.partners.subtitle}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="pb-24">
          <div className="w-full max-w-6xl mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {partnerList.map((partner, index) => {
                const size: PartnerLogoSize =
                  partner.logoSize && logoImageClasses[partner.logoSize]
                    ? partner.logoSize
                    : "medium";

                const logoSrc =
                  partner.id === "5"
                    ? partner.logoUrlWhite || partner.logoUrl || ""
                    : partner.logoUrl || partner.logoUrlWhite || "";

                return (
                  <motion.div
                    key={partner.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-60px" }}
                    className="group relative flex flex-col gap-8 rounded-3xl border border-border/40 bg-background/80 p-10 shadow-lg shadow-noreja-main/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-noreja-main/15"
                  >
                  <div className="flex justify-center items-center min-h-[15rem] md:min-h-[18rem]">
                    <div
                      className={`${logoWrapperClasses[size]} rounded-2xl bg-gradient-to-br from-noreja-main/10 to-noreja-main/5 flex items-center justify-center`}
                    >
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
                  <div className="space-y-5 text-center flex-1 flex flex-col items-center">
                    <Badge
                      variant="secondary"
                      className="mx-auto text-noreja-main border-noreja-main/20"
                    >
                      {partner.category}
                    </Badge>

                    <h3 className="text-2xl font-bold text-foreground">
                      {partner.name}
                    </h3>

                    <p className="text-base leading-relaxed text-muted-foreground">
                      {partner.description}
                    </p>

                    {partner.website && (
                      <Button
                        variant="outline"
                        size="lg"
                        className="mx-auto w-fit group/btn hover:bg-noreja-main hover:border-noreja-main hover:text-white transition-all"
                        onClick={() => window.open(partner.website, "_blank")}
                      >
                        {t.pages.partners.visitWebsite}
                        <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    )}
                  </div>
                  </motion.div>
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
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      size="lg"
                      className="bg-noreja-main hover:bg-noreja-main/90 text-white px-8"
                    >
                      {t.pages.partners.partnerWithUs}
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-noreja-main/30 hover:bg-noreja-main/10 px-8"
                    >
                      {t.pages.partners.learnMore}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
