import { EXCLUDED_REPOS, PROJECT_DESCRIPTION_OVERRIDES, SITE } from "@/data/config";

export type Project = {
  name: string;
  description: string | null;
  url: string;
  homepage: string | null;
  language: string | null;
  stars: number;
  updatedAt: string;
  topics: string[];
};

type GithubRepo = {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
  fork: boolean;
  archived: boolean;
  topics?: string[];
};

export async function getProjects(): Promise<Project[]> {
  const res = await fetch(
    `https://api.github.com/users/${SITE.githubUsername}/repos?per_page=100&sort=updated`,
    {
      headers: { Accept: "application/vnd.github+json" },
      next: { revalidate: 3600 },
    }
  );

  if (!res.ok) {
    return [];
  }

  const repos: GithubRepo[] = await res.json();

  return repos
    .filter((r) => !r.fork && !r.archived && !EXCLUDED_REPOS.includes(r.name))
    .map((r) => ({
      name: r.name,
      description: PROJECT_DESCRIPTION_OVERRIDES[r.name] ?? r.description,
      url: r.html_url,
      homepage: r.homepage,
      language: r.language,
      stars: r.stargazers_count,
      updatedAt: r.updated_at,
      topics: r.topics ?? [],
    }))
    .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
}
