"use client";

import * as React from "react";
import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "bn" : "en");
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="gap-2 transition-transform hover:scale-105">
      <Languages className="h-4 w-4" />
      <span className="font-semibold">{language === "en" ? "বাং" : "EN"}</span>
    </Button>
  );
}
