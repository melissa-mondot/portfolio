import React from 'react';
// import PropTypes from 'prop-types';

import { ProjectStyles } from './ProjectStyles';
import { Project } from './Project';

import { projects as list } from './projectList';

const Projects = () => (
  <div>
    <h3>Previous and Ongoing Projects</h3>
    <ProjectStyles>
      {list.map((project) => (
        <Project
          key={project.id}
          name={project.name}
          description={project.description}
          description2={project.description2}
          github={project.github}
          url={project.url}
          img={project.img}
          alt={project.alt}
        />
      ))}
    </ProjectStyles>
  </div>
);

export default Projects;

// TODO:
// - images pop and scale on hover
// add projects
