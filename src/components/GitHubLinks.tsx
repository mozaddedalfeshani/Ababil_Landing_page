"use client";

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
          <Card className="border-[#A1E3F9] bg-white">
            <CardHeader className="text-center pb-3">
              <div className="w-12 h-12 rounded-full bg-[#3674B5]/10 flex items-center justify-center mx-auto mb-3">
                <FaGithub className="h-6 w-6 text-[#3674B5]" />
              </div>
              <CardTitle className="text-lg text-[#3674B5]">
                {t.github.viewRepo}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center pt-0">
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-4 py-2 rounded-md border-2 border-[#578FCA] text-[#3674B5] font-medium bg-white">
                <FaGithub className="h-4 w-4 mr-2" />
                Repository
              </a>
            </CardContent>
          </Card>

          <Card className="border-[#A1E3F9] bg-white">
            <CardHeader className="text-center pb-3">
              <div className="w-12 h-12 rounded-full bg-[#578FCA]/10 flex items-center justify-center mx-auto mb-3">
                <GoPackage className="h-6 w-6 text-[#578FCA]" />
              </div>
              <CardTitle className="text-lg text-[#3674B5]">
                {t.github.releases}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center pt-0">
              <a
                href={`${repoUrl}/releases`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-4 py-2 rounded-md border-2 border-[#578FCA] text-[#3674B5] font-medium bg-white">
                <GoPackage className="h-4 w-4 mr-2" />
                Releases
              </a>
            </CardContent>
          </Card>

          <Card className="border-[#A1E3F9] bg-white">
            <CardHeader className="text-center pb-3">
              <div className="w-12 h-12 rounded-full bg-[#A1E3F9]/30 flex items-center justify-center mx-auto mb-3">
                <IoAlertCircle className="h-6 w-6 text-[#3674B5]" />
              </div>
              <CardTitle className="text-lg text-[#3674B5]">
                {t.github.issues}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center pt-0">
              <a
                href={`${repoUrl}/issues`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-4 py-2 rounded-md border-2 border-[#578FCA] text-[#3674B5] font-medium bg-white">
                <IoAlertCircle className="h-4 w-4 mr-2" />
                Issues
              </a>
            </CardContent>
          </Card>

          <Card className="border-[#A1E3F9] bg-white">
            <CardHeader className="text-center pb-3">
              <div className="w-12 h-12 rounded-full bg-[#D1F8EF] flex items-center justify-center mx-auto mb-3">
                <IoChatbubbles className="h-6 w-6 text-[#578FCA]" />
              </div>
              <CardTitle className="text-lg text-[#3674B5]">
                {t.github.discussions}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center pt-0">
              <a
                href={`${repoUrl}/discussions`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-4 py-2 rounded-md border-2 border-[#578FCA] text-[#3674B5] font-medium bg-white">
                <IoChatbubbles className="h-4 w-4 mr-2" />
                Discussions
              </a>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-lg text-[#578FCA] mb-6">
            {t.footer.madeWith} ❤️ · {t.footer.openSource}
          </p>
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-md bg-gradient-to-r from-[#3674B5] to-[#578FCA] text-white font-medium text-lg shadow-lg">
            <FaStar className="h-5 w-5" />
            Star on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
