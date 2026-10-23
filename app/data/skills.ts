export type SkillCategory = { title: string; skills: string[] };

export const skillCategories: SkillCategory[] = [
  {
    title: "Datos",
    skills: ["Python", "Pandas", "SQL", "Power BI", "Power Query", "ETL", "SAP"],
  },
  {
    title: "Cloud",
    skills: ["AWS Athena", "AWS S3", "AWS Redshift"],
  },
  {
    title: "Backend",
    skills: ["FastAPI", "Node.js", "C#", "Java", "PostgreSQL"],
  },
  {
    title: "Frontend",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Automatización",
    skills: ["Google Apps Script", "VBA", "AppSheet", "Looker Studio", "Bash", "PowerShell"],
  },
  {
    title: "Infra y herramientas",
    skills: ["Linux (Arch)", "Docker", "Git", "GitHub", "Jira", "Agentes de IA"],
  },
];
