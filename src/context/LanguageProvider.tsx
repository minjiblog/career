"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'ja' | 'en';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  switchLang: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    // Return default values for SSR to prevent build errors
    return {
      lang: 'ja' as Language,
      setLang: () => {},
      switchLang: () => {}
    };
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>('ja');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('lang') as Language;
      if (savedLang) {
        setLangState(savedLang);
      }
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('lang', newLang);
      // Dispatch custom event to notify other components
      window.dispatchEvent(new Event('languageChange'));
    }
  };

  const switchLang = () => {
    const nextLang = lang === 'ja' ? 'en' : 'ja';
    setLang(nextLang);
  };

  useEffect(() => {
    const handleStorageChange = () => {
      if (typeof window !== 'undefined') {
        const newLang = (localStorage.getItem('lang') as Language) || 'ja';
        setLangState(newLang);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('languageChange', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('languageChange', handleStorageChange);
    };
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, setLang, switchLang }}>
      {children}
    </LanguageContext.Provider>
  );
};
