"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { FacebookIcon, GithubIcon, InstagramIcon } from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import { SITE } from "@/data/config";
import { useI18n } from "@/lib/i18n";

export function Contact() {
  const { t } = useI18n();

  const contacts = [
    {
      label: t.contact.labels.email,
      value: SITE.email,
      href: `mailto:${SITE.email}`,
      icon: Mail,
    },
    {
      label: t.contact.labels.github,
      value: `github.com/${SITE.githubUsername}`,
      href: `https://github.com/${SITE.githubUsername}`,
      icon: GithubIcon,
    },
    {
      label: t.contact.labels.facebook,
      value: "bun.479574",
      href: SITE.facebook,
      icon: FacebookIcon,
    },
    {
      label: t.contact.labels.instagram,
      value: "@rmenoz_bun",
      href: SITE.instagram,
      icon: InstagramIcon,
    },
    {
      label: t.contact.labels.phone,
      value: SITE.phone,
      href: `tel:${SITE.phone}`,
      icon: Phone,
    },
  ];

  return (
    <section id="contact" className="mx-auto max-w-4xl px-6 py-28">
      <Reveal>
        <h2 className="mb-8 font-mono text-sm uppercase tracking-widest text-black/40 dark:text-white/40">
          {t.contact.heading}
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <h3 className="mb-10 text-3xl font-semibold tracking-tight sm:text-4xl">
          {t.contact.cta}
        </h3>
      </Reveal>

      <div className="grid gap-3 sm:grid-cols-2">
        {contacts.map((c, i) => (
          <motion.a
            key={c.label}
            href={c.href}
            target={c.href.startsWith("http") ? "_blank" : undefined}
            rel={c.href.startsWith("http") ? "noreferrer" : undefined}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-4 rounded-xl border border-black/10 p-4 transition-colors hover:bg-black/5 dark:border-white/10 dark:hover:bg-white/10"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black">
              <c.icon className="h-[18px] w-[18px]" />
            </span>
            <span>
              <span className="block text-xs uppercase tracking-wide text-black/40 dark:text-white/40">
                {c.label}
              </span>
              <span className="block text-sm font-medium">{c.value}</span>
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
