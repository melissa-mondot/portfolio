import styled from 'styled-components';

export const StyledIntroduction = styled.div`
  max-width: 500px;
  padding: 0 1rem;
  margin: auto;
  h3 {
    font-size: 1.5rem;
    line-height: 1.75rem;
    color: ${({ theme }) => theme.color.tertiary};
  }
  p {
    font-size: ${({ theme }) => theme.fontSizes.normal};
    text-align: justify;
  }
`;
