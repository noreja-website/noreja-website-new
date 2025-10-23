import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { useMemo } from "react";
import { HubSpotBlogTeaser } from "@/components/HubSpotBlogTeaser";
import { TeamCard } from "@/components/TeamCard";
import { teamMembers, advisoryMembers } from "@/lib/team";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Team() {
  const { t } = useLanguage();

  // Shuffle function using Fisher-Yates algorithm
  const shuffleArray = (array: typeof teamMembers) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Separate founders and team members first
  const founders = teamMembers.filter(member => member.isFounder);
  const regularTeamMembers = teamMembers.filter(member => !member.isFounder);

  // Only shuffle the regular team members, keep founders in original order
  const shuffledTeamMembers_ = useMemo(() => shuffleArray(regularTeamMembers), []);

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

      {/* Founders Section */}
      <section className="pb-16">
        <div className="w-full max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              {t.team.founders}
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {founders.map((member, index) => (
              <TeamCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="pb-20">
        <div className="w-full max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              {t.team.team}
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {shuffledTeamMembers_.map((member, index) => (
              <TeamCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board Section */}
      <section className="py-20">
        <div className="w-full max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              {t.team.advisoryBoard}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t.team.advisorySubtitle}
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {advisoryMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="text-center">
                  {/* Circular Image */}
                  <div className="relative mb-4">
                    <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-noreja-main/20 to-noreja-main/5 p-1 group-hover:scale-105 transition-transform duration-300">
                      <div className="w-full h-full rounded-full bg-muted flex items-center justify-center overflow-hidden">
                        <img
                          src={member.imageUrl}
                          alt={`${member.name} profile`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const parent = target.parentElement;
                            if (parent) {
                              parent.innerHTML = `<div class="w-full h-full flex items-center justify-center text-xl font-bold text-noreja-main">${member.name.split(' ').map(n => n[0]).join('')}</div>`;
                            }
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Name */}
                  <h3 className="text-sm font-semibold mb-2 group-hover:text-noreja-main transition-colors">
                    {member.name}
                  </h3>
                  
                  {/* LinkedIn Button */}
                  <button
                    onClick={() => window.open(member.linkedInUrl, '_blank')}
                    className="p-2 rounded-full bg-muted hover:bg-noreja-main hover:text-white transition-all duration-300 group-hover:scale-110"
                  >
                    <Linkedin className="w-4 h-4" />
                  </button>
                </div>
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