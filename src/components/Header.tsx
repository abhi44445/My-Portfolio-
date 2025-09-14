import React from 'react';
import { Button } from './Button';
import styles from './Header.module.css';
import resumeData from '../data/resumeData.json';

export const Header: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.nav}>
          <div className={styles.logo}>
            <button
              onClick={() => scrollToSection('hero')}
              className={styles.logoButton}
            >
              {resumeData.name.split(' ')[0]}
            </button>
          </div>
          
          <nav className={styles.navigation}>
            <ul className={styles.navList}>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className={styles.navLink}
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('experience')}
                  className={styles.navLink}
                >
                  Experience
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('projects')}
                  className={styles.navLink}
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className={styles.navLink}
                >
                  Contact
                </button>
              </li>
              <li>
                <Button
                  href="/resume.pdf"
                  target="_blank"
                  variant="outline"
                  size="sm"
                >
                  Resume
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};