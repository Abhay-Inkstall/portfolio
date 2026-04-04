import { useState, useLayoutEffect, useRef, useEffect } from "react";
import { MdOutlineWorkspaces } from "react-icons/md";
import { FiChevronLeft, FiChevronRight, FiGithub, FiExternalLink } from "react-icons/fi";
import project1 from "../assets/ecostore.png";
import project2 from "../assets/microsoft.png";
import project3 from "../assets/calculator.png";
import project4 from "../assets/sizzleindia.png";
import project5 from "../assets/rollrush.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const containerRef = useRef(null);
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  const projects = [
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
      title: "Sizzle Website",
      description:
        "A food website built with React, Tailwind, and GSAP, featuring a responsive design.",
      tech: ["React", "Tailwind", "GSAP"],
      image: project4,
      link: "https://sizzleindia.vercel.app/",
      github: "https://github.com/Innocent-Alive/Sizzle",
    },
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
      title: "Android Calculator",
      description:
        "A calculator application built with Java and XML in Android Studio with basic operations functionality.",
      tech: ["Java", "Android", "XML"],
      image: project3,
      link: "https://github.com/Innocent-Alive/Android_Calculator",
      github: "https://github.com/Innocent-Alive/Android_Calculator",
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

  // Responsive itemsPerPage
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(3);
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Update currentIndex if out of bounds after resize
  useEffect(() => {
    const maxIndex = Math.max(0, projects.length - itemsPerPage);
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [itemsPerPage, projects.length, currentIndex]);

  const nextSlide = () => {
    const maxIndex = projects.length - itemsPerPage;
    if (currentIndex < maxIndex) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  // GSAP Animation for Slider
  useEffect(() => {
    if (sliderRef.current) {
      gsap.to(sliderRef.current, {
        xPercent: -(currentIndex * (100 / projects.length)),
        duration: 0.6,
        ease: "power3.out",
      });
    }
  }, [currentIndex, itemsPerPage, projects.length]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
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

      gsap.from(".carousel-container", {
        scrollTrigger: {
          trigger: ".carousel-container",
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex >= projects.length - itemsPerPage;

  return (
    <section
      id="projects"
      ref={containerRef}
      className="py-20 bg-background border-b-4 border-primary bg-news-dots"
    >
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="flex justify-between items-end border-b-2 border-primary pb-4 mb-12 projects-title">
          <h2 className="headline-serif text-4xl md:text-6xl font-black uppercase tracking-tighter text-primary">Latest Insights</h2>
          <span className="uppercase-label text-muted-text hidden md:block underline font-black">ARCHIVES / {new Date().getFullYear()} EDITION</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
          {projects.map((project, index) => (
            <div key={index} className="group flex flex-col h-full border-b border-primary/10 pb-10 last:border-b-0 md:last:border-b">
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
              <p className="text-primary font-bold leading-tight mb-8 text-justify line-clamp-4 text-sm opacity-90 italic border-l-2 border-primary pl-4">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-8 mt-auto">
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
  );
};

export default Projects;
