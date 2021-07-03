import React from 'react';
// import { NavLink, useLocation } from 'react-router-dom';
import { StyledFooter } from './FooterStyles';
import Nav from '../Nav';

const Footer = () => {
  // const location = useLocation();
  const d = new Date();
  return (
    <>
      <StyledFooter>
        <footer>
          <h2>Melissa Mondot</h2>
          <Nav />
          <div className="socialLinks">
            <a href="https://www.linkedin.com/in/melissamondot/">
              <i className="fab fa-linkedin fa-lg" />
            </a>
            <a href="https://github.com/melissa-mondot">
              <i className="fab fa-github-square fa-lg" />
            </a>
            <a href="https://twitter.com/thinkModes">
              <i className="fab fa-twitter-square fa-lg" />
            </a>
          </div>
        </footer>
        <div className="legal">
          <p>Melissa Mondot, All Rights Reserved, {d.getFullYear()}</p>
        </div>
      </StyledFooter>
    </>
  );
};

export default Footer;
