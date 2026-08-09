import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gamepad2, Database, Laptop, Radio, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Game Dev', 'Desktop App', 'Backend', 'IoT / Robotics'];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Game Dev':
        return <Gamepad2 className="h-4 w-4" />;
      case 'Backend':
        return <Database className="h-4 w-4" />;
      case 'Desktop App':
        return <Laptop className="h-4 w-4" />;
      case 'IoT / Robotics':
        return <Radio className="h-4 w-4" />;
      default:
        return null;
    }
  };

  const filteredProjects = filter === 'All'
    ? portfolioData.projects
    : portfolioData.projects.filter(p => p.category === filter);

  const handleOpenCaseStudy = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id="projects" className="py-24 border-t border-charcoal-900 bg-charcoal-950 relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight">
            Featured Projects
          </h2>
          <div className="w-12 h-1 bg-accent-teal mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-charcoal-400 font-sans text-sm md:text-base">
            Exploring system designs and engineering solutions through practical software, games, and hardware integrations.
          </p>
        </div>

        {/* Filter Tab bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-lg font-sans text-xs md:text-sm font-medium tracking-wide transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                filter === cat
                  ? 'bg-accent-teal text-charcoal-950 shadow-md font-semibold'
                  : 'text-charcoal-400 bg-charcoal-900/50 hover:text-white border border-charcoal-800'
              }`}
            >
              {getCategoryIcon(cat)}
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="glass-panel glass-panel-hover rounded-xl p-6 sm:p-8 flex flex-col justify-between h-full border border-charcoal-800"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-accent-teal font-semibold bg-accent-teal/10 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <span className="font-mono text-[11px] text-charcoal-500">
                      {project.technologies[0]}
                    </span>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white mt-4 tracking-tight group-hover:text-accent-teal">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-charcoal-400 font-sans text-sm leading-relaxed">
                    {project.shortSummary}
                  </p>

                  {/* Architecture Callout Preview */}
                  <div className="mt-5 p-4 rounded-lg bg-charcoal-950/50 border border-charcoal-800/60 font-sans text-xs">
                    <span className="font-mono text-[10px] text-accent-orange font-bold uppercase tracking-wider block mb-1">
                      System Architecture
                    </span>
                    <span className="text-charcoal-300">
                      {project.architecture[0]?.title}: {project.architecture[0]?.details[0]}
                    </span>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-charcoal-900 flex flex-wrap items-center justify-between gap-4">
                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 max-w-[70%]">
                    {project.technologies.slice(1, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="font-mono text-[10px] text-charcoal-400 bg-charcoal-900 px-2 py-0.5 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Details Trigger */}
                  <button
                    onClick={() => handleOpenCaseStudy(project)}
                    className="font-sans text-xs md:text-sm font-semibold text-accent-teal hover:text-accent-teal-hover flex items-center gap-1 cursor-pointer transition-colors group"
                  >
                    View Case Study
                    <ArrowUpRight className="h-4 w-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 font-sans border border-charcoal-800 rounded-xl bg-charcoal-900/10">
            <p className="text-charcoal-400">No projects found in this category yet.</p>
          </div>
        )}

        {/* Case Study Modal Dialog */}
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </section>
  );
};
