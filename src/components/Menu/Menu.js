import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './StyledMenu';
import Nav from '../Nav';

const Menu = ({ open }) => (
  <StyledMenu open={open}>
    <Nav />
  </StyledMenu>
);

export default Menu;

Menu.propTypes = {
  open: bool.isRequired,
};
