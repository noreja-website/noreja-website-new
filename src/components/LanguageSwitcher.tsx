import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Language } from "@/lib/translations";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'de' : 'en');
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      className="relative flex items-center space-x-2 px-3 py-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors border border-border hover:border-primary/30"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="flex items-center space-x-1">
        <span 
          className={`text-xs font-medium transition-colors ${
            language === 'en' ? 'text-primary' : 'text-muted-foreground'
          }`}
        >
          EN
        </span>
        <span className="text-muted-foreground">|</span>
        <span 
          className={`text-xs font-medium transition-colors ${
            language === 'de' ? 'text-primary' : 'text-muted-foreground'
          }`}
        >
          DE
        </span>
      </div>
      
      {/* Animated indicator */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-primary"
        initial={false}
        animate={{
          x: language === 'en' ? 4 : 24,
          width: language === 'en' ? 16 : 16
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />
    </motion.button>
  );
}