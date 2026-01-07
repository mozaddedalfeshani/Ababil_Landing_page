"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { Code2 } from "lucide-react";
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
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  ],
  ui: [
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Electron", icon: SiElectron, color: "#47848F" },
  ],
  devTools: [
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "VS Code", icon: Code2, color: "#007ACC" },
  ],
};

export function TechStack() {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            {t.techStack.title}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t.techStack.subtitle}
          </p>
        </div>

        <div className="space-y-12">
          {/* Core Technologies */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center">
              {t.techStack.categories.core}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {techStack.core.map((tech) => (
                <Card
                  key={tech.name}
                  className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                  <CardContent className="flex flex-col items-center justify-center p-6 space-y-3">
                    <tech.icon
                      className="h-12 w-12 transition-transform group-hover:scale-110"
                      style={{ color: tech.color }}
                    />
                    <span className="font-medium text-sm">{tech.name}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* UI & Design */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center">
              {t.techStack.categories.ui}
            </h3>
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
              {techStack.ui.map((tech) => (
                <Card
                  key={tech.name}
                  className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                  <CardContent className="flex flex-col items-center justify-center p-6 space-y-3">
                    <tech.icon
                      className="h-12 w-12 transition-transform group-hover:scale-110"
                      style={{ color: tech.color }}
                    />
                    <span className="font-medium text-sm">{tech.name}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Development Tools */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center">
              {t.techStack.categories.devTools}
            </h3>
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
              {techStack.devTools.map((tech) => (
                <Card
                  key={tech.name}
                  className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                  <CardContent className="flex flex-col items-center justify-center p-6 space-y-3">
                    <tech.icon
                      className="h-12 w-12 transition-transform group-hover:scale-110"
                      style={{ color: tech.color }}
                    />
                    <span className="font-medium text-sm">{tech.name}</span>
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
