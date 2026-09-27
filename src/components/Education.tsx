"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { useI18n } from "@/lib/i18n";

export function Education() {
  const { t } = useI18n();

  return (
    <section id="education" className="mx-auto max-w-4xl px-6 py-16">
      <Reveal>
        <h2 className="mb-8 font-mono text-sm uppercase tracking-widest text-black/40 dark:text-white/40">
          {t.education.heading}
        </h2>
      </Reveal>

      <div className="space-y-4">
        {t.education.items.map((item, i) => (
          <motion.div
            key={item.degree}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="flex gap-4 rounded-xl border border-black/10 p-5 dark:border-white/10"
          >
            <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black">
              <GraduationCap size={18} />
            </span>
            <div>
              <h3 className="font-semibold">{item.degree}</h3>
              <p className="text-sm text-black/70 dark:text-white/70">{item.field}</p>
              <p className="mt-1 text-sm text-black/50 dark:text-white/50">
                {item.institution}
              </p>
              <p className="mt-1 font-mono text-xs text-black/40 dark:text-white/40">
                {item.period}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
