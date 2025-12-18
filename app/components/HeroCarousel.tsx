'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Slide {
  title: string;
  subtitle?: string;
  description: string;
  link: string;
  linkText: string;
  image: string;
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
      style={{
        // backgroundColor: 'red',
        // backgroundSize: 'cover',
        // backgroundPosition: 'center',
        // backgroundRepeat: 'no-repeat',
        height: '100vh',
      }}

      className="relative bg-white   min-h-[600px] flex items-center overflow-hidden">
      <div
        style={{
          // backgroundColor: 'blue',
          height: '100%',
        }}
        className="w-full">
        {/* Carousel Container */}
        <div className="relative">
          {/* Slides */}
          <div className="relative h-full md:h-[600px]" style={{
            // backgroundColor: 'pink',
            height: '100vh',
          }} >
            {slides.map((slide, index) => (
              <section
                style={{
                  // backgroundColor: 'green',
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  height: '100%',
                }}
                key={index}
                className={`absolute inset-0 transition-all duration-7000 ease-in-out ${index === currentSlide
                  ? 'opacity-100 z-10 translate-x-0'
                  : 'opacity-0 z-0 translate-x-4 pointer-events-none'
                  }`}
              >
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-black/60 z-5"></div>
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center h-full relative z-10">
                  {/* Left Side - Text Content */}
                  <div className="space-y-4 md:space-y-6 pl-10">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-5xl font-bold text-gray-900 leading-tight">
                      {slide.title.split('\n').map((line, i) => (
                        <span key={i} style={{
                          color: 'white',
                        }}>
                          {line}
                          {i < slide.title.split('\n').length - 1 && <br />}
                        </span>
                      ))}
                    </h1>
                    <p className="text-base md:text-lg lg:text-xl max-w-xl" style={{
                      color: 'white',
                    }}>
                      {slide.description}
                    </p>
                  </div>

                </div>

              </section>
            ))}
          </div>

          {/* Navigation Arrows */}
          {/* <button
            onClick={prevSlide}
            className="absolute left-2 md:left-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-gray-900 p-2 md:p-3 rounded-full shadow-lg transition-all hover:scale-110 active:scale-95"
            aria-label="Previous slide"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button> */}

          {/* <button
            onClick={nextSlide}
            className="absolute right-2 md:right-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-gray-900 p-2 md:p-3 rounded-full shadow-lg transition-all hover:scale-110 active:scale-95"
            aria-label="Next slide"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button> */}

          {/* Dot Indicators */}
          <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${index === currentSlide
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

