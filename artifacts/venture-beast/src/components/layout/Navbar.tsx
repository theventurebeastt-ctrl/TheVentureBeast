import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-black tracking-tight text-white uppercase">
            THE <span className="text-primary">VENTURE BEAST</span>
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#services"
            onClick={(e) => scrollToSection(e, "services")}
            className="text-sm font-medium text-white/80 hover:text-white transition-colors"
          >
            Services
          </a>
          <a
            href="#work"
            onClick={(e) => scrollToSection(e, "work")}
            className="text-sm font-medium text-white/80 hover:text-white transition-colors"
          >
            Case Studies
          </a>
          <a
            href="#process"
            onClick={(e) => scrollToSection(e, "process")}
            className="text-sm font-medium text-white/80 hover:text-white transition-colors"
          >
            Process
          </a>
          <a
            href="#about"
            onClick={(e) => scrollToSection(e, "about")}
            className="text-sm font-medium text-white/80 hover:text-white transition-colors"
          >
            About
          </a>
        </nav>

        <div className="hidden md:block">
          <Button
            asChild
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6"
          >
            <a href="#contact" onClick={(e) => scrollToSection(e, "contact")}>
              Book a Call
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
