import { useState, useEffect } from "react";
import {
  FiHome,
  FiUser,
  FiBriefcase,
  FiMessageSquare,
  FiCode,
  FiMenu,
  FiLayers,
  FiX,
  FiArrowRight,
} from "react-icons/fi";
import logo from "../assets/logoBlack.png";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY && window.scrollY > 50) {
          setIsVisible(false);
          if (isMenuOpen) setIsMenuOpen(false); // Close menu on scroll down
        } else {
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY, isMenuOpen]);

  const navLinks = [
    { id: "01", text: "Home", href: "#", icon: FiHome },
    { id: "02", text: "About", href: "#about", icon: FiUser },
    { id: "03", text: "Experience", href: "#experience", icon: FiBriefcase },
    { id: "04", text: "Skills", href: "#skills", icon: FiCode },
    { id: "05", text: "Projects", href: "#projects", icon: FiLayers },
    { id: "06", text: "Contact", href: "#contact", icon: FiMessageSquare },
  ];

  return (
    <>
      {/* Sidebar Overlay */}
      <div 
        className={`fixed inset-0 bg-primary/40 z-[60] backdrop-blur-sm transition-opacity duration-500 lg:hidden ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Slide-out Sidebar */}
      <div 
        className={`fixed top-0 left-0 h-full w-[85%] max-w-sm bg-background z-[70] shadow-2xl transition-transform duration-500 ease-in-out lg:hidden border-r-8 border-primary bg-news-dots ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-8 h-full flex flex-col">
          {/* Sidebar Header */}
          <div className="flex justify-between items-start mb-16 border-b-2 border-primary pb-6">
            <div className="flex flex-col gap-2">
              <img src={logo} alt="LOGO" className="h-10 w-auto grayscale contrast-125 translate-x-[-4px]" />
              <span className="uppercase-label text-[0.6rem] font-black tracking-[0.2em] opacity-50">Edition 2024.01</span>
            </div>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="p-2 border-2 border-primary hover:bg-accent hover:border-accent hover:text-background transition-all"
            >
              <FiX className="w-6 h-6" />
            </button>
          </div>

          {/* Sidebar Links */}
          <nav className="flex flex-col gap-8 flex-grow">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="group flex items-baseline gap-6"
              >
                <span className="mono-data text-xs font-black text-accent opacity-40 group-hover:opacity-100 transition-opacity">
                  [{link.id}]
                </span>
                <span className="headline-serif text-3xl font-black uppercase tracking-tighter text-primary group-hover:text-accent group-hover:translate-x-2 transition-all duration-300">
                  {link.text}
                </span>
              </a>
            ))}
          </nav>

          {/* Sidebar Footer */}
          <div className="mt-auto border-t-2 border-primary pt-8 pb-4">
            <a 
              href="#contact" 
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-between bg-primary text-background p-4 uppercase-label text-xs font-black hover:bg-accent transition-all group"
            >
              <span>Secure Subscription</span>
              <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`fixed w-full bg-background z-50 transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full lg:translate-y-0"
        } border-b-4 border-primary`}
      >
        <div className="container mx-auto px-4 h-16 flex items-center justify-between py-2 lg:py-0">
          {/* Hamburger & Logo Left */}
          <div className="flex items-center gap-4 flex-shrink-0">
            {/* Hamburger Trigger (Mobile only) */}
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden p-2 border-2 border-primary hover:bg-primary hover:text-background transition-all active:scale-95"
            >
              <FiMenu className="w-6 h-6" />
            </button>

            <a href="#" className="flex items-center gap-3 group">
              <img src={logo} alt="LOGO" className="h-8 lg:h-10 w-auto grayscale contrast-125 group-hover:grayscale-0 transition-all ml-1 lg:ml-0" />
              <span className="headline-serif text-lg lg:text-2xl font-black uppercase tracking-tighter leading-none hidden sm:block">
                ABHAY KUMAR DAS
              </span>
            </a>
          </div>

          {/* Edition Info (Desktop only) */}
          <div className="hidden xl:flex border border-primary px-4 py-1 items-center gap-4 mono-data text-[0.6rem] font-black uppercase bg-background shadow-[3px_3px_0px_0px_rgba(17,17,17,1)]">
            <div className="flex items-center gap-3 border-r border-primary/20 pr-4">
              <span className="text-accent">VOL. 024</span>
              <span className="w-1 h-1 bg-primary/20 rounded-full"></span>
              <span>NO. 001</span>
            </div>
            <div className="flex items-center gap-3 border-r border-primary/20 pr-4">
              <span>{new Date().toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' })}</span>
            </div>
            <div className="flex items-center">
              <span>MUMBAI EDITION</span>
            </div>
          </div>

          {/* Desktop Links & CTA */}
          <div className="flex items-center gap-4 lg:gap-8">
            <div className="hidden lg:flex gap-6 uppercase-label text-[0.65rem] font-black">
              {navLinks.slice(1, -1).map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className="hover:text-accent transition-all duration-200 relative group py-1"
                >
                  {link.text}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
            
            <a 
              href="#contact" 
              className="bg-primary text-background px-6 py-2 uppercase-label text-[0.65rem] font-black hover:bg-accent hover:text-background transition-all duration-300 active:scale-95 shadow-[4px_4px_0px_0px_rgba(17,17,17,0.1)]"
            >
              Hire Me
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
