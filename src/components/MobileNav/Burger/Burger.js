import React from 'react';
import { StyledBurger } from './BurgerStyles';

export const Burger = ({ ...props }) => {
  const { open, setOpen } = props;
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

// export default Burger;
