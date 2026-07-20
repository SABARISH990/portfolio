import React from 'react';
import { skillCategories } from '../data/skills';
import SkillCard from './SkillCard';
import '../styles/skills.css';

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">02. Capabilities</span>
          <h2 className="section-title">Technical Expertise</h2>
          <div className="section-underline"></div>
        </div>

        {/* Categories Grid */}
        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <SkillCard 
              key={idx} 
              category={category} 
              index={idx} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
