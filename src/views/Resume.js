import React from 'react';
import { resumeData as r } from '../components/Resume/resumeData';
import DevResume from '../components/Resume/Resume';
import { RenderedResume } from '../components/Resume/ResumeRendered';

const Resume = () => {
  const expertise = r.expertise.map((topic) => topic);
  const experience = r.experience.map((position) => position);
  const technicalProficiencies = r.technicalProficiencies.map((tech) => tech);
  const education = r.education.map((school) => school);
  return (
    <>
      <DevResume
        summary={r.summary}
        expertise={expertise}
        experience={experience}
        technicalProficiencies={technicalProficiencies}
        education={education}
      />
      <RenderedResume
        summary={r.summary}
        expertise={expertise}
        experience={experience}
        technicalProficiencies={technicalProficiencies}
        education={education}
      />
    </>
  );
};

export default Resume;
