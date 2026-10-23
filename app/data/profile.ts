export const profile = {
  name: "Pablo Espinosa",
  handle: "pabrax",
  role: "Data & Automation",
  company: "Servicios Nutresa",
  location: "Medellín, Colombia",
  headline: "Datos, automatización y backend",
  summary:
    "Convierto información comercial, financiera y de costos en tableros que los equipos de mercadeo usan para decidir sobre marcas e innovaciones.",
  about: [
    "Trabajo con datos y automatización en la Vicepresidencia de Mercadeo de Servicios Nutresa, donde descargo, proceso y convierto información comercial, financiera y de costos en tableros (Power BI y HTML) para equipos de marcas e innovaciones, principalmente de México. Mi día a día combina Python (Pandas), SQL, Power Query y SAP, sobre datos alojados en AWS (Athena, S3 y Redshift).",
    "Antes, en Colcafé, automaticé procesos del área financiera con Google Apps Script, Python y VBA, desarrollé 3 aplicaciones en AppSheet y optimicé un simulador de margen bruto, reduciendo al menos 1 hora por ejecución.",
    "Fuera del trabajo construyo software: APIs con FastAPI, interfaces con Next.js, bots y un entorno Linux propio (Arch y homelab en casa), todo en GitHub. Uso agentes de IA como Claude para acelerar el análisis y la automatización.",
    "Estudio Tecnología en Desarrollo de Software en el ITM. Mi meta es crecer hacia ingeniería de sistemas, cloud e IA aplicada, y me estoy formando en esa dirección (AWS/Azure).",
  ],
  facts: [
    { label: "Rol", value: "Data & Automation · Servicios Nutresa" },
    { label: "Estudio", value: "Tecnología en Desarrollo de Software · ITM" },
    { label: "Infra", value: "Arch Linux · Docker · homelab propio" },
    { label: "Ahora", value: "Cloud (AWS / Azure) e IA aplicada" },
  ],
} as const;

export const contactLinks = [
  {
    name: "Email",
    value: "soypablo0420@gmail.com",
    href: "mailto:soypablo0420@gmail.com",
    icon: "mail",
  },
  {
    name: "LinkedIn",
    value: "linkedin.com/in/pabrax",
    href: "https://www.linkedin.com/in/pabrax/",
    icon: "linkedin",
  },
  {
    name: "GitHub",
    value: "github.com/pabrax",
    href: "https://github.com/pabrax",
    icon: "github",
  },
] as const;

export type ContactIcon = (typeof contactLinks)[number]["icon"];
