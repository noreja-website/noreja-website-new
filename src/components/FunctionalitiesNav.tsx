import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

interface NavItem {
  id: string;
  titleKey: "dataCollection" | "aiProcessing" | "analyticsInsights" | "automation" | "integration" | "security";
}

export function FunctionalitiesNav() {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState<string>("");

  const navItems: NavItem[] = [
    { id: "data-collection", titleKey: "dataCollection" },
    { id: "ai-processing", titleKey: "aiProcessing" },
    { id: "analytics-insights", titleKey: "analyticsInsights" },
    { id: "automation", titleKey: "automation" },
    { id: "integration", titleKey: "integration" },
    { id: "security", titleKey: "security" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id)).filter(Boolean);
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="sticky top-24 z-20">
      <div className="bg-background/80 backdrop-blur-sm border border-border rounded-lg p-4 shadow-sm">
        <h3 className="text-sm font-semibold text-foreground mb-3">{t.navigation.quickNavigation}</h3>
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "text-left w-full text-sm px-3 py-2 rounded-md transition-colors",
                  "hover:bg-muted hover:text-foreground",
                  activeSection === item.id 
                    ? "bg-primary text-primary-foreground font-medium" 
                    : "text-muted-foreground"
                )}
              >
                {t.functionalities[item.titleKey].title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}