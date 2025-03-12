
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

type AnimationVariant = 
  | 'fade-in'
  | 'fade-up' 
  | 'scale-in'
  | 'slide-in-right'
  | 'none';

interface AnimateInViewProps {
  children: React.ReactNode;
  animation?: AnimationVariant;
  delay?: number;
  className?: string;
  threshold?: number;
  once?: boolean;
}

const AnimateInView: React.FC<AnimateInViewProps> = ({
  children,
  animation = 'fade-up',
  delay = 0,
  className = '',
  threshold = 0.1,
  once = true,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, once]);

  const animationMap: Record<AnimationVariant, string> = {
    'fade-in': 'animate-fade-in',
    'fade-up': 'animate-fade-up',
    'scale-in': 'animate-scale-in',
    'slide-in-right': 'animate-slide-in-right',
    'none': '',
  };

  const animationClass = animationMap[animation];
  const animationDelay = delay ? `delay-[${delay}ms]` : '';
  
  return (
    <div
      ref={ref}
      className={cn(
        isVisible ? animationClass : 'opacity-0',
        isVisible ? 'opacity-100' : 'opacity-0', // Ensure opacity is 100% when visible
        animationDelay,
        className
      )}
      style={{
        animationPlayState: isVisible ? 'running' : 'paused',
        animationDelay: `${delay}ms`,
        // Make sure elements stay visible after animation completes
        animationFillMode: 'forwards'
      }}
    >
      {children}
    </div>
  );
};

export default AnimateInView;
