import React from 'react';
import { StyledIntroduction } from './IntroductionStyles';
import Headshot from './headshot';

const Introduction = () => (
  <StyledIntroduction>
    <div>
      <h2>I am a full stack web developer from California,</h2>
      <h3>
        and I love to build
        <br />
        beautiful things.
      </h3>
      <Headshot />
    </div>
    <div>
      <p>
        From small business websites to larger collaborative app projects, I seek ways to be
        insightful and innovative. I am comfortable in leadership and support positions and lean
        into celebrating teamwork over individual successes. Are you looking to hire a dynamic and
        friendly web developer with a marketing background? Then I would be a great addition to your
        team!
      </p>
      <i className="fal fa-smile-beam fa-2x" />
    </div>
  </StyledIntroduction>
);

export default Introduction;
