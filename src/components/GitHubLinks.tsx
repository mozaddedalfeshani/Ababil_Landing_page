"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { FaGithub, FaStar } from "react-icons/fa";
import { IoAlertCircle, IoChatbubbles } from "react-icons/io5";
import { GoPackage } from "react-icons/go";

export function GitHubLinks() {
  const { t } = useLanguage();

  // Replace with actual GitHub repo URL
  const repoUrl = "https://github.com/username/ababil-studio";

  return (
    <section className="py-24 px-6 bg-[#D1F8EF]/50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center space-y-4 mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-[#3674B5] to-[#578FCA] bg-clip-text text-transparent">
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
          <Card className="hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer group border-[#A1E3F9] hover:border-[#578FCA] bg-white">
            <CardHeader className="text-center pb-3">
              <div className="w-12 h-12 rounded-full bg-[#3674B5]/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-[#3674B5]/20 transition-colors">
                <FaGithub className="h-6 w-6 text-[#3674B5]" />
              </div>
              <CardTitle className="text-lg text-[#3674B5]">
                {t.github.viewRepo}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center pt-0">
              <Button
                variant="outline"
                className="w-full border-[#578FCA] text-[#3674B5] hover:bg-[#D1F8EF]"
                asChild>
                <a href={repoUrl} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="h-4 w-4 mr-2" />
                  Repository
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer group border-[#A1E3F9] hover:border-[#578FCA] bg-white">
            <CardHeader className="text-center pb-3">
              <div className="w-12 h-12 rounded-full bg-[#578FCA]/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-[#578FCA]/20 transition-colors">
                <GoPackage className="h-6 w-6 text-[#578FCA]" />
              </div>
              <CardTitle className="text-lg text-[#3674B5]">
                {t.github.releases}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center pt-0">
              <Button
                variant="outline"
                className="w-full border-[#578FCA] text-[#3674B5] hover:bg-[#D1F8EF]"
                asChild>
                <a
                  href={`${repoUrl}/releases`}
                  target="_blank"
                  rel="noopener noreferrer">
                  <GoPackage className="h-4 w-4 mr-2" />
                  Releases
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer group border-[#A1E3F9] hover:border-[#578FCA] bg-white">
            <CardHeader className="text-center pb-3">
              <div className="w-12 h-12 rounded-full bg-[#A1E3F9]/30 flex items-center justify-center mx-auto mb-3 group-hover:bg-[#A1E3F9]/50 transition-colors">
                <IoAlertCircle className="h-6 w-6 text-[#3674B5]" />
              </div>
              <CardTitle className="text-lg text-[#3674B5]">
                {t.github.issues}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center pt-0">
              <Button
                variant="outline"
                className="w-full border-[#578FCA] text-[#3674B5] hover:bg-[#D1F8EF]"
                asChild>
                <a
                  href={`${repoUrl}/issues`}
                  target="_blank"
                  rel="noopener noreferrer">
                  <IoAlertCircle className="h-4 w-4 mr-2" />
                  Issues
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer group border-[#A1E3F9] hover:border-[#578FCA] bg-white">
            <CardHeader className="text-center pb-3">
              <div className="w-12 h-12 rounded-full bg-[#D1F8EF] flex items-center justify-center mx-auto mb-3 group-hover:bg-[#A1E3F9] transition-colors">
                <IoChatbubbles className="h-6 w-6 text-[#578FCA]" />
              </div>
              <CardTitle className="text-lg text-[#3674B5]">
                {t.github.discussions}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center pt-0">
              <Button
                variant="outline"
                className="w-full border-[#578FCA] text-[#3674B5] hover:bg-[#D1F8EF]"
                asChild>
                <a
                  href={`${repoUrl}/discussions`}
                  target="_blank"
                  rel="noopener noreferrer">
                  <IoChatbubbles className="h-4 w-4 mr-2" />
                  Discussions
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-lg text-[#578FCA] mb-6">
            {t.footer.madeWith} ❤️ · {t.footer.openSource}
          </p>
          <Button
            size="lg"
            className="gap-2 bg-gradient-to-r from-[#3674B5] to-[#578FCA] hover:from-[#578FCA] hover:to-[#3674B5] text-white"
            asChild>
            <a href={repoUrl} target="_blank" rel="noopener noreferrer">
              <FaStar className="h-5 w-5" />
              Star on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
