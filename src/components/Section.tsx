import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  title?: string;
  subtitle?: string;
}

const SectionDesktop: React.FC<SectionProps> = ({ children, id, className = "", title, subtitle }) => {
  return (
    <section id={id} className={`py-20 px-6 md:px-12 max-w-7xl mx-auto ${className}`}>
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
