"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { SITE } from "@/data/config";
import { useI18n } from "@/lib/i18n";

export function Hero() {
  const { t } = useI18n();

  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6"
    >
      {/* animated grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 60% 60% at 50% 40%, black 40%, transparent 100%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center text-center"
      >
        <span className="mb-4 rounded-full border border-black/10 px-4 py-1 font-mono text-xs text-black/60 dark:border-white/15 dark:text-white/60">
          {t.hero.greeting}
        </span>

        <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
          {t.hero.name}
        </h1>

        <a
          href={`https://github.com/${SITE.githubUsername}`}
          target="_blank"
          rel="noreferrer"
          className="mt-2 font-mono text-sm text-black/40 transition-colors hover:text-black dark:text-white/40 dark:hover:text-white"
        >
          @{SITE.githubUsername}
        </a>

        <p className="mt-4 text-lg text-black/60 dark:text-white/60 sm:text-xl">
          {t.hero.role}
        </p>

        <p className="mt-2 max-w-xl text-balance text-sm text-black/50 dark:text-white/50 sm:text-base">
          {t.hero.tagline}
        </p>

        <div className="mt-8 flex items-center gap-4">
          <a
            href="#projects"
            className="rounded-full bg-black px-6 py-2.5 text-sm font-medium text-white transition-transform hover:scale-105 dark:bg-white dark:text-black"
          >
            {t.hero.viewProjects}
          </a>
          <a
            href={`https://github.com/${SITE.githubUsername}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full border border-black/15 px-6 py-2.5 text-sm font-medium transition-colors hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10"
          >
            <GithubIcon className="h-4 w-4" />
            {t.hero.github}
          </a>
          <a
            href={`mailto:${SITE.email}`}
            className="flex items-center gap-2 rounded-full border border-black/15 px-6 py-2.5 text-sm font-medium transition-colors hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10"
          >
            <Mail size={16} />
            {t.hero.contact}
          </a>
        </div>
      </motion.div>

      <motion.a
        href="#about"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 z-10 text-black/40 dark:text-white/40"
        aria-label="Scroll down"
      >
        <ArrowDown size={22} />
      </motion.a>
    </section>
  );
}
