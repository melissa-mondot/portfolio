import styled from 'styled-components';

export const StyledFooter = styled.div`
  margin-top: 5rem;
  position: absolute;
  right: 0;
  left: 0;
  padding-bottom: 5rem;
  padding-top: 2rem;
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.dark};
  footer {
    text-align: left;
    margin-left: 2rem;

    nav {
      display: flex;
      flex-direction: column;
      line-height: 2rem;
      font-variant: small-caps;
      font-size: ${({ theme }) => theme.fontSizes.normal};
      a {
        color: ${({ theme }) => theme.color.dark};
      }
      div {
        display: flex;
        flex-direction: row;
        margin-top: 1rem;
        margin-left: 0;
        a {
          color: ${({ theme }) => theme.color.dark};
          margin-right: 1rem;
          i {
            box-shadow: 6px 6px 18px #00000016, -6px -6px 18px #ffffff;
          }
        }
      }
    }
  }

  div.legal {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${({ theme }) => theme.color.text};
    margin: 0;
    p {
      color: ${({ theme }) => theme.color.secondary};
      text-align: right;
      font-size: ${({ theme }) => theme.fontSizes.small};
      padding-right: 1rem;
    }
  }
`;
