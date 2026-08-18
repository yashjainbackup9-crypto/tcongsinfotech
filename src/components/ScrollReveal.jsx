import React, { useEffect, useRef, useState } from 'react';

export const ScrollReveal = ({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 600,
  threshold = 0.15,
  className = '',
  cascade = false
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: threshold,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    const currentTarget = domRef.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) observer.unobserve(currentTarget);
    };
  }, [threshold]);

  const getAnimationStyles = () => {
    const baseStyle = {
      transitionDuration: `${duration}ms`,
      transitionDelay: `${delay}ms`,
      transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    };

    if (isVisible) {
      return {
        ...baseStyle,
        opacity: 1,
        transform: 'translate3d(0, 0, 0) scale(1)',
      };
    }

    switch (animation) {
      case 'fade-up':
        return {
          ...baseStyle,
          opacity: 0,
          transform: 'translate3d(0, 32px, 0)',
        };
      case 'fade-down':
        return {
          ...baseStyle,
          opacity: 0,
          transform: 'translate3d(0, -32px, 0)',
        };
      case 'fade-left':
        return {
          ...baseStyle,
          opacity: 0,
          transform: 'translate3d(36px, 0, 0)',
        };
      case 'fade-right':
        return {
          ...baseStyle,
          opacity: 0,
          transform: 'translate3d(-36px, 0, 0)',
        };
      case 'zoom-in':
        return {
          ...baseStyle,
          opacity: 0,
          transform: 'scale(0.94)',
        };
      case 'fade':
      default:
        return {
          ...baseStyle,
          opacity: 0,
        };
    }
  };

  return (
    <div
      ref={domRef}
      style={getAnimationStyles()}
      className={`transition-all ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
