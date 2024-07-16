import React from 'react';
import ProjectCard from './ProjectCard';

interface Project {
  title: string;
  description: string;
  skills: string[];
  types: string[];
  githubLink?: string;
  projectLink?: string;
  imageUrl: string;
}

interface ProjectListProps {
  projects: Project[];
  activeFilter: string;
}

const ProjectList: React.FC<ProjectListProps> = ({ projects, activeFilter }) => {
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter((project) => project.types.includes(activeFilter));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredProjects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default ProjectList;

