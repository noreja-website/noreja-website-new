import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HubSpotBlogTeaser } from "@/components/HubSpotBlogTeaser";
import { partners } from "@/lib/partners";
import { useEffect } from "react";

export default function Partners() {
  const { t } = useLanguage();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
              {t.pages.partners.title} <span className="text-noreja-main">{t.pages.partners.titleHighlight}</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t.pages.partners.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partners Timeline */}
      <section className="pb-20">
        <div className="w-full max-w-6xl mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              {t.pages.partners.strategicPartnerships}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t.pages.partners.trustedBy}
            </p>
          </motion.div>

          {/* Partners Grid with Scroll Reveal */}
          <div className="space-y-16">
            {(() => {
              // Group partners into rows of 3
              const rows = [];
              for (let i = 0; i < partners.length; i += 3) {
                rows.push(partners.slice(i, i + 3));
              }
              
              return rows.map((rowPartners, rowIndex) => {
                const isLastRow = rowIndex === rows.length - 1;
                const partnersInRow = rowPartners.length;
                
                return (
                  <motion.div
                    key={rowIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: rowIndex * 0.3,
                      ease: "easeOut"
                    }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="w-full"
                  >
                    <div className={
                      partnersInRow === 1 
                        ? "relative w-full flex justify-center" 
                        : partnersInRow === 2 
                        ? "grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto"
                        : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    }>
                      {rowPartners.map((partner, partnerIndex) => (
                        <motion.div
                          key={partner.id}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ 
                            duration: 0.6, 
                            delay: rowIndex * 0.3 + partnerIndex * 0.2,
                            ease: "easeOut"
                          }}
                          viewport={{ once: true }}
                          className={`flex flex-col items-center text-center space-y-6 ${
                            partnersInRow === 1 ? 'max-w-sm' : ''
                          }`}
                        >
                        {/* Partner Logo */}
                        <motion.div
                          initial={{ scale: 0.8, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          transition={{ 
                            duration: 0.6, 
                            delay: rowIndex * 0.3 + partnerIndex * 0.2 + 0.2,
                            ease: "easeOut"
                          }}
                          viewport={{ once: true }}
                          className="w-32 h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-noreja-main/10 to-noreja-main/5 rounded-2xl p-6 flex items-center justify-center group hover:shadow-2xl hover:shadow-noreja-main/20 transition-all duration-300"
                        >
                          <img
                            src={partner.logoUrl}
                            alt={`${partner.name} logo`}
                            className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                            loading="lazy"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              const parent = target.parentElement;
                              if (parent) {
                                parent.innerHTML = `<div class="text-3xl lg:text-4xl font-bold text-noreja-main">${partner.name.split(' ').map(n => n[0]).join('')}</div>`;
                              }
                            }}
                          />
                        </motion.div>

                        {/* Partner Details */}
                        <div className="space-y-4">
                          <Badge 
                            variant="secondary" 
                            className="text-noreja-main border-noreja-main/20"
                          >
                            {partner.category}
                          </Badge>
                          
                          <h3 className="text-xl lg:text-2xl font-bold text-foreground group-hover:text-noreja-main transition-colors">
                            {partner.name}
                          </h3>
                          
                          <p className="text-muted-foreground leading-relaxed">
                            {partner.description}
                          </p>
                          
                          <div className="flex gap-3 justify-center">
                            {partner.website && (
                              <Button
                                variant="outline"
                                size="sm"
                                className="group hover:bg-noreja-main hover:border-noreja-main hover:text-white transition-all"
                                onClick={() => window.open(partner.website, '_blank')}
                              >
                                {t.pages.partners.visitWebsite}
                                <ExternalLink className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                              </Button>
                            )}
                            {partner.linkedin && (
                              <Button
                                variant="outline"
                                size="sm"
                                className="group hover:bg-noreja-main hover:border-noreja-main hover:text-white transition-all"
                                onClick={() => window.open(partner.linkedin, '_blank')}
                              >
                                LinkedIn
                                <ExternalLink className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                              </Button>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                    </div>
                  </motion.div>
                );
              });
            })()}
          </div>

          {/* Partnership CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-20"
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

      {/* Blog Teasers Section */}
      <HubSpotBlogTeaser />
    </div>
  );
}