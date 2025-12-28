import { useLayoutEffect, useRef } from "react";
import { FiSend } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import heroImage from "../assets/heroImage.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(".hero-content > *", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });

      gsap.from(".hero-social a", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.7)",
        delay: 0.5,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen flex items-center justify-center bg-background/5 overflow-hidden"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Content */}
      <div className="hero-content relative text-center px-4">
        <h1 className="text-5xl md:text-7xl text-primary mb-6 font-header font-light">
          Hi, I'm Abhay Kumar Das
        </h1>
        <p className="text-2xl md:text-3xl text-text mb-8">
          Software Developer & Tech Enthusiast
        </p>

        {/* Social Links */}
        <div className="hero-social flex justify-center gap-6">
          <a
            href="https://github.com/Innocent-Alive"
            className="text-primary hover:text-secondary transition-colors duration-300 transform hover:scale-110"
            aria-label="GitHub"
          >
            <FaGithub className="w-8 h-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/innocent-alive/"
            className="text-primary hover:text-secondary transition-colors duration-300 transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-8 h-8" />
          </a>
          <a
            href="https://www.facebook.com/TheInnocentAlive"
            className="text-primary hover:text-secondary transition-colors duration-300 transform hover:scale-110"
            aria-label="Facebook"
          >
            <FaFacebook className="w-8 h-8" />
          </a>
        </div>

        {/* Hire Now Button - Only visible on tablet and mobile */}
        <div className="block lg:hidden mt-16">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-all duration-300 hover:scale-105 active:scale-95 font-medium text-lg"
          >
            <FiSend className="w-5 h-5" />
            <span>Hire Now</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
