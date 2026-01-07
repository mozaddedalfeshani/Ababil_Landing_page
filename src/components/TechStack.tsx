"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { VscCode } from "react-icons/vsc";
import { SiRust } from "react-icons/si";
import {
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiElectron,
} from "react-icons/si";

const techStack = {
  core: [
    {
      name: "Rust",
      icon: SiRust,
      color: "#DEA584",
      desc: "High-Performance Core",
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      color: "#3674B5",
      desc: "Type-Safe Frontend",
    },
    {
      name: "React 19",
      icon: SiReact,
      color: "#578FCA",
      desc: "Modern UI Library",
    },
    {
      name: "Electron",
      icon: SiElectron,
      color: "#3674B5",
      desc: "Cross-Platform Desktop",
    },
  ],
  ui: [
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      color: "#578FCA",
      desc: "Utility-First Styling",
    },
    {
      name: "shadcn/ui",
      icon: VscCode,
      color: "#3674B5",
      desc: "Accessible Components",
    },
  ],
};

export function TechStack() {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-6 bg-[#D1F8EF]/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-[#3674B5] to-[#578FCA] bg-clip-text text-transparent">
            {t.techStack.title}
          </h2>
          <p className="text-xl text-[#578FCA]">{t.techStack.subtitle}</p>
        </div>

        <div className="space-y-12">
          {/* Core Technologies */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center text-[#3674B5]">
              {t.techStack.categories.core}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {techStack.core.map((tech) => (
                <Card key={tech.name} className="border-[#A1E3F9] bg-white">
                  <CardContent className="flex flex-col items-center justify-center p-6 space-y-3">
                    <tech.icon
                      className="h-14 w-14"
                      style={{ color: tech.color }}
                    />
                    <span className="font-semibold text-lg text-[#3674B5]">
                      {tech.name}
                    </span>
                    <span className="text-sm text-[#578FCA]">{tech.desc}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* UI & Design */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center text-[#3674B5]">
              {t.techStack.categories.ui}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto">
              {techStack.ui.map((tech) => (
                <Card key={tech.name} className="border-[#A1E3F9] bg-white">
                  <CardContent className="flex flex-col items-center justify-center p-6 space-y-3">
                    <tech.icon
                      className="h-14 w-14"
                      style={{ color: tech.color }}
                    />
                    <span className="font-semibold text-lg text-[#3674B5]">
                      {tech.name}
                    </span>
                    <span className="text-sm text-[#578FCA]">{tech.desc}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
