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
import {
  Github,
  Star,
  GitFork,
  AlertCircle,
  MessageSquare,
  Package,
} from "lucide-react";

export function GitHubLinks() {
  const { t } = useLanguage();

  // Replace with actual GitHub repo URL
  const repoUrl = "https://github.com/username/ababil-studio";

  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center space-y-4 mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            {t.github.title}
          </h2>
        </div>

        {/* GitHub Badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <img
            src={`https://img.shields.io/github/stars/username/ababil-studio?style=for-the-badge&logo=github`}
            alt="GitHub stars"
            className="h-7"
          />
          <img
            src={`https://img.shields.io/github/forks/username/ababil-studio?style=for-the-badge&logo=github`}
            alt="GitHub forks"
            className="h-7"
          />
          <img
            src={`https://img.shields.io/github/issues/username/ababil-studio?style=for-the-badge&logo=github`}
            alt="GitHub issues"
            className="h-7"
          />
          <img
            src={`https://img.shields.io/github/license/username/ababil-studio?style=for-the-badge`}
            alt="License"
            className="h-7"
          />
        </div>

        {/* Quick Links */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer group">
            <CardHeader className="text-center pb-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                <Github className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-lg">{t.github.viewRepo}</CardTitle>
            </CardHeader>
            <CardContent className="text-center pt-0">
              <Button variant="outline" className="w-full" asChild>
                <a href={repoUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  Repository
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer group">
            <CardHeader className="text-center pb-3">
              <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-green-500/20 transition-colors">
                <Package className="h-6 w-6 text-green-600" />
              </div>
              <CardTitle className="text-lg">{t.github.releases}</CardTitle>
            </CardHeader>
            <CardContent className="text-center pt-0">
              <Button variant="outline" className="w-full" asChild>
                <a
                  href={`${repoUrl}/releases`}
                  target="_blank"
                  rel="noopener noreferrer">
                  <Package className="h-4 w-4 mr-2" />
                  Releases
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer group">
            <CardHeader className="text-center pb-3">
              <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-red-500/20 transition-colors">
                <AlertCircle className="h-6 w-6 text-red-600" />
              </div>
              <CardTitle className="text-lg">{t.github.issues}</CardTitle>
            </CardHeader>
            <CardContent className="text-center pt-0">
              <Button variant="outline" className="w-full" asChild>
                <a
                  href={`${repoUrl}/issues`}
                  target="_blank"
                  rel="noopener noreferrer">
                  <AlertCircle className="h-4 w-4 mr-2" />
                  Issues
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer group">
            <CardHeader className="text-center pb-3">
              <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-500/20 transition-colors">
                <MessageSquare className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle className="text-lg">{t.github.discussions}</CardTitle>
            </CardHeader>
            <CardContent className="text-center pt-0">
              <Button variant="outline" className="w-full" asChild>
                <a
                  href={`${repoUrl}/discussions`}
                  target="_blank"
                  rel="noopener noreferrer">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Discussions
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground mb-6">
            {t.footer.madeWith} ❤️ · {t.footer.openSource}
          </p>
          <Button size="lg" variant="default" className="gap-2" asChild>
            <a href={repoUrl} target="_blank" rel="noopener noreferrer">
              <Star className="h-5 w-5" />
              Star on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
