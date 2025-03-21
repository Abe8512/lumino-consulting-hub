
import React, { useEffect, useRef, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  triggerOnce?: boolean;
  threshold?: number;
}

export function FadeIn({
  children,
  className,
  delay = 0,
  direction = 'up',
  duration = 700,
  triggerOnce = true,
  threshold = 0.1,
}: FadeInProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = React.useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce && elementRef.current) {
            observer.unobserve(elementRef.current);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '10px',
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [triggerOnce, threshold]);

  // Define animation class based on direction
  let animationClass = '';
  switch (direction) {
    case 'up':
      animationClass = 'animate-slide-up';
      break;
    case 'down':
      animationClass = 'animate-slide-down';
      break;
    case 'left':
      animationClass = 'animate-fade-in-left';
      break;
    case 'right':
      animationClass = 'animate-fade-in-right';
      break;
    default:
      animationClass = 'animate-fade-in';
  }

  return (
    <div
      ref={elementRef}
      className={cn(
        className,
        isVisible ? animationClass : 'opacity-0',
        'will-change-transform'
      )}
      style={{
        animationDuration: `${duration}ms`,
        animationDelay: `${delay}ms`,
        animationFillMode: 'forwards',
      }}
    >
      {children}
    </div>
  );
}
