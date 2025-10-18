"use client";

import "@repo/ui/globals.css";
import { Search, Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { Input } from "@repo/ui/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@repo/ui/components/ui/navigation-menu";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Prevent scroll when sidebar is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const menuItems = [
    {
      title: "Features",
      image: "/features-main.png",
      items: [
        { title: "Feature 1", description: "Description for feature 1" },
        { title: "Feature 2", description: "Description for feature 2" },
        { title: "Feature 3", description: "Description for feature 3" },
      ]
    },
    {
      title: "Innovation",
      image: "/innovation-main.png",
      items: [
        { title: "Innovation 1", description: "Description for innovation 1" },
        { title: "Innovation 2", description: "Description for innovation 2" },
      ]
    },
    {
      title: "Impact",
      image: "/impact-main.png",
      items: [
        { title: "Impact 1", description: "Description for impact 1" },
        { title: "Impact 2", description: "Description for impact 2" },
      ]
    }
  ];

  return (
    <>
      <nav className="section flex items-center justify-between py-4 relative z-[200]" style={{ paddingTop: "41.55px" }}>
        {/* Mobile Menu Button with Background - Hidden when menu is open */}
        {!isMobileMenuOpen && (
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden text-white hover:text-gray-300 transition-all z-50"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        )}
        
        {/* Placeholder when menu is open to maintain spacing */}
        {isMobileMenuOpen && (
          <div className="lg:hidden w-6 h-6"></div>
        )}

        {/* Desktop Left Navigation */}
        <div className="hidden lg:block">
          <NavigationMenu>
            <NavigationMenuList className="space-x-2">
              {menuItems.map((menu) => (
                <NavigationMenuItem key={menu.title}>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-transparent data-[state=open]:bg-transparent text-gray-400 hover:text-white data-[state=open]:text-white font-['Poppins']">
                    {menu.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[400px] p-3 bg-[#1a1a1a]/80 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl">
                      <div className="grid grid-cols-[160px_1fr] gap-3">
                        {/* Left side - Single image */}
                        <div className="flex items-center justify-center">
                          <div className="w-full max-w-[140px] aspect-square rounded-lg overflow-hidden">
                            <img
                              src={menu.image}
                              alt={menu.title}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                              onError={(e) => {
                                // Fallback to a placeholder if image fails to load
                                const target = e.target as HTMLImageElement;
                                target.src = `data:image/svg+xml;base64,${btoa(`
                                  <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="140" height="140" rx="8" fill="#ffffff" fill-opacity="0.1"/>
                                    <path d="M35 52.5h70v35H35v-35zm0 40.5h52.5v5.5H35v-5.5z" fill="#ffffff" fill-opacity="0.6"/>
                                  </svg>
                                `)}`;
                              }}
                            />
                          </div>
                        </div>

                        {/* Right side - All menu items */}
                        <div className="space-y-0.5">
                          {menu.items.map((item) => (
                            <NavigationMenuLink key={item.title} asChild>
                              <a
                                href="#"
                                className="block select-none rounded-md py-2 leading-none no-underline outline-none transition-colors hover:bg-white/5 text-white group text-left"
                              >
                                <div className="text-sm font-medium leading-none mb-0.5 text-left">{item.title}</div>
                                <p className="line-clamp-2 text-xs leading-snug text-gray-400 text-left">
                                  {item.description}
                                </p>
                              </a>
                            </NavigationMenuLink>
                          ))}
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Center Logo - Hidden on mobile when menu is open */}
        <div className={`flex items-center lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 transition-opacity duration-300 ${
          isMobileMenuOpen ? 'lg:opacity-100 opacity-0' : 'opacity-100'
        }`}>
          <img 
            src="/tempwallets-logo.png" 
            alt="TempWallets" 
            className="h-[40px] w-[160px] lg:h-[50px] lg:w-[200px] object-contain"
          />
        </div>

        {/* Desktop Right Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          <a href="#" className="text-gray-400 hover:text-white transition-colors font-['Poppins']">
            Blogs
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors font-['Poppins']">
            Contact
          </a>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              type="search"
              placeholder="I am looking for..."
              className="w-64 rounded-full border-white/10 bg-white/5 pl-10 text-sm text-white placeholder:text-gray-400 focus-visible:ring-white/20"
            />
          </div>
        </div>

        {/* Mobile Search Icon - Always hidden in mobile view */}
        <div className="lg:hidden w-6 h-6"></div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] lg:hidden">
          {/* Sidebar */}
          <div 
            ref={sidebarRef}
            className="fixed left-0 top-0 bottom-0 w-80 bg-[#0a0a0a]/95 backdrop-blur-xl border-r border-white/10 overflow-y-auto"
          >
            {/* Sidebar Header */}
            <div className="flex items-center justify-between pt-12 pb-6 px-6 border-b border-white/10">
              <img 
                src="/tempwallets-logo.png" 
                alt="TempWallets" 
                className="h-[40px] w-[160px] object-contain"
              />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white hover:text-gray-300 transition-all"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Navigation Menu */}
            <div className="p-4 space-y-2">
              {/* Expandable Sections */}
              {menuItems.map((menu) => (
                <div key={menu.title} className="space-y-1">
                  <button
                    onClick={() => toggleSection(menu.title)}
                    className="w-full flex items-center justify-between px-3 py-2 text-left text-white hover:bg-white/5 rounded-lg transition-colors group"
                  >
                    <span className="font-['Poppins'] font-light">{menu.title}</span>
                    {expandedSections.includes(menu.title) ? (
                      <ChevronDown className="h-4 w-4 text-gray-400 group-hover:text-white transition-colors" />
                    ) : (
                      <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-white transition-colors" />
                    )}
                  </button>

                  {/* Nested Items */}
                  {expandedSections.includes(menu.title) && (
                    <div className="ml-4 pl-4 border-l border-white/10 space-y-1">
                      {menu.items.map((item) => (
                        <a
                          key={item.title}
                          href="#"
                          className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                        >
                          <div className="font-medium">{item.title}</div>
                          <div className="text-xs text-gray-500 mt-0.5">{item.description}</div>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Direct Links */}
              <div className="pt-4 border-t border-white/10 space-y-1">
                <a
                  href="#"
                  className="block px-3 py-2 text-white hover:bg-white/5 rounded-lg transition-colors font-['Poppins'] font-light"
                >
                  Blogs
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 text-white hover:bg-white/5 rounded-lg transition-colors font-['Poppins'] font-light"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;