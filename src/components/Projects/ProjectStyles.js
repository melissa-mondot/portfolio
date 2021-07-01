import styled from 'styled-components';

export const ProjectStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: center;
  div.info {
    margin: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    div.links {
      display: flex;
      justify-content: space-evenly;
      margin: 1rem 0;

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
