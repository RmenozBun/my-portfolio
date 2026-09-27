"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { en, th, type Dictionary } from "@/lib/dictionaries";

type Locale = "en" | "th";

const DICTS: Record<Locale, Dictionary> = { en, th };
const STORAGE_KEY = "locale";

const I18nContext = createContext<{
  locale: Locale;
  t: Dictionary;
  setLocale: (locale: Locale) => void;
}>({
  locale: "en",
  t: en,
  setLocale: () => {},
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "en" || stored === "th") {
        // Syncing from localStorage on mount, not derivable from props/state.
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setLocaleState(stored);
      }
    } catch {
      // ignore storage access issues
    }
  }, []);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore storage access issues
    }
  };

  const value = useMemo(
    () => ({ locale, t: DICTS[locale], setLocale }),
    [locale]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  return useContext(I18nContext);
}

// Renders an about-body array (strings and { strong } segments) as JSX.
export function renderRichText(
  parts: (string | { strong: string })[]
) {
  return parts.map((part, i) =>
    typeof part === "string" ? (
      <span key={i}>{part}</span>
    ) : (
      <span key={i} className="font-semibold text-black dark:text-white">
        {part.strong}
      </span>
    )
  );
}
