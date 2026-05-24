import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center pt-24 overflow-hidden bg-background">
      {/* Abstract Background Effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[320px] h-[320px] bg-primary/20 rounded-full blur-[80px] opacity-50 mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-900/20 rounded-full blur-[96px] opacity-40 mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
        {/* Subtle orange glow at the bottom transitioning into the next section */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-[300px] pointer-events-none translate-y-1/2" 
          style={{
            background: "radial-gradient(circle at center, rgba(255,115,0,0.12), transparent 70%)"
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 text-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm font-medium text-white/80 tracking-wide uppercase">
            Performance Marketing Agency
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white mb-6 leading-[1.1]"
        >
          We Turn Ad Budgets Into{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
            Scalable Revenue.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-2xl text-white/60 mb-10 max-w-3xl mx-auto font-medium"
        >
          Data-driven Meta & Google Ads strategies for D2C brands, B2B SaaS, and funded startups. 
          Stop guessing. Start scaling profitably.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            className="w-full sm:w-auto h-14 px-8 text-base font-bold bg-primary hover:bg-primary/90 text-white rounded-full transition-all shadow-[0_0_40px_rgba(249,115,22,0.3)] hover:shadow-[0_0_60px_rgba(249,115,22,0.5)]"
            asChild
          >
            <a href="https://cal.com/the-venture-beast-lxgerj/30min" target="_blank" rel="noopener noreferrer">
              Book a Strategy Call
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto h-14 px-8 text-base font-bold bg-white/5 border-white/10 hover:bg-white/10 text-white rounded-full transition-all"
            asChild
          >
            <a href="#work" onClick={(e) => scrollToSection(e, "work")}>
              View Case Studies
            </a>
          </Button>
        </motion.div>


      </div>
    </section>
  );
}
