import React from 'react';
import { StyledHeroInfo, BackgroundHero } from './HeroStyles';

const Hero = () => (
  <BackgroundHero>
    <StyledHeroInfo>
      <div>
        <p>developer</p>
        <p>creative</p>
        <p>marketer</p>
        <p>team player</p>
      </div>
    </StyledHeroInfo>
    {/* <hr /> */}
  </BackgroundHero>
);

export default Hero;
