import React from 'react';
import { ResumeTab, ResumeWrapper } from './StyledResume';
import { resumeData as r } from './resumeData';

const DevResume = () => (
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
        <code>{r.summary},</code>
      </p>
      <code className="resumeDataKey">expertise: </code>
      <p className="codeIndent">
        <code>{r.expertise},</code>
      </p>
    </ResumeWrapper>
  </>
);

export default DevResume;
