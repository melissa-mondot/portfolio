import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { StyledMenu } from './MobileNavStyles';

export const MobileNavFlyout = ({ ...props }) => {
  const { open, setOpen } = props;
  const location = useLocation();
  const path = location.pathname;

  return (
    <StyledMenu open={open} setOpen={setOpen}>
      {path === '/' ? null : (
        <NavLink className="navlink" to="/">
          Home
        </NavLink>
      )}
      {path === '/resume' ? null : (
        <NavLink className="navlink" to="/resume">
          Resume
        </NavLink>
      )}
      {path === '/contact' ? null : (
        <NavLink className="navlink" to="/contact">
          Contact Me
        </NavLink>
      )}
    </StyledMenu>
  );
};

// export default MobileNavFlyout;
