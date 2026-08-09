import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, FileDown } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface HeroProps {
  onNavClick: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavClick }) => {
  const { name, title, tagline, cvUrl, github, linkedin, email } = portfolioData.personalInfo;

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-24 pb-16 relative overflow-hidden"
    >
      {/* Background visual styling */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-teal/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-orange/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-accent-teal text-xs md:text-sm font-semibold tracking-widest uppercase bg-accent-teal/10 px-3.5 py-1.5 rounded-full">
            Available for Junior Opportunities
          </span>
        </motion.div>

        <motion.h1
          className="mt-8 font-display text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-none"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {name}
        </motion.h1>

        <motion.h2
          className="mt-4 font-display text-lg sm:text-2xl md:text-3xl text-charcoal-300 font-semibold tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {title}
        </motion.h2>

        <motion.p
          className="mt-6 text-charcoal-400 text-sm sm:text-lg max-w-2xl mx-auto font-sans leading-relaxed"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          {tagline}
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <button
            onClick={() => onNavClick('projects')}
            className="px-6 py-3 rounded-lg bg-accent-teal text-charcoal-950 font-sans text-sm font-semibold tracking-wide hover:bg-accent-teal-hover shadow-lg hover:shadow-accent-teal/20 transition-all duration-200 flex items-center gap-2 cursor-pointer group"
          >
            View Projects
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href={cvUrl}
            download
            className="px-6 py-3 rounded-lg border border-charcoal-700 bg-charcoal-900/40 text-white font-sans text-sm font-semibold tracking-wide hover:bg-charcoal-800 hover:border-charcoal-600 transition-all duration-200 flex items-center gap-2"
          >
            Download CV
            <FileDown className="h-4 w-4" />
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="mt-12 flex items-center justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.75 }}
        >
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full border border-charcoal-800 bg-charcoal-900/30 text-charcoal-400 hover:text-accent-teal hover:border-accent-teal/30 hover:bg-accent-teal/5 transition-all duration-200"
            aria-label="GitHub Profile"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full border border-charcoal-800 bg-charcoal-900/30 text-charcoal-400 hover:text-accent-teal hover:border-accent-teal/30 hover:bg-accent-teal/5 transition-all duration-200"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${email}`}
            className="p-2.5 rounded-full border border-charcoal-800 bg-charcoal-900/30 text-charcoal-400 hover:text-accent-teal hover:border-accent-teal/30 hover:bg-accent-teal/5 transition-all duration-200"
            aria-label="Send Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </motion.div>

        {/* Section Divider/Scroller */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <button
            onClick={() => onNavClick('about')}
            className="flex flex-col items-center gap-2 text-charcoal-500 hover:text-accent-teal transition-colors cursor-pointer group"
          >
            <span className="font-mono text-[10px] tracking-widest uppercase">Scroll Down</span>
            <div className="w-5 h-8 border-2 border-charcoal-700 rounded-full flex justify-center p-1 group-hover:border-accent-teal/50 transition-colors">
              <motion.div
                className="w-1 h-1.5 bg-accent-teal rounded-full"
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              />
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  );
};
