"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Github01Icon,
  SourceCodeIcon,
  UserGroupIcon,
  Comment01Icon,
  PackageIcon,
} from "hugeicons-react";

export function GitHubLinks() {
  const { t } = useLanguage();

  const orgUrl = "https://github.com/AbabilX";

  return (
    <section className="py-24 px-6 bg-[#161b22]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center space-y-4 mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-[#58a6ff] to-[#79c0ff] bg-clip-text text-transparent">
            {t.github.title}
          </h2>
          <p className="text-xl text-[#8b949e] max-w-2xl mx-auto">
            Contribute to our projects and help us build better software
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="border-[#30363d] bg-[#0d1117]">
            <CardHeader className="text-center pb-3">
              <div className="w-12 h-12 rounded-full bg-[#58a6ff]/10 flex items-center justify-center mx-auto mb-3">
                <Github01Icon size={24} className="text-[#58a6ff]" />
              </div>
              <CardTitle className="text-lg text-[#c9d1d9]">
                {t.github.viewRepo}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center pt-0">
              <a
                href={orgUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-4 py-2 rounded-md border border-[#30363d] text-[#c9d1d9] font-medium bg-[#21262d] hover:bg-[#30363d] transition-colors">
                <Github01Icon size={16} className="mr-2" />
                AbabilX
              </a>
            </CardContent>
          </Card>

          <Card className="border-[#30363d] bg-[#0d1117]">
            <CardHeader className="text-center pb-3">
              <div className="w-12 h-12 rounded-full bg-[#79c0ff]/10 flex items-center justify-center mx-auto mb-3">
                <PackageIcon size={24} className="text-[#79c0ff]" />
              </div>
              <CardTitle className="text-lg text-[#c9d1d9]">
                {t.github.releases}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center pt-0">
              <a
                href={`${orgUrl}?tab=repositories`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-4 py-2 rounded-md border border-[#30363d] text-[#c9d1d9] font-medium bg-[#21262d] hover:bg-[#30363d] transition-colors">
                <PackageIcon size={16} className="mr-2" />
                Repositories
              </a>
            </CardContent>
          </Card>

          <Card className="border-[#30363d] bg-[#0d1117]">
            <CardHeader className="text-center pb-3">
              <div className="w-12 h-12 rounded-full bg-[#58a6ff]/10 flex items-center justify-center mx-auto mb-3">
                <SourceCodeIcon size={24} className="text-[#58a6ff]" />
              </div>
              <CardTitle className="text-lg text-[#c9d1d9]">
                {t.github.issues}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center pt-0">
              <a
                href={`${orgUrl}/Ababil-Studio/issues`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-4 py-2 rounded-md border border-[#30363d] text-[#c9d1d9] font-medium bg-[#21262d] hover:bg-[#30363d] transition-colors">
                <UserGroupIcon size={16} className="mr-2" />
                Contribute
              </a>
            </CardContent>
          </Card>

          <Card className="border-[#30363d] bg-[#0d1117]">
            <CardHeader className="text-center pb-3">
              <div className="w-12 h-12 rounded-full bg-[#79c0ff]/10 flex items-center justify-center mx-auto mb-3">
                <Comment01Icon size={24} className="text-[#79c0ff]" />
              </div>
              <CardTitle className="text-lg text-[#c9d1d9]">
                {t.github.discussions}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center pt-0">
              <a
                href={`${orgUrl}/Ababil-Studio/discussions`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-4 py-2 rounded-md border border-[#30363d] text-[#c9d1d9] font-medium bg-[#21262d] hover:bg-[#30363d] transition-colors">
                <Comment01Icon size={16} className="mr-2" />
                Discussions
              </a>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-lg text-[#8b949e] mb-6">
            {t.footer.madeWith} ❤️ · {t.footer.openSource}
          </p>
          <a
            href={orgUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-md bg-gradient-to-r from-[#1f6feb] to-[#58a6ff] text-white font-medium text-lg shadow-lg hover:opacity-90 transition-opacity">
            <Github01Icon size={20} />
            Follow on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
