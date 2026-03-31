import { motion } from "framer-motion";

export default function Process() {
  const steps = [
    {
      num: "01",
      title: "Audit & Architecture",
      desc: "We tear down your current ad accounts, tracking setup, and funnels. We find the leaks where you're bleeding cash and rebuild the foundation for scale."
    },
    {
      num: "02",
      title: "Strategy & Creative",
      desc: "We develop a bespoke growth thesis. We build the media buying structure, map out the customer journey, and launch high-converting creative assets."
    },
    {
      num: "03",
      title: "Scale & Optimize",
      desc: "We launch, test aggressively, and cut the losers. When we find winning variations, we pour fuel on the fire and scale your revenue profitably."
    }
  ];

  return (
    <section id="process" className="py-32 bg-zinc-50 border-y border-zinc-200">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black tracking-tight text-zinc-950 mb-6"
          >
            How We Execute.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-zinc-600 font-medium"
          >
            A simple, ruthless framework designed for one thing: maximizing your return on ad spend.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-zinc-200 z-0"></div>

          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="relative z-10 text-center"
            >
              <div className="w-24 h-24 mx-auto bg-white border-4 border-zinc-100 rounded-full flex items-center justify-center mb-8 shadow-xl">
                <span className="text-3xl font-black text-primary">{step.num}</span>
              </div>
              <h3 className="text-2xl font-bold text-zinc-950 mb-4">{step.title}</h3>
              <p className="text-zinc-600 leading-relaxed px-4">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
