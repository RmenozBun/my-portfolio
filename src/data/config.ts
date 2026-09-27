export const SITE = {
  name: "Theeranat Aiyarakhom",
  role: "Computer Science Student",
  tagline: "Building things with AI, Computer Vision & Software Engineering",
  githubUsername: "RmenozBun",
  email: "theeranat2445@gmail.com",
  facebook: "https://www.facebook.com/bun.479574/",
  instagram: "https://www.instagram.com/rmenoz_bun/",
  phone: "0945984455",
};

// Repos to hide from the Projects section (not real / not relevant projects)
export const EXCLUDED_REPOS = [
  "RmenozBun", // github profile readme repo
  "my-portfolio", // this portfolio site's own source code
  "csc350_crud_6601567",
  "cat_ferret",
  "Water_dispenser_backend_system",
  "my-agent-skills-full-stack",
  "my-claude-skills-full-stack",
];

// Manual description overrides for repos with no (or an unclear) GitHub description
export const PROJECT_DESCRIPTION_OVERRIDES: Record<string, string> = {
  RSU_Wayfinding_System:
    "Campus wayfinding system for Rangsit University with a Flask backend and an interactive map.",
};
