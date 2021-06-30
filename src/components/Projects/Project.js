import PropTypes from 'prop-types';
import React from 'react';
import { Image } from '../atoms';

export const Project = (props) => {
  const { name, github, url, img, alt } = props;

  return (
    <div className="project">
      <div className="info">
        <Image src={img} alt={alt} rel="noreferrer" width={20} />
        <p>{name}</p>
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
  github: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  url: PropTypes.string,
};
Project.defaultProps = {
  url: null,
};
