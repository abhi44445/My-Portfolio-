import React from 'react';
import { Button } from './Button';
import styles from './Hero.module.css';
import resumeData from '../data/resumeData.json';

export const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.nameSection}>
            <h1 className={styles.name}>
              <span className={styles.firstName}>
                {resumeData.name.split(' ')[0]}
              </span>
              <span className={styles.lastName}>
                {resumeData.name.split(' ').slice(1).join(' ')}
              </span>
            </h1>
          </div>
          
          <div className={styles.details}>
            <div className={styles.titleWrapper}>
              <p className={styles.title}>{resumeData.title}</p>
              <p className={styles.location}>{resumeData.contact.location}</p>
            </div>
            
            <div className={styles.summary}>
              <p>{resumeData.summary}</p>
            </div>
            
            <div className={styles.actions}>
              <Button
                onClick={() => scrollToSection('projects')}
                variant="primary"
                size="lg"
              >
                View Work
              </Button>
              <Button
                onClick={() => scrollToSection('contact')}
                variant="secondary"
                size="lg"
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
        
        <div className={styles.scroll}>
          <button
            onClick={() => scrollToSection('about')}
            className={styles.scrollButton}
          >
            <span className={styles.scrollText}>Scroll</span>
            <div className={styles.scrollIndicator}>
              <div className={styles.scrollDot}></div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};