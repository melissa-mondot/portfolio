import React from "react";
import {
  ResumeWrapper,
  ResumeIntro,
  ResumeExpertise,
  ResumeExperience,
  ResumeEducation,
  ResumeTechStack,
} from "./ResumeStyles";

const DevResume = () => {
  return (
    <>
      <ResumeWrapper>
        <ResumeIntro>
          <h4>Frontend Development</h4>
          <p>
            Accomplished full stack web developer with solid background in
            marketing and business development. Demonstrated ability to increase
            businesses’ online presence by creating creative websites and
            ensuring availability of required IT services. Instrumental in
            producing new concepts and ideas for the achievement of set targets
            without compromising quality. Excel at state-management (Context
            API, Hooks, and Redux) as well as Express API, and UI libraries like
            react-strap and react-spring. Well versed in achieving business,
            branding, and marketing objectives using development tools and best
            practices along with professional relationship building with
            clients, stakeholders, and multi-disciplinary functions.{" "}
          </p>
        </ResumeIntro>
        <ResumeExpertise>
          <h3>Areas Of Expertise</h3>
          <ul>
            <li>Project Management</li>
            <li>Full stack Web Development</li>
            <li>JavaScript(React), Node.js</li>
            <li>Sass/Less & CSS Animations</li>
          </ul>
          <ul>
            <li>Clients' Needs Assesment</li>
            <li>Business Development</li>
            <li>Inbound & Outbound Marketing</li>
            <li>Development Tools Utilization</li>
          </ul>
          <ul>
            <li>Leadership & Training</li>
            <li>Concept Creation</li>
            <li>Graphic Design</li>
            <li>SEO & Context Writing</li>
          </ul>
        </ResumeExpertise>
        <ResumeExperience>
          <h3>Professional Experience</h3>
          <h4>
            Lambda School, San Francisco
            <br />
            Section Lead, Full Stack Web Developer
          </h4>
          <p>
            Direct a team of over 15 team leaders (TLs), while providing support
            in communication and scheduling from external associates. Facilitate
            students and TLs to develop soft and coding skills. Deliver guidance
            to up to 150 students on full stack web development program. Improve
            student’s performance outcomes by coordinating section instructions
            and student success initiatives. Devise new coaching ideas from
            statistics based on data points and students’ feedback.
          </p>
          <ul>
            <li>
              Created various methods as best practices of tracking/supporting
              the students, saving up to five hours (weekly) of admin work.
            </li>
            <li>
              {" "}
              Successfully guided three cohorts through Full Stack Web
              Development and Computer Science programs.{" "}
            </li>
          </ul>
          <h4>
            Various Clients, SF Bay Area
            <br />
            Freelance Web Developer for Small Businesses
          </h4>
          <p>
            Assess clients’ business needs and provide web-based solutions such
            as web development, graphic designing, and SEO and content writing.
            Initiate inbound marketing as part of brand development, increasing
            market presence of the business.
          </p>
          <ul>
            <li>
              Ensured timely creation and expansion of online visibility for
              over five clients.{" "}
            </li>
          </ul>
          <h4>
            GLI Norcal Landscape, Greenbrae
            <br />
            Business Development Officer
          </h4>
          <p>
            Carried out branding with associated in/outbound marketing, managing
            web development and increasing web presence. Ensured availability of
            required IT services.{" "}
          </p>
          <ul>
            <li>
              Played a key role as general idea creator to promote the brand and
              achieve set milestones.{" "}
            </li>
            <li>
              Resurfaced the company after the great recession from 2012 to 2015
              via rebranding and rebooting of the company.
            </li>
          </ul>
        </ResumeExperience>
        <ResumeEducation>
          <h3>Education</h3>
          <h4>Full Stack Web</h4>
          <p>
            Lambda School, San Francisco, <em>(Current)</em>
          </p>
          <h4>Bachelor of Arts (Graduated Magna Cum Laude)</h4>
          <p>California State University, Sacramento</p>
        </ResumeEducation>
        <ResumeTechStack>
          <h3>Technical Proficciencies</h3>
          <div>
            <p>
              HTML, CSS3, React, Python, Django <br /> Adobe / Illustrator –
              Photoshop – InDesign - XD <br/> Google Ads/Analytics | CMS Systems | Firebase<br/>
              Figma | Whimsical | Gulp.js, Parcel.js, & Webpack | Node.js{" "}
            </p>
          </div>
        </ResumeTechStack>
      </ResumeWrapper>
    </>
  );
};

export default DevResume;
