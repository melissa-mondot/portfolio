import React from 'react';
import { bool, func } from 'prop-types';
import { StyledBurger } from './BurgerStyles';

const Burger = ({ open, setOpen }) => (
  <StyledBurger open={open} onClick={() => setOpen(!open)}>
    <div />
    <div />
    <div />
  </StyledBurger>
);

export default Burger;

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};
