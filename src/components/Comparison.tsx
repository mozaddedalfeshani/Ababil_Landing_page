"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { IoCheckmarkCircle, IoCloseCircle } from "react-icons/io5";

const comparisonData = [
  {
    featureEn: "Rust-Powered Core",
    featureBn: "Rust-চালিত কোর",
    ababil: true,
    postman: false,
  },
  {
    featureEn: "Open Source",
    featureBn: "ওপেন সোর্স",
    ababil: true,
    postman: false,
  },
  {
    featureEn: "Privacy First (Local Data)",
    featureBn: "প্রাইভেসি (লোকাল ডেটা)",
    ababil: true,
    postman: false,
  },
  {
    featureEn: "Lightweight (~100MB)",
    featureBn: "হালকা (~১০০MB)",
    ababil: true,
    postman: false,
  },
  {
    featureEn: "Free Forever",
    featureBn: "চিরতরে বিনামূল্যে",
    ababil: true,
    postman: false,
  },
  {
    featureEn: "No Account Required",
    featureBn: "অ্যাকাউন্ট প্রয়োজন নেই",
    ababil: true,
    postman: false,
  },
  {
    featureEn: "HTTP Methods",
    featureBn: "HTTP মেথড",
    ababil: true,
    postman: true,
  },
  {
    featureEn: "Collections",
    featureBn: "কালেকশন",
    ababil: true,
    postman: true,
  },
  {
    featureEn: "Environment Variables",
    featureBn: "এনভায়রনমেন্ট ভেরিয়েবল",
    ababil: true,
    postman: true,
  },
  {
    featureEn: "Authentication",
    featureBn: "অথেন্টিকেশন",
    ababil: true,
    postman: true,
  },
  {
    featureEn: "Import/Export",
    featureBn: "ইম্পোর্ট/এক্সপোর্ট",
    ababil: true,
    postman: true,
  },
  {
    featureEn: "Response Viewer",
    featureBn: "রেসপন্স ভিউয়ার",
    ababil: true,
    postman: true,
  },
];

export function Comparison() {
  const { language } = useLanguage();
  const isEn = language === "en";

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-[#3674B5] to-[#578FCA] bg-clip-text text-transparent">
            {isEn ? "Ababil vs Postman" : "আবাবিল বনাম পোস্টম্যান"}
          </h2>
          <p className="text-xl text-[#578FCA] max-w-2xl mx-auto">
            {isEn
              ? "See why developers are switching to Ababil"
              : "দেখুন কেন ডেভেলপাররা আবাবিলে স্যুইচ করছেন"}
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border-2 border-[#A1E3F9] bg-white shadow-lg">
          {/* Header */}
          <div className="grid grid-cols-3 bg-gradient-to-r from-[#3674B5] to-[#578FCA] text-white">
            <div className="p-4 font-semibold">
              {isEn ? "Feature" : "বৈশিষ্ট্য"}
            </div>
            <div className="p-4 font-semibold text-center border-l border-white/20">
              Ababil
            </div>
            <div className="p-4 font-semibold text-center border-l border-white/20">
              Postman
            </div>
          </div>

          {/* Rows */}
          {comparisonData.map((item, index) => (
            <div
              key={index}
              className={`grid grid-cols-3 ${
                index % 2 === 0 ? "bg-[#D1F8EF]/20" : "bg-white"
              } hover:bg-[#D1F8EF]/40 transition-colors`}>
              <div className="p-4 text-[#3674B5] font-medium">
                {isEn ? item.featureEn : item.featureBn}
              </div>
              <div className="p-4 flex justify-center items-center border-l border-[#A1E3F9]">
                {item.ababil ? (
                  <IoCheckmarkCircle className="h-6 w-6 text-[#3674B5]" />
                ) : (
                  <IoCloseCircle className="h-6 w-6 text-red-400" />
                )}
              </div>
              <div className="p-4 flex justify-center items-center border-l border-[#A1E3F9]">
                {item.postman ? (
                  <IoCheckmarkCircle className="h-6 w-6 text-[#578FCA]" />
                ) : (
                  <IoCloseCircle className="h-6 w-6 text-red-400" />
                )}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-[#578FCA] mt-6 text-sm">
          {isEn
            ? "* Postman requires account and has usage limits on free tier"
            : "* পোস্টম্যানে অ্যাকাউন্ট প্রয়োজন এবং বিনামূল্যে স্তরে ব্যবহারের সীমা রয়েছে"}
        </p>
      </div>
    </section>
  );
}
