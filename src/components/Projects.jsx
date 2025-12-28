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
      className="py-20 bg-background overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="projects-title text-center mb-16">
          <h2 className="text-4xl font-header text-primary flex items-center justify-center mb-4 gap-4">
            <MdOutlineWorkspaces className="w-10 h-10 text-primary" />
            <span className="hidden sm:inline">My</span> Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Recent work showcasing my technical expertise
          </p>
        </div>

        {/* Carousel Wrapper */}
        <div className="carousel-container relative">
          {/* Slider Viewport */}
          <div className="overflow-hidden rounded-xl py-4">
            <div
              ref={sliderRef}
              className="flex"
              style={{
                width: `${(projects.length / itemsPerPage) * 100}%`,
              }}
            >
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="px-4"
                  style={{ width: `${100 / projects.length}%` }}
                >
                  <div className="group relative bg-white border-2 border-primary/5 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl h-full flex flex-col">
                    {/* Image */}
                    <div className="relative aspect-video overflow-hidden border-b-2 border-primary/5">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105 saturate-0 group-hover:saturate-100"
                      />
                      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/0 transition-colors duration-300" />
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-2xl text-primary mb-3 font-header">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-6 line-clamp-3">
                        {project.description}
                      </p>

                      <div className="mt-auto">
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tech.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 text-sm font-medium border border-primary/20 text-primary rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="flex gap-4">
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 inline-flex justify-center items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-secondary transition-colors duration-300 font-medium"
                          >
                            <FiExternalLink /> Live Demo
                          </a>
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex justify-center items-center gap-2 px-4 py-2 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-300 font-medium"
                            >
                              <FiGithub />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          {projects.length > itemsPerPage && (
            <div className="flex justify-center items-center gap-6 mt-10">
              <button
                onClick={prevSlide}
                disabled={isPrevDisabled}
                className={`p-3 rounded-full border-2 transition-all duration-300 ${
                  isPrevDisabled
                    ? "border-gray-200 text-gray-300 cursor-not-allowed"
                    : "border-primary text-primary hover:bg-primary hover:text-white"
                }`}
                aria-label="Previous Project"
              >
                <FiChevronLeft className="w-6 h-6" />
              </button>
              
              {/* Dots */}
              <div className="flex gap-2">
                {[...Array(projects.length - itemsPerPage + 1)].map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === currentIndex
                        ? "w-8 bg-primary"
                        : "w-2 bg-primary/20 hover:bg-primary/40"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                disabled={isNextDisabled}
                className={`p-3 rounded-full border-2 transition-all duration-300 ${
                  isNextDisabled
                    ? "border-gray-200 text-gray-300 cursor-not-allowed"
                    : "border-primary text-primary hover:bg-primary hover:text-white"
                }`}
                aria-label="Next Project"
              >
                <FiChevronRight className="w-6 h-6" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
