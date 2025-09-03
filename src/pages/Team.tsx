import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HubSpotBlogTeaser } from "@/components/HubSpotBlogTeaser";
import { teamMembers } from "@/lib/team";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Team() {
  const { t } = useLanguage();

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
              {t.team.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t.team.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="pb-20">
        <div className="w-full max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="h-full"
              >
                <Card className="h-full group hover:shadow-lg transition-all duration-300 border-border/40 hover:border-noreja-main/30">
                  <CardHeader className="text-center pb-4">
                    {/* Profile Image */}
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-noreja-main/20 to-noreja-main/5 p-1">
                      <div className="w-full h-full rounded-full bg-muted flex items-center justify-center overflow-hidden">
                        <img
                          src={member.imageUrl}
                          alt={`${member.name} profile`}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const parent = target.parentElement;
                            if (parent) {
                              parent.innerHTML = `<div class="w-full h-full flex items-center justify-center text-2xl font-bold text-noreja-main">${member.name.split(' ').map(n => n[0]).join('')}</div>`;
                            }
                          }}
                        />
                      </div>
                    </div>
                    
                    {/* Name and Role */}
                    <CardTitle className="text-lg font-bold group-hover:text-noreja-main transition-colors">
                      {member.name}
                    </CardTitle>
                    <p className="text-sm font-medium text-noreja-main">
                      {member.role}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="pt-0 px-6 pb-6">
                    {/* One-liner */}
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 text-center">
                      {member.oneLiner}
                    </p>
                    
                    {/* LinkedIn Button */}
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full group-hover:bg-noreja-main group-hover:text-white group-hover:border-noreja-main transition-all"
                      onClick={() => window.open(member.linkedInUrl, '_blank')}
                    >
                      <Linkedin className="w-4 h-4 mr-2" />
                      {t.team.connectLinkedIn}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Teasers Section */}
      <HubSpotBlogTeaser />
    </div>
  );
}