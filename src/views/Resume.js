import React, { useState } from 'react';
import { resumeData as r } from '../components/Resume/resumeData';
import { RenderButton } from '../components/Resume/StyledResume';
import { ObjResume } from '../components/Resume/Resume';
import { RenderedResume } from '../components/Resume/ResumeRendered';

const Resume = () => {
  const [isRendering, setIsRendering] = useState(false);
  const expertise = r.expertise.map((topic) => topic);
  const experience = r.experience.map((position) => position);
  const technicalProficiencies = r.technicalProficiencies.map((tech) => tech);
  const education = r.education.map((school) => school);

  const toggleRender = (e) => {
    e.preventDefault();
    return isRendering === false ? setIsRendering(true) : setIsRendering(false);
  };
  const toggleResumes =
    isRendering === false ? (
      <ObjResume
        summary={r.summary}
        expertise={expertise}
        experience={experience}
        technicalProficiencies={technicalProficiencies}
        education={education}
      />
    ) : (
      <RenderedResume
        summary={r.summary}
        expertise={expertise}
        experience={experience}
        technicalProficiencies={technicalProficiencies}
        education={education}
      />
    );

  return (
    <>
      <RenderButton onClick={toggleRender}>Render Me!</RenderButton>
      {toggleResumes}
    </>
  );
};

export default Resume;
