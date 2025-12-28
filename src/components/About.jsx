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
      className="py-20 bg-background overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="about-title text-center mb-16">
          <h2 className="text-4xl font-header text-primary flex items-center justify-center mb-4 gap-4">
            <FiUser className="w-10 h-10 text-primary" /> About Me
          </h2>
          <p className="text-text max-w-2xl mx-auto">Get to know me better</p>
        </div>

        {/* Profile Section */}
        <div className="about-intro grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Profile Image */}
          <div className="about-image relative h-[500px] w-full">
            <div className="absolute inset-0 bg-gradient-to-r from-background/10 to-background/5 rounded-xl overflow-hidden">
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover saturate-0 hover:saturate-100 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
            </div>
          </div>

          {/* Profile Content */}
          <div className="about-text-content space-y-6">
            <h3 className="text-3xl font-medium font-header text-primary mb-6">
              Abhay Kumar Das
            </h3>
            <p className="text-xl text-text mb-8">
              Full Stack Developer & Android Developer
            </p>

            {/* Contact Info */}
            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <FiMapPin className="w-5 h-5 text-primary" />
                <span className="text-text">Mumbai, India</span>
              </div>
              <div className="flex items-center gap-4">
                <FiMail className="w-5 h-5 text-primary" />
                <span className="text-text">abhay744das@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <FiPhone className="w-5 h-5 text-primary" />
                <span className="text-text">+91 8169805273</span>
              </div>
            </div>

            {/* Bio */}
            <div className="space-y-6">
              <p className="text-text">
                I am a passionate Full Stack Developer with a keen interest in
                creating innovative web applications. With over 5 years of
                experience in the tech industry, I specialize in building scalable
                and maintainable applications using modern technologies.
              </p>

              {/* View Resume Button */}
              <a
                href="/Abhay_Kumar_Das_Resume.pdf"
                download="Abhay_Kumar_Das_Resume.pdf"
                className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-secondary transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
              >
                <FiDownload className="mr-2" />
                Checkout My Resume
              </a>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="mt-10 space-y-8">
          <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Web Development */}
            <div className="service-card bg-white/5 md:p-6 p-2 rounded-xl hover:shadow-lg transition-shadow duration-300 border border-white/5 hover:border-primary/20 hover:-translate-y-2 transform transition-transform">
              <div className="bg-primary/10 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                <FiGlobe className="text-primary text-xl" />
              </div>
              <h4 className="text-xl font-semibold text-primary mb-4">
                Web Development
              </h4>
              <ul className="space-y-3 text-text">
                <li className="flex items-start">
                  <FiCheck className="text-secondary mt-1 mr-2 flex-shrink-0" />
                  <span>Full-stack web applications with modern frameworks</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-secondary mt-1 mr-2 flex-shrink-0" />
                  <span>Progressive Web Apps (PWAs) & Responsive Design</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-secondary mt-1 mr-2 flex-shrink-0" />
                  <span>Server-side rendering & SEO optimization</span>
                </li>
              </ul>
            </div>

            {/* Mobile Development */}
            <div className="service-card bg-white/5 md:p-6 p-2 rounded-xl hover:shadow-lg transition-shadow duration-300 border border-white/5 hover:border-primary/20 hover:-translate-y-2 transform transition-transform">
              <div className="bg-primary/10 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                <FiSmartphone className="text-primary text-xl" />
              </div>
              <h4 className="text-xl font-semibold text-primary mb-4">
                Mobile Development
              </h4>
              <ul className="space-y-3 text-text">
                <li className="flex items-start">
                  <FiCheck className="text-secondary mt-1 mr-2 flex-shrink-0" />
                  <span>Cross-platform apps with React Native</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-secondary mt-1 mr-2 flex-shrink-0" />
                  <span>Native Android development with Kotlin</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-secondary mt-1 mr-2 flex-shrink-0" />
                  <span>Mobile UI/UX design & optimization</span>
                </li>
              </ul>
            </div>

            {/* Backend Development */}
            <div className="service-card bg-white/5 md:p-6 p-2 rounded-xl hover:shadow-lg transition-shadow duration-300 border border-white/5 hover:border-primary/20 hover:-translate-y-2 transform transition-transform">
              <div className="bg-primary/10 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                <FiServer className="text-primary text-xl" />
              </div>
              <h4 className="text-xl font-semibold text-primary mb-4">
                Backend Development
              </h4>
              <ul className="space-y-3 text-text">
                <li className="flex items-start">
                  <FiCheck className="text-secondary mt-1 mr-2 flex-shrink-0" />
                  <span>RESTful & GraphQL API development</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-secondary mt-1 mr-2 flex-shrink-0" />
                  <span>Microservices architecture & Serverless</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-secondary mt-1 mr-2 flex-shrink-0" />
                  <span>Authentication & Authorization systems</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
