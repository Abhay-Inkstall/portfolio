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
    <section id="experience" ref={containerRef} className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="experience-title text-center mb-16">
          <h2 className="text-4xl font-header text-primary flex items-center justify-center gap-4 mb-4">
            <FiBriefcase className="w-10 h-10 text-primary" />{" "}
            <span className="hidden sm:inline">Work</span> Experience
          </h2>
          <p className="text-text max-w-2xl mx-auto">
            A journey of growth and learning through various roles and
            responsibilities
          </p>
        </div>

        <div className="experience-container space-y-12">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="experience-card bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100  border-primary/20 group hover:-translate-y-1"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-2">
                <div>
                  <h3 className="text-2xl font-header text-gray-900 group-hover:text-primary transition-colors duration-300">
                    {exp.position}
                  </h3>
                  <p className="text-lg text-gray-600 font-medium mt-1">
                    {exp.company}
                  </p>
                </div>
                <span className="self-start md:self-center px-4 py-1.5 rounded-full bg-primary/5 text-primary text-sm font-medium border border-primary/10 whitespace-nowrap">
                  {exp.duration}
                </span>
              </div>

              <div className="text-gray-600 leading-relaxed max-w-4xl">
                <p className="mb-4 font-medium text-gray-700">
                  {exp.description}
                </p>
                <div className="space-y-3">
                  {exp.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-start">
                      <div className="mt-1.5 mr-3 p-1 rounded-full bg-primary/10">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      </div>
                      <span className="text-gray-600">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
