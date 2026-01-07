export type Language = "en" | "bn";

export interface Translation {
  hero: {
    title: string;
    tagline: string;
    downloadButton: string;
    githubButton: string;
    description: string;
  };
  features: {
    title: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  download: {
    title: string;
    subtitle: string;
    macButton: string;
    windowsComingSoon: string;
    version: string;
  };
  techStack: {
    title: string;
    subtitle: string;
    categories: {
      core: string;
      ui: string;
      devTools: string;
    };
  };
  github: {
    title: string;
    viewRepo: string;
    releases: string;
    issues: string;
    discussions: string;
  };
  footer: {
    madeWith: string;
    openSource: string;
  };
}

export const translations: Record<Language, Translation> = {
  en: {
    hero: {
      title: "Ababil Studio",
      tagline: "Your Modern Development Companion",
      downloadButton: "Download for Mac",
      githubButton: "View on GitHub",
      description:
        "A powerful, intuitive development tool designed to streamline your workflow and boost productivity.",
    },
    features: {
      title: "Features",
      items: [
        {
          title: "Lightning Fast",
          description:
            "Built with performance in mind, delivering instant responses and smooth interactions.",
        },
        {
          title: "Intuitive Interface",
          description:
            "Clean, modern UI that gets out of your way and lets you focus on what matters.",
        },
        {
          title: "Cross-Platform",
          description:
            "Works seamlessly across macOS and Windows (coming soon).",
        },
        {
          title: "Open Source",
          description:
            "Fully open source and community-driven. Contribute and make it yours.",
        },
        {
          title: "Extensible",
          description:
            "Plugin architecture allows you to customize and extend functionality.",
        },
        {
          title: "Modern Stack",
          description:
            "Built with cutting-edge technologies for reliability and performance.",
        },
      ],
    },
    download: {
      title: "Download Ababil Studio",
      subtitle: "Get started in seconds",
      macButton: "Download for macOS",
      windowsComingSoon: "Windows - Coming Soon",
      version: "Version",
    },
    techStack: {
      title: "Built With Modern Technologies",
      subtitle: "Powered by industry-leading tools and frameworks",
      categories: {
        core: "Core Technologies",
        ui: "UI & Design",
        devTools: "Development Tools",
      },
    },
    github: {
      title: "Open Source & Community",
      viewRepo: "View Repository",
      releases: "Releases",
      issues: "Issues",
      discussions: "Discussions",
    },
    footer: {
      madeWith: "Made with",
      openSource: "Open Source",
    },
  },
  bn: {
    hero: {
      title: "আবাবিল স্টুডিও",
      tagline: "আপনার আধুনিক ডেভেলপমেন্ট সঙ্গী",
      downloadButton: "ম্যাকের জন্য ডাউনলোড করুন",
      githubButton: "গিটহাবে দেখুন",
      description:
        "একটি শক্তিশালী, স্বজ্ঞাত ডেভেলপমেন্ট টুল যা আপনার কর্মপ্রবাহকে সহজ করে এবং উৎপাদনশীলতা বাড়ায়।",
    },
    features: {
      title: "বৈশিষ্ট্যসমূহ",
      items: [
        {
          title: "বিদ্যুৎ গতি",
          description:
            "পারফরম্যান্সের কথা মাথায় রেখে তৈরি, তাৎক্ষণিক প্রতিক্রিয়া এবং মসৃণ ইন্টারঅ্যাকশন প্রদান করে।",
        },
        {
          title: "স্বজ্ঞাত ইন্টারফেস",
          description:
            "পরিষ্কার, আধুনিক UI যা আপনার পথ থেকে সরে যায় এবং গুরুত্বপূর্ণ বিষয়ে মনোনিবেশ করতে দেয়।",
        },
        {
          title: "ক্রস-প্ল্যাটফর্ম",
          description:
            "macOS এবং Windows (শীঘ্রই আসছে) জুড়ে নির্বিঘ্নে কাজ করে।",
        },
        {
          title: "ওপেন সোর্স",
          description:
            "সম্পূর্ণ ওপেন সোর্স এবং কমিউনিটি-চালিত। অবদান রাখুন এবং এটিকে আপনার করুন।",
        },
        {
          title: "সম্প্রসারণযোগ্য",
          description:
            "প্লাগইন আর্কিটেকচার আপনাকে কাস্টমাইজ এবং কার্যকারিতা প্রসারিত করতে দেয়।",
        },
        {
          title: "আধুনিক স্ট্যাক",
          description:
            "নির্ভরযোগ্যতা এবং পারফরম্যান্সের জন্য অত্যাধুনিক প্রযুক্তি দিয়ে নির্মিত।",
        },
      ],
    },
    download: {
      title: "আবাবিল স্টুডিও ডাউনলোড করুন",
      subtitle: "সেকেন্ডের মধ্যে শুরু করুন",
      macButton: "macOS এর জন্য ডাউনলোড করুন",
      windowsComingSoon: "Windows - শীঘ্রই আসছে",
      version: "সংস্করণ",
    },
    techStack: {
      title: "আধুনিক প্রযুক্তি দিয়ে নির্মিত",
      subtitle: "শিল্প-নেতৃস্থানীয় টুল এবং ফ্রেমওয়ার্ক দ্বারা চালিত",
      categories: {
        core: "মূল প্রযুক্তি",
        ui: "UI এবং ডিজাইন",
        devTools: "ডেভেলপমেন্ট টুলস",
      },
    },
    github: {
      title: "ওপেন সোর্স এবং কমিউনিটি",
      viewRepo: "রিপোজিটরি দেখুন",
      releases: "রিলিজ",
      issues: "ইস্যু",
      discussions: "আলোচনা",
    },
    footer: {
      madeWith: "দিয়ে তৈরি",
      openSource: "ওপেন সোর্স",
    },
  },
};
