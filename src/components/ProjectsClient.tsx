"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { ProjectCard } from "@/components/ProjectCard";
import type { Project } from "@/lib/github";
import { SITE } from "@/data/config";
import { useI18n } from "@/lib/i18n";

export function ProjectsClient({ projects }: { projects: Project[] }) {
  const { t } = useI18n();
  const [filter, setFilter] = useState<string | null>(null);

  const languages = useMemo(
    () =>
      Array.from(
        new Set(projects.map((p) => p.language).filter((l): l is string => !!l))
      ).sort(),
    [projects]
  );

  const filtered = filter ? projects.filter((p) => p.language === filter) : projects;

  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-16">
      <Reveal>
        <h2 className="mb-8 font-mono text-sm uppercase tracking-widest text-black/40 dark:text-white/40">
          {t.projects.heading}
        </h2>
      </Reveal>

      {projects.length === 0 ? (
        <p className="text-black/50 dark:text-white/50">
          {t.projects.empty}{" "}
          <a
            href={`https://github.com/${SITE.githubUsername}`}
            className="underline"
            target="_blank"
            rel="noreferrer"
          >
            github.com/{SITE.githubUsername}
          </a>
          .
        </p>
      ) : (
        <>
          <div className="mb-6 flex flex-wrap gap-2">
            <button
              onClick={() => setFilter(null)}
              className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                filter === null
                  ? "border-black bg-black text-white dark:border-white dark:bg-white dark:text-black"
                  : "border-black/15 text-black/60 hover:bg-black/5 dark:border-white/20 dark:text-white/60 dark:hover:bg-white/10"
              }`}
            >
              {t.projects.filterAll}
            </button>
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => setFilter(lang)}
                className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                  filter === lang
                    ? "border-black bg-black text-white dark:border-white dark:bg-white dark:text-black"
                    : "border-black/15 text-black/60 hover:bg-black/5 dark:border-white/20 dark:text-white/60 dark:hover:bg-white/10"
                }`}
              >
                {lang}
              </button>
            ))}
          </div>

          <motion.div layout className="grid gap-5 sm:grid-cols-2">
            {filtered.map((project, i) => (
              <ProjectCard key={project.name} project={project} index={i} />
            ))}
          </motion.div>
        </>
      )}
    </section>
  );
}
