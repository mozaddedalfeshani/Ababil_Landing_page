"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { IoLanguage } from "react-icons/io5";

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
      className="gap-2 transition-transform hover:scale-105 text-[#3674B5] hover:bg-[#D1F8EF]">
      <IoLanguage className="h-4 w-4" />
      <span className="font-semibold">{language === "en" ? "বাং" : "EN"}</span>
    </Button>
  );
}
