import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Lead Generation Systems",
      for: "B2B SaaS & Service Businesses",
      description: "We build predictable, high-intent lead pipelines. No vanity metrics, just qualified appointments and MQLs that actually convert into closed revenue.",
      benefits: ["Hyper-targeted audience architecture", "Conversion-optimized landing pages", "Automated lead nurturing funnels"]
    },
    {
      title: "D2C Revenue Scaling",
      for: "E-Commerce & D2C Brands",
      description: "Aggressive, profitable scaling for consumer brands. We optimize the entire unit economics of your ads to maximize ROAS while increasing spend.",
      benefits: ["Creative testing at scale", "AOV & LTV optimization strategies", "Catalog and dynamic ad scaling"]
    },
    {
      title: "Paid Ads Optimization",
      for: "Funded Startups & Enterprises",
      description: "We audit, cut waste, and amplify what works across Meta and Google Ads. A rigorous, data-heavy approach to reduce your CPA and dominate your market.",
      benefits: ["Deep technical account audits", "Cross-channel attribution modeling", "Aggressive budget allocation"]
    }
  ];

  return (
    <section id="services" className="pt-16 md:pt-20 pb-32 bg-white text-zinc-950 relative overflow-hidden">
      {/* Subtle Premium Grid Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none z-0" 
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(9, 9, 11, 0.02) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(9, 9, 11, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: "55px 55px",
          maskImage: "radial-gradient(ellipse at top left, black 25%, transparent 65%)",
          WebkitMaskImage: "radial-gradient(ellipse at top left, black 25%, transparent 65%)"
        }}
      />
      
      {/* Soft orange ambient bg glow */}
      <div 
        className="absolute top-0 right-0 w-[550px] h-[550px] pointer-events-none z-0" 
        style={{
          background: "radial-gradient(circle at center, rgba(249,115,22,0.045), transparent 70%)"
        }}
      />
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-2xl mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black tracking-tight mb-6"
          >
            We Don't Sell Services.<br/>
            <span className="text-primary">We Sell Outcomes.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-zinc-600 font-medium max-w-xl"
          >
            Generic agencies focus on impressions and clicks. We focus strictly on the metrics that matter to your P&L: CPL, CAC, ROAS, and Total Revenue.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-zinc-50 border border-zinc-200 p-8 md:p-10 rounded-xl hover:shadow-xl hover:border-primary/30 transition-all duration-300 flex flex-col h-full group"
            >
              <div className="mb-6">
                <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
                  For {service.for}
                </span>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-zinc-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
              
              <div className="mt-auto pt-8 border-t border-zinc-200">
                <ul className="space-y-3">
                  {service.benefits.map((benefit, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm font-semibold text-zinc-800">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Soft dark gradient transition to next section */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none z-0" 
        style={{
          background: "linear-gradient(to bottom, rgba(255, 255, 255, 0.83) 0%, #09090b 100%)"
        }}
      />
      {/* Tiny orange glow at the junction */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[350px] h-[80px] pointer-events-none z-0" 
        style={{
          background: "radial-gradient(circle at center, rgba(255,115,0,0.06), transparent 70%)"
        }}
      />
    </section>
  );
}
