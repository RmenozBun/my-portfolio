"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { locale, setLocale, t } = useI18n();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#skills", label: t.nav.skills },
    { href: "#education", label: t.nav.education },
    { href: "#projects", label: t.nav.projects },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        scrolled
          ? "border-b border-black/10 bg-white/80 backdrop-blur-md dark:border-white/10 dark:bg-black/80"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-sm font-semibold tracking-tight">
          RmenozBun<span className="text-black/40 dark:text-white/40">.dev</span>
        </a>
        <div className="flex items-center gap-6">
          <ul className="hidden items-center gap-6 text-sm sm:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative text-black/70 transition-colors hover:text-black dark:text-white/70 dark:hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center rounded-full border border-black/15 p-0.5 font-mono text-xs dark:border-white/20">
            <button
              onClick={() => setLocale("en")}
              className={`rounded-full px-2.5 py-1 transition-colors ${
                locale === "en"
                  ? "bg-black text-white dark:bg-white dark:text-black"
                  : "text-black/50 dark:text-white/50"
              }`}
              aria-pressed={locale === "en"}
            >
              EN
            </button>
            <button
              onClick={() => setLocale("th")}
              className={`rounded-full px-2.5 py-1 transition-colors ${
                locale === "th"
                  ? "bg-black text-white dark:bg-white dark:text-black"
                  : "text-black/50 dark:text-white/50"
              }`}
              aria-pressed={locale === "th"}
            >
              ไทย
            </button>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}
