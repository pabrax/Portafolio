import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Github, ExternalLink } from "lucide-react";
// import { ImageWithFallback } from "../image/ImageWithFallback";

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
    'Java': 'badge-primary',
    
    // Frontend
    'React': 'badge-secondary',
    'Angular': 'badge-secondary',
    'Astro': 'badge-secondary',
    'Next.js': 'badge-secondary',
    'Vue.js': 'badge-secondary',
    
    // Bases de datos
    'MySQL': 'badge-accent',
    'MongoDB': 'badge-accent',
    'PostgreSQL': 'badge-accent',
    'SQL Server': 'badge-accent',
    'Redis': 'badge-accent',
    
    // Herramientas y otros
    'Docker': 'badge-ai',
    'Linux': 'badge-ai',
    'Git': 'badge-ai',
    'REST API': 'badge-ai',
    'GitHub': 'badge-ai',
    'AWS': 'badge-ai',
    'Tailwind CSS': 'badge-secondary'
  };
  
  return techColors[tech] || 'badge-primary';
};

const projects = [
  {
    title: "LocalSongs - Music Downloader",
    description: "Aplicación web para descargar música de YouTube y Spotify mediante URLs. Cliente desarrollado con Next.js y backend con FastAPI, con soporte para descargas de playlists y selección de calidad de audio.",
    technologies: ["Python", "FastAPI", "Next.js", "React", "yt-dlp", "Spotdl"],
    image: "/images/localsongs_preview.jpeg",
    github: "https://github.com/pabrax/localsongs",
    demo: "https://localsongs.vercel.app"
  },
  {
    title: "RAG System - Document AI",
    description: "Sistema RAG (Retrieval-Augmented Generation) desarrollado con LlamaIndex y FastAPI. Permite consultar documentos usando LLMs gratuitos como DeepSeek, con capacidad de ingestar múltiples formatos de archivos.",
    technologies: ["Python", "FastAPI", "LlamaIndex", "DeepSeek", "RAG", "AI"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMGRvY3VtZW50JTIwcHJvY2Vzc2luZ3xlbnwxfHx8fDE3NTk5NjY2Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    github: "https://github.com/pabrax/rag-system",
    demo: null
  },
  {
    title: "Naux Discord Bot",
    description: "Bot de Discord inteligente con capacidades de IA generativa, reproducción de música y comandos de propósito general. Desarrollado para integrarse perfectamente en servidores y responder de manera contextual.",
    technologies: ["Python", "Discord.py", "AI", "Music Bot", "Groq"],
    image: "images/naux_preview.png",
    github: "https://github.com/pabrax/naux-discord-bot",
    demo: null
  },
  {
    title: "Dotfiles Configuration",
    description: "Configuración personalizada del entorno de desarrollo usando Bash y Linux. Automatización completa del setup de herramientas, aliases, configuraciones de terminal y scripts de productividad.",
    technologies: ["Bash", "Linux", "Git", "Vim", "Terminal", "Automation"],
    image: "/images/dotfiles_preview.png",
    github: "https://github.com/pabrax/dotfiles",
    demo: null
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="mb-24 scroll-mt-20">
      <h2 className="mb-8 text-center text-3xl md:text-4xl font-bold text-foreground">
        Proyectos Destacados
      </h2>
      
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col overflow-hidden border-border/50 bg-card/50 backdrop-blur card-shadow">
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            
            <div className="flex flex-col p-6">
              <h3 className="mb-3">
                <span className="gradient-text-accent font-semibold">{project.title}</span>
              </h3>
              
              <p className="mb-4 flex-grow text-muted-foreground">
                {project.description}
              </p>
              
              <div className="mb-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
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
              
              <div className="flex gap-3">
                {project.github && (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    asChild
                    className="flex-1 project-link-hover"
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Código
                    </a>
                  </Button>
                )}
                {project.demo && (
                  <Button 
                    size="sm" 
                    asChild
                    className="flex-1 btn-primary-hover"
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
