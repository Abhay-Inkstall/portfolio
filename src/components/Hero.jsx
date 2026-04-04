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
      className="relative bg-background bg-news-dots"
    >
      <div className="container mx-auto px-4 pt-20 lg:pt-28 pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-b-4 border-primary pb-12 hero-content">
        {/* Left Column - Main Headline */}
        <div className="lg:col-span-8 flex flex-col gap-8">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-accent"></span>
            <span className="uppercase-label text-accent font-black text-sm">Breaking Development</span>
          </div>
          
          <h1 className="headline-serif text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] text-primary">
            Transforming <br /> 
            the way your <br /> 
            <span className="italic text-accent">ideas</span> work
          </h1>

          <div className="flex flex-col md:flex-row gap-10 items-start mt-4">
            <div className="relative">
              <p className="text-xl md:text-2xl leading-tight text-primary font-medium max-w-2xl text-justify">
                <span className="float-left text-8xl font-header font-black mr-4 leading-[0.7] text-primary mt-2">A</span>
                bhay Kumar Das brings your digital vision to life with a robust technical arsenal. 
                Specializing in building scalable web applications and intuitive mobile experiences 
                that drive user engagement and business growth in an ever-evolving digital landscape.
              </p>
              
              <div className="flex flex-wrap gap-4 mt-10">
                <a 
                  href="#contact" 
                  className="bg-primary text-background px-10 py-4 uppercase-label text-sm font-black hover:bg-accent transition-colors duration-300"
                >
                  Start Collaboration
                </a>
                <a 
                  href="#projects" 
                  className="border-2 border-primary px-10 py-4 uppercase-label text-sm font-black hover:bg-neutral-100 transition-colors duration-300"
                >
                  View Archives
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - "Market Watch" / Sidebar */}
        <div className="lg:col-span-4 border-l-4 border-primary pl-10 hidden lg:flex flex-col gap-8">
          <div>
            <h3 className="uppercase-label border-b-2 border-primary pb-2 mb-8 text-lg font-black tracking-widest">Market Watch</h3>
            <div className="flex flex-col gap-10">
              <div className="flex justify-between items-end border-b border-secondary pb-5">
                <span className="text-muted-text uppercase-label text-xs font-bold">MERN Experience</span>
                <div className="text-right">
                  <span className="headline-serif text-3xl font-black">3+ Years</span>
                  <p className="text-accent text-[0.7rem] font-black uppercase mt-1">▲ 12% GROWTH</p>
                </div>
              </div>
              <div className="flex justify-between items-end border-b border-secondary pb-5">
                <span className="text-muted-text uppercase-label text-xs font-bold">Code Quality</span>
                <div className="text-right">
                  <span className="headline-serif text-3xl font-black">99.9%</span>
                  <p className="text-accent text-[0.7rem] font-black uppercase mt-1">ENTERPRISE GRADE</p>
                </div>
              </div>
              <div className="flex justify-between items-end border-b border-secondary pb-5">
                <span className="text-muted-text uppercase-label text-xs font-bold">Solutions Delivered</span>
                <div className="text-right">
                  <span className="headline-serif text-3xl font-black">25+</span>
                  <p className="text-accent text-[0.7rem] font-black uppercase mt-1">GLOBAL REACH</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Advertisement Mockup */}
          <div className="mt-auto bg-neutral-100 p-8 border-2 border-primary text-center">
            <span className="uppercase-label text-[0.6rem] mb-4 block font-bold text-muted-text tracking-[0.2em]">P R O M O T E D</span>
            <div className="bg-primary py-8 flex items-center justify-center mb-5 group cursor-pointer hover:bg-accent transition-colors duration-500">
              <span className="text-background headline-serif text-5xl font-black uppercase tracking-tighter">Hire Me</span>
            </div>
            <p className="text-xs italic uppercase tracking-widest font-black leading-tight">
              Accepting New <br /> Opportunities for 2026
            </p>
          </div>
        </div>
      </div>

      </div>

      {/* Ticker Tape Style Socials - Full Width */}
      <div className="w-full py-4 border-y-2 border-primary flex overflow-hidden whitespace-nowrap bg-background group">
        <div className="flex animate-marquee group-hover:pause-animation">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center gap-10 mx-5 text-primary">
              <a href="https://github.com/Innocent-Alive" className="uppercase-label text-xs hover:text-accent font-black">GitHub / @Innocent-Alive</a>
              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
              <a href="https://www.linkedin.com/in/innocent-alive/" className="uppercase-label text-xs hover:text-accent font-black">LinkedIn / @Abhay-Kumar-Das</a>
              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
              <a href="https://www.instagram.com/innocent_alive/" className="uppercase-label text-xs hover:text-accent font-black">Instagram / @Innocent_Alive</a>
              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
              <a href="https://www.facebook.com/TheInnocentAlive" className="uppercase-label text-xs hover:text-accent font-black">Facebook / @TheInnocentAlive</a>
              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
