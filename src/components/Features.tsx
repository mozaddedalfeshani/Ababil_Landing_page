"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  IoFlash,
  IoColorPalette,
  IoDesktop,
  IoCode,
  IoExtensionPuzzle,
  IoRocket,
} from "react-icons/io5";

const iconMap = {
  0: IoFlash,
  1: IoColorPalette,
  2: IoDesktop,
  3: IoCode,
  4: IoExtensionPuzzle,
  5: IoRocket,
};

const iconColors = [
  "#3674B5",
  "#578FCA",
  "#3674B5",
  "#578FCA",
  "#3674B5",
  "#578FCA",
];

export function Features() {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-[#D1F8EF]/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-[#3674B5] to-[#578FCA] bg-clip-text text-transparent">
            {t.features.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.features.items.map((feature, index) => {
            const Icon = iconMap[index as keyof typeof iconMap];
            const iconColor = iconColors[index];
            return (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 border-[#A1E3F9] hover:border-[#578FCA] bg-white">
                <CardHeader>
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors"
                    style={{ backgroundColor: `${iconColor}15` }}>
                    <Icon className="h-6 w-6" style={{ color: iconColor }} />
                  </div>
                  <CardTitle className="text-xl text-[#3674B5]">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed text-[#578FCA]">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
