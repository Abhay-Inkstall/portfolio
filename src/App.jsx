import { useState, useEffect } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import EditorialProcess from "./components/EditorialProcess";
import FAQ from "./components/FAQ";

function App() {
  const [loading, setLoading] = useState(true);

  const [isSepia, setIsSepia] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isSepia) {
      document.documentElement.classList.add("sepia-mode");
    } else {
      document.documentElement.classList.remove("sepia-mode");
    }
  }, [isSepia]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-background font-body transition-colors duration-700">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <EditorialProcess />
      <FAQ />
      <Contact />
      <Footer isSepia={isSepia} setIsSepia={setIsSepia} />
    </div>
  );
}

export default App;
