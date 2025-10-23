import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { TeamMember } from "@/lib/team";

interface TeamCardProps {
  member: TeamMember;
  index: number;
}

export function TeamCard({ member, index }: TeamCardProps) {
  const { t, language } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="h-full"
      >
        <div
          className="h-full group cursor-pointer"
          onClick={openModal}
        >
          <div className="h-full bg-card border border-border/40 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-noreja-main/30 relative">
            {/* Image */}
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={member.imageUrl}
                alt={`${member.name} profile`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = `<div class="w-full h-full flex items-center justify-center text-4xl font-bold text-noreja-main bg-muted">${member.name.split(' ').map(n => n[0]).join('')}</div>`;
                  }
                }}
              />
            </div>
            
            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-6">
              {/* Name and Role */}
              <h3 className="text-lg font-bold mb-2 text-white group-hover:text-noreja-main transition-colors">
                {member.name}
              </h3>
              <p className="text-sm font-medium text-noreja-main mb-4">
                {member.role}
              </p>
              
              {/* LinkedIn Icon */}
              <div className="flex justify-center">
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-white/10 border-white/20 text-white hover:bg-noreja-main hover:text-white hover:border-noreja-main transition-all backdrop-blur-sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(member.linkedInUrl, '_blank');
                  }}
                >
                  <Linkedin className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-card rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Content */}
              <div className="flex flex-col lg:flex-row max-h-[80vh] overflow-hidden">
                {/* Image Section */}
                <div className="lg:w-2/5 flex-shrink-0 p-6 lg:p-8 flex flex-col">
                  <div className="aspect-[3/4] overflow-hidden mb-6 rounded-lg">
                    <img
                      src={member.imageUrl}
                      alt={`${member.name} profile`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `<div class="w-full h-full flex items-center justify-center text-6xl font-bold text-noreja-main bg-muted rounded-lg">${member.name.split(' ').map(n => n[0]).join('')}</div>`;
                        }
                      }}
                    />
                  </div>
                  
                  {/* LinkedIn Button */}
                  <Button
                    variant="outline"
                    className="group hover:bg-noreja-main hover:border-noreja-main hover:text-white transition-all w-full"
                    onClick={() => window.open(member.linkedInUrl, '_blank')}
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    {t.team.connectLinkedIn}
                  </Button>
                </div>

                {/* Content Section */}
                <div className="lg:w-3/5 p-6 lg:p-8 flex flex-col">
                  <div className="mb-6 flex-shrink-0">
                    <h2 className="text-2xl lg:text-3xl font-bold mb-2 text-foreground">
                      {member.name}
                    </h2>
                    <p className="text-lg font-medium text-noreja-main">
                      {member.role}
                    </p>
                  </div>

                  {/* Scrollable content area */}
                  <div className="flex-1 overflow-y-auto pr-2">
                    <div className="text-muted-foreground leading-relaxed text-sm lg:text-base whitespace-pre-line">
                      {member.personalIntro[language]}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
