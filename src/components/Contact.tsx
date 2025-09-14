import React from 'react';
import { Button } from './Button';
import styles from './Contact.module.css';
import resumeData from '../data/resumeData.json';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className="container container-narrow">
        <div className={styles.content}>
          <div className={styles.header}>
            <h2 className="reveal">Let's Work Together</h2>
            <p className="reveal">
              I'm always interested in new opportunities and collaborative 
              projects. Whether you're looking for AI/ML solutions, full-stack 
              development, or innovative web applications, let's discuss how 
              we can bring your ideas to life.
            </p>
          </div>
          
          <div className={styles.contactGrid}>
            <div className={styles.contactMethods}>
              <div className="reveal">
                <h3>Get in Touch</h3>
                <div className={styles.methodsList}>
                  <a 
                    href={`mailto:${resumeData.contact.email}`}
                    className={styles.method}
                  >
                    <span className={styles.methodLabel}>Email</span>
                    <span className={styles.methodValue}>
                      {resumeData.contact.email}
                    </span>
                  </a>
                  
                  <a 
                    href={`tel:${resumeData.contact.phone}`}
                    className={styles.method}
                  >
                    <span className={styles.methodLabel}>Phone</span>
                    <span className={styles.methodValue}>
                      {resumeData.contact.phone}
                    </span>
                  </a>
                  
                  <div className={styles.method}>
                    <span className={styles.methodLabel}>Location</span>
                    <span className={styles.methodValue}>
                      {resumeData.contact.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={styles.socialLinks}>
              <div className="reveal">
                <h3>Find Me Online</h3>
                <div className={styles.linksList}>
                  <a 
                    href={resumeData.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                  >
                    <span className={styles.linkLabel}>GitHub</span>
                    <span className={styles.linkUrl}>
                      {resumeData.contact.github.replace('https://', '')}
                    </span>
                  </a>
                  
                  <a 
                    href={resumeData.contact.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                  >
                    <span className={styles.linkLabel}>Website</span>
                    <span className={styles.linkUrl}>
                      {resumeData.contact.website.replace('https://', '')}
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.actions}>
            <div className="reveal">
              <div className={styles.actionButtons}>
                <Button
                  href={`mailto:${resumeData.contact.email}?subject=Project Collaboration`}
                  variant="primary"
                  size="lg"
                >
                  Send Message
                </Button>
                <Button
                  href="/resume.pdf"
                  target="_blank"
                  variant="secondary"
                  size="lg"
                >
                  Download Resume
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};