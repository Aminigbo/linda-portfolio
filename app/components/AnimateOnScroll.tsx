'use client';

import { useEffect, useRef, useState } from 'react';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  animation?: 'slide-up' | 'slide-left' | 'slide-right' | 'slide-down' | 'fade-in';
  delay?: number;
  className?: string;
}

export default function AnimateOnScroll({
  children,
  animation = 'slide-up',
  delay = 0,
  className = '',
}: AnimateOnScrollProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  const animationClass = `animate-${animation} ${isVisible ? 'in-view' : ''}`;

  return (
    <div
      ref={ref}
      className={`${animationClass} ${className}`}
    >
      {children}
    </div>
  );
}

