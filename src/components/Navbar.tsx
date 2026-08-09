import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
  onNavClick: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleItemClick = (id: string) => {
    onNavClick(id);
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-charcoal-950/80 backdrop-blur-md border-charcoal-800/80 py-4 shadow-lg shadow-black/20'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo/Brand */}
        <button
          onClick={() => handleItemClick('home')}
          className="flex items-center space-x-2 text-white font-display font-bold tracking-tight hover:text-accent-teal transition-colors group cursor-pointer"
        >
          <Cpu className="h-5 w-5 text-accent-teal group-hover:rotate-45 transition-transform duration-300" />
          <span className="text-lg">
            Khaled<span className="text-accent-teal font-mono text-sm ml-1">&lt;dev/&gt;</span>
          </span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleItemClick(item.id)}
              className={`px-3 py-1.5 rounded-md font-sans text-sm font-medium tracking-wide transition-all duration-200 cursor-pointer ${
                activeSection === item.id
                  ? 'text-accent-teal bg-accent-teal/10 font-semibold'
                  : 'text-charcoal-300 hover:text-white hover:bg-charcoal-900/50'
              }`}
            >
              {item.label}
            </button>
          ))}
          <a
            href={portfolioData.personalInfo.cvUrl}
            download
            className="ml-4 px-4 py-1.5 rounded-md border border-accent-teal text-accent-teal font-mono text-xs font-medium hover:bg-accent-teal hover:text-charcoal-950 transition-all duration-200"
          >
            CV.pdf
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 rounded-md text-charcoal-300 hover:text-white hover:bg-charcoal-900 focus:outline-none cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`md:hidden fixed inset-x-0 top-[73px] border-b border-charcoal-800 bg-charcoal-950/95 backdrop-blur-lg shadow-xl transition-all duration-300 ease-in-out origin-top ${
          isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-6 py-4 flex flex-col space-y-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleItemClick(item.id)}
              className={`w-full text-left py-2 px-3 rounded-md font-sans text-base font-medium transition-colors cursor-pointer ${
                activeSection === item.id
                  ? 'text-accent-teal bg-accent-teal/5 font-semibold'
                  : 'text-charcoal-300 hover:text-white hover:bg-charcoal-900/50'
              }`}
            >
              {item.label}
            </button>
          ))}
          <a
            href={portfolioData.personalInfo.cvUrl}
            download
            onClick={() => setIsOpen(false)}
            className="w-full text-center py-2.5 mt-2 rounded-md bg-accent-teal text-charcoal-950 font-mono text-sm font-semibold hover:bg-accent-teal-hover transition-colors block"
          >
            Download CV
          </a>
        </div>
      </div>
    </nav>
  );
};
