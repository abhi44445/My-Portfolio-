import React from 'react';
import styles from './About.module.css';
import resumeData from '../data/resumeData.json';

export const About: React.FC = () => {
  return (
    <section id="about" className={styles.about}>
      <div className="container container-narrow">
        <div className={styles.content}>
          <div className={styles.header}>
            <h2 className="reveal">About</h2>
          </div>
          
          <div className={styles.grid}>
            <div className={styles.bio}>
              <div className="reveal">
                <h3>Background</h3>
                <p>{resumeData.summary}</p>
                <p>
                  Currently pursuing {resumeData.education[0].degree} at{' '}
                  {resumeData.education[0].institution}, I'm passionate about
                  building innovative solutions that bridge AI and full-stack
                  development.
                </p>
              </div>
            </div>
            
            <div className={styles.skills}>
              <div className="reveal">
                <h3>Skills</h3>
                <ul className={styles.skillsList}>
                  {resumeData.skills.map((skill, index) => (
                    <li key={index} className={styles.skill}>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className={styles.education}>
              <div className="reveal">
                <h3>Education</h3>
                <div className={styles.educationList}>
                  {resumeData.education.map((edu, index) => (
                    <div key={index} className={styles.educationItem}>
                      <h4>{edu.degree}</h4>
                      <p className={styles.institution}>{edu.institution}</p>
                      {edu.cgpa && <p className={styles.grade}>CGPA: {edu.cgpa}</p>}
                      {edu.year && <p className={styles.year}>{edu.year}</p>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className={styles.contact}>
              <div className="reveal">
                <h3>Get in Touch</h3>
                <div className={styles.contactLinks}>
                  <a 
                    href={`mailto:${resumeData.contact.email}`}
                    className={styles.contactLink}
                  >
                    Email
                  </a>
                  <a 
                    href={resumeData.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.contactLink}
                  >
                    GitHub
                  </a>
                  <a 
                    href={resumeData.contact.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.contactLink}
                  >
                    Website
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};