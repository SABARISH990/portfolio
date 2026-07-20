import React from 'react';
import { motion } from 'motion/react';
import { 
  Code, Layers, Blocks, Cpu, Server, Terminal, Database, 
  GitBranch, Github, Send, HelpCircle 
} from 'lucide-react';
import '../styles/skills.css';

// Map key values to generic/premium compile-safe Lucide icons
const resolveIcon = (iconName) => {
  switch (iconName.toLowerCase()) {
    case 'html':
      return <Code size={18} />;
    case 'css':
      return <Layers size={18} />;
    case 'js':
      return <Blocks size={18} />;
    case 'react':
      return <Cpu size={18} />;
    case 'node':
      return <Server size={18} />;
    case 'express':
      return <Terminal size={18} />;
    case 'database':
      return <Database size={18} />;
    case 'terminal':
      return <Terminal size={18} />;
    case 'cpu':
      return <Cpu size={18} />;
    case 'gitbranch':
      return <GitBranch size={18} />;
    case 'github':
      return <Github size={18} />;
    case 'code':
      return <Code size={18} />;
    case 'send':
      return <Send size={18} />;
    default:
      return <HelpCircle size={18} />;
  }
};

export default function SkillCard({ category, index }) {
  return (
    <motion.div
      className="glass-card skill-category-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <h3 className="skill-category-title">
        <span className="gradient-text">{category.title}</span>
      </h3>

      <div className="skills-list">
        {category.skills.map((skill, idx) => (
          <div key={idx} className="skill-item">
            <div className="skill-info">
              <div className="skill-name-wrap" style={{ color: skill.color }}>
                <span className="skill-icon-indicator" style={{ backgroundColor: skill.color }}></span>
                {resolveIcon(skill.icon)}
                <span style={{ color: '#ffffff', marginLeft: '4px' }}>{skill.name}</span>
              </div>
              <span className="skill-percentage">{skill.level}%</span>
            </div>
            
            {/* Animated skill progress bar */}
            <div className="skill-bar-bg">
              <motion.div
                className="skill-bar-fill"
                style={{ background: `linear-gradient(90deg, ${skill.color}, #ffffff)` }}
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 + idx * 0.05 }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
