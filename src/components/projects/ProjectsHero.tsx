import Image from "next/image";
import Link from "next/link";
import { Github01Icon, Folder01Icon } from "hugeicons-react";

export function ProjectsHero() {
  return (
    <section className="relative py-20 px-6 bg-[#0d1117]">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-10 flex justify-between items-center p-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/iconwithoutbg.png"
            alt="AbabilX Logo"
            width={40}
            height={40}
            className="rounded-lg"
          />
          <span className="text-xl font-bold">
            <span className="text-[#58a6ff]">Ababil </span>
            <span className="text-[#dc2626]">X</span>
          </span>
        </Link>
        <nav className="flex items-center gap-4">
          <Link
            href="/projects"
            className="text-[#58a6ff] p-2 rounded-lg hover:bg-[#21262d] transition-colors"
            title="Projects">
            <Folder01Icon size={22} />
          </Link>
          <a
            href="https://github.com/AbabilX"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#c9d1d9] hover:text-[#58a6ff] p-2 rounded-lg hover:bg-[#21262d] transition-colors"
            title="GitHub">
            <Github01Icon size={22} />
          </a>
        </nav>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto text-center pt-16">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-[#58a6ff] to-[#79c0ff] bg-clip-text text-transparent mb-4">
          Our Projects
        </h1>
        <p className="text-xl text-[#8b949e] max-w-2xl mx-auto">
          Explore our collection of open-source repositories. From developer
          tools to learning projects — all built with quality and transparency.
        </p>
      </div>
    </section>
  );
}
