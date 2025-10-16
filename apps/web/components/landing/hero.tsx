"use client";

import "@repo/ui/globals.css";
import Navbar from "../layout/navbar";
import { useEffect, useState } from "react";
import { Button } from "@repo/ui/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 20 - 10; // -10 to 10 range
      const y = (e.clientY / window.innerHeight) * 20 - 10; // -10 to 10 range
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="section min-h-screen flex flex-col text-center relative overflow-hidden">
      {/* Big heading with specific positioning */}
      <div 
        className="absolute z-0"
        style={{
          top: '180px',
          left: '49px',
          right: '79px'
        }}
      >
        {/* Left gradient overlay */}
        <div 
          className="absolute left-36 top-0 w-64 h-full bg-gradient-to-r from-[#000000] to-transparent z-10"
        />
        
        {/* Right gradient overlay */}
        <div 
          className="absolute right-36 top-0 w-64 h-full bg-gradient-to-l from-[#000000] to-transparent z-10"
        />
        
        {/* Main heading text */}
        <h1 className="text-white/30 font-['Poppins'] text-[8vw] font-bold leading-none relative z-0">
          BURNER WALLETS
        </h1>
      </div>
      
      {/* Secure, Scalable, Limitless text */}
      <div 
        className="absolute z-0"
        style={{
          top: '477.47px',
          right: '1250px'
        }}
      >
        <h2 className="text-white font-['Poppins'] font-light text-[30px] leading-tight text-left">
          Secure, Scalable<br />
          Limitless.
        </h2>
      </div>

      {/* Text Section - 544px from navbar top, right aligned */}
      <div 
        className="absolute z-30"
        style={{
          top: '450px', // navbar paddingTop + 544px
          right: '0',
          paddingRight: 'clamp(1.5rem, 12vw, 12.5rem)' // matching section padding
        }}
      >
        <p className="text-white/70 font-['Poppins'] text-[0.7vw] leading-relaxed text-left max-w-xs">
          We push the boundaries of what's possible with blockchain technology. Designed for maximum security.
        </p>
      </div>
 
        {/* Get Started Button */}
        <div 
          className="absolute z-30"
          style={{
            top: '580px',
            right: '400px'
          }}
        >
          <Button 
            variant="glass"
            className="font-['Poppins']"
          >
            Get started
          </Button>
        </div>

        {/* Temp Wallets Creation Button */}
        <div 
          className="absolute z-30"
          style={{
            top: '780px', // navbar paddingTop + 854px
            left: '1180px' // section padding + 1180px
          }}
        >
          <Button 
            variant="glass"
            className="font-['Poppins'] w-64 h-25 flex items-center justify-between p-4"
          >
            {/* Left grid - Text */}
            <div className="flex-1 text-left px-2">
              <span className="text-white text-xl font-light">
                TempWallets <br/> Creation
              </span>
            </div>
            
            {/* Right grid - Arrow icon at bottom */}
            <div className="flex items-end">
              <ArrowRight className="h-10 w-10 text-white group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </Button>
        </div>

        {/* Stats Section */}
        <div 
          className="absolute z-30"
          style={{
            top: '790px',
            left: '-30px',
            paddingLeft: 'clamp(1.5rem, 12vw, 12.5rem)'
          }}
        >
          <div className="flex gap-8">
            <div>
              <div className="flex items-center gap-2 mb-2 pl-10">
                <div className="w-2 h-2 rounded-full bg-foreground"></div>
                <span className="text-sm text-muted-foreground font-light">Smart Contracts</span>
              </div>
              <p className="text-4xl font-light pl-20">•  2M+</p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2 pl-10">
                <div className="w-2 h-2 rounded-full bg-foreground"></div>
                <span className="text-sm text-muted-foreground font-light">Neutral Operations</span>
              </div>
              <p className="text-4xl font-light pl-20">•  99%</p>
            </div>
          </div>
        </div>

        {/* Navbar positioned at the top inside hero section */}
        <div className="absolute top-0 left-0 right-0 z-10">
          <Navbar />
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

       {/* 3D Black Chrome Shape with white glow */}
       <div 
         className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 transition-transform duration-300 ease-out md:animate-none animate-bounce"
         style={{
           transform: `translate(-50%, -50%) translate(${mousePosition.x}px, ${mousePosition.y}px)`,
         }}
       >
           
           <div className="absolute inset-0 bg-white/10 rounded-full blur-3xl scale-300"></div>
           
           <img 
             style={{
                filter: 'brightness(1.1) contrast(1.2)'
              }}
             src="/3D Black Chrome Shape (8).png" 
             alt="3D Chrome Shape" 
             className="relative w-[700px] h-[700px] object-contain"
           />
         </div>
      
      {/* Hero content centered */}
      {/* <div className="flex-1 flex flex-col items-center justify-center">
        <p className="text-xl text-white max-w-2xl">Your secure, fast, and modern wallet solution.</p>
      </div> */}
    </section>
  );
}
