import { motion } from "framer-motion";

export default function CaseStudies() {
  const cases = [
    {
      client: "D2C Fashion Brand",
      problem: "Stuck at ₹30L/month with declining ROAS and ad fatigue.",
      strategy: "Revamped creative testing architecture and implemented aggressive retargeting via dynamic product ads.",
      results: [
        { label: "CPL Reduction", value: "61%" },
        { label: "Monthly Revenue", value: "₹2Cr+" },
        { label: "ROAS", value: "4.2x" }
      ]
    },
    {
      client: "B2B SaaS Platform",
      problem: "High customer acquisition cost (CAC) making paid ads unprofitable.",
      strategy: "Shifted from generic lead gen to high-intent search intent capture and robust email nurturing.",
      results: [
        { label: "CAC Reduction", value: "45%" },
        { label: "Demo Bookings", value: "3x" },
        { label: "Pipeline Value", value: "$1.2M+" }
      ]
    },
    {
      client: "EdTech Startup",
      problem: "Unable to scale webinar registrations within target CPA.",
      strategy: "Multi-platform approach (Meta + YouTube) with localized ad creatives and segmented funnels.",
      results: [
        { label: "Daily Registrations", value: "500+" },
        { label: "CPA Reduction", value: "38%" },
        { label: "Attendance Rate", value: "65%" }
      ]
    }
  ];

  return (
    <section id="work" className="py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[320px] h-[320px] bg-primary/10 rounded-full blur-[64px] opacity-50" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black tracking-tight text-white mb-6"
            >
              The Proof Is In <br/>
              <span className="text-primary">The Numbers.</span>
            </motion.h2>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-white/60 font-medium max-w-sm">
              We don't hide behind vanity metrics. Here's how we've engineered growth for our partners.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cases.map((study, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-zinc-900/50 border border-white/10 p-8 rounded-2xl backdrop-blur-sm hover:border-primary/50 transition-colors duration-300"
            >
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">{study.client}</h3>
                <div className="space-y-4 text-sm text-white/70">
                  <p><strong className="text-white">Problem:</strong> {study.problem}</p>
                  <p><strong className="text-white">Strategy:</strong> {study.strategy}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                {study.results.map((result, j) => (
                  <div key={j} className="text-center">
                    <p className="text-xl md:text-2xl font-black text-primary mb-1">{result.value}</p>
                    <p className="text-[10px] uppercase tracking-wider text-white/50 font-semibold">{result.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
