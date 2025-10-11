import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Calendar, MapPin } from "lucide-react";

// Función para asignar colores a las tecnologías
const getTechBadgeClass = (tech: string) => {
  const techColors: { [key: string]: string } = {
    // Lenguajes
    'Python': 'badge-primary',
    'Node.js': 'badge-primary',
    'Go': 'badge-primary',
    'C#': 'badge-primary',
    'TypeScript': 'badge-primary',
    'JavaScript': 'badge-primary',
    'Google Apps Script': 'badge-primary',
    
    // Frontend
    'React': 'badge-secondary',
    'Angular': 'badge-secondary',
    'Astro': 'badge-secondary',
    
    // Bases de datos
    'MySQL': 'badge-accent',
    'MongoDB': 'badge-accent',
    'PostgreSQL': 'badge-accent',
    'SQL Server': 'badge-accent',
    
    // Herramientas y otros
    'Docker': 'badge-ai',
    'Linux': 'badge-ai',
    'Git': 'badge-ai',
    'REST APIs': 'badge-ai',
    'GitHub': 'badge-ai',
    'AppSheet': 'badge-ai',
    'Power BI': 'badge-accent',
    'Pandas': 'badge-accent',
    'Jira': 'badge-ai'
  };
  
  return techColors[tech] || 'badge-primary';
};

const experiences = [
  {
    company: "Freelance",
    position: "Full Stack Developer",
    period: "2023 - Presente",
    duration: "2+ años",
    location: "Remoto",
    type: "Freelance",
    description: "Desarrollo de aplicaciones web completas desde el servidor hasta interfaces de usuario, especializado en APIs RESTful robustas y soluciones personalizadas para diversos clientes.",
    achievements: "Durante mi experiencia freelance he trabajado principalmente en desarrollo backend con Python, Node.js y C#, creando APIs escalables y sistemas de automatización. También he desarrollado interfaces frontend utilizando Astro y Angular, integrando servicios de terceros y optimizando el rendimiento de aplicaciones. He colaborado con equipos remotos, gestionado proyectos de forma independiente y entregado soluciones técnicas que han mejorado significativamente los procesos de negocio de mis clientes.",
    technologies: ["Python", "Node.js", "C#", "Astro", "Angular", "FastAPI", "PostgreSQL", "MongoDB", "Docker", "Git"]
  },
  {
    company: "Colcafé S.A.S.",
    position: "Practicante Transformación Digital",
    period: "Feb. 2025 - Ago. 2025",
    duration: "7 meses",
    location: "Medellín, Antioquia, Colombia",
    type: "Presencial",
    description: "Automatización de flujos de trabajo administrativos mediante Google Apps Script, logrando una reducción significativa en los tiempos operativos y eliminando tareas repetitivas.",
    achievements: "Desarrollé aplicaciones no-code con AppSheet para optimizar la gestión interna de datos y mejorar la visualización en tiempo real. Implementé procesos ETL utilizando Python y Pandas, complementado con dashboards interactivos en Power BI y Looker Studio para generar información accionable. Documenté y estandaricé procesos técnicos (macros, scripts y desarrollos) garantizando su sostenibilidad y reutilización a través de repositorios Git/GitHub. Impulsé la adopción de Jira como herramienta de gestión de tareas, fortaleciendo la trazabilidad y colaboración del equipo.",
    technologies: ["Python", "Google Apps Script", "AppSheet", "Power BI", "Pandas", "Jira", "Git", "GitHub"]
  }
];

export function ExperienceSection() {
  return (
    <section id="experience" className="mb-24 scroll-mt-20">
      <h2 className="mb-8 text-center text-3xl md:text-4xl font-bold text-foreground">
        Experiencia Profesional
      </h2>
      
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <Card key={index} className="border-border/50 bg-card/50 backdrop-blur card-shadow overflow-hidden">
            {/* Header con gradiente */}
            <div className="bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 p-6 border-b border-border/50">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div className="flex-1">
                  <h3 className="mb-2">
                    <span className="gradient-text text-xl font-bold">{exp.position}</span>
                  </h3>
                  <p className="text-lg mb-3">
                    <span className="gradient-text-secondary font-semibold">{exp.company}</span>
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </div>
                
                <div className="flex flex-col gap-2 text-muted-foreground min-w-0 md:min-w-[200px]">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="text-xs">{exp.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs bg-accent/50 text-accent-foreground px-2 py-1 rounded-full">{exp.type}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contenido principal */}
            <div className="p-6">
              {exp.achievements && (
                <div className="mb-6">
                  <h4 className="mb-4 font-semibold text-foreground flex items-center gap-2">
                    <span className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
                    Logros destacados
                  </h4>
                  <div className="bg-muted/30 p-4 rounded-lg border border-border/50">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {exp.achievements}
                    </p>
                  </div>
                </div>
              )}
              
              <div className="flex flex-wrap gap-2">
                <span className="text-sm font-medium text-muted-foreground mb-2 block w-full">Tecnologías utilizadas:</span>
                {exp.technologies.map((tech) => (
                  <a
                    key={tech}
                    href={`#${tech.toLowerCase().replace(/\s+/g, '-').replace(/\./g, '')}`}
                    className="inline-block"
                  >
                    <Badge 
                      variant="outline" 
                      className={`${getTechBadgeClass(tech)} cursor-pointer transition-all duration-200 hover:scale-110 hover:shadow-md`}
                    >
                      {tech}
                    </Badge>
                  </a>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}