"use client";

import { Reveal } from "@/components/Reveal";
import { renderRichText, useI18n } from "@/lib/i18n";

export function About() {
  const { t } = useI18n();

  return (
    <section id="about" className="mx-auto max-w-4xl px-6 py-28">
      <Reveal>
        <h2 className="mb-8 font-mono text-sm uppercase tracking-widest text-black/40 dark:text-white/40">
          {t.about.heading}
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="text-2xl leading-relaxed text-black/80 dark:text-white/80 sm:text-3xl">
          {renderRichText(t.about.body)}
        </p>
      </Reveal>
    </section>
  );
}
