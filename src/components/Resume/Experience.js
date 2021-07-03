import React from 'react';
import { string } from 'prop-types';

export const Experience = ({ listing }) => {
  const highlights = listing.highlights
    .map((items) => items)
    .map((item) => (
      <p className="codeIndent">
        <code>- {item}</code>
      </p>
    ));

  return (
    <div>
      {`{`}
      <p className="codeIndent">
        <code>
          <span className="expKeys">company:</span> {listing.company},
        </code>
      </p>
      <p className="codeIndent">
        <code>
          <span className="expKeys">title:</span> {listing.title},
        </code>
      </p>
      <p className="codeIndent">
        <code>
          <span className="expKeys">date:</span> {listing.date},
        </code>
      </p>
      <p className="codeIndent">
        <code>
          <span className="expKeys">description:</span> {listing.description},
        </code>
      </p>
      <p className="codeIndent">
        <code>
          <span className="expKeys">highlights:</span>{' '}
        </code>
        {highlights}
      </p>
      {`},`}
    </div>
  );
};

Experience.propTypes = {
  listing: string.isRequired,
};
