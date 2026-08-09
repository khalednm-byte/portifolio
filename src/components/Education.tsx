import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Education: React.FC = () => {
  const edu = portfolioData.education[0];

  return (
    <section id="education" className="py-24 border-t border-charcoal-900 bg-charcoal-950/40 relative">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight">
            Education
          </h2>
          <div className="w-12 h-1 bg-accent-teal mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-charcoal-400 font-sans text-sm md:text-base">
            Academic foundation and core subjects of study.
          </p>
        </div>

        {/* Education Timeline / Box */}
        <motion.div
          className="glass-panel rounded-2xl p-6 sm:p-10 border border-charcoal-800 shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 pb-8 border-b border-charcoal-900">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-accent-teal/10 border border-accent-teal/20 text-accent-teal shrink-0">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div className="font-sans">
                <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                  {edu.institution}
                </h3>
                <p className="text-sm font-semibold text-accent-teal mt-1">
                  {edu.degree}
                </p>
                <p className="text-xs text-charcoal-400 mt-0.5">
                  {edu.location}
                </p>
              </div>
            </div>

            <div className="text-left md:text-right font-mono shrink-0">
              <span className="px-3 py-1 rounded bg-charcoal-900 border border-charcoal-800 text-xs text-charcoal-300 font-semibold">
                {edu.period}
              </span>
              <p className="text-xs text-accent-orange font-semibold mt-2.5">
                Instruction Language: English
              </p>
            </div>
          </div>

          {/* Details / Coursework Grid */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider font-display mb-4">
                Core Program Subjects
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-charcoal-300">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-accent-teal shrink-0" />
                  <span>OOP (Java)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-accent-teal shrink-0" />
                  <span>Data Structures</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-accent-teal shrink-0" />
                  <span>Algorithms</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-accent-teal shrink-0" />
                  <span>Software Architecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-accent-teal shrink-0" />
                  <span>Databases (SQL)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-accent-teal shrink-0" />
                  <span>Computer Networks</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-accent-teal shrink-0" />
                  <span>Operating Systems</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-accent-teal shrink-0" />
                  <span>SDLC Processes</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider font-display mb-4">
                Academic Experience
              </h4>
              <ul className="space-y-3">
                {edu.details.map((detail, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-charcoal-350 flex items-start gap-2.5 leading-relaxed">
                    <span className="text-accent-teal shrink-0 mt-1">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Certifications Block */}
          <div className="mt-8 pt-8 border-t border-charcoal-900 font-sans">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-display flex items-center gap-2 mb-4">
              <Award className="h-4 w-4 text-accent-teal" /> Certifications & Achievements
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-charcoal-800 bg-charcoal-900/30 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-white">C++ Intermediate</p>
                  <p className="text-xs text-charcoal-400 mt-0.5">SoloLearn Certification</p>
                </div>
                <span className="text-xs text-accent-teal font-mono">Verified</span>
              </div>
              <div className="p-4 rounded-xl border border-charcoal-800 bg-charcoal-900/30 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-white">SQL Intermediate</p>
                  <p className="text-xs text-charcoal-400 mt-0.5">SoloLearn Certification</p>
                </div>
                <span className="text-xs text-accent-teal font-mono">Verified</span>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};
