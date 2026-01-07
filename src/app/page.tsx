import { Hero } from "@/components/Hero";
import { WhyAbabil } from "@/components/WhyAbabil";
import { Features } from "@/components/Features";
import { Performance } from "@/components/Performance";
import { DownloadSection } from "@/components/Download";
import { TechStack } from "@/components/TechStack";
import { WhatsNew } from "@/components/WhatsNew";
import { Roadmap } from "@/components/Roadmap";
import { GitHubLinks } from "@/components/GitHubLinks";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <WhyAbabil />
      <Features />
      <Performance />
      <DownloadSection />
      <TechStack />
      <WhatsNew />
      <Roadmap />
      <GitHubLinks />

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-[#A1E3F9] bg-white">
        <div className="max-w-7xl mx-auto text-center text-sm text-[#578FCA]">
          <p>
            © {new Date().getFullYear()} Ababil Studio. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
