import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HubSpotBlogTeaser } from "@/components/HubSpotBlogTeaser";
import { partners } from "@/lib/partners";

export default function Partners() {
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
              Our <span className="text-noreja-main">Partners</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Collaborating with industry leaders to deliver innovative solutions 
              and drive digital transformation across every sector.
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
              Strategic Partnerships
            </h2>
            <p className="text-lg text-muted-foreground">
              Trusted by leading organizations worldwide
            </p>
          </motion.div>

          {/* Partners Grid with Scroll Reveal */}
          <div className="space-y-12">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  ease: "easeOut"
                }}
                viewport={{ once: true, margin: "-50px" }}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } items-center gap-12`}
              >
                {/* Partner Logo */}
                <div className="flex-shrink-0">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.2 + 0.3,
                      ease: "easeOut"
                    }}
                    viewport={{ once: true }}
                    className="w-40 h-40 lg:w-48 lg:h-48 bg-gradient-to-br from-noreja-main/10 to-noreja-main/5 rounded-2xl p-8 flex items-center justify-center group hover:shadow-2xl hover:shadow-noreja-main/20 transition-all duration-300"
                  >
                    <img
                      src={partner.logoUrl}
                      alt={`${partner.name} logo`}
                      className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `<div class="text-4xl lg:text-5xl font-bold text-noreja-main">${partner.name.split(' ').map(n => n[0]).join('')}</div>`;
                        }
                      }}
                    />
                  </motion.div>
                </div>

                {/* Partner Details */}
                <div className="flex-1 text-center lg:text-left">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.2 + 0.4,
                      ease: "easeOut"
                    }}
                    viewport={{ once: true }}
                  >
                    <Badge 
                      variant="secondary" 
                      className="mb-4 text-noreja-main border-noreja-main/20"
                    >
                      {partner.category}
                    </Badge>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground group-hover:text-noreja-main transition-colors">
                      {partner.name}
                    </h3>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      {partner.description}
                    </p>
                    
                    <Button
                      variant="outline"
                      className="group hover:bg-noreja-main hover:border-noreja-main hover:text-white transition-all"
                      onClick={() => window.open(partner.website, '_blank')}
                    >
                      Visit Website
                      <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
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
                  Become a Partner
                </CardTitle>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Join our ecosystem of innovative partners and unlock new opportunities 
                  for growth, collaboration, and shared success.
                </p>
              </CardHeader>
              <CardContent className="text-center">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg"
                    className="bg-noreja-main hover:bg-noreja-main/90 text-white px-8"
                  >
                    Partner With Us
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-noreja-main/30 hover:bg-noreja-main/10 px-8"
                  >
                    Learn More
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