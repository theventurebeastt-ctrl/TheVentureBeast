import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-32 bg-background relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="w-full h-[500px] bg-zinc-900 rounded-2xl border border-white/10 relative overflow-hidden flex items-center justify-center">
              {/* Fallback geometric visual instead of stock photo */}
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 to-black"></div>
              <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-primary/20 to-transparent mix-blend-overlay"></div>
              <div className="relative z-10 text-center">
                <div className="w-24 h-24 mx-auto border-t-4 border-r-4 border-primary rounded-tr-full mb-4 transform rotate-45"></div>
                <p className="text-white/30 font-black text-2xl tracking-widest uppercase">THE VENTURE BEAST</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-6">
              Expertise Engineered <br/> Over 5+ Years.
            </h2>
            <div className="space-y-6 text-white/70 text-lg leading-relaxed mb-8">
              <p>
                We aren't a team of generalists. The Venture Beast is a founder-led performance marketing agency built on deep, technical expertise in Meta and Google Ads.
              </p>
              <p>
                Over the past 5+ years, we've managed millions in ad spend across D2C e-commerce, B2B SaaS, real estate, and education. We know exactly what levers to pull to reduce CPA and scale revenue.
              </p>
              <p className="text-white font-medium border-l-2 border-primary pl-4 py-1">
                We act as your growth partner, bringing predatory precision to your media buying so you can focus on building your product.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-3xl font-black text-white mb-1">5+ Years</p>
                <p className="text-sm text-primary font-semibold uppercase tracking-wider">Deep Expertise</p>
              </div>
              <div>
                <p className="text-3xl font-black text-white mb-1">Top 1%</p>
                <p className="text-sm text-primary font-semibold uppercase tracking-wider">Media Buyers</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
