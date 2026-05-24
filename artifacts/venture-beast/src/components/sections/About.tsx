import { motion } from "framer-motion";
import { 
  TrendingUp, 
  PhoneCall, 
  ShoppingBag, 
  Eye, 
  ArrowUpRight, 
  Globe 
} from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-32 bg-background relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 w-full"
          >
            <div className="w-full min-h-[520px] bg-black rounded-2xl border border-primary/20 relative overflow-hidden p-6 flex flex-col gap-4 shadow-[0_0_50px_rgba(249,115,22,0.05)]">
              {/* Glowing Background Orbs */}
              <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/15 rounded-full blur-[80px] pointer-events-none" />
              
              {/* Tech/Grid Pattern Overlay */}
              <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

              {/* Dashboard Header */}
              <div className="flex items-center justify-between border-b border-white/5 pb-3 relative z-10">
                <div className="flex items-center gap-2">
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-[10px] md:text-xs font-black tracking-widest text-white/50 uppercase">
                    Live Performance Marketing Dashboard
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="hidden sm:flex items-center gap-1.5 bg-zinc-900/80 border border-white/5 rounded-md px-2 py-0.5 text-[10px] text-white/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60"></span>
                    Google Ads & Analytics
                  </div>
                  <div className="text-[10px] text-white/40 bg-zinc-900/60 border border-white/5 rounded px-2 py-0.5">
                    May 15 - Dec 17
                  </div>
                </div>
              </div>

              {/* 4 Floating KPI Cards Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 relative z-10">
                {/* Store Sessions Card */}
                <div className="bg-zinc-950/60 backdrop-blur-md border border-white/5 hover:border-primary/20 transition-all duration-300 rounded-xl p-3 flex flex-col justify-between group">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] text-white/50 font-medium">Store Sessions</span>
                    <div className="p-1 bg-green-500/10 text-green-400 rounded-md group-hover:scale-110 transition-transform">
                      <ShoppingBag className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-white tracking-tight leading-none group-hover:text-primary transition-colors">19K+</h4>
                    <span className="text-[9px] text-green-400 font-semibold flex items-center gap-0.5 mt-1">
                      <ArrowUpRight className="w-2.5 h-2.5" /> +24% vs last mo
                    </span>
                  </div>
                </div>

                {/* Qualified Calls Card */}
                <div className="bg-zinc-950/60 backdrop-blur-md border border-white/5 hover:border-primary/20 transition-all duration-300 rounded-xl p-3 flex flex-col justify-between group">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] text-white/50 font-medium">Qualified Calls</span>
                    <div className="p-1 bg-primary/10 text-primary rounded-md group-hover:scale-110 transition-transform">
                      <PhoneCall className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-white tracking-tight leading-none group-hover:text-primary transition-colors">8.7K+</h4>
                    <span className="text-[9px] text-primary font-semibold flex items-center gap-0.5 mt-1">
                      <ArrowUpRight className="w-2.5 h-2.5" /> +18.4% growth
                    </span>
                  </div>
                </div>

                {/* Revenue Influenced Card */}
                <div className="bg-zinc-950/60 backdrop-blur-md border border-white/5 hover:border-primary/20 transition-all duration-300 rounded-xl p-3 flex flex-col justify-between group">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] text-white/50 font-medium">Revenue Influenced</span>
                    <div className="p-1 bg-orange-500/10 text-orange-400 rounded-md group-hover:scale-110 transition-transform">
                      <TrendingUp className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-white tracking-tight leading-none group-hover:text-primary transition-colors">₹50Cr+</h4>
                    <span className="text-[9px] text-white/40 font-medium mt-1 block">
                      Scale Optimized
                    </span>
                  </div>
                </div>

                {/* Organic Impressions Card */}
                <div className="bg-zinc-950/60 backdrop-blur-md border border-white/5 hover:border-primary/20 transition-all duration-300 rounded-xl p-3 flex flex-col justify-between group">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] text-white/50 font-medium">Impressions</span>
                    <div className="p-1 bg-purple-500/10 text-purple-400 rounded-md group-hover:scale-110 transition-transform">
                      <Eye className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-white tracking-tight leading-none group-hover:text-primary transition-colors">666K</h4>
                    <span className="text-[9px] text-purple-400 font-semibold flex items-center gap-0.5 mt-1">
                      <ArrowUpRight className="w-2.5 h-2.5" /> +42% CTR Peak
                    </span>
                  </div>
                </div>
              </div>

              {/* Main Analytics Panels Grid */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-3 flex-1 relative z-10 min-h-0">
                {/* 3/5: Line Chart Panel (Google Ads & SEO Click Graphs) */}
                <div className="md:col-span-3 bg-zinc-950/80 backdrop-blur-md border border-white/5 rounded-xl p-4 flex flex-col justify-between relative group hover:border-primary/10 transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h5 className="text-xs font-bold text-white leading-none">Traffic & Conversion Scale</h5>
                      <p className="text-[9px] text-white/40 mt-1">Multi-Channel Ad Attributed Scaling Curve</p>
                    </div>
                    <div className="flex items-center gap-3 text-[9px]">
                      <span className="flex items-center gap-1 text-primary">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" /> Paid Clicks
                      </span>
                      <span className="flex items-center gap-1 text-blue-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400" /> Phone Calls
                      </span>
                    </div>
                  </div>

                  {/* SVG Chart with curved lines */}
                  <div className="flex-1 w-full min-h-[120px] relative mt-1 flex items-end">
                    <svg viewBox="0 0 300 120" className="w-full h-full overflow-visible">
                      <defs>
                        {/* Gradients */}
                        <linearGradient id="gradient-primary" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="rgb(249, 115, 22)" stopOpacity="0.25"/>
                          <stop offset="100%" stopColor="rgb(249, 115, 22)" stopOpacity="0.0"/>
                        </linearGradient>
                        <linearGradient id="gradient-blue" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="rgb(96, 165, 250)" stopOpacity="0.2"/>
                          <stop offset="100%" stopColor="rgb(96, 165, 250)" stopOpacity="0.0"/>
                        </linearGradient>
                      </defs>

                      {/* Grid Lines */}
                      <line x1="0" y1="120" x2="300" y2="120" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                      <line x1="0" y1="90" x2="300" y2="90" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                      <line x1="0" y1="60" x2="300" y2="60" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                      <line x1="0" y1="30" x2="300" y2="30" stroke="rgba(255,255,255,0.03)" strokeWidth="1" strokeDasharray="2,2" />

                      {/* Area Fill - Blue Line */}
                      <path d="M 0 115 Q 40 115 80 110 Q 120 112 160 50 Q 200 80 240 40 Q 280 110 300 112 L 300 120 L 0 120 Z" fill="url(#gradient-blue)" />
                      {/* Area Fill - Orange Line */}
                      <path d="M 0 110 Q 40 100 80 105 Q 120 90 160 30 Q 200 70 240 25 Q 280 95 300 100 L 300 120 L 0 120 Z" fill="url(#gradient-primary)" />

                      {/* Chart curves */}
                      {/* Phone calls path (blue) */}
                      <path d="M 0 115 Q 40 115 80 110 Q 120 112 160 50 Q 200 80 240 40 Q 280 110 300 112" fill="none" stroke="rgb(96, 165, 250)" strokeWidth="2" strokeLinecap="round" />
                      {/* Paid clicks path (orange) */}
                      <path d="M 0 110 Q 40 100 80 105 Q 120 90 160 30 Q 200 70 240 25 Q 280 95 300 100" fill="none" stroke="rgb(249, 115, 22)" strokeWidth="2.5" strokeLinecap="round" />

                      {/* Pulsing Intersect Points */}
                      <circle cx="160" cy="30" r="4" fill="rgb(249, 115, 22)" stroke="white" strokeWidth="1" className="animate-pulse" />
                      <circle cx="240" cy="25" r="4" fill="rgb(249, 115, 22)" stroke="white" strokeWidth="1" className="animate-pulse" />
                      <circle cx="160" cy="50" r="4" fill="rgb(96, 165, 250)" stroke="white" strokeWidth="1" />
                    </svg>

                    {/* Peak conversion stats label overlay */}
                    <div className="absolute top-[20%] left-[55%] bg-zinc-900/90 border border-primary/40 rounded px-1.5 py-0.5 text-[8px] text-white backdrop-blur shadow-lg">
                      <span className="font-bold text-primary">Peak ROAS: 6.4x</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mt-3 pt-2 border-t border-white/5 text-[9px] text-white/40">
                    <span>Q2 2017</span>
                    <span>Q4 2025</span>
                  </div>
                </div>

                {/* 2/5: Shopify Session Analysis & Channels Panel */}
                <div className="md:col-span-2 bg-zinc-950/80 backdrop-blur-md border border-white/5 rounded-xl p-4 flex flex-col justify-between hover:border-primary/10 transition-colors">
                  <div>
                    <h5 className="text-xs font-bold text-white leading-none mb-1">Sessions by Device</h5>
                    <p className="text-[9px] text-white/40 mb-3">19.1K Shopify Session Breakdown</p>
                  </div>

                  {/* Device Circular Chart + Sources */}
                  <div className="flex items-center gap-4 flex-1">
                    {/* Ring Chart */}
                    <div className="relative w-16 h-16 flex-shrink-0 flex items-center justify-center">
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                        <circle cx="18" cy="18" r="15.915" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="3" />
                        
                        {/* Mobile 68% (Orange) */}
                        <circle cx="18" cy="18" r="15.915" fill="none" stroke="rgb(249, 115, 22)" strokeWidth="3.5" 
                                strokeDasharray="68 32" strokeDashoffset="0" />
                        {/* Desktop 24% (Blue) */}
                        <circle cx="18" cy="18" r="15.915" fill="none" stroke="rgb(96, 165, 250)" strokeWidth="3.5" 
                                strokeDasharray="24 76" strokeDashoffset="-68" />
                        {/* Tablet 8% (Purple) */}
                        <circle cx="18" cy="18" r="15.915" fill="none" stroke="rgb(168, 85, 247)" strokeWidth="3.5" 
                                strokeDasharray="8 92" strokeDashoffset="-92" />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-[10px] font-black text-white">68%</span>
                        <span className="text-[6px] text-white/40 uppercase">Mobile</span>
                      </div>
                    </div>

                    {/* Progress bars of sources */}
                    <div className="flex-1 space-y-2 text-[9px]">
                      <div>
                        <div className="flex justify-between text-white/80 mb-0.5">
                          <span>Direct / Return</span>
                          <span className="font-bold text-white">8.0K</span>
                        </div>
                        <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                          <div className="h-full bg-primary rounded-full" style={{ width: "80%" }}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-white/80 mb-0.5">
                          <span>Paid Social</span>
                          <span className="font-bold text-white">5.7K</span>
                        </div>
                        <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-400 rounded-full" style={{ width: "57%" }}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-white/80 mb-0.5">
                          <span>Google Organic</span>
                          <span className="font-bold text-white">2.6K</span>
                        </div>
                        <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                          <div className="h-full bg-purple-400 rounded-full" style={{ width: "26%" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Top Referrer List snippet */}
                  <div className="mt-3 pt-3 border-t border-white/5 space-y-1.5">
                    <div className="flex justify-between text-[8px] text-white/40 uppercase tracking-wider font-semibold">
                      <span>Top Referrer</span>
                      <span>Sessions</span>
                    </div>
                    <div className="flex justify-between text-[9px] text-white/70">
                      <span className="font-medium text-white/90">healsway.io</span>
                      <span className="font-mono font-bold text-white/90">1,551</span>
                    </div>
                    <div className="flex justify-between text-[9px] text-white/50">
                      <span className="truncate max-w-[100px]">app.adlibraryspy.com</span>
                      <span className="font-mono">838</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Trust/Performance Micro Footer */}
              <div className="flex items-center justify-between border-t border-white/5 pt-3 relative z-10 text-[9px] text-white/30">
                <span className="flex items-center gap-1">
                  <Globe className="w-3 h-3 text-primary/70 animate-spin-slow" /> Domain Performance Certified
                </span>
                <span className="font-medium text-primary/70 uppercase tracking-widest text-[8px]">
                  Precision Growth Engineering
                </span>
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
      
      {/* Smooth gradient transition to next section */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none z-0" 
        style={{
          background: "linear-gradient(to bottom, transparent 0%, #09090b 100%)"
        }}
      />
      
      {/* Subtle orange glow at the bottom boundary junction */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[400px] h-[100px] pointer-events-none z-0" 
        style={{
          background: "radial-gradient(circle at center, rgba(249,115,22,0.06), transparent 70%)"
        }}
      />
    </section>
  );
}
