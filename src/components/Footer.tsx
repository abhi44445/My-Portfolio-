import React from 'react';
import styles from './Footer.module.css';
import resumeData from '../data/resumeData.json';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.info}>
              <h3 className={styles.name}>{resumeData.name}</h3>
              <p className={styles.title}>{resumeData.title}</p>
              <p className={styles.location}>{resumeData.contact.location}</p>
            </div>
            
            <button 
              onClick={scrollToTop}
              className={styles.backToTop}
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <div className={styles.arrow}>↑</div>
            </button>
          </div>
          
          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <h4>Connect</h4>
              <ul>
                <li>
                  <a 
                    href={`mailto:${resumeData.contact.email}`}
                    className={styles.link}
                  >
                    Email
                  </a>
                </li>
                <li>
                  <a 
                    href={resumeData.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a 
                    href={resumeData.contact.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    Website
                  </a>
                </li>
              </ul>
            </div>
            
            <div className={styles.linkGroup}>
              <h4>Resources</h4>
              <ul>
                <li>
                  <a 
                    href="/resume.pdf"
                    target="_blank"
                    className={styles.link}
                  >
                    Resume
                  </a>
                </li>
                <li>
                  <button
                    onClick={() => {
                      const element = document.getElementById('projects');
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={styles.link}
                  >
                    Projects
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      const element = document.getElementById('experience');
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={styles.link}
                  >
                    Experience
                  </button>
                </li>
              </ul>
            </div>
          </div>
          
          <div className={styles.bottom}>
            <div className={styles.copyright}>
              <p>
                © {currentYear} {resumeData.name}. All rights reserved.
              </p>
              <p className={styles.designNote}>
                Design inspired by{' '}
                <a 
                  href="https://www.niccolomiranda.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.designLink}
                >
                  Niccolò Miranda
                </a>
                . Built with React & TypeScript.
              </p>
            </div>
            
            <div className={styles.buildInfo}>
              <p>Last updated: {new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};