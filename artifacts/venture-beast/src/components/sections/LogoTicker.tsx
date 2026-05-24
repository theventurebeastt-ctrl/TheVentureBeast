import { motion } from "framer-motion";

export default function LogoTicker() {
  const logos = [
    {
      name: "SafetyWing",
      component: (
        <div className="flex items-center gap-1 select-none">
          <span className="font-serif font-semibold text-xl md:text-2xl text-white tracking-tight">SafetyWing</span>
        </div>
      )
    },
    {
      name: "Deebaco",
      component: (
        <div className="flex items-center select-none">
          <svg viewBox="0 0 165 30" className="h-7 w-auto" xmlns="http://www.w3.org/2000/svg">
            <text 
              x="0" 
              y="25" 
              fontFamily="'Montserrat', 'Arial Black', sans-serif" 
              fontWeight="900" 
              fontSize="26" 
              fill="#ffffff" 
              letterSpacing="1.2"
            >
              DEEBACO
            </text>
            <text 
              x="0" 
              y="25" 
              fontFamily="'Montserrat', 'Arial Black', sans-serif" 
              fontWeight="900" 
              fontSize="26" 
              fill="none" 
              stroke="#000000" 
              strokeWidth="1.2" 
              strokeDasharray="2.5,2" 
              letterSpacing="1.2"
            >
              DEEBACO
            </text>
          </svg>
        </div>
      )
    },
    {
      name: "WedMeGraphy",
      component: (
        <div className="flex items-center gap-2.5 select-none">
          <div className="w-9 h-9 flex items-center justify-center flex-shrink-0 relative">
            {/* Camera + Bride silhouette custom SVG */}
            <svg viewBox="0 0 100 80" className="w-full h-full text-amber-400 fill-none stroke-current" strokeWidth="2.5">
              {/* Camera outer body */}
              <rect x="5" y="15" width="90" height="60" rx="10" />
              {/* Flash/Button */}
              <path d="M 30 15 L 30 7 L 45 7 L 45 15" strokeLinecap="round" />
              {/* Inner bride circle */}
              <circle cx="50" cy="45" r="22" strokeDasharray="3,3" />
              {/* Silhouette abstract sketch inside */}
              <path d="M 45 35 Q 52 35 50 42 Q 52 50 46 58 Q 50 63 56 63" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <div className="flex flex-col text-left leading-none">
            <span className="font-sans font-bold text-white text-sm md:text-base tracking-tight">WedMeGraphy</span>
            <span className="text-[7px] text-white/60 uppercase tracking-widest mt-0.5 font-semibold">Professional Wedding Shoot</span>
          </div>
        </div>
      )
    },
    {
      name: "fatjoe",
      component: (
        <div className="flex items-center gap-1.5 select-none leading-none">
          <span className="font-sans font-black text-white text-lg md:text-xl tracking-tighter">fatjoe</span>
          <span className="w-2.5 h-2.5 rounded-full bg-lime-400 animate-pulse mt-1" />
        </div>
      )
    },
    {
      name: "Buy me a coffee",
      component: (
        <div className="flex items-center gap-2.5 select-none">
          <div className="w-8 h-8 bg-amber-500/10 rounded-lg flex items-center justify-center border border-amber-500/30">
            <svg className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 21h18v-2H2v2zM20 8h-2V5h2v3zm-4-5H4v13c0 2.2 1.8 4 4 4h8c2.2 0 4-1.8 4-4v-3h2c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-2V3zm-2 13H6V5h8v11z"/>
            </svg>
          </div>
          <span className="font-sans font-bold text-white tracking-tight text-base md:text-lg whitespace-nowrap">Buy me a coffee</span>
        </div>
      )
    },
    {
      name: "healsway",
      component: (
        <div className="flex items-center gap-2.5 select-none">
          <div className="w-9 h-7 flex items-center justify-center flex-shrink-0 relative border border-orange-500/30 rounded p-0.5 bg-orange-500/10">
            {/* healsway iconic graphic */}
            <svg viewBox="0 0 40 30" className="w-full h-full text-orange-500 fill-none stroke-current" strokeWidth="3">
              <path d="M 5 5 L 5 25 M 35 5 L 35 25 M 5 15 L 35 15" strokeLinecap="round" />
              <path d="M 12 5 Q 20 1 28 5" strokeLinecap="round" />
            </svg>
          </div>
          <span className="font-sans font-extrabold text-white tracking-tight text-base md:text-lg">healsway</span>
        </div>
      )
    },
    {
      name: "ThesisZen",
      component: (
        <div className="flex items-center gap-2.5 select-none">
          <div className="w-9 h-9 flex items-center justify-center flex-shrink-0 relative">
            {/* ThesisZen quill pen and abstract TZ letters custom SVG */}
            <svg viewBox="0 0 100 100" className="w-full h-full fill-none" xmlns="http://www.w3.org/2000/svg">
              {/* Lowercase t in white */}
              <path d="M 32 25 L 32 75 M 18 40 L 46 40" stroke="rgb(255, 255, 255)" strokeWidth="9" strokeLinecap="round" />
              {/* Uppercase Z in white */}
              <path d="M 48 50 L 78 50 L 50 82 L 80 82" stroke="rgb(255, 255, 255)" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
              {/* Gold dot */}
              <circle cx="78" cy="30" r="9" fill="rgb(212, 163, 115)" />
              {/* Feather quill pen vibrant teal */}
              <path d="M 38 78 Q 43 45 74 25 Q 58 58 38 78" fill="rgb(45, 212, 191)" stroke="rgb(45, 212, 191)" strokeWidth="1.5" />
              {/* Quill nib gold */}
              <path d="M 38 78 L 31 87 L 41 83 Z" fill="rgb(212, 163, 115)" />
            </svg>
          </div>
          <span className="font-sans font-bold text-white tracking-tight text-base md:text-lg">ThesisZen</span>
        </div>
      )
    }
  ];

  // Double/Triple the array for seamless infinite looping marquee
  const tickerLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="py-12 bg-black border-b border-white/5 overflow-hidden relative z-20">
      <div className="container mx-auto px-6 md:px-12 text-center mb-6">
        <h4 className="text-xs md:text-sm font-black tracking-widest text-primary/70 uppercase">
          Trusted by Growth Brands Worldwide
        </h4>
      </div>

      <div className="relative w-full flex items-center overflow-hidden">
        {/* Left Fade Gradient Mask */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        
        {/* Right Fade Gradient Mask */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        {/* Marquee Wrapper */}
        <div className="flex w-max relative">
          <div className="flex animate-marquee gap-12 md:gap-20 items-center whitespace-nowrap">
            {tickerLogos.map((logo, i) => (
              <div 
                key={i} 
                className="flex items-center justify-center transition-all duration-300 opacity-85 hover:opacity-100 hover:scale-105 transform cursor-pointer"
              >
                {logo.component}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Global CSS Inject for Marquee Animation */}
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-25%);
          }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
