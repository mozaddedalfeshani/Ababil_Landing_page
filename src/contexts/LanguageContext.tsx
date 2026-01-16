"use client";

import React, {
  createContext,
  useContext,
  useState,
  useSyncExternalStore,
} from "react";
import { Language, translations, Translation } from "@/lib/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translation;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// Helper to get initial language from localStorage
function getStoredLanguage(): Language {
  if (typeof window === "undefined") return "en";
  const stored = localStorage.getItem("language");
  if (stored === "en" || stored === "bn") return stored;
  return "en";
}

// Subscribe function for useSyncExternalStore (no-op since we control updates)
function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Use useSyncExternalStore to read initial value without triggering effect warning
  const initialLanguage = useSyncExternalStore(
    subscribe,
    getStoredLanguage,
    () => "en" as Language
  );

  const [language, setLanguageState] = useState<Language>(initialLanguage);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const value = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
