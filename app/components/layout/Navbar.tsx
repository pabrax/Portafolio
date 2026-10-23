"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import { ThemeToggle } from "../theme-toggle";

const navItems = [
  { name: "Inicio", id: "home" },
  { name: "Sobre mí", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Experiencia", id: "experience" },
  { name: "Proyectos", id: "projects" },
  { name: "Contacto", id: "contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map(({ id }) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const linkClass = (id: string) =>
    `rounded-md px-3 py-2 text-sm transition-colors hover:bg-secondary hover:text-foreground ${
      activeId === id ? "text-foreground" : "text-muted-foreground"
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        isScrolled || isMenuOpen ? "border-b bg-background/85 backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      <nav aria-label="Principal" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="font-semibold tracking-tight">
          pabrax
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={activeId === item.id ? "location" : undefined}
                className={linkClass(item.id)}
              >
                {item.name}
              </a>
            </li>
          ))}
          <li>
            <ThemeToggle />
          </li>
        </ul>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </Button>
        </div>
      </nav>

      {isMenuOpen && (
        <ul id="mobile-menu" className="space-y-1 border-t px-4 pb-3 pt-2 md:hidden">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={activeId === item.id ? "location" : undefined}
                onClick={() => setIsMenuOpen(false)}
                className={`block ${linkClass(item.id)}`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
