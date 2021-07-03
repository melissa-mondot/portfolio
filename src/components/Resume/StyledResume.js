import styled from 'styled-components';

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
  background-color: #1d1c1c;
  min-width: 95vw;
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
    color: purple;
  }
  p.codeIndent,
  div.codeIndent {
    margin: 0 0 0 10px;
  }
  span.expKeys {
    color: blue;
  }
`;
