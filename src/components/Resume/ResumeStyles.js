import styled from 'styled-components';

export const ResumeWrapper = styled.div`
  max-width: 500px;
  margin: auto;
`;

export const ResumeIntro = styled.div`
  h4 {
    text-align: right;
    padding-right: 2rem;
    margin-top: -1rem;
  }
  p {
    text-align: justify;
    padding: 0 2rem;
  }
`;

export const ResumeExpertise = styled.div`
  text-align: left;
  h3 {
    margin-left: 2rem;
    font-variant: small-caps;
    font-size: 1.1rem;
    letter-spacing: 3px;
    color: ${({ theme }) => theme.color.secondary};
  }
`;

export const ResumeExperience = styled.div`
  text-align: left;
  margin-right: 2rem;
  h3 {
    margin-left: 2rem;
    margin-bottom: -0.5rem;
    font-variant: small-caps;
    font-size: 1.1rem;
    letter-spacing: 3px;
    color: ${({ theme }) => theme.color.secondary};
  }
  h4 {
    margin-left: 2rem;
    color: ${({ theme }) => theme.color.primary};
    margin-bottom: -1rem;
  }
  p {
    margin-left: 2rem;
  }
  ul {
    margin-left: 1rem;
  }
`;

export const ResumeEducation = styled.div`
  text-align: left;
  margin-right: 2rem;
  h3 {
    margin-left: 2rem;
    margin-bottom: -0.5rem;
    font-variant: small-caps;
    font-size: 1.1rem;
    letter-spacing: 3px;
    color: ${({ theme }) => theme.color.secondary};
  }
  h4 {
    margin-left: 2rem;
    color: ${({ theme }) => theme.color.primary};
    margin-bottom: -1rem;
  }
  p {
    margin-left: 2rem;
  }
`;

export const ResumeTechStack = styled.div`
  text-align: center;
  margin-right: 2rem;
  h3 {
    margin-left: 2rem;
    margin-bottom: -0.5rem;
    font-variant: small-caps;
    font-size: 1.1rem;
    letter-spacing: 3px;
    color: ${({ theme }) => theme.color.secondary};
  }

  p {
    margin-left: 2rem;
  }
`;
