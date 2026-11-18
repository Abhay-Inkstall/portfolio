import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const containerRef = useRef(null);

  const experiences = [
    {
      id: 1,
      company: "Inkstall Edutech Pvt. Ltd.",
      position: "Software Developer",
      duration: "2025 - Present",
      location: "Goregaon West, Mumbai, India",
      description:
        "Lead developer in building scalable web applications using React and Node.js. Mentored junior developers and implemented CI/CD pipelines.",
      highlights: [
        "Developed a real-time analytics dashboard with React and Chart.js",
        "Implemented microservices architecture using Docker and Kubernetes",
        "Optimized application performance by 40% through code optimization and caching strategies",
      ],
    },
    {
      id: 2,
      company: "Shree Kalam Academy",
      position: "Full Stack Developer Intern",
      duration: "2024 - 2025",
      location: "Kandivali West, Mumbai, India",
      description:
        "Worked on developing and maintaining web applications using modern JavaScript frameworks.",
      highlights: [
        "Built a responsive e-commerce platform using React and Redux",
        "Implemented RESTful APIs with Node.js and Express",
        "Created automated testing suites using Jest and Cypress",
      ],
    },
    {
      id: 3,
      company: "Independent Tech Consultant",
      position: "Full Stack & Web Developer",
      duration: "2023 - 2024",
      location: "Mumbai, India",
      description:
        "Engineered performant full-stack client applications, database backends, and responsive UI systems for digital brands.",
      highlights: [
        "Architected modern responsive portals with React, Tailwind CSS, and Node.js",
        "Designed scalable relational and NoSQL database schemas with PostgreSQL and MongoDB",
        "Streamlined build pipelines and automated deployment workflows",
      ],
    },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.fromTo(
        ".experience-title",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
            refreshPriority: 8,
          },
        }
      );

      // Left Column sticky entrance
      gsap.fromTo(
        ".experience-summary",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
            refreshPriority: 8,
          },
        }
      );

      // Each career on the right side reveals one by one as the user scrolls down
      const cards = containerRef.current.querySelectorAll(".experience-card");
      cards.forEach((card, idx) => {
        gsap.fromTo(
          card,
          {
            y: 50,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 78%",
              toggleActions: "play none none none",
              refreshPriority: 8,
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="experience" 
      ref={containerRef} 
      className="py-16 md:py-24 bg-background border-b-4 border-primary bg-news-dots relative"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex justify-between items-end border-b-2 border-primary pb-4 mb-12 experience-title">
          <div className="flex items-center gap-3">
            <h2 className="headline-serif text-4xl md:text-6xl font-black uppercase tracking-tighter text-primary">
              Dispatch: Career
            </h2>
            <span className="hidden sm:inline-block px-2.5 py-0.5 bg-accent text-background uppercase-label text-[0.6rem] font-black">
              3 DISPATCHES
            </span>
          </div>
          <span className="uppercase-label text-muted-text hidden md:block">
            Professional Timeline // Vol {new Date().getFullYear() % 100}.0
          </span>
        </div>

        {/* 2-Column Layout: Left Side Fixed / Sticky, Right Side Career Cards One by One */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* ========================================================================= */}
          {/* LEFT COLUMN: Fixed / Sticky on Desktop as user scrolls through careers   */}
          {/* ========================================================================= */}
          <div className="experience-summary lg:col-span-5 lg:sticky lg:top-24 lg:self-start flex flex-col gap-6 lg:pr-8 border-b-4 lg:border-b-0 lg:border-r-4 border-primary pb-8 lg:pb-4">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 bg-accent animate-pulse" />
                <span className="uppercase-label text-xs font-black tracking-widest text-accent">
                  EDITORIAL DOSSIER
                </span>
              </div>
              <h3 className="uppercase-label text-xl font-black text-primary tracking-widest">
                Executive Summary
              </h3>
            </div>

            <p className="text-xl leading-relaxed text-primary font-bold italic border-l-4 border-accent pl-5">
              "A documented history of building scalable solutions, leading development cycles, and driving technical excellence across enterprise and startup structures."
            </p>

            {/* Key Performance Indicators Box */}
            <div className="bg-neutral-100 p-6 md:p-8 border-4 border-primary shadow-[8px_8px_0px_0px_rgba(17,17,17,1)] mt-2">
              <span className="uppercase-label text-xs block mb-5 font-black tracking-tighter border-b-2 border-primary pb-2 flex justify-between items-center">
                <span>Key Performance Indicators</span>
                <span className="text-accent font-black">ACTIVE</span>
              </span>
              <ul className="space-y-4 mono-data text-xs font-black text-primary">
                <li className="flex justify-between border-b border-primary/20 pb-2">
                  <span>UPTIME S.L.A:</span> 
                  <span className="text-accent font-black">99.9%</span>
                </li>
                <li className="flex justify-between border-b border-primary/20 pb-2">
                  <span>DEV VELOCITY:</span> 
                  <span>HIGH SPEED</span>
                </li>
                <li className="flex justify-between border-b border-primary/20 pb-2">
                  <span>PERF OPTIMIZATION:</span> 
                  <span className="text-accent font-black">+40% GAIN</span>
                </li>
                <li className="flex justify-between border-b border-primary/20 pb-2">
                  <span>TOTAL DISPATCHES:</span> 
                  <span>03 RECORDS</span>
                </li>
                <li className="flex justify-between pt-1">
                  <span>STATUS:</span> 
                  <span className="bg-primary text-background px-2 py-0.5 text-[0.6rem]">READY TO DEPLOY</span>
                </li>
              </ul>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* RIGHT COLUMN: 3 Careers Showing One by One on Scroll                      */}
          {/* ========================================================================= */}
          <div className="lg:col-span-7 flex flex-col gap-16 lg:gap-24 lg:pl-6">
            {experiences.map((exp, idx) => (
              <div 
                key={exp.id} 
                className="experience-card group relative bg-white border-4 border-primary p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(17,17,17,1)] transition-transform duration-300 hover:shadow-[10px_10px_0px_0px_rgba(204,0,0,1)]"
              >
                {/* Header Tag Bar */}
                <div className="flex justify-between items-center border-b-2 border-primary pb-3 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent scale-75 rotate-45" />
                    <span className="mono-data text-xs font-black text-accent uppercase tracking-wider">
                      DISPATCH // 0{exp.id}
                    </span>
                  </div>
                  <span className="mono-data text-xs font-black border-2 border-primary px-3 py-1 bg-neutral-100 group-hover:bg-accent group-hover:text-background group-hover:border-accent transition-colors duration-300">
                    {exp.duration}
                  </span>
                </div>

                {/* Role and Organization */}
                <div className="mb-6">
                  <h3 className="headline-serif text-3xl md:text-4xl font-black text-primary uppercase group-hover:text-accent transition-colors duration-300 leading-tight mb-2">
                    {exp.position}
                  </h3>
                  <p className="uppercase-label text-sm font-black text-muted-text flex items-center gap-2">
                    <span className="text-primary font-black">{exp.company}</span>
                    <span className="w-1.5 h-1.5 bg-primary/30 rounded-full" />
                    <span>{exp.location.toUpperCase()}</span>
                  </p>
                </div>
                
                {/* Description & Impact Highlights */}
                <div className="border-l-4 border-primary pl-6 mt-4">
                  <p className="text-base md:text-lg text-primary font-bold mb-6 leading-relaxed text-justify">
                    {exp.description}
                  </p>
                  
                  <div className="border-t border-primary/20 pt-4">
                    <span className="uppercase-label text-[0.62rem] font-black text-muted-text block mb-3 tracking-widest">
                      KEY DELIVERABLES & IMPACT:
                    </span>
                    <ul className="space-y-3">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-accent mt-1.5 flex-shrink-0" />
                          <span className="text-primary font-bold text-xs md:text-sm leading-snug">
                            {highlight}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Bottom Strip */}
                <div className="mt-6 pt-3 border-t-2 border-primary flex justify-between items-center text-[0.6rem] mono-data font-bold text-muted-text">
                  <span>LOGGED IN ARCHIVES</span>
                  <span className="text-primary font-black uppercase">CONFIRMED RECORD // 2026</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
