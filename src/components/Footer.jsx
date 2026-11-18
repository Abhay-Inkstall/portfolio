import logo from "../assets/logoBlack.png";

const Footer = ({ isSepia, setIsSepia }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-background pt-0 pb-6 relative overflow-hidden transition-colors duration-700">
      {/* Pre-Footer CTA Section - Full Width Editorial Style with Rich Background Animation */}
      <div className="bg-primary text-background py-16 md:py-24 mb-10 border-y-8 border-primary relative overflow-hidden">
        {/* Animated Background Ambience */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-accent/20 rounded-full blur-[120px] pointer-events-none animate-pulse" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-white/10 rounded-full blur-[100px] pointer-events-none animate-pulse [animation-delay:1.5s]" />

        {/* Animated Newsprint Dot Grid Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none opacity-40" />

        {/* Animated Dual Typographic Marquee Ribbons */}
        <div className="absolute inset-0 flex flex-col justify-around pointer-events-none select-none opacity-[0.06] overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap text-6xl md:text-8xl font-black headline-serif uppercase tracking-widest text-background">
            {[...Array(6)].map((_, i) => (
              <span key={i} className="mx-6">
                TRANSFORM • INNOVATE • SCALE • ARCHITECTURE • FULLSTACK • 
              </span>
            ))}
          </div>
          <div className="flex animate-marquee-reverse whitespace-nowrap text-6xl md:text-8xl font-black headline-serif uppercase tracking-widest text-background">
            {[...Array(6)].map((_, i) => (
              <span key={i} className="mx-6">
                EDITORIAL VISION • ENTERPRISE SOLUTIONS • MODERN WEB • 2026 • 
              </span>
            ))}
          </div>
        </div>

        {/* Foreground Content */}
        <div className="container mx-auto px-4 flex flex-col items-center text-center relative z-10">
          <h2 className="headline-serif text-4xl md:text-8xl font-black mb-8 leading-none max-w-5xl tracking-tighter">
            Ready to transform your workflow?
          </h2>
          <p className="text-sm md:text-xl mb-12 opacity-80 max-w-3xl font-medium leading-relaxed italic">
            Join the ranks of innovative brands already leveraging advanced web solutions to drive engagement and achieve unparalleled success in the digital editorial space.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
            <a 
              href="#contact" 
              className="bg-background text-primary px-10 py-5 uppercase-label text-sm font-black hover:bg-neutral-200 transition-all duration-300 shadow-[8px_8px_0px_0px_rgba(204,0,0,1)] text-center"
            >
              Start Collaboration
            </a>
            <a 
              href="#contact" 
              className="border-4 border-background text-background px-10 py-5 uppercase-label text-sm font-black hover:bg-background hover:text-primary transition-all duration-300 text-center"
            >
              Schedule a Call
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-4">
          {/* Column 1: Branding & Edition Info */}
          <div>
            <div className="mb-6 border-b-2 border-primary pb-3">
              <img src={logo} alt="LOGO" className="h-10 w-auto grayscale contrast-125 mb-3" />
              <h3 className="uppercase-label text-[0.6rem] font-black tracking-widest opacity-60">MASTHEAD_REGISTERED</h3>
            </div>
            <div className="mono-data text-[0.65rem] font-black text-primary leading-loose tracking-tighter">
              <p>SERIES: {new Date().getFullYear()}</p>
              <p>VOL. {new Date().getFullYear() % 100}.5 // ISSUE 01</p>
              <p>LOC: MUMBAI, INDIA [19.21°N, 72.85°E]</p>
              <p className="mt-2 text-accent">STATUS: CONTINUOUS_UPDATE</p>
            </div>
            
            {/* Theme Toggle Button */}
            <button 
              onClick={() => setIsSepia(!isSepia)}
              className="mt-6 flex items-center gap-3 border-2 border-primary px-4 py-2 hover:bg-primary hover:text-background transition-all duration-300 group"
            >
              <div className={`w-3 h-3 rounded-full ${isSepia ? 'bg-accent' : 'bg-primary group-hover:bg-background'} transition-colors`}></div>
              <span className="uppercase-label text-[0.6rem] font-black">Daily Edition: {isSepia ? 'Sepia' : 'Standard'}</span>
            </button>
          </div>

          {/* Column 2: Staff */}
          <div>
            <h3 className="uppercase-label text-sm font-black mb-6 border-b-2 border-primary pb-2 inline-block">BUREAU_STAFF</h3>
            <ul className="mono-data text-[0.65rem] font-black text-primary space-y-2.5 uppercase tracking-tighter">
              <li className="flex justify-between border-b border-primary/10 pb-1"><span>EDITOR:</span> <span>ABHAY DAS</span></li>
              <li className="flex justify-between border-b border-primary/10 pb-1"><span>UX_DESIGN:</span> <span>NEWS_SYSTEM</span></li>
              <li className="flex justify-between border-b border-primary/10 pb-1"><span>DEV_OPS:</span> <span>SCRIPTS_V4.0</span></li>
              <li className="flex justify-between border-b border-primary/10 pb-1"><span>TYPOGRAPHY:</span> <span>SERIF_STACK</span></li>
            </ul>
          </div>

          {/* Column 3: Index */}
          <div>
            <h3 className="uppercase-label text-sm font-black mb-6 border-b-2 border-primary pb-2 inline-block">ARCHIVE_INDEX</h3>
            <ul className="mono-data text-xs font-black text-primary space-y-2.5 uppercase tracking-tighter">
              <li><a href="#about" className="hover:text-accent hover:underline flex items-center gap-2"><span>[01]</span> BIOGRAPHY</a></li>
              <li><a href="#experience" className="hover:text-accent hover:underline flex items-center gap-2"><span>[02]</span> CAREER_LOG</a></li>
              <li><a href="#projects" className="hover:text-accent hover:underline flex items-center gap-2"><span>[03]</span> INSIGHTS</a></li>
              <li><a href="#skills" className="hover:text-accent hover:underline flex items-center gap-2"><span>[04]</span> TECH_SPECS</a></li>
              <li><a href="#" className="hover:text-accent hover:underline flex items-center gap-2"><span>[05]</span> BLOGS</a></li>
            </ul>
          </div>

          {/* Column 4: Legal & Controls */}
          <div className="flex flex-col justify-between items-start lg:items-end">
            <div className="text-left lg:text-right w-full">
               <h3 className="uppercase-label text-sm font-black mb-6 border-b-2 border-primary pb-2 inline-block">LEGAL_DOSSIER</h3>
               <p className="mono-data text-[0.65rem] font-black text-muted-text uppercase leading-loose">
                 © {new Date().getFullYear()} ALL RIGHTS RESERVED.<br/>
                 UNAUTHORIZED DUPLICATION IS A BREACH OF TERMS.<br/>
                 IP_TRACKING: ACTIVE
               </p>
            </div>
            <button 
              onClick={scrollToTop}
              className="mt-8 border-4 border-primary p-3 w-12 h-12 flex items-center justify-center hover:bg-accent hover:text-background transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] group"
              title="Return to Masthead"
            >
              <span className="font-black text-xl group-hover:-translate-y-1 transition-transform">↑</span>
            </button>
          </div>
        </div>
      </div>

      {/* Background Page Number Decor */}
      <div className="absolute top-[-50px] right-[-30px] opacity-5 text-[15rem] font-black uppercase-label select-none pointer-events-none rotate-12">
        FIN
      </div>
    </footer>
  );
};

export default Footer;
