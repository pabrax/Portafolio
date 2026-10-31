export type Experience = {
  company: string;
  position: string;
  period: string;
  duration: string;
  location: string;
  mode: string;
  summary: string;
  highlights: string[];
  technologies: string[];
  current?: boolean;
};

export const experiences: Experience[] = [
  {
    company: "Servicios Nutresa",
    position: "Especialista de Data y Producto",
    period: "Mar. 2026 - Actualidad",
    duration: "Jornada completa",
    location: "Medellín, Antioquia, Colombia",
    mode: "Híbrido",
    current: true,
    summary:
      "Convierto datos comerciales, financieros y de costos en tableros que los equipos de mercadeo usan para decidir sobre marcas e innovaciones, principalmente en México.",
    highlights: [
      "Extraigo datos desde Excel (AFO), SAP y AWS (Athena, S3 y Redshift), los limpio y los consolido con Python (Pandas), SQL y Power Query.",
      "Diseño y mantengo tableros en Power BI y HTML con métricas comerciales, de costos y materiales.",
      "Reduzco trabajo manual repetitivo con scripts y flujos automatizados dentro del área de mercadeo.",
      "Exploro con el equipo cómo integrar agentes de IA en los procesos del área.",
    ],
    technologies: ["Python", "Pandas", "SQL", "Power Query", "Power BI", "SAP", "AWS Athena", "AWS S3", "AWS Redshift"],
  },
  {
    company: "Colcafé S.A.S.",
    position: "Practicante Transformación Digital",
    period: "Feb. 2025 - Ago. 2025",
    duration: "7 meses",
    location: "Medellín, Antioquia, Colombia",
    mode: "Presencial",
    summary:
      "Automaticé y ordené procesos manuales del área financiera con código, aplicaciones no-code y analítica de datos.",
    highlights: [
      "Reduje al menos 1 hora por ejecución el tiempo de un simulador de margen bruto: corría mes a mes sobre una proyección de 12 meses, con 5 a 10 minutos por mes entre ejecución y autenticación, y lo optimicé para eliminar ese proceso secuencial.",
      "Desarrollé 3 aplicaciones no-code en AppSheet que centralizaron la gestión de datos internos y mejoraron su visualización en tiempo real.",
      "Automaticé tareas administrativas y operativas con Google Apps Script, macros de Excel y scripts en Python/VBA.",
      "Construí procesos ETL con Python y Pandas, y dashboards en Power BI y Looker Studio.",
      "Documenté proyectos, tableros y desarrollos, versionando el código en Git/GitHub y gestionando tareas del equipo en Jira.",
    ],
    technologies: ["Python", "Pandas", "Google Apps Script", "VBA", "AppSheet", "Power BI", "Looker Studio", "Git", "Jira"],
  },
];
