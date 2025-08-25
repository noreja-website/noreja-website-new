import { motion } from "framer-motion";
import { Linkedin, Twitter, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Dr. Alex Chen",
    role: "CEO & Co-Founder",
    bio: "Former Director of AI at Google, PhD in Computer Science from MIT. Led the development of revolutionary ML algorithms that power today's most advanced systems.",
    image: "/api/placeholder/300/300",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    name: "Sarah Rodriguez",
    role: "CTO & Co-Founder", 
    bio: "Ex-Principal Engineer at Tesla, specialized in distributed systems and real-time processing. Built infrastructure serving billions of requests daily.",
    image: "/api/placeholder/300/300",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    name: "Michael Wang",
    role: "Head of Product",
    bio: "Former Product Lead at SpaceX, expert in human-centered design. Transformed complex technology into intuitive user experiences for millions.",
    image: "/api/placeholder/300/300",
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Dr. Emily Foster",
    role: "Chief Science Officer",
    bio: "Leading researcher in quantum computing and cryptography. Published 50+ papers and holds 15 patents in advanced security protocols.",
    image: "/api/placeholder/300/300",
    social: {
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "David Kim",
    role: "VP of Engineering",
    bio: "Former Staff Engineer at Meta, specialized in scaling systems architecture. Built platforms handling petabytes of data with millisecond latency.",
    image: "/api/placeholder/300/300",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    name: "Lisa Thompson",
    role: "Head of Design",
    bio: "Award-winning designer from Apple, expert in creating seamless user interfaces. Led design teams for products used by hundreds of millions globally.",
    image: "/api/placeholder/300/300",
    social: {
      linkedin: "#",
      twitter: "#"
    }
  }
];

export default function Team() {
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
            Meet Our{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Team
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Brilliant minds from the world's most innovative companies, united by a vision to transform 
            the future of technology and human potential.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card className="h-full bg-card/50 border-border/40 hover:border-primary/30 transition-all hover:shadow-card group">
                <CardContent className="p-6 text-center">
                  {/* Profile Image */}
                  <div className="relative mb-6">
                    <div className="w-32 h-32 mx-auto rounded-full bg-gradient-primary p-1">
                      <div className="w-full h-full rounded-full bg-muted flex items-center justify-center text-4xl font-bold text-foreground">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                    <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity" />
                  </div>

                  {/* Info */}
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-noreja-tertiary font-semibold mb-4">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {member.bio}
                  </p>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-4">
                    {member.social.linkedin && (
                      <motion.a
                        href={member.social.linkedin}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Linkedin className="w-5 h-5" />
                      </motion.a>
                    )}
                    {member.social.twitter && (
                      <motion.a
                        href={member.social.twitter}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Twitter className="w-5 h-5" />
                      </motion.a>
                    )}
                    {member.social.github && (
                      <motion.a
                        href={member.social.github}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Company Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-dark p-12 rounded-2xl border border-primary/20">
            <h2 className="text-3xl font-bold mb-8">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-noreja-tertiary">Innovation First</h3>
                <p className="text-muted-foreground">
                  We push the boundaries of what's possible, constantly exploring new frontiers in technology.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-noreja-tertiary">Human-Centered</h3>
                <p className="text-muted-foreground">
                  Technology should serve humanity. Every solution we build puts human needs at the center.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-noreja-tertiary">Relentless Excellence</h3>
                <p className="text-muted-foreground">
                  We never settle for good enough. Every detail matters in our pursuit of perfection.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}