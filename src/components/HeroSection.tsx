import React from 'react';
import { Github, Linkedin } from 'lucide-react';
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
            <p className="text-lg text-data-charcoal/80 leading-relaxed text-justify">
              {description}
            </p>

            {/* Resume Button */}
            <ResumeButton />

            {/* Social Media Links */}
            <div className="mt-6 flex space-x-6">
              <a
                href="https://github.com/Nabin78"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-data-blue transition-colors"
              >
                <Github size={28} />
              </a>
              <a
                href="https://www.linkedin.com/in/nabin-khatri-a6862b218/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-data-blue transition-colors"
              >
                <Linkedin size={28} />
              </a>
            </div>
          </div>
        </div>

        <div
          className="order-1 md:order-2 flex justify-center md:justify-end animate-slide-up"
          style={{ animationDelay: '0.4s' }}
        >
          <div className="relative flex justify-center items-center -mt-24 w-60 h-60 md:w-72 md:h-72">
            <div className="absolute w-full h-full bg-gray-100 rounded-full shadow-lg "></div>
            <img
              src={imageSrc}
              alt={name}
              className="absolute w-full h-full rounded-full object-cover object-top shadow-md transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
