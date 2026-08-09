import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, ShieldAlert, CheckCircle2, AlertCircle, Wrench, Layers } from 'lucide-react';
import type { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            className="w-full max-w-4xl bg-charcoal-900 border border-charcoal-800 rounded-2xl shadow-2xl relative z-10 my-8 overflow-hidden"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            {/* Header image/banner background */}
            <div className="h-44 sm:h-64 bg-gradient-to-r from-charcoal-950 to-charcoal-900 border-b border-charcoal-800 relative flex items-center justify-between px-6 sm:px-10 overflow-hidden">
              <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-accent-teal/5 rounded-full blur-[80px] pointer-events-none -translate-y-1/2"></div>
              
              <div className="relative z-10 max-w-lg">
                <span className="font-mono text-xs uppercase tracking-widest text-accent-teal bg-accent-teal/10 px-3 py-1 rounded-full">
                  {project.category}
                </span>
                <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight">
                  {project.title}
                </h3>
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 rounded-full bg-charcoal-950/80 border border-charcoal-800 text-charcoal-400 hover:text-white hover:border-charcoal-600 transition-all cursor-pointer"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content Area */}
            <div className="p-6 sm:p-10 max-h-[calc(100vh-320px)] overflow-y-auto font-sans space-y-10">
              
              {/* Problem & Approach */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <h4 className="font-display text-lg font-bold text-white flex items-center gap-2">
                    <ShieldAlert className="h-5 w-5 text-accent-orange shrink-0" /> Problem Context
                  </h4>
                  <p className="text-charcoal-300 text-sm sm:text-base leading-relaxed">
                    {project.problem}
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-display text-lg font-bold text-white flex items-center gap-2">
                    <Wrench className="h-5 w-5 text-accent-teal shrink-0" /> Solution Approach
                  </h4>
                  <p className="text-charcoal-300 text-sm sm:text-base leading-relaxed">
                    {project.approach}
                  </p>
                </div>
              </div>

              {/* Architecture Detail */}
              <div className="border-t border-charcoal-800 pt-8 space-y-6">
                <h4 className="font-display text-lg font-bold text-white flex items-center gap-2">
                  <Layers className="h-5 w-5 text-accent-teal" /> Software & System Architecture
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.architecture.map((arch, idx) => (
                    <div key={idx} className="p-5 rounded-xl border border-charcoal-800 bg-charcoal-950/50">
                      <h5 className="font-mono text-sm font-bold text-white border-b border-charcoal-800 pb-2 mb-3">
                        {arch.title}
                      </h5>
                      <ul className="space-y-2">
                        {arch.details.map((detail, dIdx) => (
                          <li key={dIdx} className="text-xs sm:text-sm text-charcoal-400 flex items-start gap-2">
                            <span className="text-accent-teal mt-1 shrink-0">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Challenges & Solutions */}
              <div className="border-t border-charcoal-800 pt-8 space-y-6">
                <h4 className="font-display text-lg font-bold text-white flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-accent-orange" /> Technical Challenges
                </h4>
                <div className="space-y-4">
                  {project.challenges.map((challenge, idx) => (
                    <div key={idx} className="p-5 rounded-xl border border-charcoal-800 bg-charcoal-950/30 space-y-3">
                      <div>
                        <span className="font-mono text-[10px] uppercase text-accent-orange font-bold tracking-widest bg-accent-orange/10 px-2 py-0.5 rounded">
                          Challenge {idx + 1}
                        </span>
                        <p className="text-sm sm:text-base font-medium text-white mt-2">
                          {challenge.description}
                        </p>
                      </div>
                      <div className="border-l-2 border-accent-teal pl-4 py-1">
                        <span className="font-mono text-[10px] uppercase text-accent-teal font-bold tracking-widest block mb-1">
                          Engineering Resolution
                        </span>
                        <p className="text-xs sm:text-sm text-charcoal-400 leading-relaxed">
                          {challenge.solution}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Lessons Learned */}
              <div className="border-t border-charcoal-800 pt-8 space-y-4">
                <h4 className="font-display text-lg font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-accent-teal" /> Key Engineering Lessons
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.lessons.map((lesson, idx) => (
                    <li key={idx} className="p-4 rounded-xl border border-charcoal-800/60 bg-charcoal-900/40 text-xs sm:text-sm text-charcoal-300 flex items-start gap-3">
                      <CheckCircle2 className="h-4 w-4 text-accent-teal shrink-0 mt-0.5" />
                      <span>{lesson}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Badges & CTA Footer */}
              <div className="border-t border-charcoal-800 pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="font-mono text-[11px] font-medium text-charcoal-300 bg-charcoal-800 px-2.5 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2 rounded-lg border border-charcoal-700 bg-charcoal-850 hover:bg-charcoal-850/80 text-white font-sans text-sm font-semibold flex items-center gap-2 transition-colors cursor-pointer"
                    >
                      <Github className="h-4 w-4" /> Code base
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2 rounded-lg bg-accent-teal hover:bg-accent-teal-hover text-charcoal-950 font-sans text-sm font-semibold flex items-center gap-2 transition-colors cursor-pointer"
                    >
                      <ExternalLink className="h-4 w-4" /> Live Demo
                    </a>
                  )}
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
