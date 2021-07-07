import React from 'react';
import { string } from 'prop-types';

export const RenderedExperience = ({ experience }) => (
  <>
    <p>{experience}</p>
  </>
);

RenderedExperience.propTypes = {
  experience: string.isRequired,
};
