import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import { siteConfig, footerNavigation, legalLinks } from "@/lib/config";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <motion.div
                className="w-8 h-8 bg-gradient-primary rounded-lg glow-primary"
                whileHover={{ scale: 1.05 }}
              />
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Noreja
              </span>
            </Link>
            <p className="text-muted-foreground text-sm mb-4">
              {siteConfig.description}
            </p>
            <div className="flex space-x-4">
              <motion.a
                href={siteConfig.links.twitter}
                className="text-muted-foreground hover:text-primary transition-fast"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Twitter className="h-5 w-5" />
              </motion.a>
              <motion.a
                href={siteConfig.links.linkedin}
                className="text-muted-foreground hover:text-primary transition-fast"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a
                href={siteConfig.links.github}
                className="text-muted-foreground hover:text-primary transition-fast"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="h-5 w-5" />
              </motion.a>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2">
            <h3 className="font-semibold mb-4">Resources</h3>
            <div className="grid grid-cols-2 gap-4">
              {footerNavigation.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-muted-foreground hover:text-primary transition-fast text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div className="md:col-span-1">
            <h3 className="font-semibold mb-4">Legal</h3>
            <div className="flex flex-col space-y-2">
              {legalLinks.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-muted-foreground hover:text-primary transition-fast text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border/40 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm mt-2 md:mt-0">
            Built with cutting-edge technology
          </p>
        </div>
      </div>
    </footer>
  );
}