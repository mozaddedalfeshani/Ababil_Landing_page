"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  IoRocket,
  IoCodeSlash,
  IoHeart,
  IoCheckmarkCircle,
  IoPeople,
  IoShieldCheckmark,
} from "react-icons/io5";

const values = [
  {
    icon: IoRocket,
    titleEn: "Practical Software",
    titleBn: "ব্যবহারিক সফটওয়্যার",
    descEn: "Build genuinely useful tools that solve real problems",
    descBn: "সত্যিকারের সমস্যা সমাধান করে এমন দরকারী টুল তৈরি করি",
    color: "#58a6ff",
  },
  {
    icon: IoCodeSlash,
    titleEn: "Open Collaboration",
    titleBn: "উন্নয়ন স্বচ্ছতা",
    descEn: "Transparent development with community involvement",
    descBn: "কমিউনিটি জড়িত স্বচ্ছ উন্নয়ন",
    color: "#79c0ff",
  },
  {
    icon: IoHeart,
    titleEn: "Developer Support",
    titleBn: "ডেভেলপার সাপোর্ট",
    descEn: "Tools for learning, productivity, and growth",
    descBn: "শেখা, উৎপাদনশীলতা এবং বৃদ্ধির জন্য টুল",
    color: "#58a6ff",
  },
  {
    icon: IoCheckmarkCircle,
    titleEn: "Quality First",
    titleBn: "গুণমান প্রথম",
    descEn: "Clean implementation with best practices",
    descBn: "সর্বোত্তম চর্চার সাথে পরিষ্কার বাস্তবায়ন",
    color: "#79c0ff",
  },
  {
    icon: IoShieldCheckmark,
    titleEn: "Free & Open",
    titleBn: "ফ্রি ও ওপেন",
    descEn: "Accessible to everyone under MIT license",
    descBn: "MIT লাইসেন্সের অধীনে সবার জন্য অ্যাক্সেসযোগ্য",
    color: "#58a6ff",
  },
  {
    icon: IoPeople,
    titleEn: "Community Driven",
    titleBn: "কমিউনিটি চালিত",
    descEn: "Respectful collaboration and open discussions",
    descBn: "শ্রদ্ধাশীল সহযোগিতা এবং খোলা আলোচনা",
    color: "#79c0ff",
  },
];

export function WhyAbabil() {
  const { language } = useLanguage();
  const isEn = language === "en";

  return (
    <section className="py-24 px-6 bg-[#0d1117]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-[#58a6ff] to-[#79c0ff] bg-clip-text text-transparent">
            {isEn ? "Our Values" : "আমাদের মূল্যবোধ"}
          </h2>
          <p className="text-xl text-[#8b949e] max-w-2xl mx-auto">
            {isEn
              ? "What drives us to build better open-source software"
              : "যা আমাদের আরও ভালো ওপেন সোর্স সফটওয়্যার তৈরি করতে অনুপ্রাণিত করে"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card
                key={index}
                className="border border-[#30363d] bg-[#161b22]">
                <CardContent className="p-6">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${value.color}15` }}>
                    <Icon className="h-7 w-7" style={{ color: value.color }} />
                  </div>
                  <h3 className="text-xl font-semibold text-[#c9d1d9] mb-2">
                    {isEn ? value.titleEn : value.titleBn}
                  </h3>
                  <p className="text-[#8b949e]">
                    {isEn ? value.descEn : value.descBn}
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
