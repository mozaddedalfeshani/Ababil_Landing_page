import { ProjectsHero, ProjectGrid } from "@/components/projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#0d1117]">
      <ProjectsHero />
      <ProjectGrid />

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-[#30363d] bg-[#0d1117]">
        <div className="max-w-7xl mx-auto text-center text-sm text-[#8b949e]">
          <p>© {new Date().getFullYear()} AbabilX. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
