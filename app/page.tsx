import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Saltar al contenido
      </a>

      <Navbar />

      <main id="main" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <footer className="mx-auto max-w-6xl border-t px-4 py-8 text-center text-sm text-muted-foreground sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} Pablo Espinosa · Hecho con Next.js y Tailwind CSS</p>
      </footer>
    </div>
  );
}
