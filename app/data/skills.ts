export type SkillCategory = {
  title: string;
  skills: string[];
  /** Presentation weight in the bento grid: how central the area is to the current role. */
  weight: "lead" | "major" | "minor";
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Datos",
    weight: "lead",
    skills: ["Python", "Pandas", "SQL", "Power BI", "Power Query", "ETL", "SAP"],
  },
  {
    title: "Cloud",
    weight: "minor",
    skills: ["AWS Athena", "AWS S3", "AWS Redshift"],
  },
  {
    title: "Backend",
    weight: "minor",
    skills: ["FastAPI", "Node.js", "C#", "Java", "PostgreSQL"],
  },
  {
    title: "Frontend",
    weight: "major",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Automatización",
    weight: "major",
    skills: ["Google Apps Script", "VBA", "AppSheet", "Looker Studio", "Bash", "PowerShell"],
  },
  {
    title: "Infra y herramientas",
    weight: "major",
    skills: ["Linux (Arch)", "Docker", "Git", "GitHub", "Jira", "Agentes de IA"],
  },
];
