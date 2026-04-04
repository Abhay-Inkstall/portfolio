import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import logo from "../assets/logoBlack.png";

const Loader = () => {
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const lineRef = useRef(null);
  const tickerRef = useRef(null);
  const [tickerText, setTickerText] = useState("INITIALIZING PRESS...");

  const phrases = [
    "FETCHING BYLINES...",
    "TYPESETTING LAYOUT...",
    "INKING MASTHEAD...",
    "INDEXING ARCHIVES...",
    "VERIFYING INTEGRITY...",
    "FINALIZING EDITION...",
    "DISTRIBUTING...",
  ];

  useEffect(() => {
    let phraseIndex = 0;
    const tickerInterval = setInterval(() => {
      phraseIndex = (phraseIndex + 1) % phrases.length;
      setTickerText(phrases[phraseIndex]);
    }, 400);

    const tl = gsap.timeline();

    // Reset initial states
    gsap.set(logoRef.current, { scale: 0.8, opacity: 0 });
    gsap.set(lineRef.current, { scaleX: 0 });
    gsap.set(tickerRef.current, { opacity: 0, y: 10 });

    tl.to(logoRef.current, {
      scale: 1,
      opacity: 1,
      duration: 0.8,
      ease: "back.out(1.7)",
    })
    .to(lineRef.current, {
      scaleX: 1,
      duration: 1.5,
      ease: "power2.inOut",
    }, "-=0.4")
    .to(tickerRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.4,
    }, "-=1");

    // "Stamping" pulse for the logo
    gsap.to(logoRef.current, {
      scale: 1.05,
      duration: 0.2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    return () => {
      clearInterval(tickerInterval);
      tl.kill();
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 w-full h-full bg-background flex flex-col justify-center items-center z-[9999] bg-news-dots"
    >
      <div className="relative flex flex-col items-center max-w-lg w-full px-10">
        {/* Edition Info Header */}
        <div className="w-full flex justify-between items-center mb-10 border-b-2 border-primary pb-2 opacity-40 uppercase-label text-[0.6rem] font-bold">
          <span>VOL. 024 // NO. 001</span>
          <span>{new Date().toLocaleDateString()}</span>
        </div>

        {/* Masthead Logo */}
        <div ref={logoRef} className="mb-12">
          <img src={logo} alt="LOGO" className="h-16 lg:h-20 w-auto grayscale contrast-125" />
        </div>

        {/* Printing Line */}
        <div className="w-full h-2 bg-primary/10 relative overflow-hidden mb-6">
          <div 
            ref={lineRef} 
            className="absolute top-0 left-0 h-full w-full bg-primary origin-left"
          />
        </div>

        {/* Status Ticker */}
        <div ref={tickerRef} className="text-center h-6 overflow-hidden">
          <p className="uppercase-label text-xs font-black tracking-[0.3em] text-primary animate-pulse">
            {tickerText}
          </p>
        </div>

        {/* Bottom Metadata */}
        <div className="w-full mt-20 border-t border-primary/10 pt-4 opacity-30 text-center">
          <span className="mono-data text-[0.55rem] font-bold uppercase tracking-widest">
            Structural Integrity Guaranteed // Abhay Kumar Das Edition
          </span>
        </div>
      </div>
      
      {/* Decorative Border Corners */}
      <div className="absolute top-10 left-10 w-20 h-20 border-t-4 border-l-4 border-primary/20"></div>
      <div className="absolute top-10 right-10 w-20 h-20 border-t-4 border-r-4 border-primary/20"></div>
      <div className="absolute bottom-10 left-10 w-20 h-20 border-b-4 border-l-4 border-primary/20"></div>
      <div className="absolute bottom-10 right-10 w-20 h-20 border-b-4 border-r-4 border-primary/20"></div>
    </div>
  );
};

export default Loader;
