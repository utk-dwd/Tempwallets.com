"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@repo/ui/components/ui/button";
import { Badge } from "@repo/ui/components/ui/badge";
import { useState, useEffect, useRef } from "react";
import { AssetProtection } from "../AssetProtection";

const cardData = [
  {
    id: 1,
    date: "March 3, 2025",
    title: "How Hyper is Shaping a Trustless Economy",
    description: "Blockchain is no longer just a buzzword. It's the backbone of a new era of digital innovation. . .",
    label: "HyperChain",
    image: "3D Black Chrome Shape (16).png",
    tags: ["Smart", "Contract", "Creation"]
  },
  {
    id: 2,
    date: "March 10, 2025",
    title: "Decentralized Finance: The Future of Banking",
    description: "Traditional banking systems are being revolutionized by DeFi protocols that offer transparency and accessibility. . .",
    label: "Protocol",
    image: "3D Black Chrome Shape (17).png",
    tags: ["Finance", "Banking", "Revolution"]
  },
  {
    id: 3,
    date: "March 17, 2025",
    title: "Web3 Integration: Building Tomorrow's Internet",
    description: "The next generation of the internet is here, powered by decentralized technologies and user ownership. . .",
    label: "Web3 Stack",
    image: "3D Black Chrome Shape (21).png",
    tags: ["Web3", "Internet", "Future"]
  }
];

const Blogs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
    
    const checkMobile = () => {
      if (typeof window === 'undefined') return;
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window?.addEventListener('resize', checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      if (!isMobile) {
        setMousePosition({ x: e.clientX, y: e.clientY });
      }
    };

    if (!isMobile && typeof window !== 'undefined') {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', checkMobile);
        window.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [isMobile]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? cardData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === cardData.length - 1 ? 0 : prev + 1));
  };

  const currentCard = cardData[currentIndex]!;

  // Calculate transform based on mouse position for desktop
  const getTransform = () => {
    if (!isMounted || isMobile || typeof window === 'undefined') return 'translate(0, 0)';

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const deltaX = (mousePosition.x - centerX) / centerX;
    const deltaY = (mousePosition.y - centerY) / centerY;

    // Subtle movement - max 20px in any direction
    const moveX = deltaX * 20;
    const moveY = deltaY * 20;

    return `translate(${moveX}px, ${moveY}px)`;
  };

  return (
    <AssetProtection>
      <section className="min-h-screen bg-background text-foreground px-4 py-8 md:px-12 md:py-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Main Title */}
        <h1 className="text-3xl md:text-6xl lg:text-6xl font-light mb-12 md:mb-16 lg:mb-24 max-w-3xl">
          Explore the
          <br />
          FAQs
        </h1>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Side - Card with Vertical Label */}
          <div className="relative" ref={imageRef}>
            <div className="bg-card rounded-3xl h-[400px] md:h-[500px] lg:h-[600px] relative overflow-hidden">
               {/* Background Image */}
              <img
                src={currentCard.image}
                alt={currentCard.title}
                className={`absolute inset-0 w-full h-full md:w-[600px] md:h-[600px] object-contain rounded-3xl transition-transform duration-300 ease-out protected-image ${
                  isMobile ? 'animate-wiggle' : ''
                }`}
                style={{
                  transform: getTransform(),
                }}
                draggable="false"
              />
              {/* Vertical Label - Hidden on mobile, visible on desktop */}
              <div className="hidden lg:flex absolute -left-10 top-48 h-full items-center">
                <div className="bg-transparent px-4 py-8">
                  <p className="text-foreground text-sm tracking-widest whitespace-nowrap transform -rotate-90 origin-center font-mono">
                    {currentCard.label}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="flex flex-col justify-between space-y-8">
            {/* Navigation Arrows */}
            <div className="flex justify-end gap-3">
              <Button
                size="icon"
                onClick={handlePrevious}
                className="relative rounded-full bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm border-0 transition-all duration-300 hover:from-white/15 hover:to-white/10 before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-b before:from-white/20 before:to-transparent before:opacity-50 before:pointer-events-none"
              >
                <ChevronLeft className="h-5 w-5 text-white relative z-10" />
              </Button>
              <Button
                size="icon"
                onClick={handleNext}
                className="relative rounded-full bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm border-0 transition-all duration-300 hover:from-white/15 hover:to-white/10 before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-b before:from-white/20 before:to-transparent before:opacity-50 before:pointer-events-none"
              >
                <ChevronRight className="h-5 w-5 text-white relative z-10" />
              </Button>
            </div>

            {/* Article Content */}
            <div className="space-y-6 flex-1">
              <p className="text-sm text-white/70">{currentCard.date}</p>
              
              <h2 className="text-3xl md:text-4xl font-light leading-tight">
                {currentCard.title}
              </h2>

              <p className="text-white/70 text-sm py-[10px] leading-relaxed max-w-xl font-light">
                {currentCard.description}
              </p>

              <button className="text-foreground hover:text-muted-foreground transition-colors text-sm underline underline-offset-4">
                Learn More
              </button>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 md:gap-3 pt-2 md:pt-8">
              {currentCard.tags.map((tag) => (
                <Badge 
                  key={tag}
                  variant="outline" 
                  className="rounded-full px-4 py-1.5 md:px-6 md:py-2 border-border bg-transparent hover:bg-secondary transition-colors cursor-pointer text-xs md:text-sm font-light"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    </AssetProtection>
  );
};

export default Blogs;
