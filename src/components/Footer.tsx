import React from 'react';
import { Cpu } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { name, email, github, linkedin } = portfolioData.personalInfo;

  return (
    <footer className="py-12 border-t border-charcoal-900 bg-charcoal-950 text-charcoal-500 font-sans text-xs sm:text-sm">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand/Signature */}
        <div className="flex items-center gap-2">
          <Cpu className="h-4 w-4 text-accent-teal" />
          <p className="font-semibold text-charcoal-350">
            {name} <span className="font-mono text-xs text-charcoal-500">| Software Engineer</span>
          </p>
        </div>

        {/* Copy */}
        <p className="text-center text-charcoal-500 md:order-none order-last">
          &copy; {currentYear} &bull; All Rights Reserved &bull; Istanbul, Türkiye
        </p>

        {/* Direct Links */}
        <div className="flex items-center gap-4 text-xs font-mono">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent-teal transition-colors"
          >
            GitHub
          </a>
          <span className="text-charcoal-800">/</span>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent-teal transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-charcoal-800">/</span>
          <a
            href={`mailto:${email}`}
            className="hover:text-accent-teal transition-colors"
          >
            Email
          </a>
        </div>

      </div>
    </footer>
  );
};
