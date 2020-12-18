import React from 'react';
import { StyledHero, StyledHeroInfo, BackgroundHero } from './HeroStyles';

const Hero = () => (
  <>
    <StyledHero>
      <BackgroundHero />
    </StyledHero>
    <StyledHeroInfo>
      <p>developer</p>
      <p>creative</p>
      <p>marketer</p>
      <p>team player</p>
    </StyledHeroInfo>
    <hr />
  </>
);

export default Hero;
