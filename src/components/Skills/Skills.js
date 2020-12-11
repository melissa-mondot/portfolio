import React from "react";
import { StyledSkills } from "./SkillsStyles.js";
import { Gauge } from "../atoms";
import smiley from "../../imgs/smiley.png";

const Skills = () => {
  const skills = {
    html: 90,
    css: 80,
    javascript: 70,
    react: 70,
    python: 50,
    node: 50,
    rest_api: 60,
  };

  return (
    <>
      <StyledSkills>
      <hr />
        <h3>Tech Stack</h3>
        <div>
          <div className="skill">
            <Gauge actual={skills.html} goal={100} />
            <div className="icon">
              <i className="fad fa-code fa-lg"></i>
            </div>
          </div>
          <div className="skill">
            <Gauge actual={skills.css} goal={100} />
            <div className="icon">
              <i className="fab fa-css3 fa-lg"></i>
            </div>
          </div>
          <div className="skill">
            <Gauge actual={skills.react} goal={100} />
            <div className="icon">
              <i className="fab fa-react fa-lg"></i>
            </div>
          </div>
          <div className="skill">
            <Gauge actual={skills.javascript} goal={100} />
            <div className="icon">
              <i className="fab fa-js-square fa-lg"></i>
            </div>
          </div>

          <div className="skill">
            <Gauge actual={skills.rest_api} goal={100} />
            <small>APIs</small>
          </div>
          <div className="skill">
            <Gauge actual={skills.python} goal={100} />
            <div className="icon">
              <i className="fab fa-python fa-lg"></i>
            </div>
          </div>
          <div className="skill">
            <Gauge actual={skills.node} goal={100} />
            <div className="icon">
              <i className="fab fa-node-js fa-lg"></i>
            </div>
          </div>
        </div>
        <hr />
        <div className="bonus">
          <h3>Bonus Skills</h3>
          <img src={smiley} alt="smiley face icon" />
        </div>
        <div className="bonus-list">
          <i className="fad fa-pen-nib fa-2x"></i>
          <p>
            Experience with Adobe suite, with an emphasis on Illustrator, XD,
            InDesign, and Photoshop
          </p>
          <i className="fab fa-figma fa-2x"></i>
          <p>Experienced in UX design with Figma, Whimsical and Adobe XD</p>
          <i className="fad fa-file-excel fa-2x"></i>
          <p>
            Skill beyond the basics with Google Sheets, including experience
            with the Sheets API
          </p>

          <i className="fad fa-analytics fa-2x"></i>
          <p>
            Experience with Google Analytics, but willing to learn more (I'm a
            beast with documentation
            <span role="img" aria-label="nerd emoji">
              🤓
            </span>
            )
          </p>
          <i className="fad fa-users fa-2x"></i>
          <p>
            I'm a natural introvert and observer, so I am particularly good at
            leading teams
          </p>
        </div>
        <hr />
      </StyledSkills>
    </>
  );
};

export default Skills;
