"use client";

import { SITE } from "@/data/config";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-black/10 px-6 py-8 text-center text-xs text-black/40 dark:border-white/10 dark:text-white/40">
      © {new Date().getFullYear()} {SITE.name}. {t.footer.text}
    </footer>
  );
}
