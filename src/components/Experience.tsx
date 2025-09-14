import React from 'react';
import styles from './Experience.module.css';
import resumeData from '../data/resumeData.json';

export const Experience: React.FC = () => {
  const formatDate = (dateStr: string) => {
    if (!dateStr) return 'Present';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      year: 'numeric' 
    });
  };

  return (
    <section id="experience" className={styles.experience}>
      <div className="container container-narrow">
        <div className={styles.content}>
          <div className={styles.header}>
            <h2 className="reveal">Experience</h2>
          </div>
          
          <div className={styles.timeline}>
            {resumeData.experience.map((exp, index) => (
              <div key={index} className={styles.timelineItem}>
                <div className="reveal">
                  <div className={styles.period}>
                    <span className={styles.startDate}>
                      {formatDate(exp.start)}
                    </span>
                    <span className={styles.separator}>—</span>
                    <span className={styles.endDate}>
                      {formatDate(exp.end)}
                    </span>
                  </div>
                  
                  <div className={styles.details}>
                    <h3 className={styles.role}>{exp.role}</h3>
                    <h4 className={styles.company}>{exp.company}</h4>
                    <p className={styles.location}>{exp.location}</p>
                    
                    <ul className={styles.bulletsList}>
                      {exp.bullets.map((bullet, bulletIndex) => (
                        <li key={bulletIndex} className={styles.bullet}>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Current Focus Section */}
          <div className={styles.currentFocus}>
            <div className="reveal">
              <h3>Current Focus</h3>
              <p>
                Pursuing advanced studies in AI & Data Science while working on 
                innovative projects that combine machine learning with practical 
                web applications. Focused on building production-ready solutions 
                that solve real-world problems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};