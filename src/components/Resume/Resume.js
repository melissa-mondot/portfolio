import React from 'react';
import { ResumeTab, ResumeWrapper } from './StyledResume';
import { Experience } from './Experience';
import { resumeData as r } from './resumeData';

const DevResume = () => {
  const expertiseList = r.expertise.map((item) => item).join(', ');

  const experienceList = Array.from(r.experience.map((item) => item))
    .map((el) => el)
    .map((listing) => <Experience key={listing.id} listing={listing} />);

  const technicalList = r.technicalProficiencies.map((techItem) => (
    <p className="codeIndent">
      <code>{techItem}, </code>
    </p>
  ));

  const edList = r.education.map((edItem) => (
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
          <code>{r.summary}</code>
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

export default DevResume;
