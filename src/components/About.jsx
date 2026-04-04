import { useLayoutEffect, useRef } from "react";
import {
  FiUser,
  FiDownload,
  FiGlobe,
  FiSmartphone,
  FiServer,
  FiCheck,
  FiMapPin,
  FiMail,
  FiPhone,
  FiLayout,
  FiDatabase,
} from "react-icons/fi";
import profileImage from "../assets/abhay.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Title Animation
      gsap.fromTo(
        ".about-title",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-title",
            start: "top 85%",
          },
        }
      );

      // Split layout animation (Image & Content)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".about-intro",
          start: "top 80%",
        },
      });

      tl.fromTo(
        ".about-image",
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
        0
      ).fromTo(
        ".about-text-content",
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
        0.2
      );

      // Services Cards Animation
      // Use fromTo to ensure they definitely end up visible (opacity 1)
      gsap.fromTo(
        ".service-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".services-grid",
            start: "top 90%", // Trigger slightly earlier
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={containerRef}
      className="pt-20 bg-background border-b-4 border-primary bg-news-dots"
    >
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="flex justify-between items-end border-b-2 border-primary pb-4 about-title">
          <h2 className="headline-serif text-4xl md:text-6xl font-black uppercase tracking-tighter">Inside the Story</h2>
          <span className="uppercase-label text-muted-text hidden md:block">Feature Article / Abhay Kumar Das</span>
        </div>

        <div className="about-intro grid grid-cols-1 lg:grid-cols-12 gap-0 border-b-2 border-primary bg-white/30">
          {/* Editorial Image - Fig Style */}
          <div className="lg:col-span-5 relative group about-image p-8 lg:p-12 border-b-2 lg:border-b-0 lg:border-r-2 border-primary flex flex-col items-center justify-center">
            <div className="border border-primary p-1 bg-white relative w-full max-w-sm aspect-square shadow-[8px_8px_0px_0px_rgba(17,17,17,0.05)]">
              <span className="absolute top-3 left-3 mono-data text-[0.6rem] font-black z-10 bg-white/80 px-1">FIG 1.0</span>
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <p className="mt-6 text-[0.6rem] mono-data uppercase font-black text-center tracking-widest text-muted-text">
              Abhay Kumar Das // Lead Architect & Developer
            </p>
          </div>

          {/* Editorial Content */}
          <div className="lg:col-span-7 flex flex-col about-text-content">
            {/* Bold Quote / Headline */}
            <div className="p-8 lg:p-12 border-b-2 border-primary bg-background/40">
              <h3 className="headline-serif text-3xl md:text-5xl font-black italic leading-[1.1] text-primary">
                "I build technical solutions that define digital standards and drive user engagement through structural integrity."
              </h3>
            </div>

            {/* Two-Column Body Text */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 lg:p-12">
              <p className="text-sm lg:text-base leading-relaxed text-justify text-primary font-medium opacity-90">
                Based in Mumbai, India, I have spent the last 5 years refining the craft of full-stack development and Android engineering. My approach is rooted in structural integrity and visual clarity—transforming complex requirements into elegant, high-performance applications.
              </p>
              <p className="text-sm lg:text-base leading-relaxed text-justify text-primary font-medium opacity-90">
                I specialize in building scalable web architectures and intuitive mobile systems that maintain high fidelity across devices. Every line of code is written with attention to detail, ensuring that the final product is not only functional but also a benchmark in technical excellence.
              </p>
              
              <div className="md:col-span-2 pt-8 flex flex-col md:flex-row gap-8 items-center border-t border-primary/10 mt-4">
                <div className="flex-grow space-y-2">
                  <h4 className="uppercase-label font-black text-[0.65rem] text-accent tracking-widest">Dossier Access</h4>
                  <div className="flex gap-4 mono-data text-[0.6rem] font-bold">
                    <span>MUMBAI, IN</span>
                    <span className="opacity-30">|</span>
                    <span className="lowercase">abhay744das@gmail.com</span>
                  </div>
                </div>
                <a
                  href="/Abhay_Kumar_Das_Resume.pdf"
                  download="Abhay_Kumar_Das_Resume.pdf"
                  className="w-full md:w-auto bg-primary text-background px-8 py-4 uppercase-label text-center hover:bg-accent hover:border-accent hover:text-background transition-all duration-300 font-black text-[0.7rem] shadow-[4px_4px_0px_0px_rgba(17,17,17,1)]"
                >
                  Download Resume (PDF)
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid - Refined Editorial Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Service 1 - Web */}
          <div className="p-8 lg:p-12 border-b md:border-b-0 md:border-r border-primary hover:bg-white/40 transition-colors duration-500 flex flex-col items-start">
            <div className="w-12 h-12 bg-white border border-primary flex items-center justify-center mb-10 shadow-[4px_4px_0px_0px_rgba(17,17,17,0.05)]">
              <FiLayout className="text-xl" />
            </div>
            <h4 className="headline-serif text-2xl font-black uppercase mb-6 text-primary tracking-tighter">Web Architecture</h4>
            <p className="text-sm text-primary font-medium leading-relaxed mb-10 opacity-80 text-justify">
              Implementing robust MERN stack applications with a focus on performance, SEO, and modern user-centric design principles.
            </p>
            <ul className="uppercase-label text-[0.6rem] space-y-4 font-black w-full">
              <li className="flex items-center gap-3 pb-2 border-b border-primary/5 uppercase tracking-widest leading-none">
                <span className="w-1.5 h-1.5 bg-accent"></span> Full-Stack Deployment
              </li>
              <li className="flex items-center gap-3 pb-2 border-b border-primary/5 uppercase tracking-widest leading-none">
                <span className="w-1.5 h-1.5 bg-accent"></span> Progressive Web Apps
              </li>
              <li className="flex items-center gap-3 uppercase tracking-widest leading-none">
                <span className="w-1.5 h-1.5 bg-accent"></span> SEO & Optimization
              </li>
            </ul>
          </div>

          {/* Service 2 - Mobile */}
          <div className="p-8 lg:p-12 border-b md:border-b-0 lg:border-r border-primary hover:bg-white/40 transition-colors duration-500 flex flex-col items-start">
            <div className="w-12 h-12 bg-white border border-primary flex items-center justify-center mb-10 shadow-[4px_4px_0px_0px_rgba(17,17,17,0.05)]">
              <FiSmartphone className="text-xl" />
            </div>
            <h4 className="headline-serif text-2xl font-black uppercase mb-6 text-primary tracking-tighter">Mobile Systems</h4>
            <p className="text-sm text-primary font-medium leading-relaxed mb-10 opacity-80 text-justify">
              Crafting cross-platform experiences and native Android solutions that maintain high fidelity and performance across devices.
            </p>
            <ul className="uppercase-label text-[0.6rem] space-y-4 font-black w-full">
              <li className="flex items-center gap-3 pb-2 border-b border-primary/5 uppercase tracking-widest leading-none">
                <span className="w-1.5 h-1.5 bg-accent"></span> React Native Dev
              </li>
              <li className="flex items-center gap-3 pb-2 border-b border-primary/5 uppercase tracking-widest leading-none">
                <span className="w-1.5 h-1.5 bg-accent"></span> Native Kotlin Apps
              </li>
              <li className="flex items-center gap-3 uppercase tracking-widest leading-none">
                <span className="w-1.5 h-1.5 bg-accent"></span> UI/UX System Design
              </li>
            </ul>
          </div>

          {/* Service 3 - Backend */}
          <div className="p-8 lg:p-12 border-b md:border-b-0 border-primary/20 hover:bg-white/40 transition-colors duration-500 flex flex-col items-start">
            <div className="w-12 h-12 bg-white border border-primary flex items-center justify-center mb-10 shadow-[4px_4px_0px_0px_rgba(17,17,17,0.05)]">
              <FiDatabase className="text-xl" />
            </div>
            <h4 className="headline-serif text-2xl font-black uppercase mb-6 text-primary tracking-tighter">Backend Logic</h4>
            <p className="text-sm text-primary font-medium leading-relaxed mb-10 opacity-80 text-justify">
              Designing scalable server-side architectures, RESTful APIs, and secure database management systems to power complex apps.
            </p>
            <ul className="uppercase-label text-[0.6rem] space-y-4 font-black w-full">
              <li className="flex items-center gap-3 pb-2 border-b border-primary/5 uppercase tracking-widest leading-none">
                <span className="w-1.5 h-1.5 bg-accent"></span> Microservices Arch
              </li>
              <li className="flex items-center gap-3 pb-2 border-b border-primary/5 uppercase tracking-widest leading-none">
                <span className="w-1.5 h-1.5 bg-accent"></span> API Development
              </li>
              <li className="flex items-center gap-3 uppercase tracking-widest leading-none">
                <span className="w-1.5 h-1.5 bg-accent"></span> Cloud Integration
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
