import React, { useState } from 'react';
import { Home, User, Code, Mail, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm py-4 px-6">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <div className="text-data-charcoal font-medium text-lg">HK</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <NavItem
            icon={<Home size={18} />}
            label="Home"
            onClick={() => scrollToSection('hero')}
          />
          <NavItem
            icon={<Code size={18} />}
            label="Skills"
            onClick={() => scrollToSection('skills')}
          />
          <NavItem
            icon={<Mail size={18} />}
            label="Contact"
            onClick={() => scrollToSection('contact')}
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-data-charcoal focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'md:hidden fixed inset-x-0 bg-white shadow-md transition-all duration-300 ease-in-out',
          isMenuOpen ? 'top-16 opacity-100' : '-top-full opacity-0'
        )}
      >
        <div className="flex flex-col p-4">
          <MobileNavItem
            icon={<Home size={18} />}
            label="Home"
            onClick={() => scrollToSection('hero')}
          />
          <MobileNavItem
            icon={<Code size={18} />}
            label="Skills"
            onClick={() => scrollToSection('skills')}
          />
          <MobileNavItem
            icon={<Mail size={18} />}
            label="Contact"
            onClick={() => scrollToSection('contact')}
          />
        </div>
      </div>
    </nav>
  );
};

// Desktop Nav Item Component
const NavItem: React.FC<{
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}> = ({ icon, label, onClick }) => {
  return (
    <button
      className="flex items-center gap-1.5 text-data-gray hover:text-data-charcoal transition-colors duration-200"
      onClick={onClick}
    >
      {icon}
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
};

// Mobile Nav Item Component
const MobileNavItem: React.FC<{
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}> = ({ icon, label, onClick }) => {
  return (
    <button
      className="flex items-center gap-2 py-3 text-data-gray hover:text-data-charcoal hover:bg-data-lightgray/50 px-4 rounded-md transition-colors duration-200"
      onClick={onClick}
    >
      {icon}
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
};

export default Navbar;
