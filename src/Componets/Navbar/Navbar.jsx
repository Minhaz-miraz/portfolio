import React, { useState, useEffect } from 'react';
import { Home, FolderOpen, Award, Headset, Menu, X } from 'lucide-react';
// import logo from "../../assets/logo.svg"

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'about', label: 'About', icon: Home },
    { name: 'projects', label: 'Projects', icon: FolderOpen },
    { name: 'skills', label: 'Skills', icon: Award },
    { name: 'contact', label: 'Contact', icon: Headset }
  ];

  // Scroll spy functionality
  useEffect(() => {
    const sections = navItems.map(item => document.getElementById(item.name)).filter(Boolean);
    
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Trigger when section is in middle of viewport
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const handleLinkClick = (sectionName) => {
    const element = document.getElementById(sectionName);
    console.log(element)
    if (element) {
      element.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white/20 backdrop-blur-md shadow-lg border-b border-gray-200 sticky top-0 left-0 right-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo/Brand */}
          <div className="flex-shrink-0 flex items-center">
            <button onClick={()=>handleLinkClick('hero')}><img 
              className="h-12 w-auto object-contain lg:h-16 bg-cyan-800 " 
              src="https://i.postimg.cc/wxhgSxwV/Untitled-design-1.png"
              alt="Logo" 
            /></button>
            
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1 text-black">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = activeLink === item.name;
               
                
                return (
                  <button
                    key={item.name}
                    onClick={() => handleLinkClick(item.name)}
                    className={`group flex items-center px-4 lg:py-2 rounded-lg md:text-md lg:text-lg font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 ${
                      isActive
                        ? ' text-[#d9ed92] shadow-lg'
                        : 'text-gray-700 hover:bg-[#d9ed92] hover:text-black'
                    }`}
                  >
                    <IconComponent 
                      className={`mr-2 h-4 w-4 transition-all duration-300 ${
                        isActive ? 'text-[#d9ed92]' : 'text-gray-500 group-hover:text-blue-600'
                      }`} 
                    />
                    <span className="relative text-black font-normal">
                      {item.label}
                      {isActive && (
                        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#d9ed92] rounded-full"></span>
                      )}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {/* Mobile Navigation Menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 transition-all duration-300 ${
        isMobileMenuOpen ? 'opacity-100 visible bg-white/20 backdrop-blur-md border border-white/30' : 'opacity-0 invisible'
      }`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white/20 backdrop-blur-md">
          {navItems.map((item) => {
            const IconComponent = item.icon;
            const isActive = activeLink === item.name;
            
            return (
              <button
                key={item.name}
                onClick={() => handleLinkClick(item.name)}
                className={`group w-full flex items-center px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 transform hover:scale-105 ${
                  isActive
                    ? 'bg-cyan-700 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-[#d9ed92] hover:text-black'
                }`}
              >
                <IconComponent 
                  className={`mr-3 h-5 w-5 transition-all duration-300 ${
                    isActive ? 'text-white' : 'text-gray-500 group-hover:text-blue-600'
                  }`} 
                />
                <span className="relative">
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white rounded-full"></span>
                  )}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;