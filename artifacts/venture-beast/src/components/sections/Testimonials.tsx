import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "The Venture Beast played a crucial role in scaling Healsway across the UK, USA, Europe, and India. From building an international brand identity to driving 19,000+ website visits, they handled everything SEO, content, and ads. We grew from 0 to 22k organically follower Social Media and closed over ₹10 Lakhs in high-ticket orders with just ₹5K/week ad spend. Exceptional results!",
      author: "Adiya Kumar",
      role: "Founder, Healsway",
      avatar: "/adiya.png",
      theme: "dark"
    },
    {
      quote: "Choosing The Venture Beast was one of the best decisions for our business. Their team built a complete marketing system from strategy to execution. We started seeing qualified leads within days, and their ad creatives stood out from the noise. Consistent communication, transparent reporting, and real ROI, highly recommended!",
      author: "Kunal",
      role: "Founder, Camcrush",
      avatar: "/kunal.png",
      theme: "gradient"
    }
  ];

  return (
    <section className="py-32 bg-[#09090b] border-t border-white/5 relative overflow-hidden">
      {/* Texture overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none" />

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {testimonials.map((test, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className={`p-8 md:p-10 rounded-2xl flex flex-col justify-between shadow-xl transition-all duration-300 ${
                test.theme === "gradient" 
                  ? "bg-gradient-to-br from-zinc-900 to-primary/20 text-white border border-primary/20 hover:border-primary/30 shadow-[0_0_30px_rgba(249,115,22,0.02)]" 
                  : "bg-zinc-900/60 text-white border border-white/5 hover:border-primary/20"
              }`}
            >
              <div>
                {/* 5 Stars */}
                <div className="flex gap-1 mb-6 text-orange-500">
                  {[...Array(5)].map((_, idx) => (
                    <svg key={idx} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>

                <p className="text-lg leading-relaxed mb-8 font-medium italic">
                  "{test.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center gap-4">
                <img 
                  src={test.avatar} 
                  alt={test.author} 
                  className="w-12 h-12 rounded-full object-cover border border-white/10"
                />
                <div>
                  <h4 className="text-white font-bold text-base sm:text-lg">{test.author}</h4>
                  <p className="text-primary text-sm font-semibold">
                    {test.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
