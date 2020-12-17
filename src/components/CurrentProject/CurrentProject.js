import React from 'react';
import { StyledCurrentProject } from './CurrentProjectStyles';

const CurrentProject = () => (
  <StyledCurrentProject>
    <h3>
      There is always
      <br />a side project...
    </h3>
    <h5>A Custom UI Kit</h5>
    <p>
      <i className="fab fa-react" aria-label="react" />
      <i aria-label="plus"> + </i>
      <span role="img" aria-label="styled components">
        {' '}
        💅{' '}
      </span>
      <i aria-label="equals"> = </i>
      <span role="img" aria-label="party time">
        {' '}
        🎉{' '}
      </span>
    </p>
    <p className="text-block">
      While I have a lot of side projects, this is one of my favorites. I spend a lot of time on
      projects for local businesses and individuals, and these apps and sites are naturally smaller.
      I realized that the more robust UI libraries that exist are amazing, but often too much for a
      little project -- and so my custom UI kit was born! These are base components with Styled
      Components baked in, so I can just pass props for styling.
      <small>Project in progress...</small>
    </p>
    <a href="https://github.com/melissa-murphy/atom_components" target="blank" rel="noreferrer">
      <i className="fab fa-github fa-2x" />
    </a>
  </StyledCurrentProject>
);

export default CurrentProject;
