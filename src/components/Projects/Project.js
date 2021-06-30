import PropTypes from 'prop-types';
import React from 'react';
import { ProjectStyles } from './ProjectStyles';
import { Image } from '../atoms';

export const Project = (props) => {
  const { name, github, url, img, alt } = props;

  return (
    <ProjectStyles>
      <Image src={img} alt={alt} rel="noreferrer" width={20} />
      <small>{name}</small>
      <div className="client">
        <a href={github} rel="noreferrer">
          <i className="fab fa-github fa-2x" />
        </a>
        <a href={url} rel="noreferrer">
          <i className="far fa-browser fa-2x" />
        </a>
      </div>
    </ProjectStyles>
  );
};

Project.propTypes = {
  name: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  url: PropTypes.string,
};
Project.defaultProps = {
  url: null,
};
