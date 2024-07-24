import { Container } from 'ozone-uikit';
import React, { ReactNode } from 'react';

const Navbar = ({ children }: { children: ReactNode }) => {
  return (
    <Container center className='mx-5 justify-between py-5'>
      {children}
    </Container>
  );
};

export default Navbar;
