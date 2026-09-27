export function formatProjectName(name: string): string {
  return name
    .replace(/[_-]+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

const LANGUAGE_COLORS: Record<string, string> = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Python: "#3572A5",
  Java: "#b07219",
  C: "#555555",
  "C++": "#f34b7d",
  "Jupyter Notebook": "#DA5B0B",
  HTML: "#e34c26",
  CSS: "#563d7c",
};

export function languageColor(language: string | null): string {
  if (!language) return "#8b8b8b";
  return LANGUAGE_COLORS[language] ?? "#8b8b8b";
}
