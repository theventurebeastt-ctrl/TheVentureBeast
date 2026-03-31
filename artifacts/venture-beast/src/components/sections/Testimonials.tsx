import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "The Venture Beast completely transformed our acquisition strategy. We were struggling with Meta Ads post-iOS 14, but they brought our CPA down by 40% and helped us scale to our highest revenue month ever.",
      author: "Rahul S.",
      role: "Founder, D2C Apparel Brand"
    },
    {
      quote: "Most agencies just report vanity metrics. These guys act like an extension of our growth team. They built a Google Ads funnel that consistently delivers high-intent enterprise leads.",
      author: "Neha M.",
      role: "CMO, B2B SaaS Platform"
    }
  ];

  return (
    <section className="py-32 bg-zinc-950 border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">
            What Our Partners Say.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((test, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white/5 border border-white/10 p-10 rounded-2xl"
            >
              <svg className="w-10 h-10 text-primary mb-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-xl text-white/90 leading-relaxed mb-8 font-medium">
                "{test.quote}"
              </p>
              <div>
                <p className="text-white font-bold text-lg">{test.author}</p>
                <p className="text-primary text-sm font-semibold tracking-wide uppercase">{test.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
