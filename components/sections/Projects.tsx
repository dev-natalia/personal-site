import ProjectsGrid, { type ProjectCard } from "@/components/sections/ProjectsGrid";
import { getPublicRepos, GITHUB_USERNAME } from "@/lib/github";
import type { Lang } from "@/lib/i18n";

function timeAgo(iso: string, lang: Lang): string {
  const rtf = new Intl.RelativeTimeFormat(lang === "pt" ? "pt-BR" : "en", { numeric: "auto" });
  const days = Math.round((Date.now() - new Date(iso).getTime()) / 86_400_000);
  if (days < 30) return rtf.format(-days, "day");
  if (days < 365) return rtf.format(-Math.round(days / 30), "month");
  return rtf.format(-Math.round(days / 365), "year");
}

export default async function Projects({ lang }: { lang: Lang }) {
  const repos = await getPublicRepos();

  const projects: ProjectCard[] | null = repos
    ? repos.map((repo) => ({
        name: repo.name,
        description: repo.description,
        url: repo.html_url,
        language: repo.language,
        stars: repo.stargazers_count,
        updated: timeAgo(repo.pushed_at, lang),
      }))
    : null;

  return <ProjectsGrid lang={lang} projects={projects} profileUrl={`https://github.com/${GITHUB_USERNAME}`} />;
}
