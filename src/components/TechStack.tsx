"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { VscCode } from "react-icons/vsc";
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiGit,
  SiElectron,
} from "react-icons/si";

const techStack = {
  core: [
    { name: "TypeScript", icon: SiTypescript, color: "#3674B5" },
    { name: "React", icon: SiReact, color: "#578FCA" },
    { name: "Next.js", icon: SiNextdotjs, color: "#3674B5" },
    { name: "Node.js", icon: SiNodedotjs, color: "#578FCA" },
  ],
  ui: [
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#3674B5" },
    { name: "Electron", icon: SiElectron, color: "#578FCA" },
  ],
  devTools: [
    { name: "Git", icon: SiGit, color: "#3674B5" },
    { name: "VS Code", icon: VscCode, color: "#578FCA" },
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {techStack.core.map((tech) => (
                <Card
                  key={tech.name}
                  className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border-[#A1E3F9] hover:border-[#578FCA] bg-white">
                  <CardContent className="flex flex-col items-center justify-center p-6 space-y-3">
                    <tech.icon
                      className="h-12 w-12 transition-transform group-hover:scale-110"
                      style={{ color: tech.color }}
                    />
                    <span className="font-medium text-sm text-[#3674B5]">
                      {tech.name}
                    </span>
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
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
              {techStack.ui.map((tech) => (
                <Card
                  key={tech.name}
                  className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border-[#A1E3F9] hover:border-[#578FCA] bg-white">
                  <CardContent className="flex flex-col items-center justify-center p-6 space-y-3">
                    <tech.icon
                      className="h-12 w-12 transition-transform group-hover:scale-110"
                      style={{ color: tech.color }}
                    />
                    <span className="font-medium text-sm text-[#3674B5]">
                      {tech.name}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Development Tools */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center text-[#3674B5]">
              {t.techStack.categories.devTools}
            </h3>
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
              {techStack.devTools.map((tech) => (
                <Card
                  key={tech.name}
                  className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border-[#A1E3F9] hover:border-[#578FCA] bg-white">
                  <CardContent className="flex flex-col items-center justify-center p-6 space-y-3">
                    <tech.icon
                      className="h-12 w-12 transition-transform group-hover:scale-110"
                      style={{ color: tech.color }}
                    />
                    <span className="font-medium text-sm text-[#3674B5]">
                      {tech.name}
                    </span>
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
