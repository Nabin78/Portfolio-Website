import React from 'react';
import ResumeButton from './ResumeButton';

interface HeroSectionProps {
  name: string;
  title: string;
  description: string;
  imageSrc: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  name,
  title,
  description,
  imageSrc,
}) => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 animate-fade-in">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div
          className="order-2 md:order-1 animate-slide-up"
          style={{ animationDelay: '0.2s' }}
        >
          <div className="space-y-6">
            <div>
              <span className="px-3 py-1 rounded-full bg-data-blue text-data-charcoal text-xs font-medium tracking-wide">
                DATA ENTHUSIAST
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {name}
            </h1>
            <h2 className="text-xl md:text-2xl text-data-gray font-light">
              {title}
            </h2>
            <p className="text-lg text-data-charcoal/80 leading-relaxed">
              {description}
            </p>
            <ResumeButton />
          </div>
        </div>

        <div
          className="order-1 md:order-2 flex justify-center md:justify-end animate-slide-up"
          style={{ animationDelay: '0.4s' }}
        >
          <div className="relative -mt-40 w-56 h-56 md:w-72 md:h-72">
            <div className="absolute rounded-full "></div>
            <img
              src={imageSrc}
              alt={name}
              className="absolute inset-2 rounded-full object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
