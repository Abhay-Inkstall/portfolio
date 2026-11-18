import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const containerRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);

  const experiences = [
    {
      id: 1,
      company: "Inkstall Edutech Pvt. Ltd.",
      position: "Software Developer",
      duration: "2025 - Present",
      location: "Goregaon West",
      description:
        "Lead developer in building scalable web applications using React and Node.js. Mentored junior developers and implemented CI/CD pipelines.",
      highlights: [
        "DEVELOPED A REAL-TIME ANALYTICS DASHBOARD WITH REACT AND CHART.JS",
        "IMPLEMENTED MICROSERVICES ARCHITECTURE USING DOCKER AND KUBERNETES",
        "OPTIMIZED APPLICATION PERFORMANCE BY 40% THROUGH CODE OPTIMIZATION AND CACHING STRATEGIES",
      ],
    },
    {
      id: 2,
      company: "Shree Kalam Academy",
      position: "Full Stack Developer Intern",
      duration: "2024 - 2025",
      location: "Kandivali West",
      description:
        "Worked on developing and maintaining web applications using modern JavaScript frameworks.",
      highlights: [
        "BUILT A RESPONSIVE E-COMMERCE PLATFORM USING REACT AND REDUX",
        "IMPLEMENTED RESTFUL APIS WITH NODE.JS AND EXPRESS",
        "CREATED AUTOMATED TESTING SUITES USING JEST AND CYPRESS",
      ],
    },
    {
      id: 3,
      company: "Independent Tech Consultant",
      position: "Full Stack & Web Developer",
      duration: "2023 - 2024",
      location: "Mumbai",
      description:
        "Engineered performant full-stack client applications, database backends, and responsive UI systems for digital brands.",
      highlights: [
        "ARCHITECTED MODERN RESPONSIVE PORTALS WITH REACT, TAILWIND CSS, AND NODE.JS",
        "DESIGNED SCALABLE RELATIONAL AND NOSQL DATABASE SCHEMAS WITH POSTGRESQL AND MONGODB",
        "STREAMLINED BUILD PIPELINES AND AUTOMATED DEPLOYMENT WORKFLOWS",
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

      const mm = gsap.matchMedia();

      // DESKTOP (>= 1024px): Pin the Left Column while Right Side Careers scroll one by one!
      mm.add("(min-width: 1024px)", () => {
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top 80px", // Locks right below the fixed navbar
          end: () => {
            if (!rightColRef.current || !leftColRef.current) return "+=1000";
            const rightHeight = rightColRef.current.offsetHeight;
            const leftHeight = leftColRef.current.offsetHeight;
            return `+=${Math.max(0, rightHeight - leftHeight)}`;
          },
          pin: leftColRef.current,
          pinSpacing: false,
          anticipatePin: 1,
          refreshPriority: 8,
          invalidateOnRefresh: true,
        });

        // Right side career entries reveal one by one on scroll
        const entries = gsap.utils.toArray(".career-entry");
        entries.forEach((entry, idx) => {
          gsap.fromTo(
            entry,
            {
              y: 45,
              opacity: idx === 0 ? 1 : 0.35,
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.7,
              ease: "power2.out",
              scrollTrigger: {
                trigger: entry,
                start: "top 80%",
                toggleActions: "play none none none",
                refreshPriority: 8,
              },
            }
          );
        });
      });

      // MOBILE (< 1024px): Standard clean scroll reveal
      mm.add("(max-width: 1023px)", () => {
        const entries = gsap.utils.toArray(".career-entry");
        entries.forEach((entry) => {
          gsap.fromTo(
            entry,
            { y: 35, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.7,
              ease: "power2.out",
              scrollTrigger: {
                trigger: entry,
                start: "top 85%",
                toggleActions: "play none none none",
                refreshPriority: 8,
              },
            }
          );
        });
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
        {/* Section Header - Exact replica of original design */}
        <div className="flex justify-between items-end border-b-2 border-primary pb-4 mb-12 experience-title">
          <h2 className="headline-serif text-4xl md:text-6xl font-black uppercase tracking-tighter text-primary">
            DISPATCH: CAREER
          </h2>
          <span className="uppercase-label text-muted-text hidden md:block text-xs md:text-sm font-bold tracking-widest">
            PROFESSIONAL TIMELINE / VOL 26.0
          </span>
        </div>

        {/* 2-Column Split: Left Side Fixed, Right Side Scrolling Careers */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* ========================================================================= */}
          {/* LEFT COLUMN: Fixed / Pinned on Desktop as user scrolls through careers   */}
          {/* ========================================================================= */}
          <div 
            ref={leftColRef}
            className="lg:col-span-4 lg:border-r-4 lg:border-primary lg:pr-10 lg:sticky lg:top-24 lg:self-start will-change-transform"
          >
            <h3 className="uppercase-label text-sm font-black mb-6 text-primary tracking-widest whitespace-nowrap overflow-hidden text-ellipsis">
              EXECUTIVE SUMMARY
            </h3>
            
            <p className="text-xl md:text-2xl leading-relaxed text-primary font-bold italic mb-10 border-l-4 border-accent pl-6">
              "A documented history of building scalable solutions and driving technical excellence across diverse organizational structures."
            </p>

            {/* Key Performance Indicators Box */}
            <div className="bg-neutral-100 p-8 border-4 border-primary shadow-[8px_8px_0px_0px_rgba(17,17,17,1)]">
              <span className="uppercase-label text-xs block mb-6 font-black tracking-tighter border-b border-primary pb-2">
                KEY PERFORMANCE INDICATORS
              </span>
              <ul className="space-y-5 mono-data text-xs font-black text-primary">
                <li className="flex justify-between border-b border-primary/20 pb-2">
                  <span>UPTIME S.L.A:</span> 
                  <span>99.9%</span>
                </li>
                <li className="flex justify-between border-b border-primary/20 pb-2">
                  <span>DEV VELOCITY:</span> 
                  <span>HIGH</span>
                </li>
                <li className="flex justify-between border-b border-primary/20 pb-2">
                  <span>OPTIMIZATION:</span> 
                  <span>+40%</span>
                </li>
                <li className="flex justify-between border-b border-primary/20 pb-2">
                  <span>MENTORSHIP:</span> 
                  <span>ACTIVE</span>
                </li>
              </ul>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* RIGHT COLUMN: 3 Careers Showing One by One on Scroll                      */}
          {/* ========================================================================= */}
          <div 
            ref={rightColRef}
            className="lg:col-span-8 flex flex-col gap-12 lg:gap-16"
          >
            {experiences.map((exp, idx) => (
              <div key={exp.id} className="career-entry group relative">
                {/* Header: Title and Duration Chip */}
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-2 gap-4">
                  <div className="flex-grow">
                    <h3 className="headline-serif text-3xl md:text-4xl lg:text-5xl font-black text-primary uppercase group-hover:text-accent transition-colors duration-300 leading-none mb-2">
                      {exp.position}
                    </h3>
                    <p className="uppercase-label text-xs md:text-sm font-black text-muted-text flex items-center gap-2">
                      <span className="text-primary">{exp.company.toUpperCase()}</span>
                      <span className="w-1.5 h-1.5 bg-primary/20 rounded-full" />
                      <span>{exp.location.toUpperCase()}</span>
                    </p>
                  </div>
                  <span className="mono-data text-xs font-black border-2 border-primary px-4 py-2 bg-background self-start md:self-auto whitespace-nowrap shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] group-hover:bg-accent group-hover:text-background transition-all duration-300">
                    {exp.duration}
                  </span>
                </div>
                
                {/* Description & Impact Deliverables */}
                <div className="border-l-4 border-primary pl-8 mt-5">
                  <p className="text-lg md:text-xl text-primary font-bold mb-8 leading-snug text-justify">
                    {exp.description}
                  </p>
                  
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <span className="w-2.5 h-2.5 bg-accent mt-1 flex-shrink-0" />
                        <span className="text-primary font-black text-[0.7rem] leading-tight uppercase tracking-tight">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Dashed Horizontal Divider between entries */}
                {idx !== experiences.length - 1 && (
                  <div className="mt-14 md:mt-20 w-full border-t-2 border-primary border-dashed" />
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
