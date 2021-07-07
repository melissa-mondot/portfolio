import React from 'react';
import { string, arrayOf, obj } from 'prop-types';

import {
  RenderedWrapper,
  ResumeIntro,
  ResumeExpertise,
  ResumeExperience,
  ResumeEducation,
  ResumeTechStack,
} from './StyledResume';
// import { resumeData as r } from './resumeData';

export const RenderedResume = ({
  summary,
  expertise,
  experience,
  technicalProficiencies,
  education,
}) => {
  const expertiseList = expertise.join(', ');
  //   const experienceList = experience.map((listing) => (
  //     <Experience key={listing.id} listing={listing} />
  //   ));
  return (
    <>
      <RenderedWrapper>
        <ResumeIntro>
          <h4>Web Developer</h4>
          <p>{summary}</p>
        </ResumeIntro>
        <ResumeExpertise expertiseList={expertiseList} />
        <ResumeExperience experience={experience} />
        <ResumeEducation education={education} />
        <ResumeTechStack technicalProficiencies={technicalProficiencies} />
      </RenderedWrapper>
    </>
  );
};

RenderedResume.propTypes = {
  summary: string.isRequired,
  expertise: arrayOf(string).isRequired,
  experience: arrayOf(obj).isRequired,
  technicalProficiencies: arrayOf(string).isRequired,
  education: arrayOf(string).isRequired,
};
