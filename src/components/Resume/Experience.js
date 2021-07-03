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
        <code>company: {listing.company},</code>
      </p>
      <p className="codeIndent">
        <code>title: {listing.title},</code>
      </p>
      <p className="codeIndent">
        <code>date: {listing.date},</code>
      </p>
      <p className="codeIndent">
        <code>description: {listing.description},</code>
      </p>
      <p className="codeIndent">
        <code>highlights: </code>
        {highlights}
      </p>
      {`},`}
    </div>
  );
};

Experience.propTypes = {
  listing: string.isRequired,
};
