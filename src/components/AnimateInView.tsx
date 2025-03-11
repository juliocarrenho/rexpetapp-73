
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
    'fade-in': 'animate-fade-in opacity-0',
    'fade-up': 'animate-fade-up opacity-0',
    'scale-in': 'animate-scale-in opacity-0',
    'slide-in-right': 'animate-slide-in-right',
    'none': '',
  };

  const animationClass = animationMap[animation];
  const animationDelay = delay ? `delay-[${delay}ms]` : '';
  const animationStyle = { animationPlayState: isVisible ? 'running' : 'paused' };

  return (
    <div
      ref={ref}
      className={cn(
        isVisible ? animationClass : 'opacity-0',
        animationDelay,
        className
      )}
      style={{
        ...animationStyle,
        animationDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default AnimateInView;
