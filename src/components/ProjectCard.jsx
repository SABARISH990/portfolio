import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Github, ExternalLink } from "lucide-react";
import "../styles/projects.css";

export default function ProjectCard({ project, index }) {
  const ref = useRef(null);

  // Repeats every time the card enters/leaves viewport
  const isInView = useInView(ref, {
    once: false,
    amount: 0.25,
  });

  return (
    <motion.div
      ref={ref}
      className="project-card glass-card"
      initial={{
        opacity: 0,
        x: 200, // Start from RIGHT
      }}
      animate={{
        opacity: isInView ? 1 : 0,
        x: isInView ? 0 : 200, // Reset to RIGHT
      }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: "easeOut",
      }}
      whileHover={{
        y: -12,
        scale: 1.03,
        transition: { duration: 0.3 },
      }}
    >
      {/* Project Image */}
      <div className="project-img-wrapper">
        <img
          src={project.image}
          alt={project.title}
          className="project-img"
          loading="lazy"
        />
        <div className="project-img-overlay"></div>
      </div>

      {/* Project Content */}
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>

        <p className="project-desc">
          {project.description}
        </p>

        {/* Technology Tags */}
        <div className="project-tags">
          {project.technologies.map((tech, idx) => (
            <span key={idx} className="project-tag">
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="project-actions">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="project-btn project-btn-secondary"
          >
            <Github size={16} />
            GitHub
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="project-btn project-btn-primary"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}