import PropTypes from 'prop-types';
import React from 'react';
import { Image } from '../atoms';

export const Project = (props) => {
  const { name, description, description2, github, url, img, alt } = props;
  return (
    <div className="project">
      <div className="info">
        <Image src={img} alt={alt} rel="noreferrer" width={20} />
        <h4>{name}</h4>
        <p>{description}</p>
        <small>{description2}</small>
        <div className="links">
          <a href={github} rel="noreferrer">
            <i className="fab fa-github fa-2x" />
          </a>
          <a href={url} rel="noreferrer">
            <i className="far fa-browser fa-2x" />
          </a>
        </div>
      </div>
    </div>
  );
};

Project.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  description2: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  url: PropTypes.string,
};
Project.defaultProps = {
  url: null,
};
