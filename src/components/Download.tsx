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
import { Download, Apple, Monitor } from "lucide-react";

export function DownloadSection() {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center space-y-4 mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            {t.download.title}
          </h2>
          <p className="text-xl text-muted-foreground">{t.download.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* macOS Download */}
          <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
            <CardHeader className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                <Apple className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl">macOS</CardTitle>
              <CardDescription>{t.download.version} 1.0.0</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button size="lg" className="w-full gap-2" asChild>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer">
                  <Download className="h-5 w-5" />
                  {t.download.macButton}
                </a>
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                macOS 11.0 or later
              </p>
            </CardContent>
          </Card>

          {/* Windows Coming Soon */}
          <Card className="border-2 opacity-75">
            <CardHeader className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mx-auto mb-4">
                <Monitor className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl">Windows</CardTitle>
              <CardDescription>
                <Badge variant="secondary" className="mt-2">
                  {t.download.windowsComingSoon}
                </Badge>
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button size="lg" className="w-full" disabled>
                <Download className="h-5 w-5 mr-2" />
                {t.download.windowsComingSoon}
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Windows 10 or later
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
