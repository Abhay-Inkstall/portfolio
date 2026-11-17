import { useState, useEffect, useLayoutEffect, useRef } from "react";
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
import logo from "./assets/logoBlack.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [isSepia, setIsSepia] = useState(() => {
    return localStorage.getItem("sepiaMode") === "true";
  });
  const [loading, setLoading] = useState(true);
  const [hasLanded, setHasLanded] = useState(false);
  const stageRef = useRef(null);
  const newspaperRef = useRef(null);
  const tvFrameRef = useRef(null);
  const indicatorRef = useRef(null);
  const hasThrownRef = useRef(false);
  const executeThrowRef = useRef(null);

  useEffect(() => {
    if (isSepia) {
      document.documentElement.classList.add("sepia-mode");
    } else {
      document.documentElement.classList.remove("sepia-mode");
    }
  }, []);

  useEffect(() => {
    if (isSepia) {
      document.documentElement.classList.add("sepia-mode");
    } else {
      document.documentElement.classList.remove("sepia-mode");
    }
    localStorage.setItem("sepiaMode", isSepia);
  }, [isSepia]);

  const handleLoaderComplete = () => {
    setLoading(false);
  };

  useLayoutEffect(() => {
    if (loading) return;

    const executeThrow = () => {
      if (hasThrownRef.current) return;
      hasThrownRef.current = true;

      const tl = gsap.timeline({
        onComplete: () => {
          setHasLanded(true);
          gsap.set(newspaperRef.current, { clearProps: "transform,filter,opacity" });
          if (tvFrameRef.current) {
            tvFrameRef.current.style.display = "none";
          }
          ScrollTrigger.refresh();
        },
      });

      // 1. TV gently recedes and fades out
      tl.to(
        tvFrameRef.current,
        {
          opacity: 0,
          scale: 0.8,
          duration: 0.4,
          ease: "power2.inOut",
        },
        0
      );

      // 2. Hide scroll indicator
      if (indicatorRef.current) {
        tl.to(indicatorRef.current, { opacity: 0, duration: 0.15 }, 0);
      }

      // 3. The 360° Rotating Throw Animation: spins forward out of the center and lands on screen!
      tl.fromTo(
        newspaperRef.current,
        {
          scale: 0.1,
          rotation: -720,
          rotateX: 26,
          rotateY: -20,
          y: 0,
          opacity: 0.2,
          filter: "blur(6px)",
          transformOrigin: "50% 40%",
        },
        {
          scale: 1,
          rotation: 0,
          rotateX: 0,
          rotateY: 0,
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.15,
          ease: "power4.out",
        },
        0
      )
      // 4. Physical paper slap bounce recoil
      .to(newspaperRef.current, {
        y: -8,
        scale: 1.015,
        duration: 0.12,
        ease: "power2.out",
      })
      .to(newspaperRef.current, {
        y: 0,
        scale: 1,
        duration: 0.22,
        ease: "bounce.out",
      });
    };

    executeThrowRef.current = executeThrow;

    // Trigger throw on very little scroll or wheel
    const onScrollOrWheel = () => {
      executeThrow();
    };

    window.addEventListener("wheel", onScrollOrWheel, { passive: true, once: true });
    window.addEventListener("touchmove", onScrollOrWheel, { passive: true, once: true });
    window.addEventListener("scroll", onScrollOrWheel, { passive: true, once: true });

    return () => {
      window.removeEventListener("wheel", onScrollOrWheel);
      window.removeEventListener("touchmove", onScrollOrWheel);
      window.removeEventListener("scroll", onScrollOrWheel);
    };
  }, [loading]);

  return (
    <div className="min-h-screen bg-background font-body transition-colors duration-700 overflow-x-hidden">
      {loading && <Loader onComplete={handleLoaderComplete} />}

      {/* Hero / Throw Stage */}
      <div 
        ref={stageRef}
        className="relative bg-background overflow-hidden min-h-screen w-full flex items-center justify-center bg-news-dots"
        style={{ perspective: "1200px" }}
      >
        {/* Simple & Clean Retro TV in the Dead Center */}
        <div 
          ref={tvFrameRef}
          className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none select-none px-4"
        >
          {/* Simple Top Handle */}
          <div className="w-14 h-3 border-2 border-b-0 border-primary bg-neutral-800 rounded-t-md mx-auto" />

          {/* Simple TV Cabinet */}
          <div className="bg-[#1c1c1c] p-3 sm:p-5 rounded-2xl border-4 border-primary shadow-[10px_10px_0px_0px_rgba(17,17,17,1)] flex gap-3 sm:gap-5 items-center">
            {/* TV Screen: Displays User's Logo and the Newspaper Headline inside */}
            <div className="w-[280px] sm:w-[440px] md:w-[540px] aspect-[16/10] rounded-xl border-2 border-neutral-700 bg-white relative overflow-hidden shadow-inner flex flex-col items-center justify-between p-4">
              
              {/* User Logo in place of channel logo */}
              <div className="w-full flex justify-between items-center border-b border-primary/20 pb-2">
                <img src={logo} alt="Logo" className="h-6 sm:h-7 w-auto grayscale contrast-125" />
                <span className="mono-data text-[0.55rem] font-black text-accent uppercase">
                  ● SPECIAL BROADCAST
                </span>
              </div>

              {/* Newspaper inside the center of the TV */}
              <div className="text-center my-auto px-2">
                <span className="uppercase-label text-accent font-black text-[0.55rem] block mb-1">
                  BREAKING NEWS
                </span>
                <h3 className="headline-serif text-lg sm:text-2xl font-black uppercase leading-tight text-primary">
                  Transforming The Way <br /> Your Ideas Work
                </h3>
                <p className="mono-data text-[0.5rem] font-bold text-muted-text mt-1 uppercase">
                  Abhay Kumar Das // Full-Stack
                </p>
              </div>

              {/* Bottom Screen Bar */}
              <div className="w-full border-t border-primary/20 pt-1.5 flex justify-between text-[0.5rem] mono-data font-bold text-muted-text">
                <span>EDITION 2026</span>
                <span className="text-primary font-black uppercase">SCROLL TO READ</span>
              </div>

              {/* Scanline CRT overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.12)_50%)] bg-[length:100%_4px] pointer-events-none z-20" />
              {/* Animated Moving Cathode Scan Beam */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
                <div className="absolute left-0 right-0 h-14 bg-gradient-to-b from-transparent via-black/10 via-primary/15 to-transparent animate-tv-scan border-b border-primary/20 pointer-events-none" />
              </div>
              {/* Glass Glare */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none z-20 rounded-xl" />
            </div>

            {/* Simple Control Strip */}
            <div className="flex flex-col justify-around h-[160px] sm:h-[240px] md:h-[300px] w-10 sm:w-12 border-l border-neutral-700 pl-2 sm:pl-3">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-primary bg-neutral-800 shadow flex items-center justify-center">
                <div className="w-1 h-2.5 bg-accent rounded-full -mt-1.5" />
              </div>
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 border-primary bg-neutral-800 shadow flex items-center justify-center">
                <div className="w-0.5 h-2 bg-neutral-300 rounded-full -mt-1" />
              </div>
              <div className="flex items-center gap-1 mt-auto">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="mono-data text-[0.45rem] font-bold text-neutral-400">ON</span>
              </div>
            </div>
          </div>

          {/* Simple Stand Legs */}
          <div className="flex justify-between w-44 sm:w-72 md:w-80 px-6">
            <div className="w-3 h-4 bg-primary -rotate-20 rounded-b shadow" />
            <div className="w-3 h-4 bg-primary rotate-20 rounded-b shadow" />
          </div>
        </div>

        {/* The Full Newspaper (Navbar + Hero): Throws out with the 360 turn animation! */}
        <div
          ref={newspaperRef}
          className="w-full origin-center will-change-transform z-30"
          style={{ 
            transformStyle: "preserve-3d", 
            opacity: hasLanded ? 1 : 0 
          }}
        >
          <Navbar />
          <Hero />
        </div>

        {/* Retro TV Remote Control */}
        {!loading && !hasLanded && (
          <div 
            ref={indicatorRef}
            className="absolute bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center select-none cursor-pointer"
            onClick={() => executeThrowRef.current?.()}
          >
            {/* Remote Body */}
            <div className="bg-[#181818] border-2 border-primary rounded-2xl p-2.5 sm:p-3 shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] flex flex-col items-center gap-2 w-64 sm:w-72 transition-transform hover:scale-[1.02]">
              
              {/* IR Emitter / Header */}
              <div className="flex items-center justify-between w-full px-1">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-accent animate-ping" />
                  <span className="mono-data text-[0.52rem] font-bold text-neutral-400 uppercase tracking-widest">
                    REMOTE CONTROL
                  </span>
                </div>
                <div className="w-3.5 h-1.5 bg-neutral-600 rounded-full" />
              </div>

              {/* Remote Screen with "SCROLL TO SEE FULL ARTICLE" */}
              <div className="w-full bg-[#0d0d0d] border border-neutral-700 rounded-lg py-1.5 px-2.5 flex items-center justify-center gap-2 shadow-inner">
                <span className="uppercase-label text-[0.58rem] sm:text-[0.64rem] font-black tracking-wider text-accent text-center leading-none">
                  SCROLL TO SEE FULL ARTICLE
                </span>
                <span className="text-white text-xs font-black animate-bounce leading-none">
                  ↓
                </span>
              </div>

              {/* Tactile Remote Buttons Section */}
              <div className="w-full flex items-center justify-between px-2 pt-0.5 border-t border-neutral-800">
                {/* D-Pad Buttons */}
                <div className="flex items-center gap-1">
                  <span className="w-5 h-5 rounded bg-neutral-800 border border-neutral-600 flex items-center justify-center text-[0.55rem] text-neutral-300 font-bold shadow-sm">
                    ▲
                  </span>
                  <span className="w-5 h-5 rounded bg-neutral-800 border border-neutral-600 flex items-center justify-center text-[0.55rem] text-neutral-300 font-bold shadow-sm">
                    ▼
                  </span>
                </div>

                {/* Number Keypad */}
                <div className="grid grid-cols-3 gap-1">
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <span 
                      key={num}
                      className="w-3.5 h-2 rounded-sm bg-neutral-700/80 text-[0.45rem] font-mono text-neutral-400 flex items-center justify-center"
                    >
                      {num}
                    </span>
                  ))}
                </div>

                {/* Power / Action Button */}
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-accent/90 border border-red-500 shadow-inner flex items-center justify-center">
                  <span className="text-white text-[0.55rem] font-black">⏻</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

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
