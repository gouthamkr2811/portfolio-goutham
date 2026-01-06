"use client";

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  title?: string;
  subtitle?: string;
}

const SectionDesktop: React.FC<SectionProps> = ({ children, id, className = "", title, subtitle }) => {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(container.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%", // Animation starts when top of section hits 80% of viewport
          toggleActions: "play none none reverse"
        }
      }
    );
  }, { scope: container });

  return (
    <section ref={container} id={id} className={`py-20 px-6 md:px-12 max-w-7xl mx-auto ${className} opacity-0`}>
      {(title || subtitle) && (
        <div className="mb-12 text-center">
          {title && <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary inline-block">{title}</h2>}
          {subtitle && <p className="text-gray-400 max-w-2xl mx-auto">{subtitle}</p>}
        </div>
      )}
      {children}
    </section>
  );
};

export default SectionDesktop;
