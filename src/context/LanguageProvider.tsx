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
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('lang') as Language) || 'ja';
    }
    return 'ja';
  });

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
