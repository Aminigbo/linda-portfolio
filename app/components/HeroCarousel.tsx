'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Slide {
  title: string;
  subtitle?: string;
  description: string;
  link: string;
  linkText: string;
}

interface HeroCarouselProps {
  slides: Slide[];
  autoPlayInterval?: number;
}

export default function HeroCarousel({ slides, autoPlayInterval = 5000 }: HeroCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isAutoPlaying, autoPlayInterval, slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section 
    className="relative bg-white   min-h-[600px] flex items-center overflow-hidden">
      <div 
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Carousel Container */}
        <div className="relative">
          {/* Slides */}
          <div className="relative h-[500px] md:h-[600px]">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  index === currentSlide 
                    ? 'opacity-100 z-10 translate-x-0' 
                    : 'opacity-0 z-0 translate-x-4 pointer-events-none'
                }`}
              >
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center h-full">
                  {/* Left Side - Text Content */}
                  <div className="space-y-4 md:space-y-6">
                    {slide.subtitle && (
                      <p className="text-xs md:text-sm lg:text-base text-gray-600 uppercase tracking-wide">
                        {slide.subtitle}
                      </p>
                    )}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-5xl font-bold text-gray-900 leading-tight">
                      {slide.title.split('\n').map((line, i) => (
                        <span key={i}>
                          {line}
                          {i < slide.title.split('\n').length - 1 && <br />}
                        </span>
                      ))}
                    </h1>
                    <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-xl">
                      {slide.description}
                    </p>
                    {/* <Link
                      href={slide.link}
                      className="inline-block border-2 border-yellow-400 bg-white text-gray-900 px-6 md:px-8 py-2 md:py-3 text-sm md:text-base font-bold uppercase tracking-wide hover:bg-yellow-400 hover:text-white transition-colors"
                    >
                      {slide.linkText}
                    </Link> */}
                  </div>

                  {/* Right Side - Graphic Element */}
                  <div className="relative h-[300px] md:h-[400px] lg:h-[500px] flex items-center justify-center hidden md:flex">
                    <div className="relative w-full h-full">
                      {/* Large Letter L for Lindah */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-[150px] md:text-[250px] lg:text-[300px] xl:text-[400px] font-serif font-bold text-gray-900 leading-none opacity-90">
                          L
                        </div>
                      </div>
                      
                      {/* Yellow Geometric Shapes */}
                      <div className="absolute top-10 right-10 w-24 h-24 bg-yellow-400 rounded-full"></div>
                      <div className="absolute top-32 right-32 w-16 h-16 bg-yellow-400 rounded-full"></div>
                      <div className="absolute bottom-20 right-20 w-32 h-32 bg-yellow-400 rounded-full opacity-80"></div>
                      
                      {/* Semi-circles */}
                      <div className="absolute top-16 left-16 w-20 h-20 border-8 border-yellow-400 rounded-full border-b-transparent border-r-transparent"></div>
                      <div className="absolute bottom-32 left-10 w-16 h-16 border-8 border-yellow-400 rounded-full border-t-transparent border-l-transparent"></div>
                      
                      {/* Curved lines */}
                      <svg className="absolute top-24 right-24 w-32 h-32" viewBox="0 0 100 100" fill="none">
                        <path d="M 10 50 Q 30 30, 50 50 T 90 50" stroke="#FACC15" strokeWidth="3" fill="none"/>
                      </svg>
                      <svg className="absolute bottom-24 left-24 w-40 h-40" viewBox="0 0 100 100" fill="none">
                        <path d="M 50 10 Q 70 30, 50 50 T 50 90" stroke="#FACC15" strokeWidth="3" fill="none"/>
                      </svg>
                      
                      {/* Dotted pattern */}
                      <div className="absolute top-1/4 right-1/4 w-16 h-16 opacity-60">
                        <div className="grid grid-cols-4 gap-1 w-full h-full">
                          {Array.from({ length: 16 }).map((_, i) => (
                            <div key={i} className="w-2 h-2 bg-gray-900 rounded-full"></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 md:left-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-gray-900 p-2 md:p-3 rounded-full shadow-lg transition-all hover:scale-110 active:scale-95"
            aria-label="Previous slide"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 md:right-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-gray-900 p-2 md:p-3 rounded-full shadow-lg transition-all hover:scale-110 active:scale-95"
            aria-label="Next slide"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dot Indicators */}
          <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentSlide
                    ? 'w-8 h-3 bg-yellow-400'
                    : 'w-3 h-3 bg-gray-400 hover:bg-gray-600'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

