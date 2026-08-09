import React from 'react';
import { motion } from 'framer-motion';
import { Shield, BrainCircuit } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const categories = portfolioData.skills;

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Primary':
        return 'text-accent-teal bg-accent-teal/10 border-accent-teal/20';
      case 'Experienced with':
        return 'text-sky-400 bg-sky-500/10 border-sky-500/20';
      case 'Familiar with':
        return 'text-charcoal-350 bg-charcoal-900 border-charcoal-800';
      case 'Currently learning':
        return 'text-accent-orange bg-accent-orange/10 border-accent-orange/20';
      default:
        return 'text-charcoal-400 bg-charcoal-900 border-charcoal-850';
    }
  };

  return (
    <section id="skills" className="py-24 border-t border-charcoal-900 bg-charcoal-950 relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight">
            Technical Skills
          </h2>
          <div className="w-12 h-1 bg-accent-teal mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-charcoal-400 font-sans text-sm md:text-base">
            Categorized technical stack classified by experience and proficiency levels.
          </p>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12 border-b border-charcoal-900 pb-8 max-w-xl mx-auto">
          <span className="font-sans text-xs text-charcoal-450 uppercase tracking-wider font-bold flex items-center gap-1.5">
            <BrainCircuit className="h-3.5 w-3.5 text-accent-teal" /> Skill Levels:
          </span>
          <span className="font-mono text-[10px] px-2.5 py-1 rounded border text-accent-teal bg-accent-teal/10 border-accent-teal/20">
            Primary
          </span>
          <span className="font-mono text-[10px] px-2.5 py-1 rounded border text-sky-400 bg-sky-500/10 border-sky-500/20">
            Experienced
          </span>
          <span className="font-mono text-[10px] px-2.5 py-1 rounded border text-charcoal-350 bg-charcoal-900 border-charcoal-850">
            Familiar
          </span>
          <span className="font-mono text-[10px] px-2.5 py-1 rounded border text-accent-orange bg-accent-orange/10 border-accent-orange/20">
            Learning
          </span>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              className="glass-panel rounded-xl p-6 border border-charcoal-800/80 hover:border-charcoal-700/60 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <h3 className="font-display text-base sm:text-lg font-bold text-white flex items-center gap-2 border-b border-charcoal-900 pb-3 mb-4">
                <Shield className="h-4 w-4 text-accent-teal" /> {cat.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className={`font-mono text-xs px-2.5 py-1 rounded border transition-all duration-300 ${getLevelColor(skill.level)}`}
                  >
                    {skill.name}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
