import { useLayoutEffect, useRef } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { FiBriefcase } from "react-icons/fi";
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
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Title Animation
      gsap.fromTo(
        ".experience-title",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".experience-title",
            start: "top 85%",
          },
        }
      );

      // Cards Animation
      gsap.fromTo(
        ".experience-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".experience-container",
            start: "top 80%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={containerRef} className="py-20 bg-background border-b-4 border-primary bg-news-dots">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex justify-between items-end border-b-2 border-primary pb-4 mb-12 experience-title">
          <h2 className="headline-serif text-4xl md:text-6xl font-black uppercase tracking-tighter text-primary">Dispatch: Career</h2>
          <span className="uppercase-label text-muted-text hidden md:block">Professional Timeline / Vol {new Date().getFullYear() % 100}.0</span>
        </div>

        <div className="experience-container grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column - General Summary */}
          <div className="lg:col-span-4 lg:border-r-4 lg:border-primary lg:pr-10">
            <h3 className="uppercase-label text-lg font-black mb-8 text-primary tracking-widest whitespace-nowrap overflow-hidden text-ellipsis">Executive Summary</h3>
            <p className="text-xl leading-relaxed text-primary font-bold italic mb-10 border-l-4 border-accent pl-6">
              "A documented history of building scalable solutions and driving technical excellence across diverse organizational structures."
            </p>
            <div className="bg-neutral-100 p-8 border-4 border-primary shadow-[8px_8px_0px_0px_rgba(17,17,17,1)]">
              <span className="uppercase-label text-xs block mb-6 font-black tracking-tighter border-b border-primary pb-2">Key Performance Indicators</span>
              <ul className="space-y-5 mono-data text-xs font-black text-primary">
                <li className="flex justify-between border-b border-primary/20 pb-2"><span>UPTIME S.L.A:</span> <span>99.9%</span></li>
                <li className="flex justify-between border-b border-primary/20 pb-2"><span>DEV VELOCITY:</span> <span>HIGH</span></li>
                <li className="flex justify-between border-b border-primary/20 pb-2"><span>OPTIMIZATION:</span> <span>+40%</span></li>
                <li className="flex justify-between border-b border-primary/20 pb-2"><span>MENTORSHIP:</span> <span>ACTIVE</span></li>
              </ul>
            </div>
          </div>

          {/* Right Column - Detailed Log */}
          <div className="lg:col-span-8 flex flex-col gap-20">
            {experiences.map((exp, idx) => (
              <div key={exp.id} className="experience-card group relative">
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 gap-4">
                  <div className="flex-grow">
                    <h3 className="headline-serif text-3xl font-black text-primary uppercase group-hover:text-accent transition-colors duration-300 leading-none mb-2">
                      {exp.position}
                    </h3>
                    <p className="uppercase-label text-sm font-black text-muted-text flex items-center gap-2">
                      <span className="text-primary">{exp.company}</span>
                      <span className="w-1.5 h-1.5 bg-primary/20 rounded-full"></span>
                      <span>{exp.location.split(',')[0].toUpperCase()}</span>
                    </p>
                  </div>
                  <span className="mono-data text-xs font-black border-2 border-primary px-4 py-2 bg-background self-start md:self-auto whitespace-nowrap shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] group-hover:bg-accent group-hover:text-background transition-all duration-300">
                    {exp.duration}
                  </span>
                </div>
                
                <div className="border-l-4 border-primary pl-8 mt-4">
                  <p className="text-lg text-primary font-bold mb-8 leading-snug text-justify">
                    {exp.description}
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <span className="w-2.5 h-2.5 bg-accent mt-1 flex-shrink-0"></span>
                        <span className="text-primary font-black text-[0.7rem] leading-tight uppercase tracking-tight">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Horizontal Divider between entries */}
                {idx !== experiences.length - 1 && (
                  <div className="mt-20 w-full border-t-2 border-primary border-dashed"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
