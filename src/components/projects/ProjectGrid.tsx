import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    name: "white_board",
    description:
      "An infinite, multi-page whiteboard application built with Flutter. Create, draw, erase, and annotate on an endless canvas with multiple tools and pages.",
    language: "Dart",
    languageColor: "#00B4AB",
    tags: ["open-source", "whiteboard", "flutter"],
    repoUrl: "https://github.com/AbabilX/white_board",
  },
  {
    name: "AbabilX-Studio-Rust",
    description:
      "Rust Based⚡ Ultra-fast, lightweight API testing tool — a modern Postman alternative",
    language: "CSS",
    languageColor: "#563d7c",
    tags: [
      "desktop-app",
      "rust",
      "lightweight",
      "open-source",
      "performance",
      "api-testing",
      "tauri",
      "postman-alternative",
    ],
    repoUrl: "https://github.com/AbabilX/AbabilX-Studio-Rust",
    isTemplate: true,
  },
  {
    name: "ababil",
    description: "AbabilX core project",
    language: "Dart",
    languageColor: "#00B4AB",
    tags: [],
    repoUrl: "https://github.com/AbabilX/ababil",
  },
  {
    name: "Ababil-Studio",
    description:
      "⚡ High-performance, Rust-powered open-source API development platform. A lightweight, privacy-focused, and blazing-fast alternative to Postman built with React 19, Tailwind CSS, and Electron.",
    language: "TypeScript",
    languageColor: "#3178c6",
    tags: [
      "react",
      "open-source",
      "performance",
      "rest-api",
      "api-client",
      "developer-tools",
      "testing-tools",
      "postman-alternative",
    ],
    repoUrl: "https://github.com/AbabilX/Ababil-Studio",
  },
  {
    name: "EcoTrackBD",
    description: "Environmental tracking and monitoring application",
    language: "TypeScript",
    languageColor: "#3178c6",
    tags: [],
    repoUrl: "https://github.com/AbabilX/EcoTrackBD",
  },
  {
    name: "smartwallet",
    description:
      "A cross platform Application for your daily purpose! Hope you will enjoy with that :)",
    language: "Dart",
    languageColor: "#00B4AB",
    tags: [],
    repoUrl: "https://github.com/AbabilX/smartwallet",
  },
  {
    name: "Transformate",
    description: "Free Unlimited File Converter using WebAssembly and FFmpeg",
    language: "TypeScript",
    languageColor: "#3178c6",
    tags: [],
    repoUrl: "https://github.com/AbabilX/Transformate",
  },
  {
    name: "MoneyBook",
    description:
      "💰 A beautiful React Native money management app with multi-account support, WatermelonDB, and modern UI. Track expenses, manage multiple accounts, and visualize your financial data with ease.",
    language: "TypeScript",
    languageColor: "#3178c6",
    tags: [],
    repoUrl: "https://github.com/AbabilX/MoneyBook",
  },
];

export function ProjectGrid() {
  return (
    <section className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <ProjectCard
              key={project.name}
              name={project.name}
              description={project.description}
              language={project.language}
              languageColor={project.languageColor}
              tags={project.tags}
              repoUrl={project.repoUrl}
              isTemplate={(project as { isTemplate?: boolean }).isTemplate}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
