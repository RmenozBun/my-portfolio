"use client";

import { motion } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import type { Project } from "@/lib/github";
import { useI18n } from "@/lib/i18n";
import { formatProjectName, languageColor } from "@/lib/utils";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { t } = useI18n();

  return (
    <motion.a
      layout
      href={project.url}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.08 }}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-black/10 p-6 transition-colors hover:border-black/30 dark:border-white/10 dark:hover:border-white/30"
    >
      <div>
        <div className="mb-3 flex items-start justify-between">
          <h3 className="text-lg font-semibold tracking-tight">
            {formatProjectName(project.name)}
          </h3>
          <ExternalLink
            size={16}
            className="mt-1 shrink-0 text-black/30 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 dark:text-white/30"
          />
        </div>
        <p className="text-sm leading-relaxed text-black/60 dark:text-white/60">
          {project.description ?? t.projects.noDescription}
        </p>
      </div>

      <div className="mt-6 flex items-center justify-between text-xs text-black/50 dark:text-white/50">
        <div className="flex items-center gap-2">
          {project.language && (
            <span className="flex items-center gap-1.5">
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: languageColor(project.language) }}
              />
              {project.language}
            </span>
          )}
        </div>
        <div className="flex items-center gap-3">
          {project.stars > 0 && (
            <span className="flex items-center gap-1">
              <Star size={12} />
              {project.stars}
            </span>
          )}
          <GithubIcon className="h-3.5 w-3.5" />
        </div>
      </div>
    </motion.a>
  );
}
