import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Swiper1 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);

  const slides = [
    {
      image: 'https://i.postimg.cc/W4mdxmZQ/Screenshot-2025-11-12-121327.png',
    },
    {
      image: 'https://i.postimg.cc/7PRZstcC/Screenshot-2025-11-12-121346.png',
    },
    {
      image: 'https://i.postimg.cc/K8G9VfCg/Screenshot-2025-11-12-121940.png',
    },
    {
      image: 'https://i.postimg.cc/dVVBn1Tr/Screenshot-2025-11-12-121954.png',
    }
  ];

  const autoPlayInterval = 5000;

  // Auto play functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [slides.length]);

  // Progress bar animation
  useEffect(() => {
    setProgress(0);
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return prev + (100 / (autoPlayInterval / 50));
      });
    }, 50);

    return () => clearInterval(progressTimer);
  }, [currentSlide]);

  const changeSlide = (direction) => {
    setCurrentSlide((prev) => {
      const newIndex = prev + direction;
      if (newIndex < 0) return slides.length - 1;
      if (newIndex >= slides.length) return 0;
      return newIndex;
    });
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Touch handlers for mobile swipe
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      changeSlide(1);
    }
    if (touchStart - touchEnd < -50) {
      changeSlide(-1);
    }
  };

  return (
    <div className="w-full h-full min-h-[250px] sm:min-h-[300px] md:min-h-[350px] lg:min-h-[400px]">
      <div className="w-full h-full relative group">
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-white/20 rounded-t-2xl overflow-hidden z-20">
          <div 
            className="h-full bg-gradient-to-r from-cyan-400 to-[#d9ed92] transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Slider Wrapper */}
        <div 
          className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl bg-black/30"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Slides */}
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                index === currentSlide
                  ? 'opacity-100 scale-100 translate-x-0 z-10'
                  : index < currentSlide
                  ? 'opacity-0 scale-95 -translate-x-full'
                  : 'opacity-0 scale-95 translate-x-full'
              }`}
            >
              <img
                src={slide.image}
                alt={`Project screenshot ${index + 1}`}
                className="w-full h-full object-cover"
              />
              
              {/* Overlay gradient for better button visibility */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20 pointer-events-none" />
            </div>
          ))}

          {/* Navigation Buttons - Hidden on small screens, visible on hover on larger screens */}
          <button
            onClick={() => changeSlide(-1)}
            className="absolute left-2 sm:left-3 md:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-white/30 hover:scale-110 active:scale-95 transition-all duration-300 z-20 shadow-lg"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>

          <button
            onClick={() => changeSlide(1)}
            className="absolute right-2 sm:right-3 md:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-white/30 hover:scale-110 active:scale-95 transition-all duration-300 z-20 shadow-lg"
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>

          {/* Dots Navigation - Always visible */}
          <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 z-20">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-cyan-400 scale-125 ring-1 ring-cyan-300 shadow-lg shadow-cyan-400/50 w-6 sm:w-8'
                    : 'bg-white/50 hover:bg-white/80 hover:scale-110'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Slide Counter - Top right corner */}
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-black/50 backdrop-blur-sm text-white text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-1.5 rounded-full font-medium z-20 border border-white/20">
            {currentSlide + 1} / {slides.length}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Swiper1;