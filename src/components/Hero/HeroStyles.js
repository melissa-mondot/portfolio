import styled from 'styled-components';
import helloSplash from '../../imgs/helloSplash.svg';

export const BackgroundHero = styled.div`
  height: 100%;
  max-width: 1000px;
  margin: auto;
  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    border-radius: 10px;
    box-shadow: 10px 10px 13px #00000070, -10px -10px 13px #3a3a3a70;
  }
  background-image: url(${helloSplash});
  background-size: 260%;
  background-position-x: 95%;
  background-repeat: no-repeat;
`;

export const StyledHeroInfo = styled.div`
  display: flex;
  margin: 1rem auto;
  div {
    background-color: black;
    box-shadow: 10px 10px 13px #00000070, -10px -10px 13px #3a3a3a70;
    border-radius: 10px;
    margin: 1rem;
    padding: 1rem;
    @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
      // margin-left: 5rem;
    }
  p {
    width: 100%
    margin-top: 2rem;
    letter-spacing: 3px;
    font-size: ${({ theme }) => theme.fontSizes.normal};
    color: ${({ theme }) => theme.color.primary};
    line-height: 0.75rem;
  }
}
`;
