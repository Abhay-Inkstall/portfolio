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
  const stageRef = useRef(null);
  const newspaperRef = useRef(null);
  const tvFrameRef = useRef(null);
  const indicatorRef = useRef(null);
  const navbarWrapperRef = useRef(null);

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

  const getInitialScale = () => {
    if (typeof window === "undefined") return 0.52;
    const w = window.innerWidth;
    if (w < 640) return 0.28;
    if (w < 1024) return 0.40;
    return 0.52;
  };

  useLayoutEffect(() => {
    if (loading) return;

    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      const initialScale = getInitialScale();

      // Initial state: newspaper starts directly inside the TV screen frame, right side up, sharp and visible!
      gsap.set(newspaperRef.current, {
        scale: initialScale,
        rotation: 0,
        rotateX: 0,
        rotateY: 0,
        z: 0,
        opacity: 1,
        filter: "blur(0px)",
        transformOrigin: "50% 50%",
      });

      if (navbarWrapperRef.current) {
        gsap.set(navbarWrapperRef.current, {
          opacity: 0,
          y: -30,
          pointerEvents: "none",
        });
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: stageRef.current,
          start: "top top",
          end: "+=1500",
          pin: true,
          scrub: 1, // Smooth scroll scrubbing
          anticipatePin: 1,
          refreshPriority: 10, // Top priority: Calculate Hero pin spacer first!
          onUpdate: (self) => {
            if (indicatorRef.current) {
              indicatorRef.current.style.pointerEvents = self.progress > 0.08 ? "none" : "auto";
            }
            if (tvFrameRef.current) {
              tvFrameRef.current.style.visibility = self.progress > 0.75 ? "hidden" : "visible";
            }
            if (navbarWrapperRef.current) {
              navbarWrapperRef.current.style.pointerEvents = self.progress > 0.85 ? "auto" : "none";
            }
          },
        },
      });

      // 1. Remote control slides down and fades out (0% - 15%)
      if (indicatorRef.current) {
        tl.to(
          indicatorRef.current,
          {
            opacity: 0,
            y: 30,
            scale: 0.94,
            ease: "power1.out",
            duration: 0.15,
          },
          0
        );
      }

      // 2. The Newspaper rotates 360° OUT OF the TV screen directly to the user's screen!
      // Scales from TV screen size (initialScale) to full viewport (1.0), while doing a 360° 3D spin!
      tl.to(
        newspaperRef.current,
        {
          scale: 1,
          rotation: -360,
          ease: "power2.out",
          duration: 0.82,
        },
        0.05
      );

      // 3D perspective tilt dynamics as it flies through the air
      tl.fromTo(
        newspaperRef.current,
        {
          rotateX: 0,
          rotateY: 0,
        },
        {
          rotateX: 24,
          rotateY: -18,
          duration: 0.40,
          yoyo: true,
          repeat: 1,
          ease: "sine.inOut",
        },
        0.05
      );

      // 3. As the newspaper lifts out of the TV screen, the TV behind it (displaying its black screen!) recedes
      tl.to(
        tvFrameRef.current,
        {
          opacity: 0,
          scale: 0.68,
          ease: "power2.inOut",
          duration: 0.45,
        },
        0.20
      );

      // 4. Physical paper slap bounce recoil as it lands on the screen (86% - 100%)
      tl.to(
        newspaperRef.current,
        {
          y: -10,
          scale: 1.012,
          duration: 0.06,
          ease: "power2.out",
        },
        0.86
      );
      tl.to(
        newspaperRef.current,
        {
          y: 0,
          scale: 1,
          duration: 0.06,
          ease: "power2.in",
        },
        0.92
      );

      // 5. Sticky Navbar docks into place smoothly (78% - 98%)
      if (navbarWrapperRef.current) {
        tl.to(
          navbarWrapperRef.current,
          {
            opacity: 1,
            y: 0,
            ease: "power2.out",
            duration: 0.20,
          },
          0.78
        );
      }
    });

    ScrollTrigger.sort();
    ScrollTrigger.refresh();

    const refreshTimer = setTimeout(() => {
      ScrollTrigger.sort();
      ScrollTrigger.refresh();
    }, 200);

    return () => {
      clearTimeout(refreshTimer);
      ctx.revert();
    };
  }, [loading]);

  const handleRemoteClick = () => {
    window.scrollTo({
      top: 1500,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-background font-body transition-colors duration-700 overflow-x-hidden">
      {loading && <Loader onComplete={handleLoaderComplete} />}

      {/* Fixed Sticky Navbar for the entire portfolio */}
      <div 
        ref={navbarWrapperRef} 
        className="fixed top-0 left-0 w-full z-50 pointer-events-none"
      >
        <Navbar />
      </div>

      {/* Centered Modern Television, Stand & Shadows (Behind the emerging paper, z-10) */}
      <div 
        ref={tvFrameRef}
        className="fixed inset-0 flex flex-col items-center justify-center z-10 pointer-events-none select-none px-4"
      >
        <div className="flex flex-col items-center">
          
          {/* Modern Slim Bezel TV Frame */}
          <div className="bg-[#0c0c0c] p-1.5 sm:p-2 rounded-xl border border-neutral-700/80 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.65),0_0_0_1px_rgba(255,255,255,0.08)] flex flex-col items-center">
            
            {/* Modern 16:9 Widescreen OLED Display - Pure Black OLED Base */}
            <div className="w-[320px] sm:w-[500px] md:w-[640px] lg:w-[740px] aspect-[16/9] rounded-lg bg-black relative overflow-hidden shadow-inner flex flex-col border border-neutral-800">
              
              {/* Pure Black Screen Base (The newspaper sits directly in front of this, leaving it black when thrown out!) */}
              <div className="absolute inset-0 bg-[#060606] flex items-center justify-center pointer-events-none">
                <div className="w-56 h-56 rounded-full bg-neutral-900/30 blur-3xl pointer-events-none" />
              </div>

              {/* Modern TV Screen Glare & Subtle Scanlines */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.06)_50%)] bg-[length:100%_4px] pointer-events-none z-20" />
              <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
                <div className="absolute left-0 right-0 h-14 bg-gradient-to-b from-transparent via-black/8 via-primary/10 to-transparent animate-tv-scan border-b border-primary/15 pointer-events-none" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none z-20 rounded-lg" />
            </div>

            {/* Modern Slim Chin with Standby LED */}
            <div className="w-full flex items-center justify-center pt-1">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse shadow-[0_0_6px_rgba(204,0,0,0.9)]" />
                <span className="mono-data text-[0.45rem] font-bold text-neutral-400 tracking-wider">SMART OLED</span>
              </div>
            </div>
          </div>

          {/* Modern Minimalist TV Stand */}
          {/* Vertical Neck */}
          <div className="w-12 h-3.5 bg-gradient-to-b from-neutral-800 to-neutral-950 border-x border-neutral-700 mx-auto" />
          {/* Base Plate */}
          <div className="w-48 sm:w-64 md:w-72 h-2 bg-gradient-to-b from-neutral-700 via-neutral-800 to-neutral-950 rounded-sm shadow-md border-t border-neutral-600 mx-auto" />

          {/* Modern Ambient Soft Floor Shadow */}
          <div className="w-60 sm:w-80 md:w-[500px] h-4 bg-black/30 blur-md rounded-full mx-auto mt-1 pointer-events-none" />

          {/* Modern Minimalist Remote Control Below TV */}
          <div 
            ref={indicatorRef}
            className="pointer-events-auto cursor-pointer mt-3 sm:mt-4 transition-transform hover:scale-[1.02]"
            onClick={handleRemoteClick}
          >
            <div className="bg-[#151515] border border-neutral-700/80 rounded-2xl p-2.5 sm:p-3 shadow-[0_15px_30px_rgba(0,0,0,0.4)] flex flex-col items-center gap-2 w-64 sm:w-72">
              {/* Header */}
              <div className="flex items-center justify-between w-full px-1">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-accent animate-ping" />
                  <span className="mono-data text-[0.52rem] font-bold text-neutral-400 uppercase tracking-widest">
                    SMART REMOTE
                  </span>
                </div>
                <div className="w-3.5 h-1.5 bg-neutral-600 rounded-full" />
              </div>

              {/* Display */}
              <div className="w-full bg-[#0a0a0a] border border-neutral-700 rounded-lg py-1.5 px-2.5 flex items-center justify-center gap-2 shadow-inner">
                <span className="uppercase-label text-[0.58rem] sm:text-[0.64rem] font-black tracking-wider text-accent text-center leading-none">
                  SCROLL TO SEE FULL ARTICLE
                </span>
                <span className="text-white text-xs font-black animate-bounce leading-none">
                  ↓
                </span>
              </div>

              {/* Buttons */}
              <div className="w-full flex items-center justify-between px-2 pt-0.5 border-t border-neutral-800">
                <div className="flex items-center gap-1">
                  <span className="w-5 h-5 rounded bg-neutral-800 border border-neutral-600 flex items-center justify-center text-[0.55rem] text-neutral-300 font-bold shadow-sm">
                    ▲
                  </span>
                  <span className="w-5 h-5 rounded bg-neutral-800 border border-neutral-600 flex items-center justify-center text-[0.55rem] text-neutral-300 font-bold shadow-sm">
                    ▼
                  </span>
                </div>
                <div className="flex gap-1.5 items-center">
                  <span className="w-2 h-2 rounded-full bg-neutral-600" />
                  <span className="w-2 h-2 rounded-full bg-neutral-600" />
                  <span className="w-2 h-2 rounded-full bg-neutral-600" />
                </div>
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-accent/90 border border-red-500 shadow-inner flex items-center justify-center">
                  <span className="text-white text-[0.55rem] font-black">⏻</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero / Throw Stage - centered in viewport while pinned */}
      <div 
        ref={stageRef}
        className="relative bg-transparent overflow-hidden min-h-screen w-full flex items-center justify-center z-30 pointer-events-none"
        style={{ perspective: "1200px" }}
      >
        {/* The Newspaper Broadside: Starts inside the TV screen, then rotates 360° OUT of the TV screen towards the user! */}
        <div
          ref={newspaperRef}
          className="w-full max-w-5xl mx-auto will-change-transform z-40 pointer-events-auto bg-background border-2 border-primary shadow-[0_20px_50px_rgba(0,0,0,0.35)] rounded-sm"
          style={{ 
            transformStyle: "preserve-3d" 
          }}
        >
          <Hero />
        </div>
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
