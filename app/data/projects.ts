export type Project = {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  imageAlt: string;
  github?: string;
  demo?: string;
  /** Presentation: rendered as the large feature card. */
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "SnapLoad",
    featured: true,
    description:
      "Aplicación web para descargar audio y video de YouTube, YouTube Music y Spotify a partir de una URL. Cliente en Next.js y API REST en FastAPI con yt-dlp y spotdl, soporte para playlists y selección de calidad.",
    technologies: ["Python", "FastAPI", "Next.js", "TypeScript", "yt-dlp", "Docker"],
    image: "/preview/snapload-ui.png",
    imageAlt: "Interfaz de SnapLoad",
    github: "https://github.com/pabrax/SnapLoad",
    demo: "https://snap-load-ui.vercel.app",
  },
  {
    title: "Naux Discord Bot",
    description:
      "Bot de Discord de propósito general pensado como asistente personal: IA generativa, reproducción de música y comandos para servidores.",
    technologies: ["Python", "Discord.py", "Groq"],
    image: "/preview/naux_preview.png",
    imageAlt: "Naux, bot de Discord",
    github: "https://github.com/pabrax/naux-discord-bot",
  },
  {
    title: "Dotfiles",
    description:
      "Configuración reproducible de mi entorno principal en Arch Linux: shell, escritorio y herramientas que mantengo como campo de práctica de mi homelab.",
    technologies: ["Linux (Arch)", "Bash", "Git"],
    image: "/preview/dotfiles_preview.png",
    imageAlt: "Captura del entorno configurado con dotfiles",
    github: "https://github.com/pabrax/dotfiles",
  },
  {
    title: "Portafolio",
    description:
      "Este sitio: portafolio personal con Next.js, TypeScript y Tailwind CSS, tema claro/oscuro y contenido tipado en módulos de datos.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/preview/portafolio_preview.jpeg",
    imageAlt: "Vista previa del portafolio",
    github: "https://github.com/pabrax/Portafolio",
    demo: "https://portafolio-lovat-rho.vercel.app/",
  },
];
