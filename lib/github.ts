export const GITHUB_USERNAME = "dev-natalia";

export interface GithubRepo {
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  language: string | null;
  updated_at: string;
  pushed_at: string;
  fork: boolean;
}

/** Repositórios públicos próprios (sem forks), do mais recente ao mais antigo. Retorna null se o GitHub falhar. */
export async function getPublicRepos(username: string = GITHUB_USERNAME): Promise<GithubRepo[] | null> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?sort=pushed&per_page=100`,
      {
        headers: { Accept: "application/vnd.github+json" },
        next: { revalidate: 3600 },
      }
    );
    if (!res.ok) return null;
    const repos: GithubRepo[] = await res.json();
    return repos.filter((repo) => !repo.fork);
  } catch {
    return null;
  }
}
