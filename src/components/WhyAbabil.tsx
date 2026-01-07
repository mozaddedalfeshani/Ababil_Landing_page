"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  IoFlash,
  IoLeaf,
  IoColorPalette,
  IoLockClosed,
  IoCodeSlash,
  IoShieldCheckmark,
} from "react-icons/io5";

const benefits = [
  {
    icon: IoFlash,
    titleEn: "Blazing Fast",
    titleBn: "অত্যন্ত দ্রুত",
    descEn: "Rust-powered core ensures lightning-fast HTTP request processing",
    descBn: "Rust-চালিত কোর বিদ্যুৎ-দ্রুত HTTP রিকোয়েস্ট প্রসেসিং নিশ্চিত করে",
    color: "#3674B5",
  },
  {
    icon: IoLeaf,
    titleEn: "Lightweight",
    titleBn: "হালকা",
    descEn:
      "Minimal resource footprint compared to Electron-heavy alternatives",
    descBn: "ইলেকট্রন-ভারী বিকল্পগুলির তুলনায় ন্যূনতম রিসোর্স ব্যবহার",
    color: "#578FCA",
  },
  {
    icon: IoColorPalette,
    titleEn: "Modern UI",
    titleBn: "আধুনিক UI",
    descEn: "Beautiful, responsive interface built with React and Tailwind CSS",
    descBn: "React এবং Tailwind CSS দিয়ে তৈরি সুন্দর, রেসপন্সিভ ইন্টারফেস",
    color: "#3674B5",
  },
  {
    icon: IoCodeSlash,
    titleEn: "Open Source",
    titleBn: "ওপেন সোর্স",
    descEn: "Fully transparent, community-driven development",
    descBn: "সম্পূর্ণ স্বচ্ছ, কমিউনিটি-চালিত উন্নয়ন",
    color: "#578FCA",
  },
  {
    icon: IoLockClosed,
    titleEn: "Privacy First",
    titleBn: "প্রাইভেসি প্রথম",
    descEn: "Your data stays on your machine",
    descBn: "আপনার ডেটা আপনার মেশিনে থাকে",
    color: "#3674B5",
  },
  {
    icon: IoShieldCheckmark,
    titleEn: "Developer-Friendly",
    titleBn: "ডেভেলপার-বান্ধব",
    descEn: "Designed by developers, for developers",
    descBn: "ডেভেলপারদের দ্বারা, ডেভেলপারদের জন্য ডিজাইন করা",
    color: "#578FCA",
  },
];

export function WhyAbabil() {
  const { language } = useLanguage();
  const isEn = language === "en";

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-[#3674B5] to-[#578FCA] bg-clip-text text-transparent">
            {isEn ? "Why Ababil?" : "কেন আবাবিল?"}
          </h2>
          <p className="text-xl text-[#578FCA] max-w-2xl mx-auto">
            {isEn
              ? "A faster, lighter, and more efficient alternative to traditional API tools"
              : "ঐতিহ্যবাহী API টুলগুলির একটি দ্রুত, হালকা এবং আরও দক্ষ বিকল্প"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-[#A1E3F9] hover:border-[#578FCA] bg-white">
                <CardContent className="p-6">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${benefit.color}15` }}>
                    <Icon
                      className="h-7 w-7"
                      style={{ color: benefit.color }}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-[#3674B5] mb-2">
                    {isEn ? benefit.titleEn : benefit.titleBn}
                  </h3>
                  <p className="text-[#578FCA]">
                    {isEn ? benefit.descEn : benefit.descBn}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
