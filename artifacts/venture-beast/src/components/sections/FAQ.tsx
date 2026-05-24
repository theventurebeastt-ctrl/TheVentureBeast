import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  id: number;
  question: string;
  answer: string | React.ReactNode;
}

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      id: 1,
      question: "What type of brands do you work with?",
      answer: "We primarily work with D2C brands, B2B SaaS companies, funded startups, and businesses with a clear growth objective and active marketing budget."
    },
    {
      id: 2,
      question: "What makes The Venture Beast different from other agencies?",
      answer: "Most agencies optimize for vanity metrics like clicks and impressions. We focus on metrics that directly impact profitability - CPL, CPA, ROAS, CAC, and total revenue growth."
    },
    {
      id: 3,
      question: "Do you only run Meta Ads?",
      answer: "No. While Meta Ads is a core strength, we also manage Google Ads, landing page optimization, conversion tracking, and full-funnel performance systems."
    },
    {
      id: 4,
      question: "What is your minimum ad budget requirement?",
      answer: "We usually work with brands spending or planning to spend at least ₹1L-2L /month in ad spend to ensure enough data for effective optimization and scaling."
    },
    {
      id: 5,
      question: "How quickly can we expect results?",
      answer: "Some campaigns show traction within the first few weeks, but sustainable scaling typically happens over 60–90 days depending on your product, offer, and market."
    },
    {
      id: 6,
      question: "Will we own our ad accounts and data?",
      answer: "Yes. Clients always retain ownership of their ad accounts, pixels, analytics, and business assets."
    },
    {
      id: 7,
      question: "Do you work on long-term contracts?",
      answer: "No forced lock-ins. We believe retention should come from performance, not contracts."
    },
    {
      id: 8,
      question: "Do you provide creatives and landing page guidance?",
      answer: "Yes. We help with creative strategy, ad messaging, funnel structure, and conversion optimization to improve overall campaign performance."
    },
    {
      id: 9,
      question: "What industries have you worked with?",
      answer: (
        <div>
          <p className="mb-3 text-zinc-600">We’ve managed high-performing campaigns across several scaling sectors:</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mt-2">
            {[
              "D2C eCommerce",
              "SaaS",
              "Education",
              "Healthcare",
              "Real Estate",
              "Local Businesses"
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-2 text-xs md:text-sm text-zinc-800 bg-zinc-50 rounded-xl px-3.5 py-2 border border-zinc-200/80 font-medium hover:border-primary/30 hover:bg-zinc-100/80 transition-all duration-300"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                {item}
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 10,
      question: "How do we get started?",
      answer: (
        <div>
          <p className="mb-4 text-zinc-600">
            Start with a strategy call. We’ll audit your current growth systems, identify opportunities, and outline a scaling roadmap.
          </p>
          <a 
            href="https://cal.com/the-venture-beast-lxgerj/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-10 px-5 text-xs font-black tracking-widest uppercase bg-primary hover:bg-primary/90 text-white rounded-full transition-all shadow-[0_0_20px_rgba(249,115,22,0.2)]"
          >
            Book Strategy Call
          </a>
        </div>
      )
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Split FAQs into two columns for desktop grid layout to prevent stretch gaps
  const half = Math.ceil(faqs.length / 2);
  const leftColumnFaqs = faqs.slice(0, half);
  const rightColumnFaqs = faqs.slice(half);

  return (
    <section id="faq" className="py-24 bg-white border-t border-zinc-100 relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[96px] opacity-40" />
        <div className="absolute top-1/3 left-1/4 w-[240px] h-[240px] bg-blue-500/5 rounded-full blur-[80px] opacity-25" />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 max-w-6xl">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-xs md:text-sm font-black tracking-[0.25em] text-primary uppercase block mb-4">
            TRANSPARENCY FIRST
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900 mb-6 leading-tight">
            Questions Brands Usually Ask <br className="hidden sm:inline" /> Before Scaling With Us.
          </h2>
          <p className="text-base md:text-lg text-zinc-500 font-medium max-w-xl mx-auto">
            Transparent answers for serious brands looking for profitable growth.
          </p>
        </motion.div>

        {/* FAQ Accordion Grid - 2 columns on desktop, 1 on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start max-w-6xl mx-auto">
          {/* Left Column */}
          <div className="space-y-4 flex flex-col">
            {leftColumnFaqs.map((faq, index) => {
              const globalIndex = index;
              const isOpen = activeIndex === globalIndex;
              return (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className={`bg-zinc-50/50 backdrop-blur-md border rounded-2xl overflow-hidden transition-all duration-300 select-none cursor-pointer ${
                    isOpen 
                      ? "border-primary/40 bg-white shadow-[0_10px_30px_rgba(249,115,22,0.06)]" 
                      : "border-zinc-200/80 hover:border-zinc-300 hover:bg-zinc-50"
                  }`}
                  onClick={() => toggleFAQ(globalIndex)}
                >
                  {/* Accordion Trigger Header */}
                  <div className="p-6 flex justify-between items-center gap-4">
                    <h3 className="font-bold text-zinc-900 text-base md:text-lg transition-colors duration-300">
                      {faq.question}
                    </h3>
                    
                    {/* Plus/Minus Morphing Icon */}
                    <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center relative">
                      {/* Horizontal Bar */}
                      <div className={`absolute w-4 h-[2px] bg-zinc-800 rounded transition-all duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`} />
                      {/* Vertical Bar (rotates 90 degrees to align with horizontal bar) */}
                      <div className={`absolute w-4 h-[2px] bg-zinc-800 rounded transition-all duration-300 ${
                        isOpen ? "rotate-180" : "rotate-90"
                      }`} />
                    </div>
                  </div>

                  {/* Accordion Content Panel */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-2 border-t border-zinc-100 text-zinc-600 font-medium leading-relaxed text-sm md:text-base">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column */}
          <div className="space-y-4 flex flex-col">
            {rightColumnFaqs.map((faq, index) => {
              const globalIndex = index + half;
              const isOpen = activeIndex === globalIndex;
              return (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index + half) * 0.05 }}
                  className={`bg-zinc-50/50 backdrop-blur-md border rounded-2xl overflow-hidden transition-all duration-300 select-none cursor-pointer ${
                    isOpen 
                      ? "border-primary/40 bg-white shadow-[0_10px_30px_rgba(249,115,22,0.06)]" 
                      : "border-zinc-200/80 hover:border-zinc-300 hover:bg-zinc-50"
                  }`}
                  onClick={() => toggleFAQ(globalIndex)}
                >
                  {/* Accordion Trigger Header */}
                  <div className="p-6 flex justify-between items-center gap-4">
                    <h3 className="font-bold text-zinc-900 text-base md:text-lg transition-colors duration-300">
                      {faq.question}
                    </h3>
                    
                    {/* Plus/Minus Morphing Icon */}
                    <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center relative">
                      {/* Horizontal Bar */}
                      <div className={`absolute w-4 h-[2px] bg-zinc-800 rounded transition-all duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`} />
                      {/* Vertical Bar (rotates 90 degrees to align with horizontal bar) */}
                      <div className={`absolute w-4 h-[2px] bg-zinc-800 rounded transition-all duration-300 ${
                        isOpen ? "rotate-180" : "rotate-90"
                      }`} />
                    </div>
                  </div>

                  {/* Accordion Content Panel */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-2 border-t border-zinc-100 text-zinc-600 font-medium leading-relaxed text-sm md:text-base">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
