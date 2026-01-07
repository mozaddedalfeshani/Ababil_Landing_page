"use client";

import Image from "next/image";
import { Github, Star, GitFork, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";

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
          <span className="text-xl font-bold">{t.hero.title}</span>
        </div>
        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
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
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      </div>

      {/* Hero Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-16 -mt-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              {t.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              {t.hero.tagline}
            </p>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.hero.description}
            </p>
          </div>

          {/* GitHub Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Badge variant="secondary" className="gap-2 px-3 py-1.5">
              <Star className="h-3.5 w-3.5 fill-yellow-500 text-yellow-500" />
              <span>Stars</span>
            </Badge>
            <Badge variant="secondary" className="gap-2 px-3 py-1.5">
              <GitFork className="h-3.5 w-3.5" />
              <span>Forks</span>
            </Badge>
            <Badge variant="secondary" className="gap-2 px-3 py-1.5">
              <AlertCircle className="h-3.5 w-3.5" />
              <span>Issues</span>
            </Badge>
            <Badge variant="outline" className="px-3 py-1.5">
              <span>MIT License</span>
            </Badge>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              className="gap-2 text-base px-8 h-12 shadow-lg hover:shadow-xl transition-all">
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              {t.hero.downloadButton}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 text-base px-8 h-12"
              asChild>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                {t.hero.githubButton}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
