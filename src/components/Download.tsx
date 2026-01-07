"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { IoDownload } from "react-icons/io5";
import { FaApple, FaWindows } from "react-icons/fa";

export function DownloadSection() {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#D1F8EF]/30 to-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center space-y-4 mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-[#3674B5] to-[#578FCA] bg-clip-text text-transparent">
            {t.download.title}
          </h2>
          <p className="text-xl text-[#578FCA]">{t.download.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* macOS Download */}
          <Card className="border-2 border-[#A1E3F9] bg-white">
            <CardHeader className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#3674B5] to-[#578FCA] flex items-center justify-center mx-auto mb-4">
                <FaApple className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-[#3674B5]">macOS</CardTitle>
              <CardDescription className="text-[#578FCA]">
                {t.download.version} 1.0.0
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button
                size="lg"
                className="w-full gap-2 bg-gradient-to-r from-[#3674B5] to-[#578FCA] text-white"
                asChild>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer">
                  <IoDownload className="h-5 w-5" />
                  {t.download.macButton}
                </a>
              </Button>
              <p className="text-sm text-[#578FCA] mt-4">macOS 11.0 or later</p>
            </CardContent>
          </Card>

          {/* Windows Coming Soon */}
          <Card className="border-2 border-[#A1E3F9] opacity-75 bg-white">
            <CardHeader className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#A1E3F9] to-[#D1F8EF] flex items-center justify-center mx-auto mb-4">
                <FaWindows className="h-8 w-8 text-[#3674B5]" />
              </div>
              <CardTitle className="text-2xl text-[#3674B5]">Windows</CardTitle>
              <CardDescription>
                <Badge className="mt-2 bg-[#D1F8EF] text-[#3674B5] border-[#A1E3F9]">
                  {t.download.windowsComingSoon}
                </Badge>
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button
                size="lg"
                className="w-full bg-[#A1E3F9] text-[#3674B5]"
                disabled>
                <IoDownload className="h-5 w-5 mr-2" />
                {t.download.windowsComingSoon}
              </Button>
              <p className="text-sm text-[#578FCA] mt-4">Windows 10 or later</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
