import React, { useEffect, useRef } from 'react';
import { Button } from './Button';
import styles from './ProjectModal.module.css';

interface Project {
  name: string;
  slug: string;
  role: string;
  description: string;
  tech: string[];
  image: string;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  isOpen,
  onClose,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const firstFocusableRef = useRef<HTMLButtonElement>(null);
  const lastFocusableRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen) {
      // Trap focus when modal opens
      firstFocusableRef.current?.focus();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    const handleTabTrap = (event: KeyboardEvent) => {
      if (!isOpen || event.key !== 'Tab') return;

      const focusableElements = modalRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      
      if (!focusableElements?.length) return;

      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      if (event.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          event.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          event.preventDefault();
        }
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('keydown', handleTabTrap);

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('keydown', handleTabTrap);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div 
      className={styles.overlay}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className={styles.modal} ref={modalRef}>
        <button
          ref={firstFocusableRef}
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close modal"
        >
          ×
        </button>

        <div className={styles.content}>
          <div className={styles.imageSection}>
            <img
              src={project.image}
              alt={project.name}
              className={styles.image}
            />
          </div>

          <div className={styles.details}>
            <div className={styles.header}>
              <h2 id="modal-title" className={styles.title}>
                {project.name}
              </h2>
              <p className={styles.role}>{project.role}</p>
            </div>

            <div className={styles.description}>
              <h3>About this project</h3>
              <p>{project.description}</p>
            </div>

            <div className={styles.techSection}>
              <h3>Technologies</h3>
              <ul className={styles.techList}>
                {project.tech.map((tech, index) => (
                  <li key={index} className={styles.tech}>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.actions}>
              <Button
                href={`https://github.com/aj3434/${project.slug}`}
                target="_blank"
                variant="primary"
              >
                View Code
              </Button>
              <Button
                onClick={onClose}
                variant="outline"
                ref={lastFocusableRef}
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};