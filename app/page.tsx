import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      {/* Fondo animado con gradientes */}
      <div className="fixed inset-0 z-0 opacity-50">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f15_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f15_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Contenido principal */}
      <div className="relative z-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <ContactSection />
        </div>
      </div>
    </div>
  );
}
