import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ProjectCard } from '../src/components/ProjectCard';

const mockProject = {
  name: 'Test Project',
  slug: 'test-project',
  role: 'Full Stack Developer',
  description: 'This is a test project description.',
  tech: ['React', 'TypeScript', 'CSS'],
  image: '/test-image.jpg'
};

const mockOnOpenModal = () => {};

describe('ProjectCard', () => {
  it('renders project information correctly', () => {
    render(
      <ProjectCard 
        project={mockProject} 
        index={0} 
        onOpenModal={mockOnOpenModal} 
      />
    );

    expect(screen.getByText('Test Project')).toBeInTheDocument();
    expect(screen.getByText('Full Stack Developer')).toBeInTheDocument();
    expect(screen.getByText('This is a test project description.')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('CSS')).toBeInTheDocument();
  });

  it('displays the correct index', () => {
    render(
      <ProjectCard 
        project={mockProject} 
        index={2} 
        onOpenModal={mockOnOpenModal} 
      />
    );

    expect(screen.getByText('03')).toBeInTheDocument();
  });

  it('has accessible button with correct aria-label', () => {
    render(
      <ProjectCard 
        project={mockProject} 
        index={0} 
        onOpenModal={mockOnOpenModal} 
      />
    );

    const button = screen.getByRole('button', { 
      name: 'View details for Test Project' 
    });
    expect(button).toBeInTheDocument();
  });
});