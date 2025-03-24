
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimateInViewProps {
  children: React.ReactNode;
  animation?: 'fade-in' | 'fade-up' | 'slide-in-right' | 'scale-in';
  delay?: number;
  threshold?: number;
  className?: string;
}

const AnimateInView: React.FC<AnimateInViewProps> = ({
  children,
  animation = 'fade-in',
  delay = 0,
  threshold = 0.1,
  className,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  const getAnimationClass = () => {
    return isVisible ? `animate-${animation}` : 'opacity-0';
  };

  // Handle delay properly to avoid TailwindCSS warnings
  const getDelayStyle = () => {
    return delay > 0 ? { animationDelay: `${delay}ms` } : {};
  };

  return (
    <div
      ref={ref}
      className={cn(getAnimationClass(), className)}
      style={getDelayStyle()}
    >
      {children}
    </div>
  );
};

export default AnimateInView;
