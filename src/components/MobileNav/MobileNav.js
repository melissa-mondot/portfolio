import React from 'react';
import { Link } from 'react-router-dom';
import { Burger } from './Burger';
import { MobileNavFlyout } from './MobileNavFlyout';
import { MobileMenuHeader } from './MobileNavStyles';

const MobileNav = ({ ...props }) => {
  const { open, setOpen } = props;
  return (
    <>
      <MobileMenuHeader>
        <Burger open={open} setOpen={setOpen} />
        <Link to="/">
          <h1>Melissa Mondot</h1>
        </Link>
      </MobileMenuHeader>
      <MobileNavFlyout open={open} setOpen={setOpen} />
    </>
  );
};

export default MobileNav;
