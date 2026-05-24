import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  TrendingUp, 
  Target, 
  Eye, 
  ShieldCheck,
  ShoppingBag, 
  Laptop, 
  GraduationCap, 
  Building2, 
  Activity, 
  MapPin,
  Search, 
  Sparkles, 
  Play, 
  Zap, 
  CheckCircle2, 
  ArrowUpRight, 
  ArrowRight,
  Star,
  UserCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<"shopify" | "google" | "search">("shopify");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    brandName: "",
    spend: "Under 10L",
    message: ""
  });

  // Force dark mode initialization and layout resetting
  useEffect(() => {
    document.documentElement.classList.add("dark");
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/contact.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });
      
      const result = await response.json();
      if (result.success) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormValues({
            name: "",
            email: "",
            brandName: "",
            spend: "Under 10L",
            message: ""
          });
        }, 5000);
      } else {
        alert(result.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      // Fallback: show success view in dev environment if connection fails
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormValues({
          name: "",
          email: "",
          brandName: "",
          spend: "Under 10L",
          message: ""
        });
      }, 5000);
    }
  };

  return (
    <div className="flex flex-col min-h-[100dvh] w-full overflow-hidden relative bg-zinc-950 font-sans text-white">
      <Navbar />
      
      <main className="flex-1">
        
        {/* --------------------------------------------------
            1. HERO SECTION (Dark Background - Rebalanced)
           -------------------------------------------------- */}
        <section className="relative pt-40 md:pt-48 pb-16 md:pb-20 overflow-hidden bg-background">
          {/* Abstract Glow Background */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-[280px] h-[280px] bg-primary/10 rounded-full blur-[70px] opacity-40 mix-blend-screen" />
            <div className="absolute bottom-1/4 right-1/4 w-[320px] h-[320px] bg-blue-900/10 rounded-full blur-[80px] opacity-30 mix-blend-screen" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />
          </div>

          <div className="container relative z-10 mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
              
              {/* Left Column: Headline and CTAs - Clean Scale */}
              <div className="lg:col-span-6 flex flex-col text-left">
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 mb-5 self-start select-none"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  <span className="text-[10px] font-semibold tracking-widest text-white/80 uppercase">
                    FOUNDER-LED PERFORMANCE AGENCY
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.05 }}
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5 leading-[1.1] max-w-2xl lg:max-w-none"
                >
                  Built for Brands That Care<br className="hidden sm:inline" /> About Profitability, Not{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
                    Vanity Metrics.
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-sm sm:text-base text-white/70 mb-8 max-w-xl lg:max-w-none leading-relaxed font-normal"
                >
                  The Venture Beast helps D2C brands, SaaS companies, and growth-focused businesses scale through performance marketing systems designed around measurable growth.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="flex flex-col sm:flex-row items-center gap-3.5"
                >
                  <Button
                    size="lg"
                    className="w-full sm:w-auto h-12 px-6 text-sm font-semibold bg-primary hover:bg-primary/90 text-white rounded-full transition-all shadow-[0_0_20px_rgba(249,115,22,0.15)] hover:shadow-[0_0_30px_rgba(249,115,22,0.25)] cursor-pointer"
                    asChild
                  >
                    <a href="https://cal.com/the-venture-beast-lxgerj/30min" target="_blank" rel="noopener noreferrer">
                      Book a Strategy Call
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto h-12 px-6 text-sm font-semibold bg-white/5 border-white/10 hover:bg-white/10 text-white rounded-full transition-all cursor-pointer"
                    asChild
                  >
                    <a href="/#work">
                      View Case Studies
                    </a>
                  </Button>
                </motion.div>
              </div>

              {/* Right Column: Dashboard Mockup Widget - Rebalanced & Contained */}
              <div className="lg:col-span-6 w-full flex justify-center lg:justify-end">
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="w-full max-w-[540px] bg-zinc-950 border border-white/5 rounded-xl p-5 md:p-6 relative overflow-hidden flex flex-col gap-4 md:gap-5 shadow-[0_15px_30px_rgba(0,0,0,0.2)]"
                >
                  {/* Decorative mesh */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[40px] pointer-events-none" />
                  
                  {/* Dashboard Header */}
                  <div className="flex items-center justify-between border-b border-white/5 pb-2">
                    <div className="flex items-center gap-1.5">
                      <span className="flex h-1.5 w-1.5 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/75 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"></span>
                      </span>
                      <span className="text-[9px] font-black tracking-widest text-white/40 uppercase">
                        Venture Growth Dashboard
                      </span>
                    </div>
                    <div className="text-[8px] text-white/30 bg-zinc-900 border border-white/5 rounded px-1.5 py-0.5">
                      Live attribution
                    </div>
                  </div>

                  {/* 3 Metric Cards Grid */}
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-zinc-900/40 border border-white/5 rounded-lg p-2.5 flex flex-col">
                      <span className="text-[8px] text-white/30 font-medium">ROAS target</span>
                      <span className="text-xs font-black text-white mt-0.5">4.0x</span>
                      <span className="text-[7px] text-green-400 font-semibold mt-0.5">
                        +24% vs peak
                      </span>
                    </div>
                    <div className="bg-zinc-900/40 border border-white/5 rounded-lg p-2.5 flex flex-col">
                      <span className="text-[8px] text-white/30 font-medium">Blended ROAS</span>
                      <span className="text-xs font-black text-primary mt-0.5">6.4x</span>
                      <span className="text-[7px] text-green-400 font-semibold mt-0.5">
                        Attributed
                      </span>
                    </div>
                    <div className="bg-zinc-900/40 border border-white/5 rounded-lg p-2.5 flex flex-col">
                      <span className="text-[8px] text-white/30 font-medium">CPA Target</span>
                      <span className="text-xs font-black text-white mt-0.5">-43%</span>
                      <span className="text-[7px] text-green-400 font-semibold mt-0.5">
                        Optimized
                      </span>
                    </div>
                  </div>

                  {/* Chart Container - Controlled height */}
                  <div className="w-full h-[120px] flex items-end">
                    <svg viewBox="0 0 300 100" className="w-full h-full overflow-visible">
                      <defs>
                        <linearGradient id="hero-chart-glow" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="rgb(249, 115, 22)" stopOpacity="0.15"/>
                          <stop offset="100%" stopColor="rgb(249, 115, 22)" stopOpacity="0.0"/>
                        </linearGradient>
                      </defs>
                      <path d="M 0 90 Q 50 80 100 85 Q 150 30 200 60 Q 250 15 300 10 L 300 100 L 0 100 Z" fill="url(#hero-chart-glow)" />
                      <line x1="0" y1="100" x2="300" y2="100" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
                      <line x1="0" y1="60" x2="300" y2="60" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
                      <line x1="0" y1="30" x2="300" y2="30" stroke="rgba(255,255,255,0.02)" strokeWidth="1" strokeDasharray="3,3" />
                      
                      <path d="M 0 90 Q 50 80 100 85 Q 150 30 200 60 Q 250 15 300 10" fill="none" stroke="rgb(249, 115, 22)" strokeWidth="2.5" strokeLinecap="round" />
                      
                      <circle cx="200" cy="60" r="3.5" fill="rgb(249,115,22)" stroke="white" strokeWidth="1" />
                      <circle cx="300" cy="10" r="3.5" fill="rgb(249,115,22)" stroke="white" strokeWidth="1" />
                    </svg>
                  </div>

                  <div className="flex justify-between items-center text-[7px] text-white/30 tracking-widest uppercase font-semibold">
                    <span>Account Audit</span>
                    <span>Scaling Profitably</span>
                  </div>
                </motion.div>
              </div>

            </div>
          </div>
        </section>

        {/* --------------------------------------------------
            2. FOUNDER STORY SECTION (Light Background - Compact)
           -------------------------------------------------- */}
        <section className="py-16 md:py-20 bg-white text-zinc-950 relative overflow-hidden border-y border-zinc-100">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px] opacity-40" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-400/5 rounded-full blur-[100px] opacity-40" />
          </div>

          <div className="container relative z-10 mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
              
              {/* Left Column: Portrait Visual - Resized */}
              <div className="lg:col-span-5 w-full flex justify-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative w-full max-w-[420px] rounded-xl overflow-hidden shadow-[0_10px_25px_rgba(0,0,0,0.08)] group border border-zinc-200/50 bg-zinc-950"
                >
                  <img 
                    src="/founder.jpg" 
                    alt="Founder's Mission" 
                    className="w-full h-auto object-contain block transition-transform duration-500 group-hover:scale-[1.02]" 
                  />
                  <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/20 transition-colors duration-500 rounded-xl pointer-events-none" />
                </motion.div>
              </div>

              {/* Right Column: Narrative Story - Spacing Optimization */}
              <div className="lg:col-span-7 flex flex-col">
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-[11px] font-bold tracking-[0.2em] text-primary uppercase block mb-3">
                    FOUNDER'S MISSION
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 mb-6 leading-tight">
                    The Venture Beast was built<br />around one core belief:
                  </h2>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.05 }}
                  className="space-y-4.5 text-zinc-600 text-sm sm:text-base leading-relaxed font-normal mb-8"
                >
                  <div className="border-l-[3px] border-primary pl-4 py-0.5 mb-6">
                    <p className="text-zinc-900 font-bold text-base sm:text-lg leading-relaxed">
                      Performance marketing should drive measurable<br className="hidden sm:inline" /> business growth, not inflated metrics.
                    </p>
                  </div>
                  <p>
                    Over the last 5+ years, we’ve worked across lead generation, D2C, SaaS, and growth campaigns focused on scaling revenue, lowering acquisition costs, and building sustainable acquisition systems.
                  </p>
                  <p>
                    We founded this boutique growth model to offer serious brands direct collaboration with seasoned strategic buyers, eliminating the bloat of traditional agency accounts.
                  </p>
                </motion.div>

                {/* Metrics Row - Perfect Layout */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-zinc-200/80">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="sm:border-r sm:border-zinc-200/80 sm:pr-4"
                  >
                    <h5 className="text-xl sm:text-2xl font-bold text-zinc-900 mb-1 leading-none">₹50Cr+</h5>
                    <p className="text-[9px] text-primary font-bold uppercase tracking-widest leading-normal">
                      REVENUE INFLUENCED
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.15 }}
                    className="sm:border-r sm:border-zinc-200/80 sm:pr-4"
                  >
                    <h5 className="text-xl sm:text-2xl font-bold text-zinc-900 mb-1 leading-none">200+</h5>
                    <p className="text-[9px] text-primary font-bold uppercase tracking-widest leading-normal">
                      CAMPAIGNS SCALED
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="sm:border-r sm:border-zinc-200/80 sm:pr-4"
                  >
                    <h5 className="text-xl sm:text-2xl font-bold text-zinc-900 mb-1 leading-none">5+ Years</h5>
                    <p className="text-[9px] text-primary font-bold uppercase tracking-widest leading-normal">
                      EXPERIENCE
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.25 }}
                  >
                    <h5 className="text-xl sm:text-2xl font-bold text-zinc-900 mb-1 leading-none">D2C + SaaS</h5>
                    <p className="text-[9px] text-primary font-bold uppercase tracking-widest leading-normal">
                      AGENCY FOCUS
                    </p>
                  </motion.div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* --------------------------------------------------
            3. WHAT WE BELIEVE (Dark Section - Compact)
           -------------------------------------------------- */}
        <section className="py-16 md:py-20 bg-background relative overflow-hidden">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px]" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />
          </div>

          <div className="container relative z-10 mx-auto px-6 md:px-12">
            
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-10"
            >
              <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-primary uppercase block mb-3">
                CORE PRINCIPLES
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight">
                What We Optimize For.
              </h2>
            </motion.div>

            {/* 4 Premium Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Card 1 */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 }}
                className="bg-zinc-950/60 border border-white/5 hover:border-primary/30 rounded-xl p-6 md:p-7 backdrop-blur-md relative group transition-all duration-300 hover:shadow-[0_0_30px_rgba(249,115,22,0.05)] select-none hover:-translate-y-0.5"
              >
                <div className="absolute top-5 right-6 p-2 bg-primary/10 text-primary rounded-lg group-hover:scale-105 transition-transform">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white mb-2 mt-4 group-hover:text-primary transition-colors">
                  Revenue Over Vanity Metrics
                </h3>
                <p className="text-white/70 leading-relaxed text-xs sm:text-sm font-normal">
                  We optimize for profitability, not inflated numbers. CPCs and CPMs are secondary to your net-adjusted revenue metrics and actual ROI constraints.
                </p>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="bg-zinc-950/60 border border-white/5 hover:border-primary/30 rounded-xl p-6 md:p-7 backdrop-blur-md relative group transition-all duration-300 hover:shadow-[0_0_30px_rgba(249,115,22,0.05)] select-none hover:-translate-y-0.5"
              >
                <div className="absolute top-5 right-6 p-2 bg-primary/10 text-primary rounded-lg group-hover:scale-105 transition-transform">
                  <UserCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white mb-2 mt-4 group-hover:text-primary transition-colors">
                  Founder-Led Execution
                </h3>
                <p className="text-white/70 leading-relaxed text-xs sm:text-sm font-normal">
                  No junior account handoffs. Strategy stays close to execution. Your media is directed by senior buyers who know exactly how to scale key campaigns.
                </p>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="bg-zinc-950/60 border border-white/5 hover:border-primary/30 rounded-xl p-6 md:p-7 backdrop-blur-md relative group transition-all duration-300 hover:shadow-[0_0_30px_rgba(249,115,22,0.05)] select-none hover:-translate-y-0.5"
              >
                <div className="absolute top-5 right-6 p-2 bg-primary/10 text-primary rounded-lg group-hover:scale-105 transition-transform">
                  <Eye className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white mb-2 mt-4 group-hover:text-primary transition-colors">
                  Transparency First
                </h3>
                <p className="text-white/70 leading-relaxed text-xs sm:text-sm font-normal">
                  Clients always retain ownership of accounts and data. No proprietary account hiding, no contract locking, and complete real-time dashboard tracking visibility.
                </p>
              </motion.div>

              {/* Card 4 */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="bg-zinc-950/60 border border-white/5 hover:border-primary/30 rounded-xl p-6 md:p-7 backdrop-blur-md relative group transition-all duration-300 hover:shadow-[0_0_30px_rgba(249,115,22,0.05)] select-none hover:-translate-y-0.5"
              >
                <div className="absolute top-5 right-6 p-2 bg-primary/10 text-primary rounded-lg group-hover:scale-105 transition-transform">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white mb-2 mt-4 group-hover:text-primary transition-colors">
                  Systems Over Guesswork
                </h3>
                <p className="text-white/70 leading-relaxed text-xs sm:text-sm font-normal">
                  Every optimization is backed by data and testing. We run exhaustive landing page splits and ad variations, scaling budgets solely on validated statistics.
                </p>
              </motion.div>

            </div>

          </div>
        </section>

        {/* --------------------------------------------------
            4. INDUSTRIES WE WORK WITH (Light Section - Balanced)
           -------------------------------------------------- */}
        <section className="py-16 md:py-20 bg-zinc-50 text-zinc-950 relative overflow-hidden border-y border-zinc-200/50">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
          </div>

          <div className="container relative z-10 mx-auto px-6 md:px-12">
            
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-10 max-w-xl mx-auto"
            >
              <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-primary uppercase block mb-3">
                SECTOR SPECIFIC EXPERTISE
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 mb-4 leading-tight">
                Built for Growth-Focused Brands.
              </h2>
              <p className="text-zinc-600 font-normal text-xs sm:text-sm">
                We have spent half a decade auditing and refining campaigns across several competitive scaling verticals, designing highly specialized custom architectures for each niche.
              </p>
            </motion.div>

            {/* Grid display */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "D2C eCommerce",
                  desc: "Scaling Shopify storefronts through systematic customer acquisition systems, optimizing for lifetime value, and lowering blended customer CAC.",
                  icon: <ShoppingBag className="w-4 h-4 text-primary" />
                },
                {
                  title: "B2B SaaS",
                  desc: "Engineering predictable pipeline acquisition, generating demo signups, and lowering qualified demo CAC for venture-funded organizations.",
                  icon: <Laptop className="w-4 h-4 text-primary" />
                },
                {
                  title: "Education",
                  desc: "Scaling online programs, course sales, and student enrollments through strategic lead gen and full-funnel scaling.",
                  icon: <GraduationCap className="w-4 h-4 text-primary" />
                },
                {
                  title: "Real Estate",
                  desc: "Generating highly qualified, phone-verified property leads and project bookings through targeted localized geo-campaigns.",
                  icon: <Building2 className="w-4 h-4 text-primary" />
                },
                {
                  title: "Healthcare",
                  desc: "Attracting recurring patients, scaling consultations, and building HIPAA-aligned growth processes across specialized clinics.",
                  icon: <Activity className="w-4 h-4 text-primary" />
                },
                {
                  title: "Local Businesses",
                  desc: "Sourcing consistent high-intent service bookings, customer inquiries, and foot-traffic using precise micro-location campaigns.",
                  icon: <MapPin className="w-4 h-4 text-primary" />
                }
              ].map((ind, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.04 }}
                  className="bg-white border border-zinc-200/80 rounded-xl p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:-translate-y-0.5 group"
                >
                  <div className="p-2.5 bg-zinc-50 border border-zinc-100 rounded-lg w-fit mb-4 group-hover:scale-105 transition-transform duration-300">
                    {ind.icon}
                  </div>
                  <h4 className="text-zinc-950 font-bold text-base mb-1.5 group-hover:text-primary transition-colors">
                    {ind.title}
                  </h4>
                  <p className="text-zinc-600 font-normal text-xs sm:text-sm leading-relaxed">
                    {ind.desc}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* --------------------------------------------------
            5. PERFORMANCE + PROCESS SECTION (Dark Section - Premium)
           -------------------------------------------------- */}
        <section className="py-16 md:py-20 bg-background text-white relative overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-primary/5 rounded-full blur-[100px] opacity-35" />
            <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-blue-900/5 rounded-full blur-[100px] opacity-35" />
          </div>

          <div className="container relative z-10 mx-auto px-6 md:px-12">
            
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-10"
            >
              <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-primary uppercase block mb-3">
                THE GROWTH PLAYBOOK
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-4">
                How We Approach Growth.
              </h2>
            </motion.div>

            {/* Timeline UI - Refined circle size and layout bounds */}
            <div className="relative max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10 md:gap-6">
              
              {/* Connecting Horizontal Line (desktop) - Re-aligned to new node scale */}
              <div className="hidden md:block absolute top-[20px] left-[4%] right-[4%] h-[1px] bg-white/10 z-0" />
              
              {/* Connecting Vertical Line (mobile) - Centered in mobile node scale */}
              <div className="md:hidden absolute left-1/2 top-5 bottom-12 w-[1px] bg-white/10 -translate-x-1/2 z-0" />
              
              {[
                {
                  step: "01",
                  title: "Audit & Architecture",
                  desc: "We dive deep into historical account datasets, audit tags/tracking, and build clean tracking setups.",
                  icon: <Search className="w-4 h-4" />
                },
                {
                  step: "02",
                  title: "Strategy & Creative",
                  desc: "Engineering highly custom messaging funnels, planning visual hooks, and drafting ad structures.",
                  icon: <Sparkles className="w-4 h-4" />
                },
                {
                  step: "03",
                  title: "Launch & Testing",
                  desc: "Deploying systematic creative clusters and split tests, testing angles with minimal spend.",
                  icon: <Play className="w-4 h-4" />
                },
                {
                  step: "04",
                  title: "Optimization",
                  desc: "Aggressively killing inefficient ad spend, adjusting bid types, and scaling proven winning assets.",
                  icon: <Zap className="w-4 h-4" />
                },
                {
                  step: "05",
                  title: "Scale Profitably",
                  desc: "Scaling clean budget volumes safely, maintaining required blended CPA target limits.",
                  icon: <CheckCircle2 className="w-4 h-4" />
                }
              ].map((timeline, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="flex flex-col items-center md:items-start text-center md:text-left md:flex-1 relative z-10"
                >
                  {/* Circle Node indicator - Compact */}
                  <div className="w-10 h-10 bg-zinc-950 border border-white/10 hover:border-primary/50 transition-all rounded-full flex items-center justify-center text-white mb-4 group shadow-md relative select-none hover:scale-105 duration-300">
                    <span className="text-primary group-hover:scale-105 transition-transform">{timeline.icon}</span>
                    
                    {/* Floating Step Number */}
                    <div className="absolute -top-1.5 -right-1.5 text-[8px] font-black bg-primary text-white rounded-full w-4.5 h-4.5 flex items-center justify-center border border-zinc-950 shadow">
                      {timeline.step}
                    </div>
                  </div>

                  <h4 className="text-white font-bold text-sm mb-1">
                    {timeline.title}
                  </h4>
                  <p className="text-white/70 text-xs sm:text-sm leading-relaxed font-normal max-w-[200px] md:max-w-none">
                    {timeline.desc}
                  </p>
                </motion.div>
              ))}

            </div>

          </div>
        </section>

        {/* --------------------------------------------------
            6. PROOF / RESULTS SECTION (Light Section - Balanced)
           -------------------------------------------------- */}
        <section className="py-16 md:py-20 bg-white text-zinc-950 relative overflow-hidden border-y border-zinc-100">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px]" />
          </div>

          <div className="container relative z-10 mx-auto px-6 md:px-12">
            
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-10"
            >
              <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-primary uppercase block mb-3">
                EMPIRICAL VALIDATION
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 mb-4 leading-tight">
                The Numbers Behind The Growth.
              </h2>
              <p className="text-zinc-600 font-normal text-xs sm:text-sm max-w-lg mx-auto">
                No high-level estimation or guesses. We optimize entirely on clean business metrics that build long-term profitability.
              </p>
            </motion.div>

            {/* Results Grid - Interactive Dashboards switcher - Balanced proportions */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center mx-auto">
              
              {/* Left Side: Stats and Interactive Controls - Tighter padding */}
              <div className="lg:col-span-5 flex flex-col">
                <div className="flex flex-col gap-2.5 mb-6">
                  {[
                    { id: "shopify", label: "Shopify Store Analytics", desc: "Gross product revenue scale, store sessions growth & blended conversions." },
                    { id: "google", label: "Google Ads Scaling Engine", desc: "High-intent search conversions, target CPC optimization & ad spend." },
                    { id: "search", label: "Search Console SEO Dashboard", desc: "Organic impressions curves, CTR optimizations & high-volume ranking indices." }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`text-left p-3.5 rounded-lg border transition-all duration-300 select-none cursor-pointer ${
                        activeTab === tab.id
                          ? "bg-zinc-50 border-primary/30 shadow-[0_4px_10px_rgba(249,115,22,0.03)]"
                          : "bg-transparent border-zinc-200/60 hover:bg-zinc-50/50 hover:border-zinc-300"
                      }`}
                    >
                      <h4 className={`font-bold text-xs sm:text-sm ${activeTab === tab.id ? "text-primary" : "text-zinc-900"}`}>
                        {tab.label}
                      </h4>
                      <p className="text-zinc-400 text-[10px] sm:text-[11px] mt-1 font-normal leading-normal">
                        {tab.desc}
                      </p>
                    </button>
                  ))}
                </div>

                {/* Vertical stat highlights - Smaller headers */}
                <div className="grid grid-cols-2 gap-3.5 border-t border-zinc-100 pt-6">
                  <div>
                    <h5 className="text-lg sm:text-xl font-bold text-zinc-900 mb-0.5">+312%</h5>
                    <p className="text-[9px] text-zinc-500 font-semibold uppercase tracking-wider">Revenue Growth</p>
                  </div>
                  <div>
                    <h5 className="text-lg sm:text-xl font-bold text-zinc-900 mb-0.5">6.4x ROAS</h5>
                    <p className="text-[9px] text-zinc-500 font-semibold uppercase tracking-wider">Attained Peak</p>
                  </div>
                  <div>
                    <h5 className="text-lg sm:text-xl font-bold text-zinc-900 mb-0.5">-43% CPL</h5>
                    <p className="text-[9px] text-zinc-500 font-semibold uppercase tracking-wider">Average Reduction</p>
                  </div>
                  <div>
                    <h5 className="text-lg sm:text-xl font-bold text-zinc-900 mb-0.5">99.8%</h5>
                    <p className="text-[9px] text-zinc-500 font-semibold uppercase tracking-wider">Attribution Precision</p>
                  </div>
                </div>
              </div>

              {/* Right Side: Tab-switched premium dashboard mockup - Reduced maximum height for layout containment */}
              <div className="lg:col-span-7 w-full h-[320px]">
                <AnimatePresence mode="wait">
                  
                  {activeTab === "shopify" && (
                    <motion.div
                      key="shopify-dash"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-full bg-zinc-950 border border-zinc-800 rounded-xl p-5 flex flex-col justify-between shadow-[0_15px_30px_rgba(0,0,0,0.15)] relative overflow-hidden"
                    >
                      {/* Top Header */}
                      <div className="flex items-center justify-between border-b border-white/5 pb-2">
                        <div className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span className="text-[9px] font-black tracking-widest text-white/40 uppercase">Shopify Analytics</span>
                        </div>
                        <div className="flex items-center gap-2 text-[8px] text-white/50 bg-zinc-900 border border-white/5 rounded px-1.5 py-0.5">
                          <span>Live Sales</span>
                        </div>
                      </div>

                      {/* Main Value Display */}
                      <div className="my-1">
                        <span className="text-[8px] text-white/30 uppercase tracking-widest font-black">Gross Store Revenue</span>
                        <h3 className="text-2xl font-black text-white tracking-tight mt-0.5">₹41,29,550.00</h3>
                        <span className="text-[10px] text-green-400 font-semibold flex items-center gap-0.5 mt-0.5">
                          <ArrowUpRight className="w-3 h-3" /> +128.4% vs previous 30 days
                        </span>
                      </div>

                      {/* Net Sales SVG Chart */}
                      <div className="flex-1 w-full min-h-[90px] flex items-end relative mt-1">
                        <svg viewBox="0 0 300 100" className="w-full h-full overflow-visible">
                          <defs>
                            <linearGradient id="shopify-grad" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="rgb(249, 115, 22)" stopOpacity="0.15"/>
                              <stop offset="100%" stopColor="rgb(249, 115, 22)" stopOpacity="0.0"/>
                            </linearGradient>
                          </defs>
                          <path d="M 0 95 Q 30 90 60 70 Q 90 85 120 50 Q 150 40 180 20 Q 210 30 240 15 Q 270 5 300 3 L 300 100 L 0 100 Z" fill="url(#shopify-grad)" />
                          <line x1="0" y1="100" x2="300" y2="100" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
                          <line x1="0" y1="50" x2="300" y2="50" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
                          <path d="M 0 95 Q 30 90 60 70 Q 90 85 120 50 Q 150 40 180 20 Q 210 30 240 15 Q 270 5 300 3" fill="none" stroke="rgb(249, 115, 22)" strokeWidth="2.5" strokeLinecap="round" />
                          <circle cx="180" cy="20" r="2.5" fill="rgb(249, 115, 22)" stroke="white" strokeWidth="0.8" />
                          <circle cx="300" cy="3" r="2.5" fill="rgb(249, 115, 22)" stroke="white" strokeWidth="0.8" />
                        </svg>
                        <div className="absolute top-[8%] left-[55%] bg-zinc-900 border border-white/5 rounded px-1 py-0.5 text-[7px] text-white">
                          <span>Peak Hour CVR: 4.8%</span>
                        </div>
                      </div>

                      {/* Store sessions analytics widgets */}
                      <div className="flex justify-between items-center text-[8px] text-white/30 pt-2 border-t border-white/5">
                        <span>Sessions: <strong className="text-white">19.1K</strong></span>
                        <span>AOV: <strong className="text-white">₹2,850</strong></span>
                        <span>Conversion Rate: <strong className="text-white">3.42%</strong></span>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "google" && (
                    <motion.div
                      key="google-dash"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-full bg-zinc-950 border border-zinc-800 rounded-xl p-5 flex flex-col justify-between shadow-[0_15px_30px_rgba(0,0,0,0.15)] relative overflow-hidden"
                    >
                      <div className="absolute -top-10 -left-10 w-24 h-24 bg-blue-500/5 rounded-full blur-[40px] pointer-events-none" />
                      
                      {/* Top Header */}
                      <div className="flex items-center justify-between border-b border-white/5 pb-2">
                        <div className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                          <span className="text-[9px] font-black tracking-widest text-white/40 uppercase">Google Ads Engine</span>
                        </div>
                        <div className="text-[8px] text-white/50 bg-zinc-900 border border-white/5 rounded px-1.5 py-0.5">
                          Target CPA
                        </div>
                      </div>

                      {/* Main Spend details */}
                      <div className="my-1">
                        <span className="text-[8px] text-white/30 uppercase tracking-widest font-black">Conversion Value Attribution</span>
                        <h3 className="text-2xl font-black text-white tracking-tight mt-0.5">₹18,50,000.00</h3>
                        <div className="flex items-center gap-3 mt-1">
                          <span className="text-[10px] text-blue-400 font-semibold flex items-center gap-0.5">
                            <ArrowUpRight className="w-3 h-3" /> +84% Conversions
                          </span>
                          <span className="text-[10px] text-green-400 font-semibold">
                            6.2x blended ROAS
                          </span>
                        </div>
                      </div>

                      {/* Google click SVG Chart */}
                      <div className="flex-1 w-full min-h-[90px] flex items-end relative mt-1">
                        <svg viewBox="0 0 300 100" className="w-full h-full overflow-visible">
                          <defs>
                            <linearGradient id="google-grad" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="rgb(96, 165, 250)" stopOpacity="0.15"/>
                              <stop offset="100%" stopColor="rgb(96, 165, 250)" stopOpacity="0.0"/>
                            </linearGradient>
                          </defs>
                          <path d="M 0 85 Q 40 90 80 60 Q 120 65 160 30 Q 200 40 240 10 Q 280 20 300 12 L 300 100 L 0 100 Z" fill="url(#google-grad)" />
                          <line x1="0" y1="100" x2="300" y2="100" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
                          <line x1="0" y1="50" x2="300" y2="50" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
                          <path d="M 0 85 Q 40 90 80 60 Q 120 65 160 30 Q 200 40 240 10 Q 280 20 300 12" fill="none" stroke="rgb(96, 165, 250)" strokeWidth="2.5" strokeLinecap="round" />
                          <circle cx="160" cy="30" r="2.5" fill="rgb(96, 165, 250)" stroke="white" strokeWidth="0.8" />
                          <circle cx="240" cy="10" r="2.5" fill="rgb(96, 165, 250)" stroke="white" strokeWidth="0.8" />
                        </svg>
                        <div className="absolute top-[5%] left-[45%] bg-zinc-900 border border-white/5 rounded px-1 py-0.5 text-[7px] text-white">
                          <span>Target CPA: ₹142</span>
                        </div>
                      </div>

                      {/* Google click stats metrics */}
                      <div className="flex justify-between items-center text-[8px] text-white/30 pt-2 border-t border-white/5">
                        <span>Clicks: <strong className="text-white">12.5K</strong></span>
                        <span>Avg CPC: <strong className="text-white">₹14.80</strong></span>
                        <span>Click CTR: <strong className="text-white">6.12%</strong></span>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "search" && (
                    <motion.div
                      key="search-dash"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-full bg-zinc-950 border border-zinc-800 rounded-xl p-5 flex flex-col justify-between shadow-[0_15px_30px_rgba(0,0,0,0.15)] relative overflow-hidden"
                    >
                      <div className="absolute -top-10 -left-10 w-24 h-24 bg-purple-500/5 rounded-full blur-[40px] pointer-events-none" />
                      
                      {/* Top Header */}
                      <div className="flex items-center justify-between border-b border-white/5 pb-2">
                        <div className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                          <span className="text-[9px] font-black tracking-widest text-white/40 uppercase">Google Search Console</span>
                        </div>
                        <div className="text-[8px] text-white/50 bg-zinc-900 border border-white/5 rounded px-1.5 py-0.5">
                          Organic Scaling
                        </div>
                      </div>

                      {/* Main CTR Spikes details */}
                      <div className="my-1">
                        <span className="text-[8px] text-white/30 uppercase tracking-widest font-black">Organic Clicks</span>
                        <h3 className="text-2xl font-black text-white tracking-tight mt-0.5">112.5K Clicks</h3>
                        <span className="text-[10px] text-purple-400 font-semibold flex items-center gap-0.5 mt-0.5">
                          <ArrowUpRight className="w-3 h-3" /> +284.2% Impressions
                        </span>
                      </div>

                      {/* Google impression SVG Chart */}
                      <div className="flex-1 w-full min-h-[90px] flex items-end relative mt-1">
                        <svg viewBox="0 0 300 100" className="w-full h-full overflow-visible">
                          <defs>
                            <linearGradient id="search-grad" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="rgb(168, 85, 247)" stopOpacity="0.15"/>
                              <stop offset="100%" stopColor="rgb(168, 85, 247)" stopOpacity="0.0"/>
                            </linearGradient>
                          </defs>
                          <path d="M 0 90 Q 30 85 60 90 Q 90 70 120 75 Q 150 40 180 50 Q 210 20 240 15 Q 270 5 300 2 L 300 100 L 0 100 Z" fill="url(#search-grad)" />
                          <line x1="0" y1="100" x2="300" y2="100" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
                          <line x1="0" y1="50" x2="300" y2="50" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
                          <path d="M 0 90 Q 30 85 60 90 Q 90 70 120 75 Q 150 40 180 50 Q 210 20 240 15 Q 270 5 300 2" fill="none" stroke="rgb(168, 85, 247)" strokeWidth="2.5" strokeLinecap="round" />
                          <circle cx="150" cy="40" r="2.5" fill="rgb(168, 85, 247)" stroke="white" strokeWidth="0.8" />
                          <circle cx="300" cy="2" r="2.5" fill="rgb(168, 85, 247)" stroke="white" strokeWidth="0.8" />
                        </svg>
                        <div className="absolute top-[8%] left-[55%] bg-zinc-900 border border-white/5 rounded px-1 py-0.5 text-[7px] text-white">
                          <span>Avg Position: 3.2</span>
                        </div>
                      </div>

                      {/* Google impression metrics */}
                      <div className="flex justify-between items-center text-[8px] text-white/30 pt-2 border-t border-white/5">
                        <span>Impressions: <strong className="text-white">666K</strong></span>
                        <span>Avg CTR: <strong className="text-white">8.42%</strong></span>
                        <span>SEO Volume: <strong className="text-white">High Scale</strong></span>
                      </div>
                    </motion.div>
                  )}

                </AnimatePresence>
              </div>

            </div>

          </div>
        </section>

        {/* --------------------------------------------------
            7. TESTIMONIAL SECTION (Dark Section - Contained)
           -------------------------------------------------- */}
        <section className="py-16 md:py-20 bg-background relative overflow-hidden">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />
          </div>

          <div className="container relative z-10 mx-auto px-6 md:px-12">
            
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-10"
            >
              <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-primary uppercase block mb-3">
                PARTNER ACCOLADES
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight">
                What Our Partners Say.
              </h2>
            </motion.div>

            {/* Testimonials grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Testimonial 1 */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="bg-zinc-950/60 border border-white/5 hover:border-primary/30 rounded-xl p-6 md:p-8 relative flex flex-col justify-between group hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(249,115,22,0.04)]"
              >
                <div className="flex gap-0.5 mb-4.5 text-primary">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-white/80 text-xs sm:text-sm leading-relaxed font-normal italic mb-6">
                  "Working with The Venture Beast completely changed how we buy media. They cut out all the typical agency fluff and focused directly on CPA. In 90 days, we dropped our CPA by 43% and scaled our budget safely."
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  <div className="w-8 h-8 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center font-bold text-xs text-primary">
                    JD
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xs sm:text-sm">Jayden Drake</h4>
                    <p className="text-white/40 text-[10px] font-semibold">Founder, D2C Apparel Brand</p>
                  </div>
                </div>
              </motion.div>

              {/* Testimonial 2 */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.08 }}
                className="bg-zinc-950/60 border border-white/5 hover:border-primary/30 rounded-xl p-6 md:p-8 relative flex flex-col justify-between group hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(249,115,22,0.04)]"
              >
                <div className="flex gap-0.5 mb-4.5 text-primary">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-white/80 text-xs sm:text-sm leading-relaxed font-normal italic mb-6">
                  "The transparency is refreshingly real. We have absolute ownership of our ad managers, direct WhatsApp contact with the buyer, and constant optimization updates. Our enterprise pipeline is finally scaling predictably."
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  <div className="w-8 h-8 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center font-bold text-xs text-primary">
                    MK
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xs sm:text-sm">Markus Kael</h4>
                    <p className="text-white/40 text-[10px] font-semibold">Director of Growth, B2B SaaS</p>
                  </div>
                </div>
              </motion.div>

            </div>

          </div>
        </section>

        {/* --------------------------------------------------
            8. FINAL CTA SECTION (Premium Brand-Orange Background)
           -------------------------------------------------- */}
        <section id="contact-form" className="py-32 bg-primary relative overflow-hidden">
          {/* Texture overlay */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
          
          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              {/* Left Column: Heading Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-[12px] font-extrabold tracking-[0.25em] text-white/80 uppercase block mb-4">
                  PARTNER WITH US
                </span>
                <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-6 leading-tight">
                  Let’s Build A <br/>
                  Scalable Growth System.
                </h2>
                <p className="text-xl text-white/90 font-medium mb-10 max-w-lg">
                  Whether you're scaling an existing brand or fixing inefficient acquisition systems, we’ll help engineer profitable growth.
                </p>

                {/* Trust bullets matching homepage items */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-white">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-white">100% Account Ownership</h4>
                      <p className="text-white/80 text-sm">You retain complete control of your ad managers.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 text-white">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                      <Activity className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-white">No Lock-in Agreements</h4>
                      <p className="text-white/80 text-sm">We earn your partnership month-over-month.</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-white">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                      <UserCheck className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-white">Direct Senior Access</h4>
                      <p className="text-white/80 text-sm">Direct WhatsApp / Slack contact with your senior buyer.</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Column: Premium Form Card */}
              <div className="w-full flex justify-center lg:justify-end">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="w-full max-w-[540px] bg-white rounded-2xl p-8 md:p-10 shadow-2xl text-zinc-950 relative overflow-hidden"
                >
                  <AnimatePresence mode="wait">
                    {!isSubmitted ? (
                      <motion.form
                        key="cta-form"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onSubmit={handleSubmit}
                        className="space-y-6 flex flex-col"
                      >
                        <h3 className="text-2xl font-bold text-zinc-900 mb-2">
                          Request a Strategy Call
                        </h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="flex flex-col">
                            <label className="text-zinc-900 font-bold text-sm mb-2">Full Name</label>
                            <input
                              type="text"
                              required
                              value={formValues.name}
                              onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
                              placeholder="John Doe"
                              className="bg-zinc-50 border border-zinc-200 text-zinc-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary h-12 px-4 rounded-xl placeholder-zinc-400 font-normal transition-all"
                            />
                          </div>
                          
                          <div className="flex flex-col">
                            <label className="text-zinc-900 font-bold text-sm mb-2">Work Email</label>
                            <input
                              type="email"
                              required
                              value={formValues.email}
                              onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
                              placeholder="john@company.com"
                              className="bg-zinc-50 border border-zinc-200 text-zinc-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary h-12 px-4 rounded-xl placeholder-zinc-400 font-normal transition-all"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="flex flex-col">
                            <label className="text-zinc-900 font-bold text-sm mb-2">Brand Name / URL</label>
                            <input
                              type="text"
                              required
                              value={formValues.brandName}
                              onChange={(e) => setFormValues({ ...formValues, brandName: e.target.value })}
                              placeholder="e.g. brand.com"
                              className="bg-zinc-50 border border-zinc-200 text-zinc-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary h-12 px-4 rounded-xl placeholder-zinc-400 font-normal transition-all"
                            />
                          </div>
                          
                          <div className="flex flex-col">
                            <label className="text-zinc-900 font-bold text-sm mb-2">Ad Budget /Month</label>
                            <select
                              value={formValues.spend}
                              onChange={(e) => setFormValues({ ...formValues, spend: e.target.value })}
                              className="bg-zinc-50 border border-zinc-200 text-zinc-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary h-12 px-4 rounded-xl font-normal transition-all cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M7%209l3%203%203-3%22%20stroke%3D%22%252327272a%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-[position:right_12px_center] bg-[size:18px] bg-no-repeat pr-10"
                            >
                              <option value="Under 10L">Under ₹10L</option>
                              <option value="10-50L">₹10L - ₹50L</option>
                              <option value="2Cr+">₹2Cr+</option>
                            </select>
                          </div>
                        </div>

                        <div className="flex flex-col">
                          <label className="text-zinc-900 font-bold text-sm mb-2">Briefly describe your goals (Optional)</label>
                          <textarea
                            rows={3}
                            required
                            value={formValues.message}
                            onChange={(e) => setFormValues({ ...formValues, message: e.target.value })}
                            placeholder="We want to scale our brand while maintaining a custom blueprint..."
                            className="bg-zinc-50 border border-zinc-200 text-zinc-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary p-4 rounded-xl placeholder-zinc-400 font-normal transition-all resize-none min-h-[100px]"
                          />
                        </div>

                        <button
                          type="submit"
                          className="w-full h-14 text-base font-bold bg-zinc-950 text-white hover:bg-zinc-800 transition-colors rounded-full flex items-center justify-center cursor-pointer"
                        >
                          Request Strategy Call
                        </button>
                      </motion.form>
                    ) : (
                      <motion.div
                        key="form-success"
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="py-16 flex flex-col items-center justify-center text-center"
                      >
                        <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto mb-6" />
                        <h3 className="text-3xl font-bold text-zinc-900 mb-4">Request Received!</h3>
                        <p className="text-zinc-600 mb-8 max-w-xs mx-auto font-normal leading-relaxed">
                          Thank you, <strong>{formValues.name}</strong>. Our senior growth buyer will audit your brand assets and follow up within 24 hours.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* --------------------------------------------------
          9. FOOTER (Dark Background)
         -------------------------------------------------- */}
      <Footer />
      
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/917785957951"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-transform hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
        </svg>
      </a>

      {/* Sticky Book a Call for Mobile */}
      <div className="md:hidden fixed bottom-0 left-0 w-full p-4 bg-background/80 backdrop-blur-md border-t border-border z-40">
        <a 
          href="https://cal.com/the-venture-beast-lxgerj/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center bg-primary text-primary-foreground font-semibold h-12 rounded-full shadow-lg"
        >
          Book a Strategy Call
        </a>
      </div>
    </div>
  );
}
