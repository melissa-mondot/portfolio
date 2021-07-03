import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
// import { useOnClick } from '../../hooks';

const Nav = () => {
  const location = useLocation();
  const home =
    location.pathname === '/' ? null : (
      <NavLink className="navlink" to="/">
        Home
      </NavLink>
    );
  const resume =
    location.pathname === '/resume' ? null : (
      <NavLink className="navlink" to="/resume">
        Resume
      </NavLink>
    );
  const contact =
    location.path === '/contact' ? null : (
      <NavLink className="navlink" to="/contact">
        Contact Me
      </NavLink>
    );

  return (
    <>
      <nav className="main_nav">
        {home}
        {resume}
        {contact}
      </nav>
    </>
  );
};

export default Nav;
