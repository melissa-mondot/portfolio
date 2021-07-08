import React from 'react';
import { string, arrayOf, obj } from 'prop-types';
import {
  RenderedWrapper,
  ResumeIntro,
  ResumeExpertise,
  ResumeEducation,
  ResumeTechStack,
} from './StyledResume';
import { RenderedExperience } from './RenderedExperience';

export const RenderedResume = ({
  summary,
  expertise,
  experience,
  technicalProficiencies,
  education,
}) => {
  const expertiseList = expertise.join(', ');
  const experienceList = experience.map((listing) => (
    <RenderedExperience key={listing.id} listing={listing} />
  ));
  const edList = education.map((school) => <li>{school}</li>);
  const techStack = technicalProficiencies.join(', ');
  return (
    <>
      <RenderedWrapper>
        <ResumeIntro>
          <h3>Melissa Mondot</h3>
          <h4>Web Developer</h4>
          <p>{summary}</p>
        </ResumeIntro>
        <h4 className="sections">Expertise</h4>
        <ResumeExpertise>
          <p>{expertiseList}</p>
        </ResumeExpertise>
        <h4 className="sections">Experience</h4>
        {experienceList}
        <h4 className="sections">Education</h4>
        <ResumeEducation>
          <ul>{edList}</ul>
        </ResumeEducation>
        <h4 className="sections">Tech Stack</h4>
        <ResumeTechStack>
          <p>{techStack}</p>
        </ResumeTechStack>
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
