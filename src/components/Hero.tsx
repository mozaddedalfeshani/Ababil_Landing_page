"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageToggle } from "./LanguageToggle";
import { FaGithub, FaStar, FaCodeBranch } from "react-icons/fa";
import { IoAlertCircle, IoDownload } from "react-icons/io5";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Header with toggles */}
      <header className="absolute top-0 left-0 right-0 z-10 flex justify-between items-center p-6">
        <div className="flex items-center gap-3">
          <Image
            src="/icon.png"
            alt="Ababil Studio Logo"
            width={40}
            height={40}
            className="rounded-lg"
          />
          <span className="text-xl font-bold text-[#3674B5]">
            {t.hero.title}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <LanguageToggle />
        </div>
      </header>

      {/* Hero Banner */}
      <div className="relative w-full h-[60vh] min-h-[400px] overflow-hidden">
        <Image
          src="/banner.png"
          alt="Ababil Studio Banner"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />
      </div>

      {/* Hero Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-16 -mt-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-[#3674B5] to-[#578FCA] bg-clip-text text-transparent">
              {t.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-[#578FCA] font-medium">
              {t.hero.tagline}
            </p>
            <p className="text-base md:text-lg text-[#3674B5]/70 max-w-2xl mx-auto">
              {t.hero.description}
            </p>
          </div>

          {/* GitHub Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Badge className="gap-2 px-3 py-1.5 bg-[#D1F8EF] text-[#3674B5] border-[#A1E3F9]">
              <FaStar className="h-3.5 w-3.5 fill-yellow-500 text-yellow-500" />
              <span>Stars</span>
            </Badge>
            <Badge className="gap-2 px-3 py-1.5 bg-[#D1F8EF] text-[#3674B5] border-[#A1E3F9]">
              <FaCodeBranch className="h-3.5 w-3.5" />
              <span>Forks</span>
            </Badge>
            <Badge className="gap-2 px-3 py-1.5 bg-[#D1F8EF] text-[#3674B5] border-[#A1E3F9]">
              <IoAlertCircle className="h-3.5 w-3.5" />
              <span>Issues</span>
            </Badge>
            <Badge
              variant="outline"
              className="px-3 py-1.5 border-[#578FCA] text-[#578FCA]">
              <span>MIT License</span>
            </Badge>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              className="gap-2 text-base px-8 h-12 shadow-lg hover:shadow-xl transition-all bg-gradient-to-r from-[#3674B5] to-[#578FCA] hover:from-[#578FCA] hover:to-[#3674B5] text-white">
              <IoDownload className="h-5 w-5" />
              {t.hero.downloadButton}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 text-base px-8 h-12 border-[#578FCA] text-[#3674B5] hover:bg-[#D1F8EF]"
              asChild>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer">
                <FaGithub className="h-5 w-5" />
                {t.hero.githubButton}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
