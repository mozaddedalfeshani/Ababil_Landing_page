import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { FaGithub, FaStar, FaCodeBranch } from "react-icons/fa";

interface ProjectCardProps {
  name: string;
  description: string;
  language: string;
  languageColor: string;
  tags: string[];
  repoUrl: string;
  isTemplate?: boolean;
}

export function ProjectCard({
  name,
  description,
  language,
  languageColor,
  tags,
  repoUrl,
  isTemplate = false,
}: ProjectCardProps) {
  return (
    <Card className="border border-[#30363d] bg-[#161b22] hover:border-[#58a6ff] transition-colors">
      <CardContent className="p-5">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <FaGithub className="h-5 w-5 text-[#8b949e]" />
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#58a6ff] font-semibold hover:underline">
              {name}
            </a>
            <Badge className="text-xs bg-[#21262d] text-[#8b949e] border-[#30363d]">
              Public
            </Badge>
            {isTemplate && (
              <Badge className="text-xs bg-[#21262d] text-[#8b949e] border-[#30363d]">
                Template
              </Badge>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-[#8b949e] text-sm mb-4 line-clamp-2">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <Badge
              key={tag}
              className="text-xs bg-[#388bfd1a] text-[#58a6ff] border-transparent hover:bg-[#388bfd33]">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center gap-4 text-xs text-[#8b949e]">
          <div className="flex items-center gap-1">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: languageColor }}
            />
            <span>{language}</span>
          </div>
          <div className="flex items-center gap-1">
            <FaStar className="h-3.5 w-3.5" />
            <span>0</span>
          </div>
          <div className="flex items-center gap-1">
            <FaCodeBranch className="h-3.5 w-3.5" />
            <span>0</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
