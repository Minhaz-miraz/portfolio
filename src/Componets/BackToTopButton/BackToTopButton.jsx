import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercentage = (scrollTop / docHeight) * 100;
      
      setScrollProgress(scrollPercentage);
      setIsVisible(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`
        fixed bottom-8 right-8 z-50
        group
        h-14 w-14 rounded-full
        bg-gradient-to-br from-cyan-500 to-cyan-600
        text-white
        shadow-lg shadow-cyan-500/40
        transition-all duration-300 ease-out
        hover:shadow-xl hover:shadow-cyan-500/50 hover:scale-110
        focus:outline-none focus:ring-4 focus:ring-cyan-400/40
        active:scale-95
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}
      `}
      style={{
        background: `conic-gradient(#06b6d4 ${scrollProgress}%, transparent ${scrollProgress}%)`,
      }}
    >
      {/* Inner circle with solid background */}
      <div className="absolute inset-1 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center transition-all duration-300 group-hover:from-cyan-600 group-hover:to-cyan-700">
        <ArrowUp className="h-6 w-6 transition-transform duration-300 group-hover:-translate-y-0.5" />
      </div>

      {/* Tooltip */}
      <span className="
        absolute bottom-full right-0 mb-3
        px-3 py-1.5 rounded-lg
        bg-gray-900 text-white text-sm font-medium whitespace-nowrap
        opacity-0 group-hover:opacity-100
        transition-all duration-300
        pointer-events-none
        translate-y-1 group-hover:translate-y-0
      ">
        Back to top
        <span className="absolute top-full right-6 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></span>
      </span>
    </button>
  );
}