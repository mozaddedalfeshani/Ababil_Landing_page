import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { DownloadSection } from "@/components/Download";
import { TechStack } from "@/components/TechStack";
import { GitHubLinks } from "@/components/GitHubLinks";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <DownloadSection />
      <TechStack />
      <GitHubLinks />

      {/* Footer */}
      <footer className="py-8 px-6 border-t">
        <div className="max-w-7xl mx-auto text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Ababil Studio. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
