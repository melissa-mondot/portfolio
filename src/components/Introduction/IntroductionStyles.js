import styled from 'styled-components';

export const StyledIntroduction = styled.div`
  max-width: 500px;
  margin: 0 auto;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 720px;
    flex-direction: row;
    justify-content: space-between;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    h3 {
      font-size: 1.5rem;
      line-height: 1.75rem;
      color: ${({ theme }) => theme.color.tertiary};
    }
  }
  div {
    p {
      font-size: ${({ theme }) => theme.fontSizes.normal};
      text-align: justify;
      padding: 0 1rem;
      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        padding-left: 3rem;
      }
    }
    svg {
      box-shadow: 10px 10px 13px #00000070, -10px -10px 13px #3a3a3a70;
      border-radius: 100px;
    }
  }
`;
