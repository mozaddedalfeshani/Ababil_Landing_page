"use client";

import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { IoCheckmark, IoSparkles } from "react-icons/io5";

const features = [
  { en: "All HTTP Methods Support", bn: "সমস্ত HTTP মেথড সাপোর্ট" },
  { en: "Request Tab Management", bn: "রিকোয়েস্ট ট্যাব ম্যানেজমেন্ট" },
  { en: "Collection Import/Export", bn: "কালেকশন ইম্পোর্ট/এক্সপোর্ট" },
  { en: "Bearer Token Auth", bn: "বেয়ারার টোকেন অথেন্টিকেশন" },
  { en: "Environment Variables", bn: "এনভায়রনমেন্ট ভেরিয়েবল" },
  { en: "Postman Compatibility", bn: "পোস্টম্যান সামঞ্জস্যতা" },
  { en: "Theme Management", bn: "থিম ম্যানেজমেন্ট" },
  { en: "Response Viewer", bn: "রেসপন্স ভিউয়ার" },
  { en: "Token Extraction", bn: "টোকেন এক্সট্রাকশন" },
  { en: "Syntax Highlighting", bn: "সিনট্যাক্স হাইলাইটিং" },
];

export function WhatsNew() {
  const { language } = useLanguage();
  const isEn = language === "en";

  return (
    <section className="py-24 px-6 bg-[#D1F8EF]/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center space-y-4 mb-12 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Badge className="bg-gradient-to-r from-[#3674B5] to-[#578FCA] text-white px-4 py-1">
              <IoSparkles className="h-4 w-4 mr-1" />
              v1.0.0
            </Badge>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-[#3674B5] to-[#578FCA] bg-clip-text text-transparent">
            {isEn ? "What's New" : "নতুন কী আছে"}
          </h2>
          <p className="text-xl text-[#578FCA] max-w-2xl mx-auto">
            {isEn
              ? "First stable release with all core features for professional API testing"
              : "পেশাদার API টেস্টিংয়ের জন্য সমস্ত মূল বৈশিষ্ট্য সহ প্রথম স্থিতিশীল রিলিজ"}
          </p>
        </div>

        <div className="bg-white rounded-2xl border-2 border-[#A1E3F9] p-8 shadow-lg">
          <h3 className="text-2xl font-semibold text-[#3674B5] mb-6 text-center">
            {isEn ? "What's Working" : "কী কাজ করছে"}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 rounded-lg bg-[#D1F8EF]/50">
                <div className="w-6 h-6 rounded-full bg-[#3674B5] flex items-center justify-center flex-shrink-0">
                  <IoCheckmark className="h-4 w-4 text-white" />
                </div>
                <span className="text-[#3674B5] font-medium text-sm">
                  {isEn ? feature.en : feature.bn}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
