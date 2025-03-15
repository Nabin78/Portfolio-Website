
import React from 'react';
import { Download } from 'lucide-react';

const ResumeButton: React.FC = () => {
  return (
    <a 
      href="/resume.pdf" 
      download="resume.pdf"
      className="group inline-flex items-center gap-2 px-5 py-3 bg-data-charcoal text-white rounded-lg 
        transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg relative overflow-hidden"
    >
      <span className="relative z-10 flex items-center gap-2">
        <Download size={18} />
        <span>Download Resume</span>
      </span>
      <span className="absolute inset-0 bg-data-blue opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
    </a>
  );
};

export default ResumeButton;
