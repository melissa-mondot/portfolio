import styled from 'styled-components';

export const ProjectStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  div.info {
    margin: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    div.links {
      display: flex;
      justify-content: space-evenly;
      margin-bottom: 1rem;

      a {
        max-width: min-content;
        svg {
          color: ${({ theme }) => theme.color.primary};
          box-shadow: 10px 10px 13px #00000070, -10px -10px 13px #3a3a3a70;
          border-radius: 100px;
        }
      }
    }
  }
`;
