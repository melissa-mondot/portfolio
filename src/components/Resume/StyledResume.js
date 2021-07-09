import styled from 'styled-components';

export const RenderButton = styled.button`
  background-color: ${({ theme }) => theme.color.secondary};
  border-radius: 10px;
  color: white;
  font-family: Rock Salt;
  padding: 1rem;
  letter-spacing: 2px;
`;

export const ResumeTab = styled.div`
  p {
    border-top: 2px outset darkgray;
    border-left: 2px outset darkgray;
    border-right: 2px outset darkgray;
    padding: 2px 5px;
    border-radius: 10px 10px 0 0;
    width: fit-content;
    margin-bottom: 0;
    margin-left: 3rem;
    background-color: #3c3939;
    svg {
      margin-right: 3px;
    }
  }
`;
export const ResumeWrapper = styled.div`
  max-width: 800px;
  background-color: #1d1c1c;
  min-height: 60vh;
  position: relative;
  margin: 0rem 3rem;
  border-left: 2px outset darkgray;
  border-bottom: 2px outset darkgray;
  border-right: 2px inset darkgray;
  padding: 1rem 1rem 2rem 2rem;
  padding-left: 4px;
  padding-bottom: 1rem;
  text-align: left;
  p {
    margin-top: 0;
    span.fakeExport {
      color: deeppink;
    }
    span.fakeComponent {
      color: lime;
    }
  }
  code.resumeDataKey {
    margin-top: 0;
    color: #7d12ff;
  }
  p.codeIndent,
  div.codeIndent {
    margin: 0 0 0 10px;
  }
  span.expKeys {
    color: #40a4ff;
  }
`;

export const RenderedWrapper = styled.div`
  max-width: 800px;
  margin: 3rem;
  h4.sections {
    font-align: left;
    font-variant: small-caps;
    font-size: 1.1rem;
    letter-spacing: 3px;
    color: ${({ theme }) => theme.color.secondary};
  }
`;
export const ResumeIntro = styled.div`
  h3,
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
  margin-left: 2rem;
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
    margin: 1rem 2rem -1rem 2rem;
  }
  p.renderedTitle {
    margin: 1rem 2rem -1rem 2rem;
    font-variant: small-caps;
  }
  small {
    margin 1rem 2rem 0 2rem;
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
`;
