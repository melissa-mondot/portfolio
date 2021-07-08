import React from 'react';
import { string } from 'prop-types';
import { ResumeExperience } from './StyledResume';

export const RenderedExperience = ({ listing }) => {
  const highlights = listing.highlights.map((items) => items).map((item) => <li>{item}</li>);
  return (
    <>
      <ResumeExperience>
        <h4>{listing.company}</h4>
        <p className="renderedTitle">{listing.title}</p>
        <small>{listing.date}</small>
        <p>{listing.description}</p>
        <ul>{highlights}</ul>
      </ResumeExperience>
    </>
  );
};

RenderedExperience.propTypes = {
  listing: string.isRequired,
};
