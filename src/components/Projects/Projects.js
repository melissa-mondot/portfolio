import React from 'react';
import gli from '../../imgs/gli_home.png';
import sps from '../../imgs/sps_home.png';
import { ProjectStyles } from './ProjectStyles';
import { Project } from './Project';

const Projects = () => {
  const projects = [
    {
      id: 'gliNorcal',
      name: 'GLI Norcal Landscape Construction',
      github: 'https://github.com/melissa-mondot/glinorcaldev',
      url: null,
      img: gli,
      alt: "Screenshot of GLI Norcal Landscape Construction's homepage",
    },
    {
      id: 'sps',
      name: 'Sacramento Philatelic Society',
      github: 'https://github.com/melissa-mondot/stampSociety',
      url: null,
      img: sps,
      alt: "Screenshot of Sacramento Philatelic Society's homepage",
    },
  ];
  return (
    <div>
      {' '}
      <h3>Previous and Ongoing Projects</h3>
      <ProjectStyles>
        {projects.map((project) => (
          <Project
            key={project.id}
            name={project.name}
            github={project.github}
            url={project.url}
            img={project.img}
            alt={project.alt}
          />
        ))}
      </ProjectStyles>
    </div>
  );
};

export default Projects;

// TODO:
// - images pop and scale on hover
// add projects
