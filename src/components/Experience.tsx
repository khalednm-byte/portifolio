import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const experiences = portfolioData.experience;

  return (
    <section id="experience" className="py-24 border-t border-charcoal-900 bg-charcoal-950/40 relative">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight">
            Work Experience
          </h2>
          <div className="w-12 h-1 bg-accent-orange mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-charcoal-400 font-sans text-sm md:text-base">
            Professional exposure and technical training completed during internships.
          </p>
        </div>

        {/* Timeline Path */}
        <div className="relative border-l-2 border-charcoal-800 ml-4 md:ml-32 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className="relative pl-8 md:pl-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              {/* Timeline dot icon */}
              <div className="absolute -left-[17px] top-1.5 p-1.5 rounded-full bg-charcoal-950 border-2 border-accent-orange text-accent-orange">
                <Briefcase className="h-4 w-4" />
              </div>

              {/* Date Column for Desktop */}
              <div className="hidden md:block absolute -left-32 top-2 text-right w-24">
                <span className="font-mono text-xs text-charcoal-450 tracking-wider font-semibold block">
                  {exp.period.split(' - ')[0]}
                </span>
                <span className="font-mono text-[10px] text-charcoal-500 block mt-1">
                  {exp.period.split(' - ')[1]}
                </span>
              </div>

              {/* Experience Card */}
              <div className="glass-panel rounded-xl p-6 sm:p-8 border border-charcoal-800/80 shadow-md">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-white">
                      {exp.role}
                    </h3>
                    <p className="font-sans text-sm font-semibold text-accent-orange mt-1">
                      {exp.company}
                    </p>
                  </div>
                  
                  {/* Meta Details */}
                  <div className="flex flex-col items-start sm:items-end gap-1.5 text-xs text-charcoal-450 font-sans">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" /> {exp.location}
                    </span>
                    <span className="flex items-center gap-1 md:hidden">
                      <Calendar className="h-3.5 w-3.5" /> {exp.period}
                    </span>
                  </div>
                </div>

                {/* Highlights List */}
                <ul className="mt-6 space-y-2.5">
                  {exp.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="font-sans text-xs sm:text-sm text-charcoal-350 flex items-start gap-2.5 leading-relaxed">
                      <span className="text-accent-orange shrink-0 mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies tag group */}
                <div className="mt-8 pt-4 border-t border-charcoal-900 flex flex-wrap items-center gap-2">
                  <Terminal className="h-3.5 w-3.5 text-charcoal-500 shrink-0" />
                  <span className="font-mono text-[10px] text-charcoal-500 mr-2 uppercase tracking-wider font-bold">Stack:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="font-mono text-[10px] text-charcoal-300 bg-charcoal-900 px-2 py-0.5 rounded border border-charcoal-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
