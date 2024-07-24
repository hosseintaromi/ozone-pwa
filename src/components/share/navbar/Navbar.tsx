import { Container } from 'ozone-uikit';
import React, { ReactNode } from 'react';

const Navbar = ({ children }: { children: ReactNode }) => {
  return (
    <Container center className='mx-5 my-5 justify-between'>
      {children}
    </Container>
  );
};

export default Navbar;
