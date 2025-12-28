import logo from "../assets/logoBlack.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const footerClipPath =
    "polygon(0% 20px, 1.3% 7px, 3.8% 19px, 6.1% 6px, 9.5% 18px, 11.2% 5px, 14.8% 19px, 16.5% 8px, 19.2% 17px, 21.8% 4px, 24.5% 18px, 28% 6px, 30.2% 19px, 34.5% 5px, 36.8% 18px, 40.2% 7px, 43.5% 19px, 45.8% 4px, 49.2% 18px, 51.5% 7px, 54.8% 19px, 58.2% 5px, 61.5% 18px, 64.2% 8px, 67.8% 19px, 70.5% 6px, 73.2% 18px, 77.5% 5px, 80.8% 19px, 83.2% 7px, 86.5% 18px, 89.2% 4px, 92.5% 19px, 95.8% 6px, 98.2% 18px, 100% 20px, 100% 100%, 0% 100%)";

  return (
    <div
      className="relative"
      style={{ filter: "drop-shadow(0 -5px 10px rgba(0,0,0,0.1))" }}
    >
      <footer
        className="bg-background/5 pt-16"
        style={{ clipPath: footerClipPath }}
      >
        <div className="footer-content max-w-7xl mx-auto px-4 pb-20 lg:pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div className="footer-column space-y-2">
            <div className="flex items-start flex-col gap-1">
              <img src={logo} alt="Logo" className="h-20 w-auto" />
              <h3 className="text-xl font-header text-primary">
                About Me
              </h3>
            </div>
            <p className="text-gray-600">
              Passionate Full Stack Developer with expertise in building
              scalable and efficient web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-column space-y-4">
            <h3 className="text-lg font-header text-primary mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { href: "#about", text: "About" },
                { href: "#projects", text: "Projects" },
                { href: "#skills", text: "Skills" },
                { href: "#contact", text: "Contact" },
                { href: "#experience", text: "Experience" },
              ].map((link, index) => (
                <li
                  key={index}
                  className="transform transition-transform duration-300 hover:translate-x-1"
                >
                  <a
                    href={link.href}
                    className="relative text-gray-600 hover:text-primary transition-all duration-300 group"
                  >
                    <span className="absolute -left-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      →
                    </span>
                    <span className="group-hover:translate-x-2 transition-transform duration-300">
                      {link.text}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-column space-y-4 hidden md:block">
            <h3 className="text-lg font-header text-primary mb-4">
              Contact
            </h3>
            <ul className="space-y-2">
              <li className="transform transition-transform duration-300 hover:translate-x-1">
                <a
                  href="mailto:abhay744das@gmail.com"
                  className="relative text-gray-600 hover:text-primary transition-all duration-300 group"
                >
                  <span className="absolute -left-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    →
                  </span>
                  <span className="group-hover:translate-x-2 transition-transform duration-300">
                    Email: abhay744das@gmail.com
                  </span>
                </a>
              </li>
              <li className="transform transition-transform duration-300 hover:translate-x-1">
                <a
                  href="tel:+918169805273"
                  className="relative text-gray-600 hover:text-primary transition-all duration-300 group"
                >
                  <span className="absolute -left-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    →
                  </span>
                  <span className="group-hover:translate-x-2 transition-transform duration-300">
                    Phone: +91 8169805273
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Floating Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="scroll-top-btn hidden lg:block lg:fixed bottom-6 right-6 z-50 p-2 bg-primary rounded-lg shadow-lg hover:bg-primary/90 transition-colors duration-200"
        title="Scroll to Top"
      >
        <svg
          className="w-5 h-5 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
      </footer>
    </div>
  );
};

export default Footer;
