export type Language = "en" | "bn";

export interface Translation {
  hero: {
    title: string;
    tagline: string;
    downloadButton: string;
    githubButton: string;
    description: string;
  };
  projects: {
    title: string;
    subtitle: string;
    viewProject: string;
    allProjects: string;
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
      title: "Ababil X",
      tagline: "Open Source Organization",
      downloadButton: "View Projects",
      githubButton: "GitHub Organization",
      description:
        "Building practical, clean, and impactful software for developers and learners worldwide.",
    },
    projects: {
      title: "Our Projects",
      subtitle: "Explore our open-source repositories",
      viewProject: "View Project",
      allProjects: "View All Projects",
    },
    github: {
      title: "Join Our Community",
      viewRepo: "Organization",
      releases: "Repositories",
      issues: "Contribute",
      discussions: "Discussions",
    },
    footer: {
      madeWith: "Made with",
      openSource: "Open Source",
    },
  },
  bn: {
    hero: {
      title: "আবাবিল এক্স",
      tagline: "ওপেন সোর্স সংস্থা",
      downloadButton: "প্রজেক্ট দেখুন",
      githubButton: "গিটহাব অর্গানাইজেশন",
      description:
        "বিশ্বব্যাপী ডেভেলপার এবং শিক্ষার্থীদের জন্য ব্যবহারিক, পরিষ্কার এবং প্রভাবশালী সফটওয়্যার তৈরি করি।",
    },
    projects: {
      title: "আমাদের প্রজেক্ট",
      subtitle: "আমাদের ওপেন সোর্স রিপোজিটরি দেখুন",
      viewProject: "প্রজেক্ট দেখুন",
      allProjects: "সব প্রজেক্ট দেখুন",
    },
    github: {
      title: "আমাদের কমিউনিটিতে যোগ দিন",
      viewRepo: "অর্গানাইজেশন",
      releases: "রিপোজিটরি",
      issues: "অবদান রাখুন",
      discussions: "আলোচনা",
    },
    footer: {
      madeWith: "দিয়ে তৈরি",
      openSource: "ওপেন সোর্স",
    },
  },
};
