"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageToggle } from "./LanguageToggle";
import {
  Github01Icon,
  SourceCodeIcon,
  ShieldKeyIcon,
  RocketIcon,
} from "hugeicons-react";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex flex-col bg-[#0d1117]">
      {/* Header with navigation */}
      <header className="absolute top-0 left-0 right-0 z-10 flex justify-between items-center p-6">
        <div className="flex items-center gap-3">
          <Image
            src="/iconwithoutbg.png"
            alt="AbabilX Logo"
            width={40}
            height={40}
            className="rounded-lg"
          />
          <span className="text-xl font-bold text-[#58a6ff]">
            {t.hero.title}
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className="text-[#c9d1d9] hover:text-[#58a6ff] transition-colors font-medium">
            Home
          </Link>
          <Link
            href="/projects"
            className="text-[#c9d1d9] hover:text-[#58a6ff] transition-colors font-medium">
            Projects
          </Link>
          <a
            href="https://github.com/AbabilX"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#c9d1d9] hover:text-[#58a6ff] transition-colors font-medium">
            GitHub
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <LanguageToggle />
        </div>
      </header>

      {/* Hero Banner with gradient overlay */}
      <div className="relative w-full h-[60vh] min-h-[400px] overflow-hidden">
        <Image
          src="/banner.png"
          alt="AbabilX Banner"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0d1117]" />
      </div>

      {/* Hero Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-16 -mt-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-[#58a6ff] to-[#79c0ff] bg-clip-text text-transparent">
              {t.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-[#8b949e] font-medium">
              {t.hero.tagline}
            </p>
            <p className="text-base md:text-lg text-[#6e7681] max-w-2xl mx-auto">
              {t.hero.description}
            </p>
          </div>

          {/* Organization Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Badge className="gap-2 px-3 py-1.5 bg-[#21262d] text-[#58a6ff] border-[#30363d]">
              <SourceCodeIcon size={14} />
              <span>Open Source</span>
            </Badge>
            <Badge className="gap-2 px-3 py-1.5 bg-[#21262d] text-[#58a6ff] border-[#30363d]">
              <ShieldKeyIcon size={14} />
              <span>MIT License</span>
            </Badge>
            <Badge className="gap-2 px-3 py-1.5 bg-[#21262d] text-[#58a6ff] border-[#30363d]">
              <RocketIcon size={14} />
              <span>Community Driven</span>
            </Badge>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              className="gap-2 text-base px-8 h-12 shadow-lg bg-gradient-to-r from-[#1f6feb] to-[#58a6ff] text-white hover:opacity-90"
              asChild>
              <Link href="/projects">
                <RocketIcon size={20} />
                {t.hero.downloadButton}
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 text-base px-8 h-12 border-[#30363d] text-[#c9d1d9] bg-[#21262d] hover:bg-[#30363d]"
              asChild>
              <a
                href="https://github.com/AbabilX"
                target="_blank"
                rel="noopener noreferrer">
                <Github01Icon size={20} />
                {t.hero.githubButton}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
