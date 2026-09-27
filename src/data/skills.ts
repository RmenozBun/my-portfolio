export type SkillCategoryKey =
  | "languages"
  | "ai"
  | "software"
  | "database"
  | "frameworks"
  | "exposure"
  | "tools";

export type SkillIcon =
  | "javascript"
  | "python"
  | "java"
  | "c"
  | "cplusplus"
  | "yolo"
  | "oop"
  | "dsa"
  | "mysql"
  | "mongodb"
  | "react"
  | "nextjs"
  | "vue"
  | "nuxt"
  | "nodejs"
  | "flask"
  | "git"
  | "github"
  | "jupyter"
  | "netbeans"
  | "arduino"
  | "postman"
  | "docker"
  | "vercel"
  | "render";

export const SKILL_CATEGORIES: {
  key: SkillCategoryKey;
  items: { name: string; icon: SkillIcon; color?: string }[];
}[] = [
  {
    key: "languages",
    items: [
      { name: "JavaScript", icon: "javascript", color: "#F7DF1E" },
      { name: "Python", icon: "python", color: "#3776AB" },
      { name: "Java", icon: "java", color: "#ED8B00" },
      { name: "C", icon: "c" },
      { name: "C++", icon: "cplusplus", color: "#00599C" },
    ],
  },
  {
    key: "ai",
    items: [{ name: "YOLO / Computer Vision", icon: "yolo", color: "#00FFFF" }],
  },
  {
    key: "software",
    items: [
      { name: "OOP Design", icon: "oop", color: "#8b8b8b" },
      { name: "Data Structures & Algorithms", icon: "dsa", color: "#8b8b8b" },
    ],
  },
  {
    key: "database",
    items: [
      { name: "MySQL", icon: "mysql", color: "#4479A1" },
      { name: "MongoDB", icon: "mongodb", color: "#47A248" },
    ],
  },
  {
    key: "frameworks",
    items: [
      { name: "Vue.js", icon: "vue", color: "#4FC08D" },
      { name: "Nuxt", icon: "nuxt", color: "#00DC82" },
      { name: "Node.js", icon: "nodejs", color: "#339933" },
      { name: "Flask", icon: "flask" },
    ],
  },
  {
    key: "exposure",
    items: [
      { name: "React", icon: "react", color: "#61DAFB" },
      { name: "Next.js", icon: "nextjs" },
    ],
  },
  {
    key: "tools",
    items: [
      { name: "Git", icon: "git", color: "#F05032" },
      { name: "GitHub", icon: "github" },
      { name: "Jupyter Notebook", icon: "jupyter", color: "#F37626" },
      { name: "NetBeans", icon: "netbeans", color: "#1B6AC6" },
      { name: "Arduino IDE", icon: "arduino", color: "#00979D" },
      { name: "Postman", icon: "postman", color: "#FF6C37" },
      { name: "Docker", icon: "docker", color: "#2496ED" },
      { name: "Vercel", icon: "vercel" },
      { name: "Render", icon: "render", color: "#46E3B7" },
    ],
  },
];
