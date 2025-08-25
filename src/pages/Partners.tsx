import { motion } from "framer-motion";
import { Building, Handshake, Globe, Star } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const partners = [
  {
    name: "Microsoft",
    category: "Strategic Technology Partner",
    description: "Joint development of enterprise AI solutions and cloud infrastructure innovations.",
    logo: "MS",
    tier: "platinum"
  },
  {
    name: "AWS",
    category: "Cloud Infrastructure Partner", 
    description: "Advanced cloud computing solutions and global scalability infrastructure.",
    logo: "AWS",
    tier: "platinum"
  },
  {
    name: "NVIDIA",
    category: "AI Hardware Partner",
    description: "Cutting-edge GPU technology for machine learning and real-time processing.",
    logo: "NV",
    tier: "gold"
  },
  {
    name: "Salesforce",
    category: "CRM Integration Partner",
    description: "Seamless customer relationship management and business process automation.",
    logo: "SF",
    tier: "gold"
  },
  {
    name: "IBM",
    category: "Enterprise Solutions Partner",
    description: "Legacy system integration and hybrid cloud infrastructure solutions.",
    logo: "IBM",
    tier: "silver"
  },
  {
    name: "Oracle",
    category: "Database Partner",
    description: "Advanced database management and enterprise data processing solutions.",
    logo: "OR",
    tier: "silver"
  }
];

const certifications = [
  {
    name: "ISO 27001",
    description: "Information Security Management",
    icon: "🛡️"
  },
  {
    name: "SOC 2 Type II", 
    description: "Security and Availability Controls",
    icon: "✅"
  },
  {
    name: "GDPR Compliant",
    description: "Data Protection Compliance",
    icon: "🔒"
  },
  {
    name: "AWS Advanced Partner",
    description: "Cloud Architecture Excellence",
    icon: "☁️"
  }
];

export default function Partners() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6">
            Our{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Partners
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We collaborate with industry leaders to deliver comprehensive solutions that drive innovation 
            and accelerate digital transformation across every sector.
          </p>
        </motion.div>

        {/* Partnership Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 glow-primary">
              <Building className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-2">50+</h3>
            <p className="text-muted-foreground">Global Partners</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4 glow-accent">
              <Handshake className="w-8 h-8 text-background" />
            </div>
            <h3 className="text-2xl font-bold mb-2">25</h3>
            <p className="text-muted-foreground">Strategic Alliances</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 glow-primary">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-2">180</h3>
            <p className="text-muted-foreground">Countries Covered</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4 glow-accent">
              <Star className="w-8 h-8 text-background" />
            </div>
            <h3 className="text-2xl font-bold mb-2">99%</h3>
            <p className="text-muted-foreground">Partner Satisfaction</p>
          </div>
        </motion.div>

        {/* Partners Grid */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Strategic Partners
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
              >
                <Card className="h-full bg-card/50 border-border/40 hover:border-primary/30 transition-all hover:shadow-card group">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:glow-primary transition-all">
                        <span className="text-white font-bold text-lg">{partner.logo}</span>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        partner.tier === 'platinum' ? 'bg-gradient-primary text-white' :
                        partner.tier === 'gold' ? 'bg-gradient-accent text-background' :
                        'bg-muted text-muted-foreground'
                      }`}>
                        {partner.tier.toUpperCase()}
                      </div>
                    </div>
                    <CardTitle className="text-xl">{partner.name}</CardTitle>
                    <CardDescription className="text-noreja-tertiary font-semibold">
                      {partner.category}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {partner.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Certifications & Compliance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                className="text-center"
              >
                <Card className="bg-card/50 border-border/40 hover:border-primary/30 transition-all">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{cert.icon}</div>
                    <h3 className="font-bold mb-2">{cert.name}</h3>
                    <p className="text-sm text-muted-foreground">{cert.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Partner CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-dark p-12 rounded-2xl border border-primary/20">
            <h2 className="text-3xl font-bold mb-4">Become a Partner</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our ecosystem of innovative partners and help shape the future of technology together. 
              Unlock new opportunities for growth and collaboration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-primary rounded-lg font-semibold glow-primary hover:scale-105 transition-transform">
                Partner With Us
              </button>
              <button className="px-8 py-4 border border-primary/30 rounded-lg font-semibold hover:bg-primary/10 transition-colors">
                View Partner Portal
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}