import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (window.location.pathname === "/") {
      e.preventDefault();
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || location === "/about" || mobileMenuOpen
          ? "bg-zinc-950/95 backdrop-blur-md border-b border-white/5 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/">
            <a className="flex items-center">
              <img 
                src="/logo.png" 
                alt="The Venture Beast" 
                className="h-14 w-auto object-contain cursor-pointer"
              />
            </a>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a
            href="/#services"
            onClick={(e) => scrollToSection(e, "services")}
            className="relative py-1 text-sm font-medium text-white/80 hover:text-white transition-all duration-300 hover:[text-shadow:0_0_8px_rgba(249,115,22,0.6)] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-center"
          >
            Services
          </a>
          <a
            href="/#work"
            onClick={(e) => scrollToSection(e, "work")}
            className="relative py-1 text-sm font-medium text-white/80 hover:text-white transition-all duration-300 hover:[text-shadow:0_0_8px_rgba(249,115,22,0.6)] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-center"
          >
            Case Studies
          </a>
          <a
            href="/#process"
            onClick={(e) => scrollToSection(e, "process")}
            className="relative py-1 text-sm font-medium text-white/80 hover:text-white transition-all duration-300 hover:[text-shadow:0_0_8px_rgba(249,115,22,0.6)] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-center"
          >
            Process
          </a>
          <Link href="/about">
            <a className="relative py-1 text-sm font-medium text-white/80 hover:text-white transition-all duration-300 hover:[text-shadow:0_0_8px_rgba(249,115,22,0.6)] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-center">
              About
            </a>
          </Link>
        </nav>

        <div className="hidden md:block">
          <Button
            asChild
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 rounded-full"
          >
            <a href="https://cal.com/the-venture-beast-lxgerj/30min" target="_blank" rel="noopener noreferrer">
              Book a Call
            </a>
          </Button>
        </div>

        {/* Mobile menu trigger */}
        <button
          className="md:hidden text-white/80 hover:text-white p-2 focus:outline-none cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden absolute top-[100%] left-0 right-0 bg-zinc-950/95 backdrop-blur-lg border-b border-white/5 overflow-hidden z-40"
          >
            <div className="flex flex-col gap-6 px-6 py-8">
              <a
                href="/#services"
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  scrollToSection(e, "services");
                }}
                className="text-lg font-medium text-white/80 hover:text-white transition-colors"
              >
                Services
              </a>
              <a
                href="/#work"
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  scrollToSection(e, "work");
                }}
                className="text-lg font-medium text-white/80 hover:text-white transition-colors"
              >
                Case Studies
              </a>
              <a
                href="/#process"
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  scrollToSection(e, "process");
                }}
                className="text-lg font-medium text-white/80 hover:text-white transition-colors"
              >
                Process
              </a>
              <Link href="/about">
                <a
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-white/80 hover:text-white transition-colors"
                >
                  About
                </a>
              </Link>
              <Button
                asChild
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-base w-full flex items-center justify-center cursor-pointer rounded-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                <a href="https://cal.com/the-venture-beast-lxgerj/30min" target="_blank" rel="noopener noreferrer">
                  Book a Call
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
