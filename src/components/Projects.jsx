import React from 'react';
import { projectsData } from '../data/projects';
import ProjectCard from './ProjectCard';
import '../styles/projects.css';

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">03. Production</span>
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-underline"></div>
        </div>

        {/* Projects Grid layout */}
        <div className="projects-grid">
          {projectsData.map((project, idx) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={idx} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
