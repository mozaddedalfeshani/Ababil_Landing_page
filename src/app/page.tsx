import { Hero } from "@/components/Hero";
import { WhyAbabil } from "@/components/WhyAbabil";
import { GitHubLinks } from "@/components/GitHubLinks";
import { Contributors } from "@/components/Contributors";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117]">
      <Hero />
      <WhyAbabil />
      <GitHubLinks />
      <Contributors />

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-[#30363d] bg-[#0d1117]">
        <div className="max-w-7xl mx-auto text-center text-sm text-[#8b949e]">
          <p>© {new Date().getFullYear()} AbabilX. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
