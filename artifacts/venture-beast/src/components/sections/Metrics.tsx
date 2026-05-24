import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

function AnimatedCounter({ value, prefix = "", suffix = "", decimal = false }: { value: number, prefix?: string, suffix?: string, decimal?: boolean }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const startTime = performance.now();

      const updateCounter = (currentTime: number) => {
        const elapsedTime = currentTime - startTime;
        if (elapsedTime < duration) {
          const progress = elapsedTime / duration;
          // easeOutExpo
          const easeOut = 1 - Math.pow(1 - progress, 3);
          setCount(start + (value - start) * easeOut);
          requestAnimationFrame(updateCounter);
        } else {
          setCount(value);
        }
      };

      requestAnimationFrame(updateCounter);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {prefix}
      {decimal ? count.toFixed(1) : Math.floor(count)}
      {suffix}
    </span>
  );
}

export default function Metrics() {
  const metrics = [
    {
      value: 50,
      prefix: "₹",
      suffix: "Cr+",
      label: "Revenue Generated",
      decimal: false
    },
    {
      value: 43,
      prefix: "",
      suffix: "%",
      label: "Avg. CPL Reduction",
      decimal: false
    },
    {
      value: 3.2,
      prefix: "",
      suffix: "x",
      label: "Avg. ROAS Improvement",
      decimal: true
    },
    {
      value: 200,
      prefix: "",
      suffix: "+",
      label: "Campaigns Managed",
      decimal: false
    }
  ];

  return (
    <section className="py-20 bg-zinc-950 border-y border-white/5 relative z-10 overflow-hidden md:overflow-visible">
      {/* Subtle top orange glow overlapping both sections */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] pointer-events-none z-0" 
        style={{
          background: "radial-gradient(circle at center, rgba(255,115,0,0.18), transparent 70%)"
        }}
      />
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {metrics.map((metric, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center md:text-left flex flex-col"
            >
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-2 tracking-tighter">
                <AnimatedCounter 
                  value={metric.value} 
                  prefix={metric.prefix} 
                  suffix={metric.suffix} 
                  decimal={metric.decimal} 
                />
              </h3>
              <p className="text-sm md:text-base text-primary font-semibold uppercase tracking-wider">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
