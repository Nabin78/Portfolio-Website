import React from 'react';
import HeroSection from '../components/HeroSection';
import SkillsSection from '../components/SkillsSection';
import ContactSection from '../components/ContactSection';
import Navbar from '../components/Navbar';

const Index: React.FC = () => {
  return (
    <main className="min-h-screen pt-16">
      <Navbar />

      <div id="hero">
        <HeroSection
          name="Harichandra Khatri"
          title="Data Analyst"
          description="I'm passionate about uncovering insights from complex datasets and turning them into actionable strategies. With expertise in SQL, Python, and visualization tools, I transform raw data into compelling stories."
          imageSrc="/portfolio.jpg"
        />
      </div>

      <div id="skills">
        <SkillsSection />
      </div>

      <div id="contact">
        <ContactSection
          email="nabinkc7878@gmail.com"
          phone="+977 9840700866"
          location="Lalitpur, Imadole"
        />
      </div>

      <footer className="py-6 bg-data-charcoal text-white text-center text-sm">
        <p>© {new Date().getFullYear()} Harichandra Khatri | Data Portfolio</p>
      </footer>
    </main>
  );
};

export default Index;
