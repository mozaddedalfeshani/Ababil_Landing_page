"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { IoCheckmarkCircle, IoEllipseOutline } from "react-icons/io5";

const roadmapItems = [
  { titleEn: "GraphQL Support", titleBn: "GraphQL সাপোর্ট", done: false },
  { titleEn: "WebSocket Testing", titleBn: "WebSocket টেস্টিং", done: false },
  { titleEn: "gRPC Support", titleBn: "gRPC সাপোর্ট", done: false },
  {
    titleEn: "API Mocking Capabilities",
    titleBn: "API মকিং ক্ষমতা",
    done: false,
  },
  {
    titleEn: "Automated Testing Workflows",
    titleBn: "অটোমেটেড টেস্টিং ওয়ার্কফ্লো",
    done: false,
  },
  {
    titleEn: "Team Collaboration Features",
    titleBn: "টিম কোলাবোরেশন বৈশিষ্ট্য",
    done: false,
  },
  {
    titleEn: "Cloud Sync (Optional)",
    titleBn: "ক্লাউড সিঙ্ক (ঐচ্ছিক)",
    done: false,
  },
  { titleEn: "Plugin System", titleBn: "প্লাগইন সিস্টেম", done: false },
  { titleEn: "CLI Version", titleBn: "CLI সংস্করণ", done: false },
];

export function Roadmap() {
  const { language } = useLanguage();
  const isEn = language === "en";

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-[#3674B5] to-[#578FCA] bg-clip-text text-transparent">
            {isEn ? "Roadmap" : "রোডম্যাপ"}
          </h2>
          <p className="text-xl text-[#578FCA] max-w-2xl mx-auto">
            {isEn
              ? "Exciting features coming soon"
              : "আকর্ষণীয় বৈশিষ্ট্য শীঘ্রই আসছে"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {roadmapItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-4 rounded-xl bg-[#D1F8EF]/30 border border-[#A1E3F9] hover:border-[#578FCA] hover:bg-[#D1F8EF]/50 transition-all duration-300">
              {item.done ? (
                <IoCheckmarkCircle className="h-6 w-6 text-[#3674B5] flex-shrink-0" />
              ) : (
                <IoEllipseOutline className="h-6 w-6 text-[#578FCA] flex-shrink-0" />
              )}
              <span
                className={`font-medium ${
                  item.done ? "text-[#3674B5]" : "text-[#578FCA]"
                }`}>
                {isEn ? item.titleEn : item.titleBn}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
