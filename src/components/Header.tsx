import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { getRoutePath } from "@/lib/routes";
import logo from "@/assets/noreja_logo_white.png";

// Compact mobile language switcher
function MobileLanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'de' : 'en');
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      className="relative flex items-center space-x-2 px-3 py-2 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors border border-border/50 hover:border-primary/30"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="flex items-center space-x-2">
        <span 
          className={`text-sm font-medium transition-colors ${
            language === 'en' ? 'text-primary' : 'text-muted-foreground'
          }`}
        >
          EN
        </span>
        <span className="text-muted-foreground text-sm">|</span>
        <span 
          className={`text-sm font-medium transition-colors ${
            language === 'de' ? 'text-primary' : 'text-muted-foreground'
          }`}
        >
          DE
        </span>
      </div>
      
      {/* Animated indicator */}
      <motion.div
        className="absolute bottom-0 h-0.5 bg-primary"
        initial={false}
        animate={{
          x: language === 'en' ? -6 : 32,
          width: 16
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />
    </motion.button>
  );
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t, language } = useLanguage();

  const isActive = (routeKey: keyof typeof import('@/lib/routes').routes) => {
    const routePath = getRoutePath(routeKey, language);
    return location.pathname === routePath || location.pathname.startsWith(routePath + '/');
  };

  const navigationItems = [
    { name: t.navigation.functionalities, routeKey: 'functionalities' as const },
    { name: t.navigation.pricing, routeKey: 'pricing' as const },
    { name: t.navigation.successStories, routeKey: 'successStories' as const },
    { name: t.navigation.partners, routeKey: 'partners' as const },
    { name: t.navigation.blog, routeKey: 'blog' as const }
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to={getRoutePath('home', language)} className="flex items-center">
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
            {navigationItems.map((item) => {
              const href = getRoutePath(item.routeKey, language);
              return (
                <Link
                  key={item.routeKey}
                  to={href}
                  className={`text-sm font-medium transition-fast ${
                    isActive(item.routeKey)
                      ? "text-[hsl(256,77%,72%)]"
                      : "text-muted-foreground hover:text-[hsl(256,77%,72%)]"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Language Switcher and CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            <Link to={getRoutePath('contact', language)}>
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
              {navigationItems.map((item) => {
                const href = getRoutePath(item.routeKey, language);
                return (
                  <Link
                    key={item.routeKey}
                    to={href}
                    className={`text-sm font-medium transition-fast ${
                      isActive(item.routeKey)
                        ? "text-[hsl(256,77%,72%)]"
                        : "text-muted-foreground hover:text-[hsl(256,77%,72%)]"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <div className="flex items-center justify-between pt-4">
                <Link to={getRoutePath('contact', language)}>
                  <Button size="sm" className="gradient-primary">
                    {t.buttons.contactUs}
                  </Button>
                </Link>
                <MobileLanguageSwitcher />
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
}