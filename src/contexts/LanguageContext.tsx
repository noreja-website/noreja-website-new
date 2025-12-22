import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Language, translations, Translations } from '@/lib/translations';
import { getLanguageFromPath, translateRoute } from '@/lib/routes';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

// Inner component that uses router hooks
function LanguageProviderInner({ children }: LanguageProviderProps) {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Detect language from URL path
  const urlLanguage = getLanguageFromPath(location.pathname);
  
  const [language, setLanguageState] = useState<Language>(urlLanguage);

  // Sync language state with URL changes
  useEffect(() => {
    const newLanguage = getLanguageFromPath(location.pathname);
    if (newLanguage !== language) {
      setLanguageState(newLanguage);
    }
  }, [location.pathname, language]);

  const setLanguage = (lang: Language) => {
    if (lang === language) return;
    
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    
    // Navigate to the same page in the new language
    const newPath = translateRoute(location.pathname, lang);
    navigate(newPath, { replace: true });
  };

  useEffect(() => {
    // Update HTML lang attribute for accessibility
    document.documentElement.lang = language;
  }, [language]);

  const value = {
    language,
    setLanguage,
    t: translations[language]
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

// Outer provider that doesn't use router hooks
export function LanguageProvider({ children }: LanguageProviderProps) {
  return <LanguageProviderInner>{children}</LanguageProviderInner>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}