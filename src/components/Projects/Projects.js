import React from 'react';
import gli from '../../imgs/gli_home.png';
import sps from '../../imgs/sps_home.png';
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
    </div>
  );
};

export default Projects;
