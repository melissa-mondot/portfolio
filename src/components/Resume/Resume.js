import React from 'react';
import { string, arrayOf, obj } from 'prop-types';
import { ResumeTab, ResumeWrapper } from './StyledResume';
import { Experience } from './Experience';

export const ObjResume = ({
  summary,
  expertise,
  experience,
  technicalProficiencies,
  education,
}) => {
  const expertiseList = expertise.join(', ');
  const experienceList = experience.map((listing) => (
    <Experience key={listing.id} listing={listing} />
  ));
  const technicalList = technicalProficiencies.map((techItem) => (
    <p className="codeIndent">
      <code>{techItem}, </code>
    </p>
  ));
  const edList = education.map((edItem) => (
    <p className="codeIndent">
      <code>{edItem}, </code>
    </p>
  ));

  return (
    <>
      <ResumeTab>
        <p>
          <i className="fab fa-js-square" />
          Resume.js
        </p>
      </ResumeTab>
      <ResumeWrapper>
        <p>
          <code>
            <span className="fakeExport">export const </span>
            <span className="fakeComponent">Resume</span> = {`{`}
          </code>
        </p>
        <code className="resumeDataKey">summary: </code>
        <p className="codeIndent">
          <code>{summary}</code>
          <span>,</span>
        </p>
        <code className="resumeDataKey">expertise: </code>
        <span> [</span>
        <p className="codeIndent">
          <code>{expertiseList}</code>
          <span> ],</span>
        </p>
        <code className="resumeDataKey">experience: </code>
        <span> [</span>
        <p className="codeIndent">
          {experienceList}
          <span> ],</span>
        </p>
        <code className="resumeDataKey">technicalProficiencies: </code>
        <span> [</span>
        <p className="codeIndent">
          {technicalList}
          <span>] </span>
        </p>
        <code className="resumeDataKey">education: </code>
        <span> [</span>
        <p className="codeIndent">
          {edList}
          <span>] </span>
        </p>
      </ResumeWrapper>
    </>
  );
};

ObjResume.propTypes = {
  summary: string.isRequired,
  expertise: arrayOf(string).isRequired,
  experience: arrayOf(obj).isRequired,
  technicalProficiencies: arrayOf(string).isRequired,
  education: arrayOf(string).isRequired,
};
