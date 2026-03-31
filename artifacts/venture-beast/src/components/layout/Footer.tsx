export default function Footer() {
  return (
    <footer className="bg-zinc-950 pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <span className="text-2xl font-black tracking-tight text-white uppercase block mb-4">
              THE <span className="text-primary">VENTURE BEAST</span>
            </span>
            <p className="text-white/60 max-w-sm mb-6">
              We turn ad budgets into scalable revenue for D2C brands, B2B SaaS companies, and funded startups. 
              We don't sell promises — we sell proof.
            </p>
            <a href="mailto:growth@theventurebeast.com" className="text-white font-medium hover:text-primary transition-colors">
              growth@theventurebeast.com
            </a>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-white/60 hover:text-white transition-colors">Lead Generation Systems</a></li>
              <li><a href="#services" className="text-white/60 hover:text-white transition-colors">D2C Revenue Scaling</a></li>
              <li><a href="#services" className="text-white/60 hover:text-white transition-colors">Paid Ads Optimization</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#work" className="text-white/60 hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#process" className="text-white/60 hover:text-white transition-colors">Process</a></li>
              <li><a href="#about" className="text-white/60 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-white/60 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10">
          <p className="text-white/40 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} The Venture Beast. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/40 hover:text-white transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-white/40 hover:text-white transition-colors text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
