"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === "en" ? "bn" : "en")}
      className="px-3 py-1.5 rounded-md border border-[#30363d] bg-[#21262d] text-[#c9d1d9] text-sm font-medium hover:bg-[#30363d] transition-colors"
      aria-label="Toggle language">
      {language === "en" ? "বাংলা" : "English"}
    </button>
  );
}
