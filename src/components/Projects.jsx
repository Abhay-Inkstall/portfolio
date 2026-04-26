import { useState, useLayoutEffect, useRef, useEffect } from "react";
import { MdOutlineWorkspaces } from "react-icons/md";
import { FiChevronLeft, FiChevronRight, FiGithub, FiExternalLink } from "react-icons/fi";
import project1 from "../assets/ecostore.png";
import project2 from "../assets/microsoft.png";
import project3 from "../assets/calculator.png";
import project4 from "../assets/sizzleindia.png";
import project5 from "../assets/rollrush.png";
import project6 from "../assets/NumzyProject.png";
import project7 from "../assets/ExpenseTracker.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  const projects = [
    {
      title: "Microsoft Clone",
      description:
        "A Microsoft clone website built with vanilla HTML, CSS and JavaScript, featuring a responsive design.",
      tech: ["HTML", "CSS", "JavaScript"],
      image: project2,
      link: "https://microsoft-clone-steel-delta.vercel.app/",
      github: "https://github.com/Innocent-Alive/Microsoft-Homepage",
    },
    {
      title: "EcoStore Web App",
      description:
        "A full-stack e-commerce platform with user authentication, product management, and payment integration.",
      tech: ["React", "Node.js", "MongoDB", "Tailwind"],
      image: project1,
      link: "https://ecostoreonline.onrender.com/",
      github: "https://github.com/Innocent-Alive/EcoStore",
    },
    {
      title: "Numzy",
      description:
        "A maths-based game where players solve equations to score points. Features a Python backend for logic and PostgreSQL (NeonDB) for progress tracking.",
      tech: ["React Native", "Python", "PostgreSQL", "Android"],
      image: project6,
      link: "#",
      github: "#",
    },
    {
      title: "No Exceed",
      description:
        "A comprehensive expense tracker and to-do list application for better financial and task management.",
      tech: ["TypeScript", "React Native", "Node.js", "MongoDB"],
      image: project7,
      link: "#",
      github: "#",
    },
    {
      title: "Sizzle Website",
      description:
        "A food website built with React, Tailwind, and GSAP, featuring a responsive design.",
      tech: ["React", "Tailwind", "GSAP"],
      image: project4,
      link: "https://sizzleindia.vercel.app/",
      github: "https://github.com/Innocent-Alive/Sizzle",
    },
    {
      title: "Roll Rush Game",
      description:
        "A game built with html, css and js, featuring a responsive design.",
      tech: ["HTML", "CSS", "JavaScript"],
      image: project5,
      link: "https://roll-rush.vercel.app/",
      github: "https://github.com/Innocent-Alive/Roll-Rush",
    },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const pinDistance = sectionRef.current.offsetWidth * (projects.length / 2);
      
      gsap.to(sectionRef.current, {
        x: () => -(sectionRef.current.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${sectionRef.current.scrollWidth - window.innerWidth}`,
          invalidateOnRefresh: true,
        },
      });

      gsap.from(".projects-title", {
        scrollTrigger: {
          trigger: ".projects-title",
          start: "top 85%",
        },
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    }, triggerRef);

    return () => ctx.revert();
  }, [projects.length]);

  return (
    <div ref={triggerRef} className="overflow-hidden bg-background">
      <section
        id="projects"
        className="py-20 min-h-screen border-b-4 border-primary bg-news-dots flex flex-col justify-center relative"
      >
        <div className="container mx-auto px-4 mb-12">
          {/* Page Header */}
          <div className="flex justify-between items-end border-b-2 border-primary pb-4 projects-title">
            <h2 className="headline-serif text-4xl md:text-6xl font-black uppercase tracking-tighter text-primary">Latest Insights</h2>
            <span className="uppercase-label text-muted-text hidden md:block underline font-black">ARCHIVES / {new Date().getFullYear()} EDITION</span>
          </div>
        </div>

        <div ref={sectionRef} className="flex gap-10 px-4 md:px-[5vw]">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group flex flex-col shrink-0 w-[85vw] md:w-[450px] border-b border-primary/10 pb-10"
            >
              {/* Project Image */}
              <div className="border-4 border-primary p-2 mb-6 bg-white overflow-hidden shadow-[6px_6px_0px_0px_rgba(17,17,17,1)] group-hover:shadow-[10px_10px_0px_0px_rgba(204,0,0,1)] transition-all duration-300">
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full aspect-video object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
              
              {/* Metadata */}
              <div className="flex justify-between mono-data text-[0.65rem] font-black uppercase mb-4 text-muted-text tracking-widest">
                <span className="border-b border-accent">BY ABHAY KUMAR DAS</span>
                <span className="bg-primary text-background px-2">2024-01-15</span>
              </div>
              
              {/* Title */}
              <h3 className="headline-serif text-2xl md:text-3xl font-black mb-4 uppercase group-hover:text-accent transition-colors leading-[0.9] text-primary">
                {project.title}
              </h3>
              
              {/* Description */}
              <p className="text-primary font-bold leading-tight mb-6 text-justify line-clamp-4 text-sm opacity-90 italic border-l-2 border-primary pl-4">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                {project.tech.map((t, i) => (
                  <span key={i} className="uppercase-label text-[0.55rem] font-black border-2 border-primary px-3 py-1 bg-neutral-100 group-hover:bg-accent group-hover:text-background group-hover:border-accent transition-colors duration-300">
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-6 border-t-2 border-primary pt-6">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="uppercase-label text-xs font-black flex items-center gap-2 group-hover:text-accent transition-colors"
                >
                  <FiExternalLink className="w-4 h-4" /> 
                  <span>Visit Site</span>
                </a>
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="uppercase-label text-xs font-black flex items-center gap-2 group-hover:text-accent transition-colors border-l-2 border-primary pl-6"
                  >
                    <FiGithub className="w-4 h-4" />
                    <span>Github</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Breaking News Ticker (Optional but cool) */}
        <div className="mt-24 border-y-4 border-primary bg-primary py-3 overflow-hidden whitespace-nowrap">
          <div className="flex animate-marquee">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex items-center gap-20 mx-10">
                <span className="text-background uppercase-label text-xs font-black tracking-[0.2em]">
                  NEW PROJECT LAUNCHED: ECOSTORE WEB APP - FULL STACK PERFORMANCE AT SCALE
                </span>
                <span className="text-accent text-xl">★</span>
                <span className="text-background uppercase-label text-xs font-black tracking-[0.2em]">
                  SIZZLE INDIA: FRONTEND MASTERPIECE - GSAP ANIMATION INTEGRITY VERIFIED
                </span>
                <span className="text-accent text-xl">★</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
