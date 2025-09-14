import React, { useState } from 'react';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import styles from './ProjectsGrid.module.css';
import resumeData from '../data/resumeData.json';

interface Project {
  name: string;
  slug: string;
  role: string;
  description: string;
  tech: string[];
  image: string;
}

export const ProjectsGrid: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.header}>
            <h2 className="reveal">Selected Work</h2>
            <p className="reveal">
              A collection of projects that showcase my experience in 
              AI/ML development, full-stack applications, and innovative 
              problem-solving approaches.
            </p>
          </div>
          
          <div className={styles.grid}>
            {resumeData.projects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={index}
                onOpenModal={handleOpenModal}
              />
            ))}
          </div>
          
          <div className={styles.footer}>
            <div className="reveal">
              <p className={styles.footerText}>
                Want to see more? Check out my{' '}
                <a 
                  href={resumeData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.footerLink}
                >
                  GitHub
                </a>{' '}
                for additional projects and contributions.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};