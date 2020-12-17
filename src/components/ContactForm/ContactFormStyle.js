import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: auto;
  label {
    display: flex;
    flex-direction: column;
    font-family: 'raleway';
    font-variant: small-caps;
    font-size: 1.25rem;
    text-align: left;
    margin: 0.5rem;
    padding-bottom: 1rem;
    letter-spacing: 3px;
    :first-child {
      margin-top: 2rem;
    }
    input {
      margin: 1rem 0 0 0;
      min-height: 3rem;
      border-radius: 8px;
      font-family: 'raleway';
      font-variant: small-caps;
      font-size: 1.5rem;
      border: ${({ theme }) => theme.color.dark};
      box-shadow: rgba(0, 0, 0, 0.44) 13px 13px 15px, rgba(58, 58, 58, 0.44) -13px -13px 15px;
    }

    textarea {
      height: 10rem;
      margin: 1rem 0 0 0;
      font-family: 'raleway';
      font-size: 1rem;
      border-radius: 8px;
      border: ${({ theme }) => theme.color.dark};
      box-shadow: rgba(0, 0, 0, 0.44) 13px 13px 15px, rgba(58, 58, 58, 0.44) -13px -13px 15px;
    }
  }
  .button {
    background-color: ${({ theme }) => theme.color.tertiary};
    width: 300px;
    margin: auto;
    min-height: 3rem;
    font-family: 'raleway';
    font-variant: small-caps;
    font-size: 1.25rem;
    letter-spacing: 3px;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.44) 13px 13px 15px, rgba(58, 58, 58, 0.44) -13px -13px 15px;
    border: ${({ theme }) => theme.color.dark};
    color: ${({ theme }) => theme.color.light};
  }
`;
export const ThankYouModal = styled.div`
  transition: all 3s ease-out;
`;
