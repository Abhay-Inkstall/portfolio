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
      gsap.from(".skills-title", {
        scrollTrigger: {
          trigger: ".skills-title",
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".skill-card", {
        scrollTrigger: {
          trigger: ".skills-grid",
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={containerRef} className="py-20 overflow-hidden relative">
      {/* Dot Pattern Background */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#000000 1.5px, transparent 1.5px)",
          backgroundSize: "24px 24px"
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="skills-title text-center mb-16">
          <h2 className="text-4xl font-header text-primary flex items-center gap-4 justify-center mb-4">
            <FiCode className="w-10 h-10 text-primary" />
            <span className="hidden sm:inline">Technical</span> Skills
          </h2>
          <p className="text-text max-w-2xl mx-auto">
            A comprehensive set of technical skills and expertise
          </p>
        </div>

        <div className="skills-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="skill-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <category.icon className="w-6 h-6 text-primary mr-3" />
                  <h3 className="text-xl font-semibold text-primary">
                    {category.title}
                  </h3>
                </div>
              </div>

              <div className="space-y-2">
                {category.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm mx-0.5 my-1"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
