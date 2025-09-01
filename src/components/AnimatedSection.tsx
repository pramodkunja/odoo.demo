import React, { useEffect, useRef, useState } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animationType?: 'fade' | 'slide' | 'scale';
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  className = '',
  animationType = 'fade'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getAnimationClass = () => {
    const base = 'transition-all duration-1000';
    
    if (!isVisible) {
      switch (animationType) {
        case 'slide':
          return `${base} transform translate-y-10 opacity-0`;
        case 'scale':
          return `${base} transform scale-95 opacity-0`;
        default:
          return `${base} opacity-0`;
      }
    }

    switch (animationType) {
      case 'slide':
        return `${base} transform translate-y-0 opacity-100`;
      case 'scale':
        return `${base} transform scale-100 opacity-100`;
      default:
        return `${base} opacity-100`;
    }
  };

  return (
    <section 
      ref={sectionRef} 
      className={`section min-h-screen ${className} ${getAnimationClass()}`}
    >
      {children}
    </section>
  );
};

export default AnimatedSection;