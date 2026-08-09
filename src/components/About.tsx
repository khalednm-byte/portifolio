import React from 'react';
import { motion } from 'framer-motion';
import { Globe, BookOpen, Quote, Users, Heart, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const About: React.FC = () => {
  const { aboutText, languages, location } = portfolioData.personalInfo;
  const { teamLeadership, community } = portfolioData;

  return (
    <section id="about" className="py-24 border-t border-charcoal-900 bg-charcoal-950/40 relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight">
            About Me
          </h2>
          <div className="w-12 h-1 bg-accent-teal mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-charcoal-400 font-sans text-sm md:text-base">
            Software engineering graduate based in {location} with a focus on system integrity and clean code.
          </p>
        </div>

        {/* First Row: Bio and Philosophy Quotes */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Main Biography Column */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-display text-xl md:text-2xl font-bold text-white">
              My Engineering Journey & Goals
            </h3>
            <div className="text-charcoal-300 font-sans text-sm md:text-base leading-relaxed space-y-4 whitespace-pre-line">
              {aboutText}
            </div>

            {/* Languages Panel */}
            <div className="pt-6">
              <h4 className="font-display text-sm font-semibold text-white tracking-wide uppercase flex items-center gap-2 mb-4">
                <Globe className="h-4 w-4 text-accent-teal" /> Languages
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {languages.map((lang, index) => (
                  <div key={index} className="p-4 rounded-lg border border-charcoal-800/80 bg-charcoal-900/30 font-sans">
                    <p className="text-sm font-bold text-white">{lang.name}</p>
                    <p className="text-xs text-charcoal-450 mt-1">{lang.level}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Philosophy / Personal Statements Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quote Card 1 */}
            <motion.div
              className="p-6 sm:p-8 rounded-xl border border-charcoal-800/80 bg-charcoal-900/40 relative overflow-hidden group shadow-lg"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <Quote className="absolute top-4 right-4 h-12 w-12 text-accent-teal/5 group-hover:text-accent-teal/10 transition-colors" />
              <div className="relative z-10 font-sans">
                <span className="font-mono text-accent-teal text-[10px] uppercase tracking-widest font-semibold">Core Principle</span>
                <p className="mt-3 text-base sm:text-lg text-white font-medium leading-relaxed italic">
                  "I like building software, but I am even more interested in understanding why the software is built the way it is."
                </p>
              </div>
            </motion.div>

            {/* Quote Card 2 */}
            <motion.div
              className="p-6 sm:p-8 rounded-xl border border-charcoal-800/80 bg-charcoal-900/40 relative overflow-hidden group shadow-lg"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <Quote className="absolute top-4 right-4 h-12 w-12 text-accent-orange/5 group-hover:text-accent-orange/10 transition-colors" />
              <div className="relative z-10 font-sans">
                <span className="font-mono text-accent-orange text-[10px] uppercase tracking-widest font-semibold">Scale & Maintainability</span>
                <p className="mt-3 text-base sm:text-lg text-white font-medium leading-relaxed italic">
                  "The more I build, the more I care about architecture—not just whether the feature works, but whether the system remains understandable after the next ten features."
                </p>
              </div>
            </motion.div>

            {/* Academic Interest Callout */}
            <div className="p-6 rounded-xl border border-accent-teal/10 bg-accent-teal/5 flex items-start gap-4">
              <BookOpen className="h-6 w-6 text-accent-teal shrink-0 mt-0.5" />
              <div className="font-sans text-sm">
                <h4 className="font-bold text-white">Academic Pursuits</h4>
                <p className="text-charcoal-300 mt-1 leading-relaxed">
                  Deeply interested in future graduate research spanning **Artificial Intelligence, Robotics, and IoT** to bridge modular software structures with hardware devices.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row: Team Leadership & Community Experience */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-charcoal-900 pt-16 font-sans">
          
          {/* Team Leadership Card */}
          <motion.div
            className="glass-panel border border-charcoal-800/80 rounded-xl p-6 sm:p-8 relative overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-accent-teal/10 border border-accent-teal/20 text-accent-teal shrink-0">
                <Users className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-bold text-white">
                {teamLeadership.title}
              </h3>
            </div>
            
            <p className="text-sm text-charcoal-350 leading-relaxed mb-6">
              {teamLeadership.description}
            </p>

            <ul className="space-y-3">
              {teamLeadership.keyPoints.map((point, pIdx) => (
                <li key={pIdx} className="text-xs sm:text-sm text-charcoal-300 flex items-start gap-2.5 leading-relaxed">
                  <CheckCircle2 className="h-4 w-4 text-accent-teal shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Community Experience Card */}
          <motion.div
            className="glass-panel border border-charcoal-800/80 rounded-xl p-6 sm:p-8 relative overflow-hidden shadow-lg flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-accent-orange/10 border border-accent-orange/20 text-accent-orange shrink-0">
                  <Heart className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-bold text-white">
                  {community.title}
                </h3>
              </div>
              
              <p className="text-sm text-charcoal-350 leading-relaxed">
                {community.description}
              </p>
            </div>

            {/* Quick visual badge */}
            <div className="mt-8 p-4 rounded-lg bg-charcoal-900/30 border border-charcoal-800/55 text-xs text-charcoal-400">
              <span className="font-mono text-[9px] uppercase tracking-wider font-bold text-accent-orange block mb-1">Volunteering Action</span>
              Assisted packaging and logistical coordination following the southern Türkiye & northern Syria earthquakes.
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
