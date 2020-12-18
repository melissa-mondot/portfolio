import styled from 'styled-components';
import helloSplash from '../../imgs/helloSplash.svg';

export const BackgroundHero = styled.div`
  min-height: 300px;
  max-height: 60vh;
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
    margin: 1rem;
    padding: 1rem;
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
