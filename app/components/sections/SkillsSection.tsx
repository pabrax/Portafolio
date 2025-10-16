import { Badge } from "../ui/badge";
import { Card } from "../ui/card";
import { 
  Code, 
  Database, 
  Globe, 
  Brain,
  Terminal,
  Smartphone,
  Server,
  Bot,
  Cpu,
  FileCode,
  Layers,
  Zap,
  Package,
  GitBranch,
  Settings,
  Workflow,
  Cloud
} from "lucide-react";

// Función para obtener el icono de cada tecnología
const getTechIcon = (tech: string) => {
  const iconMap: { [key: string]: React.ElementType } = {
    // Backend
    'Python': Code,
    'Node.js': Server,
    'Go': Cpu,
    'C#': FileCode,
    'Bash': Terminal,
    'TypeScript': Code,
    'FastAPI': Zap,
    
    // Frontend
    'React': Layers,
    'Angular': Globe,
    'Astro': Zap,
    'HTML': Globe,
    'CSS': Smartphone,
    'JavaScript': Code,
    
    // Bases de Datos
    'MySQL': Database,
    'SQL Server': Database,
    'MongoDB': Database,
    'PostgreSQL': Database,
    
    // Herramientas & DevOps
    'Docker': Package,
    'Git': GitBranch,
    'Bots': Bot,
    'Automatizaciones': Workflow,
    'ETL': Settings,
    'Linux': Terminal,
    'APIs RESTful': Server,
    'Sistemas RAG': Brain
  };
  
  return iconMap[tech] || Code;
};

// Función para obtener el link de cada tecnología
const getTechLink = (tech: string) => {
  const linkMap: { [key: string]: string } = {
    // Backend
    'Python': 'http://github.com/pabrax/py-rag-system',
    'Node.js': 'https://nodejs.org',
    'Go': 'https://golang.org',
    'C#': 'https://github.com/pabrax/Proyecto_ASW',
    'TypeScript': 'https://github.com/pabrax/portafolio',
    'FastAPI': 'https://github.com/pabrax/LocalSongs',
    
    // Frontend
    'React': 'https://github.com/pabrax/portafolio',
    'Angular': 'https://github.com/pabrax/Proyecto_ASW',
    'Astro': 'https://github.com/pabrax/PortFolio_old',
    'HTML': '#experience',
    'CSS': '#projects',
    'JavaScript': 'https://github.com/pabrax/wikiYMorty',
    
    // Bases de Datos
    'MySQL': '#experience',
    'SQL Server': '#experience',
    'MongoDB': '#experience',
    'PostgreSQL': '#projects',
    
    // Herramientas & DevOps
    'Docker': 'https://docker.com',
    'Git': 'https://github.com/pabrax',
    'Linux': '#projects',
    'Bots': '#projects',
    'Automatizaciones': '#projects',
    'ETL': '#experience',
    'APIs RESTful': '#experience',
    'Sistemas RAG': '#projects'
  };
  
  return linkMap[tech] || '#projects';
};

const skillCategories = [
  {
    title: "Backend",
    skills: ["Python", "Node.js", "FastAPI", "Go", "C#", "TypeScript"],
    badgeClass: "badge-primary"
  },
  {
    title: "Frontend",
    skills: ["React", "Angular", "Astro", "HTML", "CSS", "JavaScript"],
    badgeClass: "badge-secondary"
  },
  {
    title: "Bases de Datos",
    skills: ["MySQL", "SQL Server", "MongoDB", "PostgreSQL"],
    badgeClass: "badge-accent"
  },
  {
    title: "Herramientas & DevOps",
    skills: ["Docker", "Git", "Linux", "Bots", "Automatizaciones", "ETL", "APIs RESTful", "Sistemas RAG"],
    badgeClass: "badge-ai"
  }
];

export function SkillsSection() {
  return (
    <section id="skills" className="mb-24 scroll-mt-20">
      <h2 className="mb-8 text-center text-3xl md:text-4xl font-bold text-foreground">
        Skills & Tecnologías
      </h2>
      
      <div className="grid gap-6 md:grid-cols-2">
        {skillCategories.map((category) => (
          <Card key={category.title} className="border-border/50 bg-card/50 p-6 backdrop-blur card-shadow">
            <h3 className="mb-4 font-semibold text-lg">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => {
                const Icon = getTechIcon(skill);
                const link = getTechLink(skill);
                const isExternalLink = link.startsWith('http');
                
                return (
                  <a
                    key={skill}
                    href={link}
                    target={isExternalLink ? "_blank" : "_self"}
                    rel={isExternalLink ? "noopener noreferrer" : undefined}
                    className="inline-block"
                  >
                    <Badge 
                      variant="outline"
                      className={`${category.badgeClass} cursor-pointer transition-all duration-200 hover:scale-110 hover:shadow-md flex items-center gap-2 px-3 py-1.5`}
                    >
                      <Icon className="w-4 h-4" />
                      {skill}
                    </Badge>
                  </a>
                );
              })}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
