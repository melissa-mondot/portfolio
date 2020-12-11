import styled from "styled-components";
import helloSplash from "../../imgs/helloSplash.svg";

export const StyledHero = styled.div`
`;

export const BackgroundHero = styled.div`
  height: 60vh;
  background: url(${helloSplash});
  background-size: 260%;
  background-position-x: right;
  background-repeat: no-repeat;
`;

export const StyledHeroInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 1rem auto;


  p {
    font-size: ${({ theme }) => theme.fontSizes.normal};
    color: ${({ theme }) => theme.color.secondary};
    line-height: 0.5rem;
  }
`;
