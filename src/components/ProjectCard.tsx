import React from 'react';
import styles from './ProjectCard.module.css';

interface Project {
  name: string;
  slug: string;
  role: string;
  description: string;
  tech: string[];
  image: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpenModal: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ 
  project, 
  index, 
  onOpenModal 
}) => {
  return (
    <article className={`${styles.card} reveal`}>
      <button
        className={styles.cardButton}
        onClick={() => onOpenModal(project)}
        aria-label={`View details for ${project.name}`}
      >
        <div className={styles.imageWrapper}>
          <img
            src={project.image}
            alt={project.name}
            className={styles.image}
            loading="lazy"
          />
          <div className={styles.overlay}>
            <span className={styles.viewText}>View Project</span>
          </div>
        </div>
        
        <div className={styles.content}>
          <div className={styles.header}>
            <span className={styles.index}>
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className={styles.title}>{project.name}</h3>
          </div>
          
          <p className={styles.role}>{project.role}</p>
          <p className={styles.description}>{project.description}</p>
          
          <ul className={styles.techList}>
            {project.tech.slice(0, 4).map((tech, techIndex) => (
              <li key={techIndex} className={styles.tech}>
                {tech}
              </li>
            ))}
            {project.tech.length > 4 && (
              <li className={styles.techMore}>
                +{project.tech.length - 4} more
              </li>
            )}
          </ul>
        </div>
      </button>
    </article>
  );
};