"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageCircleIcon } from "hugeicons-react";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === "en" ? "bn" : "en")}
      className="p-2 rounded-lg text-[#c9d1d9] hover:text-[#58a6ff] hover:bg-[#21262d] transition-colors"
      aria-label="Toggle language"
      title={language === "en" ? "বাংলা" : "English"}>
      <LanguageCircleIcon size={22} />
    </button>
  );
}
