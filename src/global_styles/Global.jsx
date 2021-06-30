import { createGlobalStyle } from 'styled-components';
// import "../index.scss"

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    max-width: 100vw;
    margin: auto;
    overflow-x: none;
    display: flex;
    justify-content: center;
    align-items: center; 
    background: ${({ theme }) => theme.color.dark};
    color: ${({ theme }) => theme.color.text};
    ${'' /* height: 100vh; */}
    text-rendering: optimizeLegibility;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    text-align:center;
  }

  h1, h3 {
    font-family: "Rock Salt";
  }
  h2, h4, h5, h6 {
    font-family: "Raleway"
  }
  small {
    display: block;
  }
  a {
    color: ${({ theme }) => theme.color.primary};
    text-decoration: none;
  }

hr {
  border-color: ${({ theme }) => theme.color.primary};
  max-width: 90vw;
  margin: 3rem auto;
  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    max-width: 1000px;
  }
  
}
.navlink {
	text-decoration: none;
	font-size: ${({ theme }) => theme.fontSizes.normal};
	padding: 1rem;
}
.text-block {
  text-align: justify;
}
.hideModal {
  display: none
}
.showModal {
  transform: translateX(0px);
  animation: 3s slidein;
}
`;
