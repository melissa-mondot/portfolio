import styled from 'styled-components';

export const StyledPreviousClients = styled.div`
  div.client {
    max-width: 600px;
    margin: auto;
    justify-content: center;
    a {
      svg {
        margin: 1rem auto;
        color: ${({ theme }) => theme.color.primary};
        box-shadow: 10px 10px 13px #00000070, -10px -10px 13px #3a3a3a70;
        border-radius: 100px;
      }
    }
  }
`;
