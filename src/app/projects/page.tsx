import { DotsGrid, Crosses, Rings, GeometricShape, CornerAccents } from "@/components/VisualAnchors";
import Section from "@/components/Section";
import GitHubProjectCard from "@/components/GitHubProjectCard";

interface RepoRaw {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  updated_at: string;
  fork: boolean;
}

interface RepoData {
  id: number;
  name: string;
  description: string | null;
  url: string;
  homepage: string | null;
  language: string | null;
  stars: number;
  forks: number;
  topics: string[];
  updated: string;
}

async function getRepos(): Promise<RepoData[]> {
  try {
    const res = await fetch(
      "https://api.github.com/users/marsley01/repos?sort=updated&per_page=100&type=public",
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
          "User-Agent": "marsley-mash-site",
        },
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) return [];

    const data: RepoRaw[] = await res.json();
    return data
      .filter((repo) => !repo.fork && repo.name !== "marsley01")
      .map((repo) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        url: repo.html_url,
        homepage: repo.homepage,
        language: repo.language,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        topics: repo.topics || [],
        updated: repo.updated_at,
      }));
  } catch {
    return [];
  }
}

export default async function Projects() {
  const repos = await getRepos();

  return (
    <>
      <section className="relative flex min-h-[50vh] flex-col items-center justify-center overflow-hidden px-6 pt-28">
        <DotsGrid density="sparse" className="opacity-40" />
        <Crosses />
        <Rings
          className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          count={2}
        />
        <div className="max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Projects
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-text-secondary">
            A collection of platforms, brands, and tools I&apos;ve built from
            the ground up. Pulled live from{" "}
            <a
              href="https://github.com/marsley01"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline underline-offset-2 hover:opacity-80"
            >
              github.com/marsley01
            </a>
          </p>
        </div>
      </section>

      <Section className="relative">
        <GeometricShape />
        <CornerAccents />
        <DotsGrid density="medium" className="opacity-20" />
        {repos.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {repos.map((repo, i) => (
              <GitHubProjectCard key={repo.id} repo={repo} index={i} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <p className="text-text-secondary">Unable to load projects right now. Please check back later.</p>
          </div>
        )}
      </Section>
    </>
  );
}
