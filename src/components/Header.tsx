import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import logo from "@/assets/noreja_logo_white_violet.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const isActive = (href: string) => location.pathname === href;

  const navigationItems = [
    { name: "Startseite 1", href: "/" },
    { name: "Startseite 2", href: "/startseite-2" },
    { name: "Startseite 3", href: "/startseite-3" },
    { name: t.navigation.functionalities, href: "/functionalities" },
    { name: t.navigation.successStories, href: "/success-stories" },
    { name: t.navigation.partners, href: "/partners" },
    { name: t.navigation.pricing, href: "/pricing" },
    { name: t.navigation.blog, href: "/blog" }
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <motion.img
              src={logo}
              alt="Noreja Logo"
              className="w-36 aspect-[1308/322]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm font-medium transition-fast hover:text-primary ${
                  isActive(item.href)
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <motion.div
                    className="h-0.5 bg-gradient-primary mt-1"
                    layoutId="activeTab"
                    initial={false}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Language Switcher and CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            <Link to="/contact">
              <Button size="sm" className="gradient-primary glow-primary">
                {t.buttons.contactUs}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 border-t border-border/40"
          >
            <nav className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`text-sm font-medium transition-fast hover:text-primary ${
                    isActive(item.href)
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <LanguageSwitcher />
                <Link to="/contact">
                  <Button size="sm" className="gradient-primary">
                    {t.buttons.contactUs}
                  </Button>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
}