"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { SiRust } from "react-icons/si";
import { IoSpeedometer, IoTime, IoHardwareChip } from "react-icons/io5";

const performanceStats = [
  {
    icon: SiRust,
    valueEn: "Rust",
    valueBn: "Rust",
    labelEn: "Powered Engine",
    labelBn: "চালিত ইঞ্জিন",
    descEn: "Native performance for request execution",
    descBn: "রিকোয়েস্ট এক্সিকিউশনের জন্য নেটিভ পারফরম্যান্স",
  },
  {
    icon: IoSpeedometer,
    valueEn: "10x",
    valueBn: "১০x",
    labelEn: "Faster",
    labelBn: "দ্রুততর",
    descEn: "Concurrent request handling",
    descBn: "সমসাময়িক রিকোয়েস্ট হ্যান্ডলিং",
  },
  {
    icon: IoTime,
    valueEn: "<50ms",
    valueBn: "<৫০ms",
    labelEn: "Latency",
    labelBn: "লেটেন্সি",
    descEn: "Optimized request pipeline",
    descBn: "অপ্টিমাইজড রিকোয়েস্ট পাইপলাইন",
  },
  {
    icon: IoHardwareChip,
    valueEn: "Low",
    valueBn: "কম",
    labelEn: "Memory",
    labelBn: "মেমরি",
    descEn: "Uses less RAM than alternatives",
    descBn: "বিকল্পগুলির চেয়ে কম RAM ব্যবহার করে",
  },
];

export function Performance() {
  const { language } = useLanguage();
  const isEn = language === "en";

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-[#3674B5] to-[#578FCA]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            {isEn ? "Built for Performance" : "পারফরম্যান্সের জন্য নির্মিত"}
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            {isEn
              ? "Powered by Rust for blazing-fast API testing"
              : "অত্যন্ত দ্রুত API টেস্টিংয়ের জন্য Rust দ্বারা চালিত"}
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {performanceStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                  {isEn ? stat.valueEn : stat.valueBn}
                </div>
                <div className="text-lg font-semibold text-[#D1F8EF] mb-2">
                  {isEn ? stat.labelEn : stat.labelBn}
                </div>
                <p className="text-sm text-white/70">
                  {isEn ? stat.descEn : stat.descBn}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
