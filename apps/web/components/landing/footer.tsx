"use client";

import { useState, useEffect } from "react";
import { Button } from "@repo/ui/components/ui/button";
import { Input } from "@repo/ui/components/ui/input";
import { Play } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [showPlayIcon, setShowPlayIcon] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  // YouTube video ID - replace with your actual video ID
  const videoId = "USi3kH3Filw";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    // Handle newsletter submission
  };

  const handleVideoClick = () => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
  };

  // Hide play icon after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPlayIcon(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-[hsl(var(--about-bg))] text-[hsl(var(--about-text))] min-h-screen">
      {/* Video Section */}
      <div className="px-6 pt-12 pb-24 md:px-12 lg:px-24 xl:px-32">
        <div className="max-w-7xl mx-auto">
          <div 
            className="relative w-full aspect-[2.5/1] bg-[hsl(var(--about-video-bg))] rounded-3xl overflow-hidden group cursor-pointer"
            onClick={handleVideoClick}
          >
            {/* Video with autoplay */}
            <iframe
              className="absolute inset-0 w-full h-full pointer-events-none"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=${isMuted ? 1 : 0}&controls=0&loop=1&playlist=${videoId}`}
              title="Video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />

            {/* Play Button Overlay */}
            {showPlayIcon && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-white/40">
                  <Play className="w-8 h-8 text-white fill-white ml-1" />
                </div>
              </div>
            )}

            {/* Mute/Unmute Button */}
            <button
              onClick={toggleMute}
              className="absolute bottom-6 right-6 z-10 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/40 flex items-center justify-center hover:bg-white/30 transition-all duration-300"
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
              {isMuted ? (
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                </svg>
              ) : (
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="border-t border-[hsl(var(--about-border))]">
        <div className="px-6 py-16 md:px-12 lg:px-24 xl:px-32">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
              {/* Newsletter Section */}
              <div className="lg:col-span-1 w-[300px]">
                <h3 className="text-lg font-semibold mb-6">Join a Newsletter</h3>
                <p className="text-white/80 font-light text-sm mb-6">Your Email</p>
                <form onSubmit={handleSubmit} className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Enter Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white/10 backdrop-blur-sm border-white/20 text-[hsl(var(--about-text))] placeholder:text-[hsl(var(--about-text-muted))] focus-visible:ring-white/30"
                  />
                  <Button
                    variant="glass"
                    type="submit"
                    className="px-8 whitespace-nowrap"
                  >
                    Submit
                  </Button>
                </form>

                {/* Social Media Icons */}
                <div className="flex gap-4 mt-8">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
                    aria-label="Dribbble"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
                    aria-label="Behance"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
                    aria-label="Twitter"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Explore Section */}
              <div>
                <h3 className="text-lg font-semibold mb-6">Explore</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-white/80 font-light hover:text-white transition-colors"
                    >
                      Roadmap
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white/80 font-light hover:text-white transition-colors"
                    >
                      Careers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white/80 font-light hover:text-white transition-colors"
                    >
                      Press & Media
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white/80 font-light hover:text-white transition-colors"
                    >
                      Community
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white/80 font-light hover:text-white transition-colors"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              {/* Resources Section */}
              <div>
                <h3 className="text-lg font-semibold mb-6">Resources</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-white/80 font-light hover:text-white transition-colors"
                    >
                      Whitepaper
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white/80 font-light hover:text-white transition-colors"
                    >
                      API Documentation
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white/80 font-light hover:text-white transition-colors"
                    >
                      Security Protocols
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white/80 font-light hover:text-white transition-colors"
                    >
                      Blog
                    </a>
                  </li>
                </ul>
              </div>

              {/* TempWallets Branding Section */}
              <div>
                <div className="mb-4">
                  <img 
                    src="/Logo White PNG.png" 
                    alt="TempWallets" 
                    className="h-[50px] w-[200px] object-contain"
                  />
                </div>
                <p className="text-white/80 font-light text-xs leading-relaxed mb-6">
                  TempWallets is the next-generation blockchain platform built to power secure, scalable temporary wallet solutions.
                </p>
                <p className="text-white/80 font-light text-xs">Blockchain Technology Website</p>
              </div>
            </div>

            {/* Bottom Links */}
            <div className="mt-16 pt-8 border-t border-[hsl(var(--about-border))] flex flex-wrap justify-between items-center gap-4 text-sm text-white/80 font-light">
              <div className="flex gap-8">
                <a href="#" className="hover:text-white transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Dribbble
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Pintrest
                </a>
              </div>
              <p>Blockchain Technology Website</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
