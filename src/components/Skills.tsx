"use client";

import type { ComponentType } from "react";
import { motion } from "framer-motion";
import { Boxes, ListTree, Terminal } from "lucide-react";
import {
  SiApachenetbeanside,
  SiArduino,
  SiCplusplus,
  SiDocker,
  SiFlask,
  SiGit,
  SiGithub,
  SiJavascript,
  SiJupyter,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiNuxt,
  SiPostman,
  SiPython,
  SiReact,
  SiRender,
  SiVercel,
  SiVuedotjs,
  SiYolo,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { Reveal } from "@/components/Reveal";
import { SKILL_CATEGORIES, type SkillIcon } from "@/data/skills";
import { useI18n } from "@/lib/i18n";

const ICONS: Record<SkillIcon, ComponentType<{ className?: string }>> = {
  javascript: SiJavascript,
  python: SiPython,
  java: FaJava,
  c: Terminal,
  cplusplus: SiCplusplus,
  yolo: SiYolo,
  oop: Boxes,
  dsa: ListTree,
  mysql: SiMysql,
  mongodb: SiMongodb,
  react: SiReact,
  nextjs: SiNextdotjs,
  vue: SiVuedotjs,
  nuxt: SiNuxt,
  nodejs: SiNodedotjs,
  flask: SiFlask,
  git: SiGit,
  github: SiGithub,
  jupyter: SiJupyter,
  netbeans: SiApachenetbeanside,
  arduino: SiArduino,
  postman: SiPostman,
  docker: SiDocker,
  vercel: SiVercel,
  render: SiRender,
};

export function Skills() {
  const { t } = useI18n();

  return (
    <section id="skills" className="mx-auto max-w-4xl px-6 py-16">
      <Reveal>
        <h2 className="mb-8 font-mono text-sm uppercase tracking-widest text-black/40 dark:text-white/40">
          {t.skills.heading}
        </h2>
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SKILL_CATEGORIES.map((category, ci) => (
          <motion.div
            key={category.key}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: ci * 0.08 }}
            className={`rounded-xl border p-5 ${
              category.key === "exposure"
                ? "border-dashed border-black/15 dark:border-white/15"
                : "border-black/10 dark:border-white/10"
            }`}
          >
            <h3 className="mb-3 font-mono text-xs uppercase tracking-widest text-black/40 dark:text-white/40">
              {t.skills.categories[category.key]}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.items.map((skill) => {
                const Icon = ICONS[skill.icon];
                return (
                  <span
                    key={skill.name}
                    className={`flex items-center gap-2 rounded-lg border px-3 py-1.5 text-sm ${
                      category.key === "exposure"
                        ? "border-dashed border-black/10 text-black/60 dark:border-white/10 dark:text-white/60"
                        : "border-black/10 bg-black/[0.02] dark:border-white/10 dark:bg-white/[0.03]"
                    }`}
                  >
                    <span
                      className="flex h-4 w-4 items-center justify-center"
                      style={{ color: skill.color }}
                    >
                      <Icon className="h-full w-full" />
                    </span>
                    {skill.name}
                  </span>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
