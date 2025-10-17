"use client";

import "@repo/ui/globals.css";
import Navbar from "../layout/navbar";
import { useEffect, useState } from "react";
import { Button } from "@repo/ui/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AssetProtection } from "../AssetProtection";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile on mount
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 20 - 10; // -10 to 10 range
      const y = (e.clientY / window.innerHeight) * 20 - 10; // -10 to 10 range
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <AssetProtection>
      <section className="section min-h-screen flex flex-col text-center relative overflow-hidden">
      {/* Big heading with responsive positioning */}
      <div
        className="absolute z-0 left-4 right-4 md:left-[3vw] md:right-[3vw] lg:left-[2vw] lg:right-[3vw]"
        style={{
          top: 'clamp(120px, 15vh, 180px)'
        }}
      >
        {/* Left gradient overlay */}
        <div
          className="absolute left-0 md:left-[5vw] lg:left-[8vw] top-0 w-[8vw] md:w-[12vw] lg:w-[15vw] h-full bg-gradient-to-r from-[#000000] to-transparent z-10"
        />

        {/* Right gradient overlay */}
        <div
          className="absolute right-0 md:right-[5vw] lg:right-[8vw] top-0 w-[8vw] md:w-[12vw] lg:w-[15vw] h-full bg-gradient-to-l from-[#000000] to-transparent z-10"
        />
        
        {/* Main heading text - Split on mobile, single line on desktop */}
        <h1 className="text-white/30 font-['Poppins'] text-[20vw] md:text-[8vw] lg:text-[8vw] font-bold leading-tight md:leading-none relative z-0">
          <span className="block md:inline">BURNER</span>{' '}
          <span className="block md:inline">WALLETS</span>
        </h1>
      </div>
      
      {/* Safe, Private, Disposable text - Responsive */}
      <div
        className="absolute z-0 left-6 md:left-8 lg:left-[12vw]"
        style={{
          top: 'clamp(420px, 35vh, 477px)'
        }}
      >
        <h2 className="text-white font-['Poppins'] font-light text-[24px] md:text-[28px] lg:text-[30px] leading-tight text-left">
          Safe, Private<br />
          Disposable.
        </h2>
      </div>

      {/* Text Section - Responsive positioning */}
      <div 
        className="absolute z-30 right-8 md:right-8 lg:right-0 px-4 md:px-0"
        style={{
          top: 'clamp(450px, 40vh, 450px)',
          paddingRight: 'clamp(10rem, 5vw, 12.5rem)'
        }}
      >
        <p className="text-white/70 font-['Poppins'] text-xs md:text-base lg:text-[0.7vw] leading-relaxed text-left max-w-xs">
          Use and throw burner wallets for crypto degens. Perfect for quick transactions and minimizing risk exposure in the volatile crypto space.
        </p>
      </div>
 
        {/* Get Started Button - Responsive */}
        <div
          className="absolute z-30 right-[15vw] md:right-[8vw] lg:right-[15vw]"
          style={{
            top: 'clamp(610px, 55vh, 580px)'
          }}
        >
          <Button
            variant="glass"
            className="font-['Poppins'] text-sm md:text-base"
          >
            Get started
          </Button>
        </div>

        {/* Temp Wallets Creation Button - Hidden on mobile */}
        {!isMobile && (
          <div
            className="absolute z-30 left-[2vw] md:left-[6vw] lg:left-[70vw]"
            style={{
              top: 'clamp(750px, 70vh, 780px)'
            }}
          >
            <Button
              variant="glass"
              className="font-['Poppins'] w-48 md:w-56 lg:w-64 h-auto flex items-center justify-between p-3 md:p-4"
            >
              {/* Left grid - Text */}
              <div className="flex-1 text-left px-1 md:px-2">
                <span className="text-white text-base md:text-lg lg:text-xl font-light">
                  TempWallets <br/> Creation
                </span>
              </div>

              {/* Right grid - Arrow icon at bottom */}
              <div className="flex items-end">
                <ArrowRight className="h-8 w-8 md:h-9 md:w-9 lg:h-10 lg:w-10 text-white group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </Button>
          </div>
        )}

        {/* Stats Section - Responsive */}
        <div 
          className="absolute z-30 left-6 px-4 md:px-8"
          style={{
            top: 'clamp(700px, 75vh, 790px)',
            paddingLeft: 'clamp(1rem, 5vw, 12.5rem)'
          }}
        >
          <div className="flex flex-row gap-4 md:gap-8">
            <div>
              <div className="flex items-center gap-2 mb-2 pl-4 md:pl-6 lg:pl-10">
                <div className="w-2 h-2 rounded-full bg-foreground"></div>
                <span className="text-xs md:text-sm text-muted-foreground font-light">Network Supported</span>
              </div>
              <p className="text-2xl md:text-3xl lg:text-4xl font-light pl-8 md:pl-12 lg:pl-20">•  20+</p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2 pl-4 md:pl-6 lg:pl-10">
                <div className="w-2 h-2 rounded-full bg-foreground"></div>
                <span className="text-xs md:text-sm text-muted-foreground font-light"> Active Users </span>
              </div>
              <p className="text-2xl md:text-3xl lg:text-4xl font-light pl-8 md:pl-12 lg:pl-20">• 145</p>
            </div>
          </div>
        </div>

        
      
      {/* Video with black background removed - smaller and responsive */}
      {/* <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          top: '500px',
          left: '900px',
          right: '79px',
          filter: 'brightness(1.0) contrast(2.2)'
        }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full object-contain mix-blend-screen z-20 "
      >
        <source src="/abstract-glowing-geometric-structure-with-neon-col-2025-08-29-10-50-51-utc.mov" type="video/mp4" />
      </video> */}

       {/* 3D Black Chrome Shape with white glow - Responsive */}
       <div 
         className="absolute left-1/2 z-50 transition-transform duration-300 ease-out"
         style={{
           top: isMobile ? 'clamp(100px, 10vh, 150px)' : 'clamp(500px, 25vh, 300px)',
           transform: isMobile 
             ? 'translate(-50%, 0)' 
             : `translate(-50%, -50%) translate(${mousePosition.x}px, ${mousePosition.y}px)`,
         }}
       >
           
           <div className="absolute inset-0 bg-white/10 rounded-full blur-3xl scale-300"></div>
           
           <img 
             style={{
                filter: 'brightness(1.1) contrast(1.2)'
              }}
             src="/3D Black Chrome Shape (3).png" 
             alt="3D Chrome Shape" 
             className="relative w-[400px] h-[400px] md:w-[500px] md:h-[500px] lg:w-[700px] lg:h-[700px] object-contain md:animate-none animate-float protected-image"
             draggable="false"
           />
         </div>
      {/* Navbar positioned at the top inside hero section */}
        <div className="absolute top-0 left-0 right-0 z-[200]">
          <Navbar />
        </div>
      {/* Hero content centered */}
      {/* <div className="flex-1 flex flex-col items-center justify-center">
        <p className="text-xl text-white max-w-2xl">Your secure, fast, and modern wallet solution.</p>
      </div> */}
    </section>
    </AssetProtection>
  );
}
