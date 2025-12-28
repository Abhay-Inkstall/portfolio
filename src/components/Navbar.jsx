import { useState, useEffect } from "react";
import {
  FiHome,
  FiUser,
  FiBriefcase,
  FiMessageSquare,
  FiCode,
  FiMenu,
  FiLayers,
  FiSend,
} from "react-icons/fi";
import logo from "../assets/logoBlack.png";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY && window.scrollY > 50) {
          // if scroll down hide the navbar
          setIsVisible(false);
        } else {
          // if scroll up show the navbar
          setIsVisible(true);
        }

        // remember current page location to use in the next move
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener("scroll", controlNavbar);

    // cleanup function
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const navLinks = [
    { id: 1, text: "Home", href: "#", icon: FiHome },
    { id: 2, text: "About", href: "#about", icon: FiUser },
    { id: 3, text: "Experience", href: "#experience", icon: FiBriefcase },
    { id: 4, text: "Skills", href: "#skills", icon: FiCode },
    { id: 5, text: "Projects", href: "#projects", icon: FiLayers },
    { id: 6, text: "Contact", href: "#contact", icon: FiMessageSquare },
  ];

  // Torn paper SVG mask data URI
  const tornPaperMask =
    "data:image/svg+xml,%3Csvg width='100%25' height='100%25' viewBox='0 0 1200 20' preserveAspectRatio='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0 H1200 V15 L1180 18 L1140 14 L1100 17 L1060 13 L1020 18 L980 14 L940 17 L900 13 L860 18 L820 14 L780 17 L740 13 L700 18 L660 14 L620 17 L580 13 L540 18 L500 14 L460 17 L420 13 L380 18 L340 14 L300 17 L260 13 L220 18 L180 14 L140 17 L100 13 L60 18 L20 14 L0 18 Z' fill='%23000'/%3E%3C/svg%3E";

  return (
    <>
      {/* Desktop Navbar - Only show on lg screens and above */}
      <nav
        className={`fixed w-full bg-background/90 backdrop-blur-md z-50 pb-5 transform transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full lg:translate-y-0"
        }`}
        style={{
          WebkitMaskImage: `url("${tornPaperMask}")`,
          maskImage: `url("${tornPaperMask}")`,
          WebkitMaskSize: "100% 100%",
          maskSize: "100% 100%",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          filter:
            "drop-shadow(0 1px 0 rgba(0,0,0,0.1)) drop-shadow(0 4px 6px rgba(0,0,0,0.1))",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a
                href="#"
                className="text-2xl font-header outline-none text-primary text-center flex items-center gap-2"
              >
                <img src={logo} alt="Logo" className="h-10 w-auto" />
                <span>Abhay Kumar Das</span>
              </a>
            </div>

            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.slice(0, -1).map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className="flex items-center font-light md:font-semibold gap-2 group relative outline-none text-gray-600 md:text-gray-800 hover:text-primary transition-all duration-300"
                >
                  <link.icon className="w-5 h-5 text-primary transition-transform duration-300 group-hover:scale-110" />
                  <span className="relative">
                    {link.text}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transition-all duration-300 opacity-0 group-hover:opacity-100"></span>
                  </span>
                </a>
              ))}
              <a
                href="#contact"
                className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors duration-300 font-medium flex items-center gap-2 group"
              >
                <FiSend className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                <span>Hire Now</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile & Tablet Bottom Navigation */}
      <nav className="lg:hidden fixed bottom-0 left-0 w-full bg-background/90 backdrop-blur-md shadow-lg z-50">
        <div className="container mx-auto px-2 md:px-4">
          <div className="flex items-center justify-around h-16 max-w-2xl mx-auto">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="flex flex-col items-center justify-center text-gray-700 hover:text-primary transition-all duration-300"
              >
                <link.icon className="w-6 h-6 text-primary transition-transform duration-300 group-hover:scale-110" />
                <span className="text-xs relative">
                  {link.text}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transition-all duration-300 opacity-0 group-hover:opacity-100"></span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
