import { useLayoutEffect, useRef } from "react";
import {
  FiCode,
  FiDatabase,
  FiGitBranch,
  FiLayout,
  FiServer,
} from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const containerRef = useRef(null);
  const skillCategories = [
    {
      id: 1,
      title: "Frontend Development",
      icon: FiLayout,
      skills: [
        "React.js",
        "React Native",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Bootstrap",
        "Material-UI",
        "Shadcn UI",
        "XML",
      ],
    },
    {
      id: 2,
      title: "Backend Development",
      icon: FiServer,
      skills: ["Node.js", "Express.js", "Java", "Spring Boot", "JavaScript", "TypeScript", "PHP", "Python", "FastAPI",],
    },
    {
      id: 3,
      title: "Tools & Technologies",
      icon: FiCode,
      skills: [
        "Visual Studio Code",
        "Eclipse",
        "Windsurf IDE",
        "Spring Tool Suite",
        "IntelliJ IDEA",
        "PyCharm",
        "Android Studio",
      ],
    },
    {
      id: 4,
      title: "Version Control",
      icon: FiGitBranch,
      skills: ["Git", "GitHub", "GitLab", "Bitbucket"],
    },
    {
      id: 5,
      title: "Databases",
      icon: FiDatabase,
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Oracle", "SQL Server"],
    },
    {
      id: 6,
      title: "Cloud & APIs",
      icon: FiCode,
      skills: ["Docker", "AWS", "RESTful APIs"],
    },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".skills-title",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".skills-title",
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        ".skill-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".skills-grid",
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={containerRef} className="py-20 bg-background border-b-4 border-primary relative overflow-hidden bg-news-dots">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="flex justify-between items-end border-b-2 border-primary pb-4 mb-12 skills-title">
          <h2 className="headline-serif text-4xl md:text-6xl font-black uppercase tracking-tighter text-primary">Technical Specs</h2>
          <span className="uppercase-label text-muted-text hidden md:block">Stack Inventory / Index {new Date().getFullYear() % 100}.0</span>
        </div>

        <div className="skills-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="skill-card border-4 border-primary bg-white shadow-[10px_10px_0px_0px_rgba(17,17,17,1)] flex flex-col group hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[14px_14px_0px_0px_rgba(17,17,17,1)] transition-all duration-300"
            >
              <div className="bg-primary text-background p-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <category.icon className="w-6 h-6 border-2 border-background p-0.5" />
                  <h3 className="uppercase-label text-sm font-black tracking-widest">{category.title.toUpperCase()}</h3>
                </div>
                <span className="mono-data text-[0.6rem] font-bold opacity-50 underline">REF: {category.id}A</span>
              </div>
              
              <div className="p-6 grid grid-cols-2 gap-3 bg-background/50">
                {category.skills.map((skill, index) => (
                  <div 
                    key={index} 
                    className="border-2 border-primary p-2 flex items-center gap-3 bg-white hover:bg-accent hover:text-background hover:border-accent transition-all duration-200"
                  >
                    <div className="w-2 h-2 bg-primary group-hover:bg-background scale-75 rotate-45 flex-shrink-0"></div>
                    <span className="mono-data text-[0.65rem] font-black uppercase overflow-hidden text-ellipsis whitespace-nowrap">{skill}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-auto border-t-2 border-primary p-3 bg-neutral-100 flex justify-between items-center px-6">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></span>
                  <span className="uppercase-label text-[0.55rem] font-black">SYSTEM_OPTIMIZED</span>
                </div>
                <span className="mono-data text-[0.55rem] font-black">COMPATIBILITY: 100%</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 right-[-5%] text-[10rem] font-black text-primary/5 select-none pointer-events-none uppercase-label rotate-12">
        STACK
      </div>
    </section>
  );
};

export default Skills;
