"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Github01Icon, LinkSquare01Icon } from "hugeicons-react";

interface Contributor {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
  role?: {
    en: string;
    bn: string;
  };
}

// Hardcoded contributors
const CONTRIBUTORS: Contributor[] = [
  {
    id: 72880355,
    login: "mozaddedalfeshani",
    avatar_url: "https://avatars.githubusercontent.com/u/72880355?v=4",
    html_url: "https://github.com/mozaddedalfeshani",
    role: {
      en: "Founder & Lead Developer",
      bn: "প্রতিষ্ঠাতা ও প্রধান ডেভেলপার",
    },
  },
  {
    id: 59507062,
    login: "contributor2",
    avatar_url: "https://avatars.githubusercontent.com/u/59507062?v=4",
    html_url: "https://github.com/users/59507062",
    role: {
      en: "Core Contributor",
      bn: "মূল কন্ট্রিবিউটর",
    },
  },
  {
    id: 110667129,
    login: "contributor3",
    avatar_url: "https://avatars.githubusercontent.com/u/110667129?v=4",
    html_url: "https://github.com/users/110667129",
    role: {
      en: "Core Contributor",
      bn: "মূল কন্ট্রিবিউটর",
    },
  },
];

export function Contributors() {
  const { language } = useLanguage();
  const isEn = language === "en";

  return (
    <section className="py-24 px-6 bg-[#161b22]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-[#58a6ff] to-[#79c0ff] bg-clip-text text-transparent">
            {isEn ? "Our Contributors" : "আমাদের কন্ট্রিবিউটরগণ"}
          </h2>
          <p className="text-xl text-[#8b949e] max-w-2xl mx-auto">
            {isEn
              ? "Amazing people who make AbabilX possible"
              : "যারা AbabilX কে সম্ভব করে তুলেছেন"}
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex -space-x-4 *:data-[slot=avatar]:ring-4 *:data-[slot=avatar]:ring-[#161b22] *:data-[slot=avatar]:grayscale hover:*:data-[slot=avatar]:grayscale-0 hover:*:data-[slot=avatar]:z-10 hover:*:data-[slot=avatar]:scale-110 *:data-[slot=avatar]:transition-all *:data-[slot=avatar]:duration-300">
            {CONTRIBUTORS.map((contributor) => (
              <a
                key={contributor.id}
                href={contributor.html_url}
                target="_blank"
                rel="noopener noreferrer"
                title={`${contributor.login} - ${
                  isEn ? contributor.role?.en : contributor.role?.bn
                }`}
                data-slot="avatar"
                className="relative block rounded-full">
                <Avatar className="w-20 h-20 border-0 bg-[#0d1117]">
                  <AvatarImage
                    src={contributor.avatar_url}
                    alt={contributor.login}
                  />
                  <AvatarFallback className="bg-[#161b22] text-[#c9d1d9] text-xl">
                    {contributor.login.substring(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </a>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <a
            href="https://github.com/AbabilX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#30363d] bg-[#0d1117] text-[#c9d1d9] hover:border-[#58a6ff] hover:text-[#58a6ff] transition-all duration-300 font-medium">
            <Github01Icon size={20} />
            {isEn ? "Become a Contributor" : "কন্ট্রিবিউটর হোন"}
            <LinkSquare01Icon size={16} className="opacity-60" />
          </a>
        </div>
      </div>
    </section>
  );
}
